import React from 'react';
import './App.css';
import { ListProfile } from "./modules/Profile"
import {OwnProfile} from "./modules/OwnProfile";
import {Route, Routes} from "react-router";



function App() {
    const allPage = () => (
        <>
            <Route path={"/profiles"} element={<ListProfile/>}/>
            <Route path={"/toAddNewProfile"} element={<OwnProfile/>}/>
        </>
    )
  return (
    <div className="app container">
        <Routes>
            {allPage()}
        </Routes>
    </div>
  );
}

export default App;
