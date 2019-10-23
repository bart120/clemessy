import { BaseService } from "./BaseService";
import jwtDecode from 'jwt-decode';

const URL = 'https://d2i-labs03.clemessy.fr/api/authenticate';

export class AuthenticationService extends BaseService {

    authenticate(user) {
        /*const myuser = { username, password } = user;

        const { username, password } = user;
        const username = user.username;
        const password = user.password;*/

        return this.post(URL, user).then((data) => {
            const decoded = jwtDecode(data.id_token);

            return Promise.resolve({ name: decoded.sub, token: data.id_token, roles: decoded.auth.split(',') });
        });

    }

}