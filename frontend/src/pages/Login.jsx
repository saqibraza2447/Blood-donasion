import React from 'react'
import { HeartHandshake, Mail, Lock, UserCheck, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


export const Login = () => {


    let Navigate = useNavigate()

    let [stateuserdata, setuserdata] = useState({
        email: "",
        Password: "",
        role: ""
    })

    async function loginhandel() {
        let rsponce = await axios.post(import.meta.env.VITE_Backend_url + "/users/login", stateuserdata)
        console.log(rsponce)

        if (rsponce.data.success == true) {
            Navigate("/registration")
        }
    }






    return (
        <div>

            <div className="min-h-screen  bg-slate-50 flex items-center justify-center p-4">
                <div className="max-w-md w-full mt-30 bg-white rounded-2xl shadow-xl border border-red-100 overflow-hidden">

                    <div className="bg-gradient-to-r from-red-400 to-rose-500 p-6 text-center text-white relative">
                        <div className="w-14 h-14 ml-43 bg-gray-300 shadow-2xl shadow-gray-900 hover:rotate-12 rounded-2xl flex items-center justify-center">
                            <HeartHandshake size={36} className="w-10 h-10 text-red-500 transition duration-200 " />
                        </div>
                        <p className="text-red-100 text-2xl font-bold mt-1">Sign in </p>
                        <h2 className="text-xl font-semibold tracking-tight text-gray-200">Blood Donation Portal</h2>

                    </div>

                    <form className="p-6 space-y-5">


                        <div>
                            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="email"
                                    onChange={function (event) {
                                        setuserdata({
                                            ...stateuserdata,
                                            email: event.target.value
                                        })
                                    }}
                                    placeholder="Enter your Email"
                                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:bg-white text-gray-700 outline-none transition placeholder-gray-400"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="password"
                                    placeholder="Enter your Password"
                                    onChange={function (event) {
                                        setuserdata({
                                            ...stateuserdata,
                                            password: event.target.value
                                        })
                                    }}
                                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:bg-white text-gray-700 outline-none transition placeholder-gray-400"
                                    required
                                />
                            </div>
                        </div>



                        <div>
                            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                                Select Your Role
                            </label>
                            <div className="relative w-full">
                                <select
                                    className="w-full py-2.5 px-4 bg-slate-100 border border-slate-200 rounded-2xl text-center text-red-600 font-semibold appearance-none outline-none focus:ring-2 focus:ring-red-500 cursor-pointer shadow-inner"
                                    required
                                    onChange={function (event) {
                                        setuserdata({
                                            ...stateuserdata,
                                            role: event.target.value
                                        })
                                    }}
                                >
                                    <option value="" className="text-gray-500 bg-gray-100"> your role</option>
                                    <option value="donor" className="text-gray-800 bg-white">Donor</option>
                                    <option value="patient" className="text-gray-800 bg-white">Patient</option>
                                    <option value="admin" className="text-gray-800 bg-white">Admin</option>
                                </select>

                                {/* Chota arrow icon right side par */}
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-500 w-0 h-0"></div>
                            </div>
                        </div>


                        <button
                            type="button"
                            className="w-full mt-2 bg-gradient-to-r from-red-400 to-rose-500   text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
                            onClick={function () {
                                loginhandel()
                            }}
                        >
                            <LogIn className="w-5 h-5" />
                            <span>Login</span>
                        </button>
                    </form>



                    <div className=" flex items-center mb-5 justify-center gap-2 text-lg text-slate-500">
                        <span>Already have an account?</span>

                        <button
                            type="button"
                            onClick={() => Navigate("/registration")}
                            className="font-semibold text-lg text-red-600 hover:text-red-700 hover:underline transition-colors"
                        >
                            registeration
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}
