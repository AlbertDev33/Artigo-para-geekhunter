import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Form = styled.form`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
        margin-right: 20px;
        width: 100%;
        height: 50px;
        border-radius: 10px;
    }

    button {
        height: 40px;
    }
`;

export const Repositories = styled.div`
    margin-top: 80px;
  max-width: 700px;

  section {
      margin: 0 16px;
      flex: 1;

      img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
`;