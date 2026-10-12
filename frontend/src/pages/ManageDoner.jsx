
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Sidebar } from "../components/Sidebar";
import {
  Droplet,
  CheckCircle2,
  Trash2,
  HeartPulse,
  RefreshCw,
  Users,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

export function ManageDoner() {
  const [allblood, setallblood] = useState([]);

  async function handleSubmite() {
    try {
      const response = await axios.get(
        import.meta.env.VITE_Backend_url + "/bloodrequest/getAllRequest"
      );

      console.log(response.data);

      setallblood(response.data.bloodrequests || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    handleSubmite();
  }, []);

  return (
    <div className="flex min-h-screen bg-[#f6f7f9]">
      <Sidebar />

      <div className="ml-74 w-full px-6 py-7 lg:px-8">

        <div className="mb-7 flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">

          <div className="max-w-2xl">

            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-600">
                <HeartPulse size={17} />
              </div>

              <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-red-600">
                LifeDrop
              </span>

              <span className="text-slate-300">/</span>

              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Admin Panel
              </span>
            </div>

            <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Donor Management
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Manage donor records, blood groups, availability and verification
              status from a single centralized dashboard.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">

              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold text-slate-600">
                  System Active
                </span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
                <Users size={13} className="text-slate-400" />
                <span className="text-xs font-bold text-slate-600">
                  {allblood.length} Records
                </span>
              </div>

            </div>
          </div>

          <button
            onClick={handleSubmite}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-5 text-sm font-bold text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
          >
            <RefreshCw size={17} />
            Refresh Data
          </button>
        </div>

        <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  Total Donors
                </p>
                <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
                  {allblood.length}
                </h2>
              </div>

              <div className="rounded-xl bg-red-50 p-3 text-red-600">
                <Users size={22} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  Available
                </p>
                <h2 className="mt-2 text-2xl font-extrabold text-emerald-600">
                  {allblood.length}
                </h2>
              </div>

              <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <CheckCircle2 size={22} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  Verified
                </p>
                <h2 className="mt-2 text-2xl font-extrabold text-blue-600">
                  {allblood.length}
                </h2>
              </div>

              <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                <ShieldCheck size={22} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  Blood Units
                </p>
                <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
                  {allblood.reduce(
                    (total, item) =>
                      total + Number(item.requiredUnits || 0),
                    0
                  )}
                </h2>
              </div>

              <div className="rounded-xl bg-red-50 p-3 text-red-600">
                <Droplet size={22} />
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          <div className="border-b border-slate-200 px-6 py-5">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-extrabold text-slate-900">
                  Donor Records
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  All registered blood donor requests
                </p>
              </div>

              <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                {allblood.length} Records
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[1050px]">

              <div className="grid grid-cols-8 border-b border-slate-200 bg-slate-50/80 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">

                <div className="px-6 py-4">
                  Donor
                </div>

                <div className="px-6 py-4">
                  Blood Group
                </div>

                <div className="px-6 py-4">
                  Location
                </div>

                <div className="px-6 py-4">
                  Contact
                </div>

                <div className="px-6 py-4">
                  Availability
                </div>

                <div className="px-6 py-4">
                  Verification
                </div>

                <div className="px-6 py-4">
                  Donations
                </div>

                <div className="px-6 py-4 text-right">
                  Action
                </div>
              </div>

              <div className="divide-y divide-slate-100">

                {allblood.map((e) => {
                  return (
                    <div
                      key={e._id}
                      className="grid grid-cols-8 items-center transition duration-200 hover:bg-slate-50"
                    >

                      <div className="px-6 py-5">
                        <div className="flex items-center gap-3">

                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                            <HeartPulse size={18} />
                          </div>

                          <div>
                            <p className="font-bold text-slate-900">
                              {e.name || "N/A"}
                            </p>

                            <p className="mt-1 text-[11px] font-medium text-slate-400">
                              {e.urgency || "Blood Request"}
                            </p>
                          </div>

                        </div>
                      </div>

                      <div className="px-6 py-5">
                        <span className="inline-flex items-center gap-1.5 rounded-lg border border-red-100 bg-red-50 px-3 py-1.5 text-xs font-extrabold text-red-600">
                          <Droplet
                            size={13}
                            fill="currentColor"
                          />
                          {e.bloodGroup ||
                            e.bloodgroup ||
                            "N/A"}
                        </span>
                      </div>

                      <div className="px-6 py-5">
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                          <MapPin
                            size={15}
                            className="text-slate-400"
                          />
                          {e.city || "N/A"}
                        </div>
                      </div>

                      <div className="px-6 py-5">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Phone
                            size={14}
                            className="text-slate-400"
                          />

                          {e.contactNumber ||
                            e.phone ||
                            "N/A"}
                        </div>
                      </div>

                      <div className="px-6 py-5">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[11px] font-bold text-emerald-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                          Available
                        </span>
                      </div>

                      <div className="px-6 py-5">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-bold text-blue-600">
                          <CheckCircle2 size={13} />
                          Verified
                        </span>
                      </div>

                      <div className="px-6 py-5">
                        <div>
                          <p className="font-extrabold text-slate-900">
                            {e.requiredUnits ?? 0}
                          </p>

                          <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                            Units
                          </p>
                        </div>
                      </div>

                      <div className="px-6 py-5">
                        <div className="flex justify-end">

                          <button
                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                          >
                            <Trash2 size={16} />
                          </button>

                        </div>
                      </div>

                    </div>
                  );
                })}

                {allblood.length === 0 && (
                  <div className="flex min-h-[300px] flex-col items-center justify-center px-6 text-center">

                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                      <Users size={25} />
                    </div>

                    <h3 className="text-base font-bold text-slate-700">
                      No donors found
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      There are currently no donor records available.
                    </p>

                    <button
                      onClick={handleSubmite}
                      className="mt-5 inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-red-700"
                    >
                      <RefreshCw size={14} />
                      Refresh
                    </button>

                  </div>
                )}

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
