
import React from "react";
import {
    Heart,
    Award,
    CheckCircle2,
    Activity,
    ArrowRight,
    ShieldCheck,
    Users,
    Droplet,
    HeartHandshake,
    Sparkles,
    MapPin,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Fouter } from "../components/Fouter";

const BecomeDonor = () => {
    const navigate = useNavigate();

    return (
        <div className="overflow-hidden bg-[#fffafb] text-slate-900">

            <section className="relative px-5 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">

                <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-rose-200/30 blur-3xl" />

                <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-red-100/50 blur-3xl" />

                <div className="relative mx-auto max-w-7xl">

                    <div className="mx-auto max-w-3xl text-center">

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                            className="mb-7 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-2 shadow-sm"
                        >
                            <Sparkles size={15} className="text-rose-600" />

                            <span className="text-xs font-bold tracking-wide text-rose-700">
                                BE SOMEONE'S REASON TO HOPE
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl font-extrabold leading-tight tracking-tight text-[#101d36] sm:text-5xl md:text-6xl"
                        >
                            One Donation.

                            <span className="mt-2 block bg-gradient-to-r from-rose-600 via-red-500 to-rose-700 bg-clip-text text-transparent">
                                A Lifetime of Hope.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 md:text-base md:leading-8"
                        >
                            Become a LifeDrop donor and help connect people
                            with the blood they need. Your willingness to
                            donate could make a difference when every moment
                            matters.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
                        >
                            <button
                                onClick={() => navigate("/createdoner")}
                                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-rose-600 to-red-500 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-rose-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-rose-200 sm:w-auto"
                            >
                                Become a Donor

                                <ArrowRight
                                    size={18}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>

                            <button
                                onClick={() =>
                                    document
                                        .getElementById("donation-benefits")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        })
                                }
                                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-700 shadow-sm transition duration-300 hover:border-rose-200 hover:bg-rose-50 sm:w-auto"
                            >
                                <Heart size={17} className="text-rose-600" />

                                Why Donate?
                            </button>
                        </motion.div>

                        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-slate-500">

                            <span className="flex items-center gap-2">
                                <ShieldCheck
                                    size={16}
                                    className="text-emerald-500"
                                />
                                Community-driven
                            </span>

                            <span className="hidden h-4 w-px bg-slate-200 sm:block" />

                            <span className="flex items-center gap-2">
                                <Heart
                                    size={16}
                                    className="text-rose-500"
                                />
                                Every Donor Matters
                            </span>

                            <span className="hidden h-4 w-px bg-slate-200 sm:block" />

                            <span className="flex items-center gap-2">
                                <MapPin
                                    size={16}
                                    className="text-rose-500"
                                />
                                Helping Communities
                            </span>

                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3"
                    >

                        <div className="flex items-center gap-4 rounded-2xl border border-rose-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-50">
                                <Heart
                                    size={23}
                                    className="text-rose-600"
                                    fill="currentColor"
                                />
                            </div>

                            <div>
                                <h3 className="text-sm font-extrabold text-slate-800">
                                    Give with Purpose
                                </h3>

                                <p className="mt-1 text-xs text-slate-500">
                                    Turn kindness into action
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 rounded-2xl border border-rose-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-50">
                                <Activity
                                    size={23}
                                    className="text-rose-600"
                                />
                            </div>

                            <div>
                                <h3 className="text-sm font-extrabold text-slate-800">
                                    Support Patients
                                </h3>

                                <p className="mt-1 text-xs text-slate-500">
                                    Help when it matters
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 rounded-2xl border border-rose-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-50">
                                <Award
                                    size={23}
                                    className="text-rose-600"
                                />
                            </div>

                            <div>
                                <h3 className="text-sm font-extrabold text-slate-800">
                                    Be a Lifesaver
                                </h3>

                                <p className="mt-1 text-xs text-slate-500">
                                    Make every contribution count
                                </p>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>

            <section
                id="donation-benefits"
                className="border-y border-slate-100 bg-white px-5 py-20 md:px-10 md:py-24"
            >
                <div className="mx-auto max-w-7xl">

                    <div

                        className="mx-auto mb-14 max-w-2xl text-center"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-rose-600">
                            <Heart size={14} />
                            Why LifeDrop?
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                            className="mt-5 text-3xl font-extrabold tracking-tight text-[#101d36] md:text-4xl">
                            Small Act.
                            <span className="text-rose-600 ml-3">
                                Big Impact.
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                            className="mt-4 text-sm leading-7 text-slate-500 md:text-base">
                            A simple act of generosity can bring hope to
                            patients and families during difficult times.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

                        <div

                            className="group rounded-3xl border border-slate-100 bg-[#fffafb] p-7 transition duration-300 hover:-translate-y-2 hover:border-rose-200 hover:bg-white hover:shadow-xl hover:shadow-rose-100/50 md:p-8"
                        >
                            <div

                                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 transition duration-300 group-hover:bg-rose-600 group-hover:text-white">
                                <HeartHandshake size={27} />
                            </div>

                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                                className="mt-6 text-xl font-extrabold text-[#101d36]">
                                Save Precious Lives
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                                className="mt-3 text-sm leading-7 text-slate-500">
                                Your blood donation can make a meaningful
                                difference for patients in emergencies
                                and medical treatment.
                            </motion.p>

                            <div className="mt-6 flex items-center gap-2 text-sm font-bold text-rose-600">
                                Make a Difference
                                <ArrowRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </div>
                        </div>

                        <div

                            className="group rounded-3xl border border-slate-100 bg-[#fffafb] p-7 transition duration-300 hover:-translate-y-2 hover:border-rose-200 hover:bg-white hover:shadow-xl hover:shadow-rose-100/50 md:p-8"
                        >
                            <div

                                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 transition duration-300 group-hover:bg-rose-600 group-hover:text-white">
                                <ShieldCheck size={27} />
                            </div>

                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                                className="mt-6 text-xl font-extrabold text-[#101d36]">
                                Make a Real Impact
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                                className="mt-3 text-sm leading-7 text-slate-500">
                                Help families find compatible donors
                                when they need blood the most.
                            </motion.p>

                            <div className="mt-6 flex items-center gap-2 text-sm font-bold text-rose-600">
                                Make a Difference
                                <ArrowRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </div>
                        </div>

                        <div

                            className="group rounded-3xl border border-slate-100 bg-[#fffafb] p-7 transition duration-300 hover:-translate-y-2 hover:border-rose-200 hover:bg-white hover:shadow-xl hover:shadow-rose-100/50 md:p-8"
                        >
                            <div

                                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 transition duration-300 group-hover:bg-rose-600 group-hover:text-white">
                                <Users size={27} />
                            </div>

                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                                className="mt-6 text-xl font-extrabold text-[#101d36]">
                                Join Our Community
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                                className="mt-3 text-sm leading-7 text-slate-500">
                                Become part of a caring network committed
                                to helping people across Pakistan.
                            </motion.p>

                            <div className="mt-6 flex items-center gap-2 text-sm font-bold text-rose-600">
                                Make a Difference
                                <ArrowRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-[#fffafb] px-5 py-20 md:px-10 md:py-24">

                <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-20">

                    <div

                        className="lg:sticky lg:top-28"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-rose-600">
                            <Activity size={15} />
                            Your Journey
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                            className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#101d36] md:text-5xl">
                            Becoming a donor is

                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                                className="block text-rose-600">
                                easier than you think.
                            </motion.span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                            className="mt-5 max-w-lg text-sm leading-8 text-slate-500 md:text-base">
                            Getting started with LifeDrop is simple.
                            Create your profile, keep your availability
                            updated, and connect with people who need
                            your help.
                        </motion.p>

                        <div className="mt-8 rounded-3xl border border-rose-100 bg-white p-6 shadow-sm">
                            <div className="flex items-start gap-4">

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.6 }}
                                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50">
                                    <ShieldCheck
                                        size={24}
                                        className="text-rose-600"
                                    />
                                </motion.div>

                                <div>
                                    <motion.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.2 }}
                                        transition={{ duration: 0.6 }}
                                        className="font-bold text-slate-800">
                                        Your Health Comes First
                                    </motion.h3>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.2 }}
                                        transition={{ duration: 0.6 }}
                                        className="mt-2 text-sm leading-6 text-slate-500">
                                        Donate only when eligible. Follow
                                        medical guidance and confirm your
                                        suitability with qualified
                                        healthcare staff.
                                    </motion.p>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate("/createdoner")}
                            className="group mt-7 inline-flex items-center gap-3 rounded-xl bg-[#101d36] px-6 py-4 text-sm font-bold text-white transition duration-300 hover:bg-rose-600"
                        >
                            Start Your Journey

                            <ArrowRight
                                size={17}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </button>
                    </div>

                    <div className="space-y-5">

                        <div

                            className="group flex gap-5 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg md:gap-6 md:p-8"
                        >
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 transition duration-300 group-hover:bg-rose-600 group-hover:text-white">
                                <Users size={25} />
                            </div>

                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-3">
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.2 }}
                                        transition={{ duration: 0.6 }}
                                        className="text-xs font-extrabold tracking-widest text-rose-500">
                                        STEP 01
                                    </motion.span>

                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.2 }}
                                        transition={{ duration: 0.6 }}
                                        className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">
                                        GET STARTED
                                    </motion.span>
                                </div>

                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.6 }}
                                    className="mt-3 text-lg font-extrabold text-[#101d36] md:text-xl">
                                    Create Your Account
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.6 }}
                                    className="mt-2 text-sm leading-7 text-slate-500">
                                    Register with your basic information,
                                    blood group, and city.
                                </motion.p>
                            </div>
                        </div>

                        <div

                            className="group flex gap-5 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg md:gap-6 md:p-8"
                        >
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 transition duration-300 group-hover:bg-rose-600 group-hover:text-white">
                                <CheckCircle2 size={25} />
                            </div>

                            <div className="flex-1">
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-xs font-extrabold tracking-widest text-rose-500">
                                    STEP 02
                                </motion.span>

                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.6 }}
                                    className="mt-3 text-lg font-extrabold text-[#101d36] md:text-xl">
                                    Set Your Availability
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.6 }}
                                    className="mt-2 text-sm leading-7 text-slate-500">
                                    Keep your donor profile updated so
                                    people can find you when needed.
                                </motion.p>
                            </div>
                        </div>

                        <div

                            className="group flex gap-5 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg md:gap-6 md:p-8"
                        >
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 transition duration-300 group-hover:bg-rose-600 group-hover:text-white">
                                <HeartHandshake size={25} />
                            </div>

                            <div className="flex-1">
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-xs font-extrabold tracking-widest text-rose-500">
                                    STEP 03
                                </motion.span>

                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.6 }}
                                    className="mt-3 text-lg font-extrabold text-[#101d36] md:text-xl">
                                    Respond to Requests
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.6 }}
                                    className="mt-2 text-sm leading-7 text-slate-500">
                                    Connect with people looking for
                                    compatible blood donors.
                                </motion.p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="px-5 pb-20 md:px-10 md:pb-24">

                <div

                    className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gradient-to-br from-rose-600 via-red-600 to-rose-700 px-6 py-12 text-center shadow-2xl shadow-rose-200/60 md:px-16 md:py-16"
                >
                    <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10" />

                    <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full border-[35px] border-white/10" />

                    <div className="relative mx-auto max-w-2xl">

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                            className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-white backdrop-blur-sm">
                            <Droplet size={32} fill="currentColor" />
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                            className="mt-6 text-3xl font-extrabold leading-tight text-white md:text-4xl">
                            Someone Out There Needs You.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                            className="mx-auto mt-4 max-w-xl text-sm leading-7 text-rose-50 md:text-base">
                            Take the first step today. Join LifeDrop and
                            help build a community where finding a donor
                            becomes easier.
                        </motion.p>

                        <button
                            onClick={() => navigate("/registration")}
                            className="group mt-8 inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 text-sm font-extrabold text-rose-600 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-rose-50"
                        >
                            Register as a Donor

                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </button>

                    </div>
                </div>
            </section>

            {/* ================= FOOTER ================= */}
            <Fouter />

        </div>
    )
}

export default BecomeDonor;
