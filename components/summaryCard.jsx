export default function Card({ cardTitle, cardContent1, cardContent2, showMonthSelector, selectedMonth, setSelectedMonth, num1, num2}) {
  const currentDateString = selectedMonth ? selectedMonth: new Date().toISOString().slice(0, 7); 
  const currentYear = currentDateString.slice(0, 4);
  const startYear = 2026;
  const latestYear = new Date().getFullYear();
  const monthsList = [
    { value: "01", name: "Jan" },
    { value: "02", name: "Feb" },
    { value: "03", name: "Mar" },
    { value: "04", name: "Apr" },
    { value: "05", name: "May" },
    { value: "06", name: "Jun" },
    { value: "07", name: "Jul" },
    { value: "08", name: "Aug" },
    { value: "09", name: "Sep" },
    { value: "10", name: "Oct" },
    { value: "11", name: "Nov" },
    { value: "12", name: "Dec" }
  ];

  const yearList = [];
  for (let x = startYear; x <= latestYear; x++){
    yearList.push(x);
  }

  const handleMonthChange = (e) => {
    const twoDigitMonth = e.target.value; 
    const newSelectedDate = `${currentYear}-${twoDigitMonth}`;
    setSelectedMonth(newSelectedDate);
  }

  return (
      <div className="w-full rounded-3xl border border-slate-200 bg-[#F8F7F4] p-6 shadow-[0_30px_70px_-40px_rgba(15,23,42,0.18)] transition duration-200 hover:-translate-y-1 hover:shadow-2xl">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-slate-900">{cardTitle}</h2>
          <p className="mt-2 text-sm text-slate-600">A clean finance summary for your income and expenses.</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-2xl bg-[#F2F6F5] px-4 py-3 text-sm text-slate-700">
            <span>{cardContent1}</span>
            <span className="font-semibold text-slate-900">${num1}</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-[#F2F6F5] px-4 py-3 text-sm text-slate-700">
            <span>{cardContent2}</span>
            <span className="font-semibold text-slate-900">${num2}</span>
          </div>
        </div>
      </div>
    );
  }
