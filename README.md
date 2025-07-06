# 🧠 Whatchat - Mạng xã hội mini clone
<img src="https://github.com/HitDrama/What-chat/blob/main/static/WhatChat.png" alt="Whatchat Banner" style="display: block; margin: auto; width: 100%; max-width: 800px;" />

**Whatchat** là một ứng dụng mạng xã hội nhỏ được xây dựng bằng MERN Stack. Dự án hỗ trợ các tính năng phổ biến như đăng bài, thích, bình luận, lưu bài viết, chỉnh sửa hồ sơ cá nhân và nhắn tin trực tuyến theo thời gian thực.

---

## 🎥 Demo
<p align="center">
  <img src="https://github.com/HitDrama/What-chat/blob/main/static/whatchat.gif" alt="Whatchat Demo" width="600"/>
</p>

## 🚀 Tính năng nổi bật

- 📝 Đăng bài viết
- 🗑️ Xóa bài viết
- ❤️ Thích (like) bài viết
- 💬 Bình luận (comment)
- 🔖 Lưu bài viết (bookmark)
- 📬 Nhắn tin realtime giữa người dùng
- 🧑‍💼 Chỉnh sửa thông tin hồ sơ cá nhân

---

## 🛠 Công nghệ sử dụng

- **Frontend**: React + TailwindCSS + UI Kit [shadcn/ui](https://ui.shadcn.com/)
- **Backend**: Node.js + Express
- **Cơ sở dữ liệu**: MongoDB Atlas
- **Realtime**: Socket.io
- **Cloud Media**: Cloudinary API

---

## ⚙️ Hướng dẫn cài đặt và chạy dự án

> 💡 Dự án chia thành 2 phần: `frontend` và `backend`. Bạn cần cài đặt riêng cho từng phần.

### 1. Clone dự án

```bash
git clone https://github.com/yourusername/whatchat.git
cd whatchat
```
### 2. Cài đặt phụ thuộc
Backend:
```bash
cd backend
npm install
```
Frontend:
```bash
cd ../frontend
npm install
```
### 3. Tạo file .env trong thư mục backend
```env
PORT=8000
MONGO_URI=mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.mqzf4ab.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
SECRET_KEY=<YOUR_SECRET_KEY>
API_KEY=<YOUR_API_KEY>
API_SECRET=<YOUR_API_SECRET>
CLOUD_NAME=<YOUR_CLOUD_NAME>
URL=http://localhost:5173
```
### 4. Khởi chạy dự án
Chạy riêng frontend và backend ở 2 terminal khác nhau:

**Backend**:
```bash
npm run dev
```
**Frontend**:
```bash
npm run dev
```

## 👨‍💻 Được phát triển bởi
**Developer: Đặng Tố Nhân**
