import styled from "styled-components"

const NatureDiv = styled.div`
  background-image: url(assets/images/nature/stats.png);
`
const Event = styled.div`
  background-image: url(assets/images/nature/event-1.png);
	height: 600px;
`
const EventLeft = styled.div`
  background-image: url(assets/images/nature/event-2.png);
`
const EventRight = styled.div`
  background-image: url(assets/images/nature/event-3.png);
`

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
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

export {
	NatureDiv,
	Event,
	EventLeft,
	EventRight,
	Slider
}