export interface TradesApiType {
    getTradesList: () => Promise<TradesResponseType[]>
}

export type TradesResponseType = {
    id: number
    quantity: number
    unit_price: string
    description: string
    item: string
    seller: number
    buyer: number
    buyer_offer: number
    seller_offer: number
}

