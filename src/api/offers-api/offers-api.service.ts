import {instance} from "../instance";
import {CreateOfferPayload, OffersApiType, OfferResponseType, CreatedOfferResponseType} from "./offers-api.types";

class OffersApiService implements OffersApiType {

    constructor() {
        this.getOffersList = this.getOffersList.bind(this)
        this.createOffer = this.createOffer.bind(this)
        this.deleteOffer = this.deleteOffer.bind(this)
    }

    public getOffersList(): Promise<OfferResponseType[]> {
        return instance.get(`/api/offers/`)
            .then(response => response.data)
    }

    public createOffer(payload: CreateOfferPayload): Promise<CreatedOfferResponseType> {
        return instance.post(`/api/offers/`, payload)
            .then(response => response.data)
    }

    public deleteOffer(id: number): Promise<void> {
        return instance.delete(`/api/offers/${id}/`)
            .then(response => response.data)
    }
}

export default OffersApiService;