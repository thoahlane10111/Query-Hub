# QueryHub Application

QueryHub is a web-based query logging system designed for Sentebale GAP Funeral Services. It provides an efficient way to log and manage customer queries while generating real-time reports and offering user authentication for secure access. The application is built using **React** for the frontend and **Firebase** for real-time data storage.

## Features

- **Query Logging**: Log customer queries with fields for client name, MSISDN, query category, and query status.
- **Query Categories**: Dropdown options including `Service`, `Claims`, `Coffins`, `General Information`, `Mortuary`, `Payments`, `Plan`, `Transport`.
- **Query Status**: Dropdown options for managing the status of a query, including `Resolved`, `Open`, and `Escalated`.
- **Real-Time Reports**: Generate reports filtered by date and query category, with options to export reports as **CSV** or **PDF**.
- **User Authentication**: Firebase Auth for secure user login and account management.
- **Real-Time Data Display**: Live date and time displayed in the app interface.
- **Stylish UI**: A professional military green-themed interface with dynamic elements and real-time charts.

## Technologies Used

- **Frontend**: React (JavaScript)
- **Backend/Database**: Firebase (version 10.13.1) with Firestore for real-time data storage
- **Authentication**: Firebase Auth for user login/logout functionality
- **Reports Export**: CSV and PDF generation for reports
- **Version Control**: Git/GitHub for project management

## Installation and Setup

To get a local copy of the project up and running, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/QueryHub.git
    ```

2. Navigate to the project directory:
    ```bash
    cd QueryHub
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up Firebase:
    - Go to [Firebase Console](https://console.firebase.google.com/), create a new project, and configure Firestore and Firebase Auth.
    - Copy your Firebase configuration and add it to the project in the Firebase initialization file (e.g., `firebaseConfig.js`).

5. Start the development server:
    ```bash
    npm start
    ```

## How to Use

1. **Login**: Use your Firebase credentials to log in to the system.
2. **Log Queries**: Once logged in, fill in the query form (Client Name, MSISDN, Query Category, and Status) and click `Submit Query`.
3. **Generate Reports**: Use the reports section to filter by date and category and export the report as **CSV** or **PDF**.
4. **View Real-Time Data**: See the live queries displayed on the dashboard with real-time charts and status updates.

## Future Enhancements

- **Multi-user Support**: Allow multiple unique users to have individual accounts.
- **Dashboard Enhancements**: Additional widgets and analytics to improve query monitoring.
- **Advanced Search**: Search through logged queries using advanced filters.

## Contribution

If you would like to contribute to QueryHub:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, feel free to contact me at:  
**Name**: Mabilikoe Thoahlane  
**Email**: thoahlane10111@gmail.com

