import React from 'react';
import { View } from 'react-native';

import MatchingDetail from '../screen/Matching'
import AwaitingapprovalDetail from '../screen/Awaitingapproval'
import DispactingDetail from '../screen/Dispacting'
import ProcessingPaymentDetail from '../screen/Processingpayment'




function DetailScreen({ route, navigation }) {
  const { type } = route.params;
    return (
      <View style={{ flex: 1 }}>
        { 
          type == 'matchingItems' ?
          <MatchingDetail navigation={navigation} />:
          type == 'awaitingApproval'?
          <AwaitingapprovalDetail navigation={navigation} />:
          type == 'dispactingItems'?
          <DispactingDetail navigation={navigation} />:
          type == 'processingpayment'?
          <ProcessingPaymentDetail navigation={navigation} />:null
        }
       
     </View>
    );
}

export { DetailScreen };