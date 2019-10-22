import { createStore } from 'redux';
import authenticationReducer from './reducers/authentication-reducer';

export const store = createStore(authenticationReducer);