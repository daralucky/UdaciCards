import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import myStyles from '../utils/styles';
import SimpleDrop from './SimpleDrop';
import { deckPopUpMenu } from '../utils/helpers';

class CardDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { card } = navigation.state.params;

    return {
      title: `Card [${card.question}]`,
    };
  };

  render() {
    const { card } = this.props.navigation.state.params;

    return (
      <View style={myStyles.container}>
        <View style={myStyles.deckContainer}>
          <Text style={myStyles.deckTitle}>Q: {card.question}</Text>
          <Text>A: {card.answer}</Text>
        </View>
        <View style={myStyles.btnGroup}>
          <TouchableOpacity
            style={myStyles.btnWarning}
            onPress={() =>
              this.props.navigation.navigate('CardNew', {
                card,
              })}
          >
            <Text style={myStyles.btnText}>
              <FontAwesome name="edit" size={20} /> Edit
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={myStyles.btnDanger}
            onPress={() =>
              this.props.navigation.navigate('Home', {
                card,
              })}
          >
            <Text style={myStyles.btnText}>
              <FontAwesome name="remove" size={20} /> Delete
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default CardDetail;
