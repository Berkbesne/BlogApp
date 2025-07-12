# BlogApp

Modern bir blog uygulaması - React frontend ve Express.js backend ile geliştirilmiş, Supabase veritabanı kullanan tam kapsamlı bir web uygulaması.

## 🚀 Özellikler

- **Blog Yazıları**: Kullanıcılar blog yazıları oluşturabilir ve görüntüleyebilir
- **İletişim Formu**: Ziyaretçiler iletişim formu ile mesaj gönderebilir
- **Modern UI**: Tailwind CSS ile tasarlanmış responsive arayüz
- **Real-time Veritabanı**: Supabase ile güvenli ve hızlı veri yönetimi
- **RESTful API**: Express.js ile geliştirilmiş backend API
- **Responsive Design**: Mobil ve masaüstü uyumlu tasarım

## 🛠️ Teknoloji Stack

### Frontend

- **React 19** - Modern UI framework
- **React Router DOM** - Sayfa yönlendirme
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Hızlı build tool

### Backend

- **Express.js** - Node.js web framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables yönetimi

### Veritabanı

- **Supabase** - PostgreSQL tabanlı backend-as-a-service

## 📦 Kurulum

### Gereksinimler

- Node.js (v18 veya üzeri)
- npm veya yarn

### 1. Repository'yi klonlayın

```bash
git clone <repository-url>
cd BlogApp
```

### 2. Backend kurulumu

```bash
cd server
npm install
```

### 3. Frontend kurulumu

```bash
cd ../client
npm install
```

## 🚀 Çalıştırma

### Backend'i başlatın

```bash
cd server
node server.js
```

Backend http://localhost:5000 adresinde çalışacak.

### Frontend'i başlatın

```bash
cd client
npm run dev
```

Frontend http://localhost:5173 adresinde çalışacak.

## 📁 Proje Yapısı

```
BlogApp/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React bileşenleri
│   │   │   └── Header.jsx  # Navigasyon header'ı
│   │   ├── pages/         # Sayfa bileşenleri
│   │   │   ├── Home.jsx    # Ana sayfa (blog yazıları)
│   │   │   ├── About.jsx   # Hakkımızda sayfası
│   │   │   └── Contact.jsx # İletişim sayfası
│   │   ├── assets/        # Statik dosyalar
│   │   ├── App.jsx        # Ana uygulama bileşeni
│   │   └── main.jsx       # Uygulama giriş noktası
│   ├── public/            # Public dosyalar
│   ├── index.html         # HTML template
│   ├── vite.config.js     # Vite konfigürasyonu
│   └── package.json
├── server/                # Express.js backend
│   ├── server.js          # Ana server dosyası
│   └── package.json
├── .gitignore            # Git ignore dosyası
└── README.md
```

## 🔧 API Endpoints

### Blog Yazıları

- `GET /posts` - Tüm blog yazılarını getir
- `POST /posts` - Yeni blog yazısı ekle (name, title, content)

### İletişim

- `GET /contacts` - Tüm iletişim mesajlarını getir
- `POST /contact` - Yeni iletişim mesajı ekle (name, email, message)

## 🎨 Sayfalar ve Özellikler

### 🏠 Ana Sayfa (Home)

- Blog yazılarını görüntüleme
- Yeni blog yazısı ekleme formu
- Gerçek zamanlı güncelleme

### ℹ️ Hakkımızda (About)

- Proje hakkında bilgi
- Ekip tanıtımı
- Misyon ve vizyon

### 📞 İletişim (Contact)

- İletişim formu (isim, email, mesaj)
- Form validasyonu
- Başarı/hata mesajları

### 🧭 Navigasyon

- Responsive header menüsü
- Sayfa yönlendirmeleri
- Aktif sayfa göstergesi

## 🎨 UI/UX Özellikleri

- **Modern Tasarım**: Tailwind CSS ile temiz ve modern arayüz
- **Responsive**: Mobil ve masaüstü uyumlu
- **Gradient Arka Plan**: Mavi tonlarında gradient tasarım
- **Hover Efektleri**: İnteraktif buton ve link efektleri
- **Form Validasyonu**: Client-side form kontrolü
- **Loading States**: Kullanıcı deneyimi için loading durumları

## 🔒 Güvenlik

- CORS yapılandırması
- Input validation
- Environment variables kullanımı
- Supabase güvenlik özellikleri

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📞 İletişim

Proje hakkında sorularınız için issue açabilir veya iletişim formunu kullanabilirsiniz.

---

**Not**: Bu proje geliştirme aşamasındadır. Yeni özellikler ve iyileştirmeler sürekli eklenmektedir.
