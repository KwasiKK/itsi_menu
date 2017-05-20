import {Marionette} from '../../vendor/vendor';

import ProjectCollectionView from './ProjectCollectionView.js';

import template from '../templates/project-group.jst';

var Bb = require('backbone');

const ProjectGroupView = Marionette.View.extend({
  //tagName: 'ul',
  className: 'project-group',
  template: template,
  //childViewContainer: '.projects-target',
  // childView: ProjectGroupView,
  regions: {
    region1: '.projects-target'
  },
  onRender: function() {
  	this.showChildView('region1', new ProjectCollectionView({
  	  collection: new Bb.Collection(this.model.get('groups'))
  	}));
  },
  childViewEvents: {
    'render': function() {
      //this will be called twice because there are 2 childView which trigger `render` event
      //console.log('ProjectGroupView Child was rendered');
    }
  }    
});

export default ProjectGroupView