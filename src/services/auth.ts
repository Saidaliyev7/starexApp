import { httpClient } from 'httpClient';

import { IAuthService } from './models';

const BASE_URL = '/v1/auth';

export const authService: IAuthService = {
    logout: () => httpClient.post(`${BASE_URL}/logout/`),
    getCurrentUser: () => httpClient.get('v1/user/'),
};
