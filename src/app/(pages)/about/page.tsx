
import Reviews from '@/app/components/about/Reviews'
import Status from '@/app/components/about/Status'
import Icons from '@/app/components/home/Icons'
import Image from 'next/image'


function About() {
  

  return (
    <>
    <section className="body-font mt-14 px-4 md:px-6 lg:px-14 xl:px-30 2xl:px-62">
  <div className=" mx-auto flex  md:flex-row flex-col items-center justify-between gap-6">
    
    <div className="lg:flex-grow md:w-[525px]  flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Our Story

      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ea modi porro veniam, vel, quibusdam consequuntur quo optio sunt non quisquam praesentium, consectetur velit facilis id! Vitae magni nihil saepe!</p>
    </div>
    <div className="">
      <Image className="object-cover lg:w-[705px] lg:h-[609px] md:w-[680px] md:h-[480px] object-center rounded" 
      alt="hero" 
      src="/2wo.png"
      width={705} height={609} />
    
    </div>
  </div>
</section>

{/* 2 section */}
<div className=" px-4 md:px-6 lg:px-14 xl:px-30 2xl:px-62">
<Status/>
</div>


{/* 3 section */}
<div className="mt-20 px-4 md:px-6 lg:px-14 xl:px-30 2xl:px-62">
<Reviews/>
</div>


{/* section 4 */}
<div className="mt-20 px-4 md:px-6 lg:px-14 xl:px-30 2xl:px-62">
       <Icons/>
       </div>
    </>
  )
}

export default About