export const contadorInicial = { contador: 0 };
const contadorReducer = (state = contadorInicial, action) => {
    switch (action.type) {
      case 'INCREMENTAR':
        return { contador: state.contador + 1 };
      case 'DISMINUIR':
        return { contador: state.contador - 1 };
      default:
        return state;
    }
  };
  
  export default contadorReducer;
  