import styled from 'styled-components';

const ForestBanner = styled.div`
  background-image: url(assets/images/banner/forest.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 700px;
`;

const ForestBg = styled.div`
  background-image: url(assets/images/nature/forest-png.png);
  background-repeat: no-repeat;
  background-position: bottom right;
  background-attachment: fixed;
`;

const PrivacyBg = styled.div`
  background-image: url(assets/images/banner/ants.png);
  background-size: 400px;
  background-repeat: no-repeat;
  background-position: right 50px;
`;

const Event = styled.div`
  background-image: url(assets/images/nature/forest-about.png);
  height: 300px;
`;

const MarineBg = styled.div`
  background-image: url(assets/images/animals/fishes.svg);
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: 400px;
`;

const Slider = styled.div`
  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: justify;
    background: transparent;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    object-fit: cover;
  }
`;

export { ForestBanner, ForestBg, Event, MarineBg, PrivacyBg, Slider };
