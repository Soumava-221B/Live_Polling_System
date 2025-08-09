import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/loginPage/LoginPage";
import TeacherLandingPage from "./Pages/teacherLanding/TeacherLandingPage";
import StudentLandingPage from "./Pages/studentLanding/StudentLandingPage";
import StudentPollPage from "./Pages/studentPoll/StudentPollPage";
import TeacherPollPage from "./Pages/teacherPoll/TeacherPollPage";
import PollHistoryPage from "./Pages/pollHistory/PollHistory";
import TeacherProtectedRoute from "./components/protectedRoute/TeacherProtect";
import StudentProtectedRoute from "./components/protectedRoute/StudentProtect";
import KickedOut from "./Pages/kickedOut/KickedOut";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/teacher-home-page"
          element={
            <TeacherProtectedRoute>
              <TeacherLandingPage />
            </TeacherProtectedRoute>
          }
        />
        <Route path="/student-home-page" element={<StudentLandingPage />} />
          <Route path="/kicked-out" element={<KickedOut />} />
        <Route
          path="/poll-question"
          element={
            <StudentProtectedRoute>
              <StudentPollPage />
            </StudentProtectedRoute>
          }
        />
        <Route
          path="/teacher-poll"
          element={
            <TeacherProtectedRoute>
              <TeacherPollPage />
            </TeacherProtectedRoute>
          }
        />
        <Route
          path="/teacher-poll-history"
          element={
            <TeacherProtectedRoute>
              <PollHistoryPage />
            </TeacherProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
