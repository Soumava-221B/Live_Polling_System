# Live Polling System Assignment

## 🎨 Design Reference

- **Design Link:** [Figma Design](https://www.figma.com/design/uhinheFgWssbxvlI7wtf59/Intervue-Assigment--Poll-system?node-id=0-1&t=Y5)
- **Design Preview:** *(Insert design image screenshot here — ideally from the Figma file for quick reference)*

> ⚠️ Please ensure the UI in your assignment submission follows the shared Figma design without any deviations.

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

- **Frontend:** React (Redux optional but preferred)
- **Backend:** Express.js with **Socket.io** for real-time polling functionality

---

## ✅ Must-Have Requirements

- [x] Functional system with all core features working
- [x] Hosting for both frontend and backend
- [x] Teacher can create polls and students can answer them
- [x] Both teacher and student can view poll results

---

## 💡 Good to Have

- ⏱️ Configurable poll time limit by teacher
- 🗑️ Option for teacher to remove a student
- 🎨 Well-designed user interface

---

## ⭐ Bonus Features (Brownie Points)

- 💬 Chat popup for interaction between students and teachers
