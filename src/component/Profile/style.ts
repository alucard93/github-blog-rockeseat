import styled from 'styled-components'

export const ProfileContainer = styled.section`
  display: flex;
  width: 100%;
  max-width: 864px;

  height: 212px;

  border-radius: 10px;
  background: ${({ theme }) => theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  padding: 32px 32px 32px 40px;
`

export const ProfileContent = styled.div`
  display: flex;

  gap: 32px;
`

export const AvatarContainer = styled.figure`
  display: flex;

  width: 100%;
  max-width: 148px;

  .img-avatar-user-profile {
    display: block;
    max-width: 100%;
    object-fit: contain;
  }
`

export const AvatarContent = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .avatar-description {
    color: ${({ theme }) => theme['base-text']};

    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 25.6px */
  }
`

export const AvatarContainerNameAndLink = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 8px;

  h1 {
    color: ${({ theme }) => theme['base-title']};

    font-family: Nunito;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }

  p {
    position: relative;

    font-family: Nunito;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 19.2px */
    text-transform: uppercase;
    display: flex;
    align-items: baseline;
    justify-content: center;
  }

  p:hover::before {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: #3294f8;
    text-decoration: underline;
    bottom: 6px;
  }

  a {
    color: ${({ theme }) => theme.blue};
    text-decoration: none;
    display: flex;
    width: 100%;
    gap: 7px;
  }
`

export const AvatarContainerIcons = styled.div`
  display: flex;
  gap: 24px;

  .container-avatar-img-icon {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .avatar-img-icon {
    height: 16px;
    width: 16px;
  }

  .avatar-text-user {
    color: ${({ theme }) => theme['base-subtitle']};

    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }
`
