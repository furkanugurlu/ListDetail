import React from 'react';
import { View, ScrollView  } from 'react-native';


import Header from '../Header';
import { Button, DetailTop, PackagesItems, LinerGreadientScreen, PageWriting } from '../common'
 
function ProcessingPaymentDetail({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Header headerText="Package Detail" col3={true} onPress={() => navigation.navigate('Home')} />
            <LinerGreadientScreen 
            title="Processing payment"  
            colors={['rgb(128, 216, 140)', 'rgb(109, 212, 152)', 'rgb(56, 202, 187)']}
            start={[0.3, 0]} 
            />
            <ScrollView style={{ flex: 1, backgroundColor:'white' }}>
            <DetailTop  
                    colorText={{color:'rgb(10, 187, 135)'}} 
                    card={{backgroundColor: 'rgb(236, 248, 243)',}}
                    sour={{color: 'rgb(10, 187, 135)'}}
            />
            <PageWriting  processing />
            <Button   
                containerStyle={{
                    backgroundColor: 'rgb(241, 181, 45)', 
                    flexDirection: 'row',
                    marginTop: 20,
                }}
                title="Additional $1"
                image={require('../images/shape.png')}
            />
            <Button   
                containerStyle={{
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderColor:'rgb(151,151,151)',
                    borderWidth:0.5 ,
                    marginTop: 10,
                    flexDirection: 'row',
                }}
                text={{fontWeight:'400'}}
                title="Helpdesk"
                image={require('../images/combinedShapeCopyBlack.png')}
            />
            <PackagesItems 
                buttonCard={{backgroundColor: 'rgb(236, 248, 243)',}} 
               buttonText={{color:'rgb(10, 187, 135)'}} 
               title="Appointed"
            />
            </ScrollView>
        </View>
    );
}

export default ProcessingPaymentDetail;