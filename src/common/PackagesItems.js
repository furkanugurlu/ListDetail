import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function PackagesItems(props) {
    return (
        <View style={{ flex: 1 }}>
            {props.packageItmes
                ?
                <Text style={styles.txt}>
                    <Text style={styles.textLight}>Package Items</Text>
                        | Not: Ürünler karışık bir şekilde ayrı kargolarda gönderiliyor!
                    </Text>
                :
                <Text style={styles.title}>Package Items</Text>
            }
            <View style={styles.container1}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={styles.textName}>Name</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={styles.textCount}>Count</Text>
                    <Text style={styles.textEarning}>Total Earning</Text>
                    <Text style={styles.textDeposit} >Total Deposit</Text>
                </View>
            </View>
            <View style={styles.container2} >
                <Image source={require('../images/product.png')} style={styles.image} />
                <View style={{ flexDirection: 'column', flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', }}>
                            <View style={{ flex: 1, }}>
                                <Text style={styles.textRoam}>Roam WiFi</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', marginRight: 15, }}>
                                <Text style={styles.text_x6}>x6</Text>
                                <Text style={styles.text_$}>$2.50</Text>
                                <Text style={styles.text550} >$550.00</Text>
                            </View>
                        </View>
                    </View>
                    {props.tr ?
                        <View style={styles.contain}>
                            <View style={[styles.buttonCard, props.buttonCard]}>
                                <Text style={[styles.buttonText, props.buttonText]}>{props.title}</Text>
                            </View>
                            <View style={styles.card}>
                                <Text style={styles.textQuantity}>
                                    Received Quantity
                            </Text>
                                <View style={[styles.contain, { justifyContent: 'center', alignItems: 'center' }]}>
                                    <View style={styles.contain_negtive}>
                                        <Text style={styles.img} >-</Text>
                                    </View>
                                    <Text style={styles.center}>0/5</Text>
                                    <View style={styles.contain_negtive}>
                                        <Text style={styles.img} >+</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        :
                        <View style={{ flex: 1 }}>
                            <View style={[styles.buttonCard, props.buttonCard]}>
                                <Text style={[styles.buttonText, props.buttonText]}>{props.title}</Text>
                            </View>
                        </View>}
                </View>
            </View>
            <View style={styles.hr}></View>
        </View>
    );
}


const styles = StyleSheet.create({
    title: {
        color: 'rgb(27, 27, 27)',
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 18.5,
        marginTop: 8.5
    },
    container1: {
        height: 32,
        flexDirection: 'row',
        marginTop: 13.5,
        backgroundColor: 'rgba(220, 220, 220, 0.2)'
    },
    textName: {
        color: 'rgb(45, 53, 65)',
        fontSize: 16,
        marginTop: 2,
        marginBottom: 14,
        fontSize: 11,
        lineHeight: 16,
        width: 54
    },
    textCount: {
        color: 'rgb(45, 53, 65)',
        marginRight: 8,
        fontSize: 11,
        lineHeight: 16,
        marginTop: 2,
        marginBottom: 14
    },
    textEarning: {
        color: 'rgb(45, 53, 65)',
        marginRight: 20,
        fontSize: 11,
        lineHeight: 16,
        textAlign: 'right',
        width: 54,
    },
    textDeposit: {
        color: 'rgb(45, 53, 65)',
        fontSize: 11,
        lineHeight: 16,
        textAlign: 'right',
        width: 54,
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 3.5,
    },
    image: {
        width: 54,
        height: 54,
        marginLeft: 0.5,
    },
    textRoam: {
        color: 'rgb(45, 53, 65)',
        fontSize: 13,
        lineHeight: 16,
        marginTop: 10 - 3.5,
        marginLeft: 8,
    },
    text_x6: {
        color: 'rgb(45, 53, 65)',
        marginRight: 26.5,
        fontSize: 13,
        lineHeight: 16,
        fontWeight: '700',
        textAlign: 'right',
        marginTop: 10 - 3.5,
    },
    text_$: {
        color: 'rgb(45, 53, 65)',
        fontSize: 13,
        marginRight: 12,
        lineHeight: 16,
        textAlign: 'right',
        fontWeight: '700',
        marginTop: 10 - 3.5,
    },
    text550: {
        color: 'rgb(45, 53, 65)',
        fontSize: 13,
        lineHeight: 16,
        textAlign: 'right',
        fontWeight: '700',
        marginTop: 10 - 3.5,
    },
    buttonCard: {
        backgroundColor: 'rgb(239, 241, 255)',
        borderRadius: 13.3,
        width: 87,
        marginTop: 7,
        marginLeft: 8,
        height: 26.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 12,
        color: 'rgb(93, 120, 255)',
        fontWeight: 'bold',
    },
    hr: {
        height: 0.5,
        backgroundColor: 'rgb(222, 222, 222)',
        marginLeft: 63,
        marginTop: 15
    },
    txt: {
        fontSize: 13,
        marginLeft: 20.5,
        marginTop: 11.5,
        marginRight: 25,
        color: 'rgb(27, 27, 27)'
    },
    textLight: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'rgb(27, 27, 27)'
    },
    card: {
        borderWidth: 0.7,
        borderRadius: 3.5,
        borderColor: 'rgb(220, 221, 220)',
        marginRight: 15,
        width: 100,
        height: 40,
        marginTop: 10,
    },
    textQuantity: {
        marginTop: -4,
        fontSize: 8,
        marginLeft: 5,
        width: 73,
        color: 'rgb(75,75,75)',
        backgroundColor: 'white'
    },
    contain: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    contain_negtive: {
        width: 16,
        borderRadius: 3.2,
        height: 16,
        marginTop: 11.5,
        backgroundColor: 'black',
        paddingLeft: 5,
        paddingTop: 1,
        marginBottom: 12
    },
    img: {
        color: 'white',
        fontWeight: '900',
        fontSize: 9.1
    },
    center: {
        fontSize: 11.9,
        color: 'rgb(27,27,27)',
        marginLeft: 7,
        marginRight: 9,
    }
});
export { PackagesItems };