import { Service } from 'typedi';
import axios from 'axios';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { CountryResponse } from '../controllers/responses/country.response';
import { ICountry } from './interfaces/country.interface';

@Service()
export class CountryService {
    constructor(@Logger(__filename) private log: LoggerInterface) {
    }

    public async fetchAllCountries(): Promise<CountryResponse[]> {
        this.log.info('Fetch all countries');
        const countries = await this.fetchCountriesFromSource();
        return countries.map(country => ({
            name: country.name,
            currencies: country.currencies,
        }));
    }

    private async fetchCountriesFromSource(): Promise<ICountry[]> {
        this.log.info('Fetch all countries from source');
        const response = await axios.get('https://restcountries.com/v3.1/all');
        return response.data;
    }
}
