import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Header(props) {
    return (
        <View style={styles.container} >
          <StatusBar barStyle="dark-content" />
            <TouchableOpacity onPress={props.onPress}>
                <View style={styles.cardimage}>
                    <Image resizeMode="contain"
                        style={styles.images}
                        source={require('./images/right.png')}
                    />
                </View>
            </TouchableOpacity>
             <Text style={[styles.text, {
                marginLeft: props.col3 ? 20: 20
             }]}>{props.headerText}</Text>
            {
            (props.col3 == true)
                ?
                    <View style={styles.card}>
                        <Image source={require('../src/images/support.png')} /> 
                    </View>
                :
                    <Text style={styles.card}>{''}</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 88,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card:{
        width:40,
        marginTop: 48.5,
        marginBottom: 15.5,
    },
    cardimage: {
        marginTop: 48.5,
        marginBottom: 15.5,
        width: 22.5,
        height: 22.5,
        marginLeft: 14
    },
    text: {
        marginTop: 48.5,
        marginBottom: 15.5,
        fontSize: 20,
        fontWeight: '500',
    },
    images: {
        width: 25,
        height: 25,
    }
})
export default Header;