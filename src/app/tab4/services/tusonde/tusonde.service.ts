import { Injectable } from "@angular/core";
import { Tusonde } from "../../models/tusonde/tusonde.model";

@Injectable({ 
    providedIn: 'root' 
})
export class TusondeService {
    private tusondes: Tusonde[] = [];
    
    constructor() {
        this.tusondes = [
            {
                id: 'tusonde101',
                userId: 'ABCD1234',
                title: 'Oxygen for Varya',
                description: 'To breathe and live at home, Vara urgently needs medical equipment.',
                image: '/assets/images/tusonde/tusonde-1.svg',
                raisedAmount: 1240,
                goal: 2000,
                categories: [ 'Children', 'Active' ],
                endDate: 'Jan 31, 2020',
            },

            {
                id: 'tusonde102',
                userId: 'ABCD1234',
                title: 'Land plot for a shelter',
                description: 'The shelter is facing eviction! Collection of funds for the purchase of your own land.',
                image: '/assets/images/tusonde/tusonde-2.svg',
                raisedAmount: 860,
                goal: 1000,
                categories: [ 'Animals', 'Active' ],
                endDate: 'Feb 20, 2020',
            }
        ];
    }

    async getAll(): Promise<Tusonde[]> {
        try {
            return this.tusondes;
        } catch (error) {
            throw error;
        }
    }

    async getOne(id: string): Promise<Tusonde> {
        try {
            return this.tusondes.find(tusonde => tusonde.id === id);
        } catch (error) {
            throw error;
        }
    }
}
