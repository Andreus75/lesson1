import {Geo} from "./Geo";
import "./address.css"

export function Address (props) {
    let {street, suite, city, zipcode, lat, lng} = props;
    return (
        <div>
            <h3>address : </h3>
            <div className={'address'}>
                <h4>street : {street}</h4>
                <h4>suite : {suite}</h4>
                <h4>city : {city}</h4>
                <h4>zipcode : {zipcode}</h4>
                <Geo lat={lat}
                     lng={lng}
                />
            </div>

        </div>
    );
}