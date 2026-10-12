
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    Droplet,
    CalendarDays,
    AlertTriangle,
    FileText,
    Hash,
    ArrowRight,
    RefreshCw,
    Search,
    HeartHandshake,
    X,
    Phone,
    MapPin,
    ShieldCheck,
    Heart,
} from "lucide-react";
import { motion } from "framer-motion";
import { Fouter } from "../components/Fouter";



export const AllfindBlood = () => {
    const navigate = useNavigate();
    const [selectedBlood, setSelectedBlood] = useState(null);

    const [allblood, setallblood] = useState([]);

    const handleSubmite = async () => {
        try {
            const response = await axios.get(
                import.meta.env.VITE_Backend_url + "/findboner/allfind"
            );

            const requests =
                response.data.bloodrequests ??
                response.data.findblood ??
                response.data.requests ??
                response.data.data ??
                [];

            setallblood(Array.isArray(requests) ? requests : []);
        } catch (error) {
            console.error("Get Blood Error:", error);
            setallblood([]);
        }
    };

    useEffect(() => {
        handleSubmite();
    }, []);

    return (
        <div className="min-h-screen bg-[#fffafb]  pt-20">
            <div className="border-b border-slate-200 bg-[#fffafb]">
                <div className="mx-auto max-w-7xl px-5 py-8">
                    <div className="relative overflow-hidden rounded-[28px] border border-red-100 bg-white px-6 py-8 shadow-[0_15px_50px_rgba(220,38,38,0.08)] md:px-9 md:py-10">

                        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-100/70 blur-3xl" />

                        <div className="pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-rose-100/60 blur-3xl" />

                        <div className="pointer-events-none absolute right-[35%] top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-red-50 blur-2xl" />

                        <div className="pointer-events-none absolute right-8 top-8 h-20 w-20 rounded-full border border-red-100/70" />
                        <div className="pointer-events-none absolute right-14 top-14 h-8 w-8 rounded-full bg-red-100/50" />

                        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                            <div className="max-w-3xl">

                                <motion.div
                                    initial={{ opacity: 0, y: -15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="mb-5 flex items-center gap-3"
                                >
                                    <div className="relative">
                                        <div className="absolute inset-0 rounded-2xl bg-red-500/20 blur-lg" />

                                        <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-500 text-white shadow-lg shadow-red-200">
                                            <Droplet
                                                size={22}
                                                fill="currentColor"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-extrabold tracking-wide text-red-600">
                                                LifeDrop
                                            </span>

                                            <span className="rounded-full bg-red-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-red-500">
                                                Network
                                            </span>
                                        </div>

                                        <span className="block text-[11px] font-medium text-slate-400">
                                            Blood Donation & Emergency Support
                                        </span>
                                    </div>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl"
                                >
                                    The Right Blood,
                                    <span className="mt-3 block bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">
                                        When It Matters.
                                    </span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 md:text-[15px]"
                                >
                                    Find active blood requests from people who need urgent
                                    support. Your response could be the reason someone gets
                                    the blood they need in time.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/70 px-3.5 py-2"
                                >
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                                    </span>

                                    <span className="text-xs font-semibold text-emerald-700">
                                        Active blood requests available
                                    </span>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="mt-6 flex flex-wrap gap-2.5"
                                >
                                    <div className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50/70 px-3.5 py-2.5">
                                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-red-600">
                                            <Droplet
                                                size={14}
                                                fill="currentColor"
                                            />
                                        </div>

                                        <div>
                                            <p className="text-[10px] font-medium text-slate-400">
                                                Blood Types
                                            </p>
                                            <p className="text-xs font-bold text-slate-700">
                                                8 Groups
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50/70 px-3.5 py-2.5">
                                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                                            <ShieldCheck size={14} />
                                        </div>

                                        <div>
                                            <p className="text-[10px] font-medium text-slate-400">
                                                Support
                                            </p>
                                            <p className="text-xs font-bold text-slate-700">
                                                Verified Requests
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50/70 px-3.5 py-2.5">
                                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-rose-50 text-rose-600">
                                            <Heart
                                                size={14}
                                                fill="currentColor"
                                            />
                                        </div>

                                        <div>
                                            <p className="text-[10px] font-medium text-slate-400">
                                                Mission
                                            </p>
                                            <p className="text-xs font-bold text-slate-700">
                                                Save Lives
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.25 }}
                                className="relative flex flex-col items-stretch gap-3 lg:min-w-[235px]"
                            >

                                <div className="mb-2 hidden justify-center lg:flex">
                                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-red-100 bg-red-50/70">
                                        <div className="absolute inset-2 rounded-full border border-red-100" />

                                        <Droplet
                                            size={30}
                                            fill="currentColor"
                                            className="relative text-red-600"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => navigate("/createfindblood")}
                                    className="group flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-200/70 transition-all duration-300 hover:-translate-y-1 hover:from-red-700 hover:to-red-600 hover:shadow-xl hover:shadow-red-200"
                                >
                                    <Droplet
                                        size={18}
                                        fill="currentColor"
                                        className="transition-transform duration-300 group-hover:scale-110"
                                    />

                                    Add Blood Request
                                </button>

                                <button
                                    type="button"
                                    onClick={handleSubmite}
                                    className="group flex items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-100 hover:bg-red-50/40 hover:text-red-600 hover:shadow-md"
                                >
                                    <RefreshCw
                                        size={17}
                                        className="transition-transform duration-500 group-hover:rotate-180"
                                    />

                                    Refresh Requests
                                </button>

                                <div className="mt-1 flex items-center justify-center gap-1.5">
                                    <ShieldCheck
                                        size={13}
                                        className="text-slate-400"
                                    />

                                    <span className="text-[10px] font-medium text-slate-400">
                                        Every response can make a difference
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-5 py-8">

                <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <motion.p
                                    initial={{ opacity: 0, y: -15 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-sm font-medium text-slate-500">
                                    Total Requests
                                </motion.p>

                                <h2 className="mt-1 text-3xl font-bold text-slate-900">
                                    {allblood.length}
                                </h2>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                                className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
                                <Droplet size={22} fill="currentColor" />
                            </motion.div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <motion.p
                                    initial={{ opacity: 0, y: -15 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-sm font-medium text-slate-500">
                                    High Priority
                                </motion.p>

                                <h2 className="mt-1 text-3xl font-bold text-red-600">
                                    {
                                        allblood.filter(
                                            (item) =>
                                                item.priority === "High" ||
                                                item.priority === "Emergency"
                                        ).length
                                    }
                                </h2>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                                className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
                                <AlertTriangle size={22} />
                            </motion.div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <motion.p
                                    initial={{ opacity: 0, y: -15 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-sm font-medium text-slate-500">
                                    Help Someone
                                </motion.p>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.6 }}
                                    className="mt-1 text-xl font-bold text-slate-900">
                                    Become a Donor
                                </motion.h2>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                                className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                                <HeartHandshake size={23} />
                            </motion.div>
                        </div>
                    </div>

                </div>

                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                            className="text-xl font-bold text-slate-900">
                            Blood Requests
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                            className="text-sm text-slate-500">
                            People currently looking for blood donors
                        </motion.p>
                    </div>

                    <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-slate-500 shadow-sm ring-1 ring-slate-200">
                        <Search size={16} />
                        {allblood.length} Requests
                    </div>
                </div>

                {allblood.length === 0 ? (
                    <div className="flex  flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white px-6 text-center">

                        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-500">
                            <Droplet size={32} />
                        </div>

                        <h3 className="text-xl font-bold text-slate-900">
                            No Blood Requests Found
                        </h3>

                        <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                            There are currently no blood requests available.
                            New requests will appear here when someone needs help.
                        </p>

                        <button
                            type="button"
                            onClick={handleSubmite}
                            className="mt-5 flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                        >
                            <RefreshCw size={17} />
                            Refresh Requests
                        </button>
                    </div>
                ) : (

                    <div className="flex flex-nowrap gap-5 overflow-x-auto pb-5 [scrollbar-width:thin] [scrollbar-color:#fb7185_#ffe4e6]">

                        {allblood.map((e) => (
                            <div
                                key={e._id}
                                className="group w-[320px] min-w-[320px] shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >

                                {/* Card Header */}
                                <div className="flex items-center justify-between border-b border-red-100 bg-[#f91e4a] px-5 py-4">

                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-md">
                                            <Droplet
                                                size={24}
                                                fill="currentColor"
                                                className="text-red-600"
                                            />
                                        </div>

                                        <div className="flex flex-col">
                                            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-white">
                                                Blood Group
                                            </p>

                                            <h2 className="mt-1 text-2xl font-extrabold leading-none text-white">
                                                {e.bloodGroup || "N/A"}
                                            </h2>
                                        </div>
                                    </div>

                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-semibold ${e.priority === "Emergency"
                                                ? "bg-red-100 text-red-700"
                                                : e.priority === "High"
                                                    ? "bg-orange-100 text-orange-700"
                                                    : e.priority === "Medium"
                                                        ? "bg-yellow-100 text-yellow-700"
                                                        : "bg-green-100 text-green-700"
                                            }`}
                                    >
                                        {e.priority || "Low"}
                                    </span>

                                </div>

                                {/* Card Body */}
                                <div className="space-y-4 p-5">

                                    {/* Reason */}
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                                            <FileText size={18} />
                                        </div>

                                        <div className="min-w-0">
                                            <p className="text-xs font-medium text-slate-400">
                                                Reason
                                            </p>

                                            <p className="break-words font-semibold text-slate-800">
                                                {e.reason || "Not provided"}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Required Units */}
                                    <div className="flex items-start gap-3">
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500">
                                            <Hash size={18} />
                                        </div>

                                        <div>
                                            <p className="text-xs font-medium text-slate-400">
                                                Required Units
                                            </p>

                                            <p className="font-semibold text-slate-800">
                                                {e.requiredUnits ?? "N/A"} Units
                                            </p>
                                        </div>
                                    </div>

                                    {/* Required Date */}
                                    <div className="flex items-start gap-3">
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-500">
                                            <CalendarDays size={18} />
                                        </div>

                                        <div>
                                            <p className="text-xs font-medium text-slate-400">
                                                Required Date
                                            </p>

                                            <p className="font-semibold text-slate-800">
                                                {e.requiredDate
                                                    ? new Date(e.requiredDate).toLocaleDateString("en-GB")
                                                    : "Not provided"}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Required Date Notice */}
                                    <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3">
                                        <AlertTriangle
                                            size={18}
                                            className="shrink-0 text-red-500"
                                        />

                                        <span className="text-sm text-slate-600">
                                            Blood is required on{" "}
                                            <span className="font-semibold text-slate-800">
                                                {e.requiredDate
                                                    ? new Date(e.requiredDate).toLocaleDateString("en-GB")
                                                    : "the required date"}
                                            </span>
                                        </span>
                                    </div>

                                    {/* View Details Button */}
                                    <button
                                        type="button"
                                        onClick={() => setSelectedBlood(e)}
                                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-red-700"
                                    >
                                        View Details
                                        <ArrowRight size={18} />
                                    </button>

                                </div>

                            </div>
                        ))}

                    </div>
                )}
            </div>

            {selectedBlood && (

                <div
                    onClick={() => setSelectedBlood(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-md"
                >

                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
                    >

                        <div className="flex items-center justify-between rounded-t-3xl bg-[#f51d48] p-6 text-white">

                            <div className="flex items-center gap-3">

                                <div className="rounded-xl bg-white p-3">
                                    <Droplet size={28} className="text-red-600" />
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold">
                                        Blood Request Details
                                    </h2>

                                    <p className="text-sm text-red-100">
                                        Complete request information
                                    </p>
                                </div>

                            </div>

                            <button
                                onClick={() => setSelectedBlood(null)}
                                className="rounded-full bg-white/20 p-2 transition hover:bg-white/30"
                            >
                                <X size={22} />
                            </button>

                        </div>

                        <div className="p-6">

                            <div className="mb-6 flex items-center justify-between rounded-2xl border border-red-100 bg-red-50 p-4">

                                <div>

                                    <p className="text-sm text-gray-500">
                                        Required Blood Group
                                    </p>

                                    <h3 className="mt-1 text-3xl font-extrabold text-red-600">
                                        {selectedBlood.bloodGroup || "N/A"}
                                    </h3>

                                </div>

                                <span
                                    className={`rounded-full px-4 py-2 text-sm font-bold ${selectedBlood.priority === "Emergency"
                                        ? "bg-red-600 text-white"
                                        : selectedBlood.priority === "High"
                                            ? "bg-orange-100 text-orange-700"
                                            : selectedBlood.priority === "Medium"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : "bg-green-100 text-green-700"
                                        }`}
                                >
                                    {selectedBlood.priority || "Normal"}
                                </span>

                            </div>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                                <div className="flex items-center gap-4 rounded-xl border border-gray-100 p-4">

                                    <div className="rounded-xl bg-red-50 p-3 text-red-600">
                                        <Hash size={21} />
                                    </div>

                                    <div>

                                        <p className="text-sm text-gray-500">
                                            Required Units
                                        </p>

                                        <p className="font-bold text-gray-800">
                                            {selectedBlood.requiredUnits ??
                                                "Not specified"}
                                        </p>

                                    </div>

                                </div>

                                <div className="flex items-center gap-4 rounded-xl border border-gray-100 p-4">

                                    <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                                        <CalendarDays size={21} />
                                    </div>

                                    <div>

                                        <p className="text-sm text-gray-500">
                                            Required Date
                                        </p>

                                        <p className="font-bold text-gray-800">
                                            {selectedBlood.requiredDate
                                                ? new Date(
                                                    selectedBlood.requiredDate
                                                ).toLocaleDateString("en-GB")
                                                : "Not specified"}
                                        </p>

                                    </div>

                                </div>

                                <div className="flex items-center gap-4 rounded-xl border border-gray-100 p-4">

                                    <div className="rounded-xl bg-green-50 p-3 text-green-600">
                                        <Phone size={21} />
                                    </div>

                                    <div className="min-w-0">

                                        <p className="text-sm text-gray-500">
                                            Contact Number
                                        </p>

                                        <p className="break-all font-bold text-gray-800">
                                            {selectedBlood.phone ||
                                                selectedBlood.contactNumber ||
                                                "Not provided"}
                                        </p>

                                    </div>

                                </div>

                                <div className="flex items-center gap-4 rounded-xl border border-gray-100 p-4">

                                    <div className="rounded-xl bg-purple-50 p-3 text-purple-600">
                                        <MapPin size={21} />
                                    </div>

                                    <div>

                                        <p className="text-sm text-gray-500">
                                            City
                                        </p>

                                        <p className="font-bold text-gray-800">
                                            {selectedBlood.city ||
                                                "Not specified"}
                                        </p>

                                    </div>

                                </div>

                                <div className="flex items-center gap-4 rounded-xl border border-gray-100 p-4 md:col-span-2">

                                    <div className="rounded-xl bg-orange-50 p-3 text-orange-600">
                                        <AlertTriangle size={21} />
                                    </div>

                                    <div>

                                        <p className="text-sm text-gray-500">
                                            Reason
                                        </p>

                                        <p className="font-bold text-gray-800">
                                            {selectedBlood.reason ||
                                                selectedBlood.notes ||
                                                "Not provided"}
                                        </p>

                                    </div>

                                </div>

                                <div className="rounded-xl border border-gray-100 p-4 md:col-span-2">

                                    <div className="mb-2 flex items-center gap-2 text-gray-500">

                                        <FileText size={20} />

                                        <p className="text-sm">
                                            Additional Information
                                        </p>

                                    </div>

                                    <p className=" text-gray-800">
                                        {selectedBlood.notes ||
                                            selectedBlood.reason ||
                                            "No additional information"}
                                    </p>

                                </div>

                            </div>

                            <button
                                onClick={() => setSelectedBlood(null)}
                                className="mt-6 w-full rounded-xl bg-gray-900 py-3 font-semibold text-white transition hover:bg-gray-700"
                            >
                                Close Details
                            </button>

                        </div>

                    </div>

                </div>
            )}

            <Fouter />
        </div>
    );
};

export default AllfindBlood;
