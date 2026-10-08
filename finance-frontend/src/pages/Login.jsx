import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { ArrowDownRight, ArrowUpRight, CircleDollarSign, LockKeyhole, Mail, ShieldCheck, TrendingUp } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(email, password);

      login(data);

      toast.success("Login successful");

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Login failed"
      );
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 lg:grid lg:grid-cols-2">
      <section className="relative hidden min-h-screen overflow-hidden bg-[#102b2a] px-12 py-10 text-white lg:flex lg:flex-col xl:px-20">
        <div className="absolute -right-28 -top-28 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" aria-hidden="true" />
        <div className="relative flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-300 text-[#102b2a]">
            <CircleDollarSign size={23} strokeWidth={2.2} />
          </span>
          <span className="text-sm font-semibold tracking-wide">Personal Finance Tracker</span>
        </div>

        <div className="relative mx-auto flex w-full max-w-xl flex-1 flex-col justify-center py-14">
          <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
            <span className="h-px w-7 bg-emerald-300" /> Clarity for every dollar
          </p>
          <h1 className="max-w-lg text-5xl font-semibold leading-[1.08] tracking-tight xl:text-6xl">
            Take control of your money.
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-slate-300">
            Track your income, manage expenses, and understand your financial habits in one place.
          </p>

          <div className="relative mt-12 min-h-64 rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/20 backdrop-blur-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-slate-300">Monthly overview</p>
                <p className="mt-2 text-2xl font-semibold">Your finances, in focus</p>
              </div>
              <span className="rounded-lg border border-white/10 bg-white/10 p-2 text-emerald-200">
                <TrendingUp size={19} />
              </span>
            </div>
            <div className="mt-6 flex h-24 items-end gap-2" aria-hidden="true">
              {[38, 55, 44, 70, 58, 82, 66, 94, 75, 100, 84, 90].map((height, index) => (
                <span key={index} className="flex-1 rounded-t-sm bg-gradient-to-t from-emerald-500/40 to-emerald-200/90" style={{ height: `${height}%` }} />
              ))}
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-[#173735]/80 p-3">
                <div className="flex items-center gap-2 text-xs text-slate-300"><ArrowUpRight size={14} className="text-emerald-300" /> Income</div>
                <p className="mt-2 text-lg font-semibold">Growing steadily</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#173735]/80 p-3">
                <div className="flex items-center gap-2 text-xs text-slate-300"><ArrowDownRight size={14} className="text-cyan-200" /> Spending</div>
                <p className="mt-2 text-lg font-semibold">Easy to understand</p>
              </div>
            </div>
          </div>
          <div className="absolute -right-5 bottom-14 hidden items-center gap-3 rounded-xl border border-white/10 bg-[#1c4140] px-4 py-3 shadow-xl xl:flex">
            <span className="rounded-lg bg-emerald-300/15 p-2 text-emerald-200"><ShieldCheck size={18} /></span>
            <span className="text-xs leading-5 text-slate-200">A clearer view<br />of your finances</span>
          </div>
        </div>
        <p className="relative text-xs text-slate-400">A calmer way to stay on top of your finances.</p>
      </section>

      <main className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-8 lg:px-12">
        <div className="w-full max-w-md">
          <div className="mb-9 flex items-center gap-3 lg:hidden">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-900/15 dark:bg-emerald-400 dark:text-slate-950">
              <CircleDollarSign size={23} strokeWidth={2.2} />
            </span>
            <span className="text-sm font-semibold tracking-wide">Personal Finance Tracker</span>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.28)] sm:p-10 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/30">
            <div className="mb-8 hidden items-center gap-3 lg:flex">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white dark:bg-emerald-400 dark:text-slate-950">
                <CircleDollarSign size={22} />
              </span>
              <span className="text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-200">Personal Finance Tracker</span>
            </div>
            <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Your financial picture starts here</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">Welcome back</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">Sign in to pick up right where you left off.</p>

            <form onSubmit={submitHandler} className="mt-8 space-y-5">
              <div>
                <label htmlFor="login-email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Email address</label>
                <div className="relative">
                  <Mail size={18} aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input id="login-email" type="email" autoComplete="email" placeholder="you@example.com" className="h-12 w-full rounded-xl border border-slate-300 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500 dark:hover:border-slate-600 dark:focus:border-emerald-400 dark:focus:ring-emerald-400/10" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
              <div>
                <label htmlFor="login-password" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Password</label>
                <div className="relative">
                  <LockKeyhole size={18} aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input id="login-password" type="password" autoComplete="current-password" placeholder="Enter your password" className="h-12 w-full rounded-xl border border-slate-300 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500 dark:hover:border-slate-600 dark:focus:border-emerald-400 dark:focus:ring-emerald-400/10" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>
              <button type="submit" className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-600 px-4 text-sm font-semibold text-white shadow-lg shadow-emerald-900/15 transition duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30 active:translate-y-0 dark:from-emerald-500 dark:to-teal-500 dark:text-slate-950">
                Sign in <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-slate-500 dark:text-slate-400">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="font-semibold text-emerald-700 underline-offset-4 transition hover:text-emerald-800 hover:underline focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-emerald-300 dark:hover:text-emerald-200">Create account</Link>
            </p>
          </div>
          <p className="mt-6 text-center text-xs text-slate-400 dark:text-slate-500">Your money. Your plan. Your next move.</p>
        </div>
      </main>
    </div>
  );
};

export default Login;