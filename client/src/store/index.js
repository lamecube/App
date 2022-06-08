import {combineReducers} from 'redux';
import {authReducer} from './api/api.romanjordan.com/authReducer';
import {usersReducer} from './api/api.romanjordan.com/reduceUsers';
import {nasaReducer} from './api/nasa.com/reducers';
import {navDrawer} from './NavDrawer/reducers';
import {modal} from './modal/reducers';


export default combineReducers({
  nav: navDrawer,
  auth: authReducer,
  users: usersReducer,
  nasa: nasaReducer,
  modal: modal,
});
