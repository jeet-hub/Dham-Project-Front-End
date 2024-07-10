import React from 'react'
import { MdLiving, MdWifi, MdAccessTimeFilled } from "react-icons/md";
import { RiSofaFill } from "react-icons/ri";



const FeatureHotels = () => {
  return (
    <>
     <div className="container">
        <div className="main-box row">
            <div className="col-box col-sm-6">
                <div className="featurehotelimg">
                        <img src="./assets/Images/Feature.png" alt="" />
                </div>
            </div>
            <div className=" feature-main col-box col-sm-6">
                <div className="featuehoteldisc">
                        <h2>Which destination do you aspire to go to?</h2>
                        <br/>
                        <p>Are you planning to go to Ayodhya, best hotels in Dunga for you.</p>
                </div>
            </div>
        </div>
        <div className="row pt-5  gap-2">
            <div className="why-us-header">
            <h2>Begin your Sacred Journey with Dham Service</h2>
            <p>Why book Dham?</p>
            </div>
            <div className="col">
                <div className="why-us-section card">
                    <h2><MdLiving/></h2>
                    <h4>Flexible Living</h4>
                    <p>Stay as Long as you need with month-to-
                    month contracts</p>
                </div>
            </div>
            <div className="col">
                <div className="why-us-section card">
                    <h2><RiSofaFill/></h2>
                    <h4>Move-in ready</h4>
                    <p>Ready to move in with everything you need</p>
                </div>
            </div>
            <div className="col">
                <div className="why-us-section card">
                <h2><MdWifi/></h2>
                    <h4>High-speed Wi-Fi</h4>
                    <p>Best in class internet speeds suitable for working from home</p>
                </div>
            </div>
            <div className="col">
                <div className="why-us-section card">
                <h2><MdAccessTimeFilled/></h2>
                    <h4>24/7 support</h4>
                    <p>On hand team for any issues you have</p>
                </div>
            </div>
        </div>
     </div>
     <div className="hotels-button">
     <h1 className='dham_hero_title'>Best Offer For You <br/>
     Explore Rooms & Destinations
     </h1>
     <button className='booking-btn'>Start Booking</button>

     </div>
    </>
  )
}

export default FeatureHotels
