var Bb = require('backbone');
var Mn = require('backbone.marionette');

import template from '../templates/filter-input.jst';

var FilterInputView = Mn.View.extend({
	template: template,

	triggers: {
    	'keyup input': 'data:entered'
	},

	events: {
    	'keydown input': 'onKeyDown'
	},

	onKeyDown: function(e) {
		
		if($(".active-project").length == 0){
			
			$(".projects-container a:first").addClass("active-project");
			return;
		}

		var project_list = $(".projects-container a.visible");
		var active_index = project_list.index($(".active-project"));
		var current_y = parseInt($(".current_y").val());
		

		if (e.keyCode == 38) { // up
			
			if(active_index == 0){
				active_index = project_list.length -1;
			}else{
				active_index--;
			}

			current_y -= 16;
	  	}
	  	if (e.keyCode == 40) { // down
			
			if(active_index == project_list.length -1){
				active_index = 0;
			}else{
				active_index++;
			}	

			current_y += 16;
	  	}

		//Handle the div scroll
		if(current_y < 0){
			current_y = 0;
		}
		

		$("ul.dropdown-content.dropdown-menu").animate({
			scrollTop: current_y
		});

	  	$(".current_y").val(current_y);

	  	$(".active-project").removeClass("active-project");
	  	project_list.eq(active_index).addClass("active-project");

	  	if (e.keyCode == 13) { // enter
			window.location = $(".active-project").attr("href");
	  	}
	  	
	},

	onDataEntered: function() {
	    //Filter the menu
	    var input = $(".filter-input").val();
	    
	    if(input == ""){
	    	$("li.project a").fadeIn();
	    	$(".project-group").fadeIn();
	    }
	    
	    var highlight_open_tag = "<span class='highlight'>";
		var highlight_close_tag = "</span>";
	    
	    //first filter project
	    $("li.project a").each(function() {
	    	var project = $(this).text();
	    	//remove highlight
	    	var position = project.toLowerCase().indexOf(input.toLowerCase());
	    	
	    	if(position >= 0){
	    		//Add text highlight
	    		project = [project.slice(0, position), highlight_open_tag, project.slice(position)].join('');
	    		position += input.length + highlight_open_tag.length;
	    		project = [project.slice(0, position), highlight_close_tag, project.slice(position)].join('');
	    		$(this).html(project);
	    		$(this).fadeIn();
	    		$(this).addClass("visible");
	    	}else{
	    		//Disappear
	    		$(this).fadeOut();
	    		$(this).removeClass("visible");
	    	}
	    });

	    //then filter project-group
	    $(".list-heading a").each(function() {
	    	//count visible children
	    	var visible_count = 0;
	    	var project_group = $(this).parent().parent().parent().parent();
	    	$(this).parent().parent().find(".projects-target div .project a").each(function() {
	    		if($(this).hasClass('visible')){
	    			visible_count++;
	    		}
	    	});
	    	
	    	//Testing match in heading
	    	var project = $(this).text();
	    	var position = project.toLowerCase().indexOf(input.toLowerCase());

	    	if(position >= 0){
	    		project = [project.slice(0, position), highlight_open_tag, project.slice(position)].join('');
	    		position += input.length + highlight_open_tag.length;
	    		project = [project.slice(0, position), highlight_close_tag, project.slice(position)].join('');    		
	    		$(this).html(project);
	    		project_group.fadeIn();
	    	}else{
	    		if(visible_count <= 0){
	    			//Hide this project group
		    		project_group.fadeOut();
		    	}else{
		    		project_group.fadeIn();	
		    	}
	    	}
	    });
	}
});

export default FilterInputView