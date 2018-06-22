/*
 * File: app/store/SoundFormat.js
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

Ext.define('cobuy.store.SoundFormat', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'SoundFormat',
            data: [
                {
                    sound_format: 'mp3',
                    format_label: 'MP3'
                },
                {
                    sound_format: 'aac',
                    format_label: 'AAC'
                },
                {
                    sound_format: '3gp',
                    format_label: '3GP'
                },
                {
                    sound_format: 'aiff',
                    format_label: 'AIFF'
                },
                {
                    sound_format: 'gsm',
                    format_label: 'GSM'
                },
                {
                    sound_format: 'wma',
                    format_label: 'WMA'
                },
                {
                    sound_format: 'webm',
                    format_label: 'WEBM'
                },
                
            ],
            fields: [
                {
                    name: 'sound_format'
                },
                {
                    name: 'format_label'
                }
            ]
        }, cfg)]);
    }
});