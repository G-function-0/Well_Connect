import './App.css';
import {Routes , Route} from 'react-router';
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




function App() {
    return (<>
        <Header />

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/courses" element={<CoursesPage/>} />
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/dashboard" element={<DashboardPage/>} />
            <Route path="/nutrition" element={<NutritionPage/>} />
            
        </Routes>

        <Footer />
    </>

    );
}

export default App;