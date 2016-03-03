define(['backbone', 'models/Score'], function(Backbone, score) {

    var ScoresCollection = Backbone.Collection.extend({
    	model: score,
        url: '/scoreboard',
        comparator: function(score) {
            return -score.get('score');
        }

    });

    var scoresCollection = new ScoresCollection([
    {
        nickName: "Мудрец",
        score: 1
    }, 
    {
        nickName: "Мудрец",
        score: 2
    },  
    {
        nickName: "Мудрец",
        score: 3
    }, 
    {
        nickName: "Мудрец",
        score: 4
    }, 
    {
        nickName: "Мудрец",
        score: 5
    }, 
    {
        nickName: "Мудрец",
        score: 6
    }, 
    {
        nickName: "Мудрец",
        score: 7
    }, 
    {
        nickName: "Мудрец 3",
        score: 8
    }, 
    {
        nickName: "Мудрец 2",
        score: 9
    }, 
    {
        nickName: "Мудрец 1",
        score: 10
    }])
    return scoresCollection;
    //return JSON.stringify(scoresCollection);
});
