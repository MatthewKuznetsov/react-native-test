import React, { Component } from "react"
import { View, StyleSheet, Text, TouchableWithoutFeedback, TextInput, Button } from "react-native"
import { NavigationComponent } from "../Navigator/NavigationComponent";

export class PostsComponent extends Component {

  state = {
    initialColor: '#f1f1f1',
    active: false,
    inputText: '',
    posts: [
      {
        id: 0,
        status: false,
        color: '',
        text: "Абра-кадабра"
      },
      {
        id: 1,
        status: false,
        color: '',
        text: "Абра-кадабра 1"
      },
      {
        id: 2,
        status: false,
        color: '',
        text: "Абра-кадабра 2"
      },
      {
        id: 3,
        status: false,
        color: '',
        text: "Абра-кадабра 3"
      }
    ]
  }

  randomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  press(id) {
    this.setState({
      posts: this.state.posts.map(p => {
        if (p.id === id) {
          if (p.status) {
            return Object.assign(p, {
              status: false,
              color: this.state.initialColor
            })
          } else {
            return Object.assign(p, {
              status: true,
              color: this.randomColor()
            })
          }
        }
        return p;
      })
    });

    const active = this.state.posts.find(p => p.status);
    this.setState({ active: !!active });
  }

  inputContent(e) {
    this.setState({ inputText: e.nativeEvent.text })
  }

  set() {
    this.setState({
      posts: this.state.posts.map(p => {
        if (p.status) {
          return Object.assign(p, { text: this.state.inputText })
        }
        return p;
      })
    });
  }


  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.nav}>
          <NavigationComponent navigation={this.props.navigation} />
        </View>
        {this.state.posts.map(post =>
          <TouchableWithoutFeedback
            key={post.id}
            onPress={this.press.bind(this, post.id)}>
            <View style={{ ...styles.item, backgroundColor: (post.color || this.state.initialColor) }} >
              <Text>{post.text}</Text>
            </View>
          </TouchableWithoutFeedback>
        )}
        {this.state.active &&
          <View>
            <View style={styles.input}>
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Content"
                autoCapitalize="none"
                onChange={this.inputContent.bind(this)} />
            </View>
            <Button onPress={this.set.bind(this)} title="Set"></Button>
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  nav: {
    width: '100%'
  },
  item: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#1f1f1f55',
    borderStyle: 'solid',
    marginTop: 10,
    padding: 10
  },
  input: {
    width: 200,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#1f1f1f55',
    borderStyle: 'solid',
    marginTop: 15,
    marginBottom: 15
  }
});
