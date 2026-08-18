import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../src/firebase";

export default function Transaction() {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        if (!amount || !category || !type) {
            alert('Please fill in all required fields.');
            return;
        }

        try {
            await addDoc(collection(db, 'transactions'), {
                amount: parseFloat(amount),
                category,
                type,
                createdAt: serverTimestamp(),
                userId: auth.currentUser.uid,
            });

            setAmount('');
            setCategory('');
            setType('');
        } catch (error) {
            console.error('Error adding transaction:', error);
            alert('Something went wrong while saving the transaction.');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-full rounded-3xl border border-slate-200 bg-[#F8F7F4] pt-6 px-6 pb-4 shadow-[0_30px_70px_-40px_rgba(15,23,42,0.12)] transition duration-200 hover:-translate-y-1 hover:shadow-2xl">
            <div className="mb-6 space-y-6">
                <h2 className="text-2xl font-semibold text-slate-900">Transaction</h2>
                <label>
                    <span className="block text-sm font-medium text-slate-700">Expense or Income</span>
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="mt-1 block w-full rounded-md border border-slate-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">-- Please Choose One --</option>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </label>

                <label>
                    <span className="block text-sm font-medium text-slate-700">Category</span>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="mt-1 block w-full rounded-md border border-slate-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">-- Please Choose One --</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Cash">Cash</option>
                        <option value="UberEats">UberEats</option>
                        <option value="FrontEats">FrontEats</option>
                        <option value="DoorDash">DoorDash</option>
                        <option value="GrubHub">GrubHub</option>
                        <option value="Utilities">Utilities (Electricity, Water, Gas)</option>
                        <option value="Imports">Imports (A5 Wagyu, Salmon, etc.)</option>
                    </select>
                </label>

                <label>
                    <span className="block text-sm font-medium text-slate-700">Amount</span>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="mt-1 block w-full rounded-md border border-slate-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </label>

                <button type="submit" className="mt-4 inline-flex items-center justify-center rounded-md border border-transparent bg-blue-100 py-2 px-3 text-sm font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Add Transaction
                </button>
            </div>
        </form>
    );
}

