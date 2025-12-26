<<<<<<< HEAD

=======
>>>>>>> 3b3401f4df9de6a8907c701a76ade68d8f56a100
# ⚡ AutoFlow – Web Automation Platform

AutoFlow is a modern web automation platform that connects a clean React-based user interface with powerful backend automation using **n8n**.  
Users can trigger workflows like data logging and notifications directly from the web UI with real-time feedback.

---

## 🚀 Features

- 🎨 **Modern UI** – Glassmorphism-style React interface
- 🤖 **Automation Engine** – Powered by n8n workflows
- 📄 **Google Sheets Integration** – Stores user submissions in real time
- 🔐 **Secure Configuration** – Webhook URLs managed via environment variables
- ⚡ **Instant Feedback** – Success/error responses shown in UI

---

## 🛠️ Tech Stack

| Layer        | Technology            |
|-------------|-----------------------|
| Frontend    | React.js              |
| Styling     | CSS / Tailwind CSS    |
| Automation  | n8n                   |
| Data Store  | Google Sheets         |
| API         | REST (Axios)          |

---

## 🔄 System Architecture

1. User submits Name, Email, and Task from the UI  
2. React sends a POST request to the n8n webhook  
3. n8n processes the data and generates a timestamp  
4. Data is appended to Google Sheets  
5. Success response is sent back to the UI  


## 💻 Installation & Setup

### 1️⃣ Clone the repository

git clone https://github.com/Thomassabu166/AutoFlow.git
cd AutoFlow/client

2️⃣ Install dependencies
npm install
3️⃣ Setup environment variables
Create a .env file inside the client folder:

4️⃣ Run the project
bash
Copy code
npm start
The application will run at:

📁 Project Structure
Copy code
AutoFlow
├── client   # React frontend
└── server   # Backend / automation configs (if applicable)


👨‍💻 Author

Thomas Sabu
Full Stack Developer


🛡️ License

This project is licensed under the MIT License.
