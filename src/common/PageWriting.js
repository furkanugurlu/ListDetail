import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

function PageWriting(props) {
    return (
        <View>
            {props.processing 
                ?
            <View style={styles.container1}>
                <Image source={require('../images/product.png')} style={styles.image} />
                <View style={styles.colum}>
                    <Text style={styles.title1}>
                        Payment in Process
                        </Text>
                    <View style={styles.contain1}>
                        <Text style={styles.text1}>
                            Congratulations, mission accomplished!
                            As soon as the items are received, your payment will be done within 3 days.
                        </Text>
                    </View>
                </View>
            </View>
                :

                <View style={props.container}>
                    <Text style={styles.title}>
                        {props.title}
                    </Text>
                    <View style={styles.contain}>
                        <Text style={styles.text}>
                            {props.text}
                        </Text>
                    </View>
                </View>}
        </View>

    );
}
const styles = StyleSheet.create({
    title: {
        color: 'rgb(27, 27, 27)',
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 18,
        marginTop: 26,
        marginBottom: 14,
    },
    contain: {
        paddingLeft: 17.5,
        width: 350
    },
    text: {
        fontSize: 12,
        color: 'rgb(27, 27, 27)',
        lineHeight: 17,
        letterSpacing: 0
    },
    container1:{
        borderWidth: 1, 
        backgroundColor:'rgb(255, 252, 240)',
        borderRadius: 2.5, 
        flexDirection: 'row', 
        marginTop: 10, 
        borderColor: 'rgb(255, 204, 84)', 
        marginHorizontal: 10, 
    },
    image:{
        width: 90, 
        height: 89, 
        alignSelf: 'center', 
        marginLeft: 17.5, 
        marginTop: 23.5, 
        marginBottom: 30 
    },
    colum:{
        flexDirection: 'column', 
        marginTop: 15.5, 
        marginBottom: 22 
    },
    title1:{
        color: 'rgb(27, 27, 27)', 
        fontSize: 18, 
        fontWeight: '700', 
        marginLeft: 21, 
    },
    contain1:{
        width:230,
        paddingTop:13.5,
        paddingLeft:21,
    },
    text1:{
        fontSize: 12,
        color: 'rgb(27, 27, 27)', 
        lineHeight: 16.5,
        letterSpacing: 0,
    }
});
export { PageWriting };
