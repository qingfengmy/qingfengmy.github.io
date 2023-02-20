import{_ as s,c as n,o as a,a as e}from"./app.7f1206cf.js";const D=JSON.parse('{"title":"2022-04-antroid端实现视频的投放电视功能","description":"","frontmatter":{},"headers":[],"relativePath":"2022/2022-04-antroid端实现视频的投放电视功能.md","lastUpdated":1676736399000}'),l={name:"2022/2022-04-antroid端实现视频的投放电视功能.md"},p=e(`<h1 id="_2022-04-antroid端实现视频的投放电视功能" tabindex="-1">2022-04-antroid端实现视频的投放电视功能 <a class="header-anchor" href="#_2022-04-antroid端实现视频的投放电视功能" aria-hidden="true">#</a></h1><h2 id="_1-场景需求" tabindex="-1">1. 场景需求 <a class="header-anchor" href="#_1-场景需求" aria-hidden="true">#</a></h2><p>虎牙或者头条的APP都可以投放视频到电视，投放之后即使关闭手机，电视依然可以正常播放。</p><h2 id="_2-dlna协议" tabindex="-1">2. DLNA协议 <a class="header-anchor" href="#_2-dlna协议" aria-hidden="true">#</a></h2><p>手机投屏的原理就是内网通信。只要两个设备使用同样的数据传送协议，就可以投屏，所以有很多种实现方案。应用商店搜一下&quot;投屏&quot;，会跳出许多 App。</p><p>DLNA 就是其中一个广泛使用的协议。它的想法是，既然视频信号通过手机传给电视机，效果不好，那就只把视频网址发给电视机，让电视机自己去下载视频内容播放。</p><p>DLNA 协议其实不能算&quot;投屏&quot;，只是手机告诉电视机要播放什么，两方可以屏幕不一致，甚至手机关了，电视还能播放。这个协议可以达到高清播放的效果，国内的视频 App 也基本都支持，App 里面打开开关就可以了。</p><p>DLNA 的问题在于只支持流媒体，只有视频、图片、音乐可以通过这个协议播放（因为它们可以流媒体传送），其他格式不行，所以它不支持对手机屏幕进行镜像投屏。另外，很多电视机也没有 DLNA 功能，需要另买投屏器。</p><p>2013年，谷歌公司发布了 Chromecast 协议，基于 DLNA 协议，但做了一些扩展，解决了一些 DLNA 的痛点，比如支持镜像投屏（但要通过 Google Home 这个 App 中介）。</p><h2 id="_3-cling实现dlna协议" tabindex="-1">3. Cling实现DLNA协议 <a class="header-anchor" href="#_3-cling实现dlna协议" aria-hidden="true">#</a></h2><h3 id="_3-1-注册cling服务" tabindex="-1">3.1 注册Cling服务 <a class="header-anchor" href="#_3-1-注册cling服务" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">public interface AndroidUpnpService { </span></span>
<span class="line"><span style="color:#A6ACCD;">    public UpnpService get(); </span></span>
<span class="line"><span style="color:#A6ACCD;">    public UpnpServiceConfiguration getConfiguration(); </span></span>
<span class="line"><span style="color:#A6ACCD;">    public Registry getRegistry(); </span></span>
<span class="line"><span style="color:#A6ACCD;">    public ControlPoint getControlPoint(); </span></span>
<span class="line"><span style="color:#A6ACCD;">} </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">&lt;manifest ...&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;uses-permission android:name=&quot;android.permission.INTERNET&quot;/&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;uses-permission android:name=&quot;android.permission.ACCESS_WIFI_STATE&quot;/&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;uses-permission android:name=&quot;android.permission.CHANGE_WIFI_MULTICAST_STATE&quot;/&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;uses-permission android:name=&quot;android.permission.ACCESS_NETWORK_STATE&quot;/&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;application ...&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;activity ...&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">            ... </span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/activity&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;service android:name=&quot;org.teleal.cling.android.AndroidUpnpServiceImpl&quot;/&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/application&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/manifest&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_3-2-activity绑定service" tabindex="-1">3.2 activity绑定service <a class="header-anchor" href="#_3-2-activity绑定service" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">import android.app.ListActivity; </span></span>
<span class="line"><span style="color:#A6ACCD;">import android.content.ComponentName; </span></span>
<span class="line"><span style="color:#A6ACCD;">import android.content.Context; </span></span>
<span class="line"><span style="color:#A6ACCD;">import android.content.Intent; </span></span>
<span class="line"><span style="color:#A6ACCD;">import android.content.ServiceConnection; </span></span>
<span class="line"><span style="color:#A6ACCD;">import android.os.Bundle; </span></span>
<span class="line"><span style="color:#A6ACCD;">import android.os.IBinder; </span></span>
<span class="line"><span style="color:#A6ACCD;">import android.view.Menu; </span></span>
<span class="line"><span style="color:#A6ACCD;">import android.view.MenuItem; </span></span>
<span class="line"><span style="color:#A6ACCD;">import android.widget.ArrayAdapter; </span></span>
<span class="line"><span style="color:#A6ACCD;">import android.widget.Toast; </span></span>
<span class="line"><span style="color:#A6ACCD;">import org.teleal.cling.android.AndroidUpnpService; </span></span>
<span class="line"><span style="color:#A6ACCD;">import org.teleal.cling.android.AndroidUpnpServiceImpl; </span></span>
<span class="line"><span style="color:#A6ACCD;">import org.teleal.cling.model.meta.Device; </span></span>
<span class="line"><span style="color:#A6ACCD;">import org.teleal.cling.model.meta.LocalDevice; </span></span>
<span class="line"><span style="color:#A6ACCD;">import org.teleal.cling.model.meta.RemoteDevice; </span></span>
<span class="line"><span style="color:#A6ACCD;">import org.teleal.cling.registry.DefaultRegistryListener; </span></span>
<span class="line"><span style="color:#A6ACCD;">import org.teleal.cling.registry.Registry; </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">public class UpnpBrowser extends ListActivity { </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    private ArrayAdapter&lt;DeviceDisplay&gt; listAdapter; </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    private AndroidUpnpService upnpService; </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    private ServiceConnection serviceConnection = ... </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    private RegistryListener registryListener = new BrowseRegistryListener(); </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    @Override </span></span>
<span class="line"><span style="color:#A6ACCD;">    public void onCreate(Bundle savedInstanceState) { </span></span>
<span class="line"><span style="color:#A6ACCD;">        super.onCreate(savedInstanceState); </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        listAdapter = </span></span>
<span class="line"><span style="color:#A6ACCD;">            new ArrayAdapter( </span></span>
<span class="line"><span style="color:#A6ACCD;">                this, </span></span>
<span class="line"><span style="color:#A6ACCD;">                android.R.layout.simple_list_item_1 </span></span>
<span class="line"><span style="color:#A6ACCD;">            ); </span></span>
<span class="line"><span style="color:#A6ACCD;">        setListAdapter(listAdapter); </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        getApplicationContext().bindService( </span></span>
<span class="line"><span style="color:#A6ACCD;">            new Intent(this, AndroidUpnpServiceImpl.class), </span></span>
<span class="line"><span style="color:#A6ACCD;">            serviceConnection, </span></span>
<span class="line"><span style="color:#A6ACCD;">            Context.BIND_AUTO_CREATE </span></span>
<span class="line"><span style="color:#A6ACCD;">        ); </span></span>
<span class="line"><span style="color:#A6ACCD;">    } </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    @Override </span></span>
<span class="line"><span style="color:#A6ACCD;">    protected void onDestroy() { </span></span>
<span class="line"><span style="color:#A6ACCD;">        super.onDestroy(); </span></span>
<span class="line"><span style="color:#A6ACCD;">        if (upnpService != null) { </span></span>
<span class="line"><span style="color:#A6ACCD;">            upnpService.getRegistry().removeListener(registryListener); </span></span>
<span class="line"><span style="color:#A6ACCD;">        } </span></span>
<span class="line"><span style="color:#A6ACCD;">        getApplicationContext().unbindService(serviceConnection); </span></span>
<span class="line"><span style="color:#A6ACCD;">    } </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    ... </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">} </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_4-cybergarage" tabindex="-1">4. CyberGarage <a class="header-anchor" href="#_4-cybergarage" aria-hidden="true">#</a></h2><ul><li>Cling. Cling是一个Java开源项目，开发者可直接编译源码生成jar包导入到Android项目中。目前Cling已停止维护，但这并不影响它的热度。</li><li>Platinum. Platinum是一个C库，它支持编译成多个平台的库，如Windows、Mac、IOS和Android等。但其编译流程相对来说比较复杂，Android使用Platinum开发需要用到jni。</li><li>CyberGarage. CyberGarage是一个Java Upnp开发包，开发者将其项目源码添加到Android工程当中，作为Android Library或者 Java Library直接使用。CyberGarage提供了jar包下载地址，但CyberGarage源码存在一些bug，需要对源码进行修改，因此不建议直接下载jar包。</li></ul><h3 id="_4-1寻找设备" tabindex="-1">4.1寻找设备 <a class="header-anchor" href="#_4-1寻找设备" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">new Thread(new Runnable() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    public void run() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        controlPoint.start(); </span></span>
<span class="line"><span style="color:#A6ACCD;">        controlPoint.search();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}).start();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_4-2-选中设备" tabindex="-1">4.2 选中设备 <a class="header-anchor" href="#_4-2-选中设备" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">// 实例ID</span></span>
<span class="line"><span style="color:#A6ACCD;">String instanceID = &quot;0&quot;；</span></span>
<span class="line"><span style="color:#A6ACCD;">// 播放视频地址</span></span>
<span class="line"><span style="color:#A6ACCD;">String currentURI = &quot;http://hc.yinyuetai.com/uploads/videos/common/026E01578953FD0EF0E47204247B5D13.flv?sc=2d17ae37a9186da6&amp;br=780&amp;vid=2693509&amp;aid=623&amp;area=US&amp;vst=2&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">Device device = deviceList.get(0);</span></span>
<span class="line"><span style="color:#A6ACCD;">// 获取服务</span></span>
<span class="line"><span style="color:#A6ACCD;">Service service = device.getService(&quot;urn:schemas-upnp-org:service:AVTransport:1&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">// 获取动作</span></span>
<span class="line"><span style="color:#A6ACCD;">Action transportAction = service.getAction(&quot;SetAVTransportURI&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">// 设置参数</span></span>
<span class="line"><span style="color:#A6ACCD;">transportAction.setArgumentValue(&quot;InstanceID&quot;, instanceID);</span></span>
<span class="line"><span style="color:#A6ACCD;">transportAction.setArgumentValue(&quot;CurrentURI&quot;, transportURI);</span></span>
<span class="line"><span style="color:#A6ACCD;">// SetAVTransportURI</span></span>
<span class="line"><span style="color:#A6ACCD;">if(transportAction.postControlAction()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 成功</span></span>
<span class="line"><span style="color:#A6ACCD;">    Action playAction = service.getAction(&quot;Play&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    playAction.setArgumentValue(&quot;InstanceID&quot;, instanceID);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // Play</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!playAction.postControlAction()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        Log.e(&quot;upnpErr&quot;, playAction.getStatus().getDescription());</span></span>
<span class="line"><span style="color:#A6ACCD;">    } </span></span>
<span class="line"><span style="color:#A6ACCD;">} else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 失败</span></span>
<span class="line"><span style="color:#A6ACCD;">    Log.e(&quot;upnpErr&quot;, transportAction.getStatus().getDescription());</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_5-参考文章" tabindex="-1">5. 参考文章 <a class="header-anchor" href="#_5-参考文章" aria-hidden="true">#</a></h2><ul><li><a href="https://www.ruanyifeng.com/blog/2020/06/android-host-solutions.html" target="_blank" rel="noreferrer">安卓手机系统连接电视，最好的方案是什么？</a></li><li><a href="http://www.it165.net/pro/html/201303/4968.html" target="_blank" rel="noreferrer">Android基于Cling开发DLNA应用</a></li><li><a href="https://juejin.cn/post/6844903870913576973" target="_blank" rel="noreferrer">掘金-DLNA和CyberGarage </a></li></ul>`,23),t=[p];function o(i,r,c,A,C,d){return a(),n("div",null,t)}const u=s(l,[["render",o]]);export{D as __pageData,u as default};
