// const express = require('express')
// const fs = require('fs');
// const app = express();
// const PORT = 3000;

// function sendHTML(file, res) {
//   fs.readFile(file, 'utf8', (err, data) => {
//     if (err) return res.status(500).send('Error reading HTML file');
//     res.type('html').send(data);
//   });
// }

// app.get('/', (req, res) => sendHTML('index.html', res));
// app.get('/about', (req, res) => sendHTML('about.html', res));
// app.get('/contact', (req, res) => sendHTML('contact.html', res));

// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


const express = require ('express');
const app=express();
const PORT =3000;
//Middleware
app.use(express.json());
//in memory data;

let students=[
{
  id :1,
  name:"Shivam",
  cource : "B.tech",
  branch : "CSE"
},
{
id:2,
name : "Neha",
cource : "B.Tech",
brach :"IT"

}
];

// READ - GET all student 

app.get('/students',(req, res)=>{
  res.json(students);
});

// Start Server

app.listen(PORT, () =>{
    console.log(
        `Server running on http://localhost:${PORT}`
    );
});