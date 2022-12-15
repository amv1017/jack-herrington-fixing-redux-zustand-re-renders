import React from 'react'
import shallow from 'zustand/shallow'
import { Box, Button, Text } from '@mantine/core'
import { useStore } from './store'

const DoNothingButton = () => {
  const doNothing = useStore((state) => state.doNothing)
  return (
    <Button size={'xl'} onClick={doNothing}>
      Do Nothing
    </Button>
  )
}

const AddToFirstButton = () => {
  const addToFirst = useStore((state) => state.addToFirst)
  return (
    <Button size={'xl'} onClick={addToFirst}>
      Add To First
    </Button>
  )
}

const FirstValue = () => {
  // improper
  const { firstNumber } = useStore()
  // const firstNumber = useStore((state) => state.firstNumber)
  console.log('1st')
  return (
    <Text size={'xl'} p={5}>
      First value: {firstNumber}
    </Text>
  )
}

const AddToSecondButton = () => {
  const addToSecond = useStore((state) => state.addToSecond)
  return (
    <Button size={'xl'} onClick={addToSecond}>
      Add To Second
    </Button>
  )
}

const SecondValue = () => {
  // correct
  const secondNumber = useStore((state) => state.secondNumber)
  console.log('2nd')
  return (
    <Text size={'xl'} p={5}>
      Second value: {secondNumber}
    </Text>
  )
}

const NumbersValue = () => {
  const numbers = useStore((state) => state.numbers, shallow)
  console.log('numbers')
  return (
    <Text size={'xl'} p={5}>
      Numbers: {numbers.join(', ')}
    </Text>
  )
}

function App() {
  return (
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
      <NumbersValue />
    </Box>
  )
}

export default App
