import {Marionette} from '../../vendor/vendor';

import menu_template from '../templates/menu.jst';

import ProjectGroupCollectionView from './ProjectGroupCollectionView.js';
import FilterInputView from './FilterInputView.js';

var Bb = require('backbone');

const ProjectGroupModel = new Bb.Model();

var list = new Bb.Collection([
	{
		"id": 736,
		"name": "Systems",
		"image": {
			"link": "http://i.stack.imgur.com/8KA9j.jpg?s=32&g=1"
		},
		"groups": [
			{
				"id": 2168,
				"name": "API",
				"url": "https://wwww.itschools.co.za/api/"
			},
			{
				"id": 11955,
				"name": "Assets",
				"url": "https://wwww.itschools.co.za/assets/"
			},
			{
				"id": 3179,
				"name": "Design",
				"url": "https://wwww.itschools.co.za/design/"
			},
			{
				"id": 207,
				"name": "Development",
				"url": "https://wwww.itschools.co.za/development/"
			},
			{
				"id": 70,
				"name": "Intranet",
				"url": "https://wwww.itschools.co.za/intranet/"
			}
		],
		"url": "https://wwww.itschools.co.za/projects"
	},
	{
		"id": 44315,
		"name": "User Agents",
		"image": {
			"link":
			"http://www.zerohedge.com/sites/default/files/pictures/picture-5781.jpg"
		},
		"groups": [
			{
				"id": 191599,
				"name": "Alchemy",
				"url": "https://wwww.itschools.co.za/tools/alchemy"
			},
			{
				"id": 86822,
				"name": "Empathy",
				"url": "https://wwww.itschools.co.za/tools/empathy"
			},
			{
				"id": 86297,
				"name": "Epiphany", 
				"url": "https://wwww.itschools.co.za/tools/epiphany"
			},
			{
				"id": 131837,
				"name": "Harmony",
				"url": "https://wwww.itschools.co.za/tools/hamony"
			},
			{
			"id": 174338,
			"name": "Zagreb",
			"url": "https://wwww.itschools.co.za/tools/zagreb"
			}
		],
		"url": "https://wwww.itschools.co.za/tools"
	}
]);

export default Marionette.View.extend({
  template: menu_template,
  regions: {
    region1: '.projects-container',
    region2: '#filter-target'
  },
  //childView: ProjectGroupsView,
  onRender: function() {
  	var projectGroupCollectionView = new ProjectGroupCollectionView({
	  collection: list
	});
	this.showChildView('region1', projectGroupCollectionView);
	this.showChildView('region2', new FilterInputView());
  },
  childViewEvents: {
    'render': function() {
      //this will be called twice because there are 2 childView which trigger `render` event
      //console.log('ChildView was rendered');
    }
  }
});
