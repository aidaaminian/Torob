import { CH_USERNAME } from '../actions/action-types/actions-types'

const initState = {
    username: null,
    items: []
}

const Reducer = (state = initState, action) => {
    
    if(action.type === CH_USERNAME){
        return{
            ...state,
            username: action.id
        }        
    }
    else{
        return state
    }
}

export default Reducer
