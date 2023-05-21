import { HeaderContainer } from './styles'
import LogoGitBlog from '../../assets/Logo.svg'

export function Headear() {
  return (
    <HeaderContainer className="flex h-[296px] pt-14 bg-blue-700 justify-center items-start relative overflow-hidden">
      <img src={LogoGitBlog} alt="GitHub Blog Logo" className="w-36" />
      <div className="w-58 h-10 bg-blue-1 blur-3xl absolute bottom-0 left-1/2 -translate-x-1/2" />
    </HeaderContainer>
  )
}
