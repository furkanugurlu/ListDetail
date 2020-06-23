import React, { useState, useEffect } from 'react';
import { Text, View, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../Header';

const ListPage = ({ navigation }) => {
  const [data, setData] = useState([
    {
        type: 'matchingItems',

    },
    {
        type: 'awaitingApproval',
        subtitle: 'Quick Deposit',
        subtitle_image1: require('../images/combinedShape.png'),

    },
    {
        type: 'dispactingItems',

    },
    {
        type: 'processingpayment',
    },
    {
        type: 'matchingItems',
        subtitle: 'Additional $1',
        subtitle_image2: require('../images/comment.png'),

    },
    {
        type: 'matchingItems',
        subtitle: 'Quick Deposit',
        subtitle_image3: require('../images/combinedShape.png'),
    },
 ])



return (
    <View style={{ flex: 1 }}>
        <Header headerText="Packages" />
        <FlatList
            data={data}
            renderItem={({ item }) =>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Details', {
                            type: item.type
                        })
                    }}
                    style={{
                        margin: 7.5,
                    }}
                    activeOpacity={0.8}
                >
                <View
                    style={[styles.card, {
                    borderBottomEndRadius: !item.subtitle ? 10 : 0,
                    borderBottomLeftRadius: !item.subtitle ? 10 : 0
                }]}>
                <View style={styles.row}>
                    <View style={styles.colum1}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.country}>
                            <Text>USA </Text><Text style={styles.line}>
                                 --------
                            </Text><Text> Turkey</Text></Text>
                        </View>
                    </View>
                    <View style={styles.colum2}>
                        <Image 
                            source={require('../images/information.png')} 
                            style={styles.information} 
                        />
                        <Text style={styles.informationText}>20 Product</Text>
                    </View>
                </View>
                <View style={[styles.row, {
                        flexDirection: 'row',
                }]}>
                    <View style={{ flex: 1 }}>
                        <View style={[styles.buttonCard,
                            {
                            backgroundColor:
                                item.type == 'matchingItems' ?
                                    'rgb(255,243,220)' :
                                item.type == 'dispactingItems' ?
                                    'rgb(236,248,243)' :
                                item.type == 'awaitingApproval' ?
                                    'rgb(239,241,255)' :
                                item.type == 'processingpayment'?
                                    'rgb(236,248,243)' :
                                'rgb(255,243,220)' 
                        }]}>
                        <Text style={[styles.text,
                            {
                            color:
                                item.type == 'matchingItems' ?
                                    'rgb(255,184,34)' :
                                item.type == 'dispactingItems' || item.type == 'processingpayment' ?
                                    'rgb(27,191,143)' :
                                item.type == 'awaitingApproval' ?
                                    'rgb(93,120,255)' :
                                'rgb(255,184,34)'
                        }]}>
                            {
                                item.type == 'matchingItems' ?
                                    'Matching items' :
                                item.type == 'dispactingItems' ?
                                    'Dispacting Items' :
                                item.type == 'awaitingApproval' ?
                                    'Awaiting Approval' : 
                                item.type == 'processingpayment' ?
                                    'Processing Payment': ''
                                }
                        </Text>             
                        </View>
                    </View>
                    <Ionicons name="ios-arrow-forward"  size={17}  style={styles.ıonicons}/>
                </View>
                </View>
                {
                    item.subtitle 
                    ?
                        item.type == 'awaitingApproval' && item.subtitle == 'Quick Deposit' 
                            ?
                            <View style={styles.subtitle}>
                                <Image source={item.subtitle_image1}  style={styles.images}/>
                                <Text style={styles.subtitleText} >Quick Deposit</Text>
                            </View>
                            :  
                        item.type == 'matchingItems' && item.subtitle == 'Additional $1'
                            ?
                            <View style={styles.subtitle}>
                                <Image source={item.subtitle_image2}  style={styles.images}/>
                                <Text 
                                    style={[styles.subtitleText, { color:'rgb(250, 182, 0)' }]} 
                                >
                                    Additional $1
                                </Text>
                                <Image 
                                    source={require('../images/question1.png')}  
                                    style={{width:14.5, height:14.5}}
                                />
                            </View>
                            :
                        item.type == 'matchingItems' && item.subtitle == 'Quick Deposit'
                            ?
                            <View style={styles.subtitle}>
                                <Image source={item.subtitle_image3}  style={styles.images}/>
                                <Text style={styles.subtitleText} >Quick Deposit</Text>
                            </View>
                            :null
                    :null
                    }
                </TouchableOpacity>
                }
                keyExtractor={item => item.id}
            />
    </View>
    );
};
const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        padding: 8,
        shadowOffset:{ width:0, height:0.3},
        shadowOpacity:0.3,
        shadowRadius:1
    },
    line:{
        letterSpacing: -3, 
        color: 'black', 
        fontWeight: '300',
    },
    row: {
        flexDirection: 'column',
        flex: 1,
    },
    colum1: {
        flex: 1,
        marginBottom: 2
    },
    colum2: {
        flex: 1,
        flexDirection: 'row',
    },
    buttonCard: {
        backgroundColor: '#FFF9ED',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 6,
        paddingBottom: 4,
        marginTop: 22,
        marginBottom: 22.5,
        borderRadius: 13.3,
        alignSelf: 'flex-end'
    },
    text: {
        fontSize: 12,
        color: '#FBB522',
        fontWeight: '600',
    },
    subtitle:{
        borderTopColor: 'rgb(222,222,222)', 
        borderTopWidth: 0.5, 
        padding: 10, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 10, 
        backgroundColor: 'white', 
        flexDirection:'row'
    },
    images:{
        width:17.5, 
        height:15
    },
    subtitleText:{
        marginLeft: 6,
        marginRight: 6, 
        fontSize:11, 
        lineHeight:13.5, 
        color:'rgb(127, 205, 44)'
    },
    country:{
        fontSize: 17, 
        width: 143, 
        height: 22.5, 
        marginTop: 14.5, 
        fontWeight: '800'
    },
    information:{
        width: 15, 
        marginRight: 6, 
        height: 15
    },
    informationText:{
        fontSize: 12, 
        color: 'rgb(142, 142,147)'
    },
    ıonicons:{
        color:'#999', 
        marginTop:26, 
        marginLeft:20, 
        marginRight:5
    }
});

export default ListPage;
