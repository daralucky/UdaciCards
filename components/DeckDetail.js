import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params;

    return {
      title: `Deck ID: ${deckId}`,
    };
  };

  handlePress = () => {
    //alert('Hello');
    this.toHome();
  };

  toHome = () => {
    this.props.navigation.dispatch(
      NavigationActions.back({ key: this.props.navigation.state.key })
    );
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text>
          Deck Detail - deckId: {this.props.navigation.state.params.deckId}
        </Text>
        <Text>Screen key: {this.props.navigation.state.key}</Text>
        <TouchableOpacity onPress={this.handlePress}>
          <Text style={styles.btn}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    //flex: 1,
    backgroundColor: '#E53224',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    //borderColor: '#000',
  },
});

export default DeckDetail;