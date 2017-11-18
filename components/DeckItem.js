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

class DeckItem extends Component {
  popUpMenue = () => {
    UIManager.showPopupMenu(
      findNodeHandle(this._menu),
      ['Edit', 'Delete'], // Menu list
      () => console.log('something went wrong with the popup menu'),
      (e, i) => {
        // console.log(`${e} : ${i}`);
        switch (i) {
          case 0:
          default:
            // TODO: redirect to edit deck or new deck with edit parameter?
            console.log(`EDIT# ${e} : ${i}`);
            break;

          case 1:
            console.log(`DELETE# ${e} : ${i}`);
            Alert.alert(
              'Delete Deck',
              'Do you really want to delete this deck?',
              [
                {
                  text: 'No',
                },
                {
                  text: 'Delete',
                  onPress: () => {
                    // TODO: delete deck operation here
                    console.log('Delete Pressed!');
                  },
                },
              ]
            );
            break;
        }
      }
    );
  };

  render() {
    const { navigation, deck } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          ref={c => (this._menu = c)}
          onPress={() =>
            navigation.navigate('DeckDetail', { currentDeck: deck })}
          onLongPress={() => this.popUpMenue()}
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
