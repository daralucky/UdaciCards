import { AsyncStorage, UIManager, findNodeHandle, Alert } from 'react-native';
import { Notifications, Permissions } from 'expo';
import { NOTIFICATION_KEY } from '../constants/';

export function epochToString() {
  // Math.round(Date.now() / 1000)
  return Date.now().toString();
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

function createNotification() {
  return {
    title: 'Study!',
    body: "👋 don't forget to study for today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    },
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync();

            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(19);
            tomorrow.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: 'day',
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}

export function deckPopUpMenu(ref, deck, navigation) {
  UIManager.showPopupMenu(
    findNodeHandle(ref),
    ['Manage Cards', 'Edit Deck', 'Delete Deck'], // Menu list
    () => console.log('something went wrong with the popup menu'),
    (e, i) => {
      // console.log(`${e} : ${i}`);
      switch (i) {
        case 0:
          // console.log(`MANAGE CARDS# ${e} : ${i}`);
          navigation.navigate('CardList', {
            deck,
          });
          break;
        case 1:
        default:
          // TODO: redirect to edit deck or new deck with edit parameter?
          console.log(`EDIT# ${e} : ${i} | ${JSON.stringify(deck, null, 2)}`);
          break;

        case 2:
          console.log(`DELETE# ${e} : ${i}`);
          Alert.alert(
            'Delete Deck',
            'Do you really want to delete this deck?',
            [
              {
                text: 'No',
              },
              {
                text: 'Delete Deck',
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
}

export function cardPopUpMenu(ref, deck) {
  UIManager.showPopupMenu(
    findNodeHandle(ref),
    ['Edit', 'Delete'], // Menu list
    () => console.log('something went wrong with the popup menu'),
    (e, i) => {
      // console.log(`${e} : ${i}`);
      switch (i) {
        case 0:
        default:
          // TODO: redirect to edit deck or new deck with edit parameter?
          console.log(`EDIT# ${e} : ${i} | ${JSON.stringify(deck, null, 2)}`);
          break;

        case 1:
          console.log(`DELETE# ${e} : ${i}`);
          Alert.alert(
            'Delete Card',
            'Do you really want to delete this Card?',
            [
              {
                text: 'No',
              },
              {
                text: 'Delete Card',
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
}
