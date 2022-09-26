import axios from 'axios'

const reviewsApi = axios.create({
    baseUrl: "https://portfolio-games-api.herokuapp.com/api"
})

export const getReviews = () => {
    return reviewsApi.get('https://portfolio-games-api.herokuapp.com/api/reviews').then((res) => {
        return res.data
        
    })
}