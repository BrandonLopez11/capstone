import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>HYPE is your ultimate destination for exclusive, high-end streetwear that pushes the boundaries of fashion. We curate a carefully selected collection of the latest, most coveted streetwear brands that can't be found just anywhere. From limited-edition collaborations to cutting-edge designs, every piece in our boutique is chosen to elevate your style to new heights. Whether you're a streetwear aficionado or simply seeking unique, statement-making pieces, HYPE is the place where fashion meets exclusivity.</p>
          <p>At HYPE, we offer more than just clothing – we provide a lifestyle. Our boutique is designed for those who appreciate craftsmanship, rarity, and the art of fashion. The brands we carry are not only renowned for their innovative designs but also for their ability to set trends that define culture. With a focus on quality, exclusivity, and luxury, HYPE delivers an unmatched shopping experience for those who dare to stand out and make their mark in the world of streetwear.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>At HYPE, our mission is to redefine the streetwear experience by offering an exclusive selection of high-end, cutting-edge brands that embody innovation, luxury, and individuality. We are committed to curating the most sought-after pieces for those who value uniqueness and craftsmanship, creating a space where fashion enthusiasts can discover the latest trends and make bold statements through their style. With an unwavering focus on quality, exclusivity, and the ever-evolving culture of streetwear, HYPE is dedicated to empowering our customers to express themselves with confidence and authenticity.</p>
        </div>
      </div>

<div className='text-xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
</div>

<div className='flex flex-col md:flex-row text-sm mb-20'>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Quality Assurance</b>
    <p className='text-gray-600'>At HYPE, we prioritize exceptional quality by rigorously curating and inspecting each piece to ensure it meets the highest standards of craftsmanship and durability.</p>
  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Convenience</b>
    <p className='text-gray-600'>At HYPE, we strive to provide a seamless shopping experience with easy access to exclusive collections, fast shipping, and hassle-free returns, ensuring ultimate convenience for our customers.</p>
  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Exceptional Customer Service</b>
    <p className='text-gray-600'>At HYPE, we are dedicated to delivering exceptional customer service by offering personalized support, prompt responses, and a commitment to ensuring every shopping experience exceeds expectations.</p>
  </div>
</div>

<NewsletterBox/>
    </div>
  )
}

export default About
