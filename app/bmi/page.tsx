"use client";

import NavBar from "@/components/NavBar";
import Image from "next/image";
import bmiImg from "@/assets/bmi.png"
import Link from "next/link";
import Footer from "@/components/Footer";
import { useState } from "react";
import Swal from 'sweetalert2'
import { parse } from "path";
export default function Page() {
 //สร้าง state  
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmiValue, setBmiValue] = useState("0.00");
    const [bmiResult, setBmiResult] = useState("XXXXX");   

    //สร้างฟังก์ชันสำหรับคำนวณ BMI
    const handleCalBMIClick = () => {
        //validation input data
        if(weight === '' || height === ''){
            //alert("กรุณาป้อนน้ำหนักและส่วนสูง");
            Swal.fire({
                icon: 'warning',
                title:'คำเตือน',
                text: 'กรุณาป้อนน้ำหนักและส่วนสูงให้ครบถ้วน',
                confirmButtonText: 'ตกลง'
            })
            return;
        }
        //คำนวณ BMI และแสดงผลลัพธ์
        //แปลงค่าส่วนสูงจากเซ็นติเมตรเป็นเมตร แปลงค่าน้ำหนักจากสตริงเป็นตัวเลข
        const h = parseFloat(height) / 100;
        const w = parseFloat(weight);
        const bmi = w / (h * h);
        setBmiValue(bmi.toFixed(2)); //แสดงค่า BMI ที่คำนวณได้ โดยจำกัดทศนิยม 2 ตำแหน่ง
        //แปลผล BMI และแสดงผลลัพธ์
        if(bmi < 18.5){
            setBmiResult("ผอม (เสี่ยงต่อการขาดสารอาหาร ภูมิคุ้มกันต่ำ)");
        }else if(bmi <= 22.9){
            setBmiResult("สมส่วน (สุขภาพดี ความเสี่ยงโรคต่ำ)");
        }else if(bmi <= 24.9){
            setBmiResult("ท้วม (เริ่มมีความเสี่ยงต่อสุขภาพ)");
        }else if(bmi <= 29.9){
            setBmiResult("อ้วน (มีความเสี่ยงต่อสุขภาพ)");
        }else{
            setBmiResult("อ้วนมาก (มีความเสี่ยงต่อสุขภาพอย่างมาก)");
        }
    }

    //ฟังก์ชันสำหรับรีเซ็ตค่า
    const handleResetClick = () => {
        //รีเซ็ตค่าใน state ให้เป็นค่าเริ่มต้น
        setWeight('');
        setHeight('');
        setBmiValue("0.00");
        setBmiResult("XXXXX");
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
                    <input value={weight} onChange={(e) => setWeight(e.target.value)}
                    type="number" placeholder="เช่น 65.85"
                            className="p-3 border border-gray-200 rounded mt-2"/>
                    <h3 className="font-bold mt-4">
                        ป้อนส่วนสูง (เซ็นติเมตร)
                    </h3>
                    <input value={height} onChange={(e) => setHeight(e.target.value)}
                    type="number" placeholder="เช่น 175.55"
                            className="p-3 border border-gray-200 rounded mt-2"/>

                </div>

                {/* ส่วนของปุ่ม คำนวณ */}
                <button onClick={handleCalBMIClick}
                className="w-full mt-5 py-3 bg-blue-500 rounded-xl text-white
                                    hover:bg-blue-700  cursor-pointer">
                    คำนวณ BMI 
                </button>

                {/* ส่วนของปุ่ม รีเซ็ต */}
                <button onClick={handleResetClick}
                className="w-full mt-5 py-3 bg-gray-500 rounded-xl text-white
                                    hover:bg-gray-700  cursor-pointer">
                    รีเซ็ต 
                </button>

                {/* ส่วนของการแสดงผล BMI */}
                <div className="w-full flex justify-center items-center gap-5 mt-5">
                    <h3>ค่า BMI ที่คำนวณได้</h3>
                    <h3 className="font-bold text-blue-500 text-2xl">
                        {bmiValue}
                    </h3>
                </div>

                {/* ส่วนของการแปลผล BMI */}
                <div className="w-full flex justify-center items-center gap-5 mt-5">
                    <h3>การแปลผล</h3>
                    <h3 className="font-bold text-blue-500 text-2xl">
                        {bmiResult}
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