import PlaylistHeader from '../PlaylistHeader'
import PlaylistItems from '../containers/PlaylistItems'
import DarkMode from '../Darkmode'

import styled from 'styled-components'

const Playlist = ({
  videos,
  active,
  darkModeCallback,
  darkMode
}) => (
  <StyledPlaylist>
    <DarkMode
      darkModeCallback={darkModeCallback}
      darkMode={darkMode}
    />
    <PlaylistHeader active={active} total={videos.length} />
    <PlaylistItems videos={videos} active={active} />
  </StyledPlaylist>
)

const StyledPlaylist = styled.div`
  box-flex: 1;
  flex: 1 1 450px;
  overflow: hidden;
  color: white;
  /* height: 0;
  padding-top:50px;
  padding-bottom: 36%; */

  @media screen and (max-width: 1400px) {
    width: 100%;
    display: block;
  }
`

export default Playlist
