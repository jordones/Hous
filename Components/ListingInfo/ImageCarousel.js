import React, { Component } from 'react';

import styled from 'styled-components/native';
import Carousel, { Pagination } from 'react-native-snap-carousel'; 

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
          containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
          dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 8,
              backgroundColor: 'rgba(255, 255, 255, 0.92)'
          }}
          inactiveDotStyle={{
              // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
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
          data={this.state.images}
          renderItem={this._renderItem.bind(this)}
          onSnapToItem={(index) => this.setState({ activeSlide: index }) }
          sliderWidth={360}
          itemWidth={256}
          layout={'default'}
          firstItem={0}
        />
        { this.pagination }
      </CarouselBackgroundView>
    );
  };
}

const CurrentVideoImage = styled.Image`
  top: 25;
  box-shadow: 5px 10px;
  width: 256;
  height: 350;
  border-radius: 10;
`;

const ThumbnailBackgroundView = styled.View`
  justify-content: center;
  align-items: center;
  width: 256; 
`;

const CarouselBackgroundView = styled.View`
  background-color: white;
  height: 350;
  width: 100%;
`;
