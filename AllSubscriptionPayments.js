/*
 * File: app/store/AllSubscriptionPayments.js
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

Ext.define('cobuy.store.AllSubscriptionPayments', {
    extend: 'Ext.data.Store',

    requires: [
        'cobuy.model.SubscriptionPayment',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            model: 'cobuy.model.SubscriptionPayment',
            storeId: 'AllSubscriptionPayments',
            proxy: {
                type: 'rest',
                url: '/cobuy/index.php?r=SubscriptionPayment/ListAllSubscriptionPayments',
                reader: {
                    type: 'json',
                    messageProperty: 'msg',
                    root: 'subscription'
                },
                writer: {
                    type: 'json',
                    allowSingle: false,
                    encode: true
                }
            }
        }, cfg)]);
    }
});