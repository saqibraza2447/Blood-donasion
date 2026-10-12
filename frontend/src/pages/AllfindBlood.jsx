
import React, { useEffect, useState } from "react";
import axios from "axios";
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
    Trash2,
    Phone,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Fouter } from "../components/Fouter";


export const AllfindBlood = () => {
    const navigate = useNavigate();

    const [allblood, setallblood] = useState([]);
    const [loading, setLoading] = useState(true);

    async function handleSubmite() {
        try {
            setLoading(true);

            const response = await axios.get(
                import.meta.env.VITE_Backend_url + "/findboner/allfind"
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
        <div className="min-h-screen bg-slate-50 pt-20">

            <div className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-7xl px-5 py-7">

                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                        <div>

                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3 py-1.5">
                                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-white shadow-sm">
                                    <Droplet
                                        size={15}
                                        fill="currentColor"
                                    />
                                </div>

                                <span className="text-xs font-bold tracking-wide text-red-600">
                                    LIFEDROP
                                </span>

                                <span className="h-1 w-1 rounded-full bg-red-300"></span>

                                <span className="text-xs font-medium text-slate-500">
                                    Blood Finder
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                                    Find Blood
                                </h1>

                                <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500">
                                    Requests
                                </span>
                            </div>

                            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                                Find people who need blood and make a difference by
                                responding to active blood requests.
                            </p>

                            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">

                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-red-500"></span>
                                    Active Requests
                                </div>

                                <div className="h-4 w-px bg-slate-200"></div>

                                <div className="flex items-center gap-2">
                                    <HeartHandshake
                                        size={15}
                                        className="text-red-500"
                                    />
                                    Help Save Lives
                                </div>

                            </div>
                        </div>

                        <div className="flex items-center">

                            <button
                                onClick={() => navigate("/createfindblood")}
                                className="group flex items-center gap-3 rounded-2xl bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-red-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-xl hover:shadow-red-200"
                            >
                                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/15 transition-transform duration-300 group-hover:rotate-12">
                                    <Droplet
                                        size={18}
                                        fill="currentColor"
                                    />
                                </span>

                                <span>
                                    Add Blood Request
                                </span>

                                <ArrowRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>

                        </div>

                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-5 py-8">

                <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-sm font-medium text-slate-500">
                                    Total Requests
                                </p>

                                <h2 className="mt-1 text-3xl font-bold text-slate-900">
                                    {allblood.length}
                                </h2>
                            </div>

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
                                <Droplet size={22} fill="currentColor" />
                            </div>

                        </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-sm font-medium text-slate-500">
                                    High Priority
                                </p>

                                <h2 className="mt-1 text-3xl font-bold text-red-600">
                                    {
                                        allblood.filter(
                                            (item) => item.priority === "High"
                                        ).length
                                    }
                                </h2>
                            </div>

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
                                <AlertTriangle size={22} />
                            </div>

                        </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-sm font-medium text-slate-500">
                                    Help Someone
                                </p>

                                <h2 className="mt-1 text-xl font-bold text-slate-900">
                                    Become a Donor
                                </h2>
                            </div>

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                                <HeartHandshake size={23} />
                            </div>

                        </div>
                    </div>

                </div>

                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                        <h2 className="text-xl font-bold text-slate-900">
                            Blood Requests
                        </h2>

                        <p className="text-sm text-slate-500">
                            People currently looking for blood donors
                        </p>
                    </div>

                    <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-slate-500 shadow-sm ring-1 ring-slate-200">
                        <Search size={16} />
                        {allblood.length} Requests
                    </div>

                </div>

                {loading ? (

                    <div className="flex min-h-[300px] items-center justify-center rounded-3xl border border-slate-200 bg-white">

                        <div className="text-center">

                            <RefreshCw
                                size={30}
                                className="mx-auto animate-spin text-red-600"
                            />

                            <p className="mt-3 text-sm font-medium text-slate-500">
                                Loading blood requests...
                            </p>

                        </div>

                    </div>

                ) : allblood.length === 0 ? (

                    <div className="flex min-h-[380px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white px-6 text-center">

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
                            onClick={handleSubmite}
                            className="mt-5 flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                        >
                            <RefreshCw size={17} />
                            Refresh Requests
                        </button>

                    </div>

                ) : (

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

                        {allblood.map((e) => (

                            <div
                                key={e._id}
                                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >

                                <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-red-50 to-white px-5 py-4">

                                    <div className="flex items-center gap-3">

                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-100 text-red-600">
                                            <Droplet
                                                size={23}
                                                fill="currentColor"
                                            />
                                        </div>

                                        <div>
                                            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                                                Blood Group
                                            </p>

                                            <h2 className="text-xl font-bold text-red-600">
                                                {e.bloodGroup}
                                            </h2>
                                        </div>

                                    </div>

                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-semibold ${e.priority === "High"
                                            ? "bg-red-100 text-red-600"
                                            : e.priority === "Medium"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : e.priority === "Emergency"
                                                    ? "bg-red-600 text-white"
                                                    : "bg-green-100 text-green-600"
                                            }`}
                                    >
                                        {e.priority}
                                    </span>

                                </div>

                                <div className="space-y-4 p-5">

                                    <div className="flex items-start gap-3">

                                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                                            <FileText size={18} />
                                        </div>

                                        <div className="min-w-0">

                                            <p className="text-xs font-medium text-slate-400">
                                                Reason
                                            </p>

                                            <p className="truncate font-semibold text-slate-800">
                                                {e.reason}
                                            </p>

                                        </div>

                                    </div>

                                    <div className="flex items-start gap-3">

                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500">
                                            <Hash size={18} />
                                        </div>

                                        <div>

                                            <p className="text-xs font-medium text-slate-400">
                                                Required Units
                                            </p>

                                            <p className="font-semibold text-slate-800">
                                                {e.requiredUnits} Units
                                            </p>

                                        </div>

                                    </div>

                                    <div className="flex items-start gap-3">

                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-500">
                                            <CalendarDays size={18} />
                                        </div>

                                        <div>

                                            <p className="text-xs font-medium text-slate-400">
                                                Required Date
                                            </p>

                                            <p className="font-semibold text-slate-800">
                                                {e.requiredDate}
                                            </p>

                                        </div>

                                    </div>

                                    <div className="flex items-start gap-3">

                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
                                            <Phone size={18} />
                                        </div>

                                        <div>

                                            <p className="text-xs font-medium text-slate-400">
                                                Contact Number
                                            </p>

                                            <p className="font-semibold text-slate-800">
                                                {e.phone || "No phone number"}
                                            </p>

                                        </div>

                                    </div>

                                    <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3">

                                        <AlertTriangle
                                            size={18}
                                            className="shrink-0 text-red-500"
                                        />

                                        <span className="text-sm text-slate-600">
                                            Blood is required on{" "}
                                            <span className="font-semibold text-slate-800">
                                                {e.requiredDate}
                                            </span>
                                        </span>

                                    </div>

                                    <div className="flex gap-3">

                                        <button
                                            type="button"
                                            onClick={() =>
                                                navigate("/findeblood", {
                                                    state: {
                                                        bloodRequest: e,
                                                    },
                                                })
                                            }
                                            className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-red-700"
                                        >
                                            Respond Now

                                            <ArrowRight
                                                size={18}
                                                className="transition-transform duration-300 group-hover:translate-x-1"
                                            />
                                        </button>

                                        <button
                                            type="button"
                                            onClick={async function () {
                                                let responce = await axios.post(import.meta.env.VITE_Backend_url + "/findboner/getdeletblood",
                                                    {
                                                        id: e?._id
                                                    }
                                                )

                                                if (responce.data.success === true) {
                                                    handleSubmite()
                                                }
                                            }}
                                            className="flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-5 py-3 font-semibold text-red-600 transition-all duration-300 hover:bg-red-600 hover:text-white hover:shadow-lg hover:shadow-red-200"
                                        >
                                            <Trash2 size={18} />
                                            Delete
                                        </button>
                                    </div>

                                </div>
                            </div>

                        ))}

                    </div>
                )}

            </div>
            <Fouter/>
        </div>
    );
};
