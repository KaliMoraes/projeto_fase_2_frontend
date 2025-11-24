import axios from 'axios'
const api = axios.create({ baseURL: 'http://localhost:5000' })

export const getSeries = () => api.get('/series').then(r=>r.data)
export const getSerie = (id) => api.get(`/series/${id}`).then(r=>r.data)
export const createSerie = (payload) => api.post('/series', payload).then(r=>r.data)
export const updateSerie = (payload) => api.put('/series', payload).then(r=>r.data)
export const deleteSerie = (id) => api.delete(`/series/${id}`).then(r=>r.data)
