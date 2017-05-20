import {Marionette} from '../../vendor/vendor';

import ProjectGroupView from './ProjectGroupView.js';

import template from '../templates/project-group.jst';

var Bb = require('backbone');

const ProjectGroupCollectionView = Marionette.CollectionView.extend({
	className: 'project-group',
	template: template,
	childViewContainer: '.projects-container',
	childView: ProjectGroupView,
	regions: {
		region1: '.projects-target'
	}
});

export default ProjectGroupCollectionView