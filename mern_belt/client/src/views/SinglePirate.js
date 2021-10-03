import React, { useEffect, useState } from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import PirateCard from '../components/PirateCard';

const SinglePirate = (props) => {
    const {_id} = useParams();
    const [pirate, setPirate] = useState({});

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pirates/" + _id)
            .then(res=>setPirate(res.data.results))
            .catch(err=>console.log(err));
    },[_id])

    return(
        <div className="d-flex justify-content-center mt-5">
            <div>
            {pirate.name}<br/>
            {pirate.phrases}<br/>
            {pirate.image}<br/>
            {pirate.position}<br />
            {pirate.chests}<br />
                <Link to={`/pirates/${_id}/edit`} className="btn btn-lg btn-warning">Edit</Link>
            </div>
        </div>
    )
}

export default SinglePirate;
