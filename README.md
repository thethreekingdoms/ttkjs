# 如何使用
    https://github.com/jeffycai/ttkjs

# 打包
1、安装cordova
    npm install -g cordova
    查看版本：cordova -version
    
2、创建工程
$cordova create ttk-mobile com.ttk.mobile.cordova   //子文件夹hello内，创建包名 + 工程名
$cd ttk-mobile

3、添加平台
    cordova platform add android@5.0
    查看当前平台$cordova platform ls
    
4、编译--需要相应的编译环境
    cordova build android
    cordova build ios

5、修改内容
    修改www目录下的前端页面即可



6、运行
    1）android -- 命令行方式
        a）准备手机环境，打开USB调试模式，USB连接模式不要是“只充电”
        b）查看设备adb devices
        c）安装apk：adb install /Users/shenxy/Documents/work/fx/SourceCode/GitGitlab/mobile/src/ttk-mobile/platforms/android/build/outputs/apk/android-debug.apk
        
    2）android -- 手工拷贝apk到手机上，点击安装
    
    3）ios -- todo。。。
    
7、调试
打开电脑上chrome的以下地址：
chrome://inspect/


问题及解决：
1）如果没有看到手机：
    a）启动手机的开发者模式，并启动“usb调试”，并同意在该设备上调试
    b）勾选图中1处
2）如果没有看到webview的项：
    a）在电脑上运行adb devices（启动daemon服务）
    b）(可选，不知道是否有用) chrome://appcache-internals/打开chrome的缓存，全清
3）点“inspect”后白屏
    a）首次使用需要翻墙


8-1、android环境准备
    https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html

8-2、ios环境准备
    https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html
    1）下载和安装Xcode：https://developer.apple.com/downloads/index.action
    2）安装命令行工具：
        $ xcode-select --install
        如果不是自己下载的xcode，需要切换xcode-select的路径：
        sudo xcode-select --switch /Users/shenxy/Downloads/Xcode-beta.app/Contents/Developer
    3）从命令行安装app的工具：
        $ npm install -g ios-deploy