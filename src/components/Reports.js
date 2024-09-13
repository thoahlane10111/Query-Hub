import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { CSVLink } from "react-csv";

function Reports() {
  const [reportType, setReportType] = useState("csv"); // Default to CSV

  const handleGenerateReport = async () => {
    const data = await fetchReportData(); // Replace with your data-fetching logic

    if (reportType === "csv") {
      // CSV Report
      return (
        <CSVLink data={data} filename="report.csv">
          Download CSV
        </CSVLink>
      );
    } else if (reportType === "pdf") {
      // PDF Report
      const doc = new jsPDF();
      doc.text("Report Data", 10, 10); // Add actual data here
      doc.save("report.pdf");
    }
  };

  const fetchReportData = async () => {
    // Replace with your data-fetching logic
    return [
      ["Header1", "Header2"],
      ["Data1", "Data2"],
    ];
  };

  return (
    <div>
      <h2>Generate Report</h2>
      <select
        value={reportType}
        onChange={(e) => setReportType(e.target.value)}
      >
        <option value="csv">CSV</option>
        <option value="pdf">PDF</option>
      </select>
      <button onClick={handleGenerateReport}>Generate Report</button>
    </div>
  );
}

export default Reports;
