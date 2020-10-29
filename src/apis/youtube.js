/*import axios from 'axios';

const KEY = 'AIzaSyDUfUTAxyaCHLcMHRSN-5UuIayhaeu8iY8';

export default axios.crate({
    baseURL: 'https://www.gooogleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
*/

import axios from "axios";
 
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});