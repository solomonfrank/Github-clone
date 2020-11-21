import axios from 'axios'

export const getRepos  = (username) => {
    return axios.get(`https://api.github.com/users/${username}/repos`)
}

export const getBio  = (username) => {
    return axios.get(`https://api.github.com/users/${username}`)
}