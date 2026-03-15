import NavBar from "@/components/NavBar";
import Image from "next/image";
import bmiImg from "@/assets/bmi.png"
import Link from "next/link";
import Footer from "@/components/Footer";
export default function Page() {
    return (
        <>
            {/* แสดง NavBer */}
            <NavBar/>

            {/* แสดงเนื้อหา ของหน้า BMI */}
            <div className="w-3/5 flex flex-col items-center
                            mx-auto mt-15 shadow-xl p-10 rounded-lg
                            border border-gray-200">
                {/* แสดงหัวข้อการคำนวณ และ รูป */}
                <h1 className="text-2xl font-bold">
                    BMI Calculator
                </h1>
                <h3 className="text-gray-500">
                    คำนวณ BMI 
                </h3>
                <Image src={bmiImg} alt="bmiImg" width={95} height={95} className="my-5"/>

                {/* ส่วนของการป้อนหรือเลือก */}
                <div className="w-full flex flex-col">
                    <h3 className="font-bold">
                        ป้อนน้ำหนัก (กิโลกรัม)
                    </h3>
                    <input type="number" placeholder="เช่น 65.85"
                            className="p-3 border border-gray-200 rounded mt-2"/>
                    <h3 className="font-bold mt-4">
                        ป้อนส่วนสูง (เซ็นติเมตร)
                    </h3>
                    <input type="number" placeholder="เช่น 175.55"
                            className="p-3 border border-gray-200 rounded mt-2"/>

                </div>

                {/* ส่วนของปุ่ม คำนวณ */}
                <button className="w-full mt-5 py-3 bg-blue-500 rounded-xl text-white
                                    hover:bg-blue-700  cursor-pointer">
                    คำนวณ BMI 
                </button>

                {/* ส่วนของปุ่ม รีเซ็ต */}
                <button className="w-full mt-5 py-3 bg-gray-500 rounded-xl text-white
                                    hover:bg-gray-700  cursor-pointer">
                    รีเซ็ต 
                </button>

                {/* ส่วนของการแสดงผล BMI */}
                <div className="w-full flex justify-center items-center gap-5 mt-5">
                    <h3>ค่า BMI ที่คำนวณได้</h3>
                    <h3 className="font-bold text-blue-500 text-2xl">
                        0.00
                    </h3>
                </div>

                {/* ส่วนของการแปลผล BMI */}
                <div className="w-full flex justify-center items-center gap-5 mt-5">
                    <h3>การแปลผล</h3>
                    <h3 className="font-bold text-blue-500 text-2xl">
                        xxxxx
                    </h3>
                </div>

                {/* ส่วนของปุ่ม กลับหน้าหลัก ซึ่งเป็น Link */}
                <Link href="/" className="w-full mt-5 py-3 bg-gray-500 rounded
                                        hover:bg-gray-700 text-center text-white">
                        กลับไปหน้าหลัก
                </Link>           
            </div>
            {/* แสดง Footer */}
            <Footer />
        </>
    );
}