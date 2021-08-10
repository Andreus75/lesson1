import "./simpson.css"
export function Simpson(props) {
    let {name, surname, age, info, photo} = props;
    return (
            <div className={'simpson'}>
                <img src={photo} alt=""/>
                <p3>{name} {surname} - {age} years</p3>
                <h4>{info}</h4>
            </div>
        )
}