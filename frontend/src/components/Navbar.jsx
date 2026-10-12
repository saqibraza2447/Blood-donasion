
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import image from "../assets/download.png";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    // Admin pages par Navbar hide rahega
    if (
        location.pathname === "/admin" ||
        location.pathname === "/sidebar" ||
        location.pathname.startsWith("/usermanage") ||
        location.pathname.startsWith("/managedoner") ||
        location.pathname.startsWith("/managerequest") ||
        location.pathname.startsWith("/managebloodreq") ||
        location.pathname.startsWith("/dashboard")
    ) {
        return null;
    }

    // Active page check
    const isActive = (path) => {
        if (path === "/") {
            return location.pathname === "/";
        }

        return location.pathname === path ||
            location.pathname.startsWith(path + "/");
    };

    // Common navigation button style
    const navClass = (path) =>
        `relative py-2 font-semibold transition duration-300
        after:absolute after:left-0 after:-bottom-0.5
        after:h-[2px] after:bg-red-600
        after:transition-all after:duration-300
        ${
            isActive(path)
                ? "text-red-600 after:w-full"
                : "text-gray-600 hover:text-red-600 after:w-0 hover:after:w-full"
        }`;

    const goTo = (path) => {
        navigate(path);
        setMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white shadow-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <div
                    onClick={() => goTo("/")}
                    className="flex cursor-pointer items-center gap-3"
                >
                    <img
                        src={image}
                        alt="LifeDrop Logo"
                        className="h-14 w-14 rounded-2xl object-contain transition duration-300 hover:scale-105"
                    />

                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Life<span className="text-red-600">Drop</span>
                        </h1>

                        <p className="-mt-1 text-[11px] text-gray-500">
                            Donate. Connect. Save Lives.
                        </p>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-6 lg:flex">

                    <button
                        onClick={() => goTo("/")}
                        className={navClass("/")}
                    >
                        Home
                    </button>

                    <button
                        onClick={() => goTo("/findeblood")}
                        className={navClass("/findeblood")}
                    >
                        Find Blood
                    </button>

                    <button
                        onClick={() => goTo("/bacmonboner")}
                        className={navClass("/bacmonboner")}
                    >
                        Become a Donor
                    </button>

                    <button
                        onClick={() => goTo("/emargancy")}
                        className={`${navClass("/emargancy")} flex items-center gap-1.5`}
                    >
                        <Heart
                            size={17}
                            className={isActive("/emargancy") ? "animate-pulse" : ""}
                            fill={isActive("/emargancy") ? "currentColor" : "none"}
                        />
                        Emergency
                    </button>
                </div>

                {/* Login / Signup */}
                <div className="hidden items-center gap-3 lg:flex">
                    <button
                        onClick={() => goTo("/login")}
                        className={`rounded-lg border px-5 py-2.5 font-semibold transition duration-300 ${
                            isActive("/login")
                                ? "border-red-600 bg-red-50 text-red-600"
                                : "border-red-300 text-gray-700 hover:border-red-600 hover:bg-red-50 hover:text-red-600"
                        }`}
                    >
                        Login
                    </button>

                    <button
                        onClick={() => goTo("/registration")}
                        className={`rounded-lg px-5 py-2.5 font-semibold transition duration-300 ${
                            isActive("/registration")
                                ? "bg-red-700 text-white"
                                : "bg-red-600 text-white shadow-sm hover:bg-red-700 hover:shadow-md"
                        }`}
                    >
                        Sign Up
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 lg:hidden"
                    aria-label="Toggle navigation menu"
                >
                    {menuOpen ? <X size={25} /> : <Menu size={25} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="border-t border-gray-200 bg-white px-6 py-4 shadow-lg lg:hidden">
                    <div className="flex flex-col gap-3">

                        <button
                            onClick={() => goTo("/")}
                            className={`${navClass("/")} w-fit`}
                        >
                            Home
                        </button>

                        <button
                            onClick={() => goTo("/findeblood")}
                            className={`${navClass("/findeblood")} w-fit`}
                        >
                            Find Blood
                        </button>

                        <button
                            onClick={() => goTo("/bacmonboner")}
                            className={`${navClass("/bacmonboner")} w-fit`}
                        >
                            Become a Donor
                        </button>

                        <button
                            onClick={() => goTo("/emargancy")}
                            className={`${navClass("/emargancy")} flex w-fit items-center gap-1.5`}
                        >
                            <Heart size={17} />
                            Emergency
                        </button>

                        <hr className="my-1 border-gray-200" />

                        <button
                            onClick={() => goTo("/login")}
                            className={`rounded-lg border px-4 py-2.5 text-left font-semibold ${
                                isActive("/login")
                                    ? "border-red-600 text-red-600"
                                    : "border-gray-300 text-gray-700"
                            }`}
                        >
                            Login
                        </button>

                        <button
                            onClick={() => goTo("/registration")}
                            className={`rounded-lg px-4 py-2.5 text-left font-semibold text-white ${
                                isActive("/registration")
                                    ? "bg-red-700"
                                    : "bg-red-600 hover:bg-red-700"
                            }`}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
