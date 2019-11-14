import React, { Component } from "react"
import { View, StyleSheet, Text, Button, ScrollView } from "react-native"

export class RandomPostsComponent extends Component {

  state = {
    posts: [],
    text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.'
  }

  componentDidMount() {
    this.setState({ posts: this.generate() });
  }

  generate() {
    const postsCount = Math.round(Math.random() * 10);
    const posts = [];
    for (let i = 0; i < postsCount; i++) {
      const lastIndex = Math.floor(Math.random() * this.state.text.length - 1);
      posts.push({
        text: this.state.text.substring(0, lastIndex)
      });
    }
    return posts;
  }

  press() {
    this.setState({posts: this.generate()})
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView style={styles.list}>
          {this.state.posts.map((post, index) =>
            <View key={index} style={styles.item}>
              <Text>{post.text}</Text>
            </View>
          )}
        </ScrollView>
        <Button onPress={this.press.bind(this)} title="Refresh"></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    minHeight: '100%',
    width: '100%',
  },
  list: {
    marginTop: 30,
    width: '100%',
    height: '90%'
  },
  item: {
    width: '95%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d6d7da',
    borderStyle: 'solid',
    marginBottom: 10,
    padding: 10
  }
});
