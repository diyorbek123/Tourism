import { uz } from '../../const/uz'
import { en } from '../../const/en'

const initial = en;

export const languageReducer = (state = initial, action) =>{
    switch(action.type){
        case 'en':
            return en;
        case 'uz':
            return uz;
        default:
            return state;
    }
}