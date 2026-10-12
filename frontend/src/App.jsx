
import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Ragistration } from "./pages/Ragistration";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import CreateDoner from "./pages/CreateDoner";
import Navbar from "./components/Navbar";
import { Ai } from "./components/Ai";
import { Emargancy } from "./pages/Emargancy";
import { Allblood } from "./pages/Allblood";
import { Sidebar } from "./components/Sidebar";
import UserManage from "./pages/UserManage";
import { ManageDoner } from "./pages/ManageDoner";
import FindBlood from "./pages/FindBlood";
import { ManageRequste } from "./pages/ManageRequste";
import BecomeDonor from "./pages/BecomeDonor ";
import { Fouter } from "./components/Fouter";
import CreateFindblood from "./pages/CreateFindblood";
import { AllfindBlood } from "./pages/AllfindBlood";
import  ManageBloodRequest  from "./pages/ManageBloodRequest";
import AdminDashboard from "./pages/AdminDashboard";
import ScrollToTop from "./pages/Scrolltotop";
import  DonerUpdate  from "./pages/DonerUpdate";



function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      
        <ScrollToTop />
        <Ai />
        <Navbar />
        <Routes>
          
          <Route path="/registration" element={<Ragistration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/createdoner" element={<CreateDoner />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Ai" element={<Ai />} />
          <Route path="/emargancy" element={<Emargancy />} />
          <Route path="/allblood" element={<Allblood />} />
          <Route path="/usermanage" element={<UserManage />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/managedoner" element={<ManageDoner />} />
          <Route path="/findeblood" element={<FindBlood />} />
          <Route path="/managerequest" element={<ManageRequste />} />
          <Route path="/bacmonboner" element={<BecomeDonor />} />
          <Route path="/fouter" element={<Fouter />} />
          <Route path="/createfindblood" element={<CreateFindblood />} />
          <Route path="/allfindblood" element={<AllfindBlood />} />
          <Route path="/managebloodreq" element={<ManageBloodRequest />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/donerupdata/:id" element={<DonerUpdate/>}/>


          {/* home is clreare */}
          {/* findblood is clreare */}
          {/* becomeadoner is clreare */}
          {/* emargancy is clreare */}
          {/* createdoner is clreare */}
          {/* createfindblood is clreare */}
          {/* allfindblood is clreare */}
          {/* ceatedoner is clreare */}
          {/* allblood is clreare */}
          {/* dashboarde is clreare */}
          {/* managedoner is clreare */}
          {/* managerequest is clreare */}
          {/* emargancy is clreare */}
          {/* emargancy is clreare */}
          {/* emargancy is clreare */}
          {/* emargancy is clreare */}
          {/* emargancy is clreare */}








        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;