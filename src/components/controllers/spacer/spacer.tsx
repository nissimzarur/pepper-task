import { View, Text } from 'react-native'
import React from 'react'
import ISpacer from './interfaces'
import Box from '../../box/box'
import Styles from "./spacer.styles"

const Spacer = ({size = 'md'}:ISpacer) => {
  return <Box style={Styles[size]}/>
}

export default Spacer