import { TOGGLE_LOADING } from '../reducers/constants';

export const toggleLoading = (bool)=>({type:TOGGLE_LOADING, loading:bool})