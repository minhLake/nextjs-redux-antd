import {
  INIT_PROJECT
} from '../action/actionType';

const INIT_STATE = {
  project: 'minh'
}

const home = (state= INIT_STATE, action) => {
  switch(action.type) {
    case INIT_PROJECT: 
      return {
        ...state,
        project: action.project
      }
    default: 
      return {
        ...state
      }
  }
}

export default home