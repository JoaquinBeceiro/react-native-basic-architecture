import * as login from './login';
import * as alert from './alert';
import * as register from './register';

const combined = {...login, ...alert, ...register};

export default combined;
