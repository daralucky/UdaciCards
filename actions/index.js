import * as ActionTypes from '../constants/ActionTypes';
import * as API from '../utils/api';
import { epochToString } from '../utils/helpers';

export const addNewCard = (key, question, answer) => {
  const newCard = {
    id: epochToString(),
    question,
    answer,
  };

  // add new Card to Storage
  API.addCardToStorage({ key, newCard });

  return {
    type: ActionTypes.ADD_NEW_CARD,
    payload: {
      key,
      newCard,
    },
  };
};

export const addNewDeck = title => {
  const newDeck = {
    key: epochToString(),
    deck: {
      title,
      questions: [],
    },
  };

  // add new deck to Storage
  API.saveDeckToStorage(newDeck);

  return {
    type: ActionTypes.ADD_NEW_DECK,
    payload: {
      newDeck,
    },
  };
};

export const receiveDecks = decks => {
  return {
    type: ActionTypes.RECEIVE_DECKS,
    decks,
  };
};

export const fetchDecksFromAPI = () => dispatch => {
  API.getAllDecksFromStorage().then(decks => {
    // console.log('decks: ' + JSON.stringify(decks, null, 2));
    dispatch(receiveDecks(decks));
  });
};
