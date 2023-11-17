let express = require("express");
let app = express();
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );  
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});

customers = [
    {  custId: 1,  name: "ABC",  password: "abc1234",  role: "admin",  email: "abc@gmail.com"},
    {  custId: 2,  name: "Willie",  password: "willie1234",  role: "student",  email: "willie@gmail.com"},
    {  custId: 3,  name: "Jack",  password: "jack1234",  role: "faculty",  email: "jack@gmail.com"},
    {  custId: 4,  name: "James",  password: "james1234",  role: "student",  email: "james@gmail.com"},
    {  custId: 5,  name: "Harry",  password: "harry1234",  role: "faculty",  email: "harry@gmail.com"},
    {  custId: 6,  name: "Tia",  password: "tia1234",  role: "student",  email: "tia@gmail.com"},
    {  custId: 7,  name: "Aditya",  password: "aditya123",  role: "faculty",  email: "aditya@gmail.com"},
    {  custId: 8,  name: "Sonu",  password: "sonu1234",  role: "student",  email: "sonu@gmail.com"},
    {  custId: 9,  name: "Ellie",  password: "ellie1234",  role: "student",  email: "ellie@gmail.com"},
    {  custId: 10,  name: "Gia",  password: "gia1234",  role: "faculty",  email: "gia@gmail.com"}
  ];
  let courses = [
    {  courseId: 1,  name: "ANGULAR",  code: "ANG97",  description: "All fundamentals of Angular 7",  faculty: ["Daniel", "Jack"],  students: ["Sam"]},
    {  courseId: 2,  name: "JAVASCRIPT",  code: "JS124",  description: "Intoduction to javascript",  faculty: ["Aditya"],  students: ["James", "Joy", "Monu", "Rita"]},
    {  courseId: 3,  name: "REACT",  code: "RCT56",  description: "React Javascript library",  faculty: ["Jack", "Gia"],  students: ["Raima", "Rita", "Sonu", "James"]},
    {  courseId: 4,  name: "BOOTSTRAP",  code: "BS297",  description: "Bootstrap Designing Framework",  faculty: [],  students: ["James", "Tia", "Ellie"]},
    {  courseId: 5,  name: "CSS",  code: "CS365",  description: "Basic stylesheet language",  faculty: [],  students: ["James", "Rita", "Monica"]},
    {  courseId: 6,  name: "REST AND MICROSERVICES",  code: "RM392",  description: "Introduction to Microservices",  faculty: [],  students: ["Sam"]},
    {  courseId: 7,  name: "NODE",  code: "ND725",  description: "Introduction to Node",  faculty: ["Sonia"],  students: ["Saransh", "Shrey", "Monica"]}
  ];
  faculties = [
    { id: 5, name: "Daniel", courses: ["ANGULAR"] },
    { id: 4, name: "Sonia", courses: ["NODE"] },
    { id: 3, name: "Jack", courses: ["REACT", "ANGULAR"] },
    { id: 2, name: "Gia", courses: ["REACT"] },
    { id: 1, name: "Aditya", courses: ["ANGULAR"] }
  ];
  classes = [
    {  classId: 1,  course: "REACT",  time: "07:45",  endTime: "08:45",  topic: "Redux",  facultyName: "Jack"},
    {  classId: 2,  course: "ANGULAR",  time: "15:45",  endTime: "17:40",  topic: "Component",  facultyName: "Jack"},
    {  classId: 3,  course: "JAVASCRIPT",  time: "15:45",  endTime: "17:40",  topic: "Component",  facultyName: "Aditya"}
  ];
  students = [
    {  id: 16,  name: "Willie",  dob: "31-July-1997",  gender: "male",  about: "Pursuing Graduation",  courses: ["ANGULAR", "NODE"]},
    {  id: 15,  name: "Tia",  dob: "30-July-1997",  gender: "male",  about: "Pursuing Graduation",  courses: []},
    {  id: 14,  name: "Apoorv",  dob: "31-August-1998",  gender: "male",  about: "Want to learn new technologies",  courses: []},
    {  id: 13,  name: "Joy",  dob: "31-July-1997",  gender: "male",  about: "Pursuing Graduation",  courses: ["JAVASCRIPT"]},
    {  id: 12,  name: "Rachel",  dob: "31-August-1998",  gender: "female",  about: "Pursuing Graduation",  courses: []},
    {  id: 11,  name: "Monica",  dob: "30-July-1997",  gender: "female",  about: "Want to learn new technologies",  courses: ["CSS", "NODE"]},
    {  id: 10,  name: "Monu",  dob: "12-May-1997",  gender: "male",  about: "Pursuing Graduation",  courses: ["JAVASCRIPT"]},
    {  id: 9,  name: "Sonu",  dob: "12-May-1997",  gender: "male",  about: "Pursuing Graduation",  courses: ["REACT"]},
    {  id: 8,  name: "Raima",  dob: "30-July-1997",  gender: "female",  about: "Want to learn new technologies",  courses: ["REACT"]},
    {  id: 7,  name: "Rita",  dob: "31-August-1998",  gender: "female",  about: "Pursuing Graduation",  courses: ["JAVASCRIPT", "REACT", "CSS"]},
    {  id: 6,  name: "Shrey",  dob: "12-May-1997",  gender: "male",  about: "Pursuing Graduation",  courses: ["NODE"]},
    {  id: 5,  name: "Saransh",  dob: "31-July-1997",  gender: "male",  about: "Want to learn new technologies",  courses: ["NODE"]},
    {  id: 4,  name: "Sanya",  dob: "31-July-1997",  gender: "male",  about: "Want to learn new technologies",  courses: []},
    {  id: 3,  name: "James",  dob: "12-July-1994",  gender: "male",  about: "Pursuing Graduation",  courses: ["JAVASCRIPT", "BOOTSTRAP", "CSS", "REACT"]},
    {  id: 2,  name: "Sam",  dob: "12-July-1994",  gender: "male",  about: "Pursuing Graduation",  courses: ["ANGULAR", "REST AND MICROSERVICES"]},
    {  id: 1,  name: "Ellie",  dob: "12-June-1992",  gender: "female",  about: "Want to learn new technologies",  courses: ["BOOTSTRAP"]}
  ];
  let studName = [ "Ellie","Sam","James","Sanya","Saransh","Shrey","Rita","Raima","Sonu","Monu","Monica","Rachel","Joy","Apoorv","Tia","Willie"];
  let facltName = ["Daniel", "Sonia", "Jack", "Gia", "Aditya"];
  const port= 2410;
  app.listen(port, () => console.log(`Node app listening on port ${port}!`));

  app.get("/getStudentNames", function(req, res) {
    res.send(studName);
  });
  app.get("/getFacultyNames", function(req, res) {
    res.send(facltName);
  });

  app.post("/login", function(req, res) {
    let email = req.body.email;
    let password = req.body.password;
  
    let cust = customers.find(function(item) {
      return item.email === email && item.password === password;
    });
    console.log(cust);
    let custRec= {
      role: cust.role,
      name:cust.name,
    }
    //if null then send error
    res.send(custRec);
  });

  app.post("/register", function(req, res) {
    const cust = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    };
    customers.unshift(cust);
    let customerRes= {
      name: req.body.name,
      email: req.body.email,
      role: req.body.role
    }
    res.send(customerRes);
  });

  app.get("/getCourses", function(req, res) {
    res.send(courses);
  });

  app.get("/getCourse/:courseId", function (req, res) {
    let courseId = req.params.courseId;
    // console.log(courseId);
    let obj = courses.find((obj1) => obj1.courseId == courseId);
    // console.log(obj);
    obj ? res.send(obj) : res.send("not found");
  });

  app.put("/putCourse/:id",function(req,res){
    let id = req.params.id;
  let course = req.body;
  let index = courses.findIndex((obj1) => obj1.courseId == id);
  if (index >= 0) {
    courses[index] = course;
    res.send(course);
  } else res.send("not found");
  })

  app.get("/getStudents",function(req,res){
  let course = req.query.course;
  // let courseArr = [];
  let arr1 = students; 
  if(course){
    let courseArr = course.split(",");
    // console.log(courseArr);
    arr1 = arr1.filter((el)=>el.courses.find((elem)=>courseArr.find((course)=>course==elem)));
  }else{
    arr1;
  }
  let resArr = pagination(arr1, parseInt(req.query.page));

  res.json({
    page: parseInt(req.query.page),
    items: resArr,
    totalItems: resArr.length,
    totalNum: arr1.length
  });
  })
  app.get("/getFaculty",function(req,res){
  let course = req.query.course;
  // let courseArr = [];
  let arr1 = faculties; 
  if(course){
    let courseArr = course.split(",");
    // console.log(courseArr);
    arr1 = arr1.filter((el)=>el.courses.find((elem)=>courseArr.find((course)=>course==elem)));
  }else{
    arr1;
  }
  let resArr = pagination(arr1, parseInt(req.query.page));

  res.json({
    page: parseInt(req.query.page),
    items: resArr,
    totalItems: resArr.length,
    totalNum: arr1.length
  });
  })

  //student

  app.get("/getStudentDetails/:name", function(req, res) {
    let user = req.params.name;
    let list = students.filter(function(item) {
      return item.name === user;
    });
    // console.log(list);
    res.send(list);
  });

  app.get("/getStudentCourse/:name", function(req, res) {
    let user = req.params.name;
    let list = courses.filter(function(item) {
      return item.students.find((nm)=>nm === user);
    });
    // console.log(list);
    res.send(list);
  });

  app.get("/getStudentClass/:name", function(req, res) {
    let user = req.params.name;
    if(user){
      res.send(classes);
    }else{
      res.send("Not Found");
    }
    // console.log(list);
  });

  app.post("/postStudentDetails", function(req, res) {
    const cust = {
      name: req.body.name,
      dob: req.body.dob,
      gender: req.body.gender,
      about: req.body.about
    };
    students.unshift(cust);
    let customerRes= {
      id:id,
      name: req.body.name,
      dob: req.body.dob,
      gender: req.body.gender,
      about: req.body.about,
      courses:req.body.courses
    }
    res.send(customerRes);
  });

  app.put("/putStudentDetails/:id",function(req,res){
    let id = req.params.id;
  let detail = req.body;
  let index = students.findIndex((obj1) => obj1.id == id);
  if (index >= 0) {
    students[index] = detail;
    res.send(detail);
  } else res.send("not found");
  })

  //Faculty...

  app.get("/getFacultyCourse/:name", function(req, res) {
    let user = req.params.name;
    let list = courses.filter(function(item) {
      return item.faculty.find((nm)=>nm === user);
    });
    // console.log(list);
    res.send(list);
  });

  
  app.get("/getFacultyClass/:name", function(req, res) {
    let user = req.params.name;
    let list = classes.filter(function(item) {
      return item.facultyName === user;
    });
    // console.log(list);
    res.send(list);
  });

  app.get("/getClass/:id",function(req,res){
    let id = +req.params.id;
    let arr = classes.find((ele)=> ele.classId === id);
    // console.log("class",classes,id);
    res.send(arr);
  })
  app.put("/putClass/:id",function(req,res){
    let id = +req.params.id;
    const detail = req.body;
    let index = classes.findIndex((obj1) => obj1.classId === id);
    if (index >= 0) {
      classes[index] = detail;
      res.send(detail);
    } else res.send("not found");
  })

  app.post("/postClass", function(req, res) {
    let body = req.body;
    let maxId = classes.reduce((ele,curr)=>curr.classId >= ele ? curr.classId : ele , 0);
    let newId = maxId + 1;
    let newCustomer = {classId:newId, ...body};
    // console.log(newCustomer)
    classes.unshift(newCustomer);
    let customerRes= {
      classId:req.body.classId,
      course: req.body.course,
      time: req.body.time,
      endTime: req.body.endTime,
      topic: req.body.topic,
      facultyName: req.body.facultyName
    }
    res.send(customerRes);
  });


  function pagination(obj, page) {
    const postCount = obj.length;
    const perPage = 3;
    //const pageCount = Math.ceil(postCount / perPage);
    let resArr = obj;
    resArr = resArr.slice(page * 3 - 3, page * 3);
    return resArr;
  }