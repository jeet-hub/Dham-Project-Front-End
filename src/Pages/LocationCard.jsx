import React from 'react';
import '../Styles/LocationCard.css';

const LocationCard = () => {
    // Define an array of locations with their details
    const locations = [
        { imageSrc: "./assets/Images/map.png", name: "Kolkatta" },
        { imageSrc: "./assets/Images/mumbai.png", name: "Mumbai" },
        { imageSrc: "./assets/Images/delhi.png", name: "Delhi" },
        { imageSrc: "./assets/Images/kolkatta.png", name: "Vanarasi" },
        { imageSrc: "./assets/Images/kolkatta.png", name: "Ayodya" },
        { imageSrc: "./assets/Images/uttarakhand.png", name: "Uttrakhnad" },
        { imageSrc: "./assets/Images/himachal.png", name: "Rishikesh" },
        { imageSrc: "./assets/Images/gujrat.png", name: "Haridwar" },
        { imageSrc: "./assets/Images/kolkatta.png", name: "Nainital" },
        { imageSrc: "./assets/Images/kolkatta.png", name: "Vaishno Devi" }
    ];

    return (
        <div className="container">
            <div className="location-main-box row">
                {/* Map through the locations array to render each location */}
                {locations.map((location, index) => (
                    <div key={index} className="col">
                        <div className="location-box">
                            <img className="location-card" src={location.imageSrc} alt="city-img" />
                            <p>{location.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LocationCard;
