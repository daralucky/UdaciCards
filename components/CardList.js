import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { fetchDecksFromAPI } from '../actions';
import myStyles from '../utils/styles';
import CardItem from './CardItem';

class CardList extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params;

    return {
      title: `Cards in [${deck.title}]`,
    };
  };

  componentDidMount() {
    this.props.fetchDecks();
  }

  renderItem = ({ item }) => {
    return <CardItem navigation={this.props.navigation} card={item} />;
  };

  render() {
    const { questions } = this.props.navigation.state.params.deck;
    console.log(JSON.stringify(questions, null, 2));
    return (
      <View style={myStyles.container}>
        <FlatList
          data={questions}
          renderItem={this.renderItem}
          keyExtractor={(decks, title) => title}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  const decks = [];

  for (const [key, value] of Object.entries(state.decks)) {
    decks.push({ key: key, ...value });
  }

  return { decks };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDecks: () => dispatch(fetchDecksFromAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
