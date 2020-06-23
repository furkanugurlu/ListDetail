import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';


function LinerGreadientScreen(props){
    return(
        <LinearGradient
        style={styles.linerStyle}
        colors={props.colors}
        start={props.start}
        >
        <View style={{ flex: 1 }}>
            <View style={[styles.buttonCard, props.buttonCard]}>
                    <Text style={[styles.text, props.text]}>{props.title}</Text>
            </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Image source={require('../images/combinedShapeCopy.png')} style={styles.img} />
            <Text style={{ fontSize: 12, color: 'rgb(255, 255,255)', marginRight: 15, }}>YOUR SUMMARY</Text>
        </View>
    </LinearGradient>
    );
}

const styles = StyleSheet.create({
    buttonCard: {
        backgroundColor: '#000',
        borderRadius: 4.1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent:'center',
        height: 26,
        backgroundColor: 'rgba(52, 52, 52, 0.1)',
        marginLeft: 12,
    },
    text: {
        fontSize: 13,
        color: 'white',
        fontWeight: 'bold',
        lineHeight: 18,
    },
    linerStyle:{
        height: 40, 
        flexDirection: 'row', 
        alignItems: 'center'
    },
    img:{
        width: 17, 
        marginRight: 6, 
        marginLeft: 50
    }
});
export  {LinerGreadientScreen};
