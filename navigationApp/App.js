import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


function ScreenA({navigation}){
  const GoToPageB = () => {
    navigation.navigate('Screen_B')
  }


  return(
    <View style={styles.ContainerHomeScreen}>
      <Text style={styles.TextDecorationHomeScreen}>Screen A</Text>
      <Button 
        onPress={GoToPageB}
        title='go to page B'
      />
    </View>
  )
}

function ScreenB({navigation}){
  const GoToPageA = () => {
    navigation.navigate('Screen_A')
  }

  const GoToPageC = () => {
    navigation.navigate('Screen_C')
  }

  return(
    <View style={styles.ContainerHomeScreen}>
      <Text style={styles.TextDecorationScreenB}>Screen B</Text>
      <Button 
      title='Go To Page A'
      onPress={GoToPageA}
      />

      <Button 
      title='Go To Page C'
      onPress={GoToPageC}
      />
    </View>
  )
}

function ScreenC(){
  return(
    <View style={styles.ContainerHomeScreen}>
      <Text style={{color:'black' , fontSize:50}}>Screen C</Text>
      
    </View>
  )
}



export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Screen_A'
          component={ScreenA}
        />
        <Stack.Screen 
          name='Screen_B'
          component={ScreenB}
        />
        <Stack.Screen 
          name='Screen_C'
          component={ScreenC}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ContainerHomeScreen:{
    justifyContent:'center',alignItems:'center',flex:1,marginVertical:30,backgroundColor:'grey',marginHorizontal:35
  },
  TextDecorationHomeScreen:{
    textAlign:'center',textDecorationLine:'underline',fontFamily:'serif',fontSize:35 , margin:10
  },
  TextDecorationScreenB:{
    textAlign:'center',fontFamily:'serif',fontSize:15,color:'green',
    backgroundColor:'pink',margin:15
  },
  
});
