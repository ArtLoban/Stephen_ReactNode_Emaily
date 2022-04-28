import axios from 'axios';
import {FETCH_USER} from './types';

const fetchUser = () => {
  /*
  * Благодаря applyMiddleware(reduxThunk) установленого в index.js, если reduxThunk мидлвер видит,
  * что возвращается функция, то он автоматически добавлет в нее dispatch() как атрибут.
  * Эта dispatch() будет использоваться чтобы задиспачить экшен в редюсер!
  */
  return async function (dispatch) {
    const response = await axios.get('/api/current_user');
    const json = await response.json();

    console.log(json);
    dispatch({type: FETCH_USER, payload: json});
  }
};

export default fetchUser;