Ext.define('example1.view.MultiSort', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.multisort',
    
    //store: new example1.store.Posts(),
        
    //xtype: 'dataview-multisort',
    title: 'Multisort DataView :D',
    width: 540,
    height: 580,
    
    /*data : {
      name: "I am Here!",
      messages: ['Rocky', 'Laberinto del Fauno', 'Warcraft', 'Creed']
    },*/

    store: 'example1.store.Posts',
    /*data: [
        { src:'http://www.sencha.com/img/20110215-feat-drawing.png', caption:'Drawing & Charts' },
        { src:'http://www.sencha.com/img/20110215-feat-data.png', caption:'Advanced Data' },
        { src:'http://www.sencha.com/img/20110215-feat-html5.png', caption:'Overhauled Theme' },
        { src:'http://www.sencha.com/img/20110215-feat-perf.png', caption:'Performance Tuned' }
    ],*/


    tpl: [
      
    '<tpl for=".">',
        '<p>{body}</p>',
    '</tpl>'

    ]
    
    ,renderTo: Ext.getBody()  

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