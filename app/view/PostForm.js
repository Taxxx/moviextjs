Ext.define('example1.view.PostForm', {
	extend: 'Ext.window.Window',
	alias: 'widget.postform',

	height: 200,
	width: 350,
	layout: 'fit',
	title: 'Editar/Crear',
	autoShow: true,
	items: [
		{
			xtype: 'form',
			bodyPadding: 10,
			defaults: {
				anchor: '100%'
			},
			items: [
				{
					xtype: 'textfield',
					name: 'title',
					fieldLabel: 'Titulo'
				},
				{
					xtype: 'textfield',
					name: 'Body',
					fieldLabel: 'body'
				}
			]
		}
	],

	dockedItems: [
	{
		xtype: 'toolbar',
		dock: 'bottom',
		layout: {
			type: 'hbox',
			pack: 'end'
		},
		items: [
			{
				xtype: 'button',
				text: 'Cancelar'
			},
			{
				xtype: 'button',
				text: 'Guardar',
				itemId: 'add'
			}
		]
	}
	] 
});