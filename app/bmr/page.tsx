import NavBar from "@/components/NavBar";
import Image from "next/image";
import bmrImg from "@/assets/bmr.png"
import Link from "next/link";
import Footer from "@/components/Footer";
import RadioGroup from 'react-native-radio-buttons-group';
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
                    BMR Calculator
                </h1>
                <h3 className="text-gray-500">
                    คำนวณ BMR 
                </h3>
                <Image src={bmrImg} alt="bmrImg" width={95} height={95} className="my-5"/>

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
                    <h3 className="font-bold mt-4">
                        ป้อนอายุ (ปี)
                    </h3>
                    <input type="number" placeholder="เช่น 25"
                            className="p-3 border border-gray-200 rounded mt-2"/>
                    <h3 className="font-bold mt-4">
                        เพศ
                    </h3>
                    <div className="w-full flex ">
                    <input 
                    type="radio" 
                    name="gender" 
                    className="w-4 h-4 mt-1 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                    <label className="ml-2 text-sm font-medium text-gray-900">ชาย</label>
                    </div>
                    <div className="w-full flex mt-2">
                    <input 
                    type="radio" 
                    name="gender" 
                    className="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                    <label className="ml-2 text-sm font-medium text-gray-900">หญิง</label>
                    </div>
                    
                </div>

                {/* ส่วนของปุ่ม คำนวณ */}
                <div className="w-full flex ">
                <button className="w-full mt-5 py-3 bg-purple-500 rounded-xl text-white
                                    hover:bg-purple-700  cursor-pointer">
                    คำนวณ BMR 
                </button>

                {/* ส่วนของปุ่ม รีเซ็ต */}
                <button className="w-full mt-5 ml-2 py-3 bg-red-500 rounded-xl text-white
                                    hover:bg-red-700  cursor-pointer">
                    รีเซ็ต 
                </button>
                </div>

                {/* ส่วนของการแสดงผล BMI */}
                <div className="w-full flex justify-center items-center gap-5 mt-5">
                    <h3>ค่า BMR ที่คำนวณได้</h3>
                    <h3 className="font-bold text-blue-500 text-2xl">
                        0.00
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