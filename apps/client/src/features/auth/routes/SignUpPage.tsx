import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';

// Asumsi: Proyek Anda sudah dikonfigurasi dengan Tailwind CSS.
// Font 'Inter' bisa diimpor di file CSS global atau index.html Anda.

/**
 * Komponen Latar Belakang Gradasi Holografik.
 * Menciptakan efek visual yang lembut dan modern dengan menumpuk
 * beberapa elemen lingkaran berwarna yang diberi efek blur kuat.
 * @returns {JSX.Element} Komponen latar belakang yang siap pakai.
 */
const SignUpPage: React.FC = () => {
  return (
    // Kontainer Utama
    // 'relative' diperlukan agar elemen 'absolute' di dalamnya bisa diposisikan relatif terhadap kontainer ini.
    // 'overflow-hidden' memastikan efek blur tidak keluar dari batas kontainer.
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-900">
      
      {/* Lapisan Efek Gradasi (Aurora/Holographic) */}
      {/* Ini adalah div yang berisi semua lingkaran berwarna yang akan di-blur */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        {/* Lingkaran 1: Ungu */}
        {/* 'absolute' untuk memposisikan secara bebas */}
        {/* 'rounded-full' untuk membuatnya menjadi lingkaran */}
        {/* 'bg-purple-600' adalah warna dasar */}
        {/* 'opacity-30' agar warnanya tidak terlalu pekat */}
        {/* 'blur-[150px]' adalah kunci untuk menciptakan efek gradasi yang sangat lembut */}
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-purple-600 opacity-30 blur-[150px]"></div>
        
        {/* Lingkaran 2: Pink */}
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-pink-500 opacity-30 blur-[150px]"></div>

        {/* Lingkaran 3: Biru Muda */}
        <div className="absolute -bottom-24 left-16 h-80 w-80 rounded-full bg-cyan-400 opacity-20 blur-[120px]"></div>

        {/* Lingkaran 4: Kuning/Emas (untuk sentuhan hangat) */}
        <div className="absolute top-24 right-16 h-72 w-72 rounded-full bg-yellow-300 opacity-20 blur-[120px]"></div>
      </div>

      {/* Konten di Atas Latar Belakang */}
      {/* 'relative z-10' memastikan konten ini berada di atas lapisan gradasi */}
      <div className="relative z-10 text-center text-white">
        <div>
    <div className="space-y-2 text-left mb-8">
      <h1 className="text-3xl font-bold">Welcome Back</h1>
      <p className="text-muted-foreground">
        please enter your account detail
      </p>
    </div>
    <div className="grid gap-6">
      <div className="grip gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="jhondoe@gmail.com" required className="bg-transparent border-2 border-b-2 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0" />
      </div>
    </div>
    <div className="grid gap-6">
      <div className="grip gap-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" required className="bg-transparent border-2 border-b-2 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0" />
      </div>
    </div>
  </div>
      </div>

    </div>
  );
};


export default SignUpPage;
