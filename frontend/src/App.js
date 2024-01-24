// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import React from 'react';


// import { useAuthContext } from './hooks/useAuthContext';
// import propertyTable from './pages/Property'; // Make sure to import propertyTable

// // pages & components
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Navbar from './components/Navbar';

// function App() {
//   const { user } = useAuthContext();
//   // const navigate = useNavigate(); // Add this line


//   return (
//     <div className="App">
//       <Router>
//         <Navbar />
//         <div className="pages">
//           <Routes>
//             <Route 
//               path="/" 
//               element={user ? <Home /> : <Navigate to="/login" />} 
//             />
//             <Route 
//               path="/login" 
//               element={!user ? <Login /> : <Navigate to="/" />} 
//             />
//             <Route 
//               path="/signup" 
//               element={!user ? <Signup /> : <Navigate to="/" />} 
//             />
//             <Route 
//               path="/property" 
//               element={user ? <propertyTable /> : <Navigate to="/login" />} 
//             />
//           </Routes>
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import PropertyTable from './pages/Property'; // Make sure to import PropertyTable with PascalCase
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
            <Route path="/property" element={user ? <PropertyTable /> : <Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
