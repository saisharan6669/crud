import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
function Update() {
    const [data, setData] = useState([])
    const { id } = useParams();
    const [values, setValues] = useState({
        autoid: '',
        id: '',
        description: '',
        createuser: '',
        createdate: '',
        modifyuser: '',
        modifydate: ''
    })
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:9000/tblequip1/' + id)
            .then(res => {
                setValues(res.data);
            })
            .catch(err => console.log(err));
    }, [])
    const handleUpdate = (event) => {
        event.preventDefault();

        values.modifyuser = 'system';
        values.modifydate = new Date();


        axios.put('http://localhost:9000/tblequip1/' + id, values)
            .then(res => {
                console.log(res);
                navigate('/')
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light'>
            <div className='w-75 rounded bg-white border shadow px-5 pb-5'>
                <h1>Update a Equipment</h1>
                <form onSubmit={handleUpdate}>

                    <div className='mb-3'>
                        <label htmlFor="id">ID:</label>
                        <input type="text" name='id' className='form-control' placeholder='Enter Id'
                            value={values.id} onChange={e => setValues({ ...values, id: e.target.value })} />

                    </div>
                    <div className='mb-3'>
                        <label htmlFor="description">Description:</label>
                        <input type="text" name='description' className='form-control' placeholder='Enter Description'
                            value={values.description} onChange={e => setValues({ ...values, description: e.target.value })} />
                    </div>


                    <button className='btn btn-success'>Update</button>
                    <Link to="/" className='btn btn-primary ms-3'>Back</Link>
                </form>

            </div>

        </div>

    );
}

export default Update;