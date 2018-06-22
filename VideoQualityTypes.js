/*
 * File: app/store/VideoQualityTypes.js
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

Ext.define('cobuy.store.VideoQualityTypes', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'VideoQualityTypes',
            data: [
                {
                    footage_quality_type: '8k',
                    type_label: '8K - Offers 16 times more pixels than the regular 1080p FHD'
                },
                {
                    footage_quality_type: '4k',
                    type_label: '4K (Ultra HD resolution)'
                },
                {
                    footage_quality_type: 'qhd',
                    type_label: 'Quad HD resolution'
                },
                {
                    footage_quality_type: 'fhd',
                    type_label: 'Full HD resolution'
                },
                {
                    footage_quality_type: 'hd',
                    type_label: 'HD resolution'
                },
                {
                    footage_quality_type: 'sd',
                    type_label: 'SD'
                },
                {
                    footage_quality_type: 'low',
                    type_label: 'Low'
                }
            ],
            fields: [
                {
                    name: 'footage_quality_type'
                },
                {
                    name: 'type_label'
                }
            ]
        }, cfg)]);
    }
});