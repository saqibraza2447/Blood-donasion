import React, { useState, useEffect } from "react";
import { Sidebar } from "../components/Sidebar";
import axios from "axios";
import {
    Droplet,
    Trash2,
    ClipboardList,
    AlertCircle,
    CheckCircle2,
    Clock,
    CalendarDays,
    Building2,
    Phone,
    HeartPulse,
    ArrowUpRight,
} from "lucide-react";

export const ManageRequste = () => {
    const [allblood, setallblood] = useState([]);

    async function handleSubmite() {
        try {
            const response = await axios.get(
                import.meta.env.VITE_Backend_url +
                "/bloodrequest/getAllRequest"
            );

            setallblood(response.data.bloodrequests || []);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        handleSubmite();
    }, []);

    const emergencyCount = allblood.filter(
        (e) => e.urgency?.toLowerCase() === "emergency"
    ).length;

    const normalCount = allblood.length - emergencyCount;

    return (
        <div className="min-h-screen bg-slate-50">
            <Sidebar />

            <main className="min-w-0 ml-0 p-4 sm:p-6 lg:ml-[280px] lg:p-8">

                <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                    <div>
                        <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-red-600">
                            <HeartPulse size={17} />
                            LifeDrop / Administration
                        </div>

                        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                            Blood Requests
                            <span className="text-red-600"> Management</span>
                        </h1>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                            Manage patient blood requests, monitor urgent cases, and
                            keep track of essential request information in one place.
                        </p>
                    </div>

                    <div className="flex w-fit items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
                            <ClipboardList size={21} />
                        </div>
                        <div>
                            <p className="text-xs font-medium text-slate-500">
                                Total Requests
                            </p>
                            <p className="text-xl font-extrabold text-slate-900">
                                {allblood.length}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">

                    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-500">
                                    All Blood Requests
                                </p>
                                <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
                                    {allblood.length}
                                </h2>
                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                                <Droplet size={24} />
                            </div>
                        </div>

                        <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs text-slate-500">
                            <ArrowUpRight size={15} className="text-red-500" />
                            Total requests received by the platform
                        </div>
                    </div>

                    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-500">
                                    Emergency Cases
                                </p>
                                <h2 className="mt-3 text-3xl font-extrabold text-red-600">
                                    {emergencyCount}
                                </h2>
                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                                <AlertCircle size={24} />
                            </div>
                        </div>

                        <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs text-slate-500">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                            Requests marked as emergency
                        </div>
                    </div>

                    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:col-span-2 xl:col-span-1">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-500">
                                    Other Requests
                                </p>
                                <h2 className="mt-3 text-3xl font-extrabold text-emerald-600">
                                    {normalCount}
                                </h2>
                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                                <CheckCircle2 size={24} />
                            </div>
                        </div>

                        <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs text-slate-500">
                            <Clock size={15} className="text-emerald-500" />
                            Requests without emergency priority
                        </div>
                    </div>
                </div>

                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-lg font-bold text-slate-900">
                            Patient Request Directory
                        </h2>
                        <p className="mt-1 text-sm text-slate-500">
                            Review blood groups, hospital details, and required units.
                        </p>
                    </div>

                    <span className="w-fit rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600">
                        {allblood.length} Records
                    </span>
                </div>

                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                    {allblood.length === 0 ? (
                        <div className="flex flex-col items-center justify-center px-5 py-20 text-center">
                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                                <ClipboardList size={30} />
                            </div>

                            <h3 className="text-lg font-bold text-slate-800">
                                No Blood Requests Found
                            </h3>

                            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                                There are currently no blood requests to display.
                                New patient requests will appear here when available.
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[1050px] text-left">
                                <thead>
                                    <tr className="border-b border-slate-200 bg-slate-50">
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                                            Patient Details
                                        </th>
                                        <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                                            Blood Group
                                        </th>
                                        <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                                            Priority
                                        </th>
                                        <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                                            Contact
                                        </th>
                                        <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                                            Required Date
                                        </th>
                                        <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                                            Status
                                        </th>
                                        <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                                            Units
                                        </th>
                                        <th className="px-5 py-4 text-right text-xs font-bold uppercase tracking-wider text-slate-500">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-slate-100">
                                    {allblood.map((e) => (
                                        <tr
                                            key={e._id}
                                            className="transition-colors hover:bg-slate-50/80"
                                        >
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                                                        <HeartPulse size={19} />
                                                    </div>

                                                    <div>
                                                        <p className="font-bold text-slate-800">
                                                            {e.name || "Unknown Patient"}
                                                        </p>

                                                        <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                                                            <Building2 size={13} />
                                                            {e.hospitalName || "Hospital not provided"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="px-5 py-5">
                                                <span className="inline-flex items-center gap-1.5 rounded-lg border border-red-100 bg-red-50 px-3 py-2 text-sm font-extrabold text-red-600">
                                                    <Droplet size={15} className="fill-red-500" />
                                                    {e.bloodGroup || e.bloodgroup || "N/A"}
                                                </span>
                                            </td>

                                            <td className="px-5 py-5">
                                                <span
                                                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold ${e.urgency?.toLowerCase() === "emergency"
                                                            ? "border-red-200 bg-red-50 text-red-700"
                                                            : "border-emerald-200 bg-emerald-50 text-emerald-700"
                                                        }`}
                                                >
                                                    <span
                                                        className={`h-1.5 w-1.5 rounded-full ${e.urgency?.toLowerCase() === "emergency"
                                                                ? "animate-pulse bg-red-500"
                                                                : "bg-emerald-500"
                                                            }`}
                                                    />
                                                    {e.urgency || "Normal"}
                                                </span>
                                            </td>

                                            <td className="px-5 py-5">
                                                <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                                                    <Phone size={14} className="shrink-0 text-slate-400" />
                                                    {e.contactNumber || e.phone || "Not provided"}
                                                </div>
                                            </td>

                                            <td className="px-5 py-5">
                                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                                    <CalendarDays
                                                        size={15}
                                                        className="shrink-0 text-slate-400"
                                                    />
                                                    {e.requiredDate &&
                                                        !Number.isNaN(new Date(e.requiredDate).getTime())
                                                        ? new Date(e.requiredDate).toLocaleDateString(
                                                            "en-GB"
                                                        ).replaceAll("/", "-")
                                                        : "Not specified"}
                                                </div>
                                            </td>

                                            <td className="px-5 py-5">
                                                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                                                    <CheckCircle2 size={13} />
                                                    Active
                                                </span>
                                            </td>

                                            <td className="px-5 py-5">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-lg font-extrabold text-slate-900">
                                                        {e.requiredUnits ?? 0}
                                                    </span>
                                                    <span className="text-xs text-slate-500">
                                                        units
                                                    </span>
                                                </div>
                                            </td>

                                            <td className="px-5 py-5 text-right">
                                                <button
                                                    type="button"
                                                    title="Delete action not connected"
                                                    className="rounded-xl border border-slate-200 p-2.5 text-slate-400 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                <div className="mt-5 flex flex-col gap-2 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        LifeDrop Administration · Patient Request Overview
                    </p>

                    <p className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        Request directory
                    </p>
                </div>
            </main>
        </div>
    );
};

export default ManageRequste;