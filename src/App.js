import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import Main from './components/main/mainContainer'

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App;
