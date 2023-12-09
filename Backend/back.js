const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const cors = require("cors");
const app = express();

app.use(cors())
app.use(express.json());


let ADMINS = [];
let STUDENTS = [];
let COLLEGES = [];

// Read data from file, or initialize to empty array if file does not exist
try {
	ADMINS = JSoN.parse(fs.readFileSync('admins.json', 'utf8'));
    STUDENTS = JSON.parse(fs.readFileSync('students.json', 'utf8'));
    COLLEGES = JSON.parse(fs.readFileSync('colleges.json', 'utf8'));
} catch {
	ADMINS = [];
    STUDENTS = [];
    COLLEGES = [];
}
console.log(ADMINS);
console.log(STUDENTS);

const SECRET ='my-secret-key';

// authentication for students
const authenticateJwt = (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (authHeader) {
	  const token = authHeader.split(' ')[1];
	  jwt.verify(token, SECRET, (err, student) => {
		if (err) {
		  return res.sendStatus(403);
		}
		req.student = student;
		next();
	  });
	} else {
	  res.sendStatus(401);
	}
  };

  // authentication for admins 
  const authenticateAdminJwt = (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (authHeader) {
	  const token = authHeader.split(' ')[1];
	  jwt.verify(token, SECRET, (err, admin) => {
		if (err) {
		  return res.sendStatus(403);
		}
		req.admin = admin;
		next();
	  });
	} else {
	  res.sendStatus(401);
	}
  };

  // admin me route
app.get('/admin/me' , authenticateJwt, (req, res) => {
	res.json({ username : req.user.username})
  })
  
  // Admin routes
  app.post('/admin/signup', (req, res) => {
	const { username, password } = req.body;
	const admin = ADMINS.find(a => a.username === username);
	console.log("admin signup");
	if (admin) {
	  res.status(403).json({ message: 'Admin already exists' });
	} else {
	  const newAdmin = { username, password };
	  ADMINS.push(newAdmin);
	  fs.writeFileSync('admins.json', JSON.stringify(ADMINS));
	  const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
	  res.json({ message: 'Admin created successfully', token });
	}
  });
  
  app.post('/admin/login', (req, res) => {
	const { username, password } = req.headers;
	const admin = ADMINS.find(a => a.username === username && a.password === password);
	if (admin) {
	  const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
	  res.json({ message: 'Logged in successfully', token });
	} else {
	  res.status(403).json({ message: 'Invalid username or password' });
	}
  });
  
  
app.post('/admin/college', authenticateJwt, (req, res) => {
	const college = req.body;
	college.id = COLLEGE.length + 1;
	COLLEGE.push(course);
	fs.writeFileSync('courses.json', JSON.stringify(COURSES));
	res.json({ message: 'Course created successfully', courseId: course.id });
  });