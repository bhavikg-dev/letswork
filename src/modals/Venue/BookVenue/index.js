import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as NavigationActions from "redux/actions/NavigationActions";
import * as VenueActions from "redux/actions/VenueActions";
import  getAllVenue  from "assets/data/dummy-data.json";
import AddressIcon from 'components/icons/address-icon';
import DateIcon from "components/icons/date-icon";

import "./BookVenue.scss";

const VENUE =  getAllVenue.venue;
export default function BookVenue(props) {

    const dispatch = useDispatch();
    const navigationData = useSelector((state) => state.navigationData);

    const venueData = useSelector((state) => state.venueData);
  
    useEffect(() => {
      dispatch(VenueActions.addVenuesDetails(VENUE));
    }, [dispatch]);
    
    const filteredVenue = venueData.items.find((venue) => {
        return +venue.id === +venueData.venueId;
    });

 
    console.log(filteredVenue);
    console.log(props.id);
    const formattedAddress = filteredVenue.address.replace(', ', "\n");

    const firstDate = venueData.days.startDate;
    const lastDate = venueData.days.endDate;
    const numberOfDays = venueData.days.days;
    let totalAmount = filteredVenue.price;
    if(numberOfDays > 0) {
        totalAmount = filteredVenue.price * numberOfDays;
    }


    const onCloseNewClient = () => {
        dispatch(NavigationActions.setBookNowVenueModalStatus(false));
    }

  return (<div className={`modal fade ${!navigationData.showCreateNewClientModal ? "close hide none" : "in show block"}`} id="addClientModal" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Venue Details</h4>
                        <button type="button" className="close" onClick={() => onCloseNewClient()}>&times;</button>
                    </div>
                    <div className="modal-body">
                        <div className="venueDetails">
                            <div className="venueImage">
                                <img src={filteredVenue.image} alt="image1" />
                            </div>
                            <div className="venueInfo">
                                <h3>{filteredVenue.name}</h3>
                                <div className="address">
                                    <AddressIcon />
                                    <span>{formattedAddress}</span>
                                </div>
                                <div className="dateTime">
                                    <DateIcon />
                                    <span className="date">From Date : {firstDate}</span>
                                   {/*  <span>Time : 12:00 PM </span> */}
                                </div>
                                <div className="dateTime">
                                    <DateIcon />
                                    <span className="date">To Date : {lastDate}</span>
                                  {/*   <span>Time : 17:00 PM </span> */}
                                </div>
                                {numberOfDays && numberOfDays !== 0 &&
                                    <div className="person">
                                        <span>Book for the {numberOfDays} days</span>
                                    </div>
                                }

                                <div className="price">
                                    <h5>Price : $ {totalAmount} </h5>
                                </div>
                            </div>   
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={() => onCloseNewClient()}>Confirm</button>
                        <button type="button" className="btn btn-danger" onClick={() => onCloseNewClient()}>Close</button>
                    </div>
                </div>
            </div>
        </div>);
}
