import axios from 'axios';

const fetchNews = async () => {
  try {
    let dailyNews = await axios.get('/api/news');
    // console.log('dailyNews', dailyNews.data.response);
    return dailyNews.data.response;
  } catch (error) {
    console.log(error);
  }
};

export default fetchNews;
