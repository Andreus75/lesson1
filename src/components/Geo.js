export function Geo (props) {
    let {lat, lng} = props;
    return (
        <div>
            <h4>Geo : </h4>
            <h4>lat : {lat}</h4>
            <h4>lng : {lng}</h4>
        </div>
    );
}