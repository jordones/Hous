import React from 'react';
import {TouchableHighlight, Text, View, Dimensions, Animated, Image, PanResponder } from 'react-native';

import {BottomBar} from './Components/BottomBar/BottomBar.js';
import { ListingInfo } from './Components/ListingInfo/ListingInfo.js'
import { LinearGradient } from 'expo';
import Style from './tinderStyles.js'


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const Listings = [
  {
    id: "1",
    title: "1 Bedroom, 1 Bathroom",
    location: "Guelph, Ontario",
    price: "$500/month",
    amenities: {
      "Parking": true,
      "Laundry": true,
      "Furnished": false,
      "Full Kitchen": true,
      "Pet Friendly": false,
      "Air Condition": true,
      "Roommates": false,
      "Smoker Friendly": false,
    },
    images: [
      {
        id: 1,
        thumbnail: require('./assets/icons/house-pictures/picture1.png')
      },
      {
        id: 2,
        thumbnail: require('./assets/icons/house-pictures/picture2.png'),
      },
      {
        id: 3,
        thumbnail: require('./assets/icons/house-pictures/picture3.png'),
      },
      {
        id: 4,
        thumbnail: require('./assets/icons/house-pictures/picture4.png'),
      },
      {
        id: 5,
        thumbnail: require('./assets/icons/house-pictures/picture5.png'),
      },
    ],
    description: "A room for rent in a shared house for students, available immediately, 15 minutes walk to U of G, close to Stone Road Mall and Metro grocery. Rent includes heat, hydro, central air, internet and all utilities, laundry is on site with limited parking as well. Plus the house is cleaned once a month by a professional cleaning service.",
  },
  { 
    id: "2",
    title: "Pineapple under the Sea",
    location: "Bikini Bottom, USA",
    price: "$800/month",
    amenities: {
      "Parking": false,
      "Laundry": true,
      "Furnished": false,
      "Full Kitchen": true,
      "Pet Friendly": false,
      "Air Condition": true,
      "Roommates": false,
      "Smoker Friendly": false,
    },
    images: [
      {
        id: 1,
        thumbnail: require('./assets/house2.jpg')
      }
    ],
    description: "124 Conch Street is the address of the pineapple house where SpongeBob SquarePants, his pet snail Gary, and pet scallop Shelley live in. The house is three stories high and fully furnished.",
  },
  { 
    id: "3", 
    title: "Home with $200 plasma screen tv",
    location: "Scranton, PA",
    price: "$500/month",
    amenities: {
      "Parking": true,
      "Laundry": true,
      "Furnished": true,
      "Full Kitchen": true,
      "Pet Friendly": true,
      "Air Condition": true,
      "Roommates": false,
      "Smoker Friendly": true,
    },
    images: [
      {
        id: 1,
        thumbnail: require('./assets/house3.jpg')
      }
    ],
    description: "This immaculate, professionally-designed 2-story condo with a private deck and patio invites comfort, and exudes modern elegance. With 2 bedrooms, 2 and a half baths, generous living space and stylish finishes, you'll enjoy a perfect setting for relaxing and entertaining.",
  },
  { 
    id: "4", 
    title: "Single room",
    location: "Etobicoke, Ontario",
    price: "$900/month",
    amenities: {
      "Parking": false,
      "Laundry": false,
      "Furnished": false,
      "Full Kitchen": true,
      "Pet Friendly": true,
      "Air Condition": true,
      "Roommates": true,
      "Smoker Friendly": false,
    },
    images: [
      {
        id: 1,
        thumbnail: require('./assets/house4.jpg')
      }
    ],
    description: "Main floor furnished room in Etobicoke for man. Bright room in excellent condition Wi-fi internet Laundry in the basement Utilities included We prefer full time working man. Price 800 Please contact the owner",
  },
  { 
    id: "5", 
    title: "South Res",
    location: "Guelph, Ontario",
    price: "$800/month",
    amenities: {
      "Parking": false,
      "Laundry": false,
      "Furnished": false,
      "Full Kitchen": false,
      "Pet Friendly": false,
      "Air Condition": false,
      "Roommates": false,
      "Smoker Friendly": false,
    },
    images: [
      {
        id: 1,
        thumbnail: require('./assets/house5.jpg')
      }
    ],
    description: "Our largest residence community is also getting a summer face lift, with new cladding that will add refreshed colour to portions of its unique architecture.  Here is a glimpse of what you can expect to see in the Fall of 2018.",
  }
]
export class TinderDemo extends React.Component {

  constructor() {
    super();
    this.position = new Animated.ValueXY();
    this.state = {
      currentIndex: 0,
      isHidden: true
    };

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    });

    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
    ]
    };

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    });

    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    });

    this.nextCardOpacity = this.position.x.interpolate({
        inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2],
        outputRange: [1, 0, 1],
        extrapolate: 'clamp'
    });

    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp'
     });

  }

  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({x: gestureState.dx, y: gestureState.dy})
      },
      onPanResponderRelease: (evt, gestureState) => {
          if(gestureState.dx > 120) {
            Animated.spring(this.position, {
              toValue:{ x: SCREEN_WIDTH + 50, y: gestureState.dy }
            }).start( () => {
                this.setState({currentIndex: this.state.currentIndex + 1
              }, () => {
                this.position.setValue({x: 0, y: 0});
              });
            });
          }
          else if(gestureState.dx < -120) {
            Animated.spring(this.position, {
              toValue:{ x: -SCREEN_WIDTH - 50, y: gestureState.dy }
            }).start( () => {
                this.setState({currentIndex: this.state.currentIndex + 1
              }, () => {
                this.position.setValue({x: 0, y: 0});
              });
            });
          }
          else {
            Animated.spring(this.position, {
              toValue:{ x: 0, y: 0},
              friction: 4
            }).start();
          }
      }
    });
  }

  animateLike() {
    Animated.spring(this.position, {
      toValue:{ x: SCREEN_WIDTH + 50, y: 0 }
    }).start( () => {
        this.setState({
          currentIndex: this.state.currentIndex + 1,
          isHidden: true
      }, () => {
        this.position.setValue({x: 0, y: 0});
      });
    });
  }
  animateDislike(){
    Animated.spring(this.position, 
      { toValue: { x: -SCREEN_WIDTH - 50, y: 0 }
    }).start(() => {
      this.setState({ 
        currentIndex: this.state.currentIndex + 1,
        isHidden: true
      }, () => {
        this.position.setValue({ x: 0, y: 0 });
      });
    });
  }

 animateBack(){
    this.setState({ 
      currentIndex: this.state.currentIndex - 1 ,
      isHidden: true
    });
 }

  moreInfoClick = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  renderListings = () => {
    return Listings.map((item, i) => {

      if (i < this.state.currentIndex) {
        return null;
      }
      else if (i == this.state.currentIndex) {
        return(
          <View key={ item.id } >
            <Animated.View
              {... this.PanResponder.panHandlers}
              style={[this.rotateAndTranslate, { height:SCREEN_HEIGHT-120, width:SCREEN_WIDTH, padding: 10, position: 'absolute' }]}>
                <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg'}], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
                  <Text style={Style.like}>LIKE</Text>
                </Animated.View>
                <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg'}], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
                  <Text style={Style.dislike}>NOPE</Text>
                </Animated.View>
                <Image
                  style={ Style.homeImage }
                  source={ item.images[0].thumbnail}
                />
                <LinearGradient
                  style={Style.gradientStyle}
                  colors = {['rgba(0,0,0,0)', 'rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(0,0,0,0.5)','rgba(0,0,0,0.8)' ]} >
                </LinearGradient>
                <TouchableHighlight 
                  style={Style.moreInfo}
                  onPress={this.moreInfoClick} 
                  underlayColor = "transparent">
                  <Image
                    source={require('./assets/icons/moreInfo.png')} />
                </TouchableHighlight> 
                <View style={Style.titleWrapper}>
                  <Text style={Style.titleText}>{ item.title }</Text>
                  <Text style={Style.titleText}>{ item.location } </Text>
                  <Text style={Style.titleText}>{ item.price }</Text>
                </View>
            </Animated.View>
            <View style={{marginBottom: 45,  borderBottomWidth: 15, borderBottomColor: 'white'}}>
            {!this.state.isHidden &&  <ListingInfo listingObject = { item } closeInfo = { this.moreInfoClick.bind(this) } />}
            </View>
          </View>
        );
      }
      else {
        return(
          <Animated.View
            key={ item.id }
            style={[ {opacity: this.nextCardOpacity, transform:[{scale:this.nextCardScale}]}, {height:SCREEN_HEIGHT-120, width:SCREEN_WIDTH, padding: 10, position: 'absolute' }]}>
              <Image
                style={Style.homeImage}
                source={ item.images[0].thumbnail }/>
              <LinearGradient
                style={Style.gradientStyle}
                colors = {['rgba(0,0,0,0)', 'rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(0,0,0,0.5)','rgba(0,0,0,0.8)' ]} >
              </LinearGradient>
              <TouchableHighlight 
                style={Style.moreInfo}
                onPress={this.moreInfoClick} 
                underlayColor = "transparent">
                <Image
                  source={require('./assets/icons/moreInfo.png')} />
              </TouchableHighlight> 
              <View style={Style.titleWrapper}>
                <Text style={Style.titleText}>{ item.title }</Text>
                <Text style={Style.titleText}>{ item.location } </Text>
                <Text style={Style.titleText}>{ item.price }</Text>
              </View>
          </Animated.View>
        );
      }

    }).reverse()
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex:1}}>
          { this.renderListings() }
        </View>
        <BottomBar
         updateLike = { this.animateLike.bind(this) }
         updateDislike = { this.animateDislike.bind(this) }
         updateBack = { this.animateBack.bind(this) }
        />
      </View>
    );
  }
}
