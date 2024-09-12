import React, { useState, useEffect } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import "./QueryForm.css"; // Import CSS for styling

const QueryForm = () => {
  const [clientName, setClientName] = useState("");
  const [msisdn, setMsisdn] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [status, setStatus] = useState("");
  const [comments, setComments] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reportFormat, setReportFormat] = useState("CSV");
  const [currentDateTime, setCurrentDateTime] = useState(
    new Date().toLocaleString()
  );

  const db = getFirestore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "queries"), {
        clientName,
        msisdn,
        category,
        subCategory,
        status,
        comments,
        timestamp: Timestamp.fromDate(new Date()),
      });
      alert("Query submitted successfully!");
      setClientName("");
      setMsisdn("");
      setCategory("");
      setSubCategory("");
      setStatus("");
      setComments("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleReportGeneration = () => {
    alert(`Generating ${reportFormat} report from ${startDate} to ${endDate}`);
  };

  const subCategories = {
    Mortuary: [
      "Mortuary Services",
      "Funeral Arrangements",
      "Viewing and Visitation",
      "Cremation Services",
      "Burial Services",
      "Costs and Pricing",
      "Documentation and Legal Requirements",
      "Other",
    ],
    Payments: [
      "Premium Payments",
      "Payment Options",
      "Payment History",
      "Payment Assistance",
      "Automatic Payments",
      "Payment Confirmation",
      "Payment Receipts",
      "Other",
    ],
    Plan: [
      "Coverage Details",
      "Plan Benefits",
      "Plan Options",
      "Enrollment",
      "Plan Changes and Updates",
      "Plan Renewal",
      "Plan Cancellation",
      "Other",
    ],
    Service: [
      "Coverage Details",
      "Service Providers",
      "Service Authorization",
      "Claims",
      "Service Availability",
      "Service Quality",
      "Service Assistance",
      "Other",
    ],
    Transport: [
      "Coverage Details",
      "Transport Providers",
      "Transport Authorization",
      "Claims",
      "Transport Options",
      "Transport Assistance",
      "Transport Costs",
      "Other",
    ],
    Claims: [
      "Status of Claim",
      "Documentation Requirements",
      "Claim Denials or Rejections",
      "Process Overview",
      "Claims Disputes",
      "Claims Payments",
      "Policy Coverage Details",
      "Other",
    ],
    Coffins: [
      "Coffin Options",
      "Coffin Pricing",
      "Customization",
      "Delivery and Logistics",
      "Return Policies",
      "Quality and Durability",
      "Environmental Considerations",
      "Other",
    ],
    GeneralInformation: [
      "Policy Coverage Details",
      "Policy Benefits",
      "Policy Premiums",
      "Policy Documentation",
      "Policy Changes and Updates",
      "Claims Process",
      "Contact Information",
      "Other",
    ],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="query-form-container">
      <h2>Query Form</h2>
      <form onSubmit={handleSubmit} className="query-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="clientName">Client Name</label>
            <input
              type="text"
              id="clientName"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="msisdn">MSISDN</label>
            <input
              type="text"
              id="msisdn"
              value={msisdn}
              onChange={(e) => setMsisdn(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setSubCategory(""); // Clear subcategory when category changes
              }}
              required
            >
              <option value="">Select Category</option>
              <option value="Service">Service</option>
              <option value="Claims">Claims</option>
              <option value="Coffins">Coffins</option>
              <option value="GeneralInformation">General Information</option>
              <option value="Mortuary">Mortuary</option>
              <option value="Payments">Payments</option>
              <option value="Plan">Plan</option>
              <option value="Transport">Transport</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="subCategory">Sub-Category</label>
            <select
              id="subCategory"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              required
              disabled={!category}
            >
              <option value="">Select Sub-Category</option>
              {category &&
                subCategories[category].map((sub, index) => (
                  <option key={index} value={sub}>
                    {sub}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="">Select Status</option>
              <option value="Resolved">Resolved</option>
              <option value="Open">Open</option>
              <option value="Escalated">Escalated</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="comments">Comments</label>
            <textarea
              id="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              rows="3"
              required
            ></textarea>
          </div>
        </div>

        <button type="submit">Submit Query</button>
      </form>

      <div className="reports-section">
        <h2>Generate Reports</h2>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="reportFormat">Report Format</label>
            <select
              id="reportFormat"
              value={reportFormat}
              onChange={(e) => setReportFormat(e.target.value)}
              required
            >
              <option value="CSV">CSV</option>
              <option value="PDF">PDF</option>
            </select>
          </div>
        </div>
        <button type="button" onClick={handleReportGeneration}>
          Generate Report
        </button>
      </div>

      <div className="date-time">
        <p>Current Date and Time: {currentDateTime}</p>
      </div>
    </div>
  );
};

export default QueryForm;
