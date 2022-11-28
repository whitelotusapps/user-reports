/* EXAMPLES:

setKey("username", "brothaz").then(function (username) {
    console.log(`SET: ${username}`)
});

getKey("username").then(function (username) {
    console.log(`GET: ${username}`); // agent_extraordinaire
});

removeKey("username").then(function (username) {
    console.log(`REMOVE: ${username}`); // agent_extraordinaire
});
*/

var metadata_installationId = sessionStorage.getItem("wla_list_users_install_id")

//console.log(`localstorage id: ${metadata_installationId}`)

/*****************************************************************************************
 * setKey(key, val)
 *****************************************************************************************/
function setKey(key, val) {
    return localStorage.setItem(metadata_installationId + ":" + key, val);
}

/*****************************************************************************************
 * getKey(key, val)
 *****************************************************************************************/
function getKey(key) {
    return localStorage.getItem(metadata_installationId + ":" + key);
}

/*****************************************************************************************
 * removeKey(key, val)
 *****************************************************************************************/
function removeKey(key) {
    return localStorage.removeItem(metadata_installationId + ":" + key);
}

/*****************************************************************************************
 * clearKeys()
 *****************************************************************************************/
function clearKeys() {
    return localStorage.clear();
}

/*****************************************************************************************
 * clearKeys()
 *****************************************************************************************/
function getAllKeys() {
    var all_keys = Object.entries(localStorage)
    console.log("ALL LOCAL STORAGE KEYS:\n" + JSON.stringify(all_keys, null, '\t'))
    //return all_keys
}
