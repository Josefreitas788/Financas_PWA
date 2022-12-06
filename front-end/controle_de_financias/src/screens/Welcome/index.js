import React from 'react';
import { Text, View, Image, Button} from 'react-native';
import styles from './styles'
import Icon from "react-native-vector-icons/AntDesign";

export default function Welcome() {
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
          // onPress={() => {alert('Simple Button pressed') navigation.navigate('Editar') }}
          />
        </View>
      </View>
    );
  }