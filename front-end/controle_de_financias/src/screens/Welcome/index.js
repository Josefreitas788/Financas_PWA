import React from 'react';
import { Text, View, Image, Button} from 'react-native';
import styles from './styles'
import Icon from "react-native-vector-icons/AntDesign";

export default function Welcome() {
    return (
      <View>
        {/* style={styles.container} */}
        <View style={{ width: '80%'}}>
        <Text style={styles.title}>Transforme sua vida financeira </Text>
        </View>
        <Image 
          source={
            require('../../images/welcome.jpg')
             /*uri: '../..images/welcome.jpg',*/
          } 
            // style={{ width: 200, height: 200 }}
            style={styles.logo}
        />
        <View style={styles.button}>
        <Icon.Button
          name="right"
          backgroundColor="transparent"
          color="#139892"
          size={30}  
          alignContent="center"
          // justifyContent = "flex-start"
        // onPress={() => Alert.alert('Simple Button pressed')}
        />
        </View>
      </View>
    );
  }