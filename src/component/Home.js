import React from 'react';
import { StyleSheet, Text,ImageBackground, View ,Image, Button, Alert,TouchableOpacity} from 'react-native';
import {HomeStack} from '../router';
import styles from '../style/style';


class BackgroundImage extends React.Component {

  
    render() {
        return (
            <ImageBackground source={require('../images/truyen1.jpg')} style={styles.backgroundImage}>
              {this.props.children}
            </ImageBackground>
        )
    }
 }
class TitleHome extends React.Component {
  render(){
    return(
      <View style= {styles.header}>
        <Text style ={styles.text}>LINH TINH</Text>
      </View>
    )
  }
}
export default class Home extends React.Component {
  static navigationOptions = {
    headerTitle: <TitleHome />,
  };
  render() {
    return (
      <BackgroundImage style={styles.container} >
        <View style={styles.flex}>
          <View style= {styles.headerNone}>
          </View>

          <View style ={styles.content}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Cate')}>
              <Text style ={styles.textbutton}>Danh mục</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style ={styles.textbutton}>Lịch sử</Text>
            </TouchableOpacity>
          </View>
          <View style= {styles.content}>
            <TouchableOpacity style={styles.button}>
              <Text style ={styles.textbutton}>Cài đặt</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style ={styles.textbutton}>Linh tinh</Text>
            </TouchableOpacity>
          </View>
          <View style= {styles.footer}>
            <Text numberOfLines= {1} style ={styles.textfooter}>Mỗi người nhận được từ cuộc đời những gì mà mình đã bỏ vào đó.</Text>
          </View>
        </View>

      </BackgroundImage>

    );
  }
}



