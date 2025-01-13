
document.getElementById('add-project-btn').addEventListener('click', function () {
    const projectList = document.getElementById('project-list');
    const newProject = document.createElement('div');
    newProject.innerHTML = `
      <h3>New Project</h3>
      <p>Description of the new project.</p>
    `;
    projectList.appendChild(newProject);
  });
  
  document.getElementById('toggle-theme-btn').addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
  });
  
