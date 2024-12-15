sap.ui.define(["sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
],
    (UICompent, JSONModel) => {
        "use strict";

        return UICompent.extend("ui5.learnui5init.Component", {
            metadata: {
                "interfaces": ["sap.ui.core.IAsyncContentCreation"],
                "manifest": "json"
            },
            init() {
                UICompent.prototype.init.apply(this, arguments);
                // set data model
                const oData = {
                    recipient: {
                        name: "World"
                    }
                };
                const oModel = new JSONModel(oData);
                this.setModel(oModel);

            }
        }

        )
    }
)  