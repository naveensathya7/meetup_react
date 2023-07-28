import React from 'react'

const MeetupContext = React.createContext({
  name: '',
  topic: '',
  topicsList: [],
  setNameAndTopic: () => {},
  onChangeName: () => {},
  onChangeTopic: () => {},
  isUnregistered: false,
  isError: false,
  errorMsg: '',
})

export default MeetupContext
