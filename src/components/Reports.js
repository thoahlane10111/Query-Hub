import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { CSVLink } from "react-csv";

function Reports() {
  const [reportType, setReportType] = useState("csv"); // Default to CSV

  const handleGenerateReport = async () => {
    const data = await fetchReportData(); // Replace with your data-fetching logic

    if (reportType === "pdf") {
      const doc = new jsPDF();
      doc.text("Query Report", 10, 10); // Add title to the PDF

      data.forEach((row, index) => {
        doc.text(`${index + 1}: ${row[0]}, ${row[1]}`, 10, 20 + index * 10);
      });

      doc.save("report.pdf"); // Download the PDF report
    }
  };

  const fetchReportData = async () => {
    // Replace this mock data with actual fetching logic
    return [
      ["Data1", "Data2"],
      ["Data3", "Data4"],
      ["Data5", "Data6"],
    ];
  };

  return (
    <div>
      <h2>Generate Reports</h2>
      <label htmlFor="reportType">Choose Report Type:</label>
      <select
        id="reportType"
        value={reportType}
        onChange={(e) => setReportType(e.target.value)}
      >
        <option value="csv">CSV</option>
        <option value="pdf">PDF</option>
      </select>

      <br />

      {reportType === "csv" ? (
        <CSVLink
          data={[
            ["Data1", "Data2"],
            ["Data3", "Data4"],
            ["Data5", "Data6"],
          ]}
          filename={"report.csv"}
          className="btn"
          target="_blank"
        >
          Download CSV Report
        </CSVLink>
      ) : (
        <button onClick={handleGenerateReport}>Download PDF Report</button>
      )}
    </div>
  );
}

export default Reports;
