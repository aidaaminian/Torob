import { CH_USERNAME } from './action-types/recent-actions'

export const changeUsername = (id) =>{
    return{
        type: CH_USERNAME,
        id : id
    }
}
