/*
 * File: app/store/BookAndDocumentTypes.js
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

Ext.define('cobuy.store.BookAndDocumentTypes', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'BookAndDocumentTypes',
            data: [
                {
                    book_type: 'book',
                    type_label: 'Book'
                },
                {
                    book_type: 'academic_thesis',
                    type_label: 'Academic Thesis'
                },
                {
                    book_type: 'market_research',
                    type_label: 'Market Research Report'
                },
                {
                    book_type: 'business_research',
                    type_label: 'Business Research Report'
                },
                {
                    book_type: 'scientific_research',
                    type_label: 'Scientific Research & journals'
                },
                {
                    book_type: 'environmental_assessment_report',
                    type_label: 'Environmental Assessment Report'
                },
                {
                    book_type: 'legal_opinion',
                    type_label: 'Legal Opinions Report'
                },
                {
                    book_type: 'trade_and_investment_advice',
                    type_label: 'Trade & Investment Advice Report'
                },
                {
                    book_type: 'security_assessment_report',
                    type_label: 'Security Assessment Report'
                },
                {
                    book_type: 'financial_impact_assessment',
                    type_label: 'Financial Impact Assessment Report'
                },
                {
                    book_type: 'business_financing',
                    type_label: 'Business Financing Report'
                },
                {
                    book_type: 'business_plan',
                    type_label: 'Business Plans'
                },
                
            ],
            fields: [
                {
                    name: 'book_type'
                },
                {
                    name: 'type_label'
                }
            ]
        }, cfg)]);
    }
});