import styled from "styled-components";
import bg from '../../assets/img/shape.svg'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #0c0c0d;
  .content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px 15px;
      h1{
            color: white;
            margin-top: 3rem;
            margin-left: 1rem;
            font-size: 1.4rem;
            font-weight: 500;
        }
        .linha{
            width: 99%;
            margin: 0 auto;
            height: 1px;
            background: rgba(247, 247, 247,0.2);
            border: none;
            margin-top: 4px;
        }
        .yours-games{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin: 1.5rem 0;
            .card{
                width: 19%;
                margin:10px 5px;
                border-radius: 0.5rem;
                background: #1c1c1c;
                cursor: pointer;
                transform: scale(0.95);
                transition: 0.2s ease-in-out;
                :hover{
                     transform: scale(1);
                }
                img{
                    width: 100%;
                    object-fit: cover;
                    border-top-left-radius: 0.5rem;
                    border-top-right-radius: 0.5rem;
                }
                .description{
                    display: flex;
                    padding: 5px 12px;
                    justify-content: space-between;
                    padding-bottom: 7px;
                    h2{
                        color: white;
                        font-size: 1rem;
                        font-weight: 500;
                    }
                    span{
                        color: #5f74fa;
                        font-size: 0.7rem;
                    }
                }
              

            }
        }
      
  }
  `;

