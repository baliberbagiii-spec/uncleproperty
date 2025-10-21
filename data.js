// data.js
// Array proyek; setiap objek minimal memiliki id, title, location, image, area, price, description
const projects = [
   {
    id: 'purademak',
    title: 'Pura Demak Barat',
    location: 'Jl. Pura Demak Barat, Pemecutan Klod, Denpasar Barat, Bali',
    image: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=1200&q=80&auto=format&fit=crop',
    price: 'Rp 1.700.000.000 / 100m²',
    description: 'Lahan strategis di kawasan berkembang, dekat pusat kota Denpasar dan area bisnis. Cocok untuk rumah tinggal, kost, atau investasi jangka panjang. Akses jalan lebar, lingkungan nyaman, dan legalitas aman (SHM). Peluang terbaik memiliki aset bernilai tinggi di Denpasar Barat!'
  },
  {
    id: 'yeh-gangga',
    title: 'Yeh Gangga',
    location: 'Tabanan, Bali',
    image: 'https://images.unsplash.com/photo-1760462433147-68ebbd5c832e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1548',
    price: 'Rp 530.000.000 / 100m²',
    description: 'Nikmati suasana tenang di kawasan Yeh Gangga, hanya beberapa menit dari pantai yang indah.<br />Lahan ini menawarkan pemandangan alami khas pesisir barat Bali dengan akses jalan yang sudah bagus<br />Cocok untuk investasi jangka panjang, pembangunan villa, atau rumah liburan dengan potensi nilai tanah yang terus meningkat.'
  },
  {
    id: 'jl-muding',
    title: 'Muding',
    location: 'Jl. Muding Mekar, Kerobokan Kaja, Bali',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop',
    price: 'Rp 950.000.000 / are',
    description: 'Terletak di Jl. Muding Mekar, kawasan berkembang yang strategis dekat pusat kota dan Canggu Lingkungan tenang namun tetap mudah dijangkau dari area komersial dan tempat wisata.<br />Pilihan ideal bagi Anda yang mencari kavling untuk hunian modern atau investasi properti dengan prospek cerah.'
  },
  {
    id: 'bongan',
    title: 'Bongan',
    location: 'Jl. Bedugul Asri, Bongan, Tabanan, Bali',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&auto=format&fit=crop',
    price: 'Rp 330.000.000',
    description: 'Kawasan Bongan, Tabanan dikenal dengan udara sejuk dan pemandangan alam yang hijau.<br />Lahan ini menawarkan suasana pedesaan yang asri, cocok untuk villa pribadi, resort, atau rumah bernuansa tropis.<br />Investasi aman dan menjanjikan di daerah yang sedang berkembang pesat di Bali bagian barat.'
  },
  {
    id: 'los-pantai',
    title: 'Los Pantai Lebih',
    location: 'Los Pantai Lebih, Jl. Bypass Ida Bagus Mantra, Gianyar, Bali',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80&auto=format&fit=crop',
    price: 'Rp 950.000.000',
    description: 'Terletak di dekat Pantai Lebih, kawasan ini menghadirkan suasana tenang dengan panorama laut yang mempesona.<br />Akses mudah menuju Sanur dan Ubud menjadikannya lokasi strategis untuk villa sewa atau hunian tropis pribadi.<br />Investasi tanah di Pantai Lebih adalah pilihan tepat bagi Anda yang menginginkan ketenangan sekaligus potensi pertumbuhan nilai tinggi.'
  },
  {
    id: 'baha-mengwi',
    title: 'Baha, Mengwi',
    location: 'Jl. Soka, Baha, Mengwi, Badung, Bali',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80&auto=format&fit=crop',
    price: 'Rp 320.000.000',
    description: 'Berada di wilayah Baha, Mengwi, lokasi ini menawarkan keseimbangan antara ketenangan desa Bali dan akses mudah ke Denpasar maupun Canggu.<br />Lahan kavling ini memiliki potensi besar untuk hunian, villa, atau investasi jangka panjang dengan nilai jual yang stabil.'
  }
];
