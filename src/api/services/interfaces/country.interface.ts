export interface ICountry {
    name: {
        official: string,
        common: string,
        nativeName: Record<string, { official: string, common: string }>
    };
    currencies: Record<string, { name: string, symbol: string }>;
}
