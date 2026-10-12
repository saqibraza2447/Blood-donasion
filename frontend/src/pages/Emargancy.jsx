import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    Siren,
    HeartPulse,
    Plus,
    ArrowRight,
    ShieldAlert,
    Droplet,
    UserRound,
    MapPin,
    Phone,
    CalendarDays,
    AlertTriangle,
    Activity,
    Eye,
    X,
    Hash,
    FileText,
} from "lucide-react";
import { motion } from "framer-motion";
import { Fouter } from "../components/Fouter";


export const Emargancy = () => {
    const navigate = useNavigate();

    const [allblood, setAllblood] = useState([]);
    const [selectedBlood, setSelectedBlood] = useState(null);




    const getAllBloodRequests = async () => {
        try {
            const response = await axios.get(
                import.meta.env.VITE_Backend_url + "/bloodrequest/getAllRequest"
            );

            console.log("API Response:", response.data);

            setAllblood(response.data.bloodrequests || []);
        } catch (error) {
            console.log("API Error:", error);
        }
    };


    useEffect(() => {
        getAllBloodRequests();
    }, []);



    return (
        <div className="pt-20 ">
            <div className="min-h-screen bg-[#fffafb] p-5 md:p-10 ">

                <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-red-100 bg-white shadow-xl shadow-red-100/50">

                    <div className="h-2 bg-gradient-to-r from-red-700 via-red-500 to-orange-400"></div>

                    <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-red-50"></div>
                    <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-orange-50"></div>

                    <div className="relative grid items-center gap-10 p-7 md:grid-cols-2 md:p-12">

                        <div>
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-600"></span>
                                </span>
                                Emergency Blood Support
                            </div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                                className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl">
                                Every Second
                                <span className="block text-red-600">
                                    Can Save a Life.
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                                className="mt-5 max-w-lg text-base leading-7 text-slate-600 md:text-lg">
                                Need blood urgently? Create an emergency blood
                                request and connect with people who can help
                                when every moment matters.
                            </motion.p>

                            <button
                                onClick={() => navigate("/createdoner")}
                                className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-red-600 px-6 py-4 font-bold text-white shadow-lg shadow-red-200 transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-xl"
                            >
                                <Plus size={21} strokeWidth={2.5} />
                                Create Request
                                <ArrowRight
                                    size={19}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                                className="mt-6 flex items-center gap-2 text-sm text-slate-500">
                                <ShieldAlert size={17} className="text-red-500" />
                                Your request can help connect you with donors.
                            </motion.div>
                        </div>

                        <div className="relative">
                            <div className="relative mx-auto flex aspect-square max-h-80 max-w-80 items-center justify-center rounded-full border border-red-100 bg-gradient-to-br from-red-50 via-white to-orange-50">

                                <div className="absolute inset-5 rounded-full border border-dashed border-red-200"></div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.6 }}
                                    className="flex h-36 w-36 items-center justify-center rounded-[2rem] bg-gradient-to-br from-red-500 to-red-700 text-white shadow-2xl shadow-red-300 md:h-44 md:w-44">
                                    <HeartPulse size={90} strokeWidth={1.5} />
                                </motion.div>

                                <div className="absolute right-2 top-12 flex h-14 w-14 items-center justify-center rounded-2xl border border-red-100 bg-white text-red-600 shadow-lg">
                                    <Siren size={28} />
                                </div>

                                <div className="absolute bottom-10 left-0 flex h-14 w-14 items-center justify-center rounded-2xl border border-red-100 bg-white text-red-600 shadow-lg">
                                    <Droplet size={28} />
                                </div>

                                <div className="absolute bottom-4 right-8 rounded-xl border border-red-100 bg-white px-4 py-2 shadow-md">
                                    <span className="flex items-center gap-2 text-sm font-bold text-slate-800">
                                        <HeartPulse size={17} className="text-red-500" />
                                        Help Save Lives
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mx-auto mt-8 grid max-w-6xl gap-5 md:grid-cols-3">

                    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                            <Siren size={24} />
                        </motion.div>
                        <div>
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                                className="font-bold text-slate-800">
                                Urgent Requests
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                                className="mt-1 text-sm text-slate-500">
                                Share your emergency needs.
                            </motion.p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                            <Droplet size={24} />
                        </motion.div>
                        <div>
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                                className="font-bold text-slate-800">
                                Blood Support
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                                className="mt-1 text-sm text-slate-500">
                                Find people willing to donate.
                            </motion.p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                            <HeartPulse size={24} />
                        </motion.div>
                        <div>
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                                className="font-bold text-slate-800">
                                Community Help
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                                className="mt-1 text-sm text-slate-500">
                                Every donor makes a difference.
                            </motion.p>
                        </div>
                    </div>

                </div>
            </div>


            <div className=" bg-[#fffafb] md:p-8 rounded-2xl">

                <div className="mb-7 ml-32">
                    <div className="flex items-center gap-3 mb-2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                            className="bg-red-100 p-3 rounded-xl">
                            <HeartPulse size={28} className="text-red-600" />
                        </motion.div>

                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                                className="text-2xl md:text-3xl font-bold text-slate-800">
                                Blood Requests
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                                className="text-sm text-slate-500 mt-1">
                                Manage and view all blood requests
                            </motion.p>
                        </div>
                    </div>
                </div>

                <div className="ml-32 flex flex-nowrap gap-6 overflow-x-auto pb-4  [scrollbar-width:thin] [scrollbar-color:#fb7185_#ffe4e6]">

                    {allblood.map((e) => (
                        <div
                            key={e._id}
                            className="group w-80 min-w-80 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
                        >
                            <div className="h-1.5 bg-gradient-to-r from-red-600 via-rose-500 to-red-300"></div>

                            <div className="p-5">

                                <div className="flex items-center justify-between gap-3 mb-5">

                                    <div className="flex items-center gap-3 min-w-0">
                                        <div className="w-12 h-12 shrink-0 rounded-xl bg-red-50 flex items-center justify-center">
                                            <UserRound
                                                size={25}
                                                className="text-red-600"
                                            />
                                        </div>

                                        <div className="min-w-0">
                                            <h2 className="text-lg font-bold text-slate-800 truncate">
                                                {e.name}
                                            </h2>
                                            <p className="text-xs text-slate-500">
                                                Blood Request
                                            </p>
                                        </div>
                                    </div>

                                    <div className="shrink-0 flex items-center gap-1.5 bg-red-50 border border-red-100 px-3 py-2 rounded-xl">
                                        <Droplet
                                            size={18}
                                            className="text-red-600"
                                            fill="currentColor"
                                        />
                                        <span className="text-red-700 font-extrabold">
                                            {e.bloodGroup}
                                        </span>
                                    </div>

                                </div>

                                <div className="mb-5">
                                    <span
                                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold ${e.urgency === "Emergency"
                                            ? "bg-red-100 text-red-700"
                                            : "bg-emerald-50 text-emerald-700"
                                            }`}
                                    >
                                        {e.urgency === "Emergency" ? (
                                            <AlertTriangle size={15} />
                                        ) : (
                                            <Activity size={15} />
                                        )}

                                        {e.urgency || "Normal"}
                                    </span>
                                </div>

                                <div className="space-y-3">

                                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                                        <div className="p-2 bg-white rounded-lg shadow-sm">
                                            <Droplet
                                                size={18}
                                                className="text-red-500"
                                            />
                                        </div>

                                        <div>
                                            <p className="text-xs text-slate-500">
                                                Required Units
                                            </p>
                                            <p className="font-bold text-slate-800">
                                                {e.requiredUnits} Units
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                                        <div className="p-2 bg-white rounded-lg shadow-sm">
                                            <MapPin
                                                size={18}
                                                className="text-red-500"
                                            />
                                        </div>

                                        <div className="min-w-0">
                                            <p className="text-xs text-slate-500">
                                                City
                                            </p>
                                            <p className="font-semibold text-slate-800 truncate">
                                                {e.city || "Not provided"}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                                        <div className="p-2 bg-white rounded-lg shadow-sm">
                                            <Phone
                                                size={18}
                                                className="text-red-500"
                                            />
                                        </div>

                                        <div className="min-w-0">
                                            <p className="text-xs text-slate-500">
                                                Contact Number
                                            </p>
                                            <p className="font-semibold text-slate-800 truncate">
                                                {e.contactNumber || "Not provided"}
                                            </p>
                                        </div>
                                    </div>



                                </div>

                                <button
                                    type="button"
                                    onClick={() => {
                                        console.log("Selected Blood:", e);
                                        setSelectedBlood(e);
                                    }}
                                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg"
                                >
                                    <Eye size={19} />
                                    View Details
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    ))}

                </div>

                {allblood.length === 0 && (
                    <div className="py-16 text-center bg-white border border-dashed border-slate-300 rounded-2xl">
                        <Droplet
                            size={42}
                            className="mx-auto text-slate-300 mb-3"
                        />
                        <h2 className="text-xl font-bold text-slate-700">
                            No Blood Requests Found
                        </h2>
                        <p className="text-sm text-slate-500 mt-2">
                            New blood requests will appear here.
                        </p>
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
                        className="relative  w-full max-w-4xl  overflow-hidden rounded-3xl bg-white shadow-2xl"
                    >
                        <div className="flex items-center justify-between rounded-t-3xl bg-gradient-to-r from-red-600 to-rose-500 p-6 text-white">
                            <div className="flex items-center gap-3">
                                <div className="rounded-xl bg-white/20 p-3">
                                    <Droplet size={28} />
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
                                type="button"
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
                                    className={`rounded-full px-4 py-2 text-sm font-bold ${selectedBlood.urgency === "Emergency"
                                        ? "bg-red-600 text-white"
                                        : selectedBlood.urgency === "High"
                                            ? "bg-orange-100 text-orange-700"
                                            : "bg-green-100 text-green-700"
                                        }`}
                                >
                                    {selectedBlood.urgency || "Normal"}
                                </span>
                            </div>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                                <div className="flex items-center gap-4 rounded-xl border border-gray-100 p-4">
                                    <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                                        <UserRound size={21} />
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Requester Name
                                        </p>
                                        <p className="font-bold text-gray-800">
                                            {selectedBlood.name || "Not provided"}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 rounded-xl border border-gray-100 p-4">
                                    <div className="rounded-xl bg-red-50 p-3 text-red-600">
                                        <Hash size={21} />
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Required Units
                                        </p>
                                        <p className="font-bold text-gray-800">
                                            {selectedBlood.requiredUnits ?? "Not specified"}
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
                                            {selectedBlood.contactNumber ??
                                                selectedBlood.phone ??
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
                                            {selectedBlood.city || "Not specified"}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 rounded-xl border border-gray-100 p-4">
                                    <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                                        <Activity size={21} />
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Hospital Name
                                        </p>
                                        <p className="font-bold text-gray-800">
                                            {selectedBlood.hospitalName || "Not specified"}
                                        </p>
                                    </div>
                                </div>

                                <div className="rounded-xl border border-gray-100 p-4 md:col-span-2">
                                    <div className="mb-2 flex items-center gap-2 text-gray-500">
                                        <FileText size={20} />
                                        <p className="text-sm font-medium">
                                            Additional Information
                                        </p>
                                    </div>

                                    <p className=" text-gray-800">
                                        {selectedBlood.notes || "No additional information"}
                                    </p>
                                </div>
                            </div>

                            <button
                                type="button"
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

export default Emargancy;