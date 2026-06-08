import { useState, useEffect } from "react";
import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
 return ( <div className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white min-h-screen transition-all duration-300">
  
  {/* Ini bagian Beranda */}
    <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div className="animate__animated animate__fadeInUp animate__delay-3s">
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
          <q>Failure is a valuable lesson for achieving success.❤️‍🔥</q>
        </div>
        <h1 className="text-5xl/light font-bold mb-6">Hello, I'm Tantri Lestari</h1>
        <p className="text-base/loose mb-6 opacity-50">an Informatics Engineering 
            student with a passion for technology, problem-solving, and continuous learning. My journey began
            with Software Engineering, where I developed a strong interest in programming and digital innovation.
            Today, I continue to explore different areas of software development, build projects, and grow through
            every opportunity to learn and collaborate.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">
              Donwload CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
  href="#proyek"
  className="bg-zinc-200 dark:bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-300 dark:hover:bg-zinc-600"
>
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
      </div>
      <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] rounded-[15px] md:ml-auto
        animate__animated animate__fadeInUp animate__delay-4s" loading="lazy" />
    </div>

  {/* Ini bagian tentang */}
    <div className="tentang mt-32 py-10" id="tentang">
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" 
        data-aos="fade-up" data-aos-duration="1000" data-oas-once="true">
        <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 
        sm:hidden" loading="lazy" />
        <p className="text-base/loose mb-10">
          I am Tantri Lestari, an Informatics Engineering student at Universitas Airlangga and
           a Software Engineering graduate from SMKN 1 Slawi. My interest in technology started 
           when I was introduced to programming during vocational school, and since then I have 
           enjoyed learning how technology works and how it can be used to solve real-world problems. <br />
           Through academic projects, internship experiences, and self-learning, I have gained valuable
           technical and soft skills, including teamwork, communication, and problem-solving. I enjoy 
           exploring new technologies, building projects, and continuously challenging myself to learn and grow.
           While I am still discovering the path that best fits my interests within software development, I am 
           excited about every opportunity to create, collaborate, and make a positive impact through technology.
        </p>
        <div className="flex items-center justify-between">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block 
          hidden" loading="lazy" />
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1">
                42<span className="text-violet-500">+</span>
                </h1>
                <p>Projects Completed</p>
            </div>
            <div>
              <h1 className="text-4xl mb-1">
                3<span className="text-violet-500">+</span>
                </h1>
                <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      <div className="tools mt-32">
        <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-oas-once="true">Tools yang di pakai</h1>
        <p className="xl:w-2/5 lg:-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-oas-once="true">Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan Website ataupun Design</p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

          {listTools.map(tool => (
            <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-oas-once="true">
            <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
            <div>
              <h4 className="font-bold">{tool.nama}</h4>
              <p className="opacity-50">{tool.ket}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>

  {/* Ini bagian Proyek */}
         <div className="proyek mt-32 py-10" id="proyek">
  <h1
    className="text-center text-4xl font-bold mb-2"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-once="true"
  >
    Proyek
  </h1>

  <p
    className="text-base/loose text-center opacity-50"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="300"
    data-aos-once="true"
  >
    Berikut ini beberapa proyek yang telah saya buat.
  </p>

  <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 items-stretch">
    {listProyek.map((proyek) => (
      <div
        key={proyek.id}
        className="p-4 bg-zinc-800 rounded-md flex flex-col h-full"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay={proyek.dad}
        data-aos-once="true"
      >
        <img
          src={proyek.gambar}
          alt="Project Image"
          loading="lazy"
          className="w-full"
        />

        <div className="flex flex-col flex-1">
          <h1 className="text-2xl font-bold my-4">
            {proyek.nama}
          </h1>

          <p className="text-base/loose mb-4">
            {proyek.desk}
          </p>

          <div className="flex flex-wrap gap-2">
            {proyek.tools.map((tool, index) => (
              <p
                key={index}
                className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
              >
                {tool}
              </p>
            ))}
          </div>

          <div className="mt-auto pt-8 text-center">
            <a
              href="#"
              className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600 transition-all duration-300"
            >
              Lihat Website
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  {/* Ini bagian Kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-oas-once="true">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacitiy-50"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-oas-once="true">Mari terhubung dengan saya</p>
        <form action="https://formsubmit.co/ltantri71@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-oas-once="true">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukan Nama..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input type="email" name="email" placeholder="Masukan Email..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan">Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
  </div>
  );
}

export default App
