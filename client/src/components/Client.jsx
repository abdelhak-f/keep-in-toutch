import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Tables() {
    const [clients, setClient] = useState([{
        fname: '',
        lname: '',
        email: '',
        phone: '',
        message: '',
    }])

    useEffect(() => {
        fetch("/getClient").then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setClient(jsonRes));
    },[])
    return<div className="wrapper ">
    <div className="container mt-3">
    <h1> All Clients</h1>
        <table className="table table-striped table-dark">
            <thead className="thead-dark">
                <tr>
                    <td>FirstName</td>
                    <td>LastName</td>
                    <td>Email</td>
                    <td>Phone</td>
                    <td>Message</td>
                </tr>
            </thead>
            <tbody>
            {clients.map(client => 
             <tr>
             <td>
                 {client.fname}
             </td>
             <td>
                 {client.lname}
             </td>
             <td>
             {client.email}
             </td>
             <td>
             {client.phone}
             </td>
             <td>
                 {client.message}
             </td>
             <button><Link className="" to={`/sendmail/${client._id}`} >send mail</Link></button>
             </tr>
                )} 
            </tbody>
        </table>
    </div>
</div>
}

export default Tables