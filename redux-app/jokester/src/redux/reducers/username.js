
import { GET_USERNAME } from '../actionTypes';


const initialState = 'Joell';

function usernameReducer(state=initialState, action) {

  if (action.type === GET_USERNAME) {
	    return action.payload.username;
  }
	  return state;
}

export default usernameReducer;