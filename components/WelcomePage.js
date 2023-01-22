import { View, Text, StyleSheet, Button } from 'react-native';

export default function WelcomePage () {
      let hour= new Date().getHours()  

    var greeting = '';
    if (hour < 12) {
      greeting = 'Good Morning';
    } else if (hour < 18) {
      greeting = 'Good Afternoon';
    } else {
      greeting = 'Good Evening';
    }

    return ( 
      <View style={styles.container}>
        <View style={styles.containerText}>
        <Text style={styles.header}>Welcome to EyeDropAlarm</Text>
        <Text style={styles.greeting}>{greeting}</Text>
        <Text style={styles.paragraph}>EyeDropAlarm helps you schedule and adminster your eyedrop medications.</Text>
        <Text style={styles.paragraph}>Use the <Text style={styles.strong}>ADD DROP</Text> button to add drops to your schedule</Text>
        <Text style={styles.paragraph}><Text style={styles.em}>NOTE: </Text> Ensure to <Text style={styles.strong}>ALLOW</Text> notifications when prompted</Text>
        <Text style={styles.paragraph}>Use the <Text style={styles.strong}>HELP</Text> button for tips and tutorials</Text>
        </View>
        <View style={styles.help}>
          <Button title="HELP" color='blue' onPress={() => {}} />
          <Button title="ADD DROP" color="#000000" onPress={() => {}} />
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lavenderblush',
    //alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  containerText: {
    flex: 1,
    backgroundColor: '#cde38d',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  header: {
    fontFamily: 'Cambria',
    color: 'black',
    fontSize: 30,
    marginBottom: 10,
    textAlign: 'center'
  },
  greeting: {
    fontFamily: 'Cambria',
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
    justifyContent: 'space-between',
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
