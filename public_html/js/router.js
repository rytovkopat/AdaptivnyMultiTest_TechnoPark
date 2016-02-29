define(
    [   'backbone',
        'require',
        'views/main',
        'views/game',
        'views/login',
        'views/scoreboard',
        'event'],
    function (Backbone, require) {
        var Router = Backbone.Router.extend({
            routes: {
                'main': 'displayView', //'хеш-тег': 'действие'
                'login': 'displayView',
                'scoreboard': 'displayView',
                'game': 'displayView',
                '*default': 'defaultAction' 
            },
            initialize: function () { //срабатывает всегда, 
                this.currentView = require('views/main');
                //подписывается на событие смены роута
                //object.listenTo(other, event, callback)
                //Указывает объекту object прослушивать конкретное событие другого объекта other
                this.listenTo(require('event'), 'navigate', this.changeRoute);
            },
            displayView: function () {
                var fragmentName = Backbone.history.getFragment(); //отлавливает изменившийся кусочек
                //адресной строки, они там появляются из  <button id="хеш-тег">
                var view = require('views/'+fragmentName); //генерирует новый путь того, что нужно отобразить
                this.currentView.hide(); //гасит текущий вид, hide() описана в BaseView, его наследуют
                //все остальные view
                view.show();
                this.currentView = view;
            },
            defaultAction: function () { //отрисовка главного меню во всех иных случаях
                //кнопки Back ссылаются на main
                var mainView = require('views/main');
                mainView.show();
                this.currentView = mainView;
            },
            changeRoute: function (route) { //меняет роут по результатам нажатия конкретной кнопки
                this.navigate(route, {trigger: true}); //event.trigger описан в BaseView
            }
        });
        return new Router();
    }
);