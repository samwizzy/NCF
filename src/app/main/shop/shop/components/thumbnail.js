import styled from "styled-components"

const Thumbnail = styled.div`
  position: relative;
  height: 100%;

  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;

	.swiper-container {
		width: 100%;
		height: 100%;
	}

	.swiper-slide {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.swiper-slide img {
		display: block;
		width: 100%;
	}

	@media only screen and (min-width: 769px) {
		.swiper-slide:first-child {
			transition: transform 100ms;
		}

		.swiper-slide:first-child img {
			transition: box-shadow 500ms;
		}

		.swiper-slide.swiper-slide-active:first-child {
			transform: translateX(50%);
			z-index: 2;
		}

		.swiper-slide.swiper-slide-active:first-child img {
			box-shadow: 0px 32px 80px rgba(0, 0, 0, 0.35);
		}

		.swiper-slide:nth-child(2) {
			transition: transform 100ms;
		}

		.swiper-slide.swiper-slide-next:nth-child(2) {
			transform: translateX(55%);
			z-index: 1;
		}

		.swiper-container[dir="rtl"] .swiper-slide.swiper-slide-active:first-child {
			transform: translateX(-50%);
		}

		.swiper-container[dir="rtl"] .swiper-slide.swiper-slide-next:nth-child(2) {
			transform: translateX(-55%);
		}
	}
`

export default Thumbnail