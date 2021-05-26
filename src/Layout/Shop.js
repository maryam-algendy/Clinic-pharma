import React, {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';
import API from "../utilize/API";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
// style
import './style/Shop.scss';

// component
import PageHeader from "./component/PageHeader";

// block
import Medicine from "./component/Block/Medicine";

export default function Shop() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const [pharmacy, setPharmacy] = useState("");
    const [pagination, setPagination] = useState({page: 1, pages: 1});
    const [error, setError] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const [price, setPrice] = React.useState([0, 500]);
    const [value, setValue] = useState("");

    const changePage = ({selected}) => {
        setPageNumber(selected + 1);
        setLoading(true);
        setError("");
    }

    useEffect(() => {
        API(`medicines/?page=${pageNumber}`)
            .then(({data, status}) => {
                if (status === 200) {
                    setPagination({page: data?.page, pages: data?.pages, results: data?.results});
                    setProducts(data?.products);
                    setLoading(false);

                    if (data?.products?.length < 1) {
                        setError("There are no products found");
                    }
                } else {
                    setError(data.message);
                    setLoading(false);
                }
            })

        API("category")
            .then(({ data, status}) => {
                if (status === 200) {
                    setCategories(data?.categories);
                } else {
                    setError(data?.error);
                }
        })
    }, []);

    function filters() {
        setLoading(true);
        setError("");
        API(`medicines/find/?name=${value}&minPrice=${price[0]}&maxPrice=${price[1]}&category=${category}&pharmacy=${pharmacy}`, "POST")
            .then(({ data, status }) => {
                if (status === 200) {
                    setLoading(false);
                    setProducts(data?.product);
                } else {
                    setLoading(false);
                    setError(data?.message);
                }
        })
    }

    return (
        <div id="shop">
            <PageHeader title="Shop Your Medicines & Products" firstLocation="Shop Medicine"/>
            <div className="container pl-lg-0 pr-lg-0">
                {error ? <div className="alert-danger">{error}</div> : null}
                <div className="row" id="content">
                    <div className="col-12 col-md-9 col-lg-9 order-2 order-md-1">
                        <div className="row">
                            {!loading ? products?.length >= 1 ? products?.map((medicine, id) => {
                                return (
                                    <div key={id} className="col-12 col-md-4 col-lg-4">
                                        <Medicine medicine={id} image={medicine.thumbnail} alt={medicine.about} title={medicine.name} price={medicine.price} slug={medicine.slug} />
                                    </div>
                                );
                            }) : <div className="alert-danger">
                                There are no products found,
                                <button onClick={() => {
                                    setPrice([0, 500]);
                                    setValue("");
                                    setCategory("");
                                    filters();
                                }}>CLEAR FILTERS!</button>
                            </div> :
                            <div id="loading">
                                <div className="spinner-border text-primary m-auto" role="status">
                                    <span className="visually-hidden sr-only">Loading...</span>
                                </div>
                            </div>}
                        </div>
                    </div>

                    <div className="col-12 col-md-3 col-lg-3 order-1 order-md-2" id="shop-filters">
                        <div className="search">
                            <h3>Find by Name</h3>
                            <input value={value} onChange={(e) => {
                                setValue(e.target.value);
                                filters();
                            }} type="text" placeholder="Product Name ..."/>
                            <i className="flaticon-search"> </i>
                        </div>
                        <div className="search mt-5">
                            <h3>Find by Pharmacy</h3>
                            <input value={pharmacy} onChange={(e) => {
                                setPharmacy(e.target.value);
                                filters();
                            }} type="text" placeholder="Pharmacy Name ..."/>
                            <i className="flaticon-search"> </i>
                        </div>

                        <div className="categories">
                            <h3>Categories</h3>
                            <ul>
                                {categories?.map(category => {
                                    return <li key={category?._id}>
                                        <button onClick={() => {
                                            setCategory(category?.slug);
                                            filters();
                                        }}>
                                            <i className="fas fa-chevron-right"> </i>
                                            {category?.name}
                                        </button>
                                        {/*{category?.sub_categories && todo: loop through sub_categories, then put onClick here instead of parent category}*/}
                                    </li>
                                })}
                            </ul>
                        </div>

                        <div className="price-range">
                            <h3>Price</h3>
                            <Slider max={500} value={price} onChange={(e, newVal) => setPrice(newVal)} valueLabelDisplay="auto" aria-labelledby="range-slider" />
                            <div className="price-data">
                                <span>Price ${price[0]} - ${price[1]}</span>
                                <button onClick={() => filters()}>Filter</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pagination">
                    <ReactPaginate
                        activeClassName={'active'}
                        startPage={pagination.page || 1}
                        pagecount={pagination.pages || 1}
                        marginPagesDisplayed={pagination.pages || 1}
                        onPageChange={changePage}
                    />
                </div>
            </div>
        </div>
    );
}
