// Select all project cards and filter buttons
const projects = document.querySelectorAll('.project');
const filterButtons = document.querySelectorAll('#skills button');

// Add event listener to each button
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.textContent.toLowerCase();

        projects.forEach(project => {
            // Show all projects if "Show All" is clicked, otherwise filter by skill
            if (filter === 'show all' || project.textContent.toLowerCase().includes(filter)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});
