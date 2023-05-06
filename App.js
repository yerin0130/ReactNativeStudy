import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text, Button, Alert} from 'react-native';
//import {singIn, singUp} from './lib/auth';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return <Text>Home</Text>
}

function SearchScreen() {
  return <Text>Search</Text>
}

function NotificationScreen() {
  return <Text>Notification</Text>
}

function MessageScreen() {
  return <Text>Message</Text>
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Message" component={MessageScreen} />
      </Tab.Navigator>
        {/* <Drawer.Screen
          name="Signupin"
          component={SignInScreen}
          options={({title: '회원가입/로그인'})}
        /> */}
    </NavigationContainer>
  );
}

// function SignInScreen(){
//   const [from,setForm] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const signUpSubmit = async () =>{
//     const {email, password}=form;
//     const info ={email,password};
//     try{
//       const {user}=await singUp(info);
//       console.log(user);
//     }
//     catch(e){
//       Alert.alert("회원가입 실패..");
//     }
//   }

//   const signInSubmit = async () => {
//     const {email,password}=form;
//     const info = {email,password};
//     try{
//       const {user} = await singIn(infor);
//       console.log(user);
//     }
//     catch(e){
//       Alert.alert("로그인 실패..");
//     }
//   }

//   return (
//     <View>
//       <Text>SignIn</Text>
//       <Button title="" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

export default App;
