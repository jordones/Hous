import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    scrollViewClose: {
        flexGrow: 1,
        zIndex: 500,
        backgroundColor: 'white',
        paddingTop:10,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 20,
    },
    ListingRow: {
        paddingLeft: 5,
        paddingBottom: 8,
        flexDirection: 'row',
        borderBottomWidth: 2,
        marginBottom: 10,
        borderBottomColor: 'rgba(0,0,0,0.2)',
    },
    listingEditText: {
        fontSize: 20,
        fontWeight: '500',
        color: 'rgba(0,0,0,0.6)'
    },
    toggleSwitchStyle: {
        position: 'absolute',
        marginBottom: 8,
        right:0,
        bottom:0,
        alignSelf: 'flex-end'
    },
    listingEditHeader: {
        fontSize: 20,
        fontWeight: '500',
        color: 'rgba(0,0,0,0.6)',
    },
    inputStyle: {
        flex:1,
        width: '100%',
        fontSize: 18,
        borderBottomWidth: 3,
        borderBottomColor: 'rgba(0,0,0,0.25)'
    },
    rowPadding: {
        paddingBottom: 10,
    },
    descriptionInput: {
        flex:1,
        width: '100%',
        fontSize: 18,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop:10,
        paddingBottom: 10,
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 5,
    }
});
