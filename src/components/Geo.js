import "./geo.css"

export function Geo (props) {
    let {lat, lng} = props;
    return (
        <div>
            <h3>Geo : </h3>
            <div className={'geo'}>
                <h4>lat : {lat}</h4>
                <h4>lng : {lng}</h4>
            </div>

        </div>
    );
}