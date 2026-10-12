
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
    Droplet,
} from 'lucide-react'

function DonerUpdat() {
    const navigate = useNavigate();
    const { id, productId } = useParams();

    const requestId = id || productId;

    const [formdata, setformdata] = useState({
        name: "",
        requiredUnits: 1,
        bloodGroup: "",
        urgency: "Normal",
        city: "",
        hospitalName: "",
        requiredDate: "",
        contactNumber: "",
        notes: "",
    });

    const [loading, setLoading] = useState(false);



    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(
                    import.meta.env.VITE_Backend_url + "/bloodrequest/getAllRequest"
                );

                const requests = res.data.bloodrequests || [];

                const data = requests.find(
                    (item) => item._id === requestId
                );

                if (!data) {
                    alert("Request nahi mili");
                    return;
                }

                setformdata({
                    name: data.name || "",
                    requiredUnits: data.requiredUnits || 1,
                    bloodGroup: data.bloodGroup || "",
                    urgency: data.urgency || "Normal",
                    city: data.city || "",
                    hospitalName: data.hospitalName || "",
                    requiredDate: data.requiredDate
                        ? String(data.requiredDate).slice(0, 10)
                        : "",
                    contactNumber: data.contactNumber || "",
                    notes: data.notes || "",
                });
            } catch (error) {
                console.log(error);
                alert("Data load nahi hua");
            }
        };

        getData();
    }, [requestId]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setformdata({
            ...formdata,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!requestId) {
            alert("Request ID nahi mili");
            return;
        }

        try {
            setLoading(true);

            const res = await axios.post(
                import.meta.env.VITE_Backend_url + "/bloodrequest/updateblooddoner",
                {
                    ...formdata,
                    id: requestId,
                    requiredUnits: Number(formdata.requiredUnits),
                }
            );

            if (res.data.success) {
                navigate("/allblood");
            }
        } catch (error) {
            console.log(error.response?.data || error);

        } finally {
            setLoading(false);
        }
    };

    return (


        <div className="min-h-screen  bg-gradient-to-br from-slate-50 via-red-50/40 to-slate-100 px-4 py-10 md:px-8">

            <div className="mx-auto max-w-5xl mt-20">

                <button
                    type="button"
                    onClick={() => navigate("/allblood")}
                    className="mb-7 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-600 shadow-sm transition-all duration-300 hover:-translate-x-1 hover:border-red-200 hover:text-red-600 hover:shadow-md"
                >
                    <span className="text-xl">←</span>
                    Go Back
                </button>

                <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/60">

                    <div className="relative overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-rose-500 px-6 py-10 md:px-10">

                        <div className="absolute -right-12 -top-20 h-64 w-64 rounded-full border-[30px] border-white/10"></div>
                        <div className="absolute -bottom-20 right-40 h-48 w-48 rounded-full bg-white/10 blur-2xl"></div>

                        <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                            <div>
                                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                                    <span className="h-2 w-2 animate-pulse rounded-full bg-white"></span>
                                    LifeDrop • Request Management
                                </div>

                                <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                                    Update Blood Request
                                </h1>

                                <p className="mt-3 max-w-lg text-sm leading-6 text-red-50 md:text-base">
                                    Keep your blood request information accurate
                                    so donors can reach you when you need them.
                                </p>
                            </div>

                            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-4xl shadow-lg backdrop-blur-md">
                                <Droplet size={40} className="text-white " />
                            </div>

                        </div>
                    </div>

                    <div className="border-b border-slate-100 px-6 py-6 md:px-10">
                        <h2 className="text-xl font-bold text-slate-800">
                            Request Information
                        </h2>
                        <p className="mt-1 text-sm text-slate-500">
                            Update the details below and save your changes.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 gap-x-6 gap-y-6 p-6 md:grid-cols-2 md:p-10"
                    >

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                required
                                name="name"
                                value={formdata.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">
                                Required Blood Units <span className="text-red-500">*</span>
                            </label>
                            <input
                                required
                                type="number"
                                min="1"
                                name="requiredUnits"
                                value={formdata.requiredUnits}
                                onChange={handleChange}
                                placeholder="Number of units"
                                className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">
                                Blood Group <span className="text-red-500">*</span>
                            </label>
                            <select
                                required
                                name="bloodGroup"
                                value={formdata.bloodGroup}
                                onChange={handleChange}
                                className="w-full cursor-pointer rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm outline-none transition-all focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                            >
                                <option value="">Select blood group</option>
                                {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
                                    (group) => (
                                        <option key={group} value={group}>
                                            {group}
                                        </option>
                                    )
                                )}
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">
                                Request Priority
                            </label>
                            <select
                                name="urgency"
                                value={formdata.urgency}
                                onChange={handleChange}
                                className="w-full cursor-pointer rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm outline-none transition-all focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                            >
                                <option value="Normal">Normal Request</option>
                                <option value="Emergency">🚨 Emergency Request</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">
                                City <span className="text-red-500">*</span>
                            </label>
                            <input
                                required
                                name="city"
                                value={formdata.city}
                                onChange={handleChange}
                                placeholder="e.g. Islamabad, Peshawar"
                                className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">
                                Hospital Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                required
                                name="hospitalName"
                                value={formdata.hospitalName}
                                onChange={handleChange}
                                placeholder="Enter hospital name"
                                className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">
                                Required Date <span className="text-red-500">*</span>
                            </label>
                            <input
                                required
                                type="date"
                                name="requiredDate"
                                value={formdata.requiredDate}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm outline-none transition-all focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">
                                Contact Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                required
                                type="tel"
                                name="contactNumber"
                                value={formdata.contactNumber}
                                onChange={handleChange}
                                placeholder="03XXXXXXXXX"
                                className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                            />
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <label className="text-sm font-bold text-slate-700">
                                Additional Notes
                                <span className="ml-2 font-normal text-slate-400">
                                    (Optional)
                                </span>
                            </label>
                            <textarea
                                name="notes"
                                value={formdata.notes}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Add any important information about this blood request..."
                                className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm leading-6 outline-none transition-all placeholder:text-slate-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                            />
                        </div>

                        <div className="flex gap-3 rounded-xl border border-red-100 bg-red-50/70 p-4 md:col-span-2">
                            <span className="text-xl">🛡️</span>
                            <div>
                                <p className="text-sm font-bold text-slate-800">
                                    Please verify your information
                                </p>
                                <p className="mt-1 text-xs leading-5 text-slate-600">
                                    Make sure your contact number, hospital and
                                    required date are correct before saving.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end md:col-span-2">

                            <button
                                type="button"
                                onClick={() => navigate(-1)}
                                className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-600 transition-all hover:border-slate-300 hover:bg-slate-50"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                disabled={loading}
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-red-700 hover:to-rose-700 hover:shadow-xl hover:shadow-red-500/30 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                            >


                                <span>✓</span>
                                Save Changes


                            </button>

                        </div>
                    </form>
                </div>

                {/* Footer */}
                <p className="mt-6 text-center text-xs text-slate-400">
                    LifeDrop • Every Drop Can Save a Life ❤️
                </p>

            </div>
        </div>
    );


}

export default DonerUpdat;
