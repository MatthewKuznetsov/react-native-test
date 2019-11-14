import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationComponent } from "../Navigator/NavigationComponent";


export class HomeComponent extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    counter: 0
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 })
  }

  decrement() {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 })
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <NavigationComponent navigation={ this.props.navigation } />
        <View style={styles.content}>
          <Text>{this.state.counter}</Text>
          <View style={styles.buttons}>
            <View>
              <Button
                color="grey"
                onPress={this.decrement.bind(this)}
                title="Minus one"
              />
            </View>
            <View style={styles.rightButton}>
              <Button
                onPress={this.increment.bind(this)}
                title="Plus one"
              />
            </View>
          </View>
        </View>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  content: {
    paddingTop: 20,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttons: {
    marginTop: 15,
    flexDirection: 'row'
  },
  rightButton: {
    marginLeft: 15,
  }
});