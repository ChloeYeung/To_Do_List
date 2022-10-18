import axios from "axios"
const baseURL = `${process.env.REACT_APP_BACKEND}`
let globalAxioInstance;

const updateAxioInstance = (token) => {
  globalAxioInstance = axios.create({
    baseURL: baseURL,
    timeout: 3000,
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return globalAxioInstance
}

const getAxioInstance = () => {
  if (!globalAxioInstance) {
    // auto login when refresh whole website
    const token = localStorage.getItem('TOKEN')
    const newInstance = updateAxioInstance(token)
    globalAxioInstance = newInstance
  }
  return globalAxioInstance
}

export {
  updateAxioInstance,
  getAxioInstance
}