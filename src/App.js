import React from "react";
import { Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import Experiences from "./pages/Experiences";
import ResumeDis from "./pages/ResumeDis";
import About from "./components/home/About";
import Publications from "./components/home/Publications";
//import Testimonial from "./components/home/Testimonial";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";
import ChatbotPage from "./pages/chatbot_page"; // Import ChatbotPage component

const theme = {
  mainColors: {
    black: "#f0f8ff", //#000000
    white: "#f1f1f1",
    dark: "#5f9ea0", //#48C8F0
  },
};

// <Route path="/#testimonials" element={<Testimonial />} />
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/experience" element={<Experiences />} />
        <Route path="/resume" element={<ResumeDis />} />
        <Route path="/about" element={<About />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/chatbot" element={<ChatbotPage />} /> 
      </Routes>
    </ThemeProvider>
  );
}

export default App;
