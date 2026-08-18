export default function Payroll({ cardTitle, cardContent1, num1 }) {
  return (
    <div className="w-full rounded-3xl border border-slate-200 bg-[#F8F7F4] p-6 shadow-[0_30px_70px_-40px_rgba(15,23,42,0.18)] transition duration-200 hover:-translate-y-1 hover:shadow-2xl">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-slate-900">{cardTitle}</h2>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-2xl bg-[#F2F6F5] px-4 py-3 text-sm text-slate-700">
          <span>{cardContent1}</span>
          <span className="font-semibold text-slate-900">${num1}</span>
        </div>
      </div>
    </div>
  );
}