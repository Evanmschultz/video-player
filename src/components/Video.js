import ReactPlayer from 'react-player'

import styled from 'styled-components'

const Video = ({
  active,
  autoplay,
  endCallback,
  progressCallback
}) => (
  <StyledVideo>
    <StyledVideoWrapper>
      <ReactPlayer
        width='100%'
        height='100%'
        style={{ position: 'absolute', top: 0 }}
        playing={autoplay}
        controls={true}
        url={active.video}
        onEnded={endCallback}
        onProgress={progressCallback}
      />
    </StyledVideoWrapper>
  </StyledVideo>
)

const StyledVideo = styled.div`
  position: relative;
  -webkit-box-flex: 2;
  -ms-flex: 2 0 900px;
  flex: 2 0 900px;

  @media screen and (max-width: 1400px) {
    width: 100%;
    display: block;
  }
`

const StyledVideoWrapper = styled.div`
  width: 100%;
  padding-bottom: 56.25%;
  position: relative;
`

export default Video
