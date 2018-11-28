import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    listContainer: {
        padding: 20,
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        color: 'black',
        opacity: 0.6
    },
    ListingWrapper: {
        position: 'relative',
        borderColor: 'rgba(0,0,0,0.2)',
        borderBottomWidth: 2,
        flexDirection: 'row',
        flex: 1,
    },
    mainButtonImage: {
        width:60,
        height:60,
        marginTop:10,
        borderRadius: 50,
        marginBottom: 10,
    },
    listingHeader: {
        marginTop:10,
        fontSize: 18,
        opacity: 0.75,
        paddingRight:80,
    },
    imageShadow: {
        shadowOffset:{  width: 2,  height: 0  },
        shadowColor: "black",
        shadowOpacity: 0.8,
        borderRadius: 50,
        shadowRadius: 8,
        marginRight: 10,
        marginLeft: 5,
    },
    listingPreviewText: {
        fontSize: 14,
        opacity: 0.8,
    },
    unavailable: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 50,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    textLeased: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: 24,
        fontWeight: '600'
    }
});
