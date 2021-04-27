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
                    window.location.href = "/cart";
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

export function fetchOrders()
{
    return function(dispatch)
    {
        API("orders")
            .then(({ data, status }) => {
                if (status === 200) {
                    dispatch({type: "LOADING", payload: false});
                    dispatch({type: "CLINIC_PHARMA_SET_ORDERS", payload: data?.orders});

                } else {
                    dispatch({type: "LOADING", payload: false});
                    dispatch({type: "BETA_ERROR", payload: data?.message});
                }
            })
    }
}
export function addToBlogs(data)
{
    return function(dispatch)
    {
        API("blogs", "POST", data)
            .then(({ data, status }) => {
                if (status === 200) {
                    dispatch({type: "LOADING", payload: false});
                    dispatch({type: "CLINIC_PHARMA_SET_BLOGS", payload: data?.blogs});
                    window.location.href = "/new-blog";
                    console.log(data)
                } else {
                    dispatch({type: "LOADING", payload: false});
                    dispatch({type: "BETA_ERROR", payload: data?.message});
                }
            })
    }
}
export function fetchBlogCategory()
{
    return function(dispatch)
    {
        API("blog/category")
            .then(({ data, status }) => {
                if (status === 200) {
                    dispatch({type: "LOADING", payload: false});
                    dispatch({type: "CLINIC_PHARMA_FETCH_BLOG_CATEGORY", payload: data?.categories});

                } else {
                    dispatch({type: "LOADING", payload: false});
                    dispatch({type: "BETA_ERROR", payload: data?.message});
                }
            })
    }
}

