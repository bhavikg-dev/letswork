import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import VenueList from "../../components/VenueList";
import  getAllVenue  from "../../assets/data/dummy-data.json";
import * as VenueActions from "../../redux/actions/VenueActions";
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import "./Home.scss";

const VENUE =  getAllVenue.venue;

export default function Home(props) {
  const dispatch = useDispatch();
  const venueData = useSelector((state) => state.venueData);
  
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
 
  useEffect(() => {
    dispatch(VenueActions.addVenuesDetails(VENUE));
  }, [dispatch]);

  useEffect(() => {
    if((startDate && endDate) ) {
      const  start = moment(startDate);
      const end = moment(endDate);
      const firstDate  = moment(startDate).format('YYYY/MM/DD');
      const lastDate  = moment(endDate).format('YYYY/MM/DD');
      const duration = moment.duration(end.diff(start));
      const daysDiff = duration.asDays();
      const dateTimeInfo = { startDate: firstDate, endDate: lastDate, days:daysDiff };

      dispatch(VenueActions.setFunctionTimeAndDateInformaiton(dateTimeInfo));
    }
  }, [dispatch, startDate, endDate]);
   
  console.log(venueData);
  console.log("VenuData");

  const getVenueByType = type => {
    dispatch(VenueActions.setFilterType(type));
  }  

  return (
    <Fragment>
      <div className="filter">
        <ul className="filterType">
          <li onClick={() => getVenueByType('')} className={venueData.filterType === '' ? "active" : ""}><span>All</span></li>
          <li onClick={() => getVenueByType('meeting-rooms')} className={venueData.filterType === 'meeting-rooms' ? "active" : ""}><span>Meeting Rooms</span></li>
          <li onClick={() => getVenueByType('office')} className={venueData.filterType === 'office' ? "active" : ""}><span>Private Office</span></li>
          <li onClick={() => getVenueByType('creative')} className={venueData.filterType === 'creative'? "active" : ""}><span>Creative Spaces</span></li>
        </ul>
        <div className="dateRange">
        <DateRangePicker
            startDate={startDate} 
            startDateId="your_unique_start_date_id" 
            endDate={endDate} 
            endDateId="your_unique_end_date_id" 
            onDatesChange={({ startDate, endDate }) => {
             setStartDate(startDate);
             setEndDate(endDate);
            }} 
            focusedInput={focusedInput} 
            onFocusChange={focusedInput => setFocusedInput(focusedInput)} 
            displayFormat={() => "YYYY/MM/DD"}
          />          
        </div>
      </div>
      
      <VenueList 
        items={venueData.items} 
        filterBy={venueData.filterType} 
      />
    </Fragment>
  );
}
