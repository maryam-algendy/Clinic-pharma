const initialState = {
    loading: false,
    error: null,
    ready: false,
    user: null,
    products: [],
    cart: {},
    orders:[],
    categories:[],
    slides: [],
    blogs: [],
    top_doctors: []
};

export default function reducer(state = initialState, action)
{
    switch (action.type)
    {
        case "CLINIC_PHARMA_SET_LOADING":
            return {...state, ready: true, loading: action.payload};

        case "CLINIC_PHARMA_SET_SLIDES":
            return {...state, ready: true, slides: action.payload};

        case "CLINIC_PHARMA_SET_USER":
            return {...state, ready: true, user: action.payload};

        case "CLINIC_PHARMA_SET_READY":
            return {...state, ready: action.payload, error: null};

        case "CLINIC_PHARMA_SET_PRODUCTS":
            return {...state, products: action.payload, error: null};

        case "CLINIC_PHARMA_SET_CART":
            return {...state, cart: action.payload, error: null};

        case "CLINIC_PHARMA_SET_ORDERS":
            return {...state, orders: action.payload, error: null};

        case "CLINIC_PHARMA_SET_BLOGS":
            return {...state, blogs: action.payload, error: null};

        case "CLINIC_PHARMA_SET_TOP_DOCTORS":
            return {...state, top_doctors: action.payload, error: null};

        case "CLINIC_PHARMA_FETCH_BLOG_CATEGORY":
            return {...state, categories: action.payload, error: null};

        case "BETA_ERROR":
            return {...state, error: action.payload};

        default:
            return state
    }
}