import styled from 'styled-components';
import img from '../../assets/img/bgfooter.svg'
    
const FooterContainer = styled.div`
    padding-bottom:30px;
    // margin-top:80px;
    background:black;
    div {
    display:flex;
    color: #FFF;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 17.65px;
}
    
    
    @media screen and (max-width: 640px) {
        margin-top:20px;
        background:none;
        background-image: url(${img});
        background-repeat:no-repeat;
        background-size:contain;

    }


    h1{
        font-weight:800;
        font-size:25px;
        margin:0;
     }
`;

const Service = styled.div`
    display: flex;
    flex:1;
    color: #F3F4F6;
    flex-wrap:wrap;
    gap: 40px;
    justify-items: center;
    // margin-top:-50px;
    @media screen and (max-width: 1024px) {
        flex-direction:column;
    }
    @media screen and (max-width: 640px) {
        display: none !important; 
        color:red;
    }


    div {
        display:flex;
        flex-direction:column;
        flex-wrap:wrap;
        gap:15px;
        
        p{
            cursor:pointer;
            margin:0;
        }
    }

    
`;

const Contact = styled.div`
    display: flex;
    color: #F3F4F6;
    flex-wrap:wrap;
    gap: 40px; 
    flex:2;
    @media screen and (max-width: 1024px) {
        flex-direction:column;
    }
    // margin-top:-50px;

    div {
        display:flex;
        flex:1;
        flex-direction:column;
    }

    @media screen and (max-width: 640px) {
        h1 {
            display:none;
        }
    }
    

    
`;

const Contact__info = styled.div`

    

    div {
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        gap:20px;


        @media screen and (max-width: 420px) {
            flex-direction:column;
            gap:0;
        }
        
        
        div{
            flex:1;
            display:flex;
            flex-direction:column;
            flex-wrap:wrap;
            gap:10px;

        }

    }
    p{
        margin:0;

        @media screen and (max-width: 640px) {
            display: inline-block;
            align-self: center;
        }
        
    }

    @media screen and (max-width: 640px) {

        

        div div p:last-child {
            display: none;
        }

        div div p{
        margin-top:10px;
        margin-left: 40px;

        @media screen and (max-width: 420px) {
            margin:0;
        }
        }

        
    }
    
`




export default {FooterContainer, Service,Contact,Contact__info};
