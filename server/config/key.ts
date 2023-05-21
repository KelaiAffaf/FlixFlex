import prodConfig from './prod';
import devConfig from './dev';

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
