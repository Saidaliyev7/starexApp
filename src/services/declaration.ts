import { httpClient } from 'httpClient';

import { IDeclarationService } from './models';

export const declarationService: IDeclarationService = {
    getProductTypes: (country: string, page = 0) =>
        httpClient.get(`v1/product-types/?&page=${page}&country=${country}`),
    createDeclaration: (declaration: FormData) => httpClient.post(`v1/declarations/`, declaration),
};
