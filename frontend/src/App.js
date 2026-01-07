import './App.css';
import Header from './components/layout/header.jsx';
import Home from './pages/home.jsx';
import Footer from './components/layout/Footer.jsx';
import Coursespage from './pages/Coursespages.jsx'
import Registerpage from './pages/Registerpage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import CoursePlayerPage from './pages/CoursePlayerPage.jsx';
import CourseDetailPage from './pages/CourseDetailPage.jsx'
import LiveClassPage from './pages/LiveClassPage.jsx';
import MyCoursesPage from './pages/MyCoursesPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import NutritionPage from './pages/NutritionPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import TrainerDashboardpage from './pages/TrainerDashboardpage.js';
import TrainerProfilePage from './pages/TrainerProfilePage.jsx';

function App() {
    return (
        <div className="App" >
            < Header />
            < CourseDetailPage />
            < Footer />
        </div>
    );
}

export default App;