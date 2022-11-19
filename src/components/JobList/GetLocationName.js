import { useEffect, useState } from 'react';
import axios from 'axios';
import {ReactComponent as LocationIcon} from '../../svg/locationIcon.svg';

function GetLocationName ({location}) {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');

    const ApiKey = 'AIzaSyAymk7LsK6SgX749eYe4PG4SSBzJwfsTdU';

    useEffect(() => {
        async function getLocation () {
            const res = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+location.lat+','+location.long+'&language=en&key='+ApiKey);
            setCountry(res.data.results[0]?.address_components[4]?.long_name);
            setCity(res.data.results[0]?.address_components[3]?.long_name);
        }
        getLocation();
      },[]);
      
    return <>
        <div className='flex font-normal text-base text-textColorSub'>
            <LocationIcon className='mr-2' />
            <div>
                {country?.length && city?.length ? city + ', ' + country : 'Unknown location'}
            </div>
        </div>
    </>
}

export default GetLocationName;