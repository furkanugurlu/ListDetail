import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

function Card(props) {
    return (
        <View style={[styles.container, props.container]}>
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={styles.contain}>
                    <Text style={styles.oneText}>
                        {props.oneText}
                </Text>
                    <Text style={styles.twoText}>
                        18.05.2020 09:48
                </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={styles.contain}>
                        <Text style={styles.threeText}>
                            U10029950433
                        </Text>
                        <View style={styles.buttonCard}>
                            <Text style={styles.textCard}>on delivery</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        borderRadius: 5, 
        flex: 1, 
        borderColor: 'rgb(235, 235, 235)', 
        backgroundColor: 'white', 
        marginHorizontal: 7.5, 
        borderWidth: 0.5, 
        flexDirection: 'row', 
        height: 71, 
        marginTop: 17.5, 
        shadowColor: 'rgba(0,0,0,1)', 
        shadowOffset: { width: 0, height: 5 }, 
        shadowRadius: 9.11, 
        shadowOpacity: 0.1 ,
        paddingRight:15
    },
    contain:{
        justifyContent: 'space-between', 
        flexDirection: 'row'
    },
    oneText:{
        color: 'rgb(27, 27, 27)', 
        fontSize: 18, 
        fontWeight: '700', 
        marginLeft: 13, 
        marginTop: 8.5,
    },
    twoText:{
        color: 'rgb(27, 27, 27)', 
        fontSize: 13.5, 
        marginLeft: 18.5, 
        marginTop: 8.5
    },
    threeText:{
        color: 'rgb(27, 27, 27)', 
        fontSize: 13.5, 
        marginLeft: 13, 
        marginTop: 9
    },
    buttonCard:{
        backgroundColor: 'rgb(236, 248,243)', 
        borderRadius: 13.3, 
        height: 26.5, 
        marginBottom: 10.5, 
        paddingLeft: 8, 
        paddingTop: 6, 
        paddingRight: 10, 
        paddingBottom: 4 
    },
    textCard:{
        fontSize: 12, 
        color: 'rgb(10, 187, 135)', 
        fontWeight: 'bold'
    },
   
});


export { Card };
