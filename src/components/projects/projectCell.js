import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './projectCell.css';

const ProjectCell = ({ image, placeholder, title }) => {
  return (
    <div className="projectCell">
      <LazyLoadImage
        src={image}
        alt={title || "Project preview"}
        effect="blur"
        placeholderSrc={placeholder}
        className="projectImage"
      />
    </div>
  );
};

export default ProjectCell;
