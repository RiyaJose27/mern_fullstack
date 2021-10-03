import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const PirateCard = (props) => {
    const {name, phrases, image, position, chests} = props.data;

    const onDeleteHandler =(_id) => {
        console.log(_id);
        
        axios.delete(`http://localhost:8000/api/pirates/${_id}/delete`)
        .then(res=>{
            console.log(res);
            props.setLoaded(prevState=>!prevState);
        })
        .catch(err => console.log(err));
    }



    return (
        <div className="pirateCard">
            
            
            <p>{name}</p>
            <p><Link to={`/pirates/${props.data._id}`} className="btn btn-lg btn-primary">View Pirate</Link></p>
            {/* <p>{phrases}</p>
            <p>{image}</p>
            <p>{position}</p>
            <p>{chests}</p> */}
            <button className="btn btn-lg btn-danger" onClick={()=>onDeleteHandler(props.data._id)}>Walk the Plank</button>
        </div>

    )

}


export default PirateCard;