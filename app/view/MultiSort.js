Ext.define('example1.view.MultiSort', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.multisort',

    requires: [
        'Ext.toolbar.TextItem',
        'Ext.view.View',
        'Ext.ux.DataView.Animated'
    ],
    
    xtype: 'dataview-multisort',
    title: 'Multisort DataView',
    width: 540,
    height: 580,
    layout: 'fit',

    initComponent: function() {
        this.tbar = {
            plugins: {
                xclass: 'Ext.ux.BoxReorderer',
                listeners: {
                    scope: this,
                    drop: this.updateStoreSorters
                }
            },
            defaults: {
                listeners: {
                    scope: this,
                    changeDirection: this.updateStoreSorters
                }
            }
            /*,
            items: [{
                xtype: 'tbtext',
                text: 'Sort on these fields:',
                reorderable: false
            }, {
                xtype: 'dataview-multisort-sortbutton',
                text : 'Type',
                dataIndex: 'type'
            }, {
                xtype: 'dataview-multisort-sortbutton',
                text : 'Name',
                dataIndex: 'name'
            }]*/
        };
        
        this.items = {
            xtype: 'dataview',
            tpl: [
                '<tpl for=".">',
                    '<div class="dataview-multisort-item">',
                       '<h3>{title}</h3>',
                    '</div>',
                '</tpl>'
            ],
            plugins: {
                xclass: 'Ext.ux.DataView.Animated'
            },
            itemSelector: 'div.dataview-multisort-item',

            store: 'example1.store.Posts'

            /*store: Ext.create('Ext.data.Store', {
                autoLoad: true,
                sortOnLoad: true,
                fields: ['name', 'thumb', 'url', 'type'],
                proxy: {
                    type: 'ajax',
                    url : 'resources/data/sencha-touch-examples.json',
                    reader: {
                        type: 'json',
                        root: ''
                    }
                }
            })*/
        };
        
        this.callParent(arguments);
        this.updateStoreSorters();
    },
    
    /**
     * Returns the array of Ext.util.Sorters defined by the current toolbar button order
     * @return {Array} The sorters
     */
    getSorters: function() {
        var buttons = this.query('toolbar dataview-multisort-sortbutton'),
            sorters = [];
        Ext.Array.each(buttons, function(button) {
            sorters.push({
                property : button.getDataIndex(),
                direction: button.getDirection()
            });
        });
        
        return sorters;
    },
    
    /**
     * @private
     * Updates the DataView's Store's sorters based on the current Toolbar button configuration
     */
    updateStoreSorters: function() {
        var sorters = this.getSorters(),
            view = this.down('dataview');

        view.store.sort(sorters);
    }
});