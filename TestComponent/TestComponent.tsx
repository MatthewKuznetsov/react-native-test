import React, { Component } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";


export class TestComponent extends Component {

  state = {
    viewColor: '#0000ff',
    inputValue: '',
    pattern: /([a-f0-9]){6}/i
  }

  changeColor(e) {
    this.setState({inputValue: e.nativeEvent.text})
  }
  
  setColor() {
    if (this.state.pattern.test(this.state.inputValue)) {
      this.setState({ viewColor: '#' + this.state.inputValue })
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={{ ...styles.square, backgroundColor: this.state.viewColor }}></View>
        <View style={styles.input}>
          <TextInput
            maxLength={6}
            underlineColorAndroid="transparent"
            placeholder="Color"
            autoCapitalize="none"
            onChange={this.changeColor.bind(this)}/>
        </View>
        <View>
          <Button
            onPress={this.setColor.bind(this)}
            title="Set color"
          />
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  square: {
    height: 200,
    width: 200
  },
  input: {
    marginBottom: 10,
    marginTop: 10
  }
});