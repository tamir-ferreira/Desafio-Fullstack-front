import styled from "styled-components";

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
  margin: 0 auto;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 48px 0 35px 0;
  }

  main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    opacity: 0.96;

    section:last-child {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      div {
        width: 100%;
        max-width: 370px;
        display: flex;
        flex-direction: column;
        padding: 15px 25px 30px 25px;
        align-items: center;
        /* background-color: var(--color-gray-3); */
        background: var(--color-opacity);
        color: var(--color-gray-0);
        border-radius: var(--border-radius-1);

        > p {
          margin: 34px 0 22px 0;
          text-align: center;
          line-height: 18px;
        }

        a,
        button {
          width: 100%;
        }
      }
      @media only screen and (max-width: 600px) {
        margin: 10px;
      }
    }
  }
`;
