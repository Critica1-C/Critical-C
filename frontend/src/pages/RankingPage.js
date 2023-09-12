import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';
import { RankElement, RankWrapper, RankDataWrapper, RankPageButton, RankPageButtonWrapper, RankPageTitle, RankAllDataWrapper } from '../styled_components/RankPageStyle';
import store from '../redux_store/store';
import { navy } from '../etc/colors';
function RankingPage({match}) {
    const {params} = match
    const [rankData, setRankData] = useState(null)
    const [userRank,setUserRank] = useState(null)
    const user_id = store.getState().user_id[0]
    const [start,setStart]= useState(0);


    const getRanking = async () =>{
        if (user_id)
        {
            const response= await axios.get(`/api/ranking/${params.user_id}`)
            const{ranks} = response.data
            const{user} = response.data
            const {ranking} = user
            setRankData(ranks);
            setUserRank(user);
            setStart(15*Math.floor(ranking/15))

        }
        else{ const response= await axios.get("/api/ranking") 
        const {ranks} = response.data
        setRankData(ranks);
        
    }

    }
    useEffect(()=>{
        getRanking();
    },[])
    return (
        <div >
            <NavBar />
            
            <RankPageTitle> 
                <span>우리집 누가 치웠어?</span>
                <img src="/images/sad_bear.png" alt="그림 수리중"/>
            </RankPageTitle>
            <RankWrapper style={{display:"flex", justifyContent:"space-evenly"}}>    
                <RankElement width={2}>순위</RankElement>
                <RankElement width={10}>이름</RankElement>
                <RankElement width={2}>등급</RankElement>
                <RankElement width={4}>배달 횟수</RankElement>
                <RankElement width={5}>퀴즈 점수</RankElement>
                <RankElement width={4}>총 점수</RankElement> 
            </RankWrapper>
            <RankAllDataWrapper>
            {rankData?
            rankData.slice(start,start+15).map((element,index)=>
            <RankDataWrapper key={index+start} style={{display:"flex", justifyContent:"space-evenly", 
            border:`${userRank && index+start+1 === userRank.ranking? `solid 4px ${navy}`:null}`,
            backgroundColor:`${userRank && index+start+1 === userRank.ranking? `${navy}`:null}`,
            color:`${userRank && index+start+1 === userRank.ranking? `white`:null}`,
            fontWeight:"bold"

            }} >
            <RankElement width={1}>{index+start+1}</RankElement>
            <RankElement width={10}>{element.name}</RankElement>
            <RankElement width={1}>
            &nbsp;&nbsp;<span 
                style={{
                    backgroundColor:`${element.tier==1?"red":element.tier==2?"orange":element.tier==3?"yellow":element.tier==4?"#87F717":"green"}`
                    ,textAlign:"center", color:"white",textShadow:" 0 0 2px black", borderRadius:"10vh"}}
                    >&nbsp;&nbsp;{element.tier}&nbsp;&nbsp; </span></RankElement>
            <RankElement width={4}>{element.delivery_count}</RankElement>
            <RankElement width={5}>{element.quiz_score}</RankElement>
            <RankElement width={4}>{element.total_score}</RankElement>
             </RankDataWrapper>
            ):null}
            </RankAllDataWrapper>
            <RankPageButtonWrapper>
                {start > 14? <RankPageButton onClick={()=>{setStart(start-15)}}>이전으로</RankPageButton>: null}
                {
                !rankData? null:
                start >= rankData.length - 15?
                <RankPageButton onClick={()=>{setStart(0)}}>처음으로</RankPageButton>
                :<RankPageButton onClick={()=>{setStart(start+15)}}>다음으로</RankPageButton>
                }
            </RankPageButtonWrapper>
        </div>
    )
}

export default RankingPage;
