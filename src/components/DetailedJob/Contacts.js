import {MapTheme} from '../MapTheme';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import React from 'react';
import {ReactComponent as LocationIcon} from '../../svg/locationIcon.svg';

function Contacts ({location, name, address, email, phone}) {
    const ApiKey = 'AIzaSyAymk7LsK6SgX749eYe4PG4SSBzJwfsTdU';

    const containerStyle = {
        width: '100%',
        height: '220px'
      };
      
      
    const center = {
        lat: location?.lat,
        lng: location?.long
      };
    
      const defaultOptions = {
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        clickableIcons: false,
        keyboardShortcuts: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        fullscreenControl: false,
        maxZoom: 11,
        styles: MapTheme
      }

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: ApiKey
      })

    return <>

    <div className="w-full py-8 px-14 relative z-0
        before:content-['']
        before:block
        before:bg-[#202336]
        before:rounded-full
        before:w-64
        before:h-64
        before:absolute
        before:top-[-10px]
        before:left-[-30%]
        before:-z-10">
        <div>
            <div className='font-bold text-[#E7EAF0] text-xl'>Department name.</div>
            <div className='font-bold text-[#E7EAF0] text-xl'>{name}</div>
            <div className='flex'>
                <LocationIcon className='mr-2' />
                <div className='font-sans text-[#E8EBF3] text-[1.125rem]'>{address}</div>
            </div>
            <div className='font-sans text-[#E8EBF3] text-[1.125rem]'>{phone}</div>
            <div className='font-sans text-[#E8EBF3] text-[1.125rem]'>{email}</div>
        </div>
    </div>

    <div>
        {isLoaded ? (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                options={defaultOptions} >

                <Marker position={center} />

            </GoogleMap>
            ) : <></>
        }
    </div>

</>
}

export default Contacts;