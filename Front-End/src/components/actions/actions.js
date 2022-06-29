import { CH_USERNAME } from './action-types/actions-types'

export const changeUsername = (id) => {
    return{
        type: CH_USERNAME,
        id 
    }
}
