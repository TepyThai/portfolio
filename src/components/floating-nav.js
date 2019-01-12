import React from 'react'
import styled from 'styled-components'
import { Card, Flex, Button } from 'rebass'
import Caps from '../base-components/Caps'
import Divider from '../base-components/Divider'
const FloatingNav = props => (
  <Card width="120px" p={1} m={1} borderRadius={8}>
    <Flex
      p={0}
      m={0}
      width={[1]}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Button p={0} m={0} width="100px">
        <Caps>About</Caps>
      </Button>
      <Divider />
      <Button>
        <Caps letterSpacing={'0.1rem'}>Portfolio</Caps>
      </Button>
      <Divider />
      <Button>
        <Caps>About</Caps>
      </Button>
    </Flex>
  </Card>
)

export default FloatingNav
