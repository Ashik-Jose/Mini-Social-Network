import { BrowserRouter,Router,Route, Routes,Navigate } from "react-router-dom";
import AuthPage from './Pages/Auth/AuthPage';
import LoginPage from './Pages/Auth/LoginPage';
import Home from './Pages/Home/Home';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthPage/>}/>
      <Route path="/home" element={<Home/>}/>
      {/* <Route path="/" element={AuthPage}/> */}
    </Routes>
    </BrowserRouter>

    // <div className="App">
    //   <Home />
    // </div>
  );
}

export default App;
