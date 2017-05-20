import {Marionette} from '../../vendor/vendor';

import ProjectView from './ProjectView.js';

import template from '../templates/project-group.jst';

var Bb = require('backbone');

const ProjectCollectionView = Marionette.CollectionView.extend({
  className: 'project',
  template: template,
  childViewContainer: '.projects-target',
  childView: ProjectView,
  regions: {
    region1: '.projects-target'
  }   
});

export default ProjectCollectionView