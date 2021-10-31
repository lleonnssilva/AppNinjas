import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const Api = axios.create({
  baseURL:'http://api.sgcp.sp.gov.br/api/v1/',
});
Api.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  } catch (err) {
    alert(err);
  }
});

export default Api;
