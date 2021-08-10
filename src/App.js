import './App.css';
import {User} from "./components/User";

function App() {
    return (
        <div className={'users'}>
            <User id={1}
                  name={'Leanne Graham'}
                  username={'Bret'}
                  email={'Sincere@april.biz'}
                  street={'Kulas Light'}
                  suite={'Apt. 556'}
                  city={'Gwenborough'}
                  zipcode={'92998-3874'}
            />
            <User id={2}
                  name={'Ervin Howell'}
                  username={'Antonette'}
                  email={'Shanna@melissa.tv'}
                  street={'Victor Plains'}
                  suite={'Suite 879'}
                  city={'Wisokyburgh'}
                  zipcode={'90566-7771'}
            />

        </div>
    );
}

export default App;
