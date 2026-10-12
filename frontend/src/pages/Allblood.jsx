
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
    Plus,
    UserRound,
    Droplet,
    MapPin,
    CalendarDays,
    Phone,
    Hospital,
    AlertTriangle,
    FileText,
    HandHeart,
    Trash2,
    ArrowUpRight,
    HeartPulse,
    RefreshCw,
    ShieldCheck,
    Clock3,
    Activity,
    Pencil
} from "lucide-react";
import Fouter from "../components/Fouter";

export const Allblood = () => {
    const navigate = useNavigate();

    const [allblood, setallblood] = useState([]);
    const [loading, setLoading] = useState(true);

    async function handleSubmite() {
        try {
            const response = await axios.get(
                import.meta.env.VITE_Backend_url +
                "/bloodrequest/getAllRequest"
            );

            console.log("All Blood:", response.data);

            setallblood(response.data.bloodrequests || []);
        } catch (error) {
            console.log("Get Blood Error:", error);
            setallblood([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        handleSubmite();
    }, []);

    return (
        <div className="">
            <div className="min-h-screen bg-[#f5f7fb] pb-16 pt-23 text-slate-900">

                <section className="relative overflow-hidden bg-white">

                    <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-red-100/70 blur-3xl" />

                    <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-rose-50 blur-3xl" />

                    <div className="relative mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">

                        <div className="grid items-center gap-10 lg:grid-cols-[1fr_350px]">

                            <div>

                                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-red-600">

                                    <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />

                                    LifeDrop • Blood Donation Network

                                </div>

                                <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">

                                    Every Drop Can

                                    <span className="block text-red-600">
                                        Save a Life.
                                    </span>

                                </h1>

                                <p className="mt-5 max-w-xl text-base leading-7 text-slate-500 md:text-lg">

                                    Connect with people who need blood.
                                    Your timely response can make a real
                                    difference for someone in need.

                                </p>

                                <div className="mt-8 flex flex-wrap gap-3">

                                    <button
                                        onClick={() => navigate("/createdoner")}
                                        className="group flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-red-600/20 transition duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-xl"
                                    >

                                        <Plus size={20} />

                                        Create Blood Request

                                        <ArrowUpRight
                                            size={18}
                                            className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                                        />

                                    </button>

                                    <button
                                        onClick={handleSubmite}
                                        className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 font-semibold text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                                    >

                                        <RefreshCw size={18} />

                                        Refresh

                                    </button>

                                </div>

                            </div>

                            <div className="relative">

                                <div className="absolute inset-0 rotate-3 rounded-[28px] bg-red-100" />

                                <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-red-600 via-red-600 to-rose-700 p-7 text-white shadow-2xl shadow-red-900/15">

                                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-[25px] border-white/10" />

                                    <div className="absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-white/5" />

                                    <div className="relative">

                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 backdrop-blur">

                                            <HeartPulse size={30} />

                                        </div>

                                        <p className="mt-7 text-sm font-medium text-red-100">
                                            Help Someone Today
                                        </p>

                                        <h2 className="mt-2 text-3xl font-black">
                                            Be a Lifesaver.
                                        </h2>

                                        <p className="mt-3 text-sm leading-6 text-red-100">

                                            Find a request, check the details,
                                            and reach out to help someone in need.

                                        </p>

                                        <div className="mt-7 flex items-center gap-3 border-t border-white/20 pt-5">

                                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                                                <ShieldCheck size={23} />
                                            </div>

                                            <div>
                                                <p className="font-bold">
                                                    Every Donor Matters
                                                </p>

                                                <p className="mt-1 text-xs text-red-100">
                                                    Together, we make a difference.
                                                </p>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                <main className="mx-auto max-w-7xl px-5 pt-10  md:px-8">

                    <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

                        <div>

                            <div className="mb-3 flex items-center gap-2 text-sm font-bold text-red-600">

                                <Activity size={17} />

                                LIVE REQUEST DIRECTORY

                            </div>

                            <h2 className="text-2xl font-black tracking-tight text-slate-900 md:text-3xl">
                                Blood Requests
                            </h2>

                            <p className="mt-2 text-sm text-slate-500 md:text-base">
                                Browse requests and find where your help is needed.
                            </p>

                        </div>

                        <div className="flex items-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm sm:self-auto">

                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                            </span>

                            <span className="text-sm font-semibold text-slate-600">
                                {allblood.length} Total Requests
                            </span>

                        </div>

                    </div>

                    {loading ? (

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

                            {[1, 2, 3].map((item) => (

                                <div
                                    key={item}
                                    className="animate-pulse overflow-hidden rounded-2xl border border-slate-200 bg-white p-6"
                                >

                                    <div className="mb-6 flex items-center gap-3">

                                        <div className="h-12 w-12 rounded-xl bg-slate-200" />

                                        <div className="flex-1">

                                            <div className="mb-2 h-4 w-32 rounded bg-slate-200" />

                                            <div className="h-3 w-24 rounded bg-slate-100" />

                                        </div>

                                    </div>

                                    <div className="space-y-5">

                                        <div className="h-12 rounded-xl bg-slate-100" />

                                        <div className="h-12 rounded-xl bg-slate-100" />

                                        <div className="h-12 rounded-xl bg-slate-100" />

                                        <div className="h-10 rounded-xl bg-slate-100" />

                                    </div>

                                </div>

                            ))}

                        </div>

                    ) : allblood.length === 0 ? (

                        <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm">

                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-red-50 text-red-500">
                                <Droplet size={38} />
                            </div>

                            <h3 className="mt-6 text-2xl font-black text-slate-900">
                                No Blood Requests Yet
                            </h3>

                            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">

                                There are currently no blood requests available.
                                Create a request or refresh to check again.

                            </p>

                            <div className="mt-7 flex flex-wrap justify-center gap-3">

                                <button
                                    onClick={() => navigate("/createdoner")}
                                    className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-bold text-white transition hover:bg-red-700"
                                >
                                    <Plus size={19} />
                                    New Request
                                </button>

                                <button
                                    onClick={handleSubmite}
                                    className="flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
                                >
                                    <RefreshCw size={17} />
                                    Try Again
                                </button>

                            </div>

                        </div>

                    ) : (

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

                            {allblood.map((eachdata) => (

                                <article
                                    key={eachdata._id}
                                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-red-200 hover:shadow-xl hover:shadow-slate-900/5"
                                >

                                    <div className="h-1.5 bg-gradient-to-r from-red-600 via-rose-500 to-orange-400" />

                                    <div className="border-b border-slate-100 p-5">

                                        <div className="flex items-start justify-between gap-3">

                                            <div className="flex min-w-0 items-center gap-3">

                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-md shadow-red-500/20 transition duration-300 group-hover:scale-105">

                                                    <UserRound size={23} />

                                                </div>

                                                <div className="min-w-0">

                                                    <h3 className="truncate text-base font-extrabold text-slate-900">
                                                        {eachdata.name || "Unknown"}
                                                    </h3>

                                                    <p className="mt-1 text-xs font-medium text-slate-400">
                                                        Blood Donation Request
                                                    </p>

                                                </div>

                                            </div>

                                            <div className="flex shrink-0 items-center gap-1.5 rounded-xl border border-red-100 bg-red-50 px-3 py-2 text-sm font-black text-red-600">

                                                <Droplet
                                                    size={16}
                                                    fill="currentColor"
                                                />

                                                {eachdata.bloodGroup || "N/A"}

                                            </div>

                                        </div>

                                        <div className="mt-5 flex items-center justify-between gap-2">

                                            <span
                                                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ${eachdata.urgency === "Emergency"
                                                    ? "bg-red-50 text-red-600"
                                                    : "bg-orange-50 text-orange-600"
                                                    }`}
                                            >

                                                <span
                                                    className={`h-1.5 w-1.5 rounded-full ${eachdata.urgency === "Emergency"
                                                        ? "bg-red-500"
                                                        : "bg-orange-500"
                                                        }`}
                                                />

                                                {eachdata.urgency || "Normal"}

                                            </span>

                                            <span className="flex items-center gap-1 text-xs font-medium text-slate-400">

                                                <Clock3 size={14} />

                                                Needed by{" "}
                                                {eachdata.requiredDate
                                                    ? new Date(
                                                        eachdata.requiredDate
                                                    ).toLocaleDateString("en-GB")
                                                    : "N/A"}

                                            </span>

                                        </div>

                                    </div>

                                    <div className="flex-1 space-y-4 p-5">

                                        <div className="flex items-center gap-3 rounded-xl border border-red-100/80 bg-red-50/60 p-3.5">

                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-red-600 shadow-sm">
                                                <Droplet size={21} />
                                            </div>

                                            <div>
                                                <p className="text-xs font-medium text-slate-500">
                                                    Required Blood Units
                                                </p>

                                                <p className="mt-1 text-sm font-extrabold text-slate-900">
                                                    {eachdata.requiredUnits || 0} Units
                                                </p>
                                            </div>

                                        </div>

                                        <div className="flex items-start gap-3">

                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                                                <MapPin size={18} />
                                            </div>

                                            <div className="min-w-0 flex-1 pt-0.5">

                                                <p className="text-xs font-medium text-slate-400">
                                                    City / Location
                                                </p>

                                                <p className="mt-1  text-sm font-bold text-slate-800">
                                                    {eachdata.city || "N/A"}
                                                </p>

                                            </div>

                                        </div>

                                        <div className="flex items-start gap-3">

                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                                                <Phone size={18} />
                                            </div>

                                            <div className="min-w-0 flex-1 pt-0.5">

                                                <p className="text-xs font-medium text-slate-400">
                                                    Contact Number
                                                </p>

                                                <p className="mt-1 break-all text-sm font-bold text-slate-800">
                                                    {eachdata.contactNumber || "N/A"}
                                                </p>

                                            </div>

                                        </div>

                                        <div className="flex items-start gap-3">

                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                                                <Hospital size={18} />
                                            </div>

                                            <div className="min-w-0 flex-1 pt-0.5">

                                                <p className="text-xs font-medium text-slate-400">
                                                    Hospital Name
                                                </p>

                                                <p className="mt-1  text-sm font-bold text-slate-800">
                                                    {eachdata.hospitalName || "N/A"}
                                                </p>

                                            </div>

                                        </div>

                                        {eachdata.notes && (

                                            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">

                                                <div className="mb-2 flex items-center gap-2 text-slate-700">

                                                    <FileText
                                                        size={16}
                                                        className="text-red-500"
                                                    />

                                                    <span className="text-xs font-extrabold uppercase tracking-wide">
                                                        Additional Notes
                                                    </span>

                                                </div>

                                                <p className=" text-sm leading-6 text-slate-500">
                                                    {eachdata.notes}
                                                </p>

                                            </div>

                                        )}

                                    </div>

                                    <div className="mt-auto border-t border-slate-100 bg-slate-50/80 p-5">

                                        <div className="flex gap-2.5">

                                            <button
                                                onClick={() => {
                                                    navigate("/emargancy", {
                                                        state: allblood,
                                                    });
                                                }}
                                                className="group/btn flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-red-600 px-3 py-3 text-sm font-bold text-white shadow-md shadow-red-600/15 transition duration-300 hover:bg-red-700 hover:shadow-lg"
                                            >

                                                <HandHeart
                                                    size={18}
                                                    className="transition group-hover/btn:scale-110"
                                                />

                                                Respond Now

                                                <ArrowUpRight
                                                    size={16}
                                                    className="transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                                                />

                                            </button>

                                            <button
                                                onClick={async () => {
                                                    try {
                                                        const response =
                                                            await axios.post(
                                                                import.meta.env.VITE_Backend_url +
                                                                "/bloodrequest/getdeletblood",
                                                                {
                                                                    id: eachdata._id,
                                                                }
                                                            );

                                                        if (
                                                            response.data.success === true
                                                        ) {
                                                            handleSubmite();
                                                        }
                                                    } catch (error) {
                                                        console.log(
                                                            "Delete Blood Error:",
                                                            error
                                                        );
                                                    }
                                                }}
                                                title="Delete request"
                                                aria-label="Delete blood request"
                                                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-100 bg-white text-red-500 transition duration-200 hover:border-red-500 hover:bg-red-50 hover:text-red-700"
                                            >

                                                <Trash2 size={18} />

                                            </button>


                                            <button
                                                onClick={() => navigate(`/donerupdata/${eachdata._id}`)}

                                                title="Update request"
                                                aria-label="Update blood request"
                                                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-white text-blue-600 transition duration-200 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700"
                                            >
                                                <Pencil size={18} />
                                            </button>


                                        </div>

                                    </div>

                                </article>

                            ))}

                        </div>

                    )}

                    <div className="mt-10 flex flex-col gap-3 rounded-2xl border border-red-100 bg-white p-5 sm:flex-row sm:items-center">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                            <HeartPulse size={23} />
                        </div>

                        <div>

                            <h3 className="font-bold text-slate-900">
                                Every donation makes a difference.
                            </h3>

                            <p className="mt-1 text-sm leading-6 text-slate-500">

                                Please confirm the blood group, hospital details,
                                and availability directly with the requester
                                before making arrangements.

                            </p>

                        </div>

                    </div>

                </main>
            </div>
            <div className="absolute w-full top-534">
                <Fouter />

            </div>
        </div>
    );
};
