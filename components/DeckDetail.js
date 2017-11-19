import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import myStyles from '../utils/styles';
import SimpleDrop from './SimpleDrop';
import { deckPopUpMenu } from '../utils/helpers';

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { currentDeck } = navigation.state.params;

    return {
      title: `${currentDeck.title}`,
      headerRight: <SimpleDrop popMenu={deckPopUpMenu} item={currentDeck} />,
    };
  };

  render() {
    const { currentDeck } = this.props.navigation.state.params;
    // console.log('currentDeck:' + JSON.stringify(currentDeck, null, 2));

    return (
      <View style={myStyles.container}>
        <View style={myStyles.deckContainer}>
          <Text style={myStyles.deckTitle}>{currentDeck.title}</Text>
          <Text>{currentDeck.questions.length} cards</Text>
        </View>
        <View style={myStyles.btnGroup}>
          <TouchableOpacity
            style={myStyles.btnWarning}
            onPress={() =>
              this.props.navigation.navigate('CardNew', {
                currentDeck,
              })}
          >
            <Text style={myStyles.btnText}> Add Card</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={myStyles.btnSuccess}
            onPress={() =>
              this.props.navigation.navigate('Quiz', {
                currentDeck,
              })}
          >
            <Text style={myStyles.btnText}>
              <FontAwesome name="puzzle-piece" size={20} /> Start Quiz
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={myStyles.btnDanger}
            onPress={() =>
              this.props.navigation.navigate('Home', {
                currentDeck,
              })}
          >
            <Text style={myStyles.btnText}>
              <FontAwesome name="home" size={20} /> Home
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default DeckDetail;
