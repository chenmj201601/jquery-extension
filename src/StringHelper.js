/**
 * 字符串帮助类，字符串格式化等
 */
(function ($) {

    $.StringHelper = {
        /**
         * 字符串格式化
         * 如：$.StringHelper.format("abc{0}df{1}",["KK","DD"]) 输出：abcKKdfDD
         * 或：$.StringHelper.format("abc{t1}df{t2}",{t1:"KK",t2:"DD"}) 输出：abcKKdfDD
         *
         * @param str
         * @param args
         * @returns {*}
         */
        format: function (str, args) {
            var result = str;
            if (args.length > 0) {
                if (args.length == 1 && typeof (args) == "object") {
                    for (var key in args) {
                        if (args[key] != undefined) {
                            var reg = new RegExp("({" + key + "})", "g");
                            result = result.replace(reg, args[key]);
                        }
                    }
                }
                else {
                    for (var i = 0; i < args.length; i++) {
                        if (args[i] != undefined) {
                            var reg = new RegExp("({)" + i + "(})", "g");
                            result = result.replace(reg, args[i]);
                        }
                    }
                }
            }
            return result;
        }
    };

})(jQuery);