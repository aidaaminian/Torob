import { CH_USERNAME } from '../actions/action-types/recent-actions'

const initState = {
    username: null
}

const recentReducer = (state = initState, action) => {
    
    if(action.type === CH_USERNAME){
        console.log(action)
        return{
            ...state,
            username: action.id
        }        
    }
    else{
        return state
    }
}

export default recentReducer
