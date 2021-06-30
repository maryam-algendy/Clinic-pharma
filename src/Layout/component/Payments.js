import React from 'react';

// style
import './style/Payments.scss';


export default function Payments()
{
    // const [payment, setPayment] = useState(payments);
    // const handleRemove = (id) => {
    //     const newPayment = payment.filter((itemId) => itemId.id !== id);
    //     setPayment(newPayment);
    // }
    // const payments = [
    //     {id: 1, image: "/visa.png", alter: "Visa", cardId: "**** **** **** 3675", expiration: "Expiration 08/21"},
    //     {id: 2, image: "/paypal.png", alter: "Paypal", cardId: "**** **** **** 4607", expiration: "Expiration 04/02"},
    //     {id: 3, image: "/mastercard.png", alter: "Mastercard", cardId: "**** **** **** 1953", expiration: "Expiration 05/14"},
    //     {id: 4, image: "/discover.png", alter: "Discover", cardId: "**** **** **** 7309", expiration: "Expiration 11/09"},
    //     {id: 5, image: "/express.png", alter: "Express", cardId: "**** **** **** 6821", expiration: "Expiration 06/25"}
    // ];

    return(
        <div id="payments">
            <div className="payments-header">
                <h5 className="title">There are no previous payment methods</h5>
                <div className="line"> </div>
            </div>
            {/*{payments.map((items, id) => {*/}
            {/*    return(*/}
            {/*        <div key={id}  className="content">*/}
            {/*            <img src={items.image} alt={items.alter}/>*/}
            {/*            <span className="card-number">{items.cardId}</span>*/}
            {/*            <span>{items.expiration}</span>*/}
            {/*            <i className="fas fa-trash-alt" onClick={handleRemove}> </i>*/}
            {/*        </div>*/}
            {/*    );*/}
            {/*})}*/}
        </div>
    );
}
