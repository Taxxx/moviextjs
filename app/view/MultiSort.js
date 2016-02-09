Ext.define('example1.view.MultiSort', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.multisort',
    
    //store: new example1.store.Posts(),
        
    //xtype: 'dataview-multisort',

    title: 'Movies',
    width: 540,
    height: 580,
    autoScroll: true,

    items: [{
        xtype: 'dataview',
        store: 'example1.store.Movies',
        itemSelector: 'div.dataview-multisort-item',
        tpl: new Ext.XTemplate(
                '<tpl for=".">',
                    '<div class="item">',
                        '<h3>{title}</h3>',
                        '<p>{vote_average}</p>',
                    '</div>',
                '</tpl>'
            )

    }]


    /*items: [{
        xtype: 'dataview',
        store: 'example1.store.Posts',
        itemSelector: 'div.dataview-multisort-item',
        tpl: new Ext.XTemplate(
                '<tpl for=".">',
                    '<div class="item">',
                        '<h3>{title}</h3>',
                        '<p>{body}</p>',
                    '</div>',
                '</tpl>'
            )

    }]*/

    //,cls: 'verde'
    
    /*data : {
      name: "I am Here!",
      messages: ['Rocky', 'Laberinto del Fauno', 'Warcraft', 'Creed']
    },*/

    //store: 'example1.store.Posts',
    /*data: [
        { src:'http://www.sencha.com/img/20110215-feat-drawing.png', caption:'Drawing & Charts' },
        { src:'http://www.sencha.com/img/20110215-feat-data.png', caption:'Advanced Data' },
        { src:'http://www.sencha.com/img/20110215-feat-html5.png', caption:'Overhauled Theme' },
        { src:'http://www.sencha.com/img/20110215-feat-perf.png', caption:'Performance Tuned' }
    ],


    tpl: [
      
    '<tpl for=".">',
        '<p>{src}</p>',
    '</tpl>'

    ]*/
    
    //,renderTo: Ext.getBody()  

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