import React from 'react';
import { Text, View, Image} from 'react-native';
import styles from './styles'
import Icon from "react-native-vector-icons/AntDesign";
// import { NavigationContainer } from '@react-navigation/native';


function Welcome({navigation}) {
    return (
      <View>
        <View style={{ width: '80%'}}>
          <Text style={styles.title}>Transforme sua vida financeira</Text>
        </View>

        <View>
          <Image 
            source={ require('../../images/welcome.jpg') } 
              style={styles.logo}
          />
        </View>

        <View style={styles.button}>
          <Icon.Button
            name="right"
            backgroundColor="transparent"
            color="#139892"
            size={30}  
            alignContent="center"
            onPress={() => navigation.navigate('Login') }
          />
        </View>
      </View>
    );
  }

export default Welcome;