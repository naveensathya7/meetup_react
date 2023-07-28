import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import MeetupContext from './context/MeetupContext'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {
    name: '',
    topic: '',
    isUnregistered: true,
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeTopic = event => {
    const topicName = topicsList.filter(
      each => each.id === event.target.value,
    )[0].displayText
    // console.log(topicName)
    this.setState({topic: topicName})
  }

  setNameAndTopic = () => {
    this.setState({isUnregistered: false})
  }

  moveToHome = () => {
    console.log('Hi')
    const {history} = this.props
    console.log(history)
    // history.push('/')
  }

  render() {
    const {name, topic, isUnregistered} = this.state

    return (
      <MeetupContext.Provider
        value={{
          name,
          topic,
          topicsList,
          setNameAndTopic: this.setNameAndTopic,
          isUnregistered,
          onChangeName: this.onChangeName,
          onChangeTopic: this.onChangeTopic,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}

export default App
