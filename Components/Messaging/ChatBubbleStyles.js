import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        backgroundColor: "white",
        shadowOffset:{  width: 0,  height: 2  },
        shadowColor: "black",
        shadowOpacity: 1,
        elevation: 3,
        borderRadius: 30,
        shadowRadius: 8,
        alignSelf: 'center',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5
    },
    mainButtonImage: {
          width:60,
          height:60,
          borderRadius: 30,
      },
    title: {
          alignSelf: 'center',
          marginBottom: 5,
          color: 'rgba(0, 0, 0, 0.6)',
          fontSize: 12
      }
});
