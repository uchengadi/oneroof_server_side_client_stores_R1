/*
 * File: app/store/ProductClassification.js
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

Ext.define('cobuy.store.ProductClassification', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'ProductClassification',
            data: [
                {
                    nature_of_product: 'general',
                    classification: 'General'
                },
                {
                    nature_of_product: 'book',
                    classification: 'Books, Thesis & Reports'
                },
                {
                    nature_of_product: 'clothes',
                    classification: 'Clothings for Adults, Teens & Babies'
                },
                {
                    nature_of_product: 'graphics',
                    classification: 'Pictures, Images & Editorials'
                },
                {
                    nature_of_product: 'video',
                    classification: 'Footages, Animations & After Effects'
                },
                {
                    nature_of_product: 'sound',
                    classification: 'Sounds & Sounds Effects'
                },
                {
                    nature_of_product: 'shoes',
                    classification: 'Shoes for Adults, Teens & Babies'
                },
                {
                    nature_of_product: 'faas',
                    classification: 'Farming as a Service(FaaS)'
                }
            ],
            fields: [
                {
                    name: 'classification'
                },
                {
                    name: 'nature_of_product'
                }
            ]
        }, cfg)]);
    }
});