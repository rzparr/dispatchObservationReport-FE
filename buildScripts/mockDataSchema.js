export const schema = {
    "type": "object",
    "properties": {
        "runDetails": {
            "type": "array",
            "minItems": 30,
            "maxItems": 50,
            "items": {
                "type": "object",
                "properties": {
                    "ldate": {
                        "type": "string",
                        "pattern": "20170511"
                    },
                    "providerName": {
                        "type": "string",
                        "pattern": "D_DTS_SF|D_DTS_SR|D_FT_GAITH|D_FT_CAPHT|D_TD_HUB|T_REDTOP|T_SUNTAXI|T_ACTION"
                    },
                    "run": {
                        "type": "number",
                        "minimum": 1000,
                        "maximum": 5000
                    },
                    "vehicle": {
                        "type": "number",
                        "minimum": 4500,
                        "maximum": 5000
                    },
                    "operatorLastName": {
                        "type": "string",
                        "faker": "name.lastName"
                    },
                    "operatorFirstName": {
                        "type": "string",
                        "faker": "name.firstName"
                    },
                    "radio": {
                        "type": "string",
                        "pattern": "DV123|VT220|FG112|FC165"
                    }
                },
                "required": ["ldate", "providerName", "run", "vehicle"]
            }
        },
        "supervisors": {
            "type": "array",
            "minItems": 4,
            "maxItems": 4,
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number",
                        "minimum": 1
                    },
                    "supervisorName": {
                        "type": "string",
                        "unique": "true",
                        "pattern": "Smith, John|Jones, Michael|Miller, Jane|Parr, Ryan|Simon, Ken|Murray, Nicole|Scruggs, Donald|Rich, Kenn|Wilson, Calvin"
                    }
                },
                "required": ["id", "supervisorName"]
            }
        }
    },
    "required": ["runDetails", "supervisors"]
};