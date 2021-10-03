import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';

const Edit = (props) => {
    const {_id} = useParams();
    const history = useHistory();

    const [form, setForm] = useState({
        name: "",
        phrases: "",
        image: "",
        position: "",
        chests: ""
    })
    const [errors, setErrors] = useState({});

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.patch(`http://localhost:8000/api/pirates/${_id}/update`,form)
            .then(res=>{
                console.log(res.data);

                if(res.data.results){
                    history.push('/');
                }
                else{
                    setErrors(res.data.err.errors);
                }
            })
            .catch(err=>console.log(err))
    }

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pirates/" + _id)
            .then(res=>setForm(res.data.results))
            .catch(err=>console.log(err));
    },[_id])

    return(
        <div className="w-50 mx-auto p-3">
          <form onSubmit={onSubmitHandler}>
              <h1>Edit</h1>
                <div className="form-group">
                    <label>Pirate Name</label>
                    <input name="name" value={form.name}  placeholder="name" className="form-control" type="text" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.name && errors.name.message}</span>
                </div>

                <div className="form-group">
                    <label>Pirate Catch</label>
                <input name="phrases" placeholder="phrases" value={form.phrases} className="form-control" type="phrases" onChange={onChangeHandler}/>
                    <span className="alert-danger">{errors.phrases && errors.phrases.message}</span>
                </div>
                <div className="form-group">
                    <label>Image Url:</label>
                <input name="image" placeholder="image" value={form.image} className="form-control" type="text" onChange={onChangeHandler}/>
                    <span className="alert-danger">{errors.image && errors.image.message}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="position">Crew Position</label>
                    <select name="position"onChange={onChangeHandler}>
                        <option value="FirstMate">First Mate</option>
                        <option value="QuarterMaster">Quarter Master</option>
                    <span className="alert-danger">{errors.position && errors.position.message}</span>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="chests"># of Treasure Chests</label>
                    <select name="chests"onChange={onChangeHandler}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    <span className="alert-danger">{errors.chests && errors.chests.message}</span>
                    </select>
                    </div>

                <input type="submit" className="btn btn-primary" />
                <Link to={`/`} className="btn btn-lg btn-warning">Crew Board</Link>
            </form>
        </div>
    )
}

export default Edit;