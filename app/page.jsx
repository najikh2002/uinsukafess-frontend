"use client";

import Image from "next/image";
import axios from "axios";
import { useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");

  const handleSubmit = async () => {
    if(input) {
      useFetch();
    } else {
      alert("Tweetmu kosong!");
    }

  }

  const useFetch = async () => {
    try {
      const apiUrl = "https://uinsuka-fess.onrender.com/createpost";

      const data = {
        text: input,
      };
  
      await axios.post(apiUrl, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      alert("Tweet berhasil dipost!");
    } catch (error) {
      console.log(error);
      alert("Tweet gagal dipost!");
    }
  }

  return ( 
    <div className="flex flex-col w-full min-h-screen justify-start items-center pt-12 gap-6">
      <div className="flex flex-col justify-center items-center gap-3">
        {/* LOGO & TITLE */}
        <Image 
          src={"/logo-uin.png"}
          alt="Logo UINSUKA"
          width={400}
          height={400}
          priority={true}
        />
        <h3 className="text-[20px] font-bold tracking-wide">UINSUKA FESS</h3>
      </div>

      <div className="flex flex-col justify-center items-center gap-3">
        {/* TEXTAREA & SUBMIT */}
        <textarea className="border-[1px] border-slate-400 p-2" name="" id="" cols="30" rows="4" onChange={e => setInput(e.target.value)} value={input} />
        <button className="bg-sky-500 text-white tracking-wide font-semibold flex justify-center items-center w-[100px] h-[40px] rounded-full" onClick={handleSubmit}>Tweet!</button>
      </div>
    </div>
   );
}
 
export default Home;