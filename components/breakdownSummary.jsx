export default function BreakdownSummary({ cardTitle, num1, num2, num3, num4, num5, num6, num7, num8 }) {
 return (
      <div className="w-full rounded-3xl border border-slate-200 bg-[#F8F7F4] p-6 shadow-[0_30px_70px_-40px_rgba(15,23,42,0.18)] transition duration-200 hover:-translate-y-1 hover:shadow-2xl">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-slate-900">{cardTitle}</h2>
          <p className="mt-2 text-sm text-slate-600">A clean finance breakdown of your income and expenses.</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-2xl bg-[#F2F6F5] px-4 py-3 text-sm text-slate-700">
            <span>{"Credit Card"}</span>
            <span className="font-semibold text-slate-900">${num1}</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-[#F2F6F5] px-4 py-3 text-sm text-slate-700">
            <span>{"Cash"}</span>
            <span className="font-semibold text-slate-900">${num2}</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-[#F2F6F5] px-4 py-3 text-sm text-slate-700">
            <span>{"UberEats"}</span>
            <span className="font-semibold text-slate-900">${num3}</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-[#F2F6F5] px-4 py-3 text-sm text-slate-700">
            <span>{"FrontEats"}</span>
            <span className="font-semibold text-slate-900">${num4}</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-[#F2F6F5] px-4 py-3 text-sm text-slate-700">
            <span>{"DoorDash"}</span>
            <span className="font-semibold text-slate-900">${num5}</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-[#F2F6F5] px-4 py-3 text-sm text-slate-700">
            <span>{"GrubHub"}</span>
            <span className="font-semibold text-slate-900">${num6}</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-[#F2F6F5] px-4 py-3 text-sm text-slate-700">
            <span>{"Utilities"}</span>
            <span className="font-semibold text-slate-900">${num7}</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-[#F2F6F5] px-4 py-3 text-sm text-slate-700">
            <span>{"Imports"}</span>
            <span className="font-semibold text-slate-900">${num8}</span>
          </div>
        </div>
      </div>
    );
}