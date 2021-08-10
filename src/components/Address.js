import {Geo} from "./Geo";

export function Address(props) {
    let {street, suite, city, zipcode, lat, lng} = props;
    return (
        <div>
            <h3>address : </h3>
            <h3>street : {street}</h3>
            <h3>suite : {suite}</h3>
            <h3>city : {city}</h3>
            <h3>zipcode : {zipcode}</h3>
            <Geo lat={lat}
                 lng={lng}
            />
        </div>
    );
}