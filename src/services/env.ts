export interface IEnvService {
    profile: 'local' | 'dev' | 'prod' | 'test';
}

class EnvService implements IEnvService {
    public get profile() {
        if (process.env.APP_MODE === 'local') {
            return 'local';
        }
        if (process.env.INFRA_ENV === 'test') {
            return 'test';
        } else if (process.env.INFRA_ENV === 'production') {
            return 'prod';
        } else if (process.env.INFRA_ENV === 'staging') {
            return 'dev';
        } else {
            return 'local';
        }
    }
}

export const envService = new EnvService();
