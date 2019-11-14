import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import Config from 'react-native-config';
import {getToken, logOut} from 'utils/auth';

const {API_URL, API_PORT, API_KEY} = Config;

const api_call = async (method, url, requestParams = {}) => {
  try {
    const token = await getToken();

    // TODO:
    // If api call authorization fail, redirect login

    //Needs refactor!
    const client = axios.create({
      baseURL: `${API_URL}:${API_PORT}`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        origin: 'APP',
        api_key: API_KEY,
        Authorization: `Bearer ${token}`,
      },
    });
    const res = await client[method](url, requestParams);
    return res;
  } catch (error) {
    console.log(error);
    if (error.response.status === 401) {
      logOut();
      throw error;
    } else {
      throw error;
    }
  }
};
export default api_call;
