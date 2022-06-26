import { CH_USERNAME } from '../actions/action-types/actions-types'

const initState = {
    username: null
}

const Reducer = (state = initState, action) => {
    
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

export default Reducer
