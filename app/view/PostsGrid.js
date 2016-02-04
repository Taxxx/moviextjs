Ext.define("example1.view.PostsGrid", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.postsgrid',
    store: 'example1.store.Posts',
    title: 'Posts',
    config: {
        layout: {
            type: 'hbox'
        }
    }
    ,
    columns: [
    	{
    		text: 'ID',
    		width:35,
    		dataIndex: 'id'
    	},
    	{
    		text: 'UserId',
    		width:35,
    		dataIndex: 'userId'
    	},
    	{
    		text: 'Title',
    		width:100,
    		dataIndex: 'title'
    	},
    	{
    		text: 'Body',
    		width:500,
    		dataIndex: 'body'
    	}
    ],

    dockedItems: [
    	{
    		xtype: 'toolbar',
    		dock: 'top',
    		items: [
    			{
    				xtype:'button',
    				text: 'Nuevo',
                    itemId: 'add'
    			},
    			{
    				xtype: 'button',
    				text: 'Eliminar',
                    itemId: 'delete'
    			}
    		]
    	},
    	{
    		xtype: 'pagingtoolbar',
    		store: 'example1.store.Posts',
    		dock: 'bottom',
    		displayInfo: true,
    		emptyMsg: 'Ningun Post Encontrado'
    	}
    ]
});