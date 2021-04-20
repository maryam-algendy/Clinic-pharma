import API from "./utilize/API";

/** NOTE: use storage to cache data data that is difficult to change during the session -logically- (ex: cart, user-data, ...etc) **/
import storage from "./utilize/storage";

//
export function loadProducts()
{
    return function(dispatch)
    {
        API("medicine", "GET")
            .then(({ data, status }) => {
                if (status === 200) {
                    dispatch({type: "LOADING", payload: false});
                    dispatch({type: "CLINIC_PHARMA_SET_PRODUCTS", payload: data?.products});
                } else {
                    dispatch({type: "LOADING", payload: false});
                    dispatch({type: "BETA_ERROR", payload: data?.message});
                }
            })
    }
}
export function loadProduct()
{
    return function(dispatch)
    {
        API("medicine", "GET")
            .then(({ data, status }) => {
                if (status === 200) {
                    dispatch({type: "LOADING", payload: false});
                    dispatch({type: "CLINIC_PHARMA_SET_PRODUCT", payload: data?.product});
                } else {
                    dispatch({type: "LOADING", payload: false});
                    dispatch({type: "BETA_ERROR", payload: data?.message});
                }
            })
    }
}