⚡ AutoFlow – Web Automation Learning Project

AutoFlow is a web automation project built as part of my BCA learning.
The goal of this project was to understand how a web UI can trigger backend automation workflows.

Users submit basic data from a web form, which is then processed using n8n and stored in Google Sheets.

🚀 What This Project Does
- Takes user input (Name, Email, Task) from a web UI
- Sends the data to an n8n webhook
- n8n processes the data and adds a timestamp
- Data is stored in Google Sheets
- UI shows success or error feedback

🛠️ Tech Stack:
Frontend: React.js
Styling: CSS / Tailwind CSS
Automation: n8n
Data Storage: Google Sheets
API Communication: REST (Axios)

🧠 What I Learned
- How webhook-based automation works
- How to connect a React frontend with n8n workflows
- Handling API responses and errors in the UI
- Managing environment variables securely

⚠️ Notes
- This is a learning project, not a production application
- Webhook URLs are stored using environment variables
- The project helped me understand automation and system integration

💻 Setup (For Learning)
1. Clone the repository
   git clone https://github.com/Thomassabu166/AutoFlow.git

2. Navigate to client folder
   cd AutoFlow/client

3. Install dependencies
   npm install

4. Create a .env file and add required variables

5. Start the application
   npm start

👤 Author
Thomas Sabu  
BCA Student | Aspiring Software Developer
