

import { useState } from 'react';

import Navbar from './component/Navbar'
import Register from './component/Register'
import "./App.css"
import Userdata from './component/UserData';

 
function App() {
  const [isLogin, setIslogin] = useState(false);
   const [userdata, setUserdata] = useState(
  {
    username: "",
    password: "",
    email: "",
    address:""
  }
  )


  return (
    <>
      <Navbar setIslogin={setIslogin} Islogin={isLogin} />
   
      {!isLogin ? (<Register setUserdata={setUserdata} userdata={userdata} setislogin={ setIslogin} /> ): <Userdata user={userdata} />}
      </>
  )
}

export default App
