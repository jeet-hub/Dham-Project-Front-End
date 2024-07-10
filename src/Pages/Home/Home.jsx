import React from 'react'
import '../../Styles/Homepage.css'
import SrarchAll from '../../Cards/SearchAll'
import HotelSearch from '../../Cards/HotelSearch'
import Searchbycity from '../../Cards/Searchbycity'
import LocationCard from '../LocationCard'
import FeatureHotels from './FeatureHotels'

const Home = () => {
  return (
    <>
   <div className="banner">
    <h1 className='dham_hero_title'>Where to go ?</h1>
    {/* <!-- Nav pills --> */}
  <ul className="nav nav-pills" role="tablist">
    <li className="nav-item">
      <a className="nav-link active" data-bs-toggle="pill" href="#home">Search All</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="pill" href="#menu1">Hotels</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="pill" href="#menu2">Search City</a>
    </li>
  </ul>

  {/* <!-- Tab panes --> */}
  <div className="tab-content">
    <div id="home" className="container tab-pane active"><br/>
    {/* <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Search All"/>
    <button class="btn btn-success" type="submit">Search</button> 
  </div> */}
  <SrarchAll/>

    </div>
    <div id="menu1" className="container tab-pane fade"><br/>
    <HotelSearch/>
    </div>
    <div id="menu2" className="container tab-pane fade"><br/>
      <Searchbycity/>
    </div>
  </div>
   </div>
   <div className="city-area">
     <LocationCard/>
   </div>
   <div className="about-area">
    <FeatureHotels/>
   </div>
    </>
  )
}

export default Home