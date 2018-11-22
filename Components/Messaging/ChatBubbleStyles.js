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
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5
  },
  mainButtonImage: {
      width:40,
      height:40
  },
  title: {
      alignSelf: 'center',
      marginBottom: 5
  }
});
