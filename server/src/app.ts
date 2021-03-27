import * as bodyParser from 'body-parser';
import * as Express from 'express';

import { BASE_ROUTER } from './routes';

class App {
    public App: Express.Application = Express();
    public port = 9112;
    private router: Express.Router = BASE_ROUTER;
    private baseUrl = '/api';

    public bootstrap(): void {
        this.initMiddlewares();
        this.listen();
    }

    private initMiddlewares(): void {
        this.App.use((req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
            res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept, Authorization',
            );
            res.header('Access-Control-Expose-Headers', 'Content-Length,Content-Range');
            res.header('Access-Control-Allow-Credentials', 'true');
            next();
        });
        this.App.use(bodyParser.json());
        this.App.use(bodyParser.urlencoded({ extended: false }));
        this.App.use(`${this.baseUrl}`, this.router);
    }

    private listen(): void {
        const server = this.App.listen(this.port, () => {
            // eslint-disable-next-line no-console
            console.log(
                `Mock server for Client Dashboard project is running at http://localhost:${this.port}`,
            );

            process
                .on('exit', () => {
                    server.close();
                })
                .on('SIGINT', () => {
                    server.close();
                    // eslint-disable-next-line no-console
                    console.log(
                        `Mock server which was running at http://localhost:${this.port} has been closed.`,
                    );
                });
        });
    }
}

export default new App();
