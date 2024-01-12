import { View, Text } from 'react-native'
import React from 'react'
import { Input, InputProps } from '@ui-kitten/components'

const TextInput = ({...props}:InputProps) => {
  return (
    <Input status='primary' size='large' {...props}/>
  )
}

export default TextInput