
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Sidebar } from "../components/Sidebar";

import {
  Users,
  Droplet,
  HeartPulse,
  Activity,
  ArrowUpRight,
  ArrowRight,
  MapPin,
  CalendarDays,
  ShieldCheck,
  AlertTriangle,
  Clock3,
  UserRound,
  TrendingUp,
  RefreshCw,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [bloodRequests, setBloodRequests] = useState([]);
  const [findRequests, setFindRequests] = useState([]);
  let navigat=useNavigate()

  const [loading, setLoading] = useState(true);

  const backendUrl = import.meta.env.VITE_Backend_url;

 
  const getUsers = async () => {
    try {
      const response = await axios.get(
        backendUrl + "/users/getAllUsers"
      );

      console.log("Users:", response.data);

      setUsers(
        response.data?.users ||
        response.data?.bloodrequests ||
        response.data?.data ||
        []
      );
    } catch (error) {
      console.log("Users Error:", error);
      setUsers([]);
    }
  };

  
  const getBloodRequests = async () => {
    try {
      const response = await axios.get(
        backendUrl + "/bloodrequest/getAllRequest"
      );

      console.log("Blood Requests:", response.data);

      setBloodRequests(
        response.data?.bloodrequests ||
        response.data?.data ||
        []
      );
    } catch (error) {
      console.log("Blood Request Error:", error);
      setBloodRequests([]);
    }
  };

 
  const getFindRequests = async () => {
    try {
      const response = await axios.get(
        backendUrl + "/findboner/allfind"
      );

      console.log("Find Requests:", response.data);

      setFindRequests(
        response.data?.bloodrequests ||
        response.data?.data ||
        []
      );
    } catch (error) {
      console.log("Find Request Error:", error);
      setFindRequests([]);
    }
  };

  
  const loadDashboard = async () => {
    setLoading(true);

    await Promise.all([
      getUsers(),
      getBloodRequests(),
      getFindRequests(),
    ]);

    setLoading(false);
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  
  const totalUsers = users.length;

  const totalBloodRequests = bloodRequests.length;

  const totalFindRequests = findRequests.length;

  const emergencyRequests = bloodRequests.filter(
    (item) =>
      item?.urgency?.toLowerCase() === "emergency"
  ).length;

  const activeRequests = bloodRequests.filter(
    (item) =>
      item?.urgency?.toLowerCase() !== "completed"
  ).length;

 
  const formatDate = (date) => {
    if (!date) return "N/A";

    return new Date(date)
      .toLocaleDateString("en-GB")
      .replaceAll("/", "-");
  };

 
  const handleRefresh = () => {
    loadDashboard();
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa]">

      <Sidebar />

      <div className="ml-75 min-h-screen p-7">

        <div className="mb-8 flex items-center justify-between">

          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-500">
              System Overview
            </p>

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Admin Dashboard
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Monitor users, blood requests and donation activity.
            </p>
          </div>

          <button
            onClick={handleRefresh}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
          >
            <RefreshCw
              size={16}
              className={loading ? "animate-spin" : ""}
            />

            Refresh
          </button>
        </div>



        <div className="grid grid-cols-4 gap-5">

          <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            <div className="flex items-start justify-between">

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Total Users
                </p>

                <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
                  {loading ? "..." : totalUsers}
                </h2>

                <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-emerald-600">
                  <TrendingUp size={13} />
                  Registered users
                </div>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Users size={23} />
              </div>

            </div>
          </div>


          <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            <div className="flex items-start justify-between">

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Blood Requests
                </p>

                <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
                  {loading ? "..." : totalBloodRequests}
                </h2>

                <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-red-600">
                  <Activity size={13} />
                  Active requests
                </div>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <Droplet
                  size={23}
                  className="fill-red-600"
                />
              </div>

            </div>
          </div>


          <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            <div className="flex items-start justify-between">

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Find Blood
                </p>

                <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
                  {loading ? "..." : totalFindRequests}
                </h2>

                <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-violet-600">
                  <HeartPulse size={13} />
                  Donor searches
                </div>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <HeartPulse size={23} />
              </div>

            </div>
          </div>


          <div className="group rounded-2xl border border-red-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            <div className="flex items-start justify-between">

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Emergency
                </p>

                <h2 className="mt-3 text-3xl font-extrabold text-red-600">
                  {loading ? "..." : emergencyRequests}
                </h2>

                <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-red-500">
                  <AlertTriangle size={13} />
                  Urgent requests
                </div>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <AlertTriangle size={23} />
              </div>

            </div>
          </div>

        </div>



        <div className="mt-6 grid grid-cols-[1.7fr_1fr] gap-6">



          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Recent Blood Requests
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Latest patient blood requirements
                </p>
              </div>

              <button
              onClick={function(){
                navigat("/managedoner")
              }}
               className="flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700">
                View All
                <ArrowRight size={14} />
              </button>

            </div>


            <div className="divide-y divide-slate-100">

              {bloodRequests.slice(0, 5).map((item) => (

                <div
                  key={item?._id}
                  className="flex items-center justify-between px-6 py-4 transition hover:bg-slate-50"
                >

                  <div className="flex items-center gap-4">


                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
                      <Droplet
                        size={19}
                        className="fill-red-600"
                      />
                    </div>



                    <div>

                      <h3 className="text-sm font-bold text-slate-800">
                        {item?.name || "Unknown"}
                      </h3>

                      <div className="mt-1 flex items-center gap-3 text-xs text-slate-400">

                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {item?.city || "N/A"}
                        </span>

                        <span>
                          {item?.hospitalName || "Hospital"}
                        </span>

                      </div>

                    </div>

                  </div>



                  <div className="text-right">

                    <span className="inline-flex rounded-lg bg-red-50 px-2.5 py-1 text-xs font-bold text-red-600">
                      {item?.bloodGroup || "N/A"}
                    </span>

                    <p className="mt-2 flex items-center justify-end gap-1 text-[11px] text-slate-400">
                      <CalendarDays size={11} />
                      {formatDate(item?.requiredDate)}
                    </p>

                  </div>

                </div>

              ))}


              {bloodRequests.length === 0 && !loading && (

                <div className="px-6 py-12 text-center">

                  <Droplet
                    size={30}
                    className="mx-auto text-slate-300"
                  />

                  <p className="mt-3 text-sm font-semibold text-slate-500">
                    No blood requests found
                  </p>

                </div>

              )}

            </div>

          </div>



          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="mb-6">

              <h2 className="text-lg font-bold text-slate-900">
                System Overview
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Current platform activity
              </p>

            </div>



            <div className="mb-4 rounded-xl border border-slate-100 bg-slate-50 p-4">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <Activity size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Active Requests
                    </p>

                    <p className="mt-1 text-lg font-bold text-slate-800">
                      {activeRequests}
                    </p>
                  </div>

                </div>

                <ArrowUpRight
                  size={17}
                  className="text-emerald-500"
                />

              </div>

            </div>



            <div className="mb-4 rounded-xl border border-slate-100 bg-slate-50 p-4">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
                    <AlertTriangle size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Emergency Requests
                    </p>

                    <p className="mt-1 text-lg font-bold text-slate-800">
                      {emergencyRequests}
                    </p>
                  </div>

                </div>

                <ArrowUpRight
                  size={17}
                  className="text-red-500"
                />

              </div>

            </div>



            <div className="mb-4 rounded-xl border border-slate-100 bg-slate-50 p-4">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                    <HeartPulse size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Donor Searches
                    </p>

                    <p className="mt-1 text-lg font-bold text-slate-800">
                      {totalFindRequests}
                    </p>
                  </div>

                </div>

                <ArrowUpRight
                  size={17}
                  className="text-violet-500"
                />

              </div>

            </div>



            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Users size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Registered Users
                    </p>

                    <p className="mt-1 text-lg font-bold text-slate-800">
                      {totalUsers}
                    </p>
                  </div>

                </div>

                <ArrowUpRight
                  size={17}
                  className="text-blue-500"
                />

              </div>

            </div>

          </div>

        </div>



        <div className="mt-6 grid grid-cols-2 gap-6">



          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Recent Users
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Recently registered accounts
                </p>
              </div>

              <Users
                size={20}
                className="text-slate-400"
              />

            </div>


            <div className="divide-y divide-slate-100">

              {users.slice(0, 4).map((user) => (

                <div
                  key={user?._id}
                  className="flex items-center justify-between px-6 py-4 hover:bg-slate-50"
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600">
                      {user?.name?.charAt(0)?.toUpperCase() || "U"}
                    </div>

                    <div>

                      <p className="text-sm font-semibold text-slate-800">
                        {user?.name || "Unknown User"}
                      </p>

                      <p className="mt-0.5 text-[11px] text-slate-400">
                        {user?.email || "No email"}
                      </p>

                    </div>

                  </div>


                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                      user?.role?.toLowerCase() === "admin"
                        ? "bg-purple-50 text-purple-600"
                        : user?.role?.toLowerCase() === "donor"
                        ? "bg-red-50 text-red-600"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    {user?.role || "User"}
                  </span>

                </div>

              ))}


              {users.length === 0 && !loading && (

                <div className="px-6 py-10 text-center text-sm text-slate-400">
                  No users found
                </div>

              )}

            </div>

          </div>



          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="mb-6">

              <h2 className="text-lg font-bold text-slate-900">
                Platform Status
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Current system health
              </p>

            </div>


            <div className="space-y-4">



              <div className="flex items-center justify-between rounded-xl border border-slate-100 p-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <Activity size={18} />
                  </div>

                  <div>

                    <p className="text-sm font-bold text-slate-800">
                      Backend API
                    </p>

                    <p className="text-[11px] text-slate-400">
                      Server connection
                    </p>

                  </div>

                </div>

                <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-600">

                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                  Online

                </span>

              </div>



              <div className="flex items-center justify-between rounded-xl border border-slate-100 p-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <UserRound size={18} />
                  </div>

                  <div>

                    <p className="text-sm font-bold text-slate-800">
                      User Management
                    </p>

                    <p className="text-[11px] text-slate-400">
                      Account system
                    </p>

                  </div>

                </div>

                <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-600">

                  <ShieldCheck size={12} />

                  Active

                </span>

              </div>



              <div className="flex items-center justify-between rounded-xl border border-slate-100 p-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
                    <Droplet
                      size={18}
                      className="fill-red-600"
                    />
                  </div>

                  <div>

                    <p className="text-sm font-bold text-slate-800">
                      Blood Services
                    </p>

                    <p className="text-[11px] text-slate-400">
                      Donation platform
                    </p>

                  </div>

                </div>

                <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-600">

                  <ShieldCheck size={12} />

                  Active

                </span>

              </div>



              <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">

                <Clock3
                  size={17}
                  className="text-slate-400"
                />

                <div>

                  <p className="text-xs font-semibold text-slate-600">
                    Dashboard data
                  </p>

                  <p className="mt-1 text-[11px] text-slate-400">
                    Live data loaded from backend
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;
