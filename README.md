# Live Polling System Assignment

## 🎨 Design Reference

- **Design Link:** [Figma Design](https://www.figma.com/design/uhinheFgWssbxvlI7wtf59/Intervue-Assigment--Poll-system?node-id=0-1&t=Y5)

---

## 👥 Personas

### 1. **Teacher**

#### Features:
- ✅ Create a new poll
- ✅ View live polling results
- ✅ Ask a new question **only if**:
  - No question has been asked yet, or
  - All students have answered the previous question

---

### 2. **Student**

#### Features:
- ✅ Enter name on first visit (unique to each tab)
- ✅ Submit answers once a question is asked
- ✅ View live polling results after submission
- ✅ Maximum of 60 seconds to answer a question, after which results are shown automatically

---

## 🛠️ Technology Stack

- **Frontend:** React, react-bootstrap for styling
- **Backend:** Express.js with **Socket.io** for real-time polling functionality, DataBase: MongoDB

---

## Prerequisites
Make sure you have the following installed:
- Node.js
- npm
- MongoDB

# Local Deployment process

## For server side 
1. Clone the repository:
   ```bash
   git clone https://github.com/Soumava-221B/Live_Polling_System.git
   cd Live_Polling_System/poll-server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. To start MongoDB service locally (MacOS):
   ```bash
   sudo mongod --dbpath=/Users/<username>/data/db
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```
   
5. The backend will be available at:
   ```
   http://localhost:3000
   ```

## For front-end side 

1. Clone the repository:
   ```bash
   git clone https://github.com/Soumava-221B/Live_Polling_System.git
   cd Live_Polling_System/poll-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm run dev
   ```
   
5. The backend will be available at:
   ```
   http://localhost:5173
   ```
