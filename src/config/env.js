import {DEV_BACKEND_URL, DEV_TOKEN_MAP_URL,DEV_TOKEN_ONSIGNAL_URL} from '@env';

const devEnvironmentVariables = {
  BACKEND_URL: DEV_BACKEND_URL,
  TOKEN_MAP_URL:DEV_TOKEN_MAP_URL,
  TOKEN_ONSIGNAL_URL:DEV_TOKEN_ONSIGNAL_URL
};
const devEnvirprodEnvironmentVariablesonmentVariables = {
    BACKEND_URL: '',
    TOKEN_MAP_URL:'',
    TOKEN_ONSIGNAL_URL:''
  };

export default __DEV__ ? devEnvironmentVariables : prodEnvironmentVariables;