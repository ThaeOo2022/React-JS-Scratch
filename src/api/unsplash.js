import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID f2PN1oOQ2IDBWuFVbRNGmgr-6LH_HYBXhGzBG-u6HRE'
      }
});