import InfoSection from '../components/InfoSection';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore'; // Make sure these are correctly imported
import { db } from '../utils/firebaseConfig'; // Ensure your Firebase config is correctly imported
import Hotels from './../components/Hotels';
import Itinerary from './../components/Itinerary';

const ViiewTrip = () => {
  const { tripID } = useParams();

  const [trip, setTrip] = useState(null); // Initialize with null

  const getTripData = async () => {
    if (!tripID) return; // Ensure tripID is available
    const docRef = doc(db, "AITrips", tripID);
    
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document:", docSnap.data());
        setTrip(docSnap.data()); // Set the trip data
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  // Move useEffect outside the function
  useEffect(() => {
    getTripData(); // Fetch trip data when tripID changes
  }, [tripID]);

  return (
    <div className='flex flex-col min-h-screen text-white'>
      <div className='flex-grow p-10 md:px-20 lg:px-44 xl:px-56 overflow-y-auto'>
        {/* Pass trip only if it's available */}
        {trip ? <InfoSection trip={trip} /> : <div>Loading trip details...</div>}
        <Hotels trip={trip} />
        <Itinerary trip={trip} />
      </div>
    </div>
  );
};

export default ViiewTrip;
