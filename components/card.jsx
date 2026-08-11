export default function Card({ cardTitle, cardContent1, cardContent2, num1, num2}) {
    return (
      <div className="mx-auto w-full max-w-xl rounded-3xl border border--200 bg-white p-6 shadow-[0_30px_70px_-40px_rgba(15,23,42,0.35)] transition duration-200 hover:-translate-y-1 hover:shadow-2xl">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-slate-900">{cardTitle}</h2>
          <p className="mt-2 text-sm text-slate-500">A clean finance summary for your income and expenses.</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <span>{cardContent1}</span>
            <span className="font-semibold text-slate-900">${num1}</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <span>{cardContent2}</span>
            <span className="font-semibold text-slate-900">${num2}</span>
          </div>
        </div>
      </div>
    );
  }

  function CardTwo({ cardTitle, cardContent1, cardContent2, num1, num2 }){
    return (
        <div className=" "> 
            
        </div>
    )
  }
