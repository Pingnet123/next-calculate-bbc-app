import React from 'react'
import Link from 'next/link'
export default function NavBar() {
  return (
    <>
        <div className='w-full flex justify-center p-5
                        bg-blue-500 gap-5 text-white'>
            <Link href="/" className='text-white hover:text-yellow-300'>หน้าหลัก</Link> |
            <Link href="/bmi" className='text-white hover:text-yellow-300'>หน้า BMI</Link> |
            <Link href="/bmr" className='text-white hover:text-yellow-300'>หน้า BMR</Link> |
            <Link href="/car" className='text-white hover:text-yellow-300'>หน้า CAR</Link>

        </div>
    </>
  )
}
