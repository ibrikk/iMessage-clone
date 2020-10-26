import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { selectUser, login, logout } from './features/userSlice';
import { auth } from './firebase.utils';
import Imessage from './Imessage.component';
import Login from './Login.component';

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, []); 


  return (
    <div className="app">
      { user ? <Imessage /> : <Login />}
    </div>
  );
}

export default App;
