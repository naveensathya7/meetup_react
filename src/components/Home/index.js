import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'
import MeetupContext from '../../context/MeetupContext'

class Home extends Component {
  onClickRegister = () => {
    const {history} = this.props
    history.push('/register')
  }

  renderRegisteredView = obj => {
    const {name, topic} = obj
    return (
      <div className="unregistered-section">
        <h1 className="registered-heading">Hello {name}</h1>
        <h3 className="registered-desc">Welcome to {topic}</h3>

        <img
          className="unregistered-image"
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
        />
      </div>
    )
  }

  renderUnregisteredView = () => (
    <div className="unregistered-section">
      <h1 className="unregistered-heading">Welcome to Meetup</h1>
      <p className="unregistered-desc">Please register for the topic</p>
      <Link to="/register">
        <button className="register-btn" type="button">
          Register
        </button>
      </Link>

      <img
        className="unregistered-image"
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </div>
  )

  render() {
    return (
      <MeetupContext.Consumer>
        {value => {
          const {name, topic, isUnregistered} = value
          console.log(name, topic, isUnregistered)
          return (
            <div className="home-bg-container">
              <Header />
              {isUnregistered
                ? this.renderUnregisteredView()
                : this.renderRegisteredView({name, topic})}
            </div>
          )
        }}
      </MeetupContext.Consumer>
    )
  }
}

export default Home
