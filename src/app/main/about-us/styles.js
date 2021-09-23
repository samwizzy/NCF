import styled from 'styled-components';

const Event = styled.div`
  background-image: url(assets/images/nature/forest-about.png);
  background-attachment: fixed;
  background-position: bottom left;
  height: 360px;
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

export { Event, Slider };
