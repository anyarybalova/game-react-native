import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Dimensions
} from 'react-native';


let Window = Dimensions.get('window');
let winWidth = Window.width;



export default class test03 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1
    };
    
  }

  _handlePressPlay() {
      console.log(this);
    this.setState({page: 2});
 }

      
render() {
    switch (this.state.page) {
         case 1:
            return (
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                    ROOT
                    </Text>
                    <View style={styles.bottons}>
                        <Button
                            onPress={() => this._handlePressPlay()}
                            title="Play"
                            color="#841584"
                            accessibilityLabel="play game"
                            />
                    </View>
                </View>  
                );
        case 2:
            return <Main/>
            
        }
      }
}


console.log('width window: ', winWidth);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  bottons : {
    width: winWidth - winWidth/2  
  }
});

