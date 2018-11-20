import React from 'react';
import { StyleSheet, Text, View, Dimensions, Animated, Image, PanResponder } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;


const Listings = [
  {
    id: "1",
    title: "1 Bedroom, 1 Bathroom",
    location: "Guelph, Ontario",
    price: "$500/month",
    ammenties: {
      parking: true,
      laundry: true,
      furnished: false,
      kitchen: true,
      petFriendly: false,
      airCondition: true,
      roommates: false,
      smokeFriendly: false,
    },
    images: {
      one: require('./assets/icons/house-pictures/picture1.png'),
      two: require('./assets/icons/house-pictures/picture2.png'),
      three: require('./assets/icons/house-pictures/picture3.png'),
      four: require('./assets/icons/house-pictures/picture4.png'),
      five: require('./assets/icons/house-pictures/picture5.png'),
    },
    description: "A room for rent in a shared house for students, available immediately, 15 minutes walk to U of G, close to Stone Road Mall and Metro grocery. Rent includes heat, hydro, central air, internet and all utilities, laundry is on site with limited parking as well. Plus the house is cleaned once a month by a professional cleaning service.",
  },
  { 
    id: "2",
    images: {
      one: require('./assets/house2.jpg')
    },
  },
  { 
    id: "3", 
    images: {
      one: require('./assets/house3.jpg')
    },
  },
  { 
    id: "4", 
    images: {
      one: require('./assets/house4.jpg')
    },
  },
  { 
    id: "5", 
    images: {
      outputRange: require('./assets/house5.jpg')
    },
  }
]
export class TinderDemo extends React.Component {

  constructor() {
    super();
    this.position = new Animated.ValueXY();
    this.state = {
      currentIndex: 0
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

  renderListings = () => {
    return Listings.map((item, i) => {

      if (i < this.state.currentIndex) {
        return null;
      }
      else if (i == this.state.currentIndex) {
        return(
          <Animated.View
            {... this.PanResponder.panHandlers}
            key={ item.id }
            style={[this.rotateAndTranslate, { height:SCREEN_HEIGHT-120, width:SCREEN_WIDTH, padding: 10, position: 'absolute' }]}>
              <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg'}], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
                <Text style={styles.like}>LIKE</Text>
              </Animated.View>
              <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg'}], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
                <Text style={styles.dislike}>NOPE</Text>
              </Animated.View>
              <Image
                style={ styles.homeImage }
                source={ item.images.one }
              />
          </Animated.View>
        );
      }
      else {
        return(
          <Animated.View
            key={ item.id }
            style={[ {opacity: this.nextCardOpacity, transform:[{scale:this.nextCardScale}]}, {height:SCREEN_HEIGHT-120, width:SCREEN_WIDTH, padding: 10, position: 'absolute' }]}>
              <Image
                style={styles.homeImage}
                source={ item.images.one }
              />
          </Animated.View>
        );
      }

    }).reverse()
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height:5}}>

        </View>
        <View style={{flex:1}}>
          { this.renderListings() }
        </View>
        <View style={{height:60}}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeImage: {
    flex: 1, 
    height: null, 
    width: null, 
    resizeMode: 'cover', 
    borderRadius: 10,
  },
  dislike: {
    borderWidth: 1, 
    borderColor: 'red', 
    color: 'red', 
    fontSize: 32, 
    fontWeight: '800', 
    padding: 10,
  },
  like: {
    borderWidth: 1, 
    borderColor: 'green', 
    color: 'green', 
    fontSize: 32, 
    fontWeight: '800', 
    padding: 10
  },
});
