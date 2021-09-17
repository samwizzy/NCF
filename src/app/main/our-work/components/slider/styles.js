import styled from 'styled-components';

const Slider = styled.div`
  position: relative;
  height: 700px;
  border: 1px solid #eee;

  background: #eee;
  font-family: 'Roboto', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: rgb(39, 38, 38);
  margin: 0;
  padding: 0;

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    font-size: 18px;
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
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-slide .slider-wrapper {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .slider-text {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .field-bottom {
    transform: translate(10%, 320px);
  }

  @media screen and (max-width: 640px) {
    .field-bottom {
      transform: translate(0%, 0%);
    }
  }
`;

export default Slider;
