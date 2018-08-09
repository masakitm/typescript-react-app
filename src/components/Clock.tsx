import * as React from 'react'
import styled from 'styled-components'
import { lifecycle, compose, withStateHandlers } from 'recompose'
import { format } from 'date-fns'

import ClockBackground from './ClockBackground'

const Enhance = compose(
  withStateHandlers(
    { 
      time: '' 
    },
    {
      updateTime: () => (time: string) => ({ time })
    }
  ),
  lifecycle({
    componentDidMount() {
      setInterval(() => {
        this.props.updateTime(format(new Date(), 'HH:mm:ss'))
      },1000)
    }
  })
)

const Clock = ({ time }: { time: string }) => (
  <Container>
    <ClockBackground />
    <Timer>{ time }</Timer>
  </Container>
)

export default Enhance(Clock)

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const Timer = styled.div`
  z-index: 1;
  font-size: 12vw;
  color: #fff;
  font-family: 'Playfair Display', serif;
`