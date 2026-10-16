# StudentsRESTAPI 🎓

A simple REST API for managing student records, built with **Node.js** and **Express.js**.

This project demonstrates the basic CRUD operations used in backend development. Student records are stored in an in-memory JavaScript array.

## 🚀 Features

- Create a new student
- Retrieve all students
- Retrieve a student by ID
- Update student information
- Delete a student
- Handle requests using REST API endpoints

## 🛠️ Technologies

- Node.js
- Express.js
- JavaScript
- Postman for API testing

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/calhassan101/StudentsRESTAPI.git
```

### 2. Open the project folder

```bash
cd StudentsRESTAPI
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
node app.js
```

The server runs on port **3001**.

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/students` | Create a student |
| GET | `/students` | Get all students |
| GET | `/students/:id` | Get a student by ID |
| PUT | `/students/:id` | Update a student |
| DELETE | `/students/:id` | Delete a student |

## 📝 Note

This project uses an in-memory array, so student records are not permanently stored. Data resets when the server restarts.

## 👨‍💻 Author

**Charles Alhassan**

- GitHub: [@calhassan101](https://github.com/calhassan101)

