import { View, Text, ViewProps } from 'react-native'
import React from 'react'

const Box = ({...pros}:ViewProps) => {
  return (
    <View {...pros}/>
  )
}

export default Box