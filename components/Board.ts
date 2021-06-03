import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableWithoutFeedback, AppRegistry, StyleSheet, Text, View } from 'react-native';
import O from './O'
import X from './X'

class Board extends React.Component{

    boardClickHandler = (e) => {
        alert(e);
    }

    render(){
        // const { text } = this.state;
        return (       
        <TouchableWithoutFeedback onPress={e => this.boardClickHandler(e)}>
            <View style={styles.board}>
                <View style={styles.line}></View>
                <View style={[styles.line, {
                    transform: [
                        {translateX: 200}
                    ]                
                }]} />
                <View style={[styles.line, {
                    height: 3,
                    width: 306,                 
                    transform: [
                        {translateY: 100}
                    ]                
                }]} />
                <O color='red'/>
                <View style={[styles.line, {
                    height: 3,
                    width: 306,                 
                    transform: [
                        {translateY: 200}
                    ]                
                }]} />
                
                <X color='blue'/>
            </View>      
        </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    board: {
        borderWidth: 3,
        height: 312,
        width: 312,    
    },
    line: {
        backgroundColor: '#000', 
        height: 306,
        width: 3, 
        position: 'absolute', 
        transform: [
            {translateX: 100}
        ]
    }
});

export default Board;