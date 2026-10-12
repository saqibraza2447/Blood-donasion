import React, { useState, useEffect } from "react";
import {
  Search,
  SlidersHorizontal,
  Eye,
  Ban,
  Trash2,
  Users,
  UserCheck,
  ShieldCheck,
  UserX,
} from "lucide-react";
import { Sidebar } from "../components/Sidebar";
import axios from "axios";

const UserManage = () => {
  const [alluser, setalluser] = useState([]);

  async function handleSubmite() {
    try {
      const responce = await axios.get(
        import.meta.env.VITE_Backend_url + "/users/getAllUsers"
      );

      console.log(responce.data);

      setalluser(responce.data.bloodrequests || []);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleSubmite();
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      <Sidebar />

      <div className="ml-80 min-h-screen px-7 py-8">


        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 text-red-600 ring-1 ring-red-100">
                <Users size={18} />
              </div>

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">
                LifeDrop / Admin Panel
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#14213d] sm:text-[34px]">
              User Management
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Manage user accounts, assign roles, monitor account status,
              and maintain a secure user environment.
            </p>
          </div>

          <div className="flex w-fit items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <Users size={21} />
            </div>

            <div>
              <p className="text-2xl font-extrabold leading-none text-[#14213d]">
                {alluser?.length || 0}
              </p>

              <p className="mt-1.5 text-xs font-semibold text-slate-500">
                Total Registered Users
              </p>
            </div>
          </div>

        </div>


        <div className="mb-6 grid grid-cols-4 gap-4">

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_3px_15px_rgba(15,23,42,0.03)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Total Users
                </p>

                <h2 className="mt-2 text-2xl font-extrabold text-[#172b4d]">
                  {alluser?.length || 0}
                </h2>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Users size={19} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_3px_15px_rgba(15,23,42,0.03)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Active
                </p>

                <h2 className="mt-2 text-2xl font-extrabold text-[#172b4d]">
                  {alluser?.length || 0}
                </h2>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <UserCheck size={19} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_3px_15px_rgba(15,23,42,0.03)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Donors
                </p>

                <h2 className="mt-2 text-2xl font-extrabold text-[#172b4d]">
                  {alluser?.filter(
                    (user) => user?.role?.toLowerCase() === "donor"
                  ).length || 0}
                </h2>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <ShieldCheck size={19} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_3px_15px_rgba(15,23,42,0.03)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Blocked
                </p>

                <h2 className="mt-2 text-2xl font-extrabold text-[#172b4d]">
                  0
                </h2>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <UserX size={19} />
              </div>
            </div>
          </div>

        </div>

        <div className="mb-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_3px_15px_rgba(15,23,42,0.03)]">

          <div className="flex items-center justify-between">

            <div className="relative w-[350px]">
              <Search
                size={17}
                strokeWidth={1.8}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search name, email or phone..."
                className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-[12px] text-slate-700 outline-none transition focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-red-50 placeholder:text-slate-400"
              />
            </div>

            <div className="flex items-center gap-3">

              <div className="flex items-center gap-2 text-slate-500">
                <SlidersHorizontal size={16} />

                <span className="text-[12px] font-semibold">
                  Filters
                </span>
              </div>

              <select className="h-10 rounded-xl border border-slate-200 bg-slate-50 px-3 text-[12px] font-medium text-slate-600 outline-none transition hover:bg-white focus:border-red-300">
                <option>All Roles</option>
                <option>Admin</option>
                <option>User</option>
                <option>Donor</option>
              </select>

              <select className="h-10 rounded-xl border border-slate-200 bg-slate-50 px-3 text-[12px] font-medium text-slate-600 outline-none transition hover:bg-white focus:border-red-300">
                <option>All Statuses</option>
                <option>Active</option>
                <option>Blocked</option>
              </select>

            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_5px_25px_rgba(15,23,42,0.04)]">

          <div className="grid grid-cols-[2.2fr_1.5fr_1fr_1fr_1fr_1.2fr] items-center border-b border-slate-200 bg-[#f8fafc] px-5 py-4">

            <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-500">
              User Details
            </div>

            <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-500">
              Contact
            </div>

            <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-500">
              Role
            </div>

            <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-500">
              City
            </div>

            <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-500">
              Status
            </div>

            <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-500">
              Actions
            </div>

          </div>

          {alluser?.map(function (user) {
            return (
              <div
                key={user?._id}
                className="group grid grid-cols-[2.2fr_1.5fr_1fr_1fr_1fr_1.2fr] items-center border-b border-slate-100 px-5 py-4 transition-all duration-200 hover:bg-[#fcfdff]"
              >

                <div className="flex items-center gap-3">

                  <div className="relative">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 text-[12px] font-bold text-slate-600">
                      {user?.name?.charAt(0)?.toUpperCase() || "U"}
                    </div>

                    <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500"></span>
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-[12px] font-bold text-[#172b4d]">
                      {user?.name || "Unknown User"}
                    </p>

                    <p className="mt-0.5 truncate text-[10px] text-slate-400">
                      {user?.email || "No email"}
                    </p>
                  </div>

                </div>

                <div className="text-[11px] font-medium text-slate-500">
                  {user?.phone || "—"}
                </div>

                <div>
                  <span
                    className={`inline-flex rounded-lg border px-2.5 py-1.5 text-[10px] font-bold ${user?.role?.toLowerCase() === "admin"
                        ? "border-purple-200 bg-purple-50 text-purple-600"
                        : user?.role?.toLowerCase() === "donor"
                          ? "border-red-200 bg-red-50 text-red-600"
                          : "border-blue-200 bg-blue-50 text-blue-600"
                      }`}
                  >
                    {user?.role || "User"}
                  </span>
                </div>

                <div className="text-[11px] font-semibold text-slate-600">
                  {user?.city || "—"}
                </div>

                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1.5 text-[10px] font-bold text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    Active
                  </span>
                </div>

                <div className="flex items-center gap-1">

                  <button
                    type="button"
                    title="View"
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    <Eye size={16} strokeWidth={1.8} />
                  </button>

                  <button
                    type="button"
                    title="Block"
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-orange-50 hover:text-orange-500"
                  >
                    <Ban size={16} strokeWidth={1.8} />
                  </button>

                  <button
                    type="button"
                    title="Delete"
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 size={16} strokeWidth={1.8} />
                  </button>

                </div>

              </div>
            );
          })}

          {alluser?.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16">

              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                <Users size={24} />
              </div>

              <h3 className="text-sm font-bold text-slate-600">
                No users found
              </h3>

              <p className="mt-1 text-[11px] text-slate-400">
                There are currently no users to display.
              </p>

            </div>
          )}

       

        </div>
      </div>
    </div>
  );
};

export default UserManage;