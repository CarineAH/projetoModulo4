import styled from "styled-components";

export const All = styled.div`
    width: 100%;
    height: 90vh;
    margin: 50px auto;
    color: #000;
    background-color: #333333;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%233133CA'/%3E%3Cstop offset='1' stop-color='%23333333'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%234C65CA' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%234C65CA' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    display: grid;
    grid-template-rows: 10% 30% 50%;
    place-items: center;
    h1{
        width: 100%;
        text-align: left;
        padding-left: 30px;
        color: #fff;
        strong{
            margin-left: 5px;
        }
    }
    div.infos{
        display: grid;
        place-items: center;
        text-align: left;
    }
    form.contact_box {
        padding: 0 20%;
        width: calc(100% - 50px);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
        font-weight: bolder;
        @media (max-width: 1000px) {
            width: 100%;
        }
        input[type="text"],
            [type="email"],
            [type="tel"] {
                font-family: "helvetica";
                width: 100%;
                color: #fff;
                padding: 10px 15px;
                outline: none;
                background-color: transparent;
                border: none;
                border-bottom: 1px solid #fff;
                ::placeholder{
                    color: #fff;
                }
        }
        textarea {
            font-family: "helvetica";
            outline: none;
            background-color: transparent;
            border: 1px solid #fff;
            color: #fff;
            padding: 10px;
            border-radius: 15px 15px 0 15px;
            min-height: 100px;
            max-width: 100%;
            min-width: 100%;
            ::placeholder{
                color: #fff;
            }
        }
        input[type="submit"] {
            width: 50%;
            margin-left: 50%;
            border: none;
            border-radius: 40px;
            padding: 10px;
            color: #000;
            font-size: 1.2rem;
            font-weight: lighter;
            cursor: pointer;
            @media (max-width: 1000px) {
                margin-left: 0;
                width: 100%;
            }
        }
    }
`;
