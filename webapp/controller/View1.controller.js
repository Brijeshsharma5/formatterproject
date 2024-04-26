sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/format/DateFormat"
   
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,DateFormat) {
        "use strict";

        return Controller.extend("test.com.formatterproject.controller.View1", {
            onInit: function () {
                var oData = {
                    "SalesOrders": [
                      {
                        "OrderID": "1001",
                        "CustomerName": "John Doe",
                        "OrderDate": "2024-04-25",
                        "TotalAmount": "150.00",
                        "Currency": "USD",
                        "Status": "Open"
                      },
                      {
                        "OrderID": "1002",
                        "CustomerName": "Jane Smith",
                        "OrderDate": "2024-04-24",
                        "TotalAmount": "200.00",
                        "Currency": "USD",
                        "Status": "Closed"
                      },
                      {
                        "OrderID": "1003",
                        "CustomerName": "Alice Johnson",
                        "OrderDate": "2024-04-23",
                        "TotalAmount": "300.00",
                        "Currency": "EUR",
                        "Status": "Open"
                      },
                      {
                        "OrderID": "1004",
                        "CustomerName": "Bob Williams",
                        "OrderDate": "2024-04-22",
                        "TotalAmount": "180.00",
                        "Currency": "EUR",
                        "Status": "Open"
                      },
                      {
                        "OrderID": "1005",
                        "CustomerName": "Emily Brown",
                        "OrderDate": "2024-04-21",
                        "TotalAmount": "250.00",
                        "Currency": "USD",
                        "Status": "Closed"
                      }
                    ]
                  }

                  var oModel = new JSONModel(oData);
                  this.getView().setModel(oModel);

             },
             formatStatus: function(status) {
                return status === "Open" ? "In Progress" : "Completed";
            },
            formatDateCustom: function(date) {
                var oDateFormat = DateFormat.getDateInstance({ pattern: "dd/MM/yyyy" });
                return oDateFormat.format(new Date(date));
            },
            formatStatusState: function(status) {
                return status === "Closed" ? "Error" : "Success";
            }
           
        });
    });
