Ext.define('example1.model.Movie', {
    extend: 'Ext.data.Model',
    
    fields: [

    	{ name: 'poster_path', type: 'string' },
    	{ name: 'adult', type: 'boolean' },
    	{ name: 'overview', type: 'string' },
    	{ name: 'release_date', type: 'date' },
    	//{ name: 'genre_ids', type: 'string' },

        { name: 'id', type: 'int' },
        { name: 'original_title', type: 'string' },
        { name: 'original_language', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'backdrop_path', type: 'string' },
        { name: 'popularity', type: 'string' },
        { name: 'vote_count', type: 'int' },
        { name: 'video', type: 'boolean' },
        { name: 'vote_average', type: 'float' }

    ]
});