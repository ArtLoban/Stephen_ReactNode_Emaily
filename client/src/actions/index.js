import axios from 'axios';
import {FETCH_USER} from './types';

export const fetchUser = () => {
  /*
  * Благодаря applyMiddleware(reduxThunk) установленого в index.js, если reduxThunk мидлвер видит,
  * что возвращается функция, то он автоматически добавлет в нее dispatch() как атрибут.
  * Эта dispatch() будет использоваться чтобы задиспачить экшен в редюсер!
  */
  return async (dispatch) => {
    const res = await axios.get('/api/current_user');

    dispatch({type: FETCH_USER, payload: res.data });
  }
};
