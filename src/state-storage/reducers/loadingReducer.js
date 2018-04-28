import { TOGGLE_LOADING } from './constants'

const initialState = {
  loading: true,
}

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING: return {
      loading: action.loading
    }
    default: return state
  }
}

export default loadingReducer