import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewDeck } from '../actions';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

class DeckNew extends Component {
  state = { title: '' };

  createDeck() {
    this.props.addNewDeck(this.state.title);
    this.setState({ title: '' });
    this.toHome();
  }

  toHome = () => {
    this.props.navigation.dispatch(
      NavigationActions.back({ key: this.props.navigation.state.key })
    );
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.question}>What is the title of your deck?</Text>
        <TextInput
          value={this.state.title}
          onChangeText={text => this.setState({ title: text })}
          style={styles.input}
          placeholder="Deck Title"
        />
        <TouchableOpacity
          style={styles.btnSuccess}
          onPress={() => this.createDeck()}
        >
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  btnSuccess: {
    backgroundColor: '#5cb85c',
    borderColor: '#4cae4c',
    width: 150,
    margin: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 10,
  },
});

export default connect(null, { addNewDeck })(DeckNew);
