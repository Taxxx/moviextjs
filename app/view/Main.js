Ext.define('example1.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        /*'Ext.tab.Panel',
        'Ext.layout.container.Border'*/

        'example1.view.MultiSort',
        'example1.view.Menu'


    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        region: 'west',
        xtype: 'menu_movie',
        title: 'Menu',
        width: 150
    },{
        region: 'center',
        xtype: 'multisort'
        /*,
        items:[{
            title: 'Center Tab 1'
        }]*/
    }]
});