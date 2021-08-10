export function Address(props) {
    let {street, suite, city, zipcode} = props;
    return (
        <div>
            <h3>address : </h3>
            <h3>street : {street}</h3>
            <h3>suite : {suite}</h3>
            <h3>city : {city}</h3>
            <h3>zipcode : {zipcode}</h3>
        </div>
    );
}