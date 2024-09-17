import React from 'react';
import PlacesCard from './PlacesCard';


const Itinerary = ({ trip }) => {
    // Log trip object to debug
    console.log(trip);

    // Check if itinerary exists
    const itinerary = trip?.tripInfo?.itinerary;

    const timeOfDayOrder = ['morning', 'afternoon', 'evening'];

    // Sort days in ascending order
    const sortedDays = itinerary ? 
        Object.entries(itinerary).sort(([dayA], [dayB]) => {
            // Extract numeric part from day strings, assuming format "Day X"
            const dayNumberA = parseInt(dayA.replace(/\D+/g, ''), 10);
            const dayNumberB = parseInt(dayB.replace(/\D+/g, ''), 10);
            return dayNumberA - dayNumberB;
        }) 
        : [];


    return (
        <>
            <h2 className='mt-6 font-bold text-lg'>Itinerary</h2>
            <div>
                {sortedDays.length > 0 ? (
                    sortedDays.map(([day, times], dayIndex) => (
                        <div key={dayIndex} className="mt-6">
                            {/* Day Header */}
                            <h2 className="font-bold text-xl">{day.toUpperCase()}</h2>
                            <div className='grid md:grid-cols-2 gap-5'>
                                {/* Sort times of the day */}
                                {Object.entries(times).sort(([timeOfDayA], [timeOfDayB]) => {
                                    return timeOfDayOrder.indexOf(timeOfDayA.toLowerCase()) - timeOfDayOrder.indexOf(timeOfDayB.toLowerCase());
                                }).map(([timeOfDay, details], timeIndex) => (
                                    <PlacesCard
                                        key={timeIndex}
                                        location={details?.location}
                                        details={details?.details}
                                        time={details?.time}
                                        ticketPricing={details?.ticket_pricing}
                                        travelTime={details?.travel_time}
                                    />
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No itinerary data available.</p>
                )}
            </div>
        </>
    );
};

export default Itinerary;
