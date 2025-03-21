import React from 'react';
import { Link } from 'react-router-dom';
import placeData from './place.json';

export default function PropertiesList() {
    return (
        <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {placeData.places.map(place => (
                <Link to={place.listingUrl} key={place.id}>
                    <div className="bg-gray-500 mb-2 rounded-2xl flex">
                        {place.photos?.[0] && (
                            <img 
                                className="rounded-2xl aspect-square object-cover" 
                                src={`${process.env.PUBLIC_URL}${place.photos[0]}`} 
                                alt={place.title || "Property"} 
                            />
                        )}
                    </div>
                    <h2 className="font-bold">{place.name}</h2>
                    <h3 className="text-sm text-gray-500">{place.address}</h3>
                </Link>
            ))}
        </div>
    );
}