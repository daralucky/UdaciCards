import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  UIManager,
  findNodeHandle,
  Alert,
} from 'react-native';
import myStyles from '../utils/styles';
import { deckPopUpMenu } from '../utils/helpers';

class DeckItem extends Component {
  render() {
    const { navigation, deck } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          ref={c => (this.popMenu = c)}
          onPress={() =>
            navigation.navigate('DeckDetail', { currentDeck: deck })}
          onLongPress={() => deckPopUpMenu(this.popMenu, deck)}
        >
          <View style={myStyles.deckItem}>
            <Text style={myStyles.deckTitle}>{deck.title}</Text>
            <Text>
              {typeof deck.questions !== 'undefined'
                ? deck.questions.length
                : '0'}{' '}
              cards
            </Text>
          </View>
          <View style={myStyles.deckLine} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default DeckItem;
