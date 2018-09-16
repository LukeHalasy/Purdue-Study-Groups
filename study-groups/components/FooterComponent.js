import React from 'react';
import { Button,View,StyleSheet,Text } from 'react-native';
import { Container, Header, Footer, FooterTab, Icon } from 'native-base';
import { createStackNavigator } from 'react-navigation';


const styles = StyleSheet.create({

  footer: {
    flexDirection:"row",
    flex:1,
  },
  footerButtonContainer:{
    flex:1,
    backgroundColor: '#162238'
  }
  

})

class FooterComponent extends React.Component {
  render() {

    return (
        <Footer>
          <FooterTab>
          <View style={styles.footerButtonContainer}>
            <Button active title='HELLO' color='#fff'>
            </Button>
          </View>
          <View style={styles.footerButtonContainer}>
            <Button active title='HELLO' color='#fff'>

            </Button>
            </View>

          </FooterTab>
        </Footer>
      )
  }
}

export default FooterComponent;
