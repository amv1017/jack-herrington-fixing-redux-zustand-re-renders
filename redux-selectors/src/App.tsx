import React from 'react'
import { Box, Button, Text } from '@mantine/core'
import { useSelector, useDispatch, Provider, shallowEqual } from 'react-redux'
import {
  store,
  RootState,
  addToFirst,
  addToSecond,
  doNothing,
} from './store'

const DoNothingButton = () => {
  const dispatch = useDispatch()
  return (
    <Button size={'xl'} onClick={() => dispatch(doNothing())}>
      Do Nothing
    </Button>
  )
}

const AddToFirstButton = () => {
  const dispatch = useDispatch()
  return (
    <Button size={'xl'} onClick={() => dispatch(addToFirst())}>
      Add To First
    </Button>
  )
}

const FirstValue = () => {
  // improper implementation! should select exact field
  const { firstNumber } = useSelector((state: RootState) => state)
  // const firstNumber = useSelector((state: RootState) => state.firstNumber)
  console.log('1st') // only 1st updates
  return (
    <Text size={'xl'} p={5}>
      First value: {firstNumber}
    </Text>
  )
}

const AddToSecondButton = () => {
  const dispatch = useDispatch()
  return (
    <Button size={'xl'} onClick={() => dispatch(addToSecond())}>
      Add To Second
    </Button>
  )
}

const SecondValue = () => {
  const secondNumber = useSelector((state: RootState) => state.secondNumber)
  console.log('2nd') // both updates
  return (
    <Text size={'xl'} p={5}>
      Second value: {secondNumber}
    </Text>
  )
}

const NumbersValue = () => {
  // shallowEqual helps to compare arrays
  const numbers = useSelector((state: RootState) => state.numbers, shallowEqual)
  console.log('2nd') // both updates
  return (
    <Text size={'xl'} p={5}>
      Numbers: {numbers.join(", ")}
    </Text>
  )
}

function App() {
  return (
    <Provider store={store}>
      <Box p={10}>
        <Box sx={{ display: "flex" }}>
          <DoNothingButton />
        </Box>
        <Box mt={10} sx={{ display: "flex" }}>
          <AddToFirstButton />
          <FirstValue />
        </Box>
        <Box mt={10} sx={{ display: "flex" }}>
          <AddToSecondButton />
          <SecondValue />
        </Box>
      </Box>
      <NumbersValue />
    </Provider>
  )
}

export default App
