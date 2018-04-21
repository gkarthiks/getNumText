/**
 * Checks the given object (recursively if needed) and
 * returns the object with its associated binary value for
 * isEmpty evaluation
 * @param obj
 * @returns {*}
 */
function nestedEmptyCheck(obj) {

    if(obj === "null") {
        return true;
    }

    else if(typeof obj === "boolean"){
        return false;
    }

    else if(typeof obj === "number"){
        return false;
    }

    else if((typeof obj === "string") && obj.trim() != ''){
        return false;
    } else if((typeof obj === "string") && obj.trim() === ''){
        return true;
    }

    else if(Array.isArray(obj)){
        if(obj.length === 0) {
            return true;
        } else {
            for(var i = 0; i < obj.length; i++) {
                obj[i] = nestedEmptyCheck(obj[i]);
            }
            return obj;
        }
    }

    else if(typeof obj === "object"){
        var primaryKeys = Object.keys(obj);
        if(primaryKeys && primaryKeys.length === 0) {
            return true;
        } else {
            primaryKeys.forEach(key => {
                var value = nestedEmptyCheck(obj[key]);
            obj[key] = value;
        });
            return obj;
        }
    }
    return obj;
}

/**
 * before calling the nested validation method,
 * makes a copy of the original object and calls with the copy of the object.
 * @param object
 * @returns {boolean}
 */
function isEmptyObj(object) {
    if(object === undefined)
        return true;

    var objToSend = JSON.parse(JSON.stringify(object));
    var result = nestedEmptyCheck(objToSend);
    if(JSON.stringify(result).indexOf('false') > -1)
        return false;
    return true;
}



module.exports = isEmptyObj