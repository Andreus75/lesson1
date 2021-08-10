import "./Address"
import {Address} from "./Address";
export function User(props) {
    let {id, name, username, email, street, suite, city, zipcode} = props;
    return (
      <div>
          <h3>{id}</h3>
          <h3>name : {name}</h3>
          <h3>username : {username}</h3>
          <h3>email : {email}</h3>
          <Address street={street}
                   suite={suite}
                   city={city}
                   zipcode={zipcode}/>
          />
      </div>
    );
}