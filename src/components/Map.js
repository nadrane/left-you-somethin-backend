import React, { Component } from 'react';
import BackgroundGeolocation from 'react-native-background-geolocation';
import MapView from 'react-native-maps';

export default class Map extends Component {
  // componentWillMount() {
  //   // This handler fires whenever bgGeo receives a location update.
  //   BackgroundGeolocation.on('location', this.onLocation);

  //   // This handler fires when movement states changes (stationary->moving; moving->stationary)
  //   BackgroundGeolocation.on('motionchange', this.onMotionChange);

  //   // Now configure the plugin.
  //   BackgroundGeolocation.configure({
  //     // --- GEOLOCATION CONFIG --- //

  //     // One of four values (0, 10, 100, 1000); 0 means HIGHEST POWER, HIGHEST ACCURACY and 1000 means LOWEST POWER, LOWEST ACCURACY
  //     desiredAccuracy: 0,

  //     // When stopped, the minimum distance the device must move beyond the stationary location for aggressive background-tracking to engage. Note, since the plugin uses iOS significant-changes API, the plugin cannot detect the exact moment the device moves out of the stationary-radius. In normal conditions, it can take as much as 3 city-blocks to 1/2 km before staionary-region exit is detected.
  //     stationaryRadius: 25,

  //     // Min. distance (in meters) device must move horizontally before an update event is generated
  //     distanceFilter: 10,

  //     // --- ACTIVITY RECOGNITION --- //

  //     // Minutes to wait before turning off the GPS after the ActivityRecognition System (ARS) detects the device is still.
  //     stopTimeout: 5,

  //     // --- APPLICATION CONFIG --- //

  //     debug: true, // <-- enable for debug sounds & notifications
  //     logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
  //     stopOnTerminate: false,   // <-- Allow the background-service to continue tracking when user closes the app.
  //     startOnBoot: true,        // <-- Auto start tracking when device is powered-up.
  //     // HTTP / SQLite config
  //     url: 'http://posttestserver.com/post.php?dir=cordova-background-geolocation',
  //     autoSync: true,         // <-- POST each location immediately to server
  //     params: {               // <-- Optional HTTP params
  //       'auth_token': 'maybe_your_server_authenticates_via_token_YES?'
  //     }
  //   }, (state) => {
  //     console.log('- BackgroundGeolocation is configured and ready: ', state.enabled);

  //     if (!state.enabled) {
  //       BackgroundGeolocation.start(() => {
  //         console.log('- Start success');
  //       });
  //     }
  //   });
  // }

  // // You must remove listeners when your component unmounts
  // componentWillUnmount() {
  //   // Remove BackgroundGeolocation listeners
  //   BackgroundGeolocation.un('location', this.onLocation);
  //   BackgroundGeolocation.un('motionchange', this.onMotionChange);
  // }

  // onLocation(location) {
  //   console.log('- [js]location: ', JSON.stringify(location));
  // }

  // onMotionChange(location) {
  //   console.log('- [js]motionchanged: ', JSON.stringify(location));
  // }

  render() {
    return (
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}
