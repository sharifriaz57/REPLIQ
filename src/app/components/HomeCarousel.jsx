"use client"
import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HomeCarousel = () => {
    const items = [
        <div className='item w-full relative h-60'>
            <Image src={`https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/8127bba6429886d8.jpg?q=20`} alt='slide-img' layout='fill' objectFit='cover' />
        </div>,
        <div className='item w-full relative h-60'>
            <Image src={`https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/7cef5dd93c71eab3.jpg?q=20`} alt='slide-img' layout='fill' objectFit='cover' />
        </div>,
        <div className='item w-full relative h-60'>
          <Image src={`https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/68959fd7d83448b8.png?q=20`} alt='slide-img' layout='fill' objectFit='cover' />
        </div>,
        <div className='item w-full relative h-60'>
          <Image src={`https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/eece67423a855689.jpg?q=20`} alt='slide-img' layout='fill' objectFit='cover' />
        </div>,
    ]

    return (
        <AliceCarousel
            items={items}
            animationDuration={700}
            infinite={true}
            disableDotsControls={true}
            renderPrevButton={() => {
                return <div className="py-6 absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer bg-slate-200">
                    <FaChevronLeft className="text-3xl text-slate-700" /></div>
            }}
            renderNextButton={() => {
                return <div className="py-6 absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer bg-slate-200">
                    <FaChevronRight className="text-3xl text-slate-700" /></div>
            }}
        />
    )
}

export default HomeCarousel