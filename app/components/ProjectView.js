var Bb = require('backbone');
var Mn = require('backbone.marionette');

import template from '../templates/project.jst';

var ProjectView = Mn.View.extend({
  template: template,
  className: 'project',
  tagName: 'li'
});

export default ProjectView