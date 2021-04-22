import React from 'react';

// style
import './style/Appointment.scss';
import {Table} from "react-bootstrap";

export default function Appointment()
{
    return(
        <div id="appointment">
            <div className="table">
                <Table>
                    <thead>
                    <tr>
                        <th>Appointment</th>
                        <th>Doctor</th>
                        <th>Date/Time</th>
                        <th>Department</th>
                        <th>Type</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Zinia Zara</td>
                        <td>Jan. 7. 2021 - 05:00PM</td>
                        <td>Cardiology</td>
                        <td>Online</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Rihana Roy</td>
                        <td>Feb. 18. 2021 - 06:00PM</td>
                        <td>Dental Consult</td>
                        <td>Online</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Nadim Kamal</td>
                        <td>Jun. 1. 2021 - 07:00PM</td>
                        <td>Lense Expert</td>
                        <td>Online</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Steven Jobs</td>
                        <td>Aug. 11. 2021 - 08:00PM</td>
                        <td>Orthopaedics</td>
                        <td>Online</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Jason Roy</td>
                        <td>Dec. 14. 2021 - 09:00PM</td>
                        <td>Gynaecology</td>
                        <td>Online</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}