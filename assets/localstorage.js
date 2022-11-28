/*****************************************************************************************
 * getMetaDataInstallationID()
 *****************************************************************************************/
function getMetaDataInstallationID() {
    return sessionStorage.getItem("wla_list_users_install_id")
}

/*****************************************************************************************
 * setKey(key, val)
 *****************************************************************************************/
function setKey(key, val) {
    var metadata_installationId = getMetaDataInstallationID()
    return localStorage.setItem(metadata_installationId + ":" + key, val);
}

/*****************************************************************************************
 * getKey(key, val)
 *****************************************************************************************/
function getKey(key) {
    var metadata_installationId = getMetaDataInstallationID()
    return localStorage.getItem(metadata_installationId + ":" + key);
}

/*****************************************************************************************
 * removeKey(key, val)
 *****************************************************************************************/
function removeKey(key) {
    var metadata_installationId = getMetaDataInstallationID()
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
