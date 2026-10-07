const fs = require('fs');
const path = 'C:/CODE PLAYGROUND/SEM 2/mavisdoing/minimalist-portfolio-json-main/cv.json';

const cv = JSON.parse(fs.readFileSync(path, 'utf8'));

// Remove data structures
cv.projects = cv.projects.filter(p => p.name !== 'datastructuresandalgorithms.py');

// Update description for CafeMeAme
const cafeProject = cv.projects.find(p => p.name === 'CafeMeAme');
if (cafeProject) {
    cafeProject.description = "A modern web application built for a cafe, featuring a dynamic menu, responsive design, and smooth user interactions. Designed to enhance the digital presence of the cafe and provide an intuitive browsing experience for customers.";
}

fs.writeFileSync(path, JSON.stringify(cv, null, 2));
console.log("Updated cv.json successfully.");
