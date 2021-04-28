import API from "./utilize/API";

/** NOTE: use storage to cache data data that is difficult to change during the session -logically- (ex: cart, user-data, ...etc) **/

export function loadSlides() {
    return function (dispatch) {
        API("cms/slider")
            .then(({data, status}) => {
                if (status === 200) {
                    dispatch({type: "LOADING", payload: false});
                    dispatch({type: "CLINIC_PHARMA_SET_SLIDES", payload: data?.slides});
                } else {
                    dispatch({type: "LOADING", payload: false});
                    dispatch({type: "BETA_ERROR", payload: data?.message});
                }
            })
    }
}

export function loadBlogs() {
    return function (dispatch) {
        API("blog")
            .then(({data, status}) => {
                if (status === 200) {
                    dispatch({type: "LOADING", payload: false});
                    dispatch({type: "CLINIC_PHARMA_SET_BLOGS", payload: data?.blogs});
                } else {
                    dispatch({type: "LOADING", payload: false});
                    dispatch({type: "BETA_ERROR", payload: data?.message});
                }
            })
    }
}

export function loadTopDoctors() {
    return function (dispatch) {
        API("top-doctors")
            .then(({data, status}) => {
                if (status === 200) {
                    dispatch({type: "LOADING", payload: false});
                    dispatch({type: "CLINIC_PHARMA_SET_TOP_DOCTORS", payload: data?.doctors});
                } else {
                    dispatch({type: "LOADING", payload: false});
                    dispatch({type: "BETA_ERROR", payload: data?.message});
                }
            })
    }
}

export function addToCart(data) {
    return function (dispatch) {
        API("cart", "POST", data)
            .then(({data, status}) => {
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

export function loadCart() {
    return function (dispatch) {
        API("cart")
            .then(({data, status}) => {
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

export function fetchOrders() {
    return function (dispatch) {
        API("orders")
            .then(({data, status}) => {
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

export function fetchBlogCategory() {
    return function (dispatch) {
        API("blog/category")
            .then(({data, status}) => {
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

