const {
    VITE_NODE_ENV: node_env = 'development',
    VITE_API_URL: api_url = 'http://localhost:3000',
} = import.meta.env;

export default {
    node_env,
    api_url
};