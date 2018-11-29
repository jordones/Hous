import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    imageWrapper : {
        width: '45%',
        alignItems: 'center',
        margin: 10,
        flex: 0
    },
    imageStyle: {
        width: '100%',
        height: 200,
        borderRadius: 5,
        alignSelf: 'center',
        resizeMode: 'cover',
    },
    emptyImage: {
        width: '100%',
        height: 200,
        borderRadius: 5,
        alignSelf: 'center',
        backgroundColor: 'rgba(0,0,0,0.25)',
    },
    iconWrapper: {
      position: 'absolute',
      bottom: 10,
      right: 10,
      padding: 5,
      borderRadius: 50,  
      backgroundColor: 'rgba(255,255,255,0.8)',
    },
    deleteImage: {
        height: 18,
        width: 18,
        tintColor: 'black',
        opacity: 0.8,
    },
});
