import {action, computed, makeObservable, observable, runInAction} from "mobx";
import {TradesApiService, TradesApiType, TradesResponseType} from "../../api/trades-api";

class TradesStore {
    trades: TradesResponseType[];
    tradesApi: TradesApiType;

    constructor() {
        makeObservable(this, {
            trades: observable,
            tradesList: computed,
            fetchTradesList: action,
        })
        this.trades = [];
        this.tradesApi = new TradesApiService();
        this.fetchTradesList = this.fetchTradesList.bind(this)
    }

    get tradesList(): TradesResponseType[] {
        return this.trades
    }

    fetchTradesList() {
        this.tradesApi.getTradesList()
            .then((data) => {
                runInAction(() => this.trades = data)
            })
            .catch((error) => console.log(error))
    }

}

export default new TradesStore();