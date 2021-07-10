export interface IEnvService {
    profile: 'local' | 'dev' | 'prod' | 'test';
}

class EnvService implements IEnvService {
    public get profile() {
        if (process.env.NODE_ENV === 'local') {
            return 'local';
        }
        if (process.env.INFRA_ENV === 'test' && process.env.NODE_ENV === 'test') {
            return 'test';
        } else if (process.env.INFRA_ENV === 'master') {
            return 'prod';
        } else if (process.env.INFRA_ENV === 'stagging') {
            return 'dev';
        } else {
            return 'local';
        }
    }
}

export const envService = new EnvService();
