# QR vs Code128

## QR Code
- 2D (two-dimensional)
- Data horizontal + vertical store karta hai.
- Text, URL, contact details store kar sakta hai.
- Camera se scan hota hai.

## Code 128
- 1D (one-dimensional)
- Data lines ki width aur spacing mein encode hota hai.
- Letters, numbers aur symbols store kar sakta hai.
- Barcode scanner se commonly scan hota hai.



## Folder structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.js   //mongo ke badle sqlite .
│   ├── routes/
│   │   ├── barcode.routes.js
│   │   ├── qr.routes.js
│   │   └── history.routes.js
│   ├── controllers/
│   ├── services/
│   └── app.js
├── database.sqlite
├── server.js
├── package.json
└── .gitignore

```

# Package Installation
install express better-sqlite3 bwip-js qrcode 

# generation flow

## . QR Code Generation Flow
1. User text ya URL enter karta hai.
2. Backend input validate karta hai.
3. qrcode library toBuffer() se PNG image generate karti hai.
4. QR generation ki history SQLite mein save hoti hai.
5. Backend image/png response client ko bhej deta hai.

## #Barcode Generation Flow
1. User product ID ya text enter karta hai.
2. Backend input validate karta hai.
3. bwip-js library toBuffer() se Code128 barcode PNG generate karti hai.
4. Barcode generation ki history SQLite mein save hoti hai.
5. Backend image/png response client ko bhej deta hai.