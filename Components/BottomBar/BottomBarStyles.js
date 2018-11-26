import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    backgroundColor: "white",
    shadowOffset:{  width: 0,  height: 2  },
    shadowColor: "black",
    shadowOpacity: 0.5,
    elevation: 3,
    borderRadius: 50,
    shadowRadius: 8,
    alignSelf: 'center',
    padding:10,
  },
  mainButtonImage: {
      width:40,
      height:40
  },
  smallButtonImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    opacity: 0.5,
  },
  bottomBar: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    height: 60,
    marginBottom: 10,
    position: 'relative'
  }
});