import React from "react";
import { useNavigate } from "react-router-dom";
import {
    UserRound,
    UsersRound,
    FileText,
    Droplet,
    Settings,
    LogOut,
    LayoutDashboard,
    HeartPulse,
    ChevronRight,
    ShieldCheck
} from "lucide-react";

import image from "../assets/download.png";

export const Sidebar = () => {
    const navigate = useNavigate();

    const buttonStyle =
        "group flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-red-50 hover:text-red-600";

    return (
        <aside className="fixed left-4 top-4 z-50 flex h-[calc(100vh-32px)] w-[270px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/50">

            {/* Logo Header */}
            <div className="border-b border-slate-100 px-5 py-6">
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 ring-1 ring-red-100">
                        <img
                            src={image}
                            alt="LifeDrop Logo"
                            className="h-10 w-10 object-contain"
                        />
                    </div>

                    <div>
                        <h2 className="text-xl font-extrabold tracking-tight text-slate-900">
                            Life<span className="text-red-600">Drop</span>
                        </h2>

                        <p className="mt-1 text-[10px] font-bold uppercase tracking-[2px] text-slate-400">
                            Admin Console
                        </p>
                    </div>
                </div>
            </div>

            {/* Admin Profile */}
            <div className="mx-4 mt-5 flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/80 p-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                    <ShieldCheck size={21} />
                </div>

                <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-slate-800">
                        System Admin
                    </p>

                    <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                        <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                        Administrator
                    </p>
                </div>
            </div>

            {/* Navigation Menu */}
            <nav className="mt-7 flex-1 overflow-y-auto px-4">
                <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[2px] text-slate-400">
                    Main Menu
                </p>

                <div className="space-y-1.5">

                    {/* Dashboard */}
                    <button
                        onClick={() => navigate("/dashboard")}
                        className={buttonStyle}
                    >
                        <span className="flex items-center gap-3">
                            <LayoutDashboard size={19} className="text-slate-400 transition-colors group-hover:text-red-600" />
                            Dashboard
                        </span>

                        <ChevronRight size={16} className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    </button>

                    {/* Manage Donors */}
                    <button
                        onClick={() => navigate("/managedoner")}
                        className={buttonStyle}
                    >
                        <span className="flex items-center gap-3">
                            <UserRound size={19} className="text-slate-400 transition-colors group-hover:text-red-600" />
                            Manage Donors
                        </span>

                        <ChevronRight size={16} className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    </button>

                    {/* Manage Users */}
                    <button
                        onClick={() => navigate("/usermanage")}
                        className={buttonStyle}
                    >
                        <span className="flex items-center gap-3">
                            <UsersRound size={19} className="text-slate-400 transition-colors group-hover:text-red-600" />
                            Manage Users
                        </span>

                        <ChevronRight size={16} className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    </button>

                    {/* Manage Requests */}
                    <button
                        onClick={() => navigate("/managerequest")}
                        className={buttonStyle}
                    >
                        <span className="flex items-center gap-3">
                            <FileText size={19} className="text-slate-400 transition-colors group-hover:text-red-600" />
                            Manage Requests
                        </span>

                        <ChevronRight size={16} className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    </button>

                    {/* Find Blood Requests */}
                    <button
                        onClick={() => navigate("/managebloodreq")}
                        className={buttonStyle}
                    >
                        <span className="flex items-center gap-3">
                            <Droplet size={19} className="text-slate-400 transition-colors group-hover:text-red-600" />
                            Find Blood Requests
                        </span>

                        <ChevronRight size={16} className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    </button>

                    {/* Settings */}
                    <button
                        onClick={() => navigate("/admin/settings")}
                        className={buttonStyle}
                    >
                        <span className="flex items-center gap-3">
                            <Settings size={19} className="text-slate-400 transition-colors group-hover:text-red-600" />
                            Settings
                        </span>

                        <ChevronRight size={16} className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    </button>

                </div>

               
            </nav>

            {/* Bottom Logout */}
            <div className="border-t border-slate-100 bg-white p-4">
                <button
                    onClick={() => navigate("/")}
                    className="group flex w-full items-center gap-3 rounded-xl border border-red-100 bg-red-50 px-3 py-3 text-sm font-semibold text-red-600 transition-all duration-200 hover:border-red-600 hover:bg-red-600 hover:text-white"
                >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-red-600 shadow-sm transition-colors group-hover:bg-white/15 group-hover:text-white">
                        <LogOut size={18} />
                    </div>

                    <span>Logout</span>

                    <ChevronRight size={16} className="ml-auto rotate-180 opacity-60" />
                </button>

                <p className="mt-3 text-center text-[10px] font-medium tracking-wide text-slate-400">
                    LIFEDROP ADMIN PANEL • v1.0
                </p>
            </div>

        </aside>
    );
};

export default Sidebar;