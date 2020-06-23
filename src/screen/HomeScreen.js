import React from 'react';
import { View, Dimensions } from 'react-native';

import ListPage from '../screen/ListPage'

const { width, height } = Dimensions.get('window');



class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
          <ListPage navigation={this.props.navigation} />
      </View>
    );
  }
}

export { HomeScreen };