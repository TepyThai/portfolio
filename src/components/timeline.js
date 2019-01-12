import React from 'react'
import { Flex } from 'rebass'

import Badge from '../base-components/Badge'

const LongDot = props => <Badge py="1px" variant="day" {...props} />
const MediumDot = props => <Badge variant="day" px={2} py="1px" {...props} />
const ShortDot = props => <Badge py="1px" variant="day" px={1} {...props} />
const Timeline = ({ startYear, endYear }) => (
  <Flex alignItems="center" width={[1]} mb={3}>
    <Badge variant="day" mb={2}>
      {startYear}
    </Badge>
    <Flex justifyContent="space-between" width={[1]} alignItems="center">
      <LongDot />
      <MediumDot />
      <ShortDot />
    </Flex>
    <Badge variant="day" mb={2}>
      {endYear}
    </Badge>
  </Flex>
)

export default Timeline
