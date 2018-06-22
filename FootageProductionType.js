/*
 * File: app/store/FootageProductionType.js
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

Ext.define('cobuy.store.FootageProductionType', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'FootageProductionType',
            data: [
                {
                    footage_production_type: 'recorded_video',
                    type_label: 'Recorded Video'
                },
                {
                    footage_production_type: 'after_effects',
                    type_label: 'Product of After Effects Rendering'
                },
                {
                    footage_production_type: 'animation',
                    type_label: 'Product of Animations'
                },
                
            ],
            fields: [
                {
                    name: 'footage_production_type'
                },
                {
                    name: 'type_label'
                }
            ]
        }, cfg)]);
    }
});