/*
 * File: app/store/ShoesForMenType.js
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

Ext.define('cobuy.store.ShoesForMenType', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'ShoesForMenType',
            data: [
                {
                    shoe_men_type: 'oxfords',
                    type_label: 'Oxfords'
                },
                {
                    shoe_men_type: 'slip_ons',
                    type_label: 'Slip Ons'
                },
                {
                    shoe_men_type: 'saddle_shoes',
                    type_label: 'Saddle Shoes'
                },
                {
                    shoe_men_type: 'boat_shoes',
                    type_label: 'Boat Shoes'
                },
                {
                    shoe_men_type: 'leather_laced_heavy_sole_shoes',
                    type_label: 'Leather Laced Heavy Sole Shoes'
                },
                {
                    shoe_men_type: 'canvas_shoes',
                    type_label: 'Canvas Shoes'
                },
                {
                    shoe_men_type: 'loafers',
                    type_label: 'Loafers Shoes'
                },
                {
                    shoe_men_type: 'sandals',
                    type_label: 'Sandals'
                },
                {
                    shoe_men_type: 'athletic_shoes',
                    type_label: 'Athletic Shoes'
                },
                {
                    shoe_men_type: 'work_boots',
                    type_label: 'Work Boots Shoes'
                },
                {
                    shoe_men_type: 'hiking_boots',
                    type_label: 'Hiking Boots Shoes'
                },
                {
                    shoe_men_type: 'western_boots',
                    type_label: 'Western Boots Shoes'
                },
                {
                    shoe_men_type: 'dress_boots',
                    type_label: 'Dress Boots Shoes'
                },
                {
                    shoe_men_type: 'safety_boots',
                    type_label: 'Safety Boots Shoes'
                },
                {
                    shoe_men_type: 'slippers',
                    type_label: 'Slippers'
                },
                {
                    shoe_men_type: 'trainers',
                    type_label: 'Trainers'
                },
                {
                    shoe_men_type: 'snickers',
                    type_label: 'Snickers'
                },
                
            ],
            fields: [
                {
                    name: 'shoe_men_type'
                },
                {
                    name: 'type_label'
                }
            ]
        }, cfg)]);
    }
});