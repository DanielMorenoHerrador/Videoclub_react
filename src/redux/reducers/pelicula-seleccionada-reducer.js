
import {PELICULA_SELECCIONADA} from '../types';

const initialState = {
    pelicula : ''

};

const datos_pelicula = (state = initialState, action) => {
    
    switch(action.type){
        //Ejemplo de añadido de datos
        case PELICULA_SELECCIONADA :
            return action.payload;

        default :
            return state
    }
}
export default datos_pelicula;