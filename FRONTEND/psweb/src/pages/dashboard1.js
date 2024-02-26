import React from 'react';

const Project = ({ project, onViewProject }) => (
  <div className="project" onClick={() => onViewProject(project)}>
    <h3>{project.name}</h3>
    <p>Due Date: {project.dueDate}</p>
    <p>Project Hours: {project.hours}</p>
  </div>
);

const Projects = ({ projects, onViewProject }) => (
  <div className="projects">
    {projects.map(project => (
      <Project
        key={project.id}
        project={project}
        onViewProject={onViewProject}
      />
    ))}
  </div>
);

const UpcomingMilestones = ({ milestones }) => (
  <div className="upcoming-milestones">
    <h4>Upcoming project milestones</h4>
    <ul>
      {milestones.map(milestone => (
        <li key={milestone.id}>
          {milestone.name} - {milestone.date}
        </li>
      ))}
    </ul>
  </div>
);

const Dashboard = () => {
  const [selectedProject, setSelectedProject] = React.useState(null);

  const projects = [
    { id: 1, name: 'Project X', dueDate: '2023-03-01', hours: 6 },
    { id: 2, name: 'Project Y', dueDate: '2023-03-05', hours: 4 },
    { id: 3, name: 'Project Z', dueDate: '2023-03-08', hours: 2 },
  ];

  const milestones = [
    { id: 1, name: 'Project kickoff meeting', date: '2023-03-02' },
    { id: 2, name: '3 of 5 sections', date: '2023-03-03' },
    { id: 3, name: 'Project Proposal Submission deadline', date: '2023-03-05' },
    { id: 4, name: '5 of 8 sections', date: '2023-03-08' },
    { id: 5, name: 'Team Sync Meeting', date: '2023-03-09' },
  ];

  return (
    <div className="dashboard">
      <h2>Welcome Back, User</h2>
      <p>Explore your projects and track your progress</p>
      <Projects projects={projects} onViewProject={setSelectedProject} />
      {selectedProject && (
        <div className="selected-project">
          <h3>{selectedProject.name}</h3>
          <p>Due Date: {selectedProject.dueDate}</p>
          <p>Project Hours: {selectedProject.hours}</p>
          <UpcomingMilestones milestones={milestones} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;