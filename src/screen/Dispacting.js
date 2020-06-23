import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';


import Header from '../Header';
import { Button, DetailTop, PackagesItems, Card , LinerGreadientScreen, PageWriting } from '../common'

function DispactingDetail({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Header headerText="Package Detail" col3={true} onPress={() => navigation.navigate('Home')} />
            <LinerGreadientScreen 
                title="Dispathching items"  
                colors={['rgb(128, 216, 140)', 'rgb(109, 212, 152)', 'rgb(56, 202, 187)']}
                start={[0.3, 0]} 
            />
            <ScrollView style={{ flex: 1, backgroundColor:'white' }}>
            <DetailTop  
                    colorText={{color:'rgb(10, 187, 135)'}} 
                    card={{backgroundColor: 'rgb(236, 248, 243)',}}
                    sour={{color: 'rgb(10, 187, 135)'}}
            />
             <PageWriting 
                    container={{marginBottom: 42,}} 
                    title="Receive items"  
                    text={"Our algorithm will be matching you with the best possible items under customs regulations. You will receive a confirmation e-mail with the item details. Don't forget to give approval to receive items and start earning."}
            />
            <Button   
                containerStyle={{
                    backgroundColor: 'rgb(241, 181, 45)', 
                }}
                title="Leaving Counrty"
            />
            <Button   
                containerStyle={{
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderColor:'rgb(151,151,151)',
                    borderWidth:0.5 ,
                    flexDirection: 'row',
                }}
                text={{fontWeight:'400'}}
                title="Helpdesk"
                image={require('../images/combinedShapeCopyBlack.png')}
            />

            <View style={styles.Track}>
                <Text style={styles.textDark}>Track Delivery Numbers</Text>
                <Image source={require('../images/arrowCopy.png')} style={styles.img} />
            </View>
            <Card 
                oneText="UPS" 
            />
            <Card 
                oneText="DHL" 
                container={{marginTop: 7.5,}} 
            />
               
            <PackagesItems 
                packageItmes 
                tr 
                buttonCard={{backgroundColor: 'rgb(236, 248, 243)', marginTop: 19.5,}} 
                buttonText={{color:'rgb(10, 187, 135)'}} 
                title="Appointed"
            /> 
            <Button   
                containerStyle={{
                    backgroundColor: 'rgb(241, 181, 45)', 
                }}
                title="Save Changes"
            />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonCard: {
        backgroundColor: '#000',
        borderRadius: 4.1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
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
    textDark:{
        color: 'rgb(27, 27, 27)', 
        fontSize: 18, 
        fontWeight: '700', 
        marginLeft: 18.5, 
        marginTop: 8.5, 
    },
    img:{
        marginRight: 21, 
        marginTop: 16, 
        marginBottom: 21,
    },
    Track:{
        flexDirection: 'row', 
        justifyContent:'space-between'
    }
});

export default DispactingDetail;