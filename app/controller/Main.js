Ext.define('example1.controller.Main', {
    extend: 'Ext.app.Controller',
    models: [
    	'example1.model.Post'
    ],

    stores: [
    	'example1.store.Posts'
    ],

    views: [
        "example1.view.PostsGrid",
    	"example1.view.PostForm"

    ],

    init: function(application){
        this.control({
            "postsgrid": {
                render: this.onGridRender
            },
            "postsgrid button#add": {
                click: this.onAddClick
            }
        });
    },

    onGridRender: function(grid, eOpts){
        grid.getStore().load();
    },

    onAddClick: function(btn, e, eOpts){
        //console.log('addbut :P');
        Ext.create('example1.view.PostForm');
    }
});
