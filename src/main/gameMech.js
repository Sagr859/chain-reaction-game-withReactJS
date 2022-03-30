import { initVal } from "./gameConfigs";

var ExcitedcellVal = initVal;

export function addOrExplode(k,j,v,pl,setCellVal,cellVal){
    console.log('addOrExplode',k,j,v,cellVal)
    ExcitedcellVal = cellVal;

    if(!isExcited(k,j,v)){
        ExcitedcellVal[k][j] = { v : v+1, c : pl };
        console.log('addOrExplodeAdded',k,j,v,pl,ExcitedcellVal)
        if(setCellVal!==null)
            setCellVal(Object.assign([], ExcitedcellVal))
        else 
            return ExcitedcellVal
    }
    else {
        ExcitedcellVal[k][j] = { v : v+1, c : pl };
        console.log('ExcitedOrbLooping',k,j,v,pl)
        // setCellVal(Object.assign([], ExcitedcellVal))
        
            ExcitedcellVal[k][j] = { v : 0, c : null };
            let arrVal = exciteDirect(k,j).cor
            
            for(let i=0; i < arrVal.length; ++i){
                console.log('LOOPStarts:',i, arrVal, ExcitedcellVal)
                let x = arrVal[i][0];
                let y = arrVal[i][1];

                let n = ExcitedcellVal[x][y].v
                ExcitedcellVal = addOrExplode(x,y,n,pl,null,ExcitedcellVal)

                console.log("LoopEnds:",i,n,arrVal, x, y, ExcitedcellVal)
            }

            console.log('afterloop',ExcitedcellVal,setCellVal)
            
            if(setCellVal!==null)
                setCellVal(Object.assign([], ExcitedcellVal))
            else 
                return ExcitedcellVal
            
        
        console.log('ORB',k,j,'EXPLODED',v)
        
    }
    
}


export function isExcited(k,j,v){
    console.log('isExcited',k,j,v)
    if(v===0){
        console.log('FN1')
        return false;
    }else if( (v===1) && 
                !( (k===0 && j===0) || (k===0 && j===5) || (k===8 && j===0) || (k===8 && j===5) ) ){
                    console.log('FN2')
        return false;
    }else if( (v===2) && 
                !( (k===0 && j>0 && j<5) || (j===0 && k!==0 && k!==8) || (k===8 && j>0 && j<5) || (j===5 && k!==0 && k!==8) )){
                console.log("FN3")
        return false;
    }else{
            console.log('FN4')
        return true; }
}

export function exciteDirect(k,j){
    console.log('exciteDirect',k,j)
    let dir = [];
    let cor = [];
    if( (k===0 && j===0) || (k===0 && j===5) || (k===8 && j===0) || (k===8 && j===5) ) {
        console.log('corner orb')
        dir = [ k===0 ? 'bottom' : 'top', j===0 ? 'right' : 'left' ]
        cor = [
                [ k===0 ? k+1 : k-1, j ],
                [ k, j===0 ? j+1 : j-1 ]
            ]
        
    }else if( (k===0 && j>0 && j<5) || (j===0 && k!==0 && k!==8) || (k===8 && j>0 && j<5) || (j===5 && k!==0 && k!==8) ){
        console.log("edge orb")
        
        if(k===0 && j>0 && j<5){
            dir = ['bottom', 'left', 'right']
            cor = [ [k+1, j], [k,j-1], [k,j+1] ]
        }
        else if(j===0 && k!==0 && k!==8){
            dir = ['top','bottom','right']
            cor = [ [k+1, j], [k-1,j], [k,j+1] ]
        }else if(j===5 && k!==0 && k!==8){
            dir = ['top', 'bottom','left']
            cor = [ [k+1, j], [k-1,j], [k,j-1] ]
        }else{ 
            dir = ['top', 'left', 'right']
            cor = [ [k-1, j], [k,j-1], [k,j+1] ]
        }
    }else{
            console.log('inside orb')
         
            dir = ['top', 'bottom', 'left', 'right']
            cor = [ [k-1, j], [k,j-1], [k,j+1], [k+1, j] ]
    }
    console.log(dir,cor)
    return { dir : dir, cor : cor }
}


