import React from 'react'
import TestimonialBox from './special/TestimonialBox'
import Image from 'next/image'

const  Testimonials = () => {

    type Box = { desc: string, image: string, name: string, field: string, hidden?: boolean }

    const boxes: Box[] = [
        {desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.", image: "teamimg3.svg", name: "James Nduku", field: "Software Developer"},
        {desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.", image: "teamimg1.svg", name: "Erick Kipkemboi", field: "Scrum Master", hidden: true},
        {desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.", image: "teamimg6.svg", name: "Stephen Kerubo", field: "UI/UX Designer", hidden: true}
    ]

  return (
    <section className='md:bg-[#F7F7F7] max-w-[428px] justify-self-center md:max-w-none px-6 md:px-16 py-28 flex flex-col gap-20'>
        <div className='flex justify-center md:justify-start'>
        <div className='flex flex-col gap-6 max-w-[361px] md:max-w-none md:text-left'>
            <h1 className='hidden md:block font-Roboto font-bold text-5xl '>Customer testimonials</h1>
            <h1 className='md:hidden font-Roboto font-bold text-[32px] text-center md:text-left'>What Our Student Say</h1>
            <p className='font-Roboto font-normal text-lg text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </div>
        <div className='flex gap-8 justify-center'>
            {boxes.map((items,i) => {
                return <TestimonialBox key={i} item={items}/>
            })}
        </div>
        <div className='flex justify-between'>
            <Image src={"dots.svg"} alt='' width={72} height={8} className=''/>
            <div className='flex gap-4'>
                <button className='rounded-full duration-300 hover:scale-110 hover:bg-emerald-300'><Image src={"arrow.svg"} alt='arrow' width={48} height={48}/></button>
                <button className='rounded-full duration-300 hover:scale-110 hover:bg-red-300'><Image src={"arrow.svg"} alt='arrow' width={48} height={48} className='transform scale-x-[-1]'/></button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials