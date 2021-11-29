
import {PELICULA_SELECCIONADA, ORDER} from '../types';

const initialState = {
    pelicula : '',
    pedido : ''

};

const datos_pelicula = (state = initialState, action) => {
    
    switch(action.type){
        //Ejemplo de añadido de datos
        case PELICULA_SELECCIONADA :
            return action.payload;

        case ORDER :
                return {
                ...state,
                pedido:action.payload
                };

        default :
            return state
    }
}
export default datos_pelicula;