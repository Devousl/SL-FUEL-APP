import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, Image} from 'react-native';


function firstpage ({navigation}) {

return (
<View >
<Text style={styles.login}>---SL GAS APP---</Text>
<Image style = {styles.Img} source={{source = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAA'}}/>
<Button color="purple" title = " USER LOGIN"
onPress = {() => navigation.navigate('DASHBOARD')} />
<Button color="purple" title = "REGISTRATION"
onPress = {() => navigation.navigate('REGISTRATION')} />
<Button color="purple" title = "FORGOT PASSWORD"
onPress = {() => navigation.navigate('FORGOTPASSWORD')} />
</View>
)
}

function Second () {
return (
<View style={styles.Details}>
<Button color="blue" title = "LP GAS"
onPress = {() => navigation.navigate('GAS')} />
<Button color="blue" title = "LIVE QUEUNE MAP"
onPress = {() => navigation.navigate('MAP')} />
<Button color="blue" title = "NOTIFICATIONS"
onPress = {() => navigation.navigate('NOTIFICATIONS')} />
</View>
)
}
function Screentwo () {
return (
<View style={styles.Details}>
<Text>Reset Succesful</Text>
</View>
)
}

function Screenone () {
return (
<View style={styles.Details}>
<Text>You are Registered !</Text>
</View>
)
}

const Stack = createNativeStackNavigator();

export default function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName='Home'>
<Stack.Screen name= "SLgasApp" component = {firstpage} />
<Stack.Screen name= "DASHBOARD" component = {Second} />
<Stack.Screen name= "REGISTRATION" component = {Screenone} />
<Stack.Screen name= "FORGOTPASSWORD" component = {Screentwo} />
</Stack.Navigator>
</NavigationContainer>
);
}

const styles = StyleSheet.create({
login:{
flex: 1,
textAlign: 'center',
justifyContent: 'center',
fontSize:50,
},
Details:{
flex: 1,
alignItems: 'center',
justifyContent: 'center',

},
Img: {
width: 250,
height: 220,
alignSelf:'center',
},

});