# 2022-06-bigdecimal.js

## 1. 需求场景
js大数的计算由于精度问题不准确，需要一个和java一样的bigdecimal.

## 2. bigdecimal.js

- [https://www.npmjs.com/package/bigdecimal.js](https://www.npmjs.com/package/bigdecimal.js)
- [https://srknzl.github.io/bigdecimal.js/api/1.1.1/docs/modules.html](https://srknzl.github.io/bigdecimal.js/api/1.1.1/docs/modules.html)

选这个是因为它是按照java的api实现的
> this implementation is inspired from java BigDecimal class

## 3. API
```jsx
const { Big, MC, RoundingMode, MathContext } = require('bigdecimal.js');

// 加减乘除基本运算 0.29*100 = 28.9999999
const res = Big(29).add(Big((23))).subtract(Big('23')).multiply(Big(100)).divide(Big(100));
console.log(res.numberValue(), res.toString(), res.toPlainString(), res.toEngineeringString());
// 四舍五入 1/3 报错
const res = Big(1).divide(Big(3)).numberValue();
// 保留整数
const res = Big(1).divideToIntegralValue(Big(3)).numberValue();
// 保留两位小数
const res = Big(1).divideWithMathContext(Big(3), new MC(2)).numberValue();
// 保留两位小数且向上取整
const res = Big(1).divideWithMathContext(3, new MC(2, RoundingMode.CEILING)).numberValue();
// 保留整数向上取整
// const res = Big(1).divideToIntegralValue(Big(3), new MC(0, RoundingMode.CEILING)).numberValue(); // 报错
// const res = Big(1).divideWithMathContext(Big(3), new MC(0, RoundingMode.CEILING)).numberValue(); // 报错
const res = Big(1).divideWithMathContext(Big(3), new MC(2)).setScale(0, RoundingMode.CEILING).numberValue();
const res = Big(1).divide(Big(3), 0, RoundingMode.CEILING).numberValue();
// 取商和余数
const res = Big(10).divideAndRemainder(Big(3));
// 抹去结尾的0
const res = Big('0.200').stripTrailingZeros().numberValue();
// 比较是否相等
const res = Big(2).equals(Big(2.0));
const res = Big(2).compareTo(Big(2.0));
```
## 4. 向上取整保留两位小数的终极方案
```json
const res2 = Big(1).divide(Big(3), 2, RoundingMode.CEILING).numberValue();
console.log(res2);

```
