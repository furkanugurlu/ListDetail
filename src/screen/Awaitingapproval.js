import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';


import Header from '../Header'
import { Button ,DetailTop, PackagesItems, LinerGreadientScreen, PageWriting } from '../common'

function AwaitingapprovalDetail({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Header headerText="Package Detail" col3={true} onPress={() => navigation.navigate('Home')} />
            <LinerGreadientScreen 
                title="Awaiting approval"  
                colors={['rgba(183, 192, 255, 0.9)', 'rgba(93, 120, 255, 0.7)']}
                start={[0.3, 0]} 
            />
            <ScrollView style={{ flex: 1, backgroundColor:'white' }}>
            <DetailTop  
                colorText={{color:'rgb(93, 120, 255)'}} 
                card={{backgroundColor: 'rgb(239, 241, 255)',}}
                sour={{color: 'rgb(93, 120, 255)'}}
            />
            <PageWriting 
                container={{marginBottom: 25.5,}} 
                title="Approve items"  
                text={"Like renting a car, we will preauthorise the product price from your credit card until you deliver the items to the domestic logistics company. We are going to pay back your security deposit with your earning after you drop off products."}
            />
                <Button  
                    containerStyle={{backgroundColor: 'rgb(244, 181, 45)',}}
                    title="Confirm Packages"   
                />
                <Button  
                    containerStyle={{
                        backgroundColor: 'rgb(255,255,255)', 
                        borderColor: 'rgb(151, 151, 151)', 
                        borderWidth: 0.5
                    }}  
                    title="Cancel"  
                    text={{fontWeight: '400',}} 
                />
                <PackagesItems  title="Pending"  />
            </ScrollView>
        </View>
    );
}


export default AwaitingapprovalDetail;