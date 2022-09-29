import axios from 'axios'

export const getCategories = () => {
    return axios.get('https://portfolio-games-api.herokuapp.com/api/categories').then((res) => {
        return res.data
    })
}

export const getReviews = () => {
    return axios.get('https://portfolio-games-api.herokuapp.com/api/reviews').then((res) => {
        return res.data
    })
}

export const getReviewById = (review_id) => {
    return axios.get(`https://portfolio-games-api.herokuapp.com/api/reviews/${review_id}`).then((res) => {
        return res.data
    })
}

export const getReviewsByCategory = (category) => {
    return axios.get(`https://portfolio-games-api.herokuapp.com/api/reviews?category=${category}`).then((res) => {
        return res.data
    })
}

export const updateReviewById = (review_id, vote_change) => {
    return axios.patch(`https://portfolio-games-api.herokuapp.com/api/reviews/${review_id}`,{"inc_votes":vote_change}).then((res) => {
        return res.data
    })
}

export const getCommentsByReviewId = (review_id) => {
    return axios.get(`https://portfolio-games-api.herokuapp.com/api/reviews/${review_id}/comments`).then((res) => {
        return res.data
    })
}

export const postComment = (review_id, author, body) => {
    return axios.post(`https://portfolio-games-api.herokuapp.com/api/reviews/${review_id}/comments`,{"author": author, "body": body}).then((res) => {
        return res.data
    })
}