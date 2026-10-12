
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
    Droplet,
    Phone,
    CalendarDays,
    FileText,
    Plus,
    Minus,
    ArrowLeft,
    ShieldCheck,
    AlertCircle,
} from "lucide-react";

const CreateFindblood = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        bloodGroup: "",
        priority: "Low",
        phone: "",
        requiredUnits: 1,
        requiredDate: "",
        reason: "",
    });

    const today = new Date().toISOString().split("T")[0];

    const createRequest = async (e) => {
        e.preventDefault();

        if (!data.bloodGroup) {
            alert("Please select blood group");
            return;
        }

        try {
            const response = await axios.post(
                import.meta.env.VITE_Backend_url + "/findboner/findblood",
                data
            );

            if (response.data.success) {
                navigate("/allfindblood");
            }
        } catch (error) {
            console.log(error);
            alert("Something went wrong");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50/40 px-4 py-24 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-4xl">

                <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="group mb-7 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-x-1 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                >
                    <ArrowLeft
                        size={18}
                        className="transition-transform duration-300 group-hover:-translate-x-1"
                    />
                    Back
                </button>

                <div className="mb-8">

                    <div className="mb-4 flex items-center gap-4">

                        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-700 text-white shadow-lg shadow-red-200">
                            <Droplet
                                size={28}
                                fill="currentColor"
                            />

                            <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-red-400" />
                        </div>

                        <div>
                            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                                Create Blood Request
                            </h1>

                            <p className="mt-1 text-sm text-slate-500 sm:text-base">
                                Find the right donor when you need blood.
                            </p>
                        </div>

                    </div>

                    <div className="h-1 w-20 rounded-full bg-gradient-to-r from-red-600 to-red-300" />
                </div>

                <div

                    className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_-20px_rgba(15,23,42,0.18)]"
                >

                    <div className="border-b border-slate-100 bg-gradient-to-r from-red-50 via-white to-white px-6 py-5 sm:px-8">

                        <div className="flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-red-600">
                                <ShieldCheck size={20} />
                            </div>

                            <div>
                                <h2 className="font-bold text-slate-900">
                                    Request Information
                                </h2>

                                <p className="text-xs text-slate-500">
                                    Provide accurate details for faster response
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="p-6 sm:p-8">

                        <div className="mb-8">

                            <div className="mb-3 flex items-center justify-between">
                                <label className="text-sm font-bold text-slate-800">
                                    Blood Group
                                </label>

                                <span className="text-xs font-medium text-red-500">
                                    Required
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

                                {[
                                    "A+",
                                    "A-",
                                    "B+",
                                    "B-",
                                    "AB+",
                                    "AB-",
                                    "O+",
                                    "O-",
                                ].map((group) => (

                                    <button
                                        key={group}
                                        type="button"
                                        onClick={() =>
                                            setData({
                                                ...data,
                                                bloodGroup: group,
                                            })
                                        }
                                        className={`group relative overflow-hidden rounded-xl border-2 py-3.5 text-sm font-extrabold transition-all duration-300 ${data.bloodGroup === group
                                                ? "border-red-600 bg-gradient-to-br from-red-500 to-red-700 text-white shadow-lg shadow-red-200"
                                                : "border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-red-300 hover:bg-red-50 hover:text-red-600"
                                            }`}
                                    >
                                        {data.bloodGroup === group && (
                                            <span className="absolute right-2 top-1 text-[10px] text-red-100">
                                                ✓
                                            </span>
                                        )}

                                        <Droplet
                                            size={15}
                                            className={`mx-auto mb-1 ${data.bloodGroup === group
                                                    ? "text-white"
                                                    : "text-red-500"
                                                }`}
                                            fill="currentColor"
                                        />

                                        {group}
                                    </button>

                                ))}

                            </div>
                        </div>

                        <div className="mb-8 grid gap-6 md:grid-cols-2">

                            <div>
                                <label className="mb-2 block text-sm font-bold text-slate-800">
                                    Phone Number
                                </label>

                                <div className="group relative">

                                    <Phone
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-red-500"
                                    />

                                    <input
                                        type="tel"
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                phone: e.target.value,
                                            })
                                        }
                                        placeholder="03001234567"
                                        maxLength={11}
                                        required
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm font-medium text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
                                    />

                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-bold text-slate-800">
                                    Priority
                                </label>

                                <div className="relative">
                                    <AlertCircle
                                        size={18}
                                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                    />

                                    <select
                                        value={data.priority}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                priority: e.target.value,
                                            })
                                        }
                                        className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm font-medium text-slate-800 outline-none transition-all duration-300 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
                                    >
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                        <option value="Emergency">
                                            Emergency
                                        </option>
                                    </select>
                                </div>
                            </div>

                        </div>

                        <div className="mb-8 grid gap-6 md:grid-cols-2">

                            <div>
                                <label className="mb-2 block text-sm font-bold text-slate-800">
                                    Required Blood Units
                                </label>

                                <div className="flex h-[52px] items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-2">

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setData({
                                                ...data,
                                                requiredUnits: Math.max(
                                                    1,
                                                    data.requiredUnits - 1
                                                ),
                                            })
                                        }
                                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-600 shadow-sm transition-all hover:bg-slate-100 hover:text-red-600"
                                    >
                                        <Minus size={18} />
                                    </button>

                                    <div className="text-center">
                                        <span className="text-xl font-extrabold text-slate-900">
                                            {data.requiredUnits}
                                        </span>

                                        <span className="ml-1 text-xs font-medium text-slate-500">
                                            units
                                        </span>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setData({
                                                ...data,
                                                requiredUnits: Math.min(
                                                    20,
                                                    data.requiredUnits + 1
                                                ),
                                            })
                                        }
                                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 text-white shadow-md shadow-red-200 transition-all hover:bg-red-700"
                                    >
                                        <Plus size={18} />
                                    </button>

                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-bold text-slate-800">
                                    Required Date
                                </label>

                                <div className="group relative">

                                    <CalendarDays
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-red-500"
                                    />

                                    <input
                                        type="date"
                                        min={today}
                                        value={data.requiredDate}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                requiredDate: e.target.value,
                                            })
                                        }
                                        required
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm font-medium text-slate-800 outline-none transition-all duration-300 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
                                    />

                                </div>
                            </div>

                        </div>

                        <div className="mb-8">

                            <div className="mb-2 flex items-center justify-between">
                                <label className="text-sm font-bold text-slate-800">
                                    Reason for Blood Request
                                </label>

                                <span className="text-xs text-slate-400">
                                    Required
                                </span>
                            </div>

                            <div className="group relative">

                                <FileText
                                    size={18}
                                    className="absolute left-4 top-4 text-slate-400 transition-colors group-focus-within:text-red-500"
                                />

                                <textarea
                                    rows="4"
                                    value={data.reason}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            reason: e.target.value,
                                        })
                                    }
                                    placeholder="Explain briefly why blood is needed..."
                                    required
                                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm font-medium text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
                                />

                            </div>
                        </div>

                        <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-100 bg-red-50/70 p-4">

                            <ShieldCheck
                                size={19}
                                className="mt-0.5 shrink-0 text-red-600"
                            />

                            <p className="text-xs leading-5 text-slate-600">
                                Please make sure all information is correct.
                                Accurate details help donors respond quickly
                                to your blood request.
                            </p>

                        </div>

                        <button
                            onClick={createRequest}
                            type="submit"
                            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-red-600 to-red-700 py-4 text-sm font-bold text-white shadow-lg shadow-red-200 transition-all duration-300 hover:-translate-y-0.5 hover:from-red-700 hover:to-red-800 hover:shadow-xl hover:shadow-red-200"
                        >
                            <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-full" />

                            <Droplet
                                size={19}
                                fill="currentColor"
                                className="relative"
                            />

                            <span className="relative">
                                Create Blood Request
                            </span>
                        </button>

                    </div>
                </div>

                <p className="mt-5 text-center text-xs text-slate-400">
                    LifeDrop • Connecting people with life-saving blood donors
                </p>

            </div>

        </div>
    );
};

export default CreateFindblood;
