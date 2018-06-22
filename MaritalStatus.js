/*
 * File: app/store/MaritalStatus.js
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

Ext.define('cobuy.store.MaritalStatus', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'MaritalStatus',
            data: [
                {
                    maritalstatus: 'Married'
                },
                {
                    maritalstatus: 'Divorced'
                },
                {
                    maritalstatus: 'Spinster'
                },
                {
                    maritalstatus: 'Bachelor'
                },
                {
                    maritalstatus: 'Widowed'
                },
                {
                    maritalstatus: 'Others'
                }
            ],
            fields: [
                {
                    name: 'maritalstatus'
                }
            ]
        }, cfg)]);
    }
});