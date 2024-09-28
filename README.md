# Admin Portal untuk Toko Online Jono

## Deskripsi

### Aplikasi ini adalah portal admin untuk mengelola produk biller di toko online Jono. Aplikasi ini memungkinkan admin untuk melakukan login, logout, registrasi, melihat profil, serta mengelola produk (create, update, delete, detail, list with search query). Aplikasi ini juga menyediakan dashboard untuk melihat statistik produk.

Struktur Proyek
Frontend: Menggunakan React.JS
Backend: Menggunakan Node.js dengan Express.js dan Sequelize untuk ORM
Database: MySQL

Prasyarat
Node.js
MySQL

Instalasi
Backend
Clone repository:
git clone (https://github.com/daffatabiano/ass_yodu.git)
cd ass_yodu/backend

Instal dependencies:
npm install

Konfigurasi database: Buat file .env di root folder backend dan tambahkan konfigurasi database:

Jalankan migrasi:

```
npx sequelize-cli db:migrate
```

dan aktifkan XAMPP

```
apache : start
mySQL : start
```

Jalankan server:

```
npm start
```

Clone repository:

```
git clone (https://github.com/daffatabiano/ass_yodu.git)
cd ass_yodu/frontend
```

Instal dependencies:

```
npm install
```

Jalankan aplikasi frontend:

```
npm run dev
```

Penggunaan

## Backend

Endpoint Login: POST /api/auth/login
Body:
JSON

```
{
"email": "user@example.com",
"password": "password"
}
```

Endpoint Register: POST /api/auth/register
Body:
JSON

```
{
"name": "John Doe",
"email": "john.doe@example.com",
"password": "password"
}
```

Endpoint Get User by ID: GET /api/users/:id
Header:
JSON

```
{
"x-auth-token": "Eyhcsadkaskdjkasdka sdkjaskjdjaskasjk"
}
```

## Frontend

### Login: Masukkan email dan password untuk login.

#### Dashboard: Setelah login, Anda akan diarahkan ke dashboard yang menampilkan statistik produk.

#### Kelola Produk: Anda dapat menambahkan, mengupdate, menghapus, dan melihat detail produk.

Fitur
Login
Logout
Register
Profile
Product Management: Create, Update, Delete, Detail, List with Search Query
Dashboard: Total Product, Active Product, Inactive Product, Newest Product (3 latest)
