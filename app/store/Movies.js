Ext.define('example1.store.Movies',{
	extend: 'Ext.data.Store',
	model: 'example1.model.Movie',
	//pageSize: 20,
	//fields: ['title'],
	proxy: {
		type: 'ajax',
		url: 'http://api.themoviedb.org/3/movie/top_rated?api_key=3532ca73391fc8331272cef2b7841e39',
		headers: {
			//token: 'xyz' // this token that every proxy should contain to communicate with our remote server. 
	   		api_key: '3532ca73391fc8331272cef2b7841e39'
	   	},
		reader: {
			type: 'json',
			root: ''
		}
	}
	//,fields: ['title']
	,	autoLoad: true
});