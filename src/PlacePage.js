import React from 'react';
import { useParams } from 'react-router-dom';
import BookingWidget from "./BookingWidget";
import PlaceGallery from "./PlaceGallery";
import AddressLink from "./Addresslink";
import placeData from './place.json';

const PlacePage = () => {
  const { id } = useParams();
  const place = placeData.places.find(p => p.id === id);
  
  if (!place) {
    return <div>Property not found.</div>;
  }

  return (
    <div className="mt-4 bg-gray-100 -mx-8 px-16 pt-8">
      <h1 className="text-2xl">{place.title}</h1>
      <AddressLink>{place.address}</AddressLink>
      <PlaceGallery place={place} />
      <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="my-4">
            {place.intro}
          </div>
          <div className="my-4">
            <h2 className="font-semibold text-2xl">Description</h2>
            {place.description}<br /><br />
            {place.descriptionBottom}
          </div>
          <div className="my-4">
            <h2 className="font-semibold text-2xl">Type</h2>
            {place.type}
            Bedroom(s): {place.bedrooms} <br />
            Bathrooms: {place.bathrooms}
          </div>
          <div className="my-4">
            <h2 className="font-semibold text-2xl">Amenities</h2>
            {place.amenities}
          </div>
          <br />
          <div className="my-4">
            <h2 className="font-semibold text-2xl">Hosts</h2>
            Host: {place.host?.firstName || 'N/A'} <br />
            Guidelines for Checking Availability, Contacting the Host, and Making Reservations:<br />
            Availability Check:<br />
            To inquire about available dates, please consult our calendar. You can access it on our website by clicking the 'Availability Calendar' link.
            <br />
            Contact Information:<br />
            We value your inquiries and are here to assist you. Feel free to reach out to us:
            <br />
            Text Phone: 213-332-6061
            <br />
            Email the Host:<br />
            To contact us directly or make a reservation inquiry, click the 'Email Host' button below or send an email to the provided address. We'll respond promptly to assist with your booking and any questions you may have."
          </div>
        </div>
        <div>
          <BookingWidget place={place} />
        </div>
      </div>
      <div className="bg-white -mx-8 px-8 py-8 border-t">
        <div>
          <h2 className="font-semibold text-2xl">Extra information</h2>
        </div>
        <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">
          <h2 className="font-semibold text-2xl">Local Attractions</h2>
          Mention nearby attractions, activities, and points of interest. Are there hiking trails, ski resorts, or charming towns to explore? Highlight any unique experiences that guests can enjoy during their stay.

          <h2 className="font-semibold text-2xl">Scenic Views</h2>
          Breathtaking views or natural beauty surrounding the cabin. Is it nestled among towering pine trees, overlooking the mountains.
        </div>
      </div>
    </div>
  );
};

export default PlacePage;