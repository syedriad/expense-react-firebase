import React, { useState } from 'react';
import { useAddTransaction } from '../../hooks/useAddTransaction';
import { useGetTransactions } from '../../hooks/useGetTransaction';
import { useGetUserInfo } from '../../hooks/useGetUserInfo';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase-config';
import { useNavigate } from 'react-router-dom';

export const ExpenseTracker = () => {
    
    
    const { addTransaction } = useAddTransaction();
    const { transactions,transactionTotals } = useGetTransactions();
    const { name, profilePhoto } = useGetUserInfo();
    const navigateTo = useNavigate()

    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState(0);
    const [transactionType, setTransactionType] = useState('expense');


    const{ balance,income,expenses} = transactionTotals

    const onSubmit = (e) => {
        e.preventDefault();
        addTransaction({
            description,
            transactionAmount,
            transactionType
        });
    };

    const userSignOut = async() =>{
        try{
            await signOut(auth)
            localStorage.clear()
            navigateTo("/")
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold"> {name}'s Expense Tracker</h1>
                    <div className="flex items-center space-x-4">
                        {profilePhoto && <img src={profilePhoto} alt="Profile" className="h-20 border-4 border-gray-300 w-20 rounded-full" />}
                        <button onClick={()=> userSignOut()} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-400">Sign Out</button>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <div className="flex justify-center mt-4">
                        <div className="mr-8">
                            <h3 className="text-lg font-semibold">Your Balance</h3>
                            <h2 className="text-2xl"> ${balance >= 0 ? <h2>{balance}</h2>  :   <h2>-{balance *-1}</h2> } </h2>
                        </div>
                        <div className="mr-8">
                            <h3 className="text-lg font-semibold">Your Income</h3>
                            <h2 className="text-2xl">${income}</h2>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Your Expenses</h3>
                            <h2 className="text-2xl">${expenses}</h2>
                        </div>
                    </div>
                </div>

                <form className="mt-8" onSubmit={onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        required
                        className="block w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder="Amount"
                        required
                        className="block w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                        onChange={(e) => setTransactionAmount(e.target.value)}
                    />

                    <div className="flex items-center mb-4">
                        <input
                            type="radio"
                            id="expense"
                            checked={transactionType === 'expense'}
                            value="expense"
                            onChange={(e) => setTransactionType(e.target.value)}
                            className="mr-2"
                        />
                        <label htmlFor="expense" className="mr-6">Expense</label>
                        <input
                            type="radio"
                            id="income"
                            checked={transactionType === 'income'}
                            value="income"
                            onChange={(e) => setTransactionType(e.target.value)}
                            className="mr-2"
                        />
                        <label htmlFor="income">Income</label>
                    </div>

                    <button type="submit" className="block w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400">Add Transaction</button>

                </form>

                <div className="mt-8">
                    <h1 className="text-2xl font-semibold">Transactions</h1>
                    <ul className="mt-4">
                        {transactions.map((trans, index) => {
                            const { description, transactionAmount, transactionType } = trans;
                            return (
                                <li key={index} className="mb-2">
                                    <h4 className="text-lg">{description}</h4>
                                    <p className={`text-lg ${transactionType === 'expense' ? 'text-red-500' : 'text-green-500'}`}>$ {transactionAmount} * {transactionType}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            </div>
        
    );
};

// export default ExpenseTracker;
