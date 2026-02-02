import './App.css';
import { Routes, Route, Router } from 'react-router';
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
import CoursesPage from './pages/CoursesPage.jsx';  
import RegisterPage from './pages/RegisterPage.jsx';
import AddProgramPage from './pages/AddProgramPage.jsx';




function App() {
    return (<>
        <Header />
        <Routes>

            <Route path="/auth">
                <Route path="register" element={<RegisterPage />} />
                <Route path="login" element={<LoginPage />} />
            </Route>

            <Route path="/client">
                <Route index element={<Home />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="my-courses" element={<MyCoursesPage />} />
                <Route path="live-classes" element={<LiveClassPage />} />
                <Route path="course-player" element={<CoursePlayerPage />} />
                <Route path="courses" element={<CoursesPage />} />
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="nutrition" element={<NutritionPage />} />
            </Route>
            <Route path="/trainer" >
                  <Route index element={<Home />} />
                <Route path="profile" element={<TrainerProfilePage />} />
                <Route path="dashboard" element={<TrainerDashboardpage />} />
                <Route path="add-program" element={<AddProgramPage />} />
            </Route>

            <Route path="/course-detail" element={<CourseDetailPage />} />
        </Routes>

        <Footer />
    </>

    );
}

export default App;