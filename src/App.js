import './App.css';
import LandingPage from './components/pages/LandingPage';
import { BrowserRouter as Router, Routes, Route , Navigate } from "react-router-dom";
import RootLayout from './components/Layout/RootLayout';

function App() {

  const routes = [
    {
      path: "/uk",
      component: <LandingPage />,
    },
  ];


  return (
    <div className="App">
      <Router>
        <RootLayout>
          <Routes>
          <Route path="/" element={<Navigate to="/uk" replace />} />
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
          </Routes>
        </RootLayout>
      </Router>   
     </div>
  );
}

export default App;
