import { Image } from 'react-native'
import { AvatarContainer, ImageAvatar } from './styles'

const avatarUrl = 'https://github.com/bielpatricio.png'

export function Avatar() {
  return (
    <AvatarContainer>
      <ImageAvatar source={{ uri: avatarUrl }} />
    </AvatarContainer>
  )
}
