// eslint-disable-next-line import/no-extraneous-dependencies
import { createServer } from 'miragejs';

const ROUTES = {
  login: '/api/login',
  register: '/api/register',
};

export const mockServer = () =>
  createServer({
    routes() {
      this.namespace = 'http://localhost:5000';

      this.post(ROUTES.login, () => ({
        accessToken: '',
      }));

      this.post(ROUTES.register, () => ({
        accessToken: '',
      }));
    },
  });
