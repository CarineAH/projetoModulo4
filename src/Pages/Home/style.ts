import styled from 'styled-components';	

export const All = styled.div`
    width: 100vw;
    header{
        width: 100%;
        padding: 110px 0 30px 0;
        background-color: #78a8ca;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        img{
            height: 100px;
            object-fit: contain;
            
        }
    }
    section{
        background-image: url('https://media.discordapp.net/attachments/811466540460802095/939294437513764965/banner-fundo2.jpg?width=1200&height=500');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        padding: 30px 0;
        -webkit-box-shadow: inset 0px 0px 39px 12px rgba(0,0,0,0.4); 
        box-shadow: inset 0px 0px 39px 12px rgba(0,0,0,0.4);
        div.card{
            -webkit-box-shadow: 0px 19px 35px -5px rgba(0,0,0,0.4); 
            box-shadow: 0px 19px 35px -5px rgba(0,0,0,0.4);
            background-color: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(4px);
            width: 25vw;
            height: 400px;
            padding: 20px;
            border-radius: 10px;
            &:nth-child(2){
                height: 500px;
            }
            p{
                color: white;
            }
        }
    }
`;