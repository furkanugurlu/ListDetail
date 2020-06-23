import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

function Button(props){
    return (
        <TouchableOpacity
            style={{ marginTop: 10, }}
            activeOpacity={0.7}
            onPress={props.onPress}
        >
            <View 
            style={[styles.container, props.containerStyle]}>
                {props.image ?
                    <Image
                        source={props.image}
                        style={[styles.Images, props.imageStyle]}
                    /> : null}
                <Text style={[styles.text, props.text]}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 343,
        height: 53,
        borderRadius: 28.5,
        marginHorizontal: 16,
    },
    text:{
        color: 'rgb(29, 29, 27)',
        fontSize: 15, 
        fontWeight: 'bold'
    },
    Images:{
        width: 22.5, 
        height: 22.5, 
        marginRight: 8.5, 
    }
})
export { Button };
