import Card from "../components/card";
import Transaction from "../components/transaction";

export default function App() {
  return (
    <div className="app min-h-screen bg-[#F4F6F9] text-slate-900">
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 rounded-[2rem] bg-[#F8F7F4] px-8 py-10 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.18)]">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Finance Dashboard</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl text-slate-900">Hello, {username}!</h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              Add income and expense entries, watch your summaries grow, and keep your budget clean.
            </p>
          </div>
        </header>

        <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <Transaction />

            <section className="rounded-3xl border border-slate-200 bg-[#F8F7F4] p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-2xl">
              <h2 className="text-xl font-semibold text-slate-900">Recent Transactions</h2>
              <div className="mt-4 text-sm text-slate-600">No transactions yet.</div>
            </section>
          </div>

          <aside className="space-y-6">
            <Card
              cardTitle="Monthly Summary"
              cardContent1="Net Income"
              cardContent2="Total Expenses"
              num1={4200}
              num2={3100}
            />
            <Card
              cardTitle="Weekly Summary"
              cardContent1="Net Income"
              cardContent2="Total Expenses"
              num1={1050}
              num2={775}
            />
          </aside>
        </div>
      </main>
    </div>
  );
}

