import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuid } from "uuid";

function Create() {
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

    const handlesubmit = (event) => {
        event.preventDefault();
        values.autoid = uuid();
        values.createuser = 'system';
        values.createdate = new Date();
        axios.post('http://localhost:9000/tblequip1', values)
            .then(res => {
                console.log(res);
                navigate('/')
            })
            .catch(err => console.log(err));
    }
    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light'>
            <div className='w-50 rounded bg-white border shadow px-5 pt-3 pb-5'>
                <h1>Add a Equipment</h1>
                <form onSubmit={handlesubmit}>

                    <div className='mb-3'>
                        <label htmlFor="id">ID:</label>
                        <input type="text" name='id' className='form-control' placeholder='Enter Id'
                            onChange={e => setValues({ ...values, id: e.target.value })} />

                    </div>
                    <div className='mb-3'>
                        <label htmlFor="description">Description:</label>
                        <input type="text" name='description' className='form-control' placeholder='Enter Description'
                            onChange={e => setValues({ ...values, description: e.target.value })} />
                    </div>


                    <button className='btn btn-success'>create</button>
                    <Link to="/" className='btn btn-primary ms-3'>Reset</Link>
                </form>

            </div>

        </div>

    );
}
export default Create;