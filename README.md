# 🎥 **SHOUJO SPHERE**

Yo! Selamat datang di repo **SHOUJO SPHERE** yang berisi _portingan_ dari salah satu website anime. Repo ini dibagun dan diperuntukan sebagai referensi bagi para penyuka anime yang ingin mencoba untuk membuat atau mengembangkan web anime-nya sendiri. Karena repo ini merupakan web portingan, data yang digunakan sudah tentu merupakan bukan data pribadi atau data tidak _official_ yang di dapat dari hasil scarpping dari salah satu web anime [OtakuDesu](https://otakudesu.cloud/).

## 🤖 **AI**
Pada repo ini terdapat fitur rekomendasi yang dibangun dengan menggunakan metode content base filtering, dengan dataset yang di dapatkan dari web [OtakuDesu](https://otakudesu.cloud/).

## 🛠️ **Requirements**

Repo ini dibangun dengan menggunakan **React 18.3.1** dan menggunakan server **Flask 3.1.0**, jadi berikut merupakan requirements yang harus dipenuhi untuk bisa menjalankan program secara optimal:

- Node 22.14.0
- Python 3.12

## ⚙️ **Configurations**

### Native

1. Clone repo

   ```bash
   git clone https://github.com/Hazz-i/shoujo-sphere.git
   ```

2. Masuk directory
   ```bash
   cd shoujo-sphere
   ```

3. Install depedency
   ```bash
   npm install
   ```

4. Jalankan script FE
   ```bash
   npm run dev
   ```

5. Tambahkan terminal dan masuk ke directory server
   ```bash
   cd server
   ```

6. Buat virtual environment
   ```bash
   python -m venv [nama environment]
   ```

7. Jalankan virtual environment
   ```bash
   source ./[nama environment]/scripts/activate # mac / git bash
   .\[nama environment]\scripts\activate # powershell
   ```

8. Install depedency
   ```bash
   pip install -r requirements.txt
   ```

9. Jalankan script BE
   ```bash
   python server.py
   ``` 
### Docker

1. Build docker images
   ```bash
   docker compose build --no-cache
   ```

2. Jalankan docker container
   ```bash
   docker compose up -d
   ```

## 🪛 **Troubleshoot**
* Pastikan env sudah di setup pada FE dan BE
* Jikalau scrapping gagal mungkin web yang di tuju sudah experied
* Pastikan server berjalan untuk dapat meload content
* Sesuaikan requirements

## ➖ **Disadvantages of this repo**
* Kualitas content masih di 360p
* Content tidak dinamis (hanya terdapat tampilan desktop)

## 🗒️ **More**
* Contact jika mau collab
* Jangan lupa kasi star hehehe😁
