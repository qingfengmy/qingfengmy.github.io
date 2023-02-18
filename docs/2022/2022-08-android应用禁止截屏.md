# 2022-08-android应用禁止截屏

## 1. 需求场景
使用银行APP的时候发现不能截屏。想看下他的实现原理。
## 2. 截屏实现
### 2.1 应用内截屏
用view或者activity的容器缓存生成图片，实现截屏
```jsx
// 获取需要截取快照的控件
View view = findViewById(R.id.my_view);

// 设置控件允许绘制缓存
view.setDrawingCacheEnabled(true);
// 获取控件的绘制缓存（快照）
Bitmap bitmap = view.getDrawingCache();

// 保存截取的快照
bitmap.compress(Bitmap.CompressFormat.PNG, 100, fileOutputStream);

```
```jsx
/*
 * 每个Activity都有一个铺满全屏的顶层View，只需要获取这个View的绘制快照，
 * 就相当于截取了整个Activity的屏幕，这种方式截取部分包括通知栏，但不包括
 * 通知烂上的内容，因为其内容不属于当前的Activity。
 */

// 获取Activity整个窗口最顶层的View
View view = activity.getWindow().getDecorView();

// 设置控件允许绘制缓存
view.setDrawingCacheEnabled(true);
// 获取控件的绘制缓存（快照）
Bitmap bitmap = view.getDrawingCache();

// 保存截取的快照
bitmap.compress(Bitmap.CompressFormat.PNG, 100, fileOutputStream);

```
### 2.2 adb命令截屏
adb命令截屏需要root
```jsx
adb shell screencap -p /sdcard/sreenshot1.png
```
### 2.3 anroid5.0以后通过api截屏
```jsx
if (Build.VERSION.SDK_INT >= 21) {
    startActivityForResult(
            ((MediaProjectionManager) getSystemService("media_projection")).createScreenCaptureIntent(),1);
} else {
    Log.e("TAG", "版本过低,无法截屏");
}
```
```jsx
@Override
protected void onActivityResult(int requestCode, int resultCode, Intent data) {
    super.onActivityResult(requestCode, resultCode, data);
    if (requestCode == 1 && data != null) {
          parseData(data);
    }
}
private void parseData(Intent data){
    MediaProjection mMediaProjection = (MediaProjectionManager).getSystemService(
            Context.MEDIA_PROJECTION_SERVICE).getMediaProjection(Activity.RESULT_OK,data);
        ImageReader mImageReader = ImageReader.newInstance(
                getScreenWidth(),
                getScreenHeight(),
                PixelFormat.RGBA_8888,1);
    VirtualDisplay mVirtualDisplay = mMediaProjection.createVirtualDisplay("screen-mirror",
            getScreenWidth(),
            getScreenHeight(),
            Resources.getSystem().getDisplayMetrics().densityDpi,
            DisplayManager.VIRTUAL_DISPLAY_FLAG_AUTO_MIRROR,
            mImageReader.getSurface(), null, null);
    Handler handler = new Handler();
    handler.postDelayed(new Runnable() {
       @Override
       public void run() {
           Image image = mImageReader.acquireLatestImage();
           // TODO 将image保存到本地即可
       }
    }, 300);
    mVirtualDisplay.release();
    mVirtualDisplay = null;
}
```
## 3. 禁止截屏实现
```jsx
public class FlagSecureTestActivity extends Activity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    getWindow().setFlags(LayoutParams.FLAG_SECURE, LayoutParams.FLAG_SECURE);

    setContentView(R.layout.main);
  }
}
```
## 4. 截屏监听
Android系统并没有提供截屏通知相关的API，需要我们自己利用系统能提供的相关特性变通实现。Android系统有一个媒体数据库，每拍一张照片，或使用系统截屏截取一张图片，都会把这张图片的详细信息加入到这个媒体数据库，并发出内容改变通知，我们可以利用内容观察者（ContentObserver）监听媒体数据库的变化，当数据库有变化时，获取最后插入的一条图片数据，如果该图片符合特定的规则，则认为被截屏了。
需要ContentObserver监听的资源URI:

-  MediaStore.Images.Media.INTERNAL_CONTENT_URI
- MediaStore.Images.Media.EXTERNAL_CONTENT_URI

读取外部存储器资源，需要添加权限:
    android.permission.READ_EXTERNAL_STORAGE
[
](https://blog.csdn.net/xietansheng/article/details/52692163)
当ContentObserver监听到媒体数据库的数据改变, 在有数据改变时 获取最后插入数据库的一条图片数据, 如果符合以下规则, 则认为截屏了:

- 1、时间判断，图片的生成时间在开始监听之后, 并与当前时间相隔10秒内：开始监听后生成的图片才有意义，相隔10秒内说明是刚刚生成的；
- 2、尺寸判断，图片的尺寸没有超过屏幕的尺寸：图片尺寸超过屏幕尺寸，一般都不是截屏图片（最近发现某些手机ROM支持滑动截屏，如果需要监听的APP界面支持滑动，需要做适当的调整和处理）；
- 3、路径判断，图片路径符合包含特定的关键词：这一点是关键，截屏图片的保存路径通常包含“screenshot”。

PS： 这些判断是为了增加截屏检测结果的可靠性，防止误报，防止遗漏。其中截屏图片的路径正常Android系统保存的路径格式为：“外部存储器/Pictures/Screenshots/Screenshot_20161001-164643.png”，但Android系统碎片化严重，加上其他第三方截屏APP等，所以路径关键字除了检查是否包含“screenshot”外，还可以适当增加其他关键字，详见最后的监听器完整代码。这种监听截屏的方法也不是100%准确，例如某些被root的机器使用第三方截屏APP自定义保存路径，还比如通过ADB命令在电脑上获取手机屏幕快照均不能监听到，但这也是目前可行性最高的方法，对于绝大多数用户都比较靠谱。
[
](https://blog.csdn.net/xietansheng/article/details/52692163)
