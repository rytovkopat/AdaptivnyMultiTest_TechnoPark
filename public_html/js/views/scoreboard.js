define(['views/baseView','tmpl/scoreboard', 'collections/Scores'],
    function (baseView, tmpl, scores) {
      
        var View = baseView.extend({
            collection: scores,
            template: tmpl,
        
            render: function () {
                this.$el.html(this.template(
                    {players : this.collection.toJSON() }

                )); //передать объект, а не массив, по ключу
            }
        });
       
     
        return new View();
    }
);

