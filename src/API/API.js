export const baseURL = 'https://carshering-b163e-default-rtdb.asia-southeast1.firebasedatabase.app'


 
export const API = {
    get: (url, urlCard) =>{
        return fetch(`${baseURL}/${url}.json`,{
            method: 'GET'
        })
    },
    post: (data, url) =>{
        return fetch(`${baseURL}/${url}.json`,{
            method: 'POST',
            body: data
        })
    },
    getID: (url, urlID) =>{
        return fetch(`${baseURL}/${url}/${urlID}.json`, {
            method: 'GET'
        })
    },
    putID: (data,url, urlID) =>{
        return fetch(`${baseURL}/${url}/${urlID}.json`, {
            method: 'PUT',
            body:  data
        })
    },
    patchID: (url, urlID, data) =>{
        return fetch(`${baseURL}/${url}/${urlID}.json`, {
            method: 'PATCH',
            body: JSON.stringify(data)
        })
    },
    deleteID: (url, urlID) =>{
        return fetch(`${baseURL}/${url}/${urlID}.json`,{
            method: 'DELETE'
        })
    },
    getUser : (url) =>{
        return fetch(`${baseURL}/users.json`)
    }
}