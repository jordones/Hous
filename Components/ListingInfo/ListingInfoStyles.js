import { StyleSheet } from 'react-native';
import {Dimensions} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  scrollViewClose: {
    flexGrow: 1,
    zIndex: 500,
    backgroundColor: 'white'
  },
  headerRow: {
    flex:1,
    padding: 5,
    flexDirection: 'row',
  },
  titleStyle: {
    fontSize: 22,
    fontWeight: '500',
    color: 'black',
    opacity: 0.6
  },
  headerStyle: {
    fontSize: 20,
    paddingLeft: 8,
    color: 'black',
    opacity: 0.6
  },
  subHeaderStyle: {
    fontSize: 20,
    paddingLeft: 8,
    marginBottom: 10,
    color: 'black',
    opacity: 0.6
  },
  iconStyle: {
    marginRight: 7,
    opacity: 0.5,
    resizeMode: "contain",
    height:25,
  },
  sectionSeperator: {
    height: 2,
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    borderRadius: 10

  },
  descriptionStyle: {
    padding: 8,
    color: 'rgba(0,0,0,0.7)',
    fontSize: 18,
    paddingBottom: 30
  },
  amenitiesRow: {
    padding: 5,
    flexDirection: 'row',
    borderBottomWidth: 2,
    marginBottom: 10,
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },
  imageWrapper: {
    width:50
  },
  amenitiesImage: {
    opacity: 0.5,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  amenitiesText: {
    fontSize: 18,
    color: 'rgba(0,0,0,0.7)',
    paddingTop:3,
  },
  amenitiesStatus: {
     position: 'absolute', 
     right: 20,
     top: 8,
     width: 30,
     opacity: 0.7,
     resizeMode: 'contain',
  }
  
});