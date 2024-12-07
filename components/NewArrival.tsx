import React from 'react'
import Image from 'next/image'

const NewArrival = () => {
  return (
    <div>
        <h1 className="text-2xl font-bold text-[#DB4444] px-20">Featured</h1>
        <br/>
        <p className="text-black font-semibold space-x-5 text-3xl px-20">New Arrivals</p>
        <div className='p-20'>
        <Image src="/Frame 739.svg" alt='New Arrivals' width={1170} height={600}/>
        </div>
        <div className='flex justify-around mb-20'>
            <div>
            <Image src="/Services.svg" alt='Service' height={80} width={80}></Image>
            <h1 className='font-bold text-black'>Free and Fast Shipping</h1>
            <p className='text-black'>Free delivery for all orders over $140</p>
            </div>
            <div>
            <Image src="/customerservice.svg" alt='CustomerService24/7' height={80} width={80}></Image>
            <h1 className='font-bold text-black'>24/7 CUSTOMER SERVICE</h1>
            <p className='text-black'>Friendly 24/7 customer support</p>
            </div>
            <div>
            <Image src="/moneyback.svg" alt='MoneybackLOGO' height={80} width={80}></Image>
            <h1 className='font-bold text-black'>MONEY BACK GUARANTEE</h1>
            <p className='text-black'>We return money within 30 days</p>
            </div>
        </div>
    </div>
    
  )
}

export default NewArrival