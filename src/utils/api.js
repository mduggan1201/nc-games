import axios from 'axios'

const gamesAPI = axios.create({
    baseURL: "https://portfolio-games-api.herokuapp.com/api"
})

export const getCategories = () => {
    return gamesAPI.get('/categories').then((res) => {
        return res.data
    })
}

export const getReviews = (sortedBy, orderedBy) => {
    return gamesAPI.get('/reviews',
    {params: {
        sort_by: sortedBy,
        order: orderedBy
    }
}).then((res) => {
        return res.data
    })
}

export const getReviewById = (review_id) => {
    return gamesAPI.get(`/reviews/${review_id}`).then((res) => {
        return res.data
    })
}

export const getReviewsByCategory = (category, sortedBy, orderedBy) => {
    return gamesAPI.get(`/reviews`,
    {params: {
        category: category,
        sort_by: sortedBy,
        order: orderedBy
    }
}).then((res) => {
        return res.data
    })
}

export const updateReviewById = (review_id, vote_change) => {
    return gamesAPI.patch(`/reviews/${review_id}`,{"inc_votes":vote_change}).then((res) => {
        return res.data
    })
}

export const getCommentsByReviewId = (review_id) => {
    return gamesAPI.get(`/reviews/${review_id}/comments`).then((res) => {
        return res.data
    })
}

export const postComment = (review_id, author, body) => {
    return gamesAPI.post(`/reviews/${review_id}/comments`,{"author": author, "body": body}).then((res) => {
        return res.data
    })
}