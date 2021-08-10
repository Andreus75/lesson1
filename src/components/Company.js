export function Company (props) {
    let {nameCompany, catchPhrase, bs} = props;
    return (
        <div>
            <h3>company : </h3>
            <h4>name : {nameCompany}</h4>
            <h4>catchPhrase : {catchPhrase}</h4>
            <h4>bs : {bs}</h4>
        </div>
    );
}