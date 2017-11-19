import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import myStyles from '../utils/styles';
import { cardPopUpMenu } from '../utils/helpers';

class CardItem extends Component {
  render() {
    const { navigation, card } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          ref={c => (this.popMenu = c)}
          onPress={() => navigation.navigate('CardDetail', { card })}
          onLongPress={() => cardPopUpMenu(this.popMenu, card)}
        >
          <View style={myStyles.cardItem}>
            <Text style={myStyles.cardTitle}>Q: {card.question}</Text>
            <Text>A: {card.answer}</Text>
          </View>
          <View style={myStyles.cardLine} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default CardItem;
