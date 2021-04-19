import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

// style
import './style/Shop.scss';

// component
import PageHeader from "./component/PageHeader";

// block
import Medicine from "./component/Block/Medicine";

export default function Shop()
{
    const shop = [
        {image: "./shop1.png", alter: "Medical Bottle", title: "Medical Bottle", price: "$60.00"},
        {image: "./shop2.png", alter: "Medical Bottle", title: "Medical Bottle", price: "$60.00"},
        {image: "./shop3.png", alter: "Medical Bottle", title: "Medical Bottle", price: "$60.00"},
        {image: "./shop4.png", alter: "Medical Bottle", title: "Medical Bottle", price: "$60.00"},
        {image: "./shop1.png", alter: "Medical Bottle", title: "Medical Bottle", price: "$60.00"},
        {image: "./shop2.png", alter: "Medical Bottle", title: "Medical Bottle", price: "$60.00"},
        {image: "./shop3.png", alter: "Medical Bottle", title: "Medical Bottle", price: "$60.00"},
        {image: "./shop4.png", alter: "Medical Bottle", title: "Medical Bottle", price: "$60.00"},
        {image: "./shop1.png", alter: "Medical Bottle", title: "Medical Bottle", price: "$60.00"},
        {image: "./shop2.png", alter: "Medical Bottle", title: "Medical Bottle", price: "$60.00"},
        {image: "./shop3.png", alter: "Medical Bottle", title: "Medical Bottle", price: "$60.00"},
        {image: "./shop4.png", alter: "Medical Bottle", title: "Medical Bottle", price: "$60.00"}
    ]

    return(
        <div id="shop">
            <PageHeader title="Shop Your Medicines & Products" firstLocation="Shop Medicine" />
            <div className="container">
                <div className="row">
                    {shop?.map((medicine, i) => {
                        return (
                            <div key={i} className="col-12 col-md-4 col-lg-3">
                                <Medicine medicine={i + 1} image={medicine.image} alt={medicine.alter} title={medicine.title} price={medicine.price} />
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