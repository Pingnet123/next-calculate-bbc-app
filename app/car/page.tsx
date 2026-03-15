import NavBar from "@/components/NavBar";
import Image from "next/image";
import carImg from "@/assets/car.png"
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
                    Car Installment Calculator
                </h1>
                <h3 className="text-gray-500">
                    คำนวณ Car Installment
                </h3>
                <Image src={carImg} alt="carImg" width={95} height={95} className="my-5"/>

                {/* ส่วนของการป้อนหรือเลือก */}
                <div className="w-full flex flex-col">
                    <h3 className="font-bold">
                        ชื่อผู้คำนวณ
                    </h3>
                    <input type="string" 
                            className="p-3 border border-gray-200 rounded mt-2"/>
                    <h3 className="font-bold mt-4">
                        ราคารถ (บาท)
                    </h3>
                    <input type="number" 
                            className="p-3 border border-gray-200 rounded mt-2"/>
                    <h3 className="font-bold mt-4">
                        ดอกเบี้ยต่อปี (%)
                    </h3>
                    <input type="floa" 
                            className="p-3 border border-gray-200 rounded mt-2"/>
                    <h3 className="font-bold mt-4">
                        เงินดาวน์ (%)
                    </h3>
                    <div className="w-full flex mt-1 items-center ">
                    <input 
                    type="radio" 
                    name="gender" 
                    className="w-3 h-4  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                    <label className="ml-2 text-bold font-medium text-gray-900">15%</label>
                    
                    <input 
                    type="radio" 
                    name="gender" 
                    className="w-3 h-4 ml-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                    <label className="ml-2 text-bold font-medium text-gray-900">20%</label>

                    <input 
                    type="radio" 
                    name="gender" 
                    className="w-3 h-4 ml-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                    <label className="ml-2 text-bold font-medium text-gray-900">25%</label>

                    <input 
                    type="radio" 
                    name="gender" 
                    className="w-3 h-4 ml-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                    <label className="ml-2 text-bold font-medium text-gray-900">30%</label>

                    <input 
                    type="radio" 
                    name="gender" 
                    className="w-3 h-4 ml-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                    <label className="ml-2 text-bold font-medium text-gray-900">35%</label>
                    </div>
                    <h3 className="font-bold mt-4">
                        จำนวนเดือนที่ผ่อน
                    </h3>
                    <div className="dropdown-container">
                        <select className="w-full p-2 border rounded">
                            <option value="1">24 เดือน</option>
                            <option value="2">36 เดือน</option>
                            <option value="2">48 เดือน</option>
                            <option value="2">60 เดือน</option>
                            <option value="2">72 เดือน</option>
                            <option value="2">84 เดือน</option>
                        </select>
            </div>
                </div>

                {/* ส่วนของปุ่ม คำนวณ */}
                <div className="w-full flex ">
                <button className="w-full mt-5 py-3 bg-blue-500 rounded-xl text-white
                                    hover:bg-blue-700  cursor-pointer">
                    คำนวณ  
                </button>

                {/* ส่วนของปุ่ม รีเซ็ต */}
                <button className="w-full mt-5 ml-2 py-3 bg-gray-500 rounded-xl text-white
                                    hover:bg-gray-700  cursor-pointer">
                    ล้างข้อมูล
                </button>
                </div>

                {/* ส่วนของการแสดงผล BMI */}
                <div className="w-full font-bold flex justify-center items-center gap-1 mt-4">
                    <h5>ผ่อนชำระต่อเดือน</h5>
                    <h5 className="font-bold  ">
                        0.00 บาท
                    </h5>
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