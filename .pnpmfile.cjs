// Lokasi: /.pnpmfile.cjs

function readPackage(pkg) {
  // Izinkan semua paket yang ada di dalam daftar ini untuk menjalankan build script.
  // Anda bisa menyalin daftar ini dari pesan warning di terminal Anda.
  const trustedPackages = [
    '@prisma/client',
    'prisma',
    'bcrypt',
    '@nestjs/core',
    'esbuild',
    // Tambahkan paket lain dari daftar warning jika diperlukan di masa depan
  ];

  // Jika nama paket ada di dalam daftar tepercaya kita...
  if (trustedPackages.includes(pkg.name)) {
    // ...maka jangan abaikan skripnya.
    // Ini secara efektif mengizinkan paket tersebut untuk "merakit dirinya sendiri".
    pkg.scripts = pkg.scripts || {};
    pkg.ignoreScripts = false;
  }

  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};