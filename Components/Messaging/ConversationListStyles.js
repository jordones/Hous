import { StyleSheet } from 'react-native';

export default StyleSheet.create({
      listContainer: {
          flex:3,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'stretch',
          paddingLeft: 10,
          paddingRight: 10
      },
      scroll: {
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'stretch'
      },
      title: {
          alignSelf: 'flex-start',
          paddingTop: 30,
          paddingLeft: 5,
          paddingBottom: 5,
          fontSize: 18,
          color: 'rgba(0, 0, 0, 0.8)'
      },
      cardRoot: {
        height: 90,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth : 2,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
      },
      imageContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: -20,
        marginRight: -10,
        padding: 0
      },
      rightContainer: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      },
      text: {
          alignContent: 'flex-start',
          color: 'rgba(0, 0, 0, 0.9)',
          fontSize: 16
      },
      message : {
          alignContent: 'flex-start',
          color: 'rgba(0, 0, 0, 0.6)',
          fontSize: 12
      }

    });
