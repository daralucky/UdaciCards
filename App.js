import React from 'react';
import { Provider } from 'react-redux';
import { View, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import configureStore from './store/configureStore';
import * as Color from './utils/colors';
import DeckList from './components/DeckList';
import DeckNew from './components/DeckNew';
import DeckDetail from './components/DeckDetail';
import CardNew from './components/CardNew';
import CardList from './components/CardList';
import CardDetail from './components/CardDetail';
import Quiz from './components/Quiz';
import QuizResult from './components/QuizResult';
import { setLocalNotification } from './utils/helpers';

function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const Tabs = TabNavigator(
  {
    Home: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'DECKS',
      },
    },
    NewDeck: {
      screen: DeckNew,
      navigationOptions: {
        tabBarLabel: 'NEW DECK',
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
  }
);

const MainNavigator = StackNavigator(
  {
    Home: {
      screen: Tabs,
    },
    DeckDetail: {
      screen: DeckDetail,
      navigationOptions: {
        headerTintColor: Color.white,
        headerStyle: {
          backgroundColor: Color.purple,
        },
      },
    },
    CardNew: {
      screen: CardNew,
      navigationOptions: {
        headerTintColor: Color.white,
        headerStyle: {
          backgroundColor: Color.warningColor,
        },
      },
    },
    CardList: {
      screen: CardList,
      navigationOptions: {
        headerTintColor: Color.white,
        headerStyle: {
          backgroundColor: Color.infoColor,
        },
      },
    },
    CardDetail: {
      screen: CardDetail,
      navigationOptions: {
        headerTintColor: Color.white,
        headerStyle: {
          backgroundColor: Color.infoColor,
        },
      },
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        headerTintColor: Color.white,
        headerStyle: {
          backgroundColor: Color.successColor,
        },
      },
    },
    QuizResult: {
      screen: QuizResult,
      navigationOptions: {
        headerTintColor: Color.white,
        headerStyle: {
          backgroundColor: Color.primaryColor,
        },
      },
    },
  },
  {
    headerMode: 'screen',
  }
);

const store = configureStore();

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <UdaciStatusBar
            backgroundColor={Color.red}
            barStyle="light-content"
          />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
