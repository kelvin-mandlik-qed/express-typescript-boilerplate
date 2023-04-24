import { Authorized, Get, JsonController } from 'routing-controllers';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';
import { CountryService } from '../services/CountryService';
import { CountryResponse } from './responses/country.response';

@Authorized()
@JsonController('/countries')
@OpenAPI({ security: [ { basicAuth: [] } ] })
export class CountryController {
    constructor(private readonly countryService: CountryService) {
    }

    @Get()
    @ResponseSchema(CountryResponse, { isArray: true })
    public fetchAllCountries(): Promise<CountryResponse[]> {
        return this.countryService.fetchAllCountries();
    }
}
