const GLOBAL_METHOD = {
    match_start_substr: function (str1, str2) {
        return str1.toLowerCase().search(str2.toLowerCase()) == 0;
    }
};