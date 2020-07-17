import {
    TOGGLE_FAQ,    
} from './actionTypes'

export const toggle = (data, accName) => {
    return {
        type: TOGGLE_FAQ,  
        payload: data,
        accName: accName
    }
}


