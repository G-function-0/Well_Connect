import './App.css';
import { Routes, Route } from 'react-router';
import Header from './components/layout/Header.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/layout/Footer.jsx';
import LoginPage from './pages/LoginPage.jsx';
import CoursePlayerPage from './pages/CoursePlayerPage.jsx';
import CourseDetailPage from './pages/CourseDetailPage.jsx';
import LiveClassPage from './pages/LiveClassPage.jsx';
import MyCoursesPage from './pages/MyCoursesPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import NutritionPage from './pages/NutritionPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import TrainerDashboardpage from './pages/TrainerDashboardpage.jsx';
import TrainerProfilePage from './pages/TrainerProfilePage.jsx';
import CoursesPage from './pages/Coursespages.jsx';
import RegisterPage from './pages/Registerpage.jsx';
import AddProgramPage from './pages/AddProgramPage.jsx';




function App() {
    return (<>
        <Header />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/nutrition" element={<NutritionPage />} />
            <Route path="/CourseDetail" element={<CourseDetailPage />} />
            <Route path="/Profile" element={<ProfilePage />} />
            <Route path="my-courses" element={<MyCoursesPage />} />
            <Route path="live-classes" element={<LiveClassPage />} />
            <Route path="TrainerDashboard" element={<TrainerDashboardpage />} />
            <Route path="TrainerProfile" element={<TrainerProfilePage />} />
            <Route path="course-player" element={<CoursePlayerPage />} />
            <Route path="add-program" element={<AddProgramPage />} />

        </Routes>

        <Footer />
    </>

    );
}

export default App;