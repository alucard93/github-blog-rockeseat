import styled from 'styled-components'

export const CardContainer = styled.section`
  width: 100%;
  max-width: 864px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 48px;
  margin-bottom: 234px;
  gap: 32px;

  article {
    border-radius: 10px;
    background: var(--Base-Post, #112131);
    padding: 32px;
  }

  div {
    display: grid;
    grid-template-columns: auto auto;
    row-gap: 20px;
  }

  h4 {
    color: ${({ theme }) => theme['base-title']};

    font-family: Nunito;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
  }

  time {
    justify-self: end;

    color: ${({ theme }) => theme['base-span']};

    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }

  p {
    grid-column: 1 / -1;

    color: ${({ theme }) => theme['base-text']};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;

    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }
`
