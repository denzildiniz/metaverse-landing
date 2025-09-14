'use client';

import { useState, useEffect } from 'react';
import { FaTelegramPlane, FaBars, FaTimes } from 'react-icons/fa';
import { FaMeta } from 'react-icons/fa6';
import { IoIosCall } from 'react-icons/io';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            {/* Main Navbar */}
            <nav
                className={`fixed top-[30px] left-0 right-0 z-50 transition-all duration-300 `}
            >
                <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl ${isScrolled
                        ? 'bg-navy-primary/80 backdrop-blur-md shadow-navy'
                        : 'bg-transparent'
                    }`}>
                    <div className="flex items-center justify-between h-16">

                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center justify-between gap-4 md:gap-14">
                            <div className="flex items-center gap-3 z-[100]">
                                <FaMeta className="text-orange-500 text-3xl" />
                                <span className="text-2xl font-bold text-text-primary font-montserrat">metaverse</span>
                            </div>

                            <div className='hidden lg:flex '>
                                <div className="flex items-center gap-4">
                                    <button className="relative px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium font-montserrat transition-all duration-300 rounded-full border-none outline-none cursor-pointer shadow-lg hover:shadow-blue-400/60 transform hover:scale-105 hover:-translate-y-1 overflow-hidden
  before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/40 before:via-transparent before:to-white/30 before:opacity-60 hover:before:opacity-80 before:transition-opacity before:duration-300
  after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-r after:from-transparent after:via-black/10 after:to-transparent after:opacity-30">
                                        Login
                                    </button>

                                    <button className="relative px-6 py-2 bg-red-400 hover:bg-red-500 text-white font-medium font-montserrat transition-all duration-300 rounded-full border-none outline-none cursor-pointer shadow-lg hover:shadow-red-400/60 transform hover:scale-105 hover:-translate-y-1 overflow-hidden
  before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/40 before:via-transparent before:to-white/30 before:opacity-60 hover:before:opacity-80 before:transition-opacity before:duration-300
  after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-r after:from-transparent after:via-black/10 after:to-transparent after:opacity-30">
                                        Register
                                    </button>


                                </div>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {/* Contact Information */}
                            <div className="flex items-center space-x-4">
                                {/* Phone */}
                                <div className="flex items-center space-x-2">
                                    <IoIosCall className="text-white text-xl" />
                                    <span className="text-sm text-text-secondary font-montserrat font-bold capitalize">Call now:</span>
                                    <span className="text-sm text-orange-300 font-semibold font-montserrat">555 123 4567</span>
                                </div>

                                {/* Email */}
                                <div className="flex items-center space-x-2">
                                    <FaTelegramPlane className="text-white text-xl" />
                                    <span className="text-sm text-text-secondary font-montserrat font-bold capitalize">Telegram:</span>
                                    <span className="text-sm text-orange-300 font-semibold font-montserrat">user@example.com</span>
                                </div>
                            </div>
                        </div>

                        {/* Mobile/Tablet Hamburger Menu */}
                        <div className="lg:hidden">
                            <button
                                onClick={toggleSidebar}
                                className="text-text-secondary hover:text-text-primary p-2 transition-colors"
                            >
                                {isSidebarOpen ? (
                                    <FaTimes className="h-6 w-6" />
                                ) : (
                                    <FaBars className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile/Tablet Sidebar */}
            <div
                className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                    onClick={closeSidebar}
                ></div>

                {/* Sidebar */}
                <div
                    className={`absolute right-0 top-0 h-full w-80 bg-black shadow-navy-lg border-l border-navy-border transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="p-6">
                        {/* Close Button */}
                        <div className="flex justify-end mb-8">
                            <button
                                onClick={closeSidebar}
                                className="text-text-secondary hover:text-text-primary p-2 transition-colors"
                            >
                                <FaTimes className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <div className="space-y-6">
                            <button className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium font-montserrat transition-all duration-300 rounded-[30px] border-none outline-none cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-blue-500/40 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 text-center">
                                Login
                            </button>
                            <button className="w-full px-6 py-3 bg-red-400 hover:bg-red-500 text-white font-medium font-montserrat transition-all duration-300 rounded-[30px] border-none outline-none cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-red-400/40 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 text-center">
                                Register
                            </button>
                        </div>

                        {/* Contact Information */}
                        <div className="mt-8 space-y-4">
                            <h3 className="text-lg font-semibold text-text-primary font-montserrat mb-4">
                                Contact Us
                            </h3>

                            {/* Phone */}
                            <div className="flex flex-col space-y-2">
                                <div className="flex items-center space-x-2">
                                    <IoIosCall className="text-white text-xl" />
                                    <span className="text-sm text-text-secondary font-montserrat">Call now</span>
                                </div>
                                <span className="text-sm font-medium text-text-primary font-montserrat ml-6">
                                    +1 (555) 123-4567
                                </span>
                            </div>

                            {/* Email */}
                            <div className="flex flex-col space-y-2">
                                <div className="flex items-center space-x-2">
                                    <FaTelegramPlane className="text-white text-xl" />
                                    <span className="text-sm text-text-secondary font-montserrat">Email</span>
                                </div>
                                <span className="text-sm font-medium text-text-primary font-montserrat ml-6">
                                    user@example.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;