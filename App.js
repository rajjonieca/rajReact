import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native'
import Component1 from './app/components/Component1/Component1';
export default class genApp extends Component{
render(){
  return(
    <View>

      <Component1 message="Hello Joyce!"/>

    </View>    
  );

}
}

AppRegistry.registerComponent('genApp',() => genApp);