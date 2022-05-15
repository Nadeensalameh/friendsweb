import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import { FirstPage } from './Home/Home';
import Navbar from './Navbar/Navbar';
import { CookAndShare } from './COOK-SHARE/CookAndShare';
import { WorldsCuisine } from './worlds-cuisine/WorldsCuisine';
import { myNavItemsArr } from './Navbar/NavbaritemsArr';
import { Signin } from './sign-in/signin';
import { Signup } from './sign-up/signUp';
import { UserProfile } from './User-Profile/UserProfile';
import AdminProfile from './User-Profile/AdminProfile';
import { Shows } from './shows/shows';
import { India } from './Countries/India/India';
import { Japan } from './Countries/Japan/Japan';
import { Turkey } from './Countries/Turkey/Turkey';
import { Brazil } from './Countries/brazil/Brazil';
import { Costarica } from './Countries/costarica/Costarica';
import { Egypt } from './Countries/egypt/Egypt';
import { France } from './Countries/france/France';
import { Greece } from './Countries/greece/Greece';
import { Italy } from './Countries/italy/Italy';
import { Morocco } from './Countries/morocco/Morocco';
import { SouthAfrica } from './Countries/SouthAfrica/SouthAfrica';
import { Mexico } from './Countries/mexico/Mexico';











function App() {
  return (
    <div className="App">
      <div className='navbarBrowser'>
        <Navbar navItemsArr={myNavItemsArr} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="Home" element={<FirstPage />} />
            <Route path="speciallyforyou" element={<CookAndShare />} />
            <Route path="WorldsCuisine" element={<WorldsCuisine />} />
            <Route path="signin" element={<Signin />} />
            <Route path="shows" element={<Shows />} />

          </Routes>
        </BrowserRouter>
        <BrowserRouter>
          <Routes>
            <Route path="signup" element={<Signup />} />
            <Route path="UserProfile" element={<UserProfile />} />
            <Route path="AdminProfile" element={<AdminProfile />} />
            <Route path="India" element={<India />} />
            <Route path="Japan" element={<Japan />} />
            <Route path="Turkey" element={<Turkey />} />
            <Route path="Mexico" element={<Mexico />} />
            <Route path="Brazil" element={<Brazil />} />
            <Route path="Costarica" element={<Costarica />} />
            <Route path="Italy" element={<Italy />} />
            <Route path="France" element={<France />} />
            <Route path="Greece" element={<Greece />} />
            <Route path="Egypt" element={<Egypt />} />
            <Route path="SouthAfrica" element={<SouthAfrica />} />
            <Route path="Morocco" element={<Morocco />} />



          </Routes>
        </BrowserRouter>

      </div>



    </div>
  );
}

export default App;
