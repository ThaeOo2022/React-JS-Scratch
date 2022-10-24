import axios from 'axios';

const KEY='AIzaSyDXAtO0aBO3APe_AMIv6jP8JI7FiHSMq6Q';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:25,
        type:'video',
        key:KEY
    }
});