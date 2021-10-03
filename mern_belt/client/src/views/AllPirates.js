import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PirateCard from '../components/PirateCard';



const AllPirates = (props) => {
    const [pirates, setPirates] = useState([]);
    const [loaded, setLoaded] = useState(true);

    useEffect(() => {
        console.log("running use effect");
        console.log(loaded);
        axios.get("http://localhost:8000/api/pirates/all")
            .then(res => {
                setPirates(res.data.results);
            })
            .catch(err => console.log(err))
    }, [loaded])
    return (
        <div>
            <h1>Pirate Crew</h1>
                {
                    pirates.map((item, i) => {
                        return <PirateCard key={i} data={item} setLoaded={setLoaded} />
                    })
                }
        </div>
    )
}
export default AllPirates;