define(['backbone'], function(Backbone) {

    var scoreModel = Backbone.Model.extend({
    	defaults: {
    		nickName: '',
    		score: 0
    	},

    	initialize: function(){
    		
    	},

    	validate: function(attrs) {

    	}
    });

    return scoreModel;
});
