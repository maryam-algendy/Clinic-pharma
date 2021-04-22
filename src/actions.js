import API from "./utilize/API";

/** NOTE: use storage to cache data data that is difficult to change during the session -logically- (ex: cart, user-data, ...etc) **/

export function addToCart(data)
{
    return function(dispatch)
    {
        API("cart", "POST", data)
            .then(({ data, status }) => {
                if (status === 200) {
                    dispatch({type: "LOADING", payload: false});
                    dispatch({type: "CLINIC_PHARMA_SET_CART", payload: data?.cart});
                } else {
                    dispatch({type: "LOADING", payload: false});
                    dispatch({type: "BETA_ERROR", payload: data?.message});
                }
            })
    }
}

export function loadCart()
{
    return function(dispatch)
    {
        API("cart")
            .then(({ data, status }) => {
                if (status === 200) {
                    dispatch({type: "LOADING", payload: false});
                    dispatch({type: "CLINIC_PHARMA_SET_CART", payload: data?.cart[0]});
                } else {
                    dispatch({type: "LOADING", payload: false});
                    dispatch({type: "BETA_ERROR", payload: data?.message});
                }
            })
    }
}

