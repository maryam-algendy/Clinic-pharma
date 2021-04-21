import React, {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';
// style
import './style/Shop.scss';

// component
import PageHeader from "./component/PageHeader";

// block
import Medicine from "./component/Block/Medicine";
import API from "../utilize/API";

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [pagination, setPagination] = useState({page: 1, pages: 1});
    const [error, setError] = useState();
    const [pageNumber, setPageNumber] = useState(1);


    const changePage = ({selected}) => {
        setPageNumber(selected + 1);
    }

    useEffect(() => {
        API(`medicine/?page=${pageNumber}`)
            .then(({data, status}) => {
                if (status === 200) {
                    setPagination({page: data?.page, pages: data?.pages, results: data?.results});
                    setProducts(data?.products);
                } else {
                    setError(data.message);
                }
            })
    }, [pageNumber]);


    return (
        <div id="shop">
            <PageHeader title="Shop Your Medicines & Products" firstLocation="Shop Medicine"/>
            <div className="container">
                {error ? <div className="alert-danger">{error}</div> : null}
                <div className="row">
                    {products?.map((medicine, id) => {
                        return (
                            <div key={id} className="col-12 col-md-4 col-lg-3">
                                <Medicine medicine={id} image={medicine.thumbnail} alt={medicine.about}
                                          title={medicine.name} price={medicine.price} slug={medicine.slug}/>
                            </div>
                        );
                    })}
                </div>
                <div className="pagination">
                    <ReactPaginate
                        activeClassName={'active'}
                        startPage={pagination.page}
                        pagecount={1}
                        marginPagesDisplayed={1}
                        onPageChange={changePage}
                    />
                </div>
            </div>
        </div>
    );
}