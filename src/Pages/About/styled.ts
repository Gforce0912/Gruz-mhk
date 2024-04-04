import styled from "styled-components";

    //Up to Header
    export const AboutWrapp = styled.div`
        width: 100%;
        min-height: 100vh;
        background: rgb(221, 221, 221);
        font-family: 'Commissioner', sans-serif;
        button:focus  {
            border:none;
          }
    `;
    export const UpToHeader = styled.div`
        background: rgb(29, 52, 133);
        width: 100%;
        height: 40px;
        display: flex;
        padding-left: 128px;
        padding-top: 11px;
        color: rgb(221, 221, 221);
        font-size: 24px;
    `;

    export const UpToHeaderGraph = styled.div`
        display: flex;
        float: right;
        position: absolute;
        right: 128px;
    `;
    export const UpToHeaderIcon = styled.img`
        width: 22px;
        height: 22px;
        margin-top: 0px;
    `;
    export const UpToHeaderH4 = styled.h4`
        margin-left: 0.5vw;
    `;

    
    //Header
    export const Header = styled.div`
        display: flex;
        margin-top: 16px;
    `;
    export const HeaderLogo = styled.div`

    `;
    export const HeaderLogoImg = styled.img`
        width: 128px;
        height: 60px;
        margin-left: 128px;
        margin-top: 22px;
    `;
    export const HeaderNav = styled.div`
        display: flex;
    `;
    export const HeaderNavTell = styled.h4`
        margin-left: 496px;
        font-size: 24px;
        font-weight: 600;
        margin-top: 37.5px;
    `;
    export const HeaderNavLi = styled.div`
        display: flex;
        margin-top: 37px;
        font-size: 24px;
        
        .HeaderNavLiA{
            color: rgb(51, 51, 51);
            text-decoration: none;
            margin-left: 27px;
        }
        .HeaderNavLiBtn{
            background: rgb(29, 52, 133);
            color: rgb(221, 221, 221);
            width: 246px;
            height: 47px;
            border-radius: 16px;
            font-size: 24px;
            cursor: pointer;
            margin-left: 64px;
            margin-top: -10px;
        }
        .HeaderNavLiBtn a{
            color: rgb(221, 221, 221);
            text-decoration: none;
        }
    `;

    //Main

    export const MainContaner1 = styled.div`
        display: flex;
        margin-top: 44px;
    `;
    export const MainContaner1Title = styled.div`
        width: 550px;
        margin-left: 128px;
        margin-top: 157px;
        font-family: "Montserrat", sans-serif;
        .MainContaner1TitleH1{
            font-weight: 600;
            font-size: 64px;
        }
        .MainContaner1TitleP{
            line-height: 30px;
            margin-top: 32px;
            font-size: 24px; 
            color: rgb(29, 52, 133);
            font-weight: 400;
        }
    `;
    export const MainContaner1Image = styled.div`
        overflow: hidden;
        .MainContaner1ImageImg{
            margin-top: 34px;
            width: 800px;
            height: 567px; 
            position: absolute;
            float: right;
            right: 0;     
            // z-index: 2;      
        }
        .MainContaner1ImageImgBack1{
            margin-top: 20px;
            height: 600px;  
            position: absolute;
            float: right;
            right: 700px;  
            filter: blur(30px);
            object-fit: cover;
            width: 200px;
        }
        .MainContaner1ImageImgBack2{
            margin-top: 20px;
            height: 600px;  
            position: absolute;
            float: right;
            right: 650px;  
            filter: blur(60px);
            object-fit: cover;
            width: 100px;
        }
        .MainContaner1ImageImgBack3{
            margin-top: 20px;
            height: 600px;  
            position: absolute;
            float: right;
            right: 600px;  
            filter: blur(70px);
            object-fit: cover;
            width: 100px;
        }
        .MainContaner1ImageImgBack4{
            margin-top: 20px;
            height: 600px;  
            position: absolute;
            float: right;
            right: 850px;  
            filter: blur(60px);
            object-fit: cover;
            width: 100px;
        }
        .MainContaner1ImageImgBack{
            margin-top: 34px;
            width: 850px;
            height: 580px; 
            position: absolute;
            float: right;
            right: 0;   
            filter: blur(40px);

        }

    `;

    export const MainContaner2 = styled.div`
        display: flex;
        justify-content: center;
        margin-top: 247px;
        
        .MainContaner2H3{
            font-weight: 600;
            font-size: 32px; 
            color: rgb(34, 34, 34);
            margin-left: 570px;
        }
        .MainContaner2Icon{
            display: flex;
            margin-top: 64px;
            margin-left: 350px;
        }
        .MainContaner2Icon1{
            margin-right: 173px;
        }
        .MainContaner2Icon2{
            margin-right: 173px;
        }
        .MainContaner2Icon3{
            margin-right: 173px;
        }
        .MainContaner2Icon1 p{
            white-space: nowrap;
            margin-top: 34px;
            margin-left: -30px;
            font-size: 24px;
            font-weight: 600; 
        }
        .MainContaner2Icon2 p{
            white-space: nowrap;
            margin-top: 30px;
            margin-left: -50px;
            font-size: 24px;
            font-weight: 600; 
        }
        .MainContaner2Icon3 p{
            white-space: nowrap;
            margin-top: 15px;
            margin-left: -30px;
            font-size: 24px;
            font-weight: 600; 
        }
    `;


    export const MainContaner3 = styled.div`
        .MainContaner3Content{
            display: flex;
            color: rgb(221, 221, 221);
            position: absolute;
            margin-top: -290px;
            margin-left: 152px;
            
        }
        .MainContaner3contentYear{
            text-align: center;
        }
        .MainContaner3contentYearH1{
            font-size:  129px;
            font-weight: 600;
        }
        .MainContaner3contentYearP{
            font-size:  36px;
            font-weight: 400;
        }
        .MainContaner3ContentText{
            margin-left: 450px;
            margin-top: 20px;
        }
        .MainContaner3ContentText p{
            font-size: 23.85px;
            font-family: 'Commissioner', sans-serif;
            line-height: 40px;
            font-weight: 200;
        }
    `; 
    export const MainContaner3Back = styled.img`
        margin-left: 24px;
        margin-top: 128px;
    `;

    export const MainContaner4 = styled.div`
        .MainContaner4Content{
            display: flex;
            margin-left: 128px;
            margin-top: 102px;
        }
        .MainContaner4Content p, a{
            font-size: 24px;
            line-height: 50px;
            font-family: 'Commissioner', sans-serif;
        }
        .MainContaner4Content a{
            color: rgb(29, 52, 133);
        }
        .MainContaner4ContentUl1{
            margin-left: 219px;
        }
        .MainContaner4ContentUl2{
            margin-left: 128px;
        }
        .MainContaner4Content img {
            width: 698px;

        }
        .MainContaner4H1{
            font-size: 72px;
            font-weight: 600;
            margin-left: 128px;
            margin-top: 128px;
        }
    `;


    export const MainContaner5 = styled.div`

        margin-left: 128px;
        .MainContaner5H1 h1{
            font-size: 72px;
            font-weight: 600;
        }
        .MainContaner5H1{
            margin-top: 128px;
        }
        .MainContaner5H1 img{
            width: 1644px;
        }
    `;

    export const MainContaner6 = styled.div`
        .MainContaner6H1 {
            margin-left: 128px;
            font-size: 33px;
            margin-top: 128px;
        }
        .MainContaner6H1 h1 {
            font-weight: 600;
        }
        .MainContaner6Content{
            background: url('../ui-lib/svg/Group 39507.png') no-repeat;
            width: 2000px;
            height: 772px;
            margin-left: 105px;
            margin-top: 76px;
        }
        .MainContaner6ContentForm{
            z-index: 3;
            position: relative;
        }
        .MainContaner6ContentBack{
            position: absolute;
            margin-top: 25px;
            margin-left: 27px;
        }
    `;