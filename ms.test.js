let indhu = require('./node_modules/indhu-test/indhu');
let ms = require('./ms');

let result =ms(1000);
let expected =1;

indhu.test(result).toBeEqualTo(expected);

indhu.test(ms(1)).toBeEqualTo(100);