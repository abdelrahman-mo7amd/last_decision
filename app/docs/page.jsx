export default function Docs(){
    return(
        <>
        <div className="container bg-red-600 rounded-2xl mt-10 mb-10 text-front">
            <div className="jersey text-black text-8xl m-5">
                Documentation
            </div>
            <hr />
            <div className="text-black text-6xl jersey m-5">
                Basics
            </div>
            <div className="text-black text-4xl jersey m-5">
                You can play the game by pressing the start button and once you start it you will be raised some questions js answer them and you will get to know what to do with time and if you want to read that in detail you can read below 
            </div>
            <hr />
            <div className="text-black text-6xl jersey m-5">
                How to Answer
            </div>
            <div className="text-black text-4xl jersey m-5">
                To answer the question you will have four options Yes, No , Probably Yes or Probably no you need to pick anyone this makes this game really hard because you will have 20 different questions which means there will be {4**20} combinations of options you can choose and only 1 of them is right 
            </div>
            <hr />
            <div className="text-black text-6xl jersey m-5">
                Military Importance
            </div>
            <div className="text-black text-4xl jersey m-5">
                There can be random attacks on your country anytime and somehow you endup having less army then required or army not rated upto the level your country dies ultimately
            </div>
            <hr />
              <div className="text-black text-6xl jersey m-5">
                Research
            </div>
            <div className="text-black text-4xl jersey m-5">
               The more you spend on research the more better is the weapons and medicines you get and so you also improve the military and the doctors with this 
            </div>
            <hr />
              <div className="text-black text-6xl jersey m-5">
                Education
            </div>
            <div className="text-black text-4xl jersey m-5">
                The improvement in education helps you to also improve the quality of the research you do and thus effects every other factor
            </div>
            <hr />
              <div className="text-black text-6xl jersey m-5">
                People
            </div>
            <div className="text-black text-4xl jersey m-5">
                These are the people that will keep you in power if they get angry they might take over the country and ultimately the country might die 
            </div>
            <hr />
        </div>
        </>
    )
}