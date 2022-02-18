import {instance} from "../instance";
import {TradesApiType, TradesResponseType} from "./trades-api.types";

class TradesApiService implements TradesApiType {

    constructor() {
        this.getTradesList = this.getTradesList.bind(this)
    }

    public getTradesList(): Promise<TradesResponseType[]> {
        return instance.get(`/api/trades/`)
            .then(response => response.data)
    }

}

export default TradesApiService;