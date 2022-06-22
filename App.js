import { useEffect, useState } from "react";
import "./App.css";
import { auth } from "./FireBaseAuthentication/FireBase";
import Home from "./FireBaseAuthentication/Home";
import UserAuth from "./FireBaseAuthentication/UserAuth";
// import ImageGallery from "./Components/ImageGallery";
// import Todoapp from "./Components/Todoapp";
// import Weather1 from "./WeatherApp/Weather1";
// import MillonandBillion from "./MillonandBillion";
// import Navigation from "./Navigate/Navigation";
// import MuiLoader from "./LoaderPoc/Muiloader";
// import FoodRecipee from "./FoodRecipee/FoodRecipee";

function App() {
  const [presentUser, setPresentUser] = useState(null);
  useEffect(() => {
      auth.onAuthStateChanged(user => {
        if(user){
          setPresentUser({
            uid : user.uid,
            email : user.email
          })
        }
        else{
          setPresentUser(null)
        }
        
      })
  },[])
  return (
    <div className="App">
      {/* <ImageGallery/> */}
      {/* <Todoapp/> */}
      {/* <Weather1/> */}
      {/* <MillonandBillion /> */}
      {/* <Navigation/> */}
      {/* <MuiLoader flag={false}/> */}
      {/* <FoodRecipee/> */}
      {
        presentUser ? <Home presentUser={presentUser}/> : <UserAuth/>
      }
      
    </div>
  );
}

export default App;
