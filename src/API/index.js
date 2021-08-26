import { API,} from "./API"
import { cardApi, userRoute } from "./route"

export const getCards = () =>{
    return API.get(cardApi)
}
export const postCard = (data) =>{
    return API.post(JSON.stringify(data), cardApi)
}
export const getCardId= (userId) =>{
    return API.getID(cardApi, userId)
}
export const patchCardId = (userId, data) =>{
    return API.patchID(cardApi,userId, data)

}
export const deleteCardId = (userId) =>{
    return API.deleteID(cardApi, userId)
} 
export const getUserCards = () =>{
    return API.getUser(userRoute)
}