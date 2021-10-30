import React , { useState } from 'react';
import Button from "../UI/Button";
import AddressIcon from '../icons/address-icon';
import BookVenue from "modals/Venue/BookVenue";
import { useSelector, useDispatch } from "react-redux";
import * as NavigationActions from "redux/actions/NavigationActions";
import * as VenueActions from "redux/actions/VenueActions";


import "./Venue.scss";
import { Fragment } from "react";


const EventItem = props => {
  const dispatch = useDispatch();
  const navigationData = useSelector((state) => state.navigationData);
  
    const { id, name, price, image, location } = props;

    const formattedAddress = location.replace(', ', "\n");

    const bookNowModal = (id) => {
        dispatch(VenueActions.setVenueId(id));
        dispatch(NavigationActions.setBookNowVenueModalStatus(true));
      }

    return(
        <Fragment>
            <li className="item">
                <img src={image} alt="image1"  />
                <div className="content">
                    <div className="summary">
                        <h3>{name}</h3>
                        <div className="address">
                            <AddressIcon />
                            <address>{formattedAddress}</address>
                        </div>
                        <div className="price" style={{marginLeft:"27px"}}>
                            <h5>Starting From</h5>
                            <h5>AED {price}</h5>
                        </div>                    
                    </div>
                    <div className="action">
                        <Button  className="button" onBtnClicked={() => bookNowModal(id)}>
                        <span>Book Now</span>                  
                        </Button>
                    </div>
                </div>
            </li>
            {navigationData.showCreateNewClientModal ? <BookVenue id={id} /> : null}
         </Fragment>
    )
}

export default EventItem;