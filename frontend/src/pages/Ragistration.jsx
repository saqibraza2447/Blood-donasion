import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import {
    UserRound,
    Phone,
    Mail,
    MapPin,
    Droplet,
    LockKeyhole,
    UsersRound,
    HeartPulse
} from "lucide-react";

export const Ragistration = () => {


    let Navigate = useNavigate()

    let [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        bloodGroup: "",
        city: "",
        password: "",
        role: ""
    });

    async function handleSubmit() {
        let responce = await axios.post(import.meta.env.VITE_Backend_url + "/users/register", {
            ...formData,
            withCredentials: true
        });

        console.log(responce.data)

        if (responce.data.success == true) {
            Navigate("/allblood")
        }
    }



    return (

        <div className="min-h-screen  bg-slate-50 flex items-center justify-center p-4">

            <div className="w-full max-w-5xl mt-30 bg-white rounded-3xl shadow-2xl overflow-hidden">

                <div className="bg-gradient-to-r from-red-400 to-rose-500 px-8 py-8 text-white">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-300 shadow-2xl shadow-gray-900 hover:rotate-12 rounded-2xl flex items-center justify-center">
                            <HeartPulse size={32} className='text-red-500' />
                        </div>

                        <div>
                            <h1 className="text-3xl font-bold">
                                Create Donor Account
                            </h1>

                            <p className="text-red-100 mt-1">
                                Join our blood donation community and help save lives.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Full Name
                            </label>

                            <div className="relative">
                                <UserRound
                                    size={20}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500 z-10"
                                />

                                <input
                                    onChange={function (event) {
                                        setFormData({
                                            ...formData,
                                            name: event.target.value
                                        })
                                    }}
                                    type="text"
                                    placeholder="Enter your name"
                                    name="name"
                                    className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-200 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Phone Number
                            </label>

                            <div className="relative">
                                <Phone
                                    size={20}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500 z-10"
                                />

                                <input
                                    onChange={function (event) {
                                        setFormData({
                                            ...formData,
                                            phone: event.target.value
                                        })
                                    }}
                                    type="text"
                                    placeholder="Enter phone number"
                                    name="phone"
                                    className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-200 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Email Address
                            </label>

                            <div className="relative">
                                <Mail
                                    size={20}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500 z-10"
                                />

                                <input
                                    onChange={function (event) {
                                        setFormData({
                                            ...formData,
                                            email: event.target.value
                                        })
                                    }}
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-200 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                City
                            </label>

                            <div className="relative">
                                <MapPin
                                    size={20}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500 z-10"
                                />

                                <select
                                    onChange={function (event) {
                                        setFormData({
                                            ...formData,
                                            city: event.target.value
                                        })
                                    }}
                                    name="city"
                                    value={formData.city}
                                    className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-200 bg-white outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition appearance-none"
                                >
                                    <option value="">Select City</option>
                                    <option value="Karachi">Karachi</option>
                                    <option value="Lahore">Lahore</option>
                                    <option value="Islamabad">Islamabad</option>
                                    <option value="Rawalpindi">Rawalpindi</option>
                                    <option value="Peshawar">Peshawar</option>
                                    <option value="Quetta">Quetta</option>
                                    <option value="Multan">Multan</option>
                                    <option value="Faisalabad">Faisalabad</option>
                                    <option value="Gujranwala">Gujranwala</option>
                                    <option value="Sialkot">Sialkot</option>
                                    <option value="Sargodha">Sargodha</option>
                                    <option value="Bahawalpur">Bahawalpur</option>
                                    <option value="Sahiwal">Sahiwal</option>
                                    <option value="Jhang">Jhang</option>
                                    <option value="Sheikhupura">Sheikhupura</option>
                                    <option value="Gujrat">Gujrat</option>
                                    <option value="Rahim Yar Khan">Rahim Yar Khan</option>
                                    <option value="Dera Ghazi Khan">Dera Ghazi Khan</option>
                                    <option value="Mardan">Mardan</option>
                                    <option value="Mingora">Mingora</option>
                                    <option value="Abbottabad">Abbottabad</option>
                                    <option value="Kohat">Kohat</option>
                                    <option value="Bannu">Bannu</option>
                                    <option value="Dera Ismail Khan">Dera Ismail Khan</option>
                                    <option value="Swabi">Swabi</option>
                                    <option value="Nowshera">Nowshera</option>
                                    <option value="Charsadda">Charsadda</option>
                                    <option value="Mansehra">Mansehra</option>
                                    <option value="Muzaffarabad">Muzaffarabad</option>
                                    <option value="Gilgit">Gilgit</option>
                                    <option value="Skardu">Skardu</option>
                                    <option value="Hyderabad">Hyderabad</option>
                                    <option value="Sukkur">Sukkur</option>
                                    <option value="Larkana">Larkana</option>
                                    <option value="Nawabshah">Nawabshah</option>
                                    <option value="Mirpur Khas">Mirpur Khas</option>
                                    <option value="Thatta">Thatta</option>
                                    <option value="Gwadar">Gwadar</option>
                                    <option value="Turbat">Turbat</option>
                                    <option value="Khuzdar">Khuzdar</option>
                                    <option value="Chaman">Chaman</option>
                                    <option value="Zhob">Zhob</option>
                                    <option value="Loralai">Loralai</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Blood Group
                            </label>

                            <div className="relative">
                                <Droplet
                                    size={20}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500 z-10"
                                />

                                <select
                                    onChange={function (event) {
                                        setFormData({
                                            ...formData,
                                            bloodGroup: event.target.value
                                        })
                                    }}
                                    name="bloodGroup"
                                    value={formData.bloodGroup}
                                    className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-200 bg-white outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition appearance-none"
                                >
                                    <option value="">Select Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Password
                            </label>

                            <div className="relative">
                                <LockKeyhole
                                    size={20}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500"
                                />

                                <input
                                    onChange={function (event) {
                                        setFormData({
                                            ...formData,
                                            password: event.target.value
                                        })
                                    }}
                                    type="password"
                                    placeholder="Create password"
                                    name="password"
                                    className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-200 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition"
                                />
                            </div>
                        </div>

                        {/* Role */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Account Role
                            </label>

                            <div className="relative">
                                <UsersRound
                                    size={20}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500 z-10"
                                />

                                <select
                                    onChange={function (event) {
                                        setFormData({
                                            ...formData,
                                            role: event.target.value
                                        })
                                    }}
                                    name="role"
                                    value={formData.role}
                                    className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-200 bg-white outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition appearance-none"
                                >
                                    <option value="" className="text-gray-500 bg-gray-100"> your role</option>
                                    <option value="donor" className="text-gray-800 bg-white">Donor</option>
                                    <option value="patient" className="text-gray-800 bg-white">Patient</option>
                                    <option value="admin" className="text-gray-800 bg-white">Admin</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    <button
                        onClick={function () {
                            handleSubmit()
                        }}
                        className="w-full mt-8 h-13 bg-gradient-to-r from-red-600 to-rose-500 hover:from-red-700 hover:to-rose-600 text-white font-bold rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-red-200 hover:shadow-xl transition-all duration-300"
                    >
                        <Droplet size={21} />
                        Complete Registration
                    </button>


                    <div className="mt-6 flex items-center justify-center gap-2 text-lg text-slate-500">
                        <span>Already have an account?</span>

                        <button
                            type="button"
                            onClick={() => Navigate("/Login")}
                            className="font-semibold text-lg text-red-600 hover:text-red-700 hover:underline transition-colors"
                        >
                            Login
                        </button>
                    </div>



                </div>
            </div>
        </div>


    )


}


