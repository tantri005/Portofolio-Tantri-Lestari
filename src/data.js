import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/visualstudio.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/laravel.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Visual Studio",
    ket: "Code Editor",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Laravel",
    ket: "PHP Framework",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "POS (Point of Sales)",
    desk: "Sistem Point of Sales (POS) berbasis web yang dirancang untuk membantu pengelolaan produk, transaksi penjualan, dan pemantauan data melalui dashboard yang sederhana dan mudah digunakan.",
    tools: ["Html", "Css", "Javascript", "Php", "MySql", "Bootstrap"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "HadirIn",
    desk: "Aplikasi absensi berbasis QR Code yang memudahkan proses pencatatan kehadiran secara digital. Sistem ini terintegrasi dengan API WhatsApp Gateway untuk mengirimkan notifikasi otomatis kepada orang tua setiap kali siswa melakukan absensi, sehingga informasi kehadiran dapat diterima secara real-time dan lebih efisien.",
    tools: ["Html", "Bootstrap", "Laravel"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Landing Page Santri Bumi",
    desk: "Landing page yang dibuat untuk menampilkan profil, program, dan informasi Santri Bumi secara informatif. Dikembangkan sebagai proyek nyata berdasarkan permintaan klien dengan mengutamakan pengalaman pengguna dan aksesibilitas.",
    tools: ["Html", "Bootstrap", "Css"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Website Course",
    desk: "Landing page platform kursus yang dirancang untuk memperkenalkan berbagai program pelatihan dan layanan pendidikan. Website ini berfokus pada penyajian informasi yang terstruktur sehingga memudahkan pengguna dalam mengenal program yang tersedia.",
    tools: ["Html", "Css", "Bootstrap", "JavaScript"],
    dad: "500",
  },
 
];
