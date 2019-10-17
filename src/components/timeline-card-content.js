import React from 'react'
import { Flex } from 'rebass/styled-components'
import Badge from '../base-components/Badge'
import SmCaps from '../base-components/SmCaps'
const TimeineCardContent = ({ emoji, emojiLabel, children }) => (
  <Flex alignItems="baseline">
    <Badge variant="asBackground" px={2}>
      <span role="img" aria-label={emojiLabel}>
        {emoji}
      </span>
    </Badge>

    <SmCaps> {children}</SmCaps>
  </Flex>
)

export default TimeineCardContent
