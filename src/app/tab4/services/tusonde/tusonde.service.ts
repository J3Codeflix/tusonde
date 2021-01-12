import { Injectable } from "@angular/core";
import { Tusonde } from "../../models/tusonde/tusonde.model";

@Injectable({ 
    providedIn: 'root' 
})
export class TusondeService {
    async getAll(): Promise<Tusonde[]> {
        try {
            return [
                {
                    userId: 'ABCD1234',
                    title: 'Oxygen for Varya',
                    description: 'To breathe and live at home, Vara urgently needs medical equipment.',
                    image: '/assets/images/tusonde/tusonde-1.svg',
                    amountDonated: 1240,
                    goal: 2000,
                    categories: [ 'Children', 'Active' ],
                    endDate: 'Jan 31, 2020',
                },

                {
                    userId: 'ABCD1234',
                    title: 'Land plot for a shelter',
                    description: 'The shelter is facing eviction! Collection of funds for the purchase of your own land.',
                    image: '/assets/images/tusonde/tusonde-2.svg',
                    amountDonated: 860,
                    goal: 1000,
                    categories: [ 'Animals', 'Active' ],
                    endDate: 'Feb 20, 2020',
                }
            ];
        } catch (error) {
            throw error;
        }
    }
}
