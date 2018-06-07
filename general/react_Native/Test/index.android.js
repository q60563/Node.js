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
  TouchableHighlight
} from 'react-native';

class HelloWorld extends Component{
  render(){
    return <Text style={styles.text}>Hello World (again)</Text>;
  }
}

class PropertyFinderApp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      searchString: 'london',
      isLoading: false
    };
  }

  onSearchTextChanged(event) {
    console.log('onSearchTextChanged');
    this.setState({ searchString: event.nativeEvent.text });
    console.log(this.state.searchString);
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            value={this.state.searchString}
            onChange={this.onSearchTextChanged.bind(this)}
            placeholder='Search via name or postcode'/>
          <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Go</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            placeholder='Search via name or postcode'/>
          <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Go</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            placeholder='Search via name or postcode'/>
          <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Go</Text>
          </TouchableHighlight>
        </View>    
      </View>      
    )
  }
}

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      result:''
    };
  }

  render() {
    return (
      <View style={styles.container}>
      
        <View style={styles.flowRight}>
          <TextInput  
            style={styles.searchInput}
            placeholder="Input Someing!"
            onChangeText={(text) => this.setState({text:text})}
          />
          <TouchableHighlight style={styles.button}
              underlayColor='#99d9f4'
              onPress={() => this.setState({ result: this.state.text })}>
            <Text style={styles.buttonText}>Go</Text>
          </TouchableHighlight>
        </View>
        
      <View style={{padding: 10}}>
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.result.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
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

AppRegistry.registerComponent('Test', () => PizzaTranslator);
