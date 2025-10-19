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
    image: 'https://i.postimg.cc/B6yR5T5L/yeh.jpg',
    price: 'Rp 530.000.000 / 100m²',
    description: 'Nikmati suasana tenang di kawasan Yeh Gangga, hanya beberapa menit dari pantai yang indah.<br />Lahan ini menawarkan pemandangan alami khas pesisir barat Bali dengan akses jalan yang sudah bagus<br />Cocok untuk investasi jangka panjang, pembangunan villa, atau rumah liburan dengan potensi nilai tanah yang terus meningkat.'
  },
  {
    id: "muding",
    title: "Muding Mekar",
    location: "Kerobokan, Badung",
    price: "900 juta / are",
    description: "Lokasi strategis dekat pusat kota dan pantai.",
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop'
    ]
  },
  {
    id: 'bongan',
    title: 'Bongan',
    location: 'Jl. Bedugul Asri, Bongan, Tabanan, Bali',
    image: 'https://i.postimg.cc/kG9vPLwR/4.jpg',
    price: 'Rp 330.000.000',
    description: 'Kawasan Bongan, Tabanan dikenal dengan udara sejuk dan pemandangan alam yang hijau.<br />Lahan ini menawarkan suasana pedesaan yang asri, cocok untuk villa pribadi, resort, atau rumah bernuansa tropis.<br />Investasi aman dan menjanjikan di daerah yang sedang berkembang pesat di Bali bagian barat.'
  },
  {
    id: 'los-pantai',
    title: 'Los Pantai Lebih',
    location: 'Los Pantai Gianyar, Gianyar, Bali',
    image: 'https://i.postimg.cc/wvNwpXp0/6.jpg',
    price: 'Rp 950.000.000',
    description: 'Terletak di dekat Pantai Lebih, kawasan ini menghadirkan suasana tenang dengan panorama laut yang mempesona.<br />Akses mudah menuju Sanur dan Ubud menjadikannya lokasi strategis untuk villa sewa atau hunian tropis pribadi.<br />Investasi tanah di Pantai Lebih adalah pilihan tepat bagi Anda yang menginginkan ketenangan sekaligus potensi pertumbuhan nilai tinggi.'
  },
  {
    id: 'baha-mengwi',
    title: 'Baha, Mengwi',
    location: 'Jl. Soka, Baha, Mengwi, Badung, Bali',
    image: 'https://i.postimg.cc/QxKdrV99/9.jpg',
    price: 'Rp 320.000.000',
    description: 'Berada di wilayah Baha, Mengwi, lokasi ini menawarkan keseimbangan antara ketenangan desa Bali dan akses mudah ke Denpasar maupun Canggu.<br />Lahan kavling ini memiliki potensi besar untuk hunian, villa, atau investasi jangka panjang dengan nilai jual yang stabil.'
  }
];
