import { IsNotEmpty, IsString } from 'class-validator';

export class CountryResponse {
    @IsString()
    @IsNotEmpty()
    public name: Record<string, unknown>;

    @IsString()
    @IsNotEmpty()
    public currencies: Record<string, unknown>;
}
