import styled from "styled-components";

export const All = styled.div`
    height: fit-content;
    padding: 50px 0;
    margin-top: 50px;
    h1{
        font-size: 2.5rem;
        margin-left: 30px;
    }
    div.row{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        place-items: center;
        div.card{
            margin: auto;
            background-color: #fff;
            height: 70vh;
            margin-bottom: 20px;
            width: 90%;
            display: grid;
            grid-template-rows: 55% 5% 30% 10%;
            border-radius: 10px;
            img{
                height: 100%;
                width: 100%;
                object-fit: cover;
                border-radius: 10px 10px 0 0;
            }
            h1{
                text-align: center;
                font-size: 1.5rem;
            }
            span{
                display: flex;
                flex-direction: column;
                gap: 10px;
                padding: 10px;
            }
            button{
                border-radius: 0 0 10px 10px;
                background-color: #4C65CA;
                color: #fff;
                border: 0;
                outline: 0;
                font-size: 2rem;
                font-weight: bolder;
            }
        }
    }
`;