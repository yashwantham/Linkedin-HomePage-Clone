import React from 'react';
// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
// import { login, logout, selectUser } from './features/userSlice';
// import Login from './Login';
// import { auth } from './firebase';
// import { useDispatch } from 'react-redux';

function App() {
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   auth.onAuthStateChanged(userAuth => {
  //     if (userAuth) {
  //       // user is logged in
  //       dispatch(
  //         login({
  //           email: userAuth.email,
  //           uid: userAuth.uid,
  //           displayName: userAuth.displayName,
  //           photoUrl: userAuth.photoURL,
  //         })
  //       )
  //     } else {
  //       // user is logged out
  //       dispatch(logout())
  //     }
  //   });
  // }, []);

  return (
    <div className="app">
      <Header/>

      <div className="app__body">
      <Sidebar />
      <Feed />
      <Widget />
      </div>
    </div>
  );
}

export default App;
