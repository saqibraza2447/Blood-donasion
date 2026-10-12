
import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Heart,
    Mail,
    MapPin,
    Clock,
    ShieldCheck,
    Phone,
    ArrowRight,
    Droplet,
    HeartHandshake,
    ChevronRight,
} from "lucide-react";

import image1 from "../image/image.png";

export const Fouter = () => {
    const navigate = useNavigate();

    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "Find Blood", path: "/findeblood" },
        { name: "Become a Donor", path: "/bacmonboner" },
        { name: "Emergency Requests", path: "/emargancy" },
    ];

    const features = [
        {
            icon: ShieldCheck,
            text: "A community built around helping people find blood donors.",
        },
        {
            icon: Clock,
            text: "Explore blood requests and connect with requesters.",
        },
        {
            icon: Heart,
            text: "Every eligible donation can make a difference.",
        },
    ];

    return (
        <footer className="relative mt-16 overflow-hidden bg-[#101522] text-white">

           
            <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-14 sm:px-8 lg:px-10">

                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

                    <div>
                        <button
                            onClick={() => navigate("/")}
                            className="mb-5 flex items-center gap-3 text-left"
                        >
                            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white shadow-lg shadow-black/20">
                                <img
                                    src={image1}
                                    alt="LifeDrop Logo"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div>
                                <h3 className="text-2xl font-black tracking-tight">
                                    Life<span className="text-red-500">Drop</span>
                                </h3>
                                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[2px] text-slate-400">
                                    Blood Donation Network
                                </p>
                            </div>
                        </button>

                        <p className="max-w-xs text-sm leading-7 text-slate-400">
                            Connecting blood donors with people in need
                            and bringing communities together through
                            the power of giving.
                        </p>

                        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/5 px-3 py-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                            <span className="text-xs font-medium text-slate-300">
                                Connecting hearts, saving lives
                            </span>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white">
                            <span className="h-5 w-1 rounded-full bg-red-500" />
                            Quick Navigation
                        </h3>

                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <button
                                        onClick={() => navigate(link.path)}
                                        className="group flex items-center gap-2 text-left text-sm text-slate-400 transition duration-300 hover:translate-x-1 hover:text-red-400"
                                    >
                                        <ChevronRight
                                            size={15}
                                            className="text-red-500 transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white">
                            <span className="h-5 w-1 rounded-full bg-red-500" />
                            Contact & Support
                        </h3>

                        <div className="space-y-5">

                            <div className="flex items-start gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-500/10 bg-red-500/10 text-red-400">
                                    <Phone size={18} />
                                </div>
                                <div className="pt-0.5">
                                    <p className="text-sm font-semibold text-white">
                                        Emergency Helpline
                                    </p>
                                    <p className="mt-1 text-sm text-slate-400">
                                        1122
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-500/10 bg-red-500/10 text-red-400">
                                    <Mail size={18} />
                                </div>
                                <div className="min-w-0 pt-0.5">
                                    <p className="text-sm font-semibold text-white">
                                        Email Support
                                    </p>
                                    <a
                                        href="mailto:support@bloodconnect.org"
                                        className="mt-1 block break-all text-sm text-slate-400 transition hover:text-red-400"
                                    >
                                        support@bloodconnect.org
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-500/10 bg-red-500/10 text-red-400">
                                    <MapPin size={18} />
                                </div>
                                <div className="pt-0.5">
                                    <p className="text-sm font-semibold text-white">
                                        Our Community
                                    </p>
                                    <p className="mt-1 text-sm leading-6 text-slate-400">
                                        Bannu, Khyber Pakhtunkhwa, Pakistan
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About */}
                    <div>
                        <h3 className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white">
                            <span className="h-5 w-1 rounded-full bg-red-500" />
                            Why LifeDrop?
                        </h3>

                        <div className="space-y-5">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;

                                return (
                                    <div
                                        key={index}
                                        className="group flex items-start gap-3"
                                    >
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 text-red-400 transition duration-300 group-hover:bg-red-500 group-hover:text-white">
                                            <Icon size={17} />
                                        </div>

                                        <p className="pt-1 text-sm leading-6 text-slate-400 transition-colors group-hover:text-slate-200">
                                            {feature.text}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
                    <p className="text-xs leading-6 text-slate-500">
                        © {new Date().getFullYear()}{" "}
                        <span className="font-bold text-slate-300">
                            LifeDrop
                        </span>
                        . All rights reserved.
                    </p>

                    <div className="flex items-center gap-2 text-xs text-slate-400">
                        Made with
                        <Heart
                            size={14}
                            className="fill-red-500 text-red-500"
                        />
                        <span>for a healthier community</span>
                    </div>

                    <button
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            })
                        }
                        className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-red-500/30 hover:bg-red-500/10 hover:text-white"
                    >
                        Back to top
                        <ArrowRight
                            size={14}
                            className="-rotate-90 transition-transform group-hover:-translate-y-0.5"
                        />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Fouter;