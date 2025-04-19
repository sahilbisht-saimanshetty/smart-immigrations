import './App.css';
import LandingPage from './components/pages/LandingPage';
import { BrowserRouter as Router, Routes, Route , Navigate } from "react-router-dom";
import RootLayout from './components/Layout/RootLayout';
import PrivacyPage from './components/pages/PrivacyPage';
import TermsOfUsePage from './components/pages/TermsAndUsePage';
function App() {

  const routes = [
    {
      path: "/uk",
      component: <LandingPage />,
    },
    {
      path: "/uk/privacy-policy",
      component: <PrivacyPage />,
    },
    {
      path:"/uk/terms-of-use",
      component : <TermsOfUsePage/>
    }
  ];


  return (
    <div className="App">
      <Router>
          <Routes>
          <Route path="/" element={<Navigate to="/uk" replace />} />
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
          </Routes>
      </Router>   
     </div>
  );
}

export default App;
