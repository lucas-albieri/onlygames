import { CircularProgress } from "@mui/material";
import styled from "styled-components";
import logo from '../assets/img/logo.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: inherit;
  opacity: 0.8;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  span{
      width: 70px !important ;
    height: 70px !important;
  }
  `;

const Loading = () => {

    return (
        <Container>
            <CircularProgress color="success" />
        </Container>
    );
};

export default Loading;