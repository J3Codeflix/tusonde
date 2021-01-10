import { Injectable } from "@angular/core";
import { Tusonde } from "../models/tusonde/tusonde.model";

@Injectable({ 
    providedIn: 'root' 
})
export class TusondeService {
    async getAll(): Promise<Tusonde[]> {
        try {
            return [
                {
                    name: 'Oxygen for Varya',
                    description: 'To breathe and live at home, Vara urgently needs medical equipment.',
                    image: '/assets/images/tusonde/tusonde-1.svg',
                    percentage: 62,
                    amount: 2000,
                    tags: [ 'Children', 'Active' ]
                },
    
                {
                    name: 'Land plot for a shelter',
                    description: 'The shelter is facing eviction! Collection of funds for the purchase of your own land.',
                    percentage: 86,
                    image: '/assets/images/tusonde/tusonde-2.svg',
                    amount: 1000,
                    tags: [ 'Animals', 'Active' ]
                }
            ];
        } catch (error) {
            throw error;
        }
    }
}
