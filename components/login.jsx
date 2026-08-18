import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../src/firebase";

const provider = new GoogleAuthProvider();

export default function Login() {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    setError(null);

    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      setUser(result.user);
      console.log("Google sign-in succeeded", { user: result.user, token });
    } catch (error) {
      setError(error?.message || "Failed to sign in");
      console.error("Google sign-in failed", error);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.35)] backdrop-blur-sm">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-emerald-500/10" />

      <div className="relative">
        <div className="mb-6 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
          FinanceTrack
        </div>

        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Welcome back</h2>
        <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
          Sign in to track your spending, income, and monthly progress in one place.
        </p>

        <button
          type="button"
          onClick={handleLogin}
          className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-700"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-base">G</span>
          Continue with Google
        </button>

        {error && <p className="mt-5 text-sm font-medium text-red-600">{error}</p>}
        {user && <p className="mt-5 text-sm text-slate-700">Signed in as {user.email}</p>}
      </div>
    </div>
  );
}
