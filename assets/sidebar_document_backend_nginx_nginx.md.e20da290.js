import{_ as n,c as s,o as a,d as l}from"./app.f94ad080.js";const e="/assets/nginx01.b8460b14.png",p="/assets/nginx02.48fdbe60.png",i="/assets/nginx03.8f44bfc3.png",o="/assets/nginx04.b46009f0.png",c="/assets/nginx05.dfe1d1cc.webp",f=JSON.parse('{"title":"Nginx的相关文档","description":"","frontmatter":{},"headers":[{"level":2,"title":"Nginx安装配置","slug":"nginx安装配置","link":"#nginx安装配置","children":[{"level":3,"title":"在安装过程中报错","slug":"在安装过程中报错","link":"#在安装过程中报错","children":[]}]},{"level":2,"title":"检查nginx服务是否启动","slug":"检查nginx服务是否启动","link":"#检查nginx服务是否启动","children":[]},{"level":2,"title":"检查Nginx配置是否正确","slug":"检查nginx配置是否正确","link":"#检查nginx配置是否正确","children":[]},{"level":2,"title":"访问公网IP查看Nginx是否挂载了静态页面","slug":"访问公网ip查看nginx是否挂载了静态页面","link":"#访问公网ip查看nginx是否挂载了静态页面","children":[{"level":3,"title":"未成功部署","slug":"未成功部署","link":"#未成功部署","children":[]}]},{"level":2,"title":"设置Nginx服务自动开启","slug":"设置nginx服务自动开启","link":"#设置nginx服务自动开启","children":[]},{"level":2,"title":"Nginx的启动和关闭","slug":"nginx的启动和关闭","link":"#nginx的启动和关闭","children":[{"level":3,"title":"Nginx手动关闭（强制性）","slug":"nginx手动关闭-强制性","link":"#nginx手动关闭-强制性","children":[]},{"level":3,"title":"Nginx的手动开启","slug":"nginx的手动开启","link":"#nginx的手动开启","children":[]},{"level":3,"title":"优雅的关闭Nginx（所有WorkerProcess工作完成后关闭）-- 建议方式","slug":"优雅的关闭nginx-所有workerprocess工作完成后关闭-建议方式","link":"#优雅的关闭nginx-所有workerprocess工作完成后关闭-建议方式","children":[]},{"level":3,"title":"强制关闭Nginx","slug":"强制关闭nginx","link":"#强制关闭nginx","children":[]}]},{"level":2,"title":"Nginx配置重载（修改nginx配置后敲一遍）","slug":"nginx配置重载-修改nginx配置后敲一遍","link":"#nginx配置重载-修改nginx配置后敲一遍","children":[]},{"level":2,"title":"Nginx进程模型（概念）","slug":"nginx进程模型-概念","link":"#nginx进程模型-概念","children":[]},{"level":2,"title":"Nginx配置文件的整体结构","slug":"nginx配置文件的整体结构","link":"#nginx配置文件的整体结构","children":[{"level":3,"title":"Nginx配置文件详解","slug":"nginx配置文件详解","link":"#nginx配置文件详解","children":[]}]},{"level":2,"title":"Nginx防盗链","slug":"nginx防盗链","link":"#nginx防盗链","children":[{"level":3,"title":"什么是盗链？","slug":"什么是盗链","link":"#什么是盗链","children":[]},{"level":3,"title":"防盗链实现","slug":"防盗链实现","link":"#防盗链实现","children":[]}]},{"level":2,"title":"Nginx-server模块的location路径匹配优先级","slug":"nginx-server模块的location路径匹配优先级","link":"#nginx-server模块的location路径匹配优先级","children":[{"level":3,"title":"location字符含义","slug":"location字符含义","link":"#location字符含义","children":[]},{"level":3,"title":"优先级","slug":"优先级","link":"#优先级","children":[]}]}],"relativePath":"sidebar/document/backend/nginx/nginx.md","lastUpdated":1671367136000}'),t={name:"sidebar/document/backend/nginx/nginx.md"},r=l(`<h1 id="nginx的相关文档" tabindex="-1">Nginx的相关文档 <a class="header-anchor" href="#nginx的相关文档" aria-hidden="true">#</a></h1><h2 id="nginx安装配置" tabindex="-1">Nginx安装配置 <a class="header-anchor" href="#nginx安装配置" aria-hidden="true">#</a></h2><ol><li>更新apt包</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">sudo apt-get update</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="2"><li>安装nginx</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">sudo apt install nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="在安装过程中报错" tabindex="-1">在安装过程中报错 <a class="header-anchor" href="#在安装过程中报错" aria-hidden="true">#</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>报错信息：</p><p>bacula-console-qt</p><p>E: Sub-process /usr/bin/dpkg returned an error code (1)</p><p>处理方式见：</p><p><a href="https://apttutorials.com/how-to-fix-e-sub-process-usr-bin-dpkg-returned-an-error-code-1/" target="_blank" rel="noreferrer">https://apttutorials.com/how-to-fix-e-sub-process-usr-bin-dpkg-returned-an-error-code-1/</a></p></div><h2 id="检查nginx服务是否启动" tabindex="-1">检查nginx服务是否启动 <a class="header-anchor" href="#检查nginx服务是否启动" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">systemctl status nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如果显示以下状态（有绿色状态显示），则表示服务成功启动 <img src="`+e+`" alt="An image"></p><h2 id="检查nginx配置是否正确" tabindex="-1">检查Nginx配置是否正确 <a class="header-anchor" href="#检查nginx配置是否正确" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">nginx -t</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="访问公网ip查看nginx是否挂载了静态页面" tabindex="-1">访问公网IP查看Nginx是否挂载了静态页面 <a class="header-anchor" href="#访问公网ip查看nginx是否挂载了静态页面" aria-hidden="true">#</a></h2><p>Nginx成功挂载后显示界面 <img src="`+p+`" alt="An image"></p><h3 id="未成功部署" tabindex="-1">未成功部署 <a class="header-anchor" href="#未成功部署" aria-hidden="true">#</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>检查云服务器是否开放了80端口，因为Nginx默认使用80端口进行部署</p></div><h2 id="设置nginx服务自动开启" tabindex="-1">设置Nginx服务自动开启 <a class="header-anchor" href="#设置nginx服务自动开启" aria-hidden="true">#</a></h2><p>当重启云服务器时，默认不会开启Nginx服务，可以设置其自动开启</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">systemctl enable nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="nginx的启动和关闭" tabindex="-1">Nginx的启动和关闭 <a class="header-anchor" href="#nginx的启动和关闭" aria-hidden="true">#</a></h2><h3 id="nginx手动关闭-强制性" tabindex="-1">Nginx手动关闭（强制性） <a class="header-anchor" href="#nginx手动关闭-强制性" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">nginx -s stop</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="nginx的手动开启" tabindex="-1">Nginx的手动开启 <a class="header-anchor" href="#nginx的手动开启" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">systemctl start nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="优雅的关闭nginx-所有workerprocess工作完成后关闭-建议方式" tabindex="-1">优雅的关闭Nginx（所有WorkerProcess工作完成后关闭）-- 建议方式 <a class="header-anchor" href="#优雅的关闭nginx-所有workerprocess工作完成后关闭-建议方式" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">nginx -s quit</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="强制关闭nginx" tabindex="-1">强制关闭Nginx <a class="header-anchor" href="#强制关闭nginx" aria-hidden="true">#</a></h3><p>先看nginx的master process的pid是多少</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">ps -ef | grep nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>通过kill杀死这个nginx的process</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">kill -9 &lt;pid&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="nginx配置重载-修改nginx配置后敲一遍" tabindex="-1">Nginx配置重载（修改nginx配置后敲一遍） <a class="header-anchor" href="#nginx配置重载-修改nginx配置后敲一遍" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">nginx -s reload</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="nginx进程模型-概念" tabindex="-1">Nginx进程模型（概念） <a class="header-anchor" href="#nginx进程模型-概念" aria-hidden="true">#</a></h2><p>默认情况下，Nginx有2个Worker进程，均有Master主进程来控制，详细如下图</p><p><img src="`+i+'" alt="An image"></p><p>所有主要的通信工作实际都是由Worker进程来控制</p><h2 id="nginx配置文件的整体结构" tabindex="-1">Nginx配置文件的整体结构 <a class="header-anchor" href="#nginx配置文件的整体结构" aria-hidden="true">#</a></h2><p>Nginx配置文件，如果使用<code>ubuntu</code>发行版，且通过<code>apt install</code>方式安装，那么其配置文件路径 在：<code>/etc/nginx/nginx.conf</code> Nginx配置文件的整体结构如下 <img src="'+o+`" alt="An image"></p><h3 id="nginx配置文件详解" tabindex="-1">Nginx配置文件详解 <a class="header-anchor" href="#nginx配置文件详解" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"># 全局模块配置</span></span>
<span class="line"><span style="color:#A6ACCD;">## 配置用户权限和组</span></span>
<span class="line"><span style="color:#A6ACCD;">user www-data;</span></span>
<span class="line"><span style="color:#A6ACCD;">## 配置worker进程的创建数量，auto表示和CPU内核相关，有几个内核，就会开启几个进程</span></span>
<span class="line"><span style="color:#A6ACCD;">worker_processes auto;</span></span>
<span class="line"><span style="color:#A6ACCD;">## 配置全局的错误日志，这里表示三种级别的日志都将被记录到/var/log/nginx/error.log这个文件中</span></span>
<span class="line"><span style="color:#A6ACCD;">error_log /var/log/nginx/error.log info;</span></span>
<span class="line"><span style="color:#A6ACCD;">error_log /var/log/nginx/error.log debug;</span></span>
<span class="line"><span style="color:#A6ACCD;">error_log /var/log/nginx/error.log error;</span></span>
<span class="line"><span style="color:#A6ACCD;">## 配置nginx启动时的pid信息存放位置</span></span>
<span class="line"><span style="color:#A6ACCD;">pid /var/run/nginx.pid;</span></span>
<span class="line"><span style="color:#A6ACCD;">## 每一个Nginx进程打开文件的最大数目限制（Linux中一切皆文件）</span></span>
<span class="line"><span style="color:#A6ACCD;">worker_rlimit_nofile 65535;</span></span>
<span class="line"><span style="color:#A6ACCD;">## 引入nginx默认conf</span></span>
<span class="line"><span style="color:#A6ACCD;">include /etc/nginx/modules-enabled/*.conf;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># events模块配置</span></span>
<span class="line"><span style="color:#A6ACCD;">events {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ## 网络IO模型的选用</span></span>
<span class="line"><span style="color:#A6ACCD;">    use epoll;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ## 单个进程的最大连接数</span></span>
<span class="line"><span style="color:#A6ACCD;">    worker_connections 1024;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># http模块配置</span></span>
<span class="line"><span style="color:#A6ACCD;">http {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ## Nginx默认引用（尚不知用途）</span></span>
<span class="line"><span style="color:#A6ACCD;">    include /etc/nginx/mime.types;</span></span>
<span class="line"><span style="color:#A6ACCD;">    default_type application/octet-stream;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3; # Dropping SSLv3, ref: POODLE</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_prefer_server_ciphers on;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    ## 成功日志</span></span>
<span class="line"><span style="color:#A6ACCD;">    access_log /var/log/nginx/access.log;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    ## 将其他配置分到其他conf文件以减少主conf的复杂度</span></span>
<span class="line"><span style="color:#A6ACCD;">    include /etc/nginx/conf.d/http/*.conf;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    ## 请求头的配置</span></span>
<span class="line"><span style="color:#A6ACCD;">    ### 读取请求http中header的值，设定其缓冲区的大小，如超过，则应用large配置的buffer</span></span>
<span class="line"><span style="color:#A6ACCD;">    client_header_buffer_size 1k;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ### 如果请求中header值过大，超过上述1k设定，则会应用下述buffer</span></span>
<span class="line"><span style="color:#A6ACCD;">    ### 如果请求header值也超过large，则直接返回400Error</span></span>
<span class="line"><span style="color:#A6ACCD;">    large_client_header_buffers 2 21k;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    ## 请求体的配置</span></span>
<span class="line"><span style="color:#A6ACCD;">    ### 读取请求http中body的值，限制其buffer大小为16k，如超过其buffer大小，则会被写入临时文件</span></span>
<span class="line"><span style="color:#A6ACCD;">    client_body_buffer_size 16k;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ### 允许的请求体中大小的限制，如超过设定则返回413Error</span></span>
<span class="line"><span style="color:#A6ACCD;">    client_max_body_size 8m;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    ## Nginx提高性能配置-1（以下三个配套使用）</span></span>
<span class="line"><span style="color:#A6ACCD;">    ### 开启高效文件传输模式（是否调用sendfile函数来输出文件，能提高静态资源的托管效率）</span></span>
<span class="line"><span style="color:#A6ACCD;">    sendfile on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ### 配置详细：https://imququ.com/post/my-nginx-conf-for-wpo.html</span></span>
<span class="line"><span style="color:#A6ACCD;">    tcp_nopush on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ### 配置详细：https://imququ.com/post/my-nginx-conf-for-wpo.html</span></span>
<span class="line"><span style="color:#A6ACCD;">    tcp_nodelay on;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    ## Nginx提高性能配置-2（gzip压缩）</span></span>
<span class="line"><span style="color:#A6ACCD;">    ### 开启gzip</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ### 启用gzip压缩的最小文件，小于设置值的文件将不会压缩</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip_min_length 1k;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ### gzip 压缩级别，1-9，数字越大压缩的越好，也越占用CPU时间，后面会有详细说明</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip_comp_level 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ### 进行压缩的文件类型。javascript有多种形式。其中的值可以在 mime.types 文件中找到。</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png application/vnd.ms-fontobject font/ttf font/opentype font/x-woff image/svg+xml;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ### 是否在http header中添加Vary: Accept-Encoding，建议开启</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip_vary on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ### 禁用IE 6 gzip</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip_disable &quot;MSIE [1-6]\\.&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ### 设置压缩所需要的缓冲区大小</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip_buffers 32 4k;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ### 设置gzip压缩针对的HTTP协议版本，没做负载的可以不用</span></span>
<span class="line"><span style="color:#A6ACCD;">    ### gzip_http_version 1.0;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    ## 与客户端的长连接的配置</span></span>
<span class="line"><span style="color:#A6ACCD;">    ### 一个长连接最大的请求数量限制</span></span>
<span class="line"><span style="color:#A6ACCD;">    keepalive_requests 100000;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ### 代表连接的空闲时间（单位s）</span></span>
<span class="line"><span style="color:#A6ACCD;">    keepalive_timeout 120;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    # server模块配置</span></span>
<span class="line"><span style="color:#A6ACCD;">    server {</span></span>
<span class="line"><span style="color:#A6ACCD;">        ## 服务端口和域名配置</span></span>
<span class="line"><span style="color:#A6ACCD;">        ### 服务监听的端口，80是http默认端口</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen 80;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ### 请求域名</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name localhost;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        ## 处理路由</span></span>
<span class="line"><span style="color:#A6ACCD;">        location ~* ^.+\\.(ico|gif|jpg|jpeg|png)$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">                access_log   off;</span></span>
<span class="line"><span style="color:#A6ACCD;">                expires      2d;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        location ~* ^.+\\.(css|js|txt|xml|swf|wav)$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">                access_log   off;</span></span>
<span class="line"><span style="color:#A6ACCD;">                expires      24h;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        location ~* ^.+\\.(html|htm)$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">                expires      1h;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        location ~* ^.+\\.(eot|ttf|otf|woff|svg)$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">                access_log   off;</span></span>
<span class="line"><span style="color:#A6ACCD;">                expires max;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        ## 引入外部server配置，降低当前配置文件复杂度</span></span>
<span class="line"><span style="color:#A6ACCD;">        include /etc/nginx/conf.d/server/*.conf;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="nginx防盗链" tabindex="-1">Nginx防盗链 <a class="header-anchor" href="#nginx防盗链" aria-hidden="true">#</a></h2><h3 id="什么是盗链" tabindex="-1">什么是盗链？ <a class="header-anchor" href="#什么是盗链" aria-hidden="true">#</a></h3><p>盗链是说服务提供商自己不提供服务的内容，通过技术手段绕过其他有利益的最终用户界面（如广告），直接在自己的网站上 向最终用户提供其他服务提供商的服务内容（既使用其他服务提供商的流量提供给自己的客户），骗取最终用户的浏览和点击率。受益者不提供资源（或提供很少的资源），而真正的服务提供商却得不到任何的收益。</p><h3 id="防盗链实现" tabindex="-1">防盗链实现 <a class="header-anchor" href="#防盗链实现" aria-hidden="true">#</a></h3><p>利用请求头中的<code>referer</code>字段，来判断请求源是否处于白名单中，从而决定是否响应资源 进入<code>/etc/nginx/conf.d</code>目录下，新建一个任意名称的以<code>.conf</code>结尾的配置文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">cd /etc/nginx/conf.d &amp;&amp; touch turing.conf</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>写入以下配置来实现防盗链</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 匹配任意路由下所有的图片静态资源</span></span>
<span class="line"><span style="color:#A6ACCD;">    # valid_referers后面的referer列表进行匹配，如果匹配到了就invalid_referer字段值为0 否则设置该值为1</span></span>
<span class="line"><span style="color:#A6ACCD;">    location ~ .*\\.(gif|jpg|png|swf|flv|jpeg|bmp)$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">        # 结尾是白名单</span></span>
<span class="line"><span style="color:#A6ACCD;">        valid_referers none blocked *.13sai.com;</span></span>
<span class="line"><span style="color:#A6ACCD;">        if ($invalid_referer) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            rewrite ^/ http://XX.XX.XX.XX:80;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="nginx-server模块的location路径匹配优先级" tabindex="-1">Nginx-server模块的location路径匹配优先级 <a class="header-anchor" href="#nginx-server模块的location路径匹配优先级" aria-hidden="true">#</a></h2><h3 id="location字符含义" tabindex="-1">location字符含义 <a class="header-anchor" href="#location字符含义" aria-hidden="true">#</a></h3><ul><li><p><code>~</code> 正则匹配，区分大小写</p></li><li><p><code>~*</code> 正则匹配，不区分大小写</p></li><li><p><code>~^</code> 普通字符匹配</p></li><li><p><code>^~</code> 普通字符匹配，搜索停止</p></li><li><p><code>=</code> 精确匹配</p></li><li><p><code></code>默认匹配（不带任何字符）</p></li></ul><h3 id="优先级" tabindex="-1">优先级 <a class="header-anchor" href="#优先级" aria-hidden="true">#</a></h3><p><img src="`+c+'" alt="An image"></p>',55),C=[r];function d(A,g,h,x,y,D){return a(),s("div",null,C)}const v=n(t,[["render",d]]);export{f as __pageData,v as default};
