import Venue from '../Venue';
import "./Venulist.scss";

const VenueList = props => {
    const { items, filterBy } = props;
 
    let filteredVenue = items;
    if(filterBy) {
       filteredVenue = items.filter((venue) => {
            return venue.type === filterBy;
        });
    } 

    return (
        <ul className="list">
            {filteredVenue.map((venue) =>  {
                return (<Venue 
                    key={`venue-${venue.id}`}
                    id={venue.id}
                    name={venue.name}
                    price={venue.price}
                    image={venue.image}
                    location={venue.address}
                />)
            })}
        </ul>
    )
}

export default VenueList;   