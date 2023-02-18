# 2022-04-antroid端实现视频的投放电视功能

## 1. 场景需求
虎牙或者头条的APP都可以投放视频到电视，投放之后即使关闭手机，电视依然可以正常播放。
## 2. DLNA协议
手机投屏的原理就是内网通信。只要两个设备使用同样的数据传送协议，就可以投屏，所以有很多种实现方案。应用商店搜一下"投屏"，会跳出许多 App。

DLNA 就是其中一个广泛使用的协议。它的想法是，既然视频信号通过手机传给电视机，效果不好，那就只把视频网址发给电视机，让电视机自己去下载视频内容播放。

DLNA 协议其实不能算"投屏"，只是手机告诉电视机要播放什么，两方可以屏幕不一致，甚至手机关了，电视还能播放。这个协议可以达到高清播放的效果，国内的视频 App 也基本都支持，App 里面打开开关就可以了。

DLNA 的问题在于只支持流媒体，只有视频、图片、音乐可以通过这个协议播放（因为它们可以流媒体传送），其他格式不行，所以它不支持对手机屏幕进行镜像投屏。另外，很多电视机也没有 DLNA 功能，需要另买投屏器。

2013年，谷歌公司发布了 Chromecast 协议，基于 DLNA 协议，但做了一些扩展，解决了一些 DLNA 的痛点，比如支持镜像投屏（但要通过 Google Home 这个 App 中介）。

## 3. Cling实现DLNA协议
### 3.1 注册Cling服务
```
public interface AndroidUpnpService { 
    public UpnpService get(); 
    public UpnpServiceConfiguration getConfiguration(); 
    public Registry getRegistry(); 
    public ControlPoint getControlPoint(); 
} 
```
```
<manifest ...> 
 
    <uses-permission android:name="android.permission.INTERNET"/> 
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/> 
    <uses-permission android:name="android.permission.CHANGE_WIFI_MULTICAST_STATE"/> 
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/> 
 
    <application ...> 
 
        <activity ...> 
            ... 
        </activity> 
 
        <service android:name="org.teleal.cling.android.AndroidUpnpServiceImpl"/> 
 
    </application> 
 
</manifest> 
```
## 3.2 activity绑定service
```
import android.app.ListActivity; 
import android.content.ComponentName; 
import android.content.Context; 
import android.content.Intent; 
import android.content.ServiceConnection; 
import android.os.Bundle; 
import android.os.IBinder; 
import android.view.Menu; 
import android.view.MenuItem; 
import android.widget.ArrayAdapter; 
import android.widget.Toast; 
import org.teleal.cling.android.AndroidUpnpService; 
import org.teleal.cling.android.AndroidUpnpServiceImpl; 
import org.teleal.cling.model.meta.Device; 
import org.teleal.cling.model.meta.LocalDevice; 
import org.teleal.cling.model.meta.RemoteDevice; 
import org.teleal.cling.registry.DefaultRegistryListener; 
import org.teleal.cling.registry.Registry; 
 
public class UpnpBrowser extends ListActivity { 
 
    private ArrayAdapter<DeviceDisplay> listAdapter; 
 
    private AndroidUpnpService upnpService; 
 
    private ServiceConnection serviceConnection = ... 
 
    private RegistryListener registryListener = new BrowseRegistryListener(); 
 
    @Override 
    public void onCreate(Bundle savedInstanceState) { 
        super.onCreate(savedInstanceState); 
 
        listAdapter = 
            new ArrayAdapter( 
                this, 
                android.R.layout.simple_list_item_1 
            ); 
        setListAdapter(listAdapter); 
 
        getApplicationContext().bindService( 
            new Intent(this, AndroidUpnpServiceImpl.class), 
            serviceConnection, 
            Context.BIND_AUTO_CREATE 
        ); 
    } 
 
    @Override 
    protected void onDestroy() { 
        super.onDestroy(); 
        if (upnpService != null) { 
            upnpService.getRegistry().removeListener(registryListener); 
        } 
        getApplicationContext().unbindService(serviceConnection); 
    } 
 
    ... 
 
} 
```
## 4. CyberGarage

- Cling. Cling是一个Java开源项目，开发者可直接编译源码生成jar包导入到Android项目中。目前Cling已停止维护，但这并不影响它的热度。
- Platinum. Platinum是一个C库，它支持编译成多个平台的库，如Windows、Mac、IOS和Android等。但其编译流程相对来说比较复杂，Android使用Platinum开发需要用到jni。
- CyberGarage. CyberGarage是一个Java Upnp开发包，开发者将其项目源码添加到Android工程当中，作为Android Library或者 Java Library直接使用。CyberGarage提供了jar包下载地址，但CyberGarage源码存在一些bug，需要对源码进行修改，因此不建议直接下载jar包。
###  4.1寻找设备
```
new Thread(new Runnable() {
    public void run() {
        controlPoint.start(); 
        controlPoint.search();
    }
}).start();

```
### 4.2 选中设备
```
// 实例ID
String instanceID = "0"；
// 播放视频地址
String currentURI = "http://hc.yinyuetai.com/uploads/videos/common/026E01578953FD0EF0E47204247B5D13.flv?sc=2d17ae37a9186da6&br=780&vid=2693509&aid=623&area=US&vst=2";
Device device = deviceList.get(0);
// 获取服务
Service service = device.getService("urn:schemas-upnp-org:service:AVTransport:1");
// 获取动作
Action transportAction = service.getAction("SetAVTransportURI");
// 设置参数
transportAction.setArgumentValue("InstanceID", instanceID);
transportAction.setArgumentValue("CurrentURI", transportURI);
// SetAVTransportURI
if(transportAction.postControlAction()) {
    // 成功
    Action playAction = service.getAction("Play");
    playAction.setArgumentValue("InstanceID", instanceID);
    // Play
    if (!playAction.postControlAction()) {
        Log.e("upnpErr", playAction.getStatus().getDescription());
    } 
} else {
    // 失败
    Log.e("upnpErr", transportAction.getStatus().getDescription());
}

```
## 5. 参考文章

- [安卓手机系统连接电视，最好的方案是什么？](https://www.ruanyifeng.com/blog/2020/06/android-host-solutions.html)
- [Android基于Cling开发DLNA应用](http://www.it165.net/pro/html/201303/4968.html)
- [掘金-DLNA和CyberGarage ](https://juejin.cn/post/6844903870913576973)
