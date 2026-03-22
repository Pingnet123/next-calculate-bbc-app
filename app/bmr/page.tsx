"use client";

import NavBar from "@/components/NavBar";
import Image from "next/image";
import bmrImg from '@/assets/bmr.png';
import Link from "next/link";
import Footer from "@/components/Footer";
import RadioGroup from 'react-native-radio-buttons-group';
import { useState } from "react";
import Swal from 'sweetalert2'

export default function Page() {
    const [weight, setWeight] = useState('');
        const [height, setHeight] = useState('');
        const [age, setAge] = useState("");
        const [gender, setGender] = useState("male"); 
        const [bmrValue, setBmrValue] = useState("0.00"); 
        //สร้างฟังก์ชันสำหรับคำนวณ BMR
        const handleCalBMRClick = () => {
            //validation input data
            if(weight === '' || height === '' || age === ''){
                //alert("กรุณาป้อนน้ำหนัก ส่วนสูง และอายุ");
                Swal.fire({
                    icon: 'warning',
                    title:'คำเตือน',
                    text: 'กรุณาป้อนน้ำหนัก ส่วนสูง และอายุให้ครบถ้วน',
                    confirmButtonText: 'ตกลง'
                });
                return;
            }
            //คำนวณ BMR และแสดงผลลัพธ์
            if(gender === "male"){
                //คำนวณ BMR สำหรับเพศชาย
                const h = parseFloat(height);
                const w = parseFloat(weight);
                const a = parseFloat(age);
                const bmr = 66 + (13.75 * w) + (5 * h) - (6.8 * a);
                setBmrValue(bmr.toFixed(2)); //แสดงค่า BMR ที่คำนวณได้ โดยจำกัดทศนิยม 2 ตำแหน่ง
            }else{
                //คำนวณ BMR สำหรับเพศหญิง
                const h = parseFloat(height);
                const w = parseFloat(weight);
                const a = parseFloat(age);
                const bmr = 655 + (9.6 * w) + (1.8 * h) - (4.7 * a);
                setBmrValue(bmr.toFixed(2)); //แสดงค่า BMR ที่คำนวณได้ โดยจำกัดทศนิยม 2 ตำแหน่ง
            }    
        }
        //ฟังก์ชันสำหรับรีเซ็ตค่า
        const handleResetClick = () => {
            //รีเซ็ตค่าใน state ให้เป็นค่าเริ่มต้น
            setWeight('');
            setHeight('');
            setAge("");
            setGender("male");
            setBmrValue("0.00");
        }
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
                    <input  value={weight} onChange={(e) => setWeight(e.target.value)}
                    type="number" placeholder="เช่น 65.85"
                            className="p-3 border border-gray-200 rounded mt-2"/>
                    <h3 className="font-bold mt-4">
                        ป้อนส่วนสูง (เซ็นติเมตร)
                    </h3>
                    <input value={height} onChange={(e) => setHeight(e.target.value)}
                    type="number" placeholder="เช่น 175.55"
                            className="p-3 border border-gray-200 rounded mt-2"/>
                    <h3 className="font-bold mt-4">
                        ป้อนอายุ (ปี)
                    </h3>
                    <input value={age} onChange={(e) => setAge(e.target.value)}
                    type="number" placeholder="เช่น 25"
                            className="p-3 border border-gray-200 rounded mt-2"/>
                    <h3 className="font-bold mt-4">
                        เพศ
                    </h3>
                    <div className="w-full flex ">
                    <input onChange={(e)=>setGender(e.target.value)}
                            checked={gender === "male"}
                    type="radio" 
                    name="gender" 
                    value="male"
                    className="w-4 h-4 mt-1 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                    <label className="ml-2 text-sm font-medium text-gray-900">ชาย</label>
                    </div>
                    <div className="w-full flex mt-2">
                    <input onChange={(e)=>setGender(e.target.value)}
                            checked={gender === "female"}
                    type="radio" 
                    name="gender" 
                    value="female"
                    className="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                    <label className="ml-2 text-sm font-medium text-gray-900">หญิง</label>
                    </div>
                    
                </div>

                {/* ส่วนของปุ่ม คำนวณ */}
                <div className="w-full flex ">
                <button onClick={handleCalBMRClick}
                className="w-full mt-5 py-3 bg-purple-500 rounded-xl text-white
                                    hover:bg-purple-700  cursor-pointer">
                    คำนวณ BMR 
                </button>

                {/* ส่วนของปุ่ม รีเซ็ต */}
                <button onClick={handleResetClick} 
                className="w-full mt-5 ml-2 py-3 bg-red-500 rounded-xl text-white
                                    hover:bg-red-700  cursor-pointer">
                    รีเซ็ต 
                </button>
                </div>

                {/* ส่วนของการแสดงผล BMR */}
                <div className="w-full flex flex-col items-center justify-center gap-5 mt-5">
                    <h3>ค่า BMR ที่คำนวณได้</h3>
                    <h3 className="font-bold text-blue-500 text-4xl">
                        {bmrValue}
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