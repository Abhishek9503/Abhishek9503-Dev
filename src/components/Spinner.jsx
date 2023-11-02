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
          {/* <ul className="ins_ul">
            <li className='text-slate-300 text-justify mt-2'>W - Forward</li>
            <li className='text-slate-300 text-justify mt-2'>S - Backward</li>
            <li className='text-slate-300 text-justify mt-2'>D - Right</li>
            <li className='text-slate-300 text-justify mt-2'>A - Left</li>

            <li className='text-slate-300 text-justify mt-2'>Up - Rotate UP</li>
            <li className='text-slate-300 text-justify mt-2'>Down - Rotate Down</li>
            <li className='text-slate-300 text-justify mt-2'>Left - Rotate Left</li>
            <li className='text-slate-300 text-justify mt-2'>Right - Rotate Right</li>
          </ul> */}
        </div>
        </div>

        
    </div>
  )
}

export default Spinner