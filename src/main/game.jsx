import React, { useState } from 'react';
import { addOrExplode } from './gameMech';
import './mainGame.css';
import { useOrbConfigs, usePlayerConfigs } from './gameConfigs';
import { DoubleOrb, SingleOrb, TripleOrb } from './orbs';

const Game = ({noPl}) => {
    const [cellVal, setCellVal] = useOrbConfigs()
    const [player, setPlayer] = usePlayerConfigs(noPl)
    const [currPlayer, setCurrPlayer] = useState(1);
    const [showMsg, setShowMsg] = useState({ c:null, msg:null })

    const changeToNextPLayer = ( pl ) => {
        if(player && player.filter(i => i.status!=='lost').length===1){
            let elm = player && player.filter(i => i.status!=='lost')
            console.log(player)
            if(elm && elm.length===1)
                setShowMsg({ c : elm[0].bgColor , msg : `${elm[0].name} Wins!!!`})
            else 
                setShowMsg({ c : 'red', msg : 'ERROR'})
            return null
        }
        else{
            let elm = player.find(el => el.name===`Player ${pl}`)
            if(elm.status===null){
                let plAr = player;
                    let plElm = player.find(el => el.name===`Player ${pl}`)
                    plAr.splice(player.findIndex(el => el.name===`Player ${pl}`), 1, {
                        ...plElm, status : 'playing'
                    })
                    setPlayer(plAr)
                    
                setCurrPlayer(pl)
            }else{
                let flag = 0;
                for(let x=0; x<cellVal.length; ++x ){
                    for(let y=0; y<cellVal[x].length; ++y)
                        if(cellVal[x][y].c === `Player ${pl}`){
                            flag = 1;
                            break;
                        }
                }
                if(flag)
                    setCurrPlayer(pl)
                else{ 
                    let plAr = player;
                    let plElm = player.find(el => el.name===`Player ${pl}`)
                    plAr.splice(player.findIndex(el => el.name===`Player ${pl}`), 1, {
                        ...plElm, status : 'lost'
                    })
                    setPlayer(plAr)
                    changeToNextPLayer(pl+1)
                }
            }
            
        }
    }

    const noOfOrbPlayer = (pl) =>{
        let orbs = 0;
        for(let x=0; x<cellVal.length; ++x ){
            for(let y=0; y<cellVal[x].length; ++y)
                if(cellVal[x][y].c === pl){
                    orbs += cellVal[x][y].v
                }
        }

        return orbs
        
    }

    return (
        <div className="mainGameCanvas" style={{ backgroundColor : player&&player.find(el => el.name===`Player ${currPlayer}`).bgColor }}>
            {
                
                cellVal.map( (item, k) => {
                    return(
                        
                            item.map((el,j) => {
                                return(
                                    <div key={j} className="gameTiles" 
                                    onClick={(e)=>{ 
                                    console.log('tileClicked')
                                        if(el.v===0 || `Player ${currPlayer}` === el.c){
                                         addOrExplode(k,j,el.v,`Player ${currPlayer}`,setCellVal,cellVal);
                                         changeToNextPLayer(currPlayer===noPl ? 1 : currPlayer+1)
                                        }
                                        else{
                                            setShowMsg({  c: player&&player.find(el => el.name===`Player ${currPlayer}`).bgColor, msg : 'Wrong Orb'});
                                            setTimeout(() => {
                                                setShowMsg({ c:null, msg:null })
                                            }, 2000);
                                        }
                                     }}>
                                        {
                                            el.v===0 ? null :
                                            el.v===1 ? <SingleOrb col={el.c} status={'stable'}/> :
                                            el.v===2 ? <DoubleOrb col={el.c} status={'stable'}/> :
                                            <TripleOrb col={el.c} status={'stable'}/> 

                                        }
                                        
                                        {/* <SingleOrb col={'red'} status={'stable'}/> */}
                                        {/* <DoubleOrb col={'red'} status={'stable'}/> */}
                                        {/* <TripleOrb col={'red'} status={'stable'}/> */}
                                    </div>
                                )
                            })
                        
                    )
                    
                })
                
            }
            {
                showMsg.msg !== null ?
                    <div className='popUpMsg' style={{ border:`3px solid  ${showMsg.c}` }} >{showMsg.msg}</div>
                     : null
            }
            {
                <div className='scoreBoard'>
                    <span>Score Board</span>
                    {
                        player&&player.map((el,k)=>{
                            console.log('Score=>',el)
                            if(k<noPl)
                            return (
                                <div key={k} 
                                style={{
                                    border : `2px solid ${`Player ${currPlayer}`===el.name ? el.bgColor : 'transparent'}`
                                }}
                                className='scoreBoardDiv'
                                >
                                    { el.status==='lost' ? <span></span> : null}
                                    <div>{el.name}</div>
                                    <div>{noOfOrbPlayer(el.name)}</div>
                                </div>
                            )
                            return null
                        })
                    }
                </div>
            }
        </div>
    );
}

export default Game;
