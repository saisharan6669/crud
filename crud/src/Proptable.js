import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuid } from "uuid";

function Proptable() {
    const [values, setValues] = useState({
        autoid: '',
        id: '',
        description: '',
        value: '',
        uom: '',
        tblequipautoid: '',
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

        axios.post('http://localhost:9000/tblequipprop', values)
            .then(res => {
                console.log(res);
                navigate('/')
            })
            .catch(err => console.log(err));
    }
    const handleUpdate = (event) => {
        event.preventDefault();

        values.modifyuser = 'system1';
        values.modifydate = new Date();


        axios.put('http://localhost:9000/tblequipprop/')
            .then(res => {
                console.log(res);
                navigate('/')
            })
            .catch(err => console.log(err));
    }
    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light'>
            <div className='w-50 rounded bg-white border shadow px-5 pt-3 pb-5'>
                <h1>Add a Property Equip</h1>
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
                    <div className='mb-3'>
                        <label htmlFor="value">VALUE:</label>
                        <input type="text" name='value' className='form-control' placeholder='Enter VALUE'
                            onChange={e => setValues({ ...values, value: e.target.value })} />

                    </div>
                    <div className='mb-3'>
                        <label htmlFor="id">UOM:</label>
                        <input type="text" name='uom' className='form-control' placeholder='Enter UOM'
                            onChange={e => setValues({ ...values, uom: e.target.value })} />

                    </div>

                    <button className='btn btn-success'>create</button>
                    <Link to="/" className='btn btn-primary ms-3'>Reset</Link>
                </form>

            </div>

        </div>

    );
}
export default Proptable;