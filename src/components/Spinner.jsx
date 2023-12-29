import React from 'react'

const Spinner = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        
        <div className="flex mt-40 flex-col items-center">
          <div class="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        <div className="instruction mt-10">
        <div className="game_ins text-white font-semibold text-center text-[0.9rem]">Please be patient - Game can take 15 Seconds to load</div>
          <div className="game_ins text-white font-semibold text-center text-[0.9rem]">Game Rules use - Up, Left, Right, Down, W, S, D, A to Play</div>
        </div>
        </div>

        
    </div>
  )
}

export default Spinner