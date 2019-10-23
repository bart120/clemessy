import { BaseService } from "./BaseService";
import jwtDecode from 'jwt-decode';

const URL = 'https://d2i-labs03.clemessy.fr/base-capteur/variableTypes';


export class VariableTypesService extends BaseService {

    getAll() {
        return this.get(URL);
    }

}