import {
  AvatarContainer,
  AvatarContainerIcons,
  AvatarContainerNameAndLink,
  AvatarContent,
  ProfileContainer,
  ProfileContent,
} from './style'
import userProfile from './../../assets/home/avatar.png'
import { ArrowTop } from '../SvgCustom/ArrowTop'
import { Link } from 'react-router-dom'

import github from '../../assets/home/github.svg'
import building from '../../assets/home/building.svg'
import user from '../../assets/home/user.svg'

export const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileContent>
        <AvatarContainer>
          <img
            className="img-avatar-user-profile"
            src={userProfile}
            alt="imagem do usuário"
            width="148"
            height="148"
          />
        </AvatarContainer>

        <AvatarContent>
          <AvatarContainerNameAndLink>
            <h1>Cameron Williamson</h1>
            <p>
              <Link to="https://github.com/alucard93">
                GITHUB <ArrowTop className="icon-link" />
              </Link>
            </p>
          </AvatarContainerNameAndLink>
          <p className="avatar-description">
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <AvatarContainerIcons>
            <div className="container-avatar-img-icon">
              <img className="avatar-img-icon" src={github} alt="" />
              <p>cameronwll</p>
            </div>
            <div className="container-avatar-img-icon">
              <img className="avatar-img-icon" src={building} alt="" />
              <p>Rocketseat</p>
            </div>

            <div className="container-avatar-img-icon">
              <img className="avatar-img-icon" src={user} alt="" />
              <p className="avatar-text-user">seguidores</p>
            </div>
          </AvatarContainerIcons>
        </AvatarContent>
      </ProfileContent>
    </ProfileContainer>
  )
}
