import React, {useContext} from 'react';
import { Transaction } from './Transactions'
import { GlobalContext } from '../context/GlobalState';

export const TransactionsList = () => {
    const { transactions } = useContext(GlobalContext);


    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transactions => (<Transaction key={transactions.id} transactions={transactions} />))}
                
            </ul>
        </div>
    )
}
