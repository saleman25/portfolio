// add the video demos of yr projects
// autoplay when hovered over

import React from 'react';
import '../../App.css';

import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';


import useStyles from './styles';

const Projects = ({ project }) => {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={project.media.source} title={project.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {project.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${project.price.formatted}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: project.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
    </Card>
  );
};

export default Projects;