import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Modal,
  Animated,
  Image,
} from 'react-native';


import Phone from '/HNL/HNl/assests/svg/Phone.svg';
import Location from '/HNL/HNl/assests/svg/Location.svg';
import Circle from '/HNL/HNl/assests/svg/Circle.svg';
import ButtonImage from '/HNL/HNl/assests/svg/ButtonImage.svg';

const HomeScreen = () => {
    const [isCardVisible, setIsCardVisible] = useState(false);
    const [fadeAnim] = useState(new Animated.Value(0));
  
    const toggleCardVisibility = () => {
      setIsCardVisible(!isCardVisible);
      Animated.timing(fadeAnim, {
        toValue: isCardVisible ? 0 : 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    };
  
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleCardVisibility}>
          <Text>Show Card</Text>
        </TouchableOpacity>
        <View>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg' }}
          style={{ width: 360, height: 800 }}
        />
      </View>
  
        <Modal visible={isCardVisible} animationType="fade" transparent>
          <View style={styles.modalBackground} />
          <Animated.View style={[styles.card, {opacity: fadeAnim}]}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                 //backgroundColor:'red'
              }}>
              <Text style={styles.name}>Profile</Text>
              <TouchableOpacity onPress={toggleCardVisibility}>
                <ButtonImage style={styles.buttonstyle} />
              </TouchableOpacity>
            </View>
            <View style={styles.header1}>
              <Image
              source={require('/HNL/HNl/assests/Images/image.png')}
                // source={require('../HNl/assests/Images/image.png')}
                style={styles.avatar}
            
              />
            </View>
            <View style={{marginLeft: 0}}>
              <View style={[styles.header]}>
                <Text style={[styles.name, {flex: 1}]}>
                  Raza Istiaq <Text style={styles.managername}>(Manager)</Text>
                </Text>
                <View>
                  <Text style={styles.telconame}>Telco</Text>
                </View>
              </View>
              <View>
                <Text style={styles.field}>ERP ID: 12300045678</Text>
              </View>
              <View style={styles.phonefield}>
                <Phone />
                <View style={styles.headerText}>
                  <Text style={styles.role}>0310 1234567</Text>
                </View>
              </View>
              <View style={styles.Locationfield}>
                <Location />
                <View style={styles.headerText}>
                  <Text style={styles.role}>Model Town Lahore</Text>
                </View>
              </View>
              <View style={styles.phonefield}>
                <Text style={styles.teamname}>Team Name:</Text>
                <View style={styles.headerText}>
                  <Text style={styles.teamtelco}>Team Telco</Text>
                </View>
              </View>
            </View>
  
            {/* Nested Card */}
  
            <View style={styles.nestedCard}>
              <Text style={styles.nestedCardText}>Team Members</Text>
  
              <View style={styles.headercard}>
                <View style={[styles.headerText, {flex: 1}]}>
                  <Circle width="20" height="20" />
                </View>
                {/* <View style={styles.headercardText}> */}
                <Text style={[styles.cardtext, {flex: 2.4}]}>Ijaz Ahmad</Text>
                {/* </View> */}
                {/* <View style={styles.headercardText}> */}
                <Text style={[styles.cardnumber, {flex: 3}]}>123456789</Text>
                {/* </View> */}
              </View>
  
              <View style={styles.headercard}>
                <View style={[styles.headerText, {flex: 1}]}>
                  <Circle width="20" height="20" />
                </View>
                {/* <View style={styles.headercardText}> */}
                <Text style={[styles.cardtext, {flex: 2.4}]}>Ijaz Ahmad</Text>
                {/* </View> */}
                {/* <View style={styles.headercardText}> */}
                <Text style={[styles.cardnumber, {flex: 3}]}>123456789</Text>
                {/* </View> */}
              </View>
  
              <View style={styles.headercard}>
                <View style={[styles.headerText, {flex: 1}]}>
                  <Circle width="20" height="20" />
                </View>
                {/* <View style={styles.headercardText}> */}
                <Text style={[styles.cardtext, {flex: 2.4}]}>Ijaz Ahmad</Text>
                {/* </View> */}
                {/* <View style={styles.headercardText}> */}
                <Text style={[styles.cardnumber, {flex: 3}]}>123456789</Text>
                {/* </View> */}
              </View>
              <View style={styles.headercard}>
                <View style={[styles.headerText, {flex: 1}]}>
                  <Circle width="20" height="20" />
                </View>
                {/* <View style={styles.headercardText}> */}
                <Text style={[styles.cardtext, {flex: 2.4}]}>Ijaz Ahmad</Text>
                {/* </View> */}
                {/* <View style={styles.headercardText}> */}
                <Text style={[styles.cardnumber, {flex: 3}]}>123456789</Text>
                {/* </View> */}
              </View>
            </View>
            {/* End of Nested Card */}
            {/* <Button title="Close" onPress={toggleCardVisibility} /> */}
          </Animated.View>
        </Modal>
      </View>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex',
      alignItems: 'flex-start', // Align items to the start horizontally
    },
    modalBackground: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent red color
    },
    card: {
      //flex: 1,
      // justifyContent: 'flex-start',
      // alignItems: 'flex-start',
      // width: 320,
      // height: 560,
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 25,
      elevation: 5,
      margin: 20,
    },
    header1: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      justifyContent: 'center',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 20,
    },
    headercard: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginTop: 10,
    },
    phonefield: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    Locationfield: {
      flexDirection: 'row',
      marginBottom: 20,
    },
  
    Location: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 20,
    },
    buttonstyle: {
      //  marginLeft:190,
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
      // marginLeft: 90,
    },
    headerText: {
      marginLeft: 10,
    },
    headercardText: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    name: {
      fontFamily: 'Montserrat-Medium',
      fontSize: 20,
      lineHeight: 24.38,
      color: '#1D1D1D',
    },
    telconame: {
      color: '#1D1D1D',
      fontFamily: 'Montserrat-Bold',
      fontSize: 16,
      lineHeight: 19.5,
    },
  
    managername: {
      color: '#1D1D1D',
      fontFamily: 'Montserrat-Medium',
      marginLeft: 10,
      fontSize: 16,
      lineHeight: 19.5,
    },
  
    role: {
      fontFamily: 'Montserrat-Medium',
      fontSize: 16,
      color: '#1D1D1D',
      lineHeight: 19.5,
    },
    cardtext: {
      fontFamily: 'Montserrat-Medium',
      fontSize: 12,
      color: '#1D1D1D',
      lineHeight: 14.63,
    },
    cardnumber: {
      fontFamily: 'Montserrat-Medium',
      fontSize: 12,
      color: '#1D1D1D',
      lineHeight: 14.5,
      // marginRight:20,
    },
  
    teamtelco: {
      fontFamily: 'Montserrat-Bold',
      fontSize: 16,
      color: '#1D1D1D',
      lineHeight: 19.5,
    },
  
    field: {
      fontFamily: 'Montserrat-Bold',
      color: '#1D1D1D',
      fontSize: 16,
      marginBottom: 16,
      lineHeight:19.5,
    },
    field1: {
      fontFamily: 'Montserrat-Regular',
      marginBottom: 16,
    },
    teamname: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 16,
      lineHeight:19.5,
    },
  
    nestedCard: {
      backgroundColor: '#EDEDED',
      padding: 10,
      borderRadius: 10,
    },
    nestedCardText: {
      fontFamily: 'Montserrat-Bold',
      fontSize: 16,
      // marginBottom: 5,
      color: '#1D1D1D',
    },
  });
  