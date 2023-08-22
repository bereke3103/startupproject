import React from 'react';
import './App.css';
import { ListProfile } from "./modules/ListProfile"
import {AddingNewProfile} from "./modules/AddingNewProfile";
import {Route, Routes} from "react-router";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import PersonalProfile from "./modules/PersonalProfile/components/PersonalProfile";



function App() {
    const allPage = () => (
      <>
            <Route path={"/"} element={<ListProfile/>}/>
            <Route path={"/toAddNewProfile"} element={<AddingNewProfile/>}/>
            <Route path={"/personalProfile/:id"} element={<PersonalProfile/>}/>
      </>
    )
  return (
      <>
          <Header/>
            <div className="app container">
                <Layout>
                    <Routes>
                            {allPage()}
                    </Routes>
                </Layout>
            </div>
      </>
  );
}

export default App;
