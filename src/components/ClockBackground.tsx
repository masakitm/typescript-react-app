import * as React from 'react'
import styled from 'styled-components'
import * as data from '../data/clockItems.json'

const ClockBoard = () => (
  <React.Fragment>
  </React.Fragment>
)

const ClockBackground = () => (
  <ClockGradation>
    <ClockCircle>
      <ClockBoard />
    </ClockCircle>
  </ClockGradation>
)

export default ClockBackground

const ClockGradation = styled.div`
  position: fixed;
  display: flex;
  z-index: -1;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #355C7D;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #C06C84, #6C5B7B, #355C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  transition: 0.15s;  
`

const ClockCircle = styled.div`
  position: relative;
  width: 50vw;
  height: 50vw;
  border-radius: 50%;
  background-color: rgba(0,0,0,0);
  box-shadow: 0 0 100vh rgba(0,0,0,0.15);
`
