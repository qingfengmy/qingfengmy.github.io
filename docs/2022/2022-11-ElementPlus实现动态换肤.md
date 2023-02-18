# 2022-11-ElementPlus实现动态换肤

## 1. 需求场景
实现ElementPlus组件库的动态换肤。
## 2. 分析思路
ElementPlus的颜色提供了很多变量的定义，比如
[https://unpkg.com/element-plus@2.1.11/dist/index.css](https://unpkg.com/element-plus@2.1.11/dist/index.css)
```tsx
:root {
    color-scheme:light;
    --el-color-white:#ffffff;
    --el-color-black:#000000;
    --el-color-primary:#409eff;
    --el-color-primary-light-3:#79bbff;
    --el-color-primary-light-5:#a0cfff;
    --el-color-primary-light-7:#c6e2ff;
    --el-color-primary-light-8:#d9ecff;
    --el-color-primary-light-9:#ecf5ff;
    --el-color-primary-dark-2:#337ecc;
  	...
}
```
我们换肤暂时以primaryColor为例，其实如果主颜色换了，组件的大部分颜色也都换掉了。
我们可以拿到所有的css变量，根据初始的颜色，定位到需要替换的primaryColor的属性名，然后再把新的颜色替换上去，把这些css变量以style标签的形式放到html的head中。
## 3. 实现颜色选择器组件
```tsx
<el-dialog
  v-model="dialogVisible"
  title="Tips"
  width="30%"
  @close="handleClose"
>
  <el-color-picker v-model="color1" />
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button type="primary" @click="handleConfirm">保存</el-button>
    </span>
  </template>
</el-dialog>
```
```tsx
import { ref } from "vue";
import { generateNewStyles, writeNewStyles } from "@/utils/theme";
const dialogVisible = ref(false);
const color1 = ref("#7975ff");

const handleClose = () => {
  dialogVisible.value = false;
};

const handleConfirm = async () => {
  // 改变后的颜色值
  console.log(color1.value);
  handleClose();
};
```
## 4. 实现动态换肤
分两步

- 根据新的颜色值，生成style
- 把style放到head中
```tsx
const handleConfirm = async () => {
  // 生成style
  const newStyles = await generateNewStyles(color1.value);
  // 放进head
  writeNewStyles(newStyles);
  handleClose();
};
```
```tsx
// 生成新的样式表
export const generateNewStyles = async (primaryColor: string) => {
  // 根据主色获取色值表
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const colors = generateColors(primaryColor)!;
  // 获取当前 Element Plus 的默认样式表，并且将需要替换的色值打上标记
  let cssText = await getOriginalStyle();
  // 遍历色值表，在默认样式表进行全局替换
  Object.keys(colors).forEach((key) => {
    cssText = cssText.replace(
      new RegExp("(:|\\s+)" + key, "g"),
      "$1" + colors[key]
    );
  });

  return cssText;
};
```
```tsx
// 根据主色获取色值表
export const generateColors = (primaryColor: string | null) => {
  if (!primaryColor) {
    return;
  }

  const colors: { [k: string]: unknown } = {
    primary: primaryColor,
  };

  Object.keys(formula).forEach((key) => {
    const value = formula[key as keyof typeof formula].replace(
      /primary/g,
      primaryColor
    );
    colors[key] = "#" + rgbHex(cssColorFunction.convert(value));
  });

  return colors;
};
```
```tsx
// formula
const formula = {
  "shade-1": "color(primary shade(10%))",
  "light-1": "color(primary tint(10%))",
  "light-2": "color(primary tint(20%))",
  "light-3": "color(primary tint(30%))",
  "light-4": "color(primary tint(40%))",
  "light-5": "color(primary tint(50%))",
  "light-6": "color(primary tint(60%))",
  "light-7": "color(primary tint(70%))",
  "light-8": "color(primary tint(80%))",
  "light-9": "color(primary tint(90%))",
  "dark-2": "color(primary tint(98%))",
  subMenuHover: "color(primary tint(70%))",
  subMenuBg: "color(primary tint(80%))",
  menuHover: "color(primary tint(90%))",
  menuBg: "color(primary)",
};

export default formula;
```
> generateColors最终生成的结果是

```tsx
{
  "primary": "#FF7585",
  "shade-1": "#e66978",
  "light-1": "#ff8391",
  "light-2": "#ff919d",
  "light-3": "#ff9eaa",
  "light-4": "#ffacb6",
  "light-5": "#ffbac2",
  "light-6": "#ffc8ce",
  "light-7": "#ffd6da",
  "light-8": "#ffe3e7",
  "light-9": "#fff1f3",
  "dark-2": "#fffcfd",
  "subMenuHover": "#ffd6da",
  "subMenuBg": "#ffe3e7",
  "menuHover": "#fff1f3",
  "menuBg": "#ff7585"
}
```
这个函数需要把``color(primary tint(90%))``转换成``#fff1f3``，所以需要两个库

- rgb-hex
- css-color-function
```tsx
colors[key] = "#" + rgbHex(cssColorFunction.convert(value));
```
获取当前 Element Plus 的默认样式表
```tsx
const getOriginalStyle = async () => {
  // https://unpkg.com/element-plus@2.1.11/dist/index.css
  const version = "2.1.11";
  const url = `https://unpkg.com/element-plus@${version}/dist/index.css`;
  const { data } = await axios(url);

  return getStyleTemplate(data);
};
```
替换
```tsx
Object.keys(colors).forEach((key) => {
  cssText = cssText.replace(
    new RegExp("(:|\\s+)" + key, "g"),
    "$1" + colors[key]
  );
});
```
## 5. 解决刷新页面问题
把颜色存到localstorage，app.vue中做处理
```vue
<script lang="ts" setup>
  import { ref } from "vue";
  import { generateNewStyles, writeNewStyles } from "@/utils/theme";
  const dialogVisible = ref(false);
  const color1 = ref("#7975ff");

  const handleClose = () => {
    dialogVisible.value = false;
  };

  const primaryColor = localStorage.getItem("primaryColor");
  if (primaryColor) {
    generateNewStyles(primaryColor).then((newStyles) => {
      writeNewStyles(newStyles);
    });
  }

  const handleConfirm = async () => {
    const newStyles = await generateNewStyles(color1.value);
    writeNewStyles(newStyles);
    // themeStore.setMainColor(mainColor.value);
    localStorage.setItem("primaryColor", color1.value);
    handleClose();
  };
</script>
```
