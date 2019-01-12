import { Image } from 'rebass'
import React from 'react'

const Avatar = props => (
  <Image width={48} height={48} borderRadius={9999} {...props} />
)

export default Avatar
