import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../components/pages/Home";
import OurStaff from "../../components/pages/staff-pages/OurStaff";
import AdminLogin from "../../components/pages/admin-pages/AdminLogin";
import AdminPanel from "../../components/pages/admin-pages/AdminPanel";
import StaffISingle from "../../components/pages/staff-pages/StaffISingle";
import Contacts from "../../components/pages/contacts/Contacts";
import NewsPage from "../../components/pages/posts/news/NewsPage";
import EventsPage from "../../components/pages/posts/events/EventsPage";
import NewsIndividual from "../../components/pages/posts/news/NewsIndividual";
import EventsIndividual from "../../components/pages/posts/events/EventsIndividual";
import AboutUs from "../../components/pages/about-us/AboutUs";
const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/news" element={<NewsPage />} />
    <Route path="/news/:id" element={<NewsIndividual />} />
    <Route path="/events" element={<EventsPage />} />
    <Route path="/events/:id" element={<EventsIndividual />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/programs" element={"Programs"} />
    <Route path="/research" element={"Research"} />
    <Route path="/contacts" element={<Contacts />} />
    <Route path="/our-staff" element={<OurStaff />} />
    <Route path="/our-staff/:id" element={<StaffISingle />} />
    <Route path="/admin-login" element={<AdminLogin />} />
    <Route path="/admin-panel" element={<AdminPanel />} />
    <Route path="*" element={<Home />} />
  </Routes>
);

export default Router;
