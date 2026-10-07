const fs = require('fs');
const path = 'C:/CODE PLAYGROUND/SEM 2/mavisdoing/minimalist-portfolio-json-main/cv.json';

const cv = JSON.parse(fs.readFileSync(path, 'utf8'));

const newProjects = [
  {
    "name": "CafeMeAme",
    "isActive": true,
    "description": "webdev project",
    "highlights": ["Web Development"],
    "url": "https://github.com/madhusatyakumarkatta/CafeMeAme",
    "github": "https://github.com/madhusatyakumarkatta/CafeMeAme"
  },
  {
    "name": "datastructuresandalgorithms.py",
    "isActive": true,
    "description": "data structures",
    "highlights": ["Python", "Data Structures", "Algorithms"],
    "url": "https://github.com/madhusatyakumarkatta/datastructuresandalgorithms.py",
    "github": "https://github.com/madhusatyakumarkatta/datastructuresandalgorithms.py"
  }
];

// Avoid duplicates
const existingNames = new Set(cv.projects.map(p => p.name));

for (const p of newProjects) {
  if (!existingNames.has(p.name)) {
    cv.projects.push(p);
  }
}

fs.writeFileSync(path, JSON.stringify(cv, null, 2));
console.log("Updated cv.json with new projects.");
