import React from 'react';
import './App.css';
import { ListProfile } from "./modules/Profile"
import {OwnProfile} from "./modules/OwnProfile";
import {Route, Routes} from "react-router";
import Header from "./components/Layout/Header";



function App() {
    const allPage = () => (
      <>
            <Route path={"/"} element={<ListProfile/>}/>
            <Route path={"/toAddNewProfile"} element={<OwnProfile/>}/>
      </>
    )
  return (
    <div className="app container">
        <Header>
            <Routes>
                    {allPage()}
            </Routes>
        </Header>
    </div>
  );
}

export default App;
