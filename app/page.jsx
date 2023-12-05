"use client";

import Image from "next/image";
import { useState } from "react";
import { createPost } from "./api";

const Home = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (input) {
      try {
        setLoading(true);
        await createPost(input);
        alert("Tweet berhasil dipost!");
      } catch (error) {
        console.error(error);
        alert("Tweet gagal dipost!");
      } finally {
        setLoading(false);
      }
    } else {
      alert("Tweetmu kosong!");
    }
  };

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
          className="h-auto w-auto"
        />
        <h3 className="text-[20px] font-bold tracking-wide">UINSUKA FESS</h3>
      </div>

      <div className="flex flex-col justify-center items-center gap-3">
        {/* TEXTAREA & SUBMIT */}
        <textarea
          className="border-[1px] border-slate-400 p-2"
          cols="30"
          rows="4"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          className="bg-sky-500 text-white tracking-wide font-semibold flex justify-center items-center w-[100px] h-[40px] rounded-full z-30"
          onClick={handleSubmit}
        >
          {loading ? 'Loading...' : 'Tweet!'}
        </button>
      </div>
    </div>
  );
};

export default Home;
