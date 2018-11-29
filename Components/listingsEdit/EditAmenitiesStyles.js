import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
  },
  toggleSwitchStyle: {
    position: 'absolute',
    marginBottom: 8,
    right:10,
    bottom:0,
    alignSelf: 'flex-end'
  }
  
});