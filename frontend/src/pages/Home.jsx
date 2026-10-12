
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion, } from "framer-motion";

import {
    ShieldCheck,
    Search,
    Heart,
    CheckCircle2,
    TriangleAlert,
    Droplet,
    Hash,
    ArrowRight,
    UsersRound,
    MapPin,
    CalendarDays,
    Phone,
    X,
    FileText,
    Activity,
    HeartHandshake,
    Sparkles,
    ChevronRight,
} from "lucide-react";

import image3 from "../image/doner.png";
import { Fouter } from "../components/Fouter";





export const Home = () => {

    const priorityStyles = {
        Emergency: "bg-red-50 text-red-700 ring-red-100",
        High: "bg-orange-50 text-orange-700 ring-orange-100",
        Medium: "bg-amber-50 text-amber-700 ring-amber-100",
        Low: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    };

    const formatDate = (date) => {
        if (!date) return "Not specified";

        const parsedDate = new Date(date);

        if (Number.isNaN(parsedDate.getTime())) {
            return "Not specified";
        }

        return parsedDate.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };
    const [selectedBlood, setSelectedBlood] = useState(null);
    const [allblood, setallblood] = useState([]);
    const [requestsLoaded, setRequestsLoaded] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        let active = true;

        const fetchBloodRequests = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_Backend_url + "/findboner/allfind");

                if (active) {
                    setallblood(
                        Array.isArray(response.data?.bloodrequests)
                            ? response.data.bloodrequests
                            : []
                    );
                }
            } catch (error) {
                console.error("Blood requests error:", error);

                if (active) {
                    setallblood([]);
                }
            } finally {
                if (active) {
                    setRequestsLoaded(true);
                }
            }
        };

        fetchBloodRequests();


    }, []);

    return (
        <main className="min-h-screen overflow-x-clip bg-[#fffafb] text-slate-900">

            <section className="relative isolate overflow-hidden">
                <div className="pointer-events-none absolute -left-40 top-10 -z-10 h-96 w-96 rounded-full bg-rose-200/30 blur-[100px]" />
                <div className="pointer-events-none absolute right-0 top-24 -z-10 h-80 w-80 rounded-full bg-pink-100/50 blur-[100px]" />

                <div className="mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 lg:pb-24 lg:pt-32">
                    <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">

                        <div className="relative z-10">
                            <motion.div>
                                <span className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white/80 px-4 py-2 text-xs font-extrabold tracking-[0.13em] text-rose-600 shadow-sm sm:text-sm">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-60" />
                                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rose-600" />
                                    </span>
                                    LIFEDROP BLOOD NETWORK
                                </span>
                            </motion.div>

                            <motion.h1

                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.2 }}


                                className="mt-7 max-w-2xl text-5xl font-black leading-[1.08] tracking-[-0.045em] text-[#111827] sm:text-6xl lg:text-[72px]"
                            >
                                The Right Blood.
                                <br />
                                <span

                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}

                                    className="relative inline-block text-[#e7194f]">
                                    When It Matters.
                                    <span className="absolute mt-20 left-0 h-1.5 w-120 rounded-full bg-rose-200/80" />
                                </span>
                            </motion.h1>

                            <motion.p

                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.2 }}


                                className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
                            >
                                Every second matters when someone needs blood.
                                LifeDrop brings donors and people in need closer
                                together, helping turn compassion into action.
                            </motion.p>

                            <div

                                className="mt-9 flex flex-col gap-3 sm:flex-row"
                            >
                                <button
                                    onClick={() => navigate("/findeblood")}
                                    className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-[#e7194f] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-rose-200/70 transition duration-300 hover:-translate-y-1 hover:bg-[#cf123f]"
                                >
                                    <Search size={19} />
                                    Find Blood Now
                                    <ArrowRight
                                        size={18}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </button>

                                <button
                                    onClick={() => navigate("/bacmonboner")}
                                    className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-rose-200 hover:bg-rose-50/60"
                                >
                                    <Heart size={19} className="text-rose-600" />
                                    Become a Donor
                                </button>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.2 }}

                                className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200/80 pt-6"
                            >
                                {[
                                    "Community Driven",
                                    "Quick Connections",
                                    "Free to Join",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-2 text-sm font-medium text-slate-600"
                                    >
                                        <CheckCircle2
                                            size={17}
                                            className="shrink-0 text-emerald-500"
                                        />
                                        {item}
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 35, scale: 0.97 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative mx-auto w-full max-w-xl lg:ml-auto"
                        >
                            <div className="absolute inset-8 rounded-[42px] bg-rose-300/30 blur-3xl" />

                            <div className="relative overflow-hidden rounded-[34px] border border-rose-100/90 bg-gradient-to-br from-white via-[#fff0f3] to-[#ffe0e7] shadow-[0_30px_90px_-35px_rgba(225,29,72,0.35)]">
                                <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full border border-rose-200/80" />
                                <div className="absolute -right-5 -top-5 h-40 w-40 rounded-full border border-rose-200/60" />
                                <div className="absolute -bottom-20 -left-12 h-64 w-64 rounded-full bg-white/70 blur-2xl" />

                                <div className="absolute left-6 top-6 z-20 flex items-center gap-2 rounded-full border border-white/80 bg-white/85 px-3.5 py-2 text-xs font-bold text-rose-700 shadow-lg backdrop-blur sm:left-8 sm:top-8">
                                    <ShieldCheck size={16} />
                                    Every Drop Counts
                                </div>

                                <motion.img
                                    src={image3}
                                    alt="LifeDrop blood donation"
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{
                                        duration: 4.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="relative z-10 mx-auto block h-[340px] w-full object-contain p-5 pt-12 sm:h-[450px] lg:h-[490px]"
                                />

                                <div className="absolute z-20  flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-xl sm:bottom-7 sm:left-7 sm:right-7">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-600">
                                        <Heart size={24} fill="currentColor" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm font-extrabold text-slate-900">
                                            One Community. One Mission.
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-slate-500">
                                            Connecting people through the gift of giving.
                                        </p>
                                    </div>
                                    <Sparkles size={21} className="shrink-0 text-rose-500" />
                                </div>
                            </div>

                            <motion.div
                                animate={{ y: [0, -7, 0] }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute m  top-24 hidden items-center gap-2 rounded-2xl border border-rose-100 bg-white p-3.5 shadow-xl sm:flex lg:-right-6"
                            >

                                <div>
                                    <p className="text-sm font-extrabold text-slate-900">
                                        Give Hope
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        Share Life
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="px-5 py-20 sm:px-8 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-2xl text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-xs font-extrabold tracking-widest text-rose-600">
                            <Sparkles size={15} />
                            SIMPLE. MEANINGFUL. LIFE-SAVING.
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            Small Steps,
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-rose-600"> Big Impact.</motion.span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                            LifeDrop makes it easier to find requests and
                            take the next step toward helping someone.
                        </motion.p>
                    </div>

                    <div className="mt-14 grid gap-6 md:grid-cols-3">
                        {[
                            {
                                number: "01",
                                icon: Search,
                                title: "Find a Blood Request",
                                description:
                                    "Explore current requests and find the blood group someone needs.",
                            },
                            {
                                number: "02",
                                icon: FileText,
                                title: "Review the Details",
                                description:
                                    "Check the required units, date, city and available contact information.",
                            },
                            {
                                number: "03",
                                icon: HeartHandshake,
                                title: "Connect and Help",
                                description:
                                    "Contact the requester and coordinate with them to offer support.",
                            },
                        ].map((step) => {
                            const Icon = step.icon;

                            return (
                                <div
                                    className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-rose-100/60 sm:p-9"
                                >
                                    <span className="absolute -right-2 -top-7 text-8xl font-black tracking-tighter text-rose-100 transition-colors group-hover:text-rose-100">
                                        {step.number}
                                    </span>

                                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 transition-all duration-300 group-hover:bg-rose-600 group-hover:text-white">
                                        <Icon size={25} />
                                    </div>

                                    <motion.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        className="relative mt-7 text-xl font-extrabold text-slate-900">
                                        {step.title}
                                    </motion.h3>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        className="relative mt-3 text-sm leading-7 text-slate-500">
                                        {step.description}
                                    </motion.p>

                                    <div className="mt-7 flex items-center gap-2 text-sm font-bold text-rose-600">
                                        Step {step.number}
                                        <ArrowRight size={16} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


            <section className="border-y border-rose-100/70 bg-gradient-to-b from-white to-[#fff5f7] px-5 py-20 sm:px-8 lg:py-24">
                <div className="mx-auto max-w-7xl">

                    <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                        <div>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-xs font-extrabold tracking-widest text-rose-600"
                            >
                                <Activity size={15} />
                                LIFEDROP NETWORK
                            </motion.span>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl"
                            >
                                Latest Blood Requests
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="mt-3 max-w-xl text-sm leading-7 text-slate-500 sm:text-base"
                            >
                                Explore current requests and find out where your support may be needed.
                            </motion.p>
                        </div>
                        
                        
                        <button
                            onClick={() => navigate("/findeblood")}
                            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-rose-200 bg-white px-5 py-3.5 text-sm font-bold text-rose-600 transition hover:border-rose-600 hover:bg-rose-600 hover:text-white"
                        >
                            View All Requests
                            <ArrowRight
                                size={17}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </button>
                    </div>

                    {!requestsLoaded ? (
                        <div className="flex gap-6 overflow-hidden">
                            {[1, 2, 3].map((item) => (
                                <div
                                    key={item}
                                    className="h-80 w-[320px] min-w-[320px] animate-pulse rounded-[25px] bg-rose-100/60"
                                />
                            ))}
                        </div>
                    ) : allblood.length === 0 ? (

                        <div className="rounded-[28px] border border-dashed border-rose-200 bg-white px-6 py-16 text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-50 text-rose-400">
                                <Droplet size={32} />
                            </div>

                            <h3 className="mt-5 text-xl font-extrabold text-slate-900">
                                No Blood Requests Yet
                            </h3>

                            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                                New requests will appear here when they become available.
                            </p>

                            <button
                                onClick={() => navigate("/createfindblood")}
                                className="mt-6 rounded-xl bg-rose-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-rose-700"
                            >
                                Create a Request
                            </button>
                        </div>

                    ) : (

                        <div className="flex flex-nowrap gap-6 overflow-x-auto pb-6 [scrollbar-width:thin] [scrollbar-color:#fb7185_#ffe4e6]">

                            {allblood.map((blood, index) => (
                                <div

                                    className="group w-[320px] min-w-[320px] shrink-0 overflow-hidden rounded-[25px] border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-100/50 sm:w-[350px] sm:min-w-[350px]"
                                >
                                    <div className="flex items-center justify-between bg-gradient-to-r from-rose-600 to-[#f02b54] px-5 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-white/25">
                                                <Droplet size={23} />
                                            </div>

                                            <div>
                                                <p className="text-sm font-extrabold text-white">
                                                    Blood Request
                                                </p>
                                                <p className="mt-1 text-xs text-rose-100">
                                                    Help make a connection
                                                </p>
                                            </div>
                                        </div>

                                        <span className="rounded-xl bg-white px-3 py-2 text-base font-black text-rose-600 shadow-sm">
                                            {blood.bloodGroup || "N/A"}
                                        </span>
                                    </div>

                                    <div className="p-5 sm:p-6">

                                        <div className="flex items-center justify-between gap-3">
                                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                                Priority
                                            </span>

                                            <span
                                                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ring-1 ${priorityStyles[blood.priority] ||
                                                    "bg-slate-50 text-slate-600 ring-slate-200"
                                                    }`}
                                            >
                                                {blood.priority === "Emergency" && (
                                                    <TriangleAlert size={13} />
                                                )}
                                                {blood.priority || "Normal"}
                                            </span>
                                        </div>

                                        <div className="mt-5 space-y-4">

                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                                                    <CalendarDays size={19} />
                                                </div>

                                                <div className="min-w-0">
                                                    <p className="text-xs text-slate-400">
                                                        Required Date
                                                    </p>
                                                    <p className="mt-1 text-sm font-bold text-slate-800">
                                                        {formatDate(blood.requiredDate)}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                                                    <Phone size={18} />
                                                </div>

                                                <div className="min-w-0">
                                                    <p className="text-xs text-slate-400">
                                                        Contact Number
                                                    </p>
                                                    <p className="mt-1 truncate text-sm font-bold text-slate-800">
                                                        {blood.phone ||
                                                            blood.contactNumber ||
                                                            "Not provided"}
                                                    </p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="mt-6 border-t border-slate-100 pt-5">
                                            <button
                                                onClick={() => setSelectedBlood(blood)}
                                                className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3.5 text-sm font-bold text-white transition duration-300 hover:bg-rose-600"
                                            >
                                                View Request Details
                                                <ChevronRight
                                                    size={18}
                                                    className="transition-transform group-hover/btn:translate-x-1"
                                                />
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            ))}

                        </div>
                    )}

                </div>
            </section>


            <div>
                {selectedBlood && (
                    <motion.div
                        key="blood-details-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setSelectedBlood(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-3 backdrop-blur-sm sm:p-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 25, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 15, scale: 0.98 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="blood-modal-title"
                            onClick={(event) => event.stopPropagation()}
                            className="relative flex max-h-[90dvh] w-full max-w-2xl flex-col overflow-hidden rounded-[26px] bg-white shadow-2xl sm:rounded-[30px]"
                        >
                            <div className="flex shrink-0 items-center justify-between bg-gradient-to-r from-rose-600 to-[#f02b54] px-5 py-5 text-white sm:px-7">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/30">
                                        <Droplet size={25} />
                                    </div>

                                    <div>
                                        <h2 id="blood-modal-title" className="text-lg font-extrabold sm:text-xl">
                                            Request Details
                                        </h2>
                                        <p className="mt-1 text-xs text-rose-100 sm:text-sm">
                                            Blood request information
                                        </p>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    aria-label="Close request details"
                                    onClick={() => setSelectedBlood(null)}
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 transition hover:bg-white/25"
                                >
                                    <X size={21} />
                                </button>
                            </div>

                            <div className="overflow-y-auto overscroll-contain p-5 sm:p-7">
                                <div className="flex items-center justify-between gap-4 rounded-2xl border border-rose-100 bg-rose-50/80 p-4 sm:p-5">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                            Required Blood Group
                                        </p>
                                        <h3 className="mt-2 text-3xl font-black text-rose-600">
                                            {selectedBlood.bloodGroup || "N/A"}
                                        </h3>
                                    </div>

                                    <span
                                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-extrabold ring-1 sm:px-4 ${priorityStyles[selectedBlood.priority] ||
                                            "bg-white text-slate-600 ring-slate-200"
                                            }`}
                                    >
                                        {selectedBlood.priority === "Emergency" && (
                                            <TriangleAlert size={14} />
                                        )}
                                        {selectedBlood.priority || "Normal"}
                                    </span>
                                </div>

                                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                    {[
                                        {
                                            label: "Required Units",
                                            value: selectedBlood.requiredUnits ?? "Not specified",
                                            icon: Hash,
                                            color: "text-rose-600",
                                            bg: "bg-rose-50",
                                        },
                                        {
                                            label: "Required Date",
                                            value: formatDate(selectedBlood.requiredDate),
                                            icon: CalendarDays,
                                            color: "text-blue-600",
                                            bg: "bg-blue-50",
                                        },
                                        {
                                            label: "Contact Number",
                                            value: selectedBlood.phone || selectedBlood.contactNumber || "Not provided",
                                            icon: Phone,
                                            color: "text-emerald-600",
                                            bg: "bg-emerald-50",
                                        },

                                    ].map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <div
                                                key={item.label}
                                                className="flex min-w-0 items-center gap-3 rounded-2xl border border-slate-100 p-4"
                                            >
                                                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.bg} ${item.color}`}>
                                                    <Icon size={20} />
                                                </div>

                                                <div className="min-w-0">
                                                    <p className="text-xs text-slate-500">
                                                        {item.label}
                                                    </p>
                                                    <p className="mt-1 break-words text-sm font-bold text-slate-900">
                                                        {item.value}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="mt-4 rounded-2xl border border-slate-100 p-4 sm:p-5">
                                    <div className="flex items-center gap-2 text-slate-500">
                                        <FileText size={19} />
                                        <h3 className="text-sm font-bold">
                                            Reason & Additional Information
                                        </h3>
                                    </div>

                                    <p className="mt-3  text-sm leading-7 text-slate-600">
                                        {selectedBlood.reason ||
                                            selectedBlood.notes ||
                                            "No additional information provided."}
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setSelectedBlood(null)}
                                    className="mt-5 w-full rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-rose-600"
                                >
                                    Close Details
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>

            <section className="px-5 pb-20 sm:px-8 lg:pb-24">
                <div
                    className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#111a30] px-6 py-10 shadow-2xl shadow-slate-900/10 sm:px-10 sm:py-12 lg:rounded-[36px] lg:px-14 lg:py-16"
                >
                    <div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full border border-white/10" />
                    <div className="pointer-events-none absolute -right-5 -top-16 h-72 w-72 rounded-full border border-white/10" />
                    <div className="pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-rose-600/20 blur-[90px]" />

                    <div className="relative z-10 flex flex-col items-start justify-between gap-9 lg:flex-row lg:items-center">
                        <div className="max-w-2xl">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="inline-flex items-center gap-2 rounded-full border border-rose-400/20 bg-rose-500/15 px-4 py-2 text-xs font-extrabold tracking-widest text-rose-300">
                                <TriangleAlert size={15} />
                                NEED HELP?
                            </motion.span>

                            <motion.h2
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="mt-5 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                                Every Second Matters.
                                <motion.span
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="mt-2 block text-rose-400">
                                    Let’s Find the Right Help.
                                </motion.span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                                Create a blood request with the important details
                                so potential donors can learn about your request
                                and connect with you.
                            </motion.p>
                        </div>

                        <button
                            onClick={() => navigate("/emargancy")}
                            className="group inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-2xl bg-rose-600 px-6 py-4 text-sm font-extrabold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-rose-500 sm:w-auto sm:px-8 sm:py-5"
                        >
                            <TriangleAlert size={20} />
                            Create Blood Request
                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </button>
                    </div>
                </div>
            </section>

            <Fouter />
        </main>
    );
};

export default Home;
