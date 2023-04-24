import { Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { CountryService } from '../services/CountryService';
import { CountryResponse } from '../controllers/responses/country.response';

@Service()
@Resolver()
export class UserResolver {
    constructor(private countryService: CountryService) {
    }

    @Query(returns => [ CountryResponse ])
    public users(): Promise<CountryResponse[]> {
        return this.countryService.fetchAllCountries();
    }
}
