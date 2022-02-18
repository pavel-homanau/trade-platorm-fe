import React from 'react';
import {TradesResponseType} from "../../../api/trades-api";

type OfferPropsType = {
    trade: TradesResponseType
}

const Trade = ({trade}: OfferPropsType) => {

    const {buyer, seller, item, quantity, unit_price, description} = trade

    return (
        <tr>
            <td>{buyer}</td>
            <td>{seller}</td>
            <td>{quantity}</td>
            <td>${unit_price}</td>
            <td>{item}</td>
            <td>{description}</td>
        </tr>
    );
};

export default React.memo(Trade);