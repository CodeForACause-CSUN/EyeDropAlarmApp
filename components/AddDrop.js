import React, {Component} from 'react';
import {Text, View, StyleSheet, Modal, TextInput,Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const AddDrop = (props) =>{
    return(
        <Text>Hello</Text>
    )
}
const styles = StyleSheet.create({
    title:{
        fontSize: 60,
        color: 'white',
      },
      titleContainer:{
        backgroundColor: '#2d2e30',
        flex: 0.75,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 20,
        paddingTop: 40
      },
      container: {
        flex: 1,
        backgroundColor: '#45494f',
      },
      categories: {
        padding: 10,
      },
      item: {
        marginBottom: 10,
        marginHorizontal: 10,
        marginTop: 10,
        fontSize: 20,
        color: 'white',
      },
      fStyle:{
        flex: 1,
        marginBottom: 40,
      },
      recTran:{
        color: 'white',
        fontSize: 25
      },
      topGroup:{
        borderColor: 'black',
        borderTopWidth: 0.7,
        paddingBottom: 10,
      },
      tranGroup:{
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      modalView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalViewable:{
        borderRadius: 10,
        width: '100%',
        height: '50%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#2d2e30',
      },
      modalTitle:{
        fontSize: 30,
        color: 'white',
      },
      modalText:{
        color: 'white',
      },
      input:{
        borderWidth: 1,
        borderColor: '#777',
        color: 'white',
        padding: 8,
        margin: 10,
        width: 200,
      }
})

export default AddDrop;