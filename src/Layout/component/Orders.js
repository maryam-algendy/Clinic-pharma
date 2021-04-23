import React, {useEffect, useState} from 'react';

// style
import './style/Appointment.scss';
import {Table} from "react-bootstrap";
import API from "../../utilize/API";

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        API("orders", "GET")
            .then(({data, status}) => {
                if (status === 200) {
                    setOrders(data?.orders);
                    setLoading(false);
                    if (data?.orders?.length < 1) {
                        setError("There are no orders found");
                    }
                } else {
                    setError(data.message);
                    setLoading(false);
                }
            })
    }, []);

    return (
        <div id="orders">
            <div className="table">
                <Table>
                    <thead>
                    <tr>
                        <th>Order</th>
                        <th>Products</th>
                        <th>Price</th>
                        <th>Currency</th>
                        <th>Delivery Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        orders.map((order, id) => {
                            return (
                                <tr key={id}>
                                    <td>{id + 1}</td>
                                    <td>{order.medicine.name}</td>
                                    <td>{order.price}</td>
                                    <td>{order.currency}</td>
                                    <td>{order.deliveryStatus}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </Table>
            </div>
        </div>
    );
}