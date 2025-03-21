import React, { useState } from 'react';

export default function BookingWidget({ place }) {

    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    // const [numberOfGuests, setNumberOfGuests] = useState(1);
    // const [fullName, setFullName] = useState('');
    // const [phone, setPhone] = useState('');
    
    return (
        <div className="bg-white shadow p-4 rounded-2xl">
            <div className="text-2xl text-center"></div>
            Price: ${place.price} / per night
            <div className="border rounded-2xl mt-4">
                <div className="flex">
                    <div className="py-3 px-4">
                        <label>Check in:</label>
                        <input type="date"
                            value={checkIn}
                            onChange={ev => setCheckIn(ev.target.value)} />
                    </div>
                    <div className="py-3 px-4 border-l">
                        <label>Check out:</label>
                        <input type="date"
                            value={checkOut}
                            onChange={ev => setCheckOut(ev.target.value)} />
                    </div>
                </div>
                {/* <div className="py-3 px-4 border-t">
                    <label>Number of guests:</label>
                    <input type="number"
                        value={numberOfGuests}
                        onChange={ev => setNumberOfGuests(ev.target.value)} />
                </div> */}

            </div>
            <button className="primary mt-4" onClick={() => window.location.href = "mailto:loangirlloanngirl@gmail.com"}>
                Email Host
            </button>
        </div>
    )
}

