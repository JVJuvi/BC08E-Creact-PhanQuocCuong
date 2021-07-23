const stateBurger = {
    burger: {salad: 1, cheese: 1, beef: 1},
    menu: {salad: 10, cheese: 10, beef: 10},
    total: 30
}
export const BurgerReducer = (state = stateBurger, action) => {
    switch(action.type){
        case 'TĂNG_GIAM': {
            let burgerCapNhat = {...state.burger};
            let {name, tangGiam} = action;
            if(tangGiam === -1 && state.burger[name] < 1){
                return {...state}
            }
            burgerCapNhat[name] += tangGiam;           
            state.burger = burgerCapNhat;
            return{...state};
        }
    }
    return {...state};
}