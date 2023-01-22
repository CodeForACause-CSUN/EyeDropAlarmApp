import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, Modal, Linking } from 'react-native';

export default function WelcomePage () {
  const [visibility, setVisibility] = useState(true);
      let hour= new Date().getHours()  

    let greeting = '';
    if (hour < 12) {
      greeting = 'Good Morning';
    } else if (hour < 18) {
      greeting = 'Good Afternoon';
    } else {
      greeting = 'Good Evening';
    }

    if (!visibility) {
      return null;
    }

    return ( 
      <Modal style={styles.container}>
        <View style={styles.containerText}>
          <View style={styles.topText}>
            <Text style={styles.header}>Welcome to EyeDropAlarm</Text>
            <Text style={styles.greeting}>{greeting}</Text>
            <Text style={styles.paragraph}>EyeDropAlarm helps you schedule and adminster your eyedrop medications.</Text>
            <Text style={styles.paragraph}>Press the <Text style={styles.strong}>CONTINUE</Text> button to begin adding drops to your schedule.</Text>
            <Text style={styles.paragraph}><Text style={styles.em}>NOTE: </Text> Ensure to <Text style={styles.strong}>ALLOW</Text> notifications when prompted</Text>
            <Text style={styles.paragraph}>Use the <Text style={styles.strong}>HELP</Text> button for tips and tutorials</Text>
          </View>
          <View style={styles.help}>
            <Button title="HELP" color='blue' onPress={() => {
              Linking.openURL('https://www.eyedropalarm.com/how-to-put-in-eyedrops.html');
            }} />
            <Button title="CONTINUE" color="#000000" onPress={() => {setVisibility(false)}} />
          </View>
        </View>
      </Modal>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
    //alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  containerText: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  topText: {
  },
  header: {
    color: 'black',
    fontSize: 30,
    marginBottom: 10,
    textAlign: 'center'
  },
  greeting: {
    color: 'black',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center'
  },
  paragraph: { //paragraph styling
    fontSize: 18,
    fontFamily: 'Courier New',
    color: 'black',
    textAlign: 'center',
    marginBottom: 10
  },
  strong: {
    fontWeight: 'bold'
  },
  em: {
    fontWeight: 'bold',
    color: 'black'
  },
  help:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  helpButton: {
    color: 'black',
  },
  adddrop:{
    textAlign: 'right',
    float: 'right',
    color: 'black',
    backgroundColor: 'lemonchiffon',
    width: '25%'
  }
});
