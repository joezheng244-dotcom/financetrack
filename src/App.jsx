import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { auth, db } from "./firebase";
import Card from "../components/summaryCard";
import Login from "../components/login";
import Transaction from "../components/transaction";
import Payroll from "../components/payroll";
import BreakdownSummary from "../components/breakdownSummary";

export default function App() {
  const [user, setUser] = useState(null);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [weeklyIncomeTotal, setWeeklyIncomeTotal] = useState(0);
  const [weeklyExpenseTotal, setWeeklyExpenseTotal] = useState(0);
  const [categoryTotals, setCategoryTotals] = useState({
    UberEats: 0,
    DoorDash: 0,
    GrubHub: 0,
    Cash: 0,
    CreditCard: 0,
    Utilities: 0,
    Imports: 0,
    FrontEats: 0,
  });
  const [selectedMonth, setSelectedMonth] = useState(new Date().toISOString().slice(0, 7));

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!user) return;

    const transactionsRef = query(collection(db, "transactions"), where("userId", "==", user.uid);
    const unsubscribe = onSnapshot(transactionsRef, (snapshot) => {
      let runningIncomeWeeklyTotal = 0;
      let runningExpenseWeeklyTotal = 0;
      let runningIncomeTotal = 0;
      let runningExpenseTotal = 0;
      const nextTotals = {
        UberEats: 0,
        DoorDash: 0,
        GrubHub: 0,
        Cash: 0,
        CreditCard: 0,
        Utilities: 0,
        Imports: 0,
        FrontEats: 0,
      };

      snapshot.forEach((doc) => {
        const data = doc.data();
        const categoryData = data.category;
        const dateData = data.createdAt?.toDate();
        const amount = Number(data.amount || 0);
        const now = new Date();
        const day = now.getDay();
        const transactionMonth = dateData ? dateData.toISOString().slice(0, 7) : null;
        let daysFromMonday;

        if (day === 0){
          daysFromMonday = 6;
        } else {
          daysFromMonday = day - 1;
        }

        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - daysFromMonday);
        startOfWeek.setHours(0, 0, 0, 0);
        
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        endOfWeek.setHours(23, 59, 59, 999);

        if (transactionMonth == selectedMonth) {
          if (categoryData in nextTotals) {
            if (data.type === "expense") {
              nextTotals[categoryData] -= amount;
            }
            else if (data.type === "income") {
              nextTotals[categoryData] += amount;
            }
          }
          if (data.type === "income") {
            runningIncomeTotal += amount;
          }
          else if (data.type === "expense") {
            runningExpenseTotal += amount;
          }
        }

        if (dateData >= startOfWeek && dateData <= endOfWeek) {
          if (data.type === "income") {
            runningIncomeWeeklyTotal += amount;
          }
          else if (data.type === "expense") {
            runningExpenseWeeklyTotal += amount;
          }
        }
      });

      setIncomeTotal(runningIncomeTotal);
      setExpenseTotal(runningExpenseTotal);
      setWeeklyExpenseTotal(runningExpenseWeeklyTotal);
      setWeeklyIncomeTotal(runningIncomeWeeklyTotal);
      setCategoryTotals(nextTotals);
    });

    return unsubscribe;
  }, [user, selectedMonth]);

  const username = user?.displayName || user?.email || "there";

  const handleSignOut = async () => {
    await signOut(auth);
  };

  if (!user) {
    return (
      <div className="app min-h-screen bg-[#F4F6F9] text-slate-900">
        <main className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
          <Login />
        </main>
      </div>
    );
  }

  return (
    <div className="app min-h-screen bg-[#F4F6F9] text-slate-900">
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 rounded-[2rem] bg-[#F8F7F4] px-8 py-10 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.18)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Finance Dashboard</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl text-slate-900">
                Hello, {username}!
              </h1>
            </div>

            <button
              type="button"
              onClick={handleSignOut}
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Sign out
            </button>
          </div>
        </header>

        <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <Transaction />
          </div>

          <aside className="space-y-6">
            <Card
              cardTitle="Monthly Summary"
              cardContent1="Net Income"
              cardContent2="Total Expenses"
              num1={incomeTotal}
              num2={expenseTotal}
            />
            <Card
              cardTitle="Weekly Summary"
              cardContent1="Net Income"
              cardContent2="Total Expenses"
              num1={(weeklyIncomeTotal)}
              num2={(weeklyExpenseTotal)}
            />
            <Payroll
              cardTitle="Payroll Summary"
              cardContent1="Total Payroll"
              num1={1500}
            />
            <BreakdownSummary
              cardTitle="Breakdown Summary"
              num1={categoryTotals.CreditCard}
              num2={categoryTotals.Cash}
              num3={categoryTotals.UberEats}
              num4={categoryTotals.FrontEats}
              num5={categoryTotals.DoorDash}
              num6={categoryTotals.GrubHub}
              num7={categoryTotals.Utilities}
              num8={categoryTotals.Imports}
            />
          </aside>
        </div>
      </main>
    </div>
  );
}


