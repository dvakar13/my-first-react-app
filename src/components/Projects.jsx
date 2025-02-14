import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

import ProjectOneImage from '../assets/12291235_People walking along street in masks.jpg';
import ProjectTwoImage from '../assets/aaron-burden-xG8IQMqMITM-unsplash.jpg';
import ProjectThreeImage from '../assets/28480879_Tiny people near phone with voice assistant on screen.jpg';
import ProjectFourImage from '../assets/nathan-dumlao-6VhPY27jdps-unsplash.jpg';
import ProjectFiveImage from '../assets/12780617_4990100.jpg';

const projects = [
  {
    id: 1,
    title: 'Calibrate Sensor for Contaminants in Air',
    description: 'To Predict ozone and nitrogen dioxide levels with four voltages using linear models like Ridge, Lasso, ElasticNet',
    imageUrl: ProjectOneImage, // Replace with your image
    projectUrl: 'https://github.com/dvakar13', // Direct URL for Project One
  },
  {
    id: 2,
    title: 'Blog Application',
    description: 'Programmed a Django (python) web application of a blog.',
    imageUrl: ProjectTwoImage,
    projectUrl: 'https://github.com/dvakar13/my-first-blog', // Direct URL for Project Two
  },
  {
    id: 3,
    title: 'Speech Emotion Recognition',
    description: 'Automated the emotion classification and gender classification of the speakers using the RAVDESS Speech Audio dataset.',
    imageUrl: ProjectThreeImage,
    projectUrl: 'https://github.com/dvakar13/Speech-Emotion-Recognition', // Direct URL for Project Two
  },
  {
    id: 4,
    title: 'Coffee Ordering App',
    description: 'Made an Android application using Android Studio that lets users select the number of coffees they want to order and shows them the price.',
    imageUrl: ProjectFourImage,
    projectUrl: 'https://github.com/dvakar13/Coffee-ordering-app', // Direct URL for Project Two
  },
  {
    id: 5,
    title: 'Board Project',
    description: 'Programmed a Django (python) web application of a discussion board (a forum).',
    imageUrl: ProjectFiveImage,
    projectUrl: 'https://github.com/dvakar13/django-boards', // Direct URL for Project Two
  },
  
  // Add more projects as needed
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <motion.a
            key={project.id}
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.01 }}
          >
            <img src={project.imageUrl} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
