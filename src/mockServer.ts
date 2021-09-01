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
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      }));

      this.post(ROUTES.register, () => ({
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      }));
    },
  });
