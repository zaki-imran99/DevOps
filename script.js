// Sample data for projects
const projects = [
    {
        name: "Swyftbags",
        description: "ongooing fyp, where I pacticipate in the development and have been incharge of UI design of an innovative inter-city item luggage transportation. Implemented a user-friendly interface. Utilized React Native for mobile application."
    },
    {
        name: "Rock Paper Scissors",
        description: "Created a dynamic Rock-Paper-Scissors game in JavaScript, implementing robust game logic for player and computer moves. Integrated efficient event handling to swiftly determine outcomes based on user choices, using conditional statements and loops to streamline game flow and enhance user engagement."
    },
    {
        name: "University Management System",
        description: "Designed a university management system which fulfilled all the major use case requirements. Tools: PHP, MySQL, JavaScript, Bootstrap, HTML, CSS."
    },
    {
        name: "Digital Image Processing",
        description: "Designed an application in C++ which performed image blur, distortion and grayscale on any image, processing both in serial and in parallel, using OpenMP, and compare the time taken to perform in both ways."
    }
];

// Filter projects based on input
function filterProjects() {
    const filterInput = document.getElementById('filter').value.toLowerCase();
    const projectList = document.getElementById('project-list');
    
    // Clear existing projects from data
    projectList.innerHTML = '';

    // Filter and display projects
    projects.forEach(project => {
        if (project.description.toLowerCase().includes(filterInput)) {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${project.name}</strong>: ${project.description}`;
            projectList.appendChild(li);
        }
    });
}