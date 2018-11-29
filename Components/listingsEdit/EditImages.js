import React from 'react'

import { View, Image, Text, FlatList } from 'react-native'
import Styles from './EditImagesStyles.js'

const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({
            key: `blank-${numberOfElementsLastRow}`,
            empty: true
        });
        numberOfElementsLastRow++;
    }

    return data;
};

export class EditImages extends React.Component {

    constructor(props) {
        super(props); 

    }
    renderItem = ({item}) => {
        if (item.thumbnail) {
            return(
            <View style={Styles.imageWrapper}>
                <Image style={Styles.imageStyle} source={item.thumbnail} />
                <View style={Styles.iconWrapper}><Image style={Styles.deleteImage} source={require('../../assets/icons/times.png')}/></View>
            </View>
            )
        }
        else {
            return (
            <View style={Styles.imageWrapper}>
                <View style={Styles.emptyImage}>
                </View>
                <View style={Styles.iconWrapper}><Image style={Styles.deleteImage} source={require('../../assets/icons/plus.png')}/></View>
            </View>
            )
        }
    }
    
    render() {
        var emptyItem = {
            id: this.props.listingImages.length +1,
            thumbnail: null,
        }
        var list = this.props.listingImages.concat(emptyItem)
        return(
            <FlatList
                data={formatData(list, 2)}
                renderItem={this.renderItem}
                numColumns = {2}
                keyExtractor={(index,i) => i.toString()}
            />
        )
    }
}
