import axios from 'axios';

const unsConfig = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9d215ae4d114eb29d4f68772730e61c8a2bb27d90cb40e26c48b09c8925f3843'
    }
});

export default unsConfig;