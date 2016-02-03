Ext.define('example1.view.MultiSort', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.multisort',
    store: 'example1.store.Posts',
        
    xtype: 'dataview-multisort',
    title: 'Multisort DataView :D',
    width: 540,
    height: 580

    /*,

    items:[
            
            xtype: 'dataview',
            tpl: [
                '<tpl for=".">',
                    '<div class="dataview-multisort-item">',
                        '<h3>{bocy}</h3>',
                    '</div>',
                '</tpl>'
            ]

           ]*/

    

    
});