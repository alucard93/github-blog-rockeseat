import {
  AvatarContainer,
  AvatarContainerNameAndLink,
  AvatarContent,
  ProfileContainer,
  ProfileContent,
} from './style'
import userProfile from './../../assets/avatar.png'
import { ArrowTop } from '../SvgCustom/ArrowTop'
import { Link } from 'react-router-dom'
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
          <div>
            <p>cameronwll</p>
            <p>Rocketseat</p>
            <p>seguidores</p>
          </div>
        </AvatarContent>
      </ProfileContent>
    </ProfileContainer>
  )
}
