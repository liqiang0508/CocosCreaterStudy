window.Save = {
    set: function(key, value) {
        cc.sys.localStorage.setItem(key, "" + value);
    },
    get: function(key, def) {
        let value = cc.sys.localStorage.getItem(key);
        if (value === null) {
            value = def;
        }

        return value;
    },
};
