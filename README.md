# 📇 Contact Management System

A full-stack **Contact Management System** that allows users to create, view, update, and delete contacts using a clean modal-based UI.  
Built with **React** on the frontend and **Flask** on the backend, following REST API principles.

---

## 🚀 Features

- Create new contacts (First Name, Last Name, Email)
- View all saved contacts in a tabular format
- Update existing contacts using a reusable modal form
- Delete contacts with instant UI refresh
- RESTful API integration between frontend and backend
- Persistent data storage using SQLite
- Clean state management with React Hooks

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- JavaScript (ES6+)
- HTML5, CSS3
- Fetch API

### Backend
- Flask
- Flask-SQLAlchemy
- Flask-CORS
- SQLite

---

## 📂 Project Structure

contact_management_system/
│

├── frontend/ # React frontend

│ ├── src/

│ │ ├── App.jsx

│ │ ├── ContactList.jsx

│ │ ├── ContactForm.jsx

│ │ └── main.jsx

│ └── package.json

│
├── backend/ # Flask backend

│ ├── main.py

│ ├── models.py

│ ├── config.py

│ └── requirements.txt

│

└── README.md


--


---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|------|---------|-------------|
| GET | `/contacts` | Fetch all contacts |
| POST | `/create_contact` | Create a new contact |
| PATCH | `/update_contact/<id>` | Update an existing contact |
| DELETE | `/delete_contact/<id>` | Delete a contact |

---

## ⚙️ Local Development

### Backend (Flask)
cd backend
pip install -r requirements.txt
python main.py

Backend runs on:

http://127.0.0.1:5000

Frontend (React):
cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173


🧠 Key Learnings:

-Managing component state and props in React
-Using useEffect for syncing props with state
-Building reusable forms for Create & Update operations
-Implementing REST APIs with Flask
-Connecting frontend and backend using HTTP methods
-Handling real-world bugs and debugging full-stack issues


📌 Future Improvements:

-Confirmation modal for delete action
-Form validation (email format, required fields)
-Environment variables for API URLs
-Authentication & user-based contacts
-Deployment on Vercel (frontend) and Render (backend)

