# Query Form Application

## Overview

The Query Form Application is a React-based web app designed for managing and analyzing customer queries in real-time. This application integrates with Firebase Firestore for data storage and supports generating reports in both CSV and PDF formats. It includes functionalities for submitting queries, searching through existing queries, and viewing real-time data updates.

## Features

- **Query Submission**: Allows users to submit queries with detailed information including client name, MSISDN, category, sub-category, status, and comments.
- **Search Functionality**: Enables searching of queries based on client name and MSISDN.
- **Report Generation**: Provides options to generate and download reports in CSV or PDF formats.
- **Real-Time Data Display**: Shows real-time date and time updates on the interface.
- **Dynamic Sub-Categories**: Includes a dynamic dropdown menu for sub-categories based on selected categories.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Firebase Firestore
- **Reporting**: `react-csv`, `jspdf`, `jspdf-autotable`
- **Styling**: Custom CSS

## Installation

To set up and run the Query Form application locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   Install dependencies:
   ```

bash
Copy code
npm install
Set up Firebase:

Create a Firebase project and configure Firestore.
Add your Firebase configuration to your project.
Run the application:

bash
Copy code
npm start
The application will be accessible at http://localhost:3000.

Configuration
Firebase Setup:

Add your Firebase configuration in a file named firebase-config.js in the src directory with the following structure:

javascript
Copy code
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
projectId: "YOUR_PROJECT_ID",
storageBucket: "YOUR_PROJECT_ID.appspot.com",
messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
Custom CSS:

Update QueryForm.css for custom styling as needed.
Usage
Submitting a Query:

Fill out the form with client name, MSISDN, category, sub-category, status, and comments, then click "Submit Query."
Searching Queries:

Enter client name and MSISDN in the search section and click "Search" to view results.
Generating Reports:

Select the date range and report format (CSV or PDF), then click "Generate Report" to download the report.
Contributing
Contributions to the Query Form Application are welcome! Please open an issue or submit a pull request to contribute.

Contact
For any inquiries or support, please contact:

Email: thoahlane10111@gmail.com
Phone Number: +266 585 88326
