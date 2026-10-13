const express = require("express");
const app = express();

app.use(express.json()); //middleware to parse JSON request bodies



// in-memory database
let students = [{id: 1, name: "Charles Alhassan", age:
    20, course: "Computer Science", email :
     "charlesalhassan@gmail.com", matric :"Eng1234567", level: "300",
     faculty:"Engineering", houseNumber: "12"

}];
    

// CREATE - Add a new student
app.post("/students", (req, res) => {
    console.log(req, res);
    const {name, age, course, email, matric, level, faculty, houseNumber} =
    req.body;

    const newStudent = {
    id: students.length?
students[students.length - 1].id +
1:1,
name,
age,
course,
email,
matric,
level,
faculty,
houseNumber
};

students.push(newStudent);

res.status(201).json({
    message: "Student added successfully",
    student: newStudent
});
});



// Read- Get all students
app.get("/students", (req, res) =>{
    res.json(students);
});


// READ - Get student by ID
app.get("/students/:id",(req, res) => {
    const student = students.find(s=> s.id ===
        parseInt(req.params.id)
    );


    if (!student) {
        return res.status(404).json({
            message: "Student not found"
    });
    }
    res.json(student);
});

    // UPDATE- update student by ID
   app.put("/students/:id", (req, res) => {
    const student = students.find(s=>s.id ===
        parseInt(req.params.id)
    );


    if (!student){
        return
    res.status(404). json({message:
        "Student not found"
    });
}
const{name, age, course, email,matric, level,faculty, houseNumber}
=
req.body;

student.name = name ||
student.name;
student.age = age?? student.age;
student.course = course||
student.course;
student.email= email||
student.email;
student.matric= matric||
student.matric;
student.level = level||
student.level;
student.faculty=faculty||
student.faculty;
student.houseNumber =houseNumber||
student.houseNumber;

res.json({
    message: "Student updated successfully",
    student
});
   });



   //DELETE- Delete student by ID
   app.delete("/students/:id", (req, 
    res)=>{
    const id =
    parseInt(req.params.id);
    const index =
    students.findIndex(s => s.id ===id);

    if (index ===-1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const deletedStudent = 
    students.splice(index, 1);

    res.json({
        message: "Student deleted successfully",
        student: deletedStudent[0]
    });

});

//Start Server
const PORT = 3001;
app.listen(PORT, ()=>
console.log(`Server running on port ${PORT}`));


   

