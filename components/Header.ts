import React, { Component } from 'react'
import {
   Dimensions,
   StyleSheet,
   Text,
   View,
 } from 'react-native'


 const Header = (props) => {
    
    return (
    <View style={styles.header}>
        <Text style={styles.title}>
            tic-tac-toe
        </Text>
    </View>
    )
}
  

const width = Dimensions.get('window').width
const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: 'black',
    flexDirection: 'row',
    marginTop: 0,
    paddingTop: 30,
    justifyContent: 'center',
    width: width
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
    fontSize: 36
  }
})


export default Header;