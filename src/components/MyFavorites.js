import {ReactComponent as FavIcon} from '../svg/favIcon.svg';
import { useState, useEffect } from "react";

function MyFavorites ({id}) {
    const [myFavs, setMyFavs] = useState([]);
    const [change, setChange] = useState(false);
    
    useEffect(() => {
        setMyFavs(JSON.parse(localStorage.getItem('favs')) || []);
    },[change]);

    function handleFavs () {
        if(!myFavs.includes(id)) {
            localStorage.setItem('favs', JSON.stringify([...myFavs, id]));
        }
        else {
            const newFavs = myFavs?.filter(el => el !== id);
            localStorage.setItem('favs', JSON.stringify(newFavs));
        }
        setChange(!change);
    }

    return <FavIcon
                className={`${myFavs?.includes(id) ? 'fill-[#70778B] hover:fill-[#fff]' : 'fill-[#fff] hover:fill-[#70778B]'}
                    cursor-pointer`}
                onClick={handleFavs} />
}

export default MyFavorites;