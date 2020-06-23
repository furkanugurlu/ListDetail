import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const DetailTop = (props) => {
    return (
        <View >
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../images/USA.jpg')} style={styles.images} />
                    <Text style={styles.textBold}>USA</Text>
                </View>

                <View >
                    <View style={{ marginLeft: 50, flexDirection: 'row' }}>
                        <Image source={require('../images/TR.jpg')} style={styles.images} />
                        <Text style={styles.textBold}>Turkey</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 25, }}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.textLight}>Receive Range</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.textLight }>Flight Date</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 15, }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <View style={[styles.card, props.card]}>
                        <Text style={[styles.colorText, props.colorText]} >20 Nov - 22 Nov 2020</Text>
                    </View>
                </View>
                <Text style={[styles.negatif, props.sour]}>-</Text>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <View style={[styles.card, props.card]}>
                        <Text style={[styles.colorText, props.colorText]} >04 Dec 2020</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 25,
        flexDirection: 'row'
    },
    images: {
        width: 65,
        height: 40,
        borderRadius: 5,
    },
    textBold: {
        color: 'black',
        fontSize: 17,
        fontWeight: 'bold', 
        marginVertical: 10, 
        marginHorizontal: 10
    },
    textLight:{
        color: 'rgb(27, 27, 27)', 
        fontSize: 12, 
        lineHeight: 16, 
        marginLeft: 15
    },
    card:{
        backgroundColor: 'rgb(255,249,237)', 
        borderRadius:4.5,
        paddingVertical: 5, 
        width: 162, 
        height: 28, 
        alignItems: 'center', 
        paddingHorizontal: 7, 
        justifyContent: 'center' 
    },
    negatif:{
        color: 'rgb(244, 181, 45)', 
        alignSelf: 'center', 
        fontSize: 13, 
        lineHeight: 13
    },
    colorText:{
        color: 'rgb(244, 181, 45)', 
        fontWeight: '900', 
        fontSize: 13
    }
})

export { DetailTop };
