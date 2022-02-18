import React, {useEffect} from 'react';
import styles from './trades.module.css';
import {TradesStore} from "../../store/tradess-store";
import {Trade} from "./trade";
import {observer} from "mobx-react-lite";

const Trades = observer(() => {
    const {fetchTradesList, tradesList} = TradesStore;

    useEffect(() => {
        fetchTradesList()
    }, [])

    return (
        <div className={styles.tradesContainer}>
            <div className={styles.pageTitle}>
                <h1>Trades list</h1>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Buyer</th>
                    <th>Seller</th>
                    <th>Quantity</th>
                    <th>Unit price</th>
                    <th>Item</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {tradesList.length > 0 && tradesList.map(trade => {
                    return <Trade key={trade.id} trade={trade}/>
                })}
                </tbody>
            </table>
        </div>
    )
});

export default Trades;