define(['backbone'], function(Backbone) {

    var userModel = Backbone.Model.extend({
    	defaults: {
            nickName: '',
            firstName: '',
            lastName: '',
            email: '',
            avatar: '',
    		score: 0
    	}
    });

    return new userModel();
});