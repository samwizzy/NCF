import styled from 'styled-components';

const BirdBg = styled.div`
  background-image: url(assets/images/animals/bird-eagle.png),
    url(assets/images/animals/yellow-bird.png);
  background-position: left top, right bottom;
  background-size: 300px;
  background-repeat: no-repeat;
  width: 100%;
`;
const MemberBanner = styled.div`
  background-image: url(assets/images/groups/membership.png);
  background-position: center;
  background-size: 100%;
  width: 100%;
`;
const FutureBanner = styled.div`
  background-image: url(assets/images/groups/future.png);
  background-position: center;
  background-size: 100%;
  width: 100%;
`;

export { BirdBg, MemberBanner, FutureBanner };
