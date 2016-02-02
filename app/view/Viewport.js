Ext.define('example1.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Fit',
        //'example1.view.Main'
        //'example1.view.PostsGrid'
        'example1.view.MultiSort'
    ],

    layout: {
        type: 'fit'
    },

    items: [{
        //xtype: 'app-main'
        //xtype: 'postsgrid'
        xtype: 'multisort'
    }]
});
