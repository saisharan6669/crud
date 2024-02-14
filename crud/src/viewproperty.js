import axios from "axios";
import React, { useEffect, useState } from "react";
import dateFormat from "dateformat";
import { Link, useNavigate } from "react-router-dom";
function Property() {
    const [data, setData] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:9000/tblequipprop')
            .then(res => setData(res.data))
            .catch(err => console.log(err));

    }, [])

    const handleDelete = (id) => {
        const confirm = window.confirm("would you like to Delete");
        if (confirm) {
            axios.delete('http://localhost:9000/tblequipprop/' + id)
                .then(res => {
                    window.location.reload();
                }).catch(err => console.log(err));
        }
    }


    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
            <h1>View Property-Equip </h1>
            <div className='w-75 rounded bg-white border shadow p-4'>
                <div className='d-flex justify-content-end'>
                    <Link to="/proptable" className='btn btn-success'>Add</Link>
                </div>
                <table className='table table-stripted'>
                    <thead>
                        <tr>
                            <th>Autoid</th>
                            <th>ID</th>
                            <th>Description</th>
                            <th>VALUE</th>
                            <th>UOM</th>
                            <th>tblequip-Autoid</th>
                            <th>createuser</th>
                            <th>createdate</th>
                            <th>Modify date</th>
                            <th>Modify user</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d, i) => (
                                <tr key={i}>
                                    <td>{d.autoid}</td>
                                    <td>{d.id}</td>
                                    <td>{d.description}</td>
                                    <td>{d.value}</td>
                                    <td>{d.uom}</td>
                                    <td>{d.tblequipautoid}</td>
                                    <td>{d.createuser}</td>
                                    <td>{d.createdate}</td>
                                    <td>{dateFormat(d.modifydate, "dd-mm-yyyy")}</td>
                                    <td>{d.modifyuser}</td>
                                    <td>

                                        <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                                        <button onClick={e => handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
        </div>

    );
}

export default Property;