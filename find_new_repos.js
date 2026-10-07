const fs = require('fs');

async function main() {
    const res = await fetch('https://api.github.com/users/madhusatyakumarkatta/repos?sort=updated&per_page=20');
    const repos = await res.json();
    const cvData = JSON.parse(fs.readFileSync('C:/CODE PLAYGROUND/SEM 2/mavisdoing/minimalist-portfolio-json-main/cv.json', 'utf8'));
    
    const existingProjects = cvData.projects.map(p => p.name.toLowerCase());
    const existingBuilds = cvData.builds.map(b => b.name.toLowerCase());
    const existingUpcoming = cvData.upcomingProjects.map(u => u.name.toLowerCase());
    
    const allExisting = new Set([...existingProjects, ...existingBuilds, ...existingUpcoming]);
    
    console.log("New/Missing GitHub Repos:");
    for (const repo of repos) {
        if (!allExisting.has(repo.name.toLowerCase()) && !allExisting.has(repo.name.replace(/-/g, ' ').toLowerCase())) {
            console.log(`- ${repo.name}: ${repo.description} (${repo.html_url})`);
        }
    }
}

main().catch(console.error);
