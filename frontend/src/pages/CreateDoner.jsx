
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
    HeartPulse,
    Send,
    AlertCircle,
    UserRound,
    Droplet,
    MapPin,
    Hospital,
    CalendarDays,
    Phone,
    FileText,
    ShieldCheck,
    ArrowLeft,
    CheckCircle2,
    LoaderCircle,
} from "lucide-react";

const CreateDoner = () => {
    const navigate = useNavigate();

    const [formdata, setformdata] = useState({
        name: "",
        requiredUnits: "",
        bloodGroup: "",
        urgency: "",
        city: "",
        hospitalName: "",
        requiredDate: "",
        contactNumber: "",
        notes: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value,
        });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        if (Number(formdata.requiredUnits) < 1) {
            setError("Please enter at least 1 required unit.");
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post(
                import.meta.env.VITE_Backend_url +
                "/bloodrequest/createRequest",
                {
                    ...formdata,
                    requiredUnits: Number(formdata.requiredUnits),
                }
            );

            console.log(response.data);

            if (response.data.success === true) {
                navigate("/allblood");
            } else {
                setError(
                    response.data.msg || "Unable to create blood request."
                );
            }
        } catch (err) {
            setError(
                err.response?.data?.msg ||
                "Request failed. Please try again."
            );
        } finally {
            setLoading(false);
        }
    }

    const inputClass =
        "w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3.5 text-sm text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10";

    const labelClass =
        "mb-2.5 block text-sm font-semibold text-slate-700";

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#f7f8fc] px-4 pb-16 pt-32 md:px-6 md:pt-36">

            <div className="pointer-events-none absolute -top-32 left-[-100px] h-80 w-80 rounded-full bg-red-200/40 blur-3xl" />
            <div className="pointer-events-none absolute right-[-100px] top-80 h-96 w-96 rounded-full bg-rose-100/60 blur-3xl" />

            <div className="relative mx-auto max-w-5xl">

                <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="mb-7 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                >
                    <ArrowLeft size={17} />
                    Go Back
                </button>

                <div className="mb-9 text-center">
                    <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-[26px] bg-gradient-to-br from-red-500 via-red-600 to-rose-700 shadow-xl shadow-red-500/25">
                        <HeartPulse
                            size={39}
                            strokeWidth={1.8}
                            className="text-white"
                        />
                        <span className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-[#f7f8fc] bg-emerald-500 text-white">
                            <CheckCircle2 size={16} />
                        </span>
                    </div>

                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-red-600">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                        LifeDrop Emergency Portal
                    </div>

                    <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                        Request{" "}
                        <span className="bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">
                            Blood Donation
                        </span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 md:text-base">
                        Every second matters. Share your blood requirements
                        and connect with potential donors who can make a
                        difference.
                    </p>

                    <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-500">
                        <span className="flex items-center gap-1.5">
                            <ShieldCheck size={16} className="text-emerald-500" />
                            Simple & Secure
                        </span>

                        <span className="h-1 w-1 rounded-full bg-slate-300" />

                        <span className="flex items-center gap-1.5">
                            <HeartPulse size={16} className="text-red-500" />
                            Help Save Lives
                        </span>
                    </div>
                </div>

                <div className="overflow-hidden rounded-3xl border border-white bg-white shadow-[0_24px_80px_-25px_rgba(15,23,42,0.16)]">

                    <div className="relative overflow-hidden bg-gradient-to-r from-[#b91c1c] via-[#dc2626] to-[#ef4444] px-6 py-7 md:px-9 md:py-8">
                        <div className="absolute -right-8 -top-20 h-52 w-52 rounded-full border-[30px] border-white/10" />
                        <div className="absolute -bottom-24 right-36 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

                        <div className="relative flex items-center gap-4">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-white shadow-inner backdrop-blur-sm">
                                <FileText size={27} />
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-white md:text-2xl">
                                    Blood Request Details
                                </h2>
                                <p className="mt-1.5 text-sm text-red-100">
                                    Complete the information below to continue.
                                </p>
                            </div>
                        </div>

                        <div className="relative mt-6 flex items-center gap-2">
                            <span className="h-1.5 flex-1 rounded-full bg-white" />
                            <span className="h-1.5 flex-1 rounded-full bg-white/40" />
                            <span className="h-1.5 flex-1 rounded-full bg-white/40" />
                        </div>

                        <p className="relative mt-2 text-right text-[11px] font-medium text-red-100">
                            Request Information
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="p-5 sm:p-7 md:p-9"
                    >

                        <div className="mb-7 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
                                <UserRound size={20} />
                            </div>

                            <div>
                                <h3 className="font-bold text-slate-900">
                                    Basic Information
                                </h3>
                                <p className="mt-0.5 text-xs text-slate-500">
                                    Tell us about the blood requirement.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">

                            <div>
                                <label className={labelClass}>
                                    Your Full Name{" "}
                                    <span className="text-red-500">*</span>
                                </label>

                                <div className="relative">
                                    <UserRound
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                    />
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        value={formdata.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        className={`${inputClass} pl-11`}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className={labelClass}>
                                    Required Blood Units{" "}
                                    <span className="text-red-500">*</span>
                                </label>

                                <div className="relative">
                                    <Droplet
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500"
                                    />
                                    <input
                                        required
                                        type="number"
                                        name="requiredUnits"
                                        min="1"
                                        value={formdata.requiredUnits}
                                        onChange={handleChange}
                                        placeholder="e.g. 2"
                                        className={`${inputClass} pl-11`}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className={labelClass}>
                                    Blood Group{" "}
                                    <span className="text-red-500">*</span>
                                </label>

                                <div className="relative">
                                    <Droplet
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500"
                                    />
                                    <select
                                        required
                                        name="bloodGroup"
                                        value={formdata.bloodGroup}
                                        onChange={handleChange}
                                        className={`${inputClass} appearance-none pl-11`}
                                    >
                                        <option value="">
                                            Select blood group
                                        </option>
                                        <option value="A+">A Positive (A+)</option>
                                        <option value="A-">A Negative (A-)</option>
                                        <option value="B+">B Positive (B+)</option>
                                        <option value="B-">B Negative (B-)</option>
                                        <option value="AB+">AB Positive (AB+)</option>
                                        <option value="AB-">AB Negative (AB-)</option>
                                        <option value="O+">O Positive (O+)</option>
                                        <option value="O-">O Negative (O-)</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className={labelClass}>
                                    Request Priority{" "}
                                    <span className="text-red-500">*</span>
                                </label>

                                <div className="relative">
                                    <AlertCircle
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500"
                                    />
                                    <select
                                        required
                                        name="urgency"
                                        value={formdata.urgency}
                                        onChange={handleChange}
                                        className={`${inputClass} appearance-none pl-11`}
                                    >
                                        <option value="">
                                            Select priority level
                                        </option>
                                        <option value="Normal">
                                            Normal Request
                                        </option>
                                        <option value="Emergency">
                                            Emergency Request
                                        </option>
                                    </select>
                                </div>
                            </div>

                        </div>

                        <div className="mb-7 mt-10 flex items-center gap-3 border-t border-slate-100 pt-8">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                <MapPin size={20} />
                            </div>

                            <div>
                                <h3 className="font-bold text-slate-900">
                                    Location & Contact
                                </h3>
                                <p className="mt-0.5 text-xs text-slate-500">
                                    Help donors find where support is needed.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">

                            <div>
                                <label className={labelClass}>
                                    City{" "}
                                    <span className="text-red-500">*</span>
                                </label>

                                <div className="relative">
                                    <MapPin
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                    />
                                    <input
                                        required
                                        type="text"
                                        name="city"
                                        value={formdata.city}
                                        onChange={handleChange}
                                        placeholder="Enter city name"
                                        className={`${inputClass} pl-11`}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className={labelClass}>
                                    Hospital Name{" "}
                                    <span className="text-red-500">*</span>
                                </label>

                                <div className="relative">
                                    <Hospital
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                    />
                                    <input
                                        required
                                        type="text"
                                        name="hospitalName"
                                        value={formdata.hospitalName}
                                        onChange={handleChange}
                                        placeholder="Enter hospital name"
                                        className={`${inputClass} pl-11`}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className={labelClass}>
                                    Required Date{" "}
                                    <span className="text-red-500">*</span>
                                </label>

                                <div className="relative">
                                    <CalendarDays
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                    />
                                    <input
                                        required
                                        type="date"
                                        name="requiredDate"
                                        min={new Date().toLocaleDateString("en-CA")}
                                        value={formdata.requiredDate}
                                        onChange={handleChange}
                                        className={`${inputClass} pl-11`}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className={labelClass}>
                                    Contact Number{" "}
                                    <span className="text-red-500">*</span>
                                </label>

                                <div className="relative">
                                    <Phone
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                    />
                                    <input
                                        required
                                        type="tel"
                                        name="contactNumber"
                                        value={formdata.contactNumber}
                                        onChange={handleChange}
                                        placeholder="Enter contact number"
                                        className={`${inputClass} pl-11`}
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="mt-8 border-t border-slate-100 pt-8">
                            <label className={labelClass}>
                                Additional Notes{" "}
                                <span className="ml-2 text-xs font-normal text-slate-400">
                                    (Optional)
                                </span>
                            </label>

                            <div className="relative">
                                <FileText
                                    size={18}
                                    className="absolute left-4 top-4 text-slate-400"
                                />
                                <textarea
                                    name="notes"
                                    rows={4}
                                    value={formdata.notes}
                                    onChange={handleChange}
                                    placeholder="Share any additional information about the patient's requirements..."
                                    className={`${inputClass} resize-none pl-11`}
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                                <AlertCircle
                                    size={19}
                                    className="mt-0.5 shrink-0"
                                />
                                <p>{error}</p>
                            </div>
                        )}

                        <div className="mt-7 flex items-start gap-3 rounded-2xl border border-amber-100 bg-amber-50/70 p-4">
                            <ShieldCheck
                                size={21}
                                className="mt-0.5 shrink-0 text-amber-600"
                            />

                            <div>
                                <h4 className="text-sm font-bold text-slate-800">
                                    Before submitting
                                </h4>
                                <p className="mt-1 text-xs leading-5 text-slate-600">
                                    Please verify the blood group, contact
                                    number, hospital and required date to help
                                    donors respond with accurate information.
                                </p>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="group mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-red-500/20 transition duration-300 hover:-translate-y-0.5 hover:from-red-700 hover:to-rose-700 hover:shadow-xl hover:shadow-red-500/25 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {loading ? (
                                <>
                                    <LoaderCircle
                                        size={20}
                                        className="animate-spin"
                                    />
                                    Submitting Request...
                                </>
                            ) : (
                                <>
                                    <Send
                                        size={19}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                    Broadcast Blood Request

                                    <span className="ml-auto hidden rounded-lg bg-white/15 px-3 py-1.5 text-xs sm:inline-block">
                                        Submit →
                                    </span>
                                </>
                            )}
                        </button>

                        <p className="mt-4 text-center text-xs leading-5 text-slate-400">
                            Your request will be shared with eligible donors
                            in your area.
                            <br />
                            Together, we can make a difference.
                        </p>

                    </form>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

                    <div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/80 p-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                            <HeartPulse size={20} />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-slate-800">
                                Save Lives
                            </h4>
                            <p className="mt-1 text-xs text-slate-500">
                                Every donation matters.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/80 p-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                            <ShieldCheck size={20} />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-slate-800">
                                Verified Details
                            </h4>
                            <p className="mt-1 text-xs text-slate-500">
                                Provide accurate information.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/80 p-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <Phone size={20} />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-slate-800">
                                Stay Connected
                            </h4>
                            <p className="mt-1 text-xs text-slate-500">
                                Keep contact details correct.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CreateDoner;
