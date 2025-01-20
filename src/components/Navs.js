import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "./Links.styled";
import { Link } from "react-scroll";
import ScrollReveal from "scrollreveal";
import "./Navs.css";

const LINKS = [
    { to: "/#about", text: "About", inside: true, to1: "about" },
    { to: "/experience", text: "Experience", inside: false },
    { to: "/#publications", text: "Publications", inside: true, to1: "publications" },
    { to: "/projects", text: "Projects", inside: true, to1: "projects" },
    { to: "/resume", text: "Resume", inside: false },
    { to: "/contact", text: "Contact", inside: false },
    { to: "/chatbot", text: "My own chatbot", inside: false },
];

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

const Navs = () => {
    const location = useLocation();

    const changeCss = () => {
        if (window.scrollY > 200 || location.pathname !== "/") {
            document.getElementById("nav-header").style.background = "rgba(0, 0, 0, 0.9)";
        } else {
            document.getElementById("nav-header").style.background = "transparent";
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeCss);
        return () => window.removeEventListener("scroll", changeCss);
    }, [location]);

    useEffect(() => {
        ScrollReveal().reveal(".nav-items li", {
            reset: false,
            distance: "60px",
            duration: 1000,
            delay: 50,
            origin: "top",
            easing: "ease-in",
        });
    }, []);

    return (
        <header>
            {/* Overlay for mobile navigation */}
            <div id="myNav" className="overlay" onClick={closeNav}>
                <ul className="overlay-content">
                    {LINKS.map((item) => (
                        <li key={item.to}>
                            {item.inside ? (
                                <>
                                    <Link
                                        to={item.to1}
                                        smooth={true}
                                        duration={500}
                                        onClick={closeNav}
                                    >
                                        {item.text}
                                    </Link>
                                </>
                            ) : (
                                <NavLink to={item.to} onClick={closeNav}>
                                    {item.text}
                                </NavLink>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Header Navigation */}
            <div className="nav-header" id="nav-header">
                <nav className="navigation">
                    {/* Logo */}
                    <NavLink to="/Abouabdallah/#home">
                        <img
                            src="/Abouabdallah/Images/signature.jpeg"
                            alt="logo"
                            className="logo"
                            id="website-logo"
                        />
                    </NavLink>
                    {/* Nav Items */}
                    <ul className="nav-items">
                        {LINKS.map((item) => (
                            <li key={item.to}>
                                {item.inside ? (
                                    <>
                                        <NavLink to={item.to}>{item.text}</NavLink>
                                        <Link
                                            activeClass="active"
                                            to={item.to1}
                                            smooth={true}
                                            duration={500}
                                        ></Link>
                                    </>
                                ) : (
                                    <NavLink
                                        to={item.to}
                                        className={
                                            item.to === location.pathname ? "active" : ""
                                        }
                                    >
                                        {item.text}
                                    </NavLink>
                                )}
                            </li>
                        ))}
                        {/* Mobile Menu Icon */}
                        <li className="icon-menu" id="icon-menu">
                            <FontAwesomeIcon
                                icon={faBars}
                                size="2x"
                                onClick={openNav}
                                className="font-open"
                            />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navs;
