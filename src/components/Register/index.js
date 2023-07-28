import {Component} from 'react'
import Header from '../Header'
import MeetupContext from '../../context/MeetupContext'
import './index.css'

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

class Register extends Component {
  state = {isError: false, errorMsg: '', topicName: topicsList[0].displayText}

  render() {
    return (
      <MeetupContext.Consumer>
        {value => {
          const {
            name,
            topic,

            setNameAndTopic,
            onChangeName,
            onChangeTopic,
          } = value
          const {history} = this.props
          const {isError, errorMsg, topicName} = this.state

          const nameInput = event => {
            onChangeName(event)
          }

          const topicInput = event => {
            // const {history} = this.props
            this.setState({topicName: event.target.value})

            onChangeTopic(event)
          }

          const register = event => {
            event.preventDefault()
            if (name === '') {
              this.setState({isError: true, errorMsg: 'Please enter your name'})
            } else {
              this.setState({isError: false})
              setNameAndTopic()
              history.replace('/')
            }
          }

          return (
            <div className="register-container">
              <Header />
              <div className="content-container">
                <img
                  className="register-image"
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png "
                  alt="website register"
                />
                <div className="input-container">
                  <h1 className="register-heading">Let us join</h1>
                  <form onSubmit={event => register(event)}>
                    <label className="label-name" htmlFor="name">
                      NAME
                    </label>
                    <br />
                    <input
                      onChange={event => nameInput(event)}
                      className="input-box"
                      id="name"
                      type="text"
                      value={name}
                    />
                    <br />
                    <label className="label-name" htmlFor="topics">
                      TOPICS
                    </label>
                    <br />
                    <select
                      className="input-box"
                      id="topics"
                      onChange={event => topicInput(event)}
                      value={topicName}
                    >
                      {topicsList.map(each => (
                        <option key={each.id} value={each.id}>
                          {each.displayText}
                        </option>
                      ))}
                    </select>
                    <br />
                    <button type="submit" className="register-btn">
                      Register Now
                    </button>
                    <p>{isError && errorMsg}</p>
                  </form>
                </div>
              </div>
            </div>
          )
        }}
      </MeetupContext.Consumer>
    )
  }
}

export default Register
