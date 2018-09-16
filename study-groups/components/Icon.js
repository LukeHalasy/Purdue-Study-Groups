import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class Icon extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 45, height: 45}}/>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => Icon);