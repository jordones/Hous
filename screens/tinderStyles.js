import { StyleSheet, Dimensions } from 'react-native';


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    homeImage: {
      flex: 1,
      height: null,
      width: null,
      resizeMode: 'cover',
      borderRadius: 10,
    },
    dislike: {
      borderWidth: 1,
      borderColor: 'red',
      color: 'red',
      fontSize: 32,
      fontWeight: '800',
      padding: 10,
    },
    like: {
      borderWidth: 1,
      borderColor: 'green',
      color: 'green',
      fontSize: 32,
      fontWeight: '800',
      padding: 10
    },
    titleWrapper: {
      position: 'absolute',
      bottom: 0,
      paddingLeft: 20,
      paddingBottom: 45,
    },
    titleText: {
      color: "white",
      fontSize: 20,
    },
    gradientStyle: {
      position: 'absolute',
      backgroundColor: "transparent",
      alignItems: "center",
      left: 10,
      top: 10,
      justifyContent: "center",
      width: SCREEN_WIDTH - 20,
      height: SCREEN_HEIGHT - 140,
      borderRadius: 10,
      padding: 10
    },
    moreInfo: {
      position: 'absolute',
      backgroundColor: 'transparent',
      bottom: 45,
      right: 30,
      zIndex: 555,
      height: 44,
      width: 44,
    },
});
