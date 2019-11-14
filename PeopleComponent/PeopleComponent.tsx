import React, { Component } from "react"
import { View, StyleSheet, Text, Image, ScrollView } from "react-native"
import { NavigationComponent } from "../Navigator/NavigationComponent"

export class PeopleComponent extends Component {

  // имя, пол, город, дата рождения, email, аватар 
  state = {
    people: []
  }

  getPeople() {
    fetch('https://uinames.com/api/?region=russia&ext&amount=25')
      .then(r => {
        if (r.status === 200) return r.json()
      })
      .then(d => {
        this.setState({ people: d })
      })
  }

  componentDidMount() {
    this.getPeople();
  }

  render() {
    return (
      <ScrollView style={styles.scroll}>
        <NavigationComponent navigation={this.props.navigation} />
        <View style={styles.wrapper}>
          <Text style={styles.font}>People</Text>
          {this.state.people.map((p, i) =>
            <View style={styles.item} key={i}>
              <View style={styles.top}>
                <View style={styles.photoName}>
                  <Image
                    style={styles.image}
                    source={{ uri: p.photo }}
                  />
                  <Text style={styles.name}>{p.name}</Text>
                </View>
                <Text>Пол: {p.gender === "male" ? 'м' : 'ж'}</Text>
              </View>
              <View>
                <Text>Дата рождения: {p.birthday.dmy}</Text>
                <Text>Страна: {p.region}</Text>
                <Text>Email: {p.email}</Text>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  font: {
    fontSize: 24
  },
  scroll: {
    // paddingTop: 30,
    height: '100%',
    width: '100%'
  },
  wrapper: {
    height: '100%',
    width: '100%',
    paddingTop: 40,
    paddingBottom: 20,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5
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
  image: {
    marginRight: 15,
    width: 40,
    height: 40
  },
  photoName: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    fontSize: 18
  }
});
