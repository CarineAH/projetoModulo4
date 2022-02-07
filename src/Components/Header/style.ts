import styled from "styled-components";

export const All = styled.header`
    height: 60px;
    width: 100vw;
    backdrop-filter: blur(4px);
    background-color: rgba(225, 225, 225, 0.2);
    padding: 0 !important;
    margin: 0 !important;
    position: fixed;
    top: 0;
    z-index: 5;
    div{
        height: 60px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 60%;
        img{
            object-fit: contain;
            height: 50px;
            border-radius: 50%;
        }
        .title{
            color: #fff;
            text-decoration: none;
            font-weight: 300;
            cursor: pointer;
            font-size: 1.5rem;
            font-family: 'Poppins', sans-serif;
            transition: all 0.3s ease-in-out;
            &:hover{
                transform: scale(1.1);
            }
        }
    }
`;