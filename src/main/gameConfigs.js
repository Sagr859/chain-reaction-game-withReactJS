import { useState } from 'react'

export const initVal = [
    [{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null }], 
    [{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null }], 
    [{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null }],
    [{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null }], 
    [{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null }], 
    [{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null }], 
    [{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null }], 
    [{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null }], 
    [{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null }]
  ]
  

export function useOrbConfigs() {
  
    const [orbGrid, setOrbGrid] = useState(
    [
      [{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null }], 
      [{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null }], 
      [{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null }],
      [{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null }], 
      [{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null }], 
      [{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null }], 
      [{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null }], 
      [{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null }], 
      [{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null },{ v: 0, c: null }]
    ]
    );

    return [orbGrid, setOrbGrid]
}

export const players = [
  { name : 'Player 1', status : null, bgColor : 'rgb(255,86,86)', bg : 'radial-gradient(circle, rgba(255,86,86,1) 0%, rgba(255,4,0,1) 5%, rgba(0,0,0,1) 97%)' },
  { name : 'Player 2', status : null, bgColor : 'rgb(86,255,94)', bg : 'radial-gradient(circle, rgba(86,255,94,1) 0%, rgba(0,255,29,1) 17%, rgba(0,0,0,1) 97%)' },
  { name : 'Player 3', status : null, bgColor : 'rgb(86,155,255)', bg : 'radial-gradient(circle, rgba(86,155,255,1) 0%, rgba(12,0,255,1) 17%, rgba(0,0,0,1) 97%)' },
  { name : 'Player 4', status : null, bgColor : 'rgb(255,247,86)', bg : 'radial-gradient(circle, rgba(255,247,86,1) 0%, rgba(255,252,0,1) 17%, rgba(0,0,0,1) 97%)' },
  { name : 'Player 5', status : null, bgColor : 'rgb(253,86,255)', bg : 'radial-gradient(circle, rgba(253,86,255,1) 0%, rgba(239,0,255,1) 17%, rgba(0,0,0,1) 97%)' },
  { name : 'Player 6', status : null, bgColor : 'rgb(255,255,255)', bg : 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(190,190,190,1) 17%, rgba(0,0,0,1) 97%)' }]

export function usePlayerConfigs(pl) {
  console.log(pl)
  const [plArr, setPlArr] = useState(players.slice(0,pl));

  return [plArr, setPlArr]
}