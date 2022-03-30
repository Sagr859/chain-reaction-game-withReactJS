import './orbStyle.css';
import { players } from './gameConfigs';

export const orbColorGen = (col) =>{
    if(players && players.find(el => el.name===col)!==-1){
        let elm = players.find(el => el.name===col)
        return {
            backgroundColor: elm.bgColor,
            background: elm.bg
        }
    }
    else 
        return {
            backgroundColor : 'rgb(255,86,86)',
            background : 'radial-gradient(circle, rgba(255,86,86,1) 0%, rgba(255,4,0,1) 5%, rgba(0,0,0,1) 97%)'
        }
}

export const SingleOrb = ({col='red',status='stable'}) =>{
    return(
        <div className={`orbDiv orb_${status}`} 
        style={orbColorGen(col)}>
            
        </div>
    )
}

export const DoubleOrb = ({col='red',status='stable'}) =>{
    let obj = {
        ...orbColorGen(col), left : '50%'
    }
    return(
        <div className={`multipleOrb orb_${status}`}>
            <div className={`orbDiv2`} style={obj}></div>
            <div className={`orbDiv2`} style={orbColorGen(col)}></div>
        </div>
        
    )
}

export const TripleOrb = ({col='red',status='stable'}) =>{
    let obj1 = {
        ...orbColorGen(col), left : '50%'
    }
    let obj2 = {
        ...orbColorGen(col), left : '50%', top: '50%'
    }

    return(
        <div className={`multipleOrb orb_${status}`}>
            <div className={`orbDiv2`} style={obj1}></div>
            <div className={`orbDiv2`} style={obj2}></div>
            <div className={`orbDiv2`} style={orbColorGen(col)}></div>
        </div>
    )
}

export const MovingSingleOrb = ({col='red',direction=[]}) =>{
    return(
        <div className='multipleOrb'>
            {
                direction.map((el, k) => {
                    return (
                        <div key={k} className={`orbDiv2  orb_${el}`} style={orbColorGen(col)}></div>
                    )
                })
            }            
        </div>
    )
}


