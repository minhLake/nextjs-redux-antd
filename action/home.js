import {
  INIT_PROJECT
} from './actionType'

export const initProject = () => dispatch => {
  dispatch({
    type: INIT_PROJECT
  })
}