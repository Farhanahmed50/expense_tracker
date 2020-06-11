import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransactions = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();

    const { AddTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const NewTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        
        AddTransaction(NewTransaction);
    }

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />(Negative - Expense, Positive - Income)
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}
