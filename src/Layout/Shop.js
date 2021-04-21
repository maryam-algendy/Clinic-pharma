import React, {useEffect, useState} from 'react';
import Pagination from 'react-bootstrap/Pagination';
// import {loadProducts} from "../actions";
// style
import './style/Shop.scss';

// component
import PageHeader from "./component/PageHeader";

// block
import Medicine from "./component/Block/Medicine";
import API from "../utilize/API";

export default function Shop()
{
    const [products, setProducts]=useState([]);
    const [pagination, setPagination]=useState({page: 1, pages: 1});
    const [error, setError] = useState();
    useEffect(()=>{
        API("medicine")
            .then(({data, status})=>{
                if (status===200){
                    setPagination({ page: data?.page, pages: data?.pages, results: data?.results });
                    setProducts(data?.products);
                }
                else {
                    setError(data.message);
                }
        })

    },[]);

    return(
        <div id="shop">
            <PageHeader title="Shop Your Medicines & Products" firstLocation="Shop Medicine" />
            <div className="container">
                {error ? <div className="alert-danger">{error}</div> : null}
                <div className="row">
                    {products?.map((medicine, id) => {
                        return (
                            <div key={id} className="col-12 col-md-4 col-lg-3">
                                <Medicine medicine={id} image={medicine.thumbnail} alt={medicine.about} title={medicine.name} price={medicine.price} slug={medicine.slug} />
                            </div>
                        );
                    })}
                </div>
                <div className="pagination">
                    <Pagination>
                        <Pagination.Item>{"Previous"}</Pagination.Item>
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{"Next"}</Pagination.Item>
                    </Pagination>
                </div>
            </div>
        </div>
    );
}