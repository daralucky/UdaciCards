import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { fetchDecksFromAPI } from '../actions';
import myStyles from '../utils/styles';
import { clearAllRecordsFromStorage } from '../utils/api';
import DeckItem from './DeckItem';

class DeckList extends Component {
  componentDidMount() {
    this.props.fetchDecks();
  }

  renderItem = ({ item }) => {
    return <DeckItem navigation={this.props.navigation} deck={item} />;
  };

  render() {
    const { decks } = this.props;
    let pview = 0;

    return (
      <View style={myStyles.container}>
        <FlatList
          data={decks}
          renderItem={this.renderItem}
          keyExtractor={(decks, title) => title}
        />
        <TouchableOpacity
          style={myStyles.btnDanger}
          onPress={() => clearAllRecordsFromStorage()}
        >
          <Text style={myStyles.btnText}>Delete All Data</Text>
        </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
