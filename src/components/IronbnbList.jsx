import { useState, useEffect } from "react";
import axios from "axios";

const apiURL = "https://ironbnb-m3.herokuapp.com/apartments";

function IronbnbList() {
  const [fetching, setFetching] = useState(true);
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    axios.get(apiURL).then((response) => {
      setApartments(response.data);
      setFetching(false);
    });
  }, []);
  
  // If the data is not ready only render the "Loading" message  
  if (fetching) {
    return (
      <div>
        <h3>List of apartments</h3>
        <p>Loading</p>
      </div>
    );
  }  

  return (
    <div>
      <h3>List of apartments</h3>

      {apartments.map((apt) => (
        <div key={apt._id} className="card">
          <img src={apt.img} alt="apartment" />
          <h3>{apt.title}</h3>
          <p>Price: {apt.pricePerDay}</p>
        </div>
      ))}
    </div>
  );
}

export default IronbnbList;
