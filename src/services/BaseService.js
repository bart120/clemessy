import axios from 'axios';

export class BaseService {

    post(url, data) {
        return axios.post(url, data).then(this.promiseResolve).catch(this.promiseReject);
    }

    get(url) {
        return axios.get(url).then(this.promiseResolve).catch(this.promiseReject);
    }

    put(url, data) {
        return axios.put(url, data).then(this.promiseResolve).catch(this.promiseReject);
    }

    delete(url) {
        return axios.delete(url).then(this.promiseResolve).catch(this.promiseReject);
    }

    promiseResolve(resp) {
        if (resp.data === null) {
            return Promise.reject('Retour null');
        }
        return Promise.resolve(resp.data);
    }

    promiseReject(err) {
        Promise.reject(err);
    }


}