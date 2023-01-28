import{_ as s,c as n,o as a,d as l}from"./app.5b28c757.js";const e="/assets/github-actions01.8010a659.png",p="/assets/github-actions02.c47eb890.png",o="/assets/github-actions03.210c6280.png",t="/assets/github-actions04.1d1b8b61.png",c="/assets/github-actions05.ae18c5b3.png",g=JSON.parse('{"title":"Hello Github","description":"","frontmatter":{},"headers":[{"level":2,"title":"Github Actions","slug":"github-actions","link":"#github-actions","children":[]},{"level":2,"title":"基本原理","slug":"基本原理","link":"#基本原理","children":[]},{"level":2,"title":"详细步骤","slug":"详细步骤","link":"#详细步骤","children":[{"level":3,"title":"1. 在项目根目录下初始化自动部署的yml配置","slug":"_1-在项目根目录下初始化自动部署的yml配置","link":"#_1-在项目根目录下初始化自动部署的yml配置","children":[]},{"level":3,"title":"2. 在本地生成ssh并将公钥配置到云服务器上","slug":"_2-在本地生成ssh并将公钥配置到云服务器上","link":"#_2-在本地生成ssh并将公钥配置到云服务器上","children":[]},{"level":3,"title":"3. 将私钥配置到repo的secrets中（secrets在settings栏）","slug":"_3-将私钥配置到repo的secrets中-secrets在settings栏","link":"#_3-将私钥配置到repo的secrets中-secrets在settings栏","children":[]},{"level":3,"title":"4. 继续配置secrets，配置HOST和USER（云服务器的公网IP和登陆用户）","slug":"_4-继续配置secrets-配置host和user-云服务器的公网ip和登陆用户","link":"#_4-继续配置secrets-配置host和user-云服务器的公网ip和登陆用户","children":[]}]},{"level":2,"title":"回到刚刚第1步所创建的blank.yml配置文件","slug":"回到刚刚第1步所创建的blank-yml配置文件","link":"#回到刚刚第1步所创建的blank-yml配置文件","children":[]},{"level":2,"title":"在本地通过git push来提交代码并让github action自动部署到云服务器","slug":"在本地通过git-push来提交代码并让github-action自动部署到云服务器","link":"#在本地通过git-push来提交代码并让github-action自动部署到云服务器","children":[]}],"relativePath":"sidebar/document/other/git-github/github.md","lastUpdated":1671367136000}'),r={name:"sidebar/document/other/git-github/github.md"},i=l(`<h1 id="hello-github" tabindex="-1">Hello Github <a class="header-anchor" href="#hello-github" aria-hidden="true">#</a></h1><h2 id="github-actions" tabindex="-1">Github Actions <a class="header-anchor" href="#github-actions" aria-hidden="true">#</a></h2><p>Github Actions能够替代<code>jenkins</code>来实现CI/CD的工作 通常来讲，对于小型的服务器，如果要跑一个<code>jenkins</code>服务，其消耗的系统资源是比较大的 所以我们可以利用Github Actions的功能来实现自动化部署</p><h2 id="基本原理" tabindex="-1">基本原理 <a class="header-anchor" href="#基本原理" aria-hidden="true">#</a></h2><p>Github Actions相当于为我们提供了一个我们指定的环境如linux环境，然后在他那里我们可以去安装服务所需的一些包 例如<code>Nodejs</code>环境。我们有了nodejs环境之后，便可以通过<code>npm</code>的安装和打包。之后我们又可使用<code>rsync</code>来 通过ssh远程登陆我们的CVM，让他把打包好的静态网站部署到我们的nginx上面，便完成了CI（持续集成）的工作。</p><h2 id="详细步骤" tabindex="-1">详细步骤 <a class="header-anchor" href="#详细步骤" aria-hidden="true">#</a></h2><h3 id="_1-在项目根目录下初始化自动部署的yml配置" tabindex="-1">1. 在项目根目录下初始化自动部署的yml配置 <a class="header-anchor" href="#_1-在项目根目录下初始化自动部署的yml配置" aria-hidden="true">#</a></h3><p>项目根目录下新建如下结构 <code>.github/workflows/blank.yml</code> 并在blank.yml的配置中写入以下内容</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># 一个workflow，名为Deploy To CVM</span></span>
<span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Deploy To CVM</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF9CAC;">on</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># 此CI/CD触发时的事件</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">push</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># 在代码提交时自动触发</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">branches</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">workflow_dispatch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># 允许手动触发事件</span></span>
<span class="line"><span style="color:#676E95;"># 一个 CI/CD 的工作流有许多 jobs 组成，比如最典型的 job 是 lint，test，build。</span></span>
<span class="line"><span style="color:#F07178;">jobs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">build</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># 构建job</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">runs-on</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ubuntu-latest</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># 跑workflow的服务器系统</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">steps</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># job的一系列动作</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;"># 切换分支获取源码</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># step的名称，将会在 github action 的控制台中显示</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;"># 选择一个action，可以理解为若干 steps.run，有利于代码复用</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;"># 安装使用 node:16</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use Node.js 16</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/setup-node@master</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">node-version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;"># 运行命令，npm install &amp;&amp; npm run build来构建我们的项目</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm install and build</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#C3E88D;">          npm install</span></span>
<span class="line"><span style="color:#C3E88D;">          npm run build</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">env</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">CI</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;"># 部署到远程CVM服务器</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Deploy to Server</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">burnett01/rsync-deployments@5.2.1</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;"># rsync的参数配置</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">switches</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-avzr --delete</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;"># path是将哪些文件部署过去，通常这根据不同项目构建项目时存放位置的不同而决定</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dist/</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;"># remote_path是将build好的源码放目标云服务器的哪个目录下，通常nginx默认部署的文件目录就在/var/www/html/</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">remote_path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/var/www/html/</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;"># HOST是要部署到的远程云服务器的公网ip</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">remote_host</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${{ secrets.HOST }}</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;"># USER是远程登陆时所使用的用户，如root。定义在secrets是为了安全，不将隐私内容暴露在配置中</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">remote_user</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${{ secrets.USER }}</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;"># 本地.ssh文件下的私钥id_rsa，存在secrets的TOKEN中</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">remote_key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${{ secrets.TOKEN }}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="_2-在本地生成ssh并将公钥配置到云服务器上" tabindex="-1">2. 在本地生成ssh并将公钥配置到云服务器上 <a class="header-anchor" href="#_2-在本地生成ssh并将公钥配置到云服务器上" aria-hidden="true">#</a></h3><p>本机上使用命令<code>ssh-keygen -t ed25519 -C &quot;token&quot;</code>来生成token</p><p>再输入<code>cat ~/.ssh/id_ed25519.pub</code>来查看是否生成成功</p><p>生成之后，将该<code>id_ed25519.pub</code>公钥内的所有内容复制然后粘贴到云服务器的ssh</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">vim </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.ssh/authorized_keys</span></span>
<span class="line"></span></code></pre></div><p>按<code>i</code>进入编辑模式，在最后一行粘贴，然后按ESC，输入<code>:wq</code>保存并退出</p><h3 id="_3-将私钥配置到repo的secrets中-secrets在settings栏" tabindex="-1">3. 将私钥配置到repo的secrets中（secrets在settings栏） <a class="header-anchor" href="#_3-将私钥配置到repo的secrets中-secrets在settings栏" aria-hidden="true">#</a></h3><p>在本机上<code>cd ~/.ssh</code>，并复制目录下<code>id_ed25519</code>文件中所有内容（注意别漏掉尾部的换行） 然后进入secrets中 <img src="`+e+'" alt="An image"> 点击New repository secret新建secret，并将标题取为：<code>TOKEN</code>，将复制的私钥内容粘贴到文本框内（不要把尾部换行删了） <img src="'+p+'" alt="An image"></p><h3 id="_4-继续配置secrets-配置host和user-云服务器的公网ip和登陆用户" tabindex="-1">4. 继续配置secrets，配置HOST和USER（云服务器的公网IP和登陆用户） <a class="header-anchor" href="#_4-继续配置secrets-配置host和user-云服务器的公网ip和登陆用户" aria-hidden="true">#</a></h3><p><img src="'+o+'" alt="An image"></p><h2 id="回到刚刚第1步所创建的blank-yml配置文件" tabindex="-1">回到刚刚第1步所创建的<code>blank.yml</code>配置文件 <a class="header-anchor" href="#回到刚刚第1步所创建的blank-yml配置文件" aria-hidden="true">#</a></h2><p>其中有部分配置是要做修改的：</p><ol><li>需要将安装命令和打包命令（<code>npm install</code> 和 <code>npm run build</code> 这一步）的命令换成你的项目所使用的安装和打包命令，以免出错</li><li>部署到远程CVM服务器这一步，我们需要做两个更改：</li></ol><ul><li><code>path</code> 的值需要改成你的项目中构建出来的目录位置</li><li><code>remote_path</code> 的值需要改成部署到的云服务器目录位置，通常nginx的静态网页默认部署在 <code>/var/www/html</code> 文件夹中</li></ul><h2 id="在本地通过git-push来提交代码并让github-action自动部署到云服务器" tabindex="-1">在本地通过git push来提交代码并让github action自动部署到云服务器 <a class="header-anchor" href="#在本地通过git-push来提交代码并让github-action自动部署到云服务器" aria-hidden="true">#</a></h2><p>如果完成了以上所有步骤，便可以将代码提交到repo，默认是会触发push事件，所以在提交后，actions便会运作 <img src="'+t+'" alt="An image"> 如果配置成功，且没有出现任何问题，actions便会成功运行 <img src="'+c+'" alt="An image"></p>',25),y=[i];function D(C,d,h,A,F,u){return a(),n("div",null,y)}const m=s(r,[["render",D]]);export{g as __pageData,m as default};