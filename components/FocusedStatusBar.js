// import { View, Text } from 'react-native'
// import React from 'react'

import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

const FocusStatusBar = (props) => {
// calling as hook 
  const isFocused = useIsFocused();
  return isFocused ? < StatusBar animated = { true } { ...props } />: null;
}
// this came by rnfe
export default FocusStatusBar