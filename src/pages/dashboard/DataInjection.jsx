import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import DataService from '../../services/dataService';
import './DashboardPanels.css';

const DataInjection = ({ onAnalysisComplete }) => {
    const [uploadedFile, setUploadedFile] = useState(null);
    const [previewData, setPreviewData] = useState([]);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisResult, setAnalysisResult] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        setUploadedFile(file);

        // Simple CSV parser for preview
        const reader = new FileReader();
        reader.onload = () => {
            const text = reader.result;
            const rows = text.split('\n').slice(0, 6); // Preview first 5 rows
            const headers = rows[0].split(',');
            const data = rows.slice(1).map(row => {
                const values = row.split(',');
                return headers.reduce((obj, header, i) => {
                    obj[header.trim()] = values[i]?.trim();
                    return obj;
                }, {});
            });
            setPreviewData(data);
        };
        reader.readAsText(file);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'text/csv': ['.csv'] } });

    const handleAnalyze = async () => {
        setIsAnalyzing(true);
        try {
            // Simulate upload processing and screening
            const result = await DataService.uploadAndScreen(uploadedFile);
            setAnalysisResult(result);
            if (onAnalysisComplete) onAnalysisComplete(result);
        } catch (error) {
            console.error("Analysis failed:", error);
        } finally {
            setIsAnalyzing(false);
        }
    };

    return (
        <div className="panel-card data-injection-panel">
            <div className="panel-card-header">
                <h3>Data Injection (Give-to-Get)</h3>
            </div>

            {!analysisResult ? (
                <div className="injection-content">
                    <p className="injection-desc">
                        Upload your supplier list (CSV) to screen against our Global Risk Map.
                        Identify hidden risks in your Tier 1 and Tier 2 network immediately.
                    </p>

                    <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
                        <input {...getInputProps()} />
                        {uploadedFile ? (
                            <div className="file-info">
                                <span className="file-icon">📄</span>
                                <span className="file-name">{uploadedFile.name}</span>
                                <span className="file-size">{(uploadedFile.size / 1024).toFixed(1)} KB</span>
                            </div>
                        ) : (
                            <div className="drop-prompt">
                                <span className="upload-icon">☁️</span>
                                <p>Drag & drop your CSV here, or click to select</p>
                                <span className="file-types">Supports: supplier_name, country, tier</span>
                            </div>
                        )}
                    </div>

                    {previewData.length > 0 && (
                        <div className="csv-preview">
                            <h4>Preview</h4>
                            <div className="table-scroll">
                                <table className="data-table">
                                    <thead>
                                        <tr>
                                            {Object.keys(previewData[0]).map(h => <th key={h}>{h}</th>)}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {previewData.map((row, i) => (
                                            <tr key={i}>
                                                {Object.values(row).map((val, j) => <td key={j}>{val}</td>)}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    <div className="injection-actions">
                        <button
                            className="btn-primary analyze-btn"
                            disabled={!uploadedFile || isAnalyzing}
                            onClick={handleAnalyze}
                        >
                            {isAnalyzing ? 'Analyzing Network...' : 'Analyze Risks'}
                        </button>
                    </div>
                </div>
            ) : (
                <div className="analysis-result">
                    <div className="result-header">
                        <span className="success-icon">✅</span>
                        <div>
                            <h4>Analysis Complete</h4>
                            <p>Scanned {analysisResult.totalRead} entities against 18 global watchlists.</p>
                        </div>
                    </div>

                    <div className="risk-summary-cards">
                        <div className="risk-card critical">
                            <span className="risk-count">{analysisResult.riskCounts.critical}</span>
                            <span className="risk-label">Critical Risks</span>
                        </div>
                        <div className="risk-card high">
                            <span className="risk-count">{analysisResult.riskCounts.high}</span>
                            <span className="risk-label">High Risks</span>
                        </div>
                        <div className="risk-card medium">
                            <span className="risk-count">{analysisResult.riskCounts.medium}</span>
                            <span className="risk-label">Medium Risks</span>
                        </div>
                    </div>

                    <div className="view-results-action">
                        <p>Detailed report generated. View the specific hits in your Value Chain graph.</p>
                        <button className="btn-secondary" onClick={() => setAnalysisResult(null)}>Upload New File</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DataInjection;
