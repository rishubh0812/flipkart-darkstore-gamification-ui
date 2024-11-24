import React, {useEffect, useState} from 'react';
import darkstoreService from './api/darkstore';
// import LoginPage from './Pages/Login/Login';
import Layout from './Pages/Layout/Layout';
import WinnersPage from './Pages/Winners/Winners';
import Dashboard from './Components/Dashboard/Dashboard';
import ControlUnit from './Pages/ControlUnit/ControlUnit';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from './Pages/Login/Login';
import StoreDetails from './Pages/StoreDetails/StoreDetails';
import {useSelector, useDispatch} from 'react-redux';
import {setToastVisibility} from './store/actions/toastActions';
import Toast from './Utils/Toast/Toast';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CaseStudies from './Pages/CaseStudies/CaseStudies';

function App() {
  const dispatch = useDispatch();
  const toastVisible = useSelector(state => state.toast.visible);
  const userRole = useSelector(state => state.user.role);
  const [darkstoreData, setDarkstoreData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await darkstoreService.getDarkstoreData();
        setDarkstoreData(data);
      } catch (err) {
       console.log(err); 
      }
    };

    fetchData();
  },[])
  return (
    <div className="App">
      {toastVisible && (
        <Toast
          role={userRole}
          onClose={() => dispatch(setToastVisibility(false))}
        />
      )}
       <ToastContainer />
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/winners" element={<WinnersPage/>} />
        <Route path="/control-unit" element={<ControlUnit/>} />
      </Routes>
    </BrowserRouter> */}
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginPage/>}/>
                    <Route path="/layout" element={<Layout/>}>
                        <Route path="dashboard" element={<Dashboard darkstoreData={darkstoreData}/>}/>
                        <Route path="winners" element={<WinnersPage/>}/>
                        <Route path="control-unit" element={<ControlUnit/>}/>
                        <Route path="store-details" element={<StoreDetails/>}/>
                        <Route path="case-studies" element={<CaseStudies/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
    </div>
)
    ;
}

export default App;
