import styled from "styled-components";
import { jawsbar } from "../etc/colors";
export const RankElement = styled.div`
    width:${(props)=>props.width}em;
    text-align:center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    ;
`;

export const RankWrapper = styled.div`
    margin-top: 1vh;
    align:center;
    background-color: #A5BDCC;
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    
`;

export const RankDataWrapper = styled.div`
    
    border-bottom: solid ${jawsbar};
    :hover{
        background-color: #E5ECF1;
    }
`;

export const RankAllDataWrapper = styled.div`
    :hover{
        cursor: url("/images/pointer2.png"), auto;
    }
`;

export const RankPageButton = styled.div`
    text-align: center;
    margin-left: 3vw;
    margin-right: 3vw;
    margin-bottom: 3vh;
    display: inline-block;
    font-size: 18px;
    background-color: #1C4766;
    border-radius: 10vw;
    color: white;
    min-width: 10%;
    padding-top: 0.35vh;
    padding-bottom: 0.35vh;
    font-weight:bold;

    :hover{
        background-color: #6EB3D0;
        cursor: pointer;
    }
`;

export const RankPageButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2vh;
`;

export const RankPageTitle = styled.div`
    margin-bottom: 0;
    text-align: center;
    font-size: 55px;
    color: #1C4766;
    img{
        width: 120px;
        vertical-align: bottom;
    }
`;