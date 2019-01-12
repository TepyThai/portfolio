import React from 'react'
import { Flex } from 'rebass'

import Timeline from './timeline'
import BaseCard from '../base-components/BaseCard'

export default ({ startYear, endYear, children, ...props }) => (
  <BaseCard variant="night" {...props}>
    <Flex flexDirection="column">
      <Timeline startYear={startYear} endYear={endYear} />
      {children}
    </Flex>
  </BaseCard>
)
