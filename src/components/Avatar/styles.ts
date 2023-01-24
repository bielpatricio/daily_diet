import styled from 'styled-components/native'

export const AvatarContainer = styled.View`
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.COLORS['teal-700']};
  border-radius: 999px;
`

export const ImageAvatar = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* border-radius: inherit; */
  border-radius: 999px;
`
