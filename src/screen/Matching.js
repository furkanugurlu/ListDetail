import React from 'react';
import { View } from 'react-native';


import Header from '../Header';
import {Button, DetailTop, LinerGreadientScreen, PageWriting} from '../common';

function MatchingDetail({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Header 
                headerText="Package Detail" 
                col3={true} 
                onPress={() => navigation.navigate('Home')} 
            />
            <LinerGreadientScreen 
                title="Matching items"  
                colors={['rgb(255, 204, 83)', 'rgba(255, 195, 27,0.8)', 'rgba(252, 172, 0, 0.8)']}
                start={[0.3,0]}
            />
            <View style={{ flex: 1, backgroundColor:'white' }}>
                <DetailTop />
                <PageWriting  
                    container={{marginBottom: 42,}}
                    title="Matching Items"  
                    text={"Our algorithm will be matching you with the best possible items under customs regulations. You will receive a confirmation e-mail with the item details. Don't forget to give approval to receive items and start earning."}
                />
                <Button 
                    containerStyle={{backgroundColor: 'rgb(244, 181, 45)',}}  
                    title="Check Status"   
                />
                <Button  
                    containerStyle=
                    {{
                        backgroundColor: 'rgb(255,255,255)', 
                        borderColor: 'rgb(151, 151, 151)', 
                        borderWidth: 0.5,
                    }}  
                    title="Cancel"  
                    text={{fontWeight: '400',}} />
            </View>
        </View>
    );
}

export default MatchingDetail;