import{_ as e,c as a,o as l,d as s}from"./app.552e1d14.js";const u=JSON.parse('{"title":"JS面试题个人总结与解析","description":"","frontmatter":{},"headers":[{"level":2,"title":"Map和Set的区别，Map和Object的区别","slug":"map和set的区别-map和object的区别","link":"#map和set的区别-map和object的区别","children":[{"level":3,"title":"Map和Set区别","slug":"map和set区别","link":"#map和set区别","children":[]},{"level":3,"title":"Map和Object的区别","slug":"map和object的区别","link":"#map和object的区别","children":[]}]},{"level":2,"title":"filter、every、flat的作用？","slug":"filter、every、flat的作用","link":"#filter、every、flat的作用","children":[{"level":3,"title":"filter","slug":"filter","link":"#filter","children":[]},{"level":3,"title":"every","slug":"every","link":"#every","children":[]},{"level":3,"title":"flat","slug":"flat","link":"#flat","children":[]}]},{"level":2,"title":"ES6都有哪些新特性？","slug":"es6都有哪些新特性","link":"#es6都有哪些新特性","children":[]},{"level":2,"title":"说一下对Promise的了解","slug":"说一下对promise的了解","link":"#说一下对promise的了解","children":[]},{"level":2,"title":"Promise的all和race有什么区别？","slug":"promise的all和race有什么区别","link":"#promise的all和race有什么区别","children":[{"level":3,"title":"Promise.all","slug":"promise-all","link":"#promise-all","children":[]},{"level":3,"title":"Promise.race","slug":"promise-race","link":"#promise-race","children":[]},{"level":3,"title":"区别：","slug":"区别","link":"#区别","children":[]}]},{"level":2,"title":"箭头函数和普通函数的区别？","slug":"箭头函数和普通函数的区别","link":"#箭头函数和普通函数的区别","children":[]},{"level":2,"title":"let、var、const区别？希望const内的属性不能被修改该怎么做？","slug":"let、var、const区别-希望const内的属性不能被修改该怎么做","link":"#let、var、const区别-希望const内的属性不能被修改该怎么做","children":[{"level":3,"title":"let和const与var的区别：","slug":"let和const与var的区别","link":"#let和const与var的区别","children":[]},{"level":3,"title":"希望const内的属性不能被修改该怎么做？","slug":"希望const内的属性不能被修改该怎么做","link":"#希望const内的属性不能被修改该怎么做","children":[]}]},{"level":2,"title":"堆和栈的区别","slug":"堆和栈的区别","link":"#堆和栈的区别","children":[{"level":3,"title":"基本概念：","slug":"基本概念","link":"#基本概念","children":[]},{"level":3,"title":"区别：","slug":"区别-1","link":"#区别-1","children":[]}]},{"level":2,"title":"闭包的原理","slug":"闭包的原理","link":"#闭包的原理","children":[]},{"level":2,"title":"new的原理","slug":"new的原理","link":"#new的原理","children":[{"level":3,"title":"函数执行时发生了什么？","slug":"函数执行时发生了什么","link":"#函数执行时发生了什么","children":[]},{"level":3,"title":"new一个构造函数时发生了什么？","slug":"new一个构造函数时发生了什么","link":"#new一个构造函数时发生了什么","children":[]}]},{"level":2,"title":"数据类型有哪些？如何判断一个数据是否是数组","slug":"数据类型有哪些-如何判断一个数据是否是数组","link":"#数据类型有哪些-如何判断一个数据是否是数组","children":[{"level":3,"title":"数据类型有哪些？","slug":"数据类型有哪些","link":"#数据类型有哪些","children":[]}]},{"level":2,"title":"jQuery链式调用原理？","slug":"jquery链式调用原理","link":"#jquery链式调用原理","children":[]},{"level":2,"title":"分别介绍一下原型、原型链、作用域和作用域链的含义和使用场景","slug":"分别介绍一下原型、原型链、作用域和作用域链的含义和使用场景","link":"#分别介绍一下原型、原型链、作用域和作用域链的含义和使用场景","children":[{"level":3,"title":"含义：","slug":"含义","link":"#含义","children":[]},{"level":3,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]}]}],"relativePath":"sidebar/document/frontend/html-css-js/JS面试题.md","lastUpdated":null}'),n={name:"sidebar/document/frontend/html-css-js/JS面试题.md"},r=s(`<h1 id="js面试题个人总结与解析" tabindex="-1">JS面试题个人总结与解析 <a class="header-anchor" href="#js面试题个人总结与解析" aria-hidden="true">#</a></h1><h2 id="map和set的区别-map和object的区别" tabindex="-1">Map和Set的区别，Map和Object的区别 <a class="header-anchor" href="#map和set的区别-map和object的区别" aria-hidden="true">#</a></h2><h3 id="map和set区别" tabindex="-1">Map和Set区别 <a class="header-anchor" href="#map和set区别" aria-hidden="true">#</a></h3><ol><li>Map存储的数据是键值对结构，而Set存储的则是值结构。</li><li>Set存储的value是唯一的，而Map存储的是keyValue，所以key是唯一的</li></ol><h3 id="map和object的区别" tabindex="-1">Map和Object的区别 <a class="header-anchor" href="#map和object的区别" aria-hidden="true">#</a></h3><ol><li><p>Map存储的是键值对结构，但是Map的键可以是任意类型，而Object的key只能是字符串和symbol还有数值（但数值会被自动转换为string）</p></li><li><p>Map中每一个键值对按照插入顺序进行排序，而Object不是。</p></li></ol><h2 id="filter、every、flat的作用" tabindex="-1">filter、every、flat的作用？ <a class="header-anchor" href="#filter、every、flat的作用" aria-hidden="true">#</a></h2><h3 id="filter" tabindex="-1">filter <a class="header-anchor" href="#filter" aria-hidden="true">#</a></h3><p>​ filter的作用是能够筛选出所有满足指定条件的数组元素，并返回这个经过筛选的数组元素集合。</p><h3 id="every" tabindex="-1">every <a class="header-anchor" href="#every" aria-hidden="true">#</a></h3><p>​ every的作用是能够测试一个数组是否全部满足一个指定的条件，所有数组元素都满足条件（每一次回调的返回值是true）</p><h3 id="flat" tabindex="-1">flat <a class="header-anchor" href="#flat" aria-hidden="true">#</a></h3><p>​ flat的作用是能够扁平化一个数组，并返回这个经过扁平化的数组。执行flat所传递的参数决定扁平的层级数。</p><h2 id="es6都有哪些新特性" tabindex="-1">ES6都有哪些新特性？ <a class="header-anchor" href="#es6都有哪些新特性" aria-hidden="true">#</a></h2><ol><li><p>解构赋值</p></li><li><p>函数参数的默认值</p></li><li><p>模板字符串</p></li><li><p>对象方法的简写形式</p></li><li><p>Promise</p></li><li><p>新增内置构造class类</p></li><li><p>新增内置构造Set和Map还有WeakSet和WeakMap</p></li><li><p>箭头函数</p></li><li><p>ES6模块化（import，export）</p></li><li><p>块作用域</p></li></ol><h2 id="说一下对promise的了解" tabindex="-1">说一下对Promise的了解 <a class="header-anchor" href="#说一下对promise的了解" aria-hidden="true">#</a></h2><ol><li><p>Promise本身是一个状态机，每一个Promise实例只能有三个状态：pending、fulfilled、rejected。分别代表：等待处理状态、处理成功状态、处理失败状态，并且状态的变更只能通过pending到fulfilled，peding到rejected两种。并且状态变更后都是不可逆的。</p></li><li><p>Promise的then方法能够对变更状态后的Promise进行处理，并返回一个promise对象，并且可以被连续调用多次。</p></li><li><p>Promise支持链式调用</p></li><li><p>Promise的then保存着一个状态处理后的参数，如果是成功状态处理，则返回上一次执行resolve或返回的值，如果是失败状态处理，则返回错误信息。</p></li></ol><h2 id="promise的all和race有什么区别" tabindex="-1">Promise的all和race有什么区别？ <a class="header-anchor" href="#promise的all和race有什么区别" aria-hidden="true">#</a></h2><h3 id="promise-all" tabindex="-1">Promise.all <a class="header-anchor" href="#promise-all" aria-hidden="true">#</a></h3><p>​ Promise的all方法所返回的promise会等到所有传递的promise数组集合都处理为完成状态或有一个失败状态时异步的从pending转变为fulfilled或rejected</p><h3 id="promise-race" tabindex="-1">Promise.race <a class="header-anchor" href="#promise-race" aria-hidden="true">#</a></h3><p>​ Promise的race方法执行时可传递一个promise迭代器，并返回一个promise，异步的转变状态。一旦迭代器中的任意一个promise返回成功或失败，那么返回的promise则转变为成功或失败状态，并在then或catch的参数中返回对应的成功参数或失败参数。一句话总结：race总是返回promise迭代器中最先处理完成的那个处理结果。</p><h3 id="区别" tabindex="-1">区别： <a class="header-anchor" href="#区别" aria-hidden="true">#</a></h3><ol><li><p>all会在所有promise集合都为完成状态或第一个失败状态时变更状态为对应完成或失败状态。而race会在promise集合中的第一个promise处理完成后（不管是失败还是成功）直接变更返回的promise对应的状态。</p></li><li><p>all和race的相同之处在于他们都是在迭代promise集合时，集合中任意一个promise返回失败状态，那么最终返回的promise就直接返回失败状态。</p></li></ol><h2 id="箭头函数和普通函数的区别" tabindex="-1">箭头函数和普通函数的区别？ <a class="header-anchor" href="#箭头函数和普通函数的区别" aria-hidden="true">#</a></h2><ol><li><p>箭头函数相当于匿名函数，没有命名，而普通函数不使用函数表达式时，需要命名。</p></li><li><p>箭头函数在只有一行执行语句时，可直接省略大括号<code>{}</code>并直接写上表达式。</p></li><li><p>箭头函数不绑定<code>this</code>，普通函数的this取决于调用时的具体情况，而箭头函数的this总是在当前所在上下文的this（将上下文的this作为自己的this）</p></li><li><p>箭头函数是匿名函数，所以并不能被作为构造函数（不能使用<code>new</code>）。</p></li><li><p>箭头函数没有arguments参数，箭头函数用一个形参接收多个实参应该用rest参数...解决<code>...args</code></p></li><li><p>箭头函数没有原型（prototype）</p></li></ol><h2 id="let、var、const区别-希望const内的属性不能被修改该怎么做" tabindex="-1">let、var、const区别？希望const内的属性不能被修改该怎么做？ <a class="header-anchor" href="#let、var、const区别-希望const内的属性不能被修改该怎么做" aria-hidden="true">#</a></h2><h3 id="let和const与var的区别" tabindex="-1">let和const与var的区别： <a class="header-anchor" href="#let和const与var的区别" aria-hidden="true">#</a></h3><ol><li><p>let和const都不能先使用后定义，必须先定义再使用。而var允许先使用后定义。</p></li><li><p>let和const定义都拥有<strong>块作用域特性</strong>，而var没有。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">alex</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">age</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">19</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(name) </span><span style="color:#676E95;">// alex</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(age) </span><span style="color:#676E95;">// 错误，没有找到age</span></span>
<span class="line"></span></code></pre></div><p>或以下这种情况：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(i) </span><span style="color:#676E95;">// 10</span></span>
<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> m </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">m</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">m</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(m) </span><span style="color:#676E95;">// 错误，没有找到m</span></span>
<span class="line"></span></code></pre></div></li><li><p>const定义的为常量，let和var定义为变量。常量值如果是基础值，则值不可以被更改。常量值如果是引用值，则引用不可以被更改，但引用内部的属性或方法可以被更改。</p></li></ol><h3 id="希望const内的属性不能被修改该怎么做" tabindex="-1">希望const内的属性不能被修改该怎么做？ <a class="header-anchor" href="#希望const内的属性不能被修改该怎么做" aria-hidden="true">#</a></h3><p>​ 如果希望const内的属性不能被修改（增删改），则可以通过方法<code>Object.freeze</code>将该对象冻结。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">alex</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">19</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">freeze</span><span style="color:#A6ACCD;">(obj)</span></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">jack</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(obj) </span><span style="color:#676E95;">// {name:&#39;alex&#39;,age:19} 没有发生改变</span></span>
<span class="line"></span></code></pre></div><h2 id="堆和栈的区别" tabindex="-1">堆和栈的区别 <a class="header-anchor" href="#堆和栈的区别" aria-hidden="true">#</a></h2><h3 id="基本概念" tabindex="-1">基本概念： <a class="header-anchor" href="#基本概念" aria-hidden="true">#</a></h3><ul><li>栈：栈一般存储着基本数据类型，自动分配的内存空间，每个内存空间固定大小，由系统自动释放。方法内定义的所有变量都是分配到栈中。引用数据类型存放在栈中只是一个引用地址，而不是具体的值，具体的值被分配到堆内存中，栈只是存放了该引用类型的地址。</li><li>堆：堆一般存储着引用数据类型具体的值，是动态分配的空间，大小不定也不会自动释放。只要当没有任何一个强引用在引用它时，那么垃圾回收机制才会回收。</li></ul><h3 id="区别-1" tabindex="-1">区别： <a class="header-anchor" href="#区别-1" aria-hidden="true">#</a></h3><ol><li>栈一般存放着基本类型和引用类型的地址，而堆只存放引用类型具体的值。</li><li>栈存放的每一块内存空间大小都是固定的，而堆存放的内存空间大小不定。</li><li>栈存放的每一块内存空间都是自动分配，并且由系统自动释放，堆存放的内存空间则是动态分配，并且不会自动释放。</li></ol><h2 id="闭包的原理" tabindex="-1">闭包的原理 <a class="header-anchor" href="#闭包的原理" aria-hidden="true">#</a></h2><p><a href="http://www.baidu.com" target="_blank" rel="noreferrer">www.baidu.com</a></p><h2 id="new的原理" tabindex="-1">new的原理 <a class="header-anchor" href="#new的原理" aria-hidden="true">#</a></h2><h3 id="函数执行时发生了什么" tabindex="-1">函数执行时发生了什么？ <a class="header-anchor" href="#函数执行时发生了什么" aria-hidden="true">#</a></h3><ol><li>创建执行期上下文</li><li>创建作用域链，复制函数的[[scope]]属性并放入作用域链中</li><li>创建一个AO并将其推入至作用域链顶端，然后在函数内部获取arguments和其他变量并初始化到AO中。</li><li>函数执行。</li><li>函数执行完毕，局部的AO销毁（闭包会保留对函数的作用域的引用）</li></ol><h3 id="new一个构造函数时发生了什么" tabindex="-1">new一个构造函数时发生了什么？ <a class="header-anchor" href="#new一个构造函数时发生了什么" aria-hidden="true">#</a></h3><ol><li>创建一个普通对象</li><li>将构造函数的this指向这个对象</li><li>执行这个构造函数（按照以上函数执行时的解释执行）</li><li>为该普通对象创建一个属性<code>__proto__</code>并指向这个构造函数的<code>prototype</code>属性</li><li>返回这个对象（实例），如果手动return了一个引用，则返回该引用，否则覆盖该return。</li></ol><h2 id="数据类型有哪些-如何判断一个数据是否是数组" tabindex="-1">数据类型有哪些？如何判断一个数据是否是数组 <a class="header-anchor" href="#数据类型有哪些-如何判断一个数据是否是数组" aria-hidden="true">#</a></h2><h3 id="数据类型有哪些" tabindex="-1">数据类型有哪些？ <a class="header-anchor" href="#数据类型有哪些" aria-hidden="true">#</a></h3><h4 id="基本数据类型" tabindex="-1">基本数据类型 <a class="header-anchor" href="#基本数据类型" aria-hidden="true">#</a></h4><ol><li>Number</li><li>String</li><li>Boolean</li><li>Undefined</li><li>Null</li><li>Symbol</li></ol><h4 id="引用数据类型" tabindex="-1">引用数据类型 <a class="header-anchor" href="#引用数据类型" aria-hidden="true">#</a></h4><ol><li>Object</li><li>Array</li><li>Function</li><li>Date</li></ol><h2 id="jquery链式调用原理" tabindex="-1">jQuery链式调用原理？ <a class="header-anchor" href="#jquery链式调用原理" aria-hidden="true">#</a></h2><p>jQuery链式调用原理实际上是通过在每一个方法的末尾都<code>return this</code>来实现的。</p><h2 id="分别介绍一下原型、原型链、作用域和作用域链的含义和使用场景" tabindex="-1">分别介绍一下原型、原型链、作用域和作用域链的含义和使用场景 <a class="header-anchor" href="#分别介绍一下原型、原型链、作用域和作用域链的含义和使用场景" aria-hidden="true">#</a></h2><h3 id="含义" tabindex="-1">含义： <a class="header-anchor" href="#含义" aria-hidden="true">#</a></h3><h4 id="原型" tabindex="-1">原型： <a class="header-anchor" href="#原型" aria-hidden="true">#</a></h4><p>​ 原型分为隐式原型和显式原型，隐式原型是<code>__proto__</code>，显式原型是：<code>prototype</code>。两者分别指向同一个引用：<strong>原型对象</strong>。原型对象能够存储属性和方法，原型对象通过不同的对象类型中拥有不同的属性和方法，同样也可以为原型添加自定义属性和方法。这些原型上的属性和方法，new出来的实例都可以访问的到。</p><h4 id="原型链" tabindex="-1">原型链： <a class="header-anchor" href="#原型链" aria-hidden="true">#</a></h4><p>​ 原型链是原型继承的表现，我们通过一个构造函数去new一个实例时，在我们想要访问某一个属性或方法时，首先按照自身实例身上查找，如果没有查找到则在构造函数的原型身上查找，如果还是没有找到，则在该构造函数的原型的原型身上查找，直到原型为null时，才会停止。这种多个原型之间形成的关系就叫做原型链。</p><h4 id="作用域" tabindex="-1">作用域： <a class="header-anchor" href="#作用域" aria-hidden="true">#</a></h4><ol><li><p>全局作用域：</p><p>​ 在JS里，全局作用域意为程序的任何地方都能够访问其变量的作用域，不在任何函数内定义的变量都被称为全局变量。全局作用域在页面关闭时才会销毁。</p></li><li><p>函数作用域：</p><p>​ 函数作用域指的是在函数内作用域，也可以理解为局部作用域。函数作用域内定义的变量只有当前函数内或“子函数”内可以访问，这能够避免不污染全局变量，能够常常看到立即执行函数的存在。</p></li><li><p>块作用域：</p><p>​ 块作用域是ES6新增的作用域，在此前没有块作用域的特性。块作用域是指在一个代码块中的作用域：<code>{}</code>，在该代码块中通过let或const定义的变量拥有块作用域特性，而使用var则没有该特性。</p></li></ol><h4 id="作用域链" tabindex="-1">作用域链： <a class="header-anchor" href="#作用域链" aria-hidden="true">#</a></h4><p>​ 每一个函数执行期间都会产生一个作用域链，这个作用域链主要组成部分由父级函数的<code>[[scope]]</code>它的作用域链和当前函数执行时产生的执行上下文的变量对象（AO）所组成的，变量对象AO会被塞到作用域链中的顶端，这样在当前函数内访问一个变量时，会根据作用域链查找变量，从顶至下依次查找，直到找不到时则会报错。一般最低下的作用域是GO，即全局作用域。</p><h3 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-hidden="true">#</a></h3><h4 id="原型和原型链的使用场景" tabindex="-1">原型和原型链的使用场景： <a class="header-anchor" href="#原型和原型链的使用场景" aria-hidden="true">#</a></h4><p>​ 原型的使用场景一般在于定义构造函数期间，为了能够让每个构造出的实例都能够拥有一些共同的属性或方法所以会在该构造函数原型上为添加一些自定义的属性或方法。</p><p>​ 原型链的使用场景一般在于使用ES5去实现继承时所应用到。在ES5中还没有class时，如果要实现继承的特性，就需要将指定的目标继承对象的原型赋值给当前构造函数的原型的原型。将原本为Object.prototype的原型替换为指定的那个构造函数的原型，这时就实现了继承的特性。这主要的工作原理就是基于原型链的实现。</p><h4 id="作用域和作用域链的使用场景" tabindex="-1">作用域和作用域链的使用场景： <a class="header-anchor" href="#作用域和作用域链的使用场景" aria-hidden="true">#</a></h4><p>​ 灵活使用作用域可以避免污染全局变量，比如for循环中使用let去定义的变量就拥有块作用域，这比使用var定义的变量好很多，因为如果for循环是全局环境下的，那么就意味着var定义的变量因为没有块作用域特性从而导致在全局定义，从而污染全局变量。使用let定义拥有块作用域特性便可避免这种情况的发生。</p><p>​ 同时还有一些其他的概念涉及到作用域，比如<strong>立即构造函数</strong>、<strong>闭包</strong>等都是基于作用域的。</p>`,69),i=[r];function o(t,p,c,d,h,y){return l(),a("div",null,i)}const F=e(n,[["render",o]]);export{u as __pageData,F as default};
