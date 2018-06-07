/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert
} from 'react-native';

class loraSmartBeantalk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: '',
      data2: '',
      data3: '',     
    };
  }

  _onPressButtonPOSTone(data) {
    fetch("http://10.21.20.251:3000/one", {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: data,
      }) 
    })
    .then((response) => response.json())
    .then((responseData) => {
        Alert.alert(
            "POST Response Button1",
            "Response Body -> " + JSON.stringify(responseData.message)
        )
    })
    .done();
    this.setState({data1:""})
  }

  _onPressButtonPOSTtwo(data) {
    fetch("http://10.21.20.251:3000/two", {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: data,
      }) 
    })
    .then((response) => response.json())
    .then((responseData) => {
        Alert.alert(
            "POST Response Button2",
            "Response Body -> " + JSON.stringify(responseData.message)
        )
    })
    .done();
    this.setState({data2:""})
  }

  _onPressButtonPOSTthree(data) {
    fetch("http://10.21.20.251:3000/three", {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: data,
      }) 
    })
    .then((response) => response.json())
    .then((responseData) => {
        Alert.alert(
            "POST Response Button3",
            "Response Body -> " + JSON.stringify(responseData.message)
        )
    })
    .done();
    this.setState({data3:""})   
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            placeholder='Input something'
            onChangeText={(data) => this.setState({data1:data})}
            value={this.state.data1}
          />
          <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'
            onPress={() => this._onPressButtonPOSTone(this.state.data1)}>
          <Text style={styles.buttonText}>Button1</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            placeholder='Input something'
            onChangeText={(data) => this.setState({data2:data})}
            value={this.state.data2}
          />
          <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'
            onPress={() => this._onPressButtonPOSTtwo(this.state.data2)}>
          <Text style={styles.buttonText}>Button2</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            placeholder='Input something'
            onChangeText={(data) => this.setState({data3:data})}
            value={this.state.data3}
          />
          <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'
            onPress={() => this._onPressButtonPOSTthree(this.state.data3)}>
          <Text style={styles.buttonText}>Button3</Text>
          </TouchableHighlight>
        </View>    
      </View>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  }
});

AppRegistry.registerComponent('loraSmartBeantalk', () => loraSmartBeantalk);
