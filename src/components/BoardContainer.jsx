import React, { useState } from "react";
import Board from "./extraComponents/Board";
import BoardTitleBar from "./extraComponents/BoardTitleBar";
import CardContainer from "./extraComponents/CardContainer";
import Card from "./extraComponents/Card";
import { boards } from "../data/projectData";

const BoardContainer = () => {
  const [allborads,setAllboards]=useState(boards);
  const [target,setTarget]=useState({
    cId:"",
    bId:""
  })

  // const addCard=(title,description,avatar=[],label={text:"",color:"",bgColor:""},commentCount,filesCount,boardId)=>
  // {
    
  // }

  const handleDrageEnter=(cardId,boardId)=>
  {
    
      setTarget({
        cId:cardId,
        bId:boardId
      })
  }

  const handleDragEnd=(cardId,boardId)=>
  {
    let s_bIndex,s_cIndex,t_bIndex,t_cIndex;
    s_bIndex=allborads.findIndex(item=>item.id===boardId);
    if(s_bIndex<0) return;

    s_cIndex=allborads[s_bIndex].cards.findIndex(item=>item.id===cardId);
    if(s_cIndex<0) return;

    t_bIndex=allborads.findIndex(item=>item.id===target.bId);
    if(t_bIndex<0) return;

    t_cIndex=allborads[t_bIndex]?.cards.findIndex(item=>item.id===target.cId);
    if(t_cIndex<0) return;

    let tempBoards=[...allborads];
    let tempCard=tempBoards[s_bIndex]?.cards[s_cIndex];
    tempBoards[s_bIndex]?.cards?.splice(s_cIndex,1);
    tempBoards[t_bIndex]?.cards?.splice(t_cIndex,0,tempCard)
    setAllboards(tempBoards)
  }
  return (
    <div className="mygrid w-full h-auto grid justify-between  mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-3 gap-[15px]">
      {
        allborads.map((board,index)=>
        {
          return <Board key={board.id}>
            <BoardTitleBar
             dotColor={board.dotColor}
             count={board.cards.length}
             text={board.heading}
             extra={board.extra}
             borderColor={board.borderColor}
             boardId={board.id}
             
            />
           <CardContainer id={board.id}>
           {board.cards.map((card)=>
            {
               return <Card key={card.id}
                chipText={card.label}
                title={card.title}
                description={card.description}
                commentCount={card.commentsCount}
                filesCount={card.filesCount}
                avatar={card.avatar}
                handleDragEnd={handleDragEnd}
                handleDragEnter={handleDrageEnter}

                boardId={board.id}
                cardId={card.id}
               />
            })}

           </CardContainer>
           
          </Board>
        })
      }
      
    
    </div>
  );
};

export default BoardContainer;
