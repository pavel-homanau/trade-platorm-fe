import {action, computed, makeObservable, observable, runInAction} from "mobx";
import {CreateOfferPayload, OfferResponseType, OffersApiService, OffersApiType} from "../../api/offers-api";

class OffersStore {
    offers: OfferResponseType[];
    offersApi: OffersApiType;

    constructor() {
        makeObservable(this, {
            offers: observable,
            offersList: computed,
            fetchOffersList: action,
            createOffer: action,
            deleteOffer: action,
        })
        this.offers = [];
        this.offersApi = new OffersApiService();
        this.fetchOffersList = this.fetchOffersList.bind(this)
        this.createOffer = this.createOffer.bind(this)
        this.deleteOffer = this.deleteOffer.bind(this)
    }

    get offersList(): OfferResponseType[] {
        return this.offers
    }

    fetchOffersList() {
        this.offersApi.getOffersList()
            .then((data) => {
                runInAction(() => this.offers = data)
            })
            .catch((error) => console.log(error))
    }

    createOffer(offer: CreateOfferPayload) {
        this.offersApi.createOffer(offer)
            .then(() => {
                runInAction(() => {
                    this.fetchOffersList()
                })
            })
            .catch((error) => console.log(error))
    }

    deleteOffer(id: number) {
        this.offersApi.deleteOffer(id)
            .then(() => runInAction(() => this.offers = this.offers.filter(offer=>offer.id !== id)))
            .catch((error) => console.log(error))
    }
}

export default new OffersStore();