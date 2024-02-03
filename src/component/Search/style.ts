import styled from 'styled-components'

export const SearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 864px;
  margin-top: 72px;

  div {
    display: flex;
    justify-content: space-between;
  }

  h3 {
    color: ${({ theme }) => theme['base-subtitle']};

    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
  }

  p {
    color: ${({ theme }) => theme['base-span']};
    text-align: right;

    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }

  input {
    width: 100%;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme['base-border']};
    background: ${({ theme }) => theme['base-input']};

    color: ${({ theme }) => theme['base-label']};

    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    padding: 12px 16px;
  }
`
