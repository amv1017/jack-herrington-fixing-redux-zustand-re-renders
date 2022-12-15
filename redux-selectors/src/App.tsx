import React from 'react'
import { Box, Button, Text } from '@mantine/core'
import { useSelector, useDispatch, Provider } from 'react-redux'
import { store, addToFirst, RootState } from './store'

const AddToFirstButton = () => {
  const dispatch = useDispatch()
  return (
    <Button size={'xl'} onClick={() => dispatch(addToFirst())}>
      Add To First
    </Button>
  )
}

const FirstValue = () => {
  const { firstNumber } = useSelector((state: RootState) => state)
  return (
    <Text size={'xl'} p={5}>
      First value: {firstNumber}
    </Text>
  )
}

function App() {
  return (
    <Provider store={store}>
      <Box p={10}>
        <Box sx={{ display: 'flex' }}>
          <AddToFirstButton />
          <FirstValue />
        </Box>
      </Box>
    </Provider>
  )
}

export default App
