import "./Address"
import {Address} from "./Address";

export function User(props) {
    let {id, name, username, email, street, suite, city, zipcode, lat, lng} = props;
    return (
      <div className={'user'}>
          <h3>{id}</h3>
          <h3>name : {name}</h3>
          <h3>username : {username}</h3>
          <h3>email : {email}</h3>
          <Address street={street}
                   suite={suite}
                   city={city}
                   zipcode={zipcode}
                   lat={lat}
                   lng={lng}
          />
      </div>
    );
}