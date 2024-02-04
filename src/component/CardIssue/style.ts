import styled from 'styled-components'

export const CardIssueContainer = styled.section`
  max-width: 864px;
  height: 168px;
  border-radius: 10px;
  background: ${({ theme }) => theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  padding: 32px;
  margin-top: -84px;
  position: relative;

  article {
    display: grid;
    grid-template-columns: auto auto;

    height: 100%;
  }

  .text-view-github {
    justify-self: end;

    color: ${({ theme }) => theme.blue};

    font-family: Nunito;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;
  }

  .link-home {
    color: ${({ theme }) => theme.blue};

    font-family: Nunito;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;

    text-decoration: none;
    display: flex;
    gap: 8px;
    align-items: center;
  }

  h2 {
    grid-column: 1 / -1;

    color: ${({ theme }) => theme['base-title']};

    font-family: Nunito;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`

export const AvatarCardIssueContainer = styled.div`
  display: flex;
  gap: 32px;

  .container-avatar-img-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .avatar-img-icon {
    height: 18px;
    width: 18px;
  }
`
