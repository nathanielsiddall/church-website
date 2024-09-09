import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'primereact/resources/themes/fluent-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import Navigation from './components/Navigation';
import Hero from "./components/Hero";


import AboutUs from './pages/AboutUs';
import WhatWeBelieve from './pages/WhatWeBelieve';
import OurMedia from './pages/OurMedia';
import ContactUs from './pages/ContactUs';
import Give from './pages/Give';
import Blog from './pages/Blog';
import OurSchedule from './pages/OurSchedule';
import Index from "./pages/Index";
import BlogPost from "./pages/BlogPost";



function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/what-we-believe" element={<WhatWeBelieve />} />
                <Route path="/our-media" element={<OurMedia />} />
                <Route path="/contact-us" element={<ContactUs />} />
                {/*<Route path="/give" element={<Give />} />*/}
                <Route path="/blog/:postIndex" element={<BlogPost />} />
                <Route path="/learn" element={<Blog />} />
                <Route path="/our-schedule" element={<OurSchedule />} />
            </Routes>
        </Router>

    );
}

export default App;
