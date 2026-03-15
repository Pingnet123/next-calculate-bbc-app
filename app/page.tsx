import Image from "next/image";
import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import bmiImg from '@/assets/bmi.png';
import bmrImg from '@/assets/bmr.png';
import carImg from '@/assets/car.png';
export default function Page() {
  return (
    <>
      <div className="w-full mt-20 flex flex-col items-center">
        {/* รูปโลโก้ */}
        <Image src={logoImg} alt="logoImg" width={100} height={100}/>

        {/*ชื่อเว็บ + รายละเอียด */}
        <h1 className="mt-5 text-5x1 font-bold">
        เครื่องมือคำนวณออนไลน์
        </h1>
        <h3 className="mt-3 text-lg font-bold text-gray-500">
        เลือกการคำนวณที่คุณต้องการจากรายการด้านล่าง
        </h3>
        {/* Link ไปยังหน้า /bmi,/bmr,/car */}
        <div className="w-full mt-8 flex justify-center gap-10">
          <Link href="/bmi" 
                  className="p-3 border border-gray-200 rounded 
                            shadow-xl flex flex-col items-center">
              <Image src={bmiImg} alt="bmiImg" width={65} height={65}/>
              <h3 className="text-xl">BMI (ดัชนีมวลกาย)</h3>
              <h5 className="text-sm text-gray-500">
                คำนวณน้ำหนักของคุณเหมาะสมกับส่วนสูงหรือไม่
              </h5>
          </Link>
          <Link href="/bmr"
                    className="p-3 border border-gray-200 rounded 
                            shadow-xl flex flex-col items-center ">
              <Image src={bmrImg} alt="bmrImg" width={65} height={65}/>
              <h3 className="text-xl">BMR (อัตราการเผาผลาญ)</h3>
              <h5 className="text-sm text-gray-500">
                คำนวณพลังงานขั้นต่ำที่ร่างกายต้องการต่อวัน
              </h5>
          </Link>
          <Link href="/car"
                  className="p-3 border border-gray-200 rounded 
                            shadow-xl flex flex-col items-center ">
              <Image src={carImg} alt="carImg" width={65} height={65}/>
              <h3 className="text-xl">การผ่อนชำระรถยนต์</h3>
              <h5 className="text-sm text-gray-500">
                คำนวณน้ำหนักของคุณเหมาะสมกับส่วนสูงหรือไม่
              </h5>
          </Link>
        </div>
      </div>
      {/* Footer */}
      <div className='w-full flex flex-col items-center'>
        <h3 className='text-gray-500'>
            © 2025 SAU. All rights reserved.
        </h3>
        <h3 className='text-gray-500'>
            Created by NinniN SAU
        </h3>
    </div>
    </>
  );
}