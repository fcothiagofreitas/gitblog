import styled from 'styled-components'
import Effect from '../../assets/effect-1.png'
import Effect2 from '../../assets/effect.png'

export const HeaderContainer = styled.section`
  background-image: url(${Effect}), url(${Effect2});
  background-position: right center, left center;
  background-repeat: no-repeat;
`
