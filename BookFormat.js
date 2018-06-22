/*
 * File: app/store/BookFormat.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('cobuy.store.BookFormat', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'BookFormat',
            data: [
                {
                    book_format: 'hardcopy',
                    format_label: 'Handcopy'
                },
                {
                    book_format: 'papercopy',
                    format_label: 'Papercopy'
                },
                {
                    book_format: 'softcopy',
                    format_label: 'Softcopy'
                },
                {
                    book_format: 'mobile',
                    format_label: 'Suitable for Mobile Devices'
                },
                
            ],
            fields: [
                {
                    name: 'book_format'
                },
                {
                    name: 'format_label'
                }
            ]
        }, cfg)]);
    }
});