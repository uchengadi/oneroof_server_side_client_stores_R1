/*
 * File: app/store/ServiceCategoryForHamper.js
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

Ext.define('cobuy.store.ServiceCategoryForHamper', {
    extend: 'Ext.data.Store',

    requires: [
        'cobuy.model.Category',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            model: 'cobuy.model.Category',
            storeId: 'ServiceCategoriesForHamper',
            proxy: {
                type: 'rest',
                url: '/cobuy/index.php?r=Category/ListAllProductsCategoryForAService',
                reader: {
                    type: 'json',
                    messageProperty: 'msg',
                    root: 'category'
                },
                writer: {
                    type: 'json',
                    allowSingle: false,
                    encode: true
                }
            },
            listeners: {
                load: {
                    fn: me.onStoreLoad,
                    scope: me
                }
            }
        }, cfg)]);
    },

    onStoreLoad: function(store, records, successful, eOpts) {
        var id =0;
                        var name= 'All Categories';
                        store.insert(0, {id: id, name: name});
    }

});