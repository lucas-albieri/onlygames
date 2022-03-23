import styled from "styled-components";
import logo from '../assets/img/logo.png'

export const Container = styled.div`
  width: 100%;
  height: 11vh;
  background-color: #0c0c0d;
  top: 0;
  z-index: 2;
  `;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 2rem;
  img{
      width: 5%;
  }
  h1{
      margin: 0 20px;
      font-size: 1rem;
      color: white;
      font-weight: 600;
      cursor: pointer;
  }
  `;

const Navbar = () => {

    return (
        <Container>
            <Content>
                <img src={logo} alt="logo" />
                <div style={{ display: 'flex' }}>
                    <h1>Início</h1>
                    <h1>Início</h1>
                    <h1>Início</h1>
                    <h1>Início</h1>
                </div>
            </Content>
        </Container>
    );
};

export default Navbar;