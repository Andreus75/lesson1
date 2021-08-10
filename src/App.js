import './App.css';
import {User} from "./components/User";

function App() {
    return (
        <div className={'users'}>
            <div>
                <User id={1}
                      name={'Leanne Graham'}
                      username={'Bret'}
                      email={'Sincere@april.biz'}
                      street={'Kulas Light'}
                      suite={'Apt. 556'}
                      city={'Gwenborough'}
                      zipcode={'92998-3874'}
                      lat={'-37.3159'}
                      lng={'81.1496'}
                />
            </div>
            <div>
                <User id={2}
                      name={'Ervin Howell'}
                      username={'Antonette'}
                      email={'Shanna@melissa.tv'}
                      street={'Victor Plains'}
                      suite={'Suite 879'}
                      city={'Wisokyburgh'}
                      zipcode={'90566-7771'}
                      lat={'-43.9509'}
                      lng={'-34.4618'}
                />
            </div>
        </div>
    );
}

export default App;
