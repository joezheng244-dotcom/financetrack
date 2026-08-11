import Card from "../components/card";
import Transaction from "../components/transaction";

export default function App() {
  return (
    <div className="app min-h-screen bg-slate-50 p-6 text-slate-900">
      <main className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 flex flex-col gap-6">
            <Transaction />

            <section className="mx-auto w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-2xl">
              <h2 className="text-xl font-semibold text-slate-900">Recent Transactions</h2>
              <div className="mt-4 text-sm text-slate-600">No transactions yet.</div>
            </section>
          </div>

          <aside className="flex flex-col gap-6">
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

