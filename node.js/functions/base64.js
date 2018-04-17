//Base 64

    const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

  

    function encode (value) {

        if (typeof(value) !== 'number') {
            throw 'Value is not number!';
        }

        var result = '', mod;
        do {
            mod = value % 64;
            result = ALPHA.charAt(mod) + result;
            value = Math.floor(value / 64);
        } while(value > 0);

        return result;
    }

    function decode (value) {

        var result = 0;
        for (var i = 0, len = value.length; i < len; i++) {
            result *= 64;
            result += ALPHA.indexOf(value[i]);
        }

        return result;
    }

module.exports.encode = encode;
module.exports.decode = decode;

