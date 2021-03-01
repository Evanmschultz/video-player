import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import Player from './Player'

import { createGlobalStyle } from 'styled-components'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Player} />
      <Route
        exact
        path='/:activeVideo'
        component={Player}
      />
    </Switch>
    <GlobalStyle />
  </BrowserRouter>
)

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}
body {
  font-size: 10px;
  font-family: 'Hind', sans-serif;
}`

export default App
