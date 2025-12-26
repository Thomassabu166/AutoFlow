# ⚡ AutoFlow - Next-Gen Web Automation Platform

![React](https://img.shields.io/badge/Frontend-React.js-blue)
![Style](https://img.shields.io/badge/Style-Tailwind_CSS-38B2AC)
![Automation](https://img.shields.io/badge/Engine-n8n-ff6c37)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)

**AutoFlow** is a modern web application designed to bridge the gap between user interfaces and complex automation workflows. It allows users to trigger powerful automation tasks (like data logging, email notifications, etc.) directly from a simple, elegant web interface.

---

## 🚀 Key Features

*   **🎨 Modern Glassmorphism UI:** Built with React and CSS for a futuristic, transparent glass-effect interface.
*   **🤖 n8n Integration:** Powered by **n8n workflow automation engine** to handle backend logic.
*   **📄 Google Sheets Sync:** Automatically appends user data and task descriptions to Google Sheets in real-time.
*   **🔐 Secure Architecture:** Uses Environment Variables (`.env`) to secure Webhook URLs.
*   **⚡ Real-time Feedback:** Instant success/error notifications upon task execution.

---

## 🛠️ Tech Stack used

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | React.js | Component-based UI library |
| **Styling** | CSS / Tailwind | Glassmorphism design & responsive layout |
| **Automation** | n8n | Low-code workflow automation tool |
| **Database** | Google Sheets | Used as a real-time data store |
| **Connectivity** | Axios / REST API | Connects Frontend to n8n Webhooks |

---

## 🔄 System Architecture (How it Works)

1.  **User Input:** The user enters their Name, Email, and Task in the React Frontend.
2.  **API Trigger:** Upon clicking "Run Automation", React sends a secure `POST` request to the **n8n Webhook**.
3.  **Data Processing:** 
    *   n8n receives the data.
    *   Generates a **Timestamp** (Asia/Kolkata timezone).
    *   Maps the data fields.
4.  **Action:** n8n automatically appends the formatted data into a **Google Sheet**.
5.  **Response:** The system sends a success signal back to the UI to notify the user.
graph LR
A[User Interface] -- POST Request --> B(n8n Webhook)
B -- Process Data --> C{Automation Engine}
C -- Append Row --> D[Google Sheets]
C -- Success Response --> A
 💻 Installation & Setup
Follow these steps to run the project locally.
1. Clone the Repository
code
Bash
git clone https://github.com/YourUsername/AutoFlow-Final.git
cd AutoFlow-Final/client
2. Install Dependencies
code
Bash
npm install
3. Setup Environment Variables
Create a .env file in the client folder and add your n8n Webhook URL:
code
Env
REACT_APP_WEBHOOK_URL=http://localhost:5678/webhook/autoflow
4. Run the Project
code
Bash
npm start
The app will open at http://localhost:3000.
👨‍💻 Developed By
Thomas Sabu - Full Stack Developer
🛡️ License
This project is open-source and available under the MIT License.
