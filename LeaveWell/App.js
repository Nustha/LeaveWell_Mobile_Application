import React, { useState, useEffect} from "react";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import SplashScreen from "./Components/SplashScreen";
import Home from "./Components/Home";
import ApplyForm from "./Components/ApplyForm";
import HomeScreen from "./Components/HomeScreen";
import Calender from "./Components/Calendar";
import Apply from "./Components/Apply"
// import { Calendar } from "react-native-calendario";
// import Calendar from "./Components/Calendar";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Alert } from "react-native";
import { getFirestore } from "firebase/firestore";
import ViewDetail from "./Components/ViewDetail";
// import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Stack = createStackNavigator();

function App() {
  const [appReady, setAppReady] = useState(false);
  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAppReady(true);
    }, 5000);
  }, []);
  
  const db = getFirestore(); 
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const users = user.uid;
      Alert.alert("Login Success")
      // ...
    } else {
      // User is signed out
      // ...
 
    }
  });

  return(
    //  appReady ? (
    //   <NavigationContainer>
    //     <Stack.Navigator screenOptions={{ headerShown: false }}>
    //       {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
    //       <Stack.Screen name="Login" component={Login} />
    //       <Stack.Screen name="SignUp" component={SignUp} />
    //       <Stack.Screen name="Home" component={Home}/>
    //       <Stack.Screen name="ApplyForm" component={ApplyForm} />
    //       <Stack.Screen name="HomeScreen" component={HomeScreen} />
    //       {/* <Stack.Screen name="Calendar" component={Calendar} /> */}
    //     </Stack.Navigator>
    //   </NavigationContainer>
//  // ) : <SplashScreen /> 
// user ?(
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="SplashScreen" component={SplashScreen} />
//         <Stack.Screen name="SignUp" component={SignUp} />
//         <Stack.Screen name='Home' component={Home} />
//         <Stack.Screen name="ApplyForm" component={ApplyForm} />
//         <Stack.Screen name="HomeScreen" component={HomeScreen} />
//         {/* <Stack.Screen name="Calendar1" component={Calendar1} /> */}
//       </Stack.Navigator>
//       </NavigationContainer>) : (
//         <NavigationContainer>
//           <Stack.Navigator screenOptions={{ headerShown: false }}>
//             <Stack.Screen name="Login" component={Login} />
//           </Stack.Navigator>
//         </NavigationContainer>
//       )
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? 'Home' : 'Login'}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name="ApplyForm" component={ApplyForm} />
        <Stack.Screen name="Calender" component={Calender} />
        <Stack.Screen name="ViewDetail" component={ViewDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}


export default App;
