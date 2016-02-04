Ext.define('example1.store.Posts',{
	extend: 'Ext.data.Store',
	model: 'example1.model.Post',
	//pageSize: 20,
	proxy: {
		type: 'ajax',
		url: 'http://jsonplaceholder.typicode.com/posts',
		reader: {
			type: 'json',
			root: ''
		}
	}
	//,fields: ['title']
	,	autoLoad: true
});