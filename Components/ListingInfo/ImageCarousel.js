import React, { Component } from 'react';

import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel'; 

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class ThumbnailCarousel extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
    };
    images = this.props.listingImages
    this.props = props;
    this._carousel = {};
    this.init();
  }

  componentDidMount(){
    this.setState({
      activeSlide: 0
    })
  }
  

  init() {
    this.state = {
      images,
      activeSlide: 1
    }
  }

  get pagination () {
    const { images,activeSlide } = this.state;
    return (
        <Pagination
          dotsLength={images.length}
          activeDotIndex={activeSlide}
          carouselRef={this._carousel}
          containerStyle={{position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}
          dotStyle={{
              width: 20,
              height: 20,
              borderRadius: 50,
              marginHorizontal: 8,
              backgroundColor: 'white'
          }}
          inactiveDotOpacity={0.7}
          inactiveDotScale={0.75}
          tappableDots={true}
        />
    );
  }

  _renderItem = ({ item, index }) => {
    return (
      <ThumbnailBackgroundView>
          <CurrentVideoImage source={item.thumbnail} />
      </ThumbnailBackgroundView>
    );
  };

  render = () => {
    return (
      <CarouselBackgroundView>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          loop = {true}
          data={this.state.images}
          renderItem={this._renderItem.bind(this)}
          onSnapToItem={(index) => this.setState({ activeSlide: index }) }
          sliderWidth={SCREEN_WIDTH}
          itemWidth={SCREEN_WIDTH}
          layout={'default'}
          firstItem={0}
        />
        { this.pagination }
      </CarouselBackgroundView>
    );
  };
}

const CurrentVideoImage = styled.Image`
  box-shadow: 5px 10px;
  width: 100%;
  height: 400;
`;

const ThumbnailBackgroundView = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%; 
`;

const CarouselBackgroundView = styled.View`
  background-color: white;
  height: 400;
  width: 100%;
`;
