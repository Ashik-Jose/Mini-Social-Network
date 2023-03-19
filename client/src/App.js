import { BrowserRouter,Router,Route, Routes,Navigate } from "react-router-dom";
import AuthPage from './Pages/Auth/AuthPage';
import FriendProfile from "./Pages/FriendProfile/FriendProfile";
import Home from './Pages/Home/Home';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthPage/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/friendprofile" element={<FriendProfile/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
