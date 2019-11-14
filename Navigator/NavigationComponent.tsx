import React, { Component } from "react";
import { View, StyleSheet, Button } from "react-native";

export class NavigationComponent extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    return <View style={styles.buttons}>
      <Button title="Home" onPress={ () => this.props.navigation.navigate('Home') }></Button>
      <Button title="People" onPress={ () => this.props.navigation.navigate('People') }></Button>
      <Button title="Posts" onPress={ () => this.props.navigation.navigate('Posts') }></Button>
    </View>
  }
}

const styles = StyleSheet.create({
  buttons: {
    marginTop: 15,
    flexDirection: 'row'
  }
});
