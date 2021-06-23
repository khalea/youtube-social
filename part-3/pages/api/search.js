import axios from 'axios'

const youtubeAPI = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q='
const apiKey = 'YOUR_API_KEY'

export const searchVideos = (query) => {
    const url = youtubeAPI + query + '&type=video&key=' + apiKey

    return axios.get(url)
        .catch(function (error) {
            console.log(error)
        })
}
