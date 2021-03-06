/*
 * File: app/store/BookWritingStyles.js
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

Ext.define('cobuy.store.BookWritingStyles', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'BookWritingStyles',
            data: [
                {
                    book_writing_style: 'academics',
                    style_label: 'Suitable for Academics Purposes'
                },
                {
                    book_writing_style: 'self_study',
                    style_label: 'Suitable for Self Studing'
                },
                {
                    book_writing_style: 'hands_on',
                    style_label: 'Suitable for practical purposes with a lot of Hand-Ons'
                },
                {
                    book_writing_style: 'informational',
                    style_label: 'Conveys Information'
                },
                {
                    book_writing_style: 'exploratory',
                    style_label: 'Exploratory'
                },
                {
                    book_writing_style: 'motivational',
                    style_label: 'Motivational'
                },
                {
                    book_writing_style: 'persuasive',
                    style_label: 'Persuasive'
                },
                {
                    book_writing_style: 'advisorial',
                    style_label: 'Advisorial'
                },
                {
                    book_writing_style: 'editorial',
                    style_label: 'Provides Opinions & Views'
                },
                
            ],
            fields: [
                {
                    name: 'book_writing_style'
                },
                {
                    name: 'style_label'
                }
            ]
        }, cfg)]);
    }
});