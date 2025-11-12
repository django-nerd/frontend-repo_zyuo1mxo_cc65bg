import React from 'react'

function App() {
  const Cover = () => (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 text-white shadow-xl">
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 800 600">
          <defs>
            <linearGradient id="paint" x1="0" x2="1" y1="0" y2="1">
              <stop stopColor="#ffffff" stopOpacity="0.7" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g fill="url(#paint)">
            <circle cx="100" cy="100" r="80" />
            <circle cx="680" cy="160" r="120" />
            <ellipse cx="400" cy="520" rx="240" ry="80" />
          </g>
        </svg>
      </div>
      <div className="p-8 md:p-12 lg:p-16 relative">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          <div className="flex-1">
            <p className="uppercase tracking-widest text-indigo-200 text-xs mb-3">Portofolio Diri</p>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Menjadi Versi Terbaik dari Diri Sendiri
            </h1>
            <p className="mt-4 text-indigo-100 max-w-2xl">
              A Self-Reflection Keeper
            </p>
            <blockquote className="mt-6 border-l-4 border-white/50 pl-4 italic text-indigo-50">
              “Knowing yourself is the beginning of all wisdom.” — Aristotle
            </blockquote>
            <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur">
                <dt className="text-indigo-100">Nama</dt>
                <dd className="font-semibold">[Nama Anda]</dd>
              </div>
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur">
                <dt className="text-indigo-100">NIM</dt>
                <dd className="font-semibold">[Nomor Induk Mahasiswa]</dd>
              </div>
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur">
                <dt className="text-indigo-100">Program Studi</dt>
                <dd className="font-semibold">Psikologi</dd>
              </div>
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur">
                <dt className="text-indigo-100">Fakultas</dt>
                <dd className="font-semibold">[Fakultas Anda]</dd>
              </div>
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur sm:col-span-2">
                <dt className="text-indigo-100">Tahun Akademik</dt>
                <dd className="font-semibold">2024/2025</dd>
              </div>
            </dl>
          </div>
          <div className="flex-1">
            <div className="relative w-full aspect-[4/5] max-w-sm mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur shadow-2xl border border-white/20 flex items-center justify-center">
                <div className="text-center px-6">
                  <p className="text-sm text-indigo-100">Desain cover</p>
                  <p className="mt-2 text-indigo-50">Latar lukisan tangan, sketsa wajah samar, jam pasir sebagai simbol refleksi waktu.</p>
                </div>
              </div>
              <div className="absolute -inset-6 -z-10 bg-white/10 blur-2xl rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  const Section = ({ id, title, subtitle, children }) => (
    <section id={id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
        {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
      </div>
      <div className="prose prose-indigo max-w-none">
        {children}
      </div>
    </section>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-8 md:space-y-10">
        <Cover />

        <Section id="biodata" title="Biodata">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2 space-y-3 text-gray-700">
              <p><span className="font-semibold">Nama Lengkap:</span> Abri</p>
              <p><span className="font-semibold">Usia:</span> 19 tahun</p>
              <p><span className="font-semibold">Tempat, Tanggal Lahir:</span> Bulucenrana, 31 Maret 2005</p>
              <p><span className="font-semibold">Program Studi:</span> Psikologi</p>
              <p><span className="font-semibold">Jenis Kelamin:</span> Laki-laki</p>
              <p><span className="font-semibold">Kepribadian:</span> INTJ (The Architect)</p>
              <p><span className="font-semibold">Nilai Hidup Utama:</span> Keamanan, Kesehatan Fisik, Kemandirian Finansial, Karier Bermakna</p>
              <p><span className="font-semibold">Bakat:</span> Melukis (ekspresi diri melalui visual)</p>
              <p><span className="font-semibold">Cita-cita:</span> Menjadi profesional di bidang psikologi</p>
              <p><span className="font-semibold">Dosen Pembimbing Akademik (PA):</span> DR. H. Muh. Daud, M. Si</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-40 h-40 rounded-xl bg-gradient-to-br from-indigo-200 to-purple-200 grid place-content-center text-indigo-700 font-medium">
                Foto
              </div>
              <p className="text-xs text-gray-500">Tambahkan foto profil Anda di sini</p>
            </div>
          </div>
        </Section>

        <Section id="my-self" title="My Self" subtitle="Siapa aku, di balik diam, di balik kata 'iya', di balik harapan orang lain?">
          <div className="space-y-5 text-gray-700">
            <p>
              Saya adalah seorang introvert INTJ dengan skor Conscientiousness (29) dan Agreeableness (23) menurut Big Five. Artinya, saya teratur, bertanggung jawab, peduli pada orang lain, tapi juga terlalu sering mengatakan "iya" padahal ingin menolak, karena takut mengecewakan.
            </p>
            <p>
              Saya mudah menangkap ide abstrak, suka belajar (terutama Matematika). Saya percaya diri dalam problem solving, namun mengakui bahwa kreativitas masih menjadi area lemah—yang kini sedang saya latih lewat kelima indra: mengamati warna, merasakan tekstur, mendengar nuansa, dan merefleksikan pengalaman secara sensorik.
            </p>
            <p>
              Nilai-nilai saya stabil: keamanan, kesehatan, kemandirian finansial, dan karier bermakna. Saya ingin hidup yang tidak hanya sukses, tapi juga bermanfaat bagi orang lain.
            </p>
            <div className="bg-indigo-50 border border-indigo-100 text-indigo-900 p-4 rounded-lg">
              <p className="font-semibold">Yang saya pelajari dari refleksi diri:</p>
              <p className="italic">Aku bukan harus sempurna, aku hanya perlu jujur pada kebutuhanku sendiri.</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Area Pengembangan:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Kemampuan berbahasa Inggris</li>
                <li>Asertivitas dalam komunikasi</li>
                <li>Kreativitas melalui eksplorasi indra</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="my-family" title="My Family" subtitle="Rumah bukan hanya tempat, tapi fondasi yang membentukku.">
          <div className="space-y-5 text-gray-700">
            <p>
              Keluarga saya adalah akar kekuatanku, sekaligus sumber tekanan halus yang saya rasakan sejak kecil. Saya dilihat sebagai "harapan masa depan" yaitu seseorang yang kelak akan membawa perubahan. Ini membentuk keyakinan bahwa saya harus bisa diandalkan, tidak boleh mengecewakan, dan menyelesaikan segalanya sendiri.
            </p>
            <p>
              Meski mereka tidak sering mengungkapkan cinta lewat kata-kata, saya merasakannya dalam tindakan: doa sebelum ujian, makanan favorit saat saya lelah, atau pertanyaan kecil lewat saudara. Mereka tidak memaksakan impian, tapi percaya bahwa saya punya kemampuan mendengarkan dan mengajar.
            </p>
            <div className="bg-amber-50 border border-amber-100 text-amber-900 p-4 rounded-lg">
              <p className="font-semibold">Dari keluarga, saya belajar:</p>
              <p className="italic">Tanggung jawab itu penting, tapi merawat diri sendiri juga bukan egois.</p>
            </div>
            <p>
              Saya sedang belajar memisahkan harapan keluarga dari keinginan pribadi, bukan untuk menolak mereka, tapi untuk memastikan bahwa saya tumbuh untuk diri sendiri, bukan hanya demi memenuhi bayangan mereka.
            </p>
          </div>
        </Section>

        <Section id="my-clique" title="My Clique" subtitle="Teman bukan soal banyak, tapi soal seberapa nyaman diam bersama.">
          <div className="space-y-5 text-gray-700">
            <p>
              Saya tidak memiliki banyak teman. Tapi dalam lingkaran kecilku, saya dikenal sebagai pendengar yang baik, teman kerja tim yang bisa diandalkan, dan seseorang yang terbuka terhadap umpan balik.
            </p>
            <p>
              Namun, saya dulu sering menghindari konflik demi menjaga kedamaian. Kini, saya belajar: <span className="italic">Konflik yang dihadapi dengan jujur justru memperkuat kepercayaan.</span>
            </p>
            <div>
              <p className="font-semibold mb-2">Saya menerapkan active listening dalam komunikasi:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Merefleksikan perasaan (“Kamu frustrasi karena merasa tidak benar-benar diberi kebebasan?”)</li>
                <li>Mengajukan pertanyaan terbuka (“Apa yang paling ingin kamu ubah dari situasi ini?”)</li>
                <li>Tidak buru-buru bercerita tentang diriku sendiri</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Lingkaran ideal saya terdiri dari orang-orang yang:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Saling mendukung tanpa menjatuhkan</li>
                <li>Nyaman dengan diam</li>
                <li>Jujur tapi empatik</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="my-career" title="My Career" subtitle="Karier bukan hanya pekerjaan, tapi cara aku berkontribusi pada dunia.">
          <div className="space-y-5 text-gray-700">
            <p>
              Setelah lulus, saya mempertimbangkan dua jalur utama:
            </p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Bekerja di bidang psikologi (misalnya sebagai konselor sekolah atau HRD)</li>
              <li>Melanjutkan S2 untuk memperdalam ilmu dan membuka peluang profesional lebih luas</li>
            </ol>
            <p>
              Saya percaya bahwa pendidikan adalah jalan untuk memberdayakan orang lain dan itu sejalan dengan nilai dan mimpi saya menjadi guru atau psikolog.
            </p>
            <div className="bg-blue-50 border border-blue-100 text-blue-900 p-4 rounded-lg">
              <p className="italic">Namun, saya sadar: Tanpa penguasaan bahasa Inggris dan kemampuan bersosialisasi yang baik, peluang karier global akan tertutup.</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Dua langkah utama saya:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Meningkatkan kemampuan bahasa Inggris (latihan harian, kursus, komunitas)</li>
                <li>Mengikuti proyek kolaboratif untuk melatih komunikasi profesional</li>
              </ul>
            </div>
          </div>
        </Section>

        <footer className="text-center text-sm text-gray-500 pt-4 pb-10">
          © 2024/2025 • Portofolio Diri Abri — “Menjadi Versi Terbaik dari Diri Sendiri”
        </footer>
      </div>
    </div>
  )
}

export default App
