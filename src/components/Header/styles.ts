import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.degradeTo};

  /* background: ${(props) => props.theme.colors.degrade}; */
  transition: background-color 0.2s;
  /* max-width: 970px; */
  /* width: 100%; */

  min-height: 220px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 40rem;

  .logo-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    img {
      height: 70px;
    }
  }

  .bottom-content {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      justify-content: center;
    }

    button div svg {
      @media (max-width: 480px) {
        width: 15px;
      }
    }

    @media (max-width: 830px) {
      padding-top: 20px;
      flex-direction: column;
      align-items: center;
    }


  }

  @media (max-width: 1630px) {
    padding: 20px 20rem; 
  }

  @media (max-width: 1160px) {
    padding: 20px 8rem; 
  }

  @media (max-width: 716px) {
      padding: 20px 9rem; 
  }
  
  @media (max-width: 460px) {
    padding: 20px 4rem; 
  }

`;
