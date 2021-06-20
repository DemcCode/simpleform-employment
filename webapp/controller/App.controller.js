// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel',
    'sap/ui/core/Core',
    'sap/m/MessagePopover',
    'sap/ui/core/Element',
    'sap/m/MessageItem',
    'sap/ui/core/library',
    'sap/ui/core/message/Message'
],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.model.json.JSONModel } JSONModel
     * @param {typeof sap.m.MessagePopover} MessagePopover
     * @param {typeof sap.ui.core.Element } Element
     * @param {typeof sap.m.MessageItem } MessageItem
     * @param {typeof sap.ui.core.library } library
     * @param {typeof sap.ui.core.message.Message } Message
    */
    function (Controller, JSONModel, Core, MessagePopover, Element,
             MessageItem, library, Message) {
        "use strict";

        return Controller.extend("projectsimpleform.projectsimpleform.controller.App", {
            onInit: function () {
                const oModel = new JSONModel();
                oModel.loadData("./localService/mockdata/CustomerModel.json");   
                this.oView = this.getView();             
                this.oView.setModel(oModel);
            }
        });
    });