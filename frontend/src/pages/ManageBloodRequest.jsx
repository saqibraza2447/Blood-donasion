
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Sidebar } from "../components/Sidebar";
import {
    Trash2,
    CalendarDays,
    Droplet,
    Search,
    RefreshCw,
    AlertTriangle,
    Activity,
    Phone,
    XCircle,
} from "lucide-react";

const ManageBloodRequest = () => {
    const [allblood, setallblood] = useState([]);
    const [search, setSearch] = useState("");
    const [priority, setPriority] = useState("All");
    const [loading, setLoading] = useState(true);

    const handleSubmite = async () => {
        try {
            setLoading(true);

            const response = await axios.get(
                import.meta.env.VITE_Backend_url + "/findboner/allfind"
            );

            setallblood(response.data.bloodrequests || []);
        } catch (error) {
            console.log("Get Blood Error:", error);
            setallblood([]);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this blood request?"
        );

        if (!confirmDelete) return;

        try {
            await axios.post(
                import.meta.env.VITE_Backend_url + "/findboner/getdeletblood",
                { id: id }
            );

            setallblood((previous) =>
                previous.filter((item) => item._id !== id)
            );

            alert("Blood request deleted successfully.");
        } catch (error) {
            console.log("Delete Error:", error);
            alert("Unable to delete this request. Check your backend route.");
        }
    };

    useEffect(() => {
        handleSubmite();
    }, []);

    const filteredBlood = allblood.filter((data) => {
        const text = search.toLowerCase().trim();

        const matchSearch =
            String(data.bloodGroup || "").toLowerCase().includes(text) ||
            String(data.reason || "").toLowerCase().includes(text) ||
            String(data.phone || "").toLowerCase().includes(text);

        const matchPriority =
            priority === "All" ||
            String(data.priority || "").toLowerCase() ===
            priority.toLowerCase();

        return matchSearch && matchPriority;
    });

    const highCount = allblood.filter(
        (data) => String(data.priority || "").toLowerCase() === "high"
    ).length;

    const emergencyCount = allblood.filter(
        (data) => String(data.priority || "").toLowerCase() === "emergency"
    ).length;

    const formatDate = (date) => {
        if (!date) return "Not specified";

        const parsedDate = new Date(date);

        if (isNaN(parsedDate.getTime())) return "Invalid date";

        return parsedDate.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    const clearFilters = () => {
        setSearch("");
        setPriority("All");
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Sidebar />

            <main className="min-w-0 p-4 sm:p-6 lg:ml-75 lg:p-8">

                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                            LifeDrop Admin Panel
                        </p>

                        <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">
                            Manage Find Blood
                        </h1>

                        <p className="mt-2 text-sm text-slate-500">
                            Manage and monitor all blood finding requests.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleSubmite}
                        disabled={loading}
                        className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:opacity-60"
                    >
                        <RefreshCw
                            size={17}
                            className={loading ? "animate-spin" : ""}
                        />
                        Refresh
                    </button>
                </div>

                <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <div className="flex items-center justify-between gap-3">
                            <div>
                                <p className="text-sm font-medium text-slate-500">
                                    Total Requests
                                </p>

                                <h2 className="mt-3 text-3xl font-bold text-slate-800">
                                    {allblood.length}
                                </h2>

                                <p className="mt-1 text-xs text-slate-400">
                                    All blood requests
                                </p>
                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                                <Droplet size={24} />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <div className="flex items-center justify-between gap-3">
                            <div>
                                <p className="text-sm font-medium text-slate-500">
                                    High Priority
                                </p>

                                <h2 className="mt-3 text-3xl font-bold text-slate-800">
                                    {highCount}
                                </h2>

                                <p className="mt-1 text-xs text-slate-400">
                                    High priority requests
                                </p>
                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                                <Activity size={24} />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
                        <div className="flex items-center justify-between gap-3">
                            <div>
                                <p className="text-sm font-medium text-slate-500">
                                    Emergency Requests
                                </p>

                                <h2 className="mt-3 text-3xl font-bold text-red-600">
                                    {emergencyCount}
                                </h2>

                                <p className="mt-1 text-xs text-slate-400">
                                    Urgent requirements
                                </p>
                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                                <AlertTriangle size={24} />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center">

                        <div className="relative min-w-0 flex-1">
                            <Search
                                size={19}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                            />

                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search blood group, reason or phone..."
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-100"
                            />
                        </div>

                        <select
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 outline-none focus:border-red-400 md:w-52"
                        >
                            <option value="All">All Priorities</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                            <option value="Emergency">Emergency</option>
                        </select>

                        {(search || priority !== "All") && (
                            <button
                                type="button"
                                onClick={clearFilters}
                                className="flex items-center justify-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100"
                            >
                                <XCircle size={17} />
                                Clear
                            </button>
                        )}
                    </div>

                    <div className="mt-4 text-sm text-slate-500">
                        Showing{" "}
                        <span className="font-bold text-slate-800">
                            {filteredBlood.length}
                        </span>{" "}
                        of{" "}
                        <span className="font-bold text-slate-800">
                            {allblood.length}
                        </span>{" "}
                        requests
                    </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                    <div className="border-b border-slate-200 px-5 py-5 sm:px-6">
                        <h2 className="text-lg font-bold text-slate-800">
                            Blood Requests
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Review request details and manage records.
                        </p>
                    </div>

                    {loading ? (
                        <div className="px-6 py-16 text-center">
                            <RefreshCw
                                size={30}
                                className="mx-auto animate-spin text-red-500"
                            />

                            <p className="mt-4 text-sm text-slate-500">
                                Loading blood requests...
                            </p>
                        </div>
                    ) : filteredBlood.length === 0 ? (

                        <div className="px-6 py-16 text-center sm:py-20">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-500">
                                <Droplet size={30} />
                            </div>

                            <h3 className="text-xl font-bold text-slate-800">
                                No Data Found
                            </h3>

                            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
                                No blood requests match your search.
                                Try another blood group, phone number or priority.
                            </p>

                            <button
                                type="button"
                                onClick={clearFilters}
                                className="mt-5 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                            >
                                Clear Filters
                            </button>
                        </div>

                    ) : (

                        <div className="divide-y divide-slate-100">

                            {filteredBlood.map((data) => (
                                <div
                                    key={data._id}
                                    className="grid grid-cols-1 gap-4 p-5 transition hover:bg-slate-50 sm:p-6 lg:grid-cols-7 lg:items-center lg:gap-4"
                                >

                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                                            <Droplet size={22} />
                                        </div>

                                        <div>
                                            <p className="text-xs text-slate-400">
                                                Blood Group
                                            </p>

                                            <h3 className="mt-1 font-bold text-slate-800">
                                                {data.bloodGroup || "N/A"}
                                            </h3>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="mb-2 text-xs text-slate-400 lg:hidden">
                                            Priority
                                        </p>

                                        <span
                                            className={`inline-flex rounded-full px-3 py-1.5 text-xs font-bold ${String(data.priority || "").toLowerCase() === "emergency"
                                                    ? "bg-red-100 text-red-700"
                                                    : String(data.priority || "").toLowerCase() === "high"
                                                        ? "bg-orange-100 text-orange-700"
                                                        : String(data.priority || "").toLowerCase() === "medium"
                                                            ? "bg-amber-100 text-amber-700"
                                                            : "bg-emerald-100 text-emerald-700"
                                                }`}
                                        >
                                            {data.priority || "Low"}
                                        </span>
                                    </div>

                                    <div className="min-w-0">
                                        <p className="mb-1 text-xs text-slate-400 lg:hidden">
                                            Reason
                                        </p>

                                        <p className="break-words text-sm font-semibold text-slate-700">
                                            {data.reason || "No reason provided"}
                                        </p>

                                        <p className="mt-1 text-xs text-slate-400">
                                            Blood Requirement
                                        </p>
                                    </div>

                                    <div>
                                        <p className="mb-1 text-xs text-slate-400 lg:hidden">
                                            Contact
                                        </p>

                                        <div className="flex items-center gap-2">
                                            <Phone
                                                size={15}
                                                className="shrink-0 text-slate-400"
                                            />

                                            <span className="break-all text-sm text-slate-600">
                                                {data.phone || "N/A"}
                                            </span>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="mb-1 text-xs text-slate-400 lg:hidden">
                                            Required Date
                                        </p>

                                        <div className="flex items-center gap-2">
                                            <CalendarDays
                                                size={16}
                                                className="shrink-0 text-slate-400"
                                            />

                                            <span className="text-sm text-slate-600">
                                                {formatDate(data.requiredDate)}
                                            </span>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="mb-1 text-xs text-slate-400 lg:hidden">
                                            Required Units
                                        </p>

                                        <p className="text-sm font-bold text-slate-800">
                                            {data.requiredUnits || 0} Units
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between lg:justify-center">
                                        <span className="text-xs text-slate-400 lg:hidden">
                                            Delete Request
                                        </span>

                                        <button
                                            type="button"
                                            title="Delete Request"
                                            aria-label="Delete blood request"
                                            onClick={() => handleDelete(data._id)}
                                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>

                                </div>
                            ))}

                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default ManageBloodRequest;
