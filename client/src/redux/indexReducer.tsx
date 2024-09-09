import { combineReducers } from 'redux';

import {authReducer} from './authReducer';
import {formReducer} from './profileReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    form: formReducer
})


export type RootState = ReturnType<typeof rootReducer>;