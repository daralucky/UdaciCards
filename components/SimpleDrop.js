import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { MaterialIcons } from '@expo/vector-icons';

export default class SimpleDrop extends Component {
  render() {
    const { popMenu, item, navigation } = this.props;

    return (
      <View style={{ flexDirection: 'row' }}>
        <View>
          <View
            ref={c => (this.menuRef = c)}
            style={{
              backgroundColor: 'transparent',
              width: 1,
              height: StyleSheet.hairlineWidth,
            }}
          />
          <MaterialIcons
            name="more-vert"
            onPress={() => popMenu(this.menuRef, item, navigation)}
            style={{ marginRight: 10, color: 'white' }}
            size={30}
          />
        </View>
      </View>
    );
  }
}
