Ext.define('example1.view.Menu', {
    extend: 'Ext.menu.Menu',
    width: 100,
    margin: '0 0 10 0',
    alias: 'widget.menu_movie',
    floating: false,  // usually you want this set to True (default)
    renderTo: Ext.getBody(),  // usually rendered by it's containing component
    items: [{
        text: 'item 1'
    },{
        text: 'item 2'
    },{
        text: 'item 3'
    }]
});

/*Ext.create('Ext.menu.Menu', {
    width: 100,
    plain: true,
    floating: false,  // usually you want this set to True (default)
    renderTo: Ext.getBody(),  // usually rendered by it's containing component
    items: [{
        text: 'plain item 1'
    },{
        text: 'plain item 2'
    },{
        text: 'plain item 3'
    }]
});*/