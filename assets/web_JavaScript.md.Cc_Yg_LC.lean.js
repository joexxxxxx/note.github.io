import{_ as i,c as a,a2 as n,o as l}from"./chunks/framework.CmaogqJs.js";const h="/blog/images/img/4820992-82913323252fde95.png",p="/blog/images/img/scope-a-defined.png",t="/blog/images/img/scope-a-doing.png",e="/blog/images/img/scope-b-defined.png",k="/blog/images/img/scope-b-doing.png",A=JSON.parse('{"title":"JavaScript","description":"","frontmatter":{},"headers":[],"relativePath":"web/JavaScript.md","filePath":"web/JavaScript.md"}'),r={name:"web/JavaScript.md"};function d(o,s,E,g,c,y){return l(),a("div",null,s[0]||(s[0]=[n('<h1 id="javascript" tabindex="-1">JavaScript <a class="header-anchor" href="#javascript" aria-label="Permalink to &quot;JavaScript&quot;">​</a></h1><ul><li><a href="#javascript">JavaScript</a><ul><li><a href="#堆heap与栈stack">堆(heap)与栈(stack)</a><ul><li><a href="#1-heap">1. heap</a></li><li><a href="#2-stack">2. stack</a></li></ul></li><li><a href="#eventloop">EventLoop</a><ul><li><a href="#1-基础知识">1. 基础知识</a></li><li><a href="#2js-中的异步操作">2.js 中的异步操作</a></li><li><a href="#3同步任务-or-异步任务">3.同步任务 or 异步任务</a></li><li><a href="#4宏任务-or-微任务">4.宏任务 or 微任务</a></li><li><a href="#5-event-loop-事件循环">5. Event Loop 事件循环</a></li><li><a href="#相关文章">相关文章</a></li></ul></li><li><a href="#预编译">预编译</a></li><li><a href="#作用域链">作用域链</a></li><li><a href="#闭包">闭包</a></li><li><a href="#可选链操作符">可选链操作符（?.）</a></li><li><a href="#空值合并运算符">空值合并运算符（??）</a></li><li><a href="#字符串解析为dom节点">字符串解析为DOM节点</a></li></ul></li></ul><h2 id="堆-heap-与栈-stack" tabindex="-1">堆(heap)与栈(stack) <a class="header-anchor" href="#堆-heap-与栈-stack" aria-label="Permalink to &quot;堆(heap)与栈(stack)&quot;">​</a></h2><h3 id="_1-heap" tabindex="-1">1. heap <a class="header-anchor" href="#_1-heap" aria-label="Permalink to &quot;1. heap&quot;">​</a></h3><p>heap 是没有结构的，数据可以任意存放。heap 用于复杂数据类型（引用类型）分配空间，例如数组对象、object 对象。</p><h3 id="_2-stack" tabindex="-1">2. stack <a class="header-anchor" href="#_2-stack" aria-label="Permalink to &quot;2. stack&quot;">​</a></h3><p>stack 是有结构的，每个区块按照一定次序存放（后进先出），stack 中主要存放一些基本类型的变量和对象的引用，存在栈中的数据大小与生存期必须是确定的。可以明确知道每个区块的大小，因此，stack 的寻址速度要快于 heap。</p><h2 id="eventloop" tabindex="-1">EventLoop <a class="header-anchor" href="#eventloop" aria-label="Permalink to &quot;EventLoop&quot;">​</a></h2><h3 id="_1-基础知识" tabindex="-1">1. 基础知识 <a class="header-anchor" href="#_1-基础知识" aria-label="Permalink to &quot;1. 基础知识&quot;">​</a></h3><ul><li>js 作为浏览器脚本语言，它的主要用途是与用户互动，以及操作 DOM，因此 js 是单线程，也避免了同时操作同一个 DOM 的矛盾问题；</li><li>为了利用多核 CPU 的计算能力，H5 的 Web Worker 实现的“多线程”实际上指的是“多子线程”，完全受控于主线程，且不允许操作 DOM；</li><li>js 引擎存在 monitoring process 进程，会持续不断的检查主线程执行栈是否为空，一旦为空，就会去 Event Queue 那里检查是否有等待被调用的函数。这个过程是循环不断的，所以整个的这种运行机制又称为 Event Loop（事件循环）</li><li>所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）；</li><li>如果在微任务执行期间微任务队列加入了新的微任务，会将新的微任务加入队列尾部，之后也会被执行；</li></ul><h3 id="_2-js-中的异步操作" tabindex="-1">2.js 中的异步操作 <a class="header-anchor" href="#_2-js-中的异步操作" aria-label="Permalink to &quot;2.js 中的异步操作&quot;">​</a></h3><ul><li>setTimeOut</li><li>setInterval</li><li>ajax</li><li>promise</li><li>I/O</li></ul><h3 id="_3-同步任务-or-异步任务" tabindex="-1">3.同步任务 or 异步任务 <a class="header-anchor" href="#_3-同步任务-or-异步任务" aria-label="Permalink to &quot;3.同步任务 or 异步任务&quot;">​</a></h3><ul><li>同步任务(synchronous)：在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；</li><li>异步任务(asynchronous)：不进入主线程、而进入&quot;任务队列&quot;（task queue）的任务，只有&quot;任务队列&quot;通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行</li></ul><h3 id="_4-宏任务-or-微任务" tabindex="-1">4.宏任务 or 微任务 <a class="header-anchor" href="#_4-宏任务-or-微任务" aria-label="Permalink to &quot;4.宏任务 or 微任务&quot;">​</a></h3><p>这里需要注意的是 new Promise 是会进入到主线程中立刻执行，而 promise.then 则属于微任务</p><ul><li>宏任务(macro-task)：整体代码 script、setTimeOut、setInterval</li><li>微任务(mincro-task)：promise.then、promise.nextTick(node)</li></ul><h3 id="_5-event-loop-事件循环" tabindex="-1">5. Event Loop 事件循环 <a class="header-anchor" href="#_5-event-loop-事件循环" aria-label="Permalink to &quot;5. Event Loop 事件循环&quot;">​</a></h3><p><img src="'+h+`" alt="avatar"></p><ul><li>作者：StarryLake</li><li>链接：<a href="https://www.jianshu.com/p/e06e86ef2595" target="_blank" rel="noreferrer">js 运行机制详解（Event Loop）</a></li><li>来源：简书</li></ul><h3 id="相关文章" tabindex="-1">相关文章 <a class="header-anchor" href="#相关文章" aria-label="Permalink to &quot;相关文章&quot;">​</a></h3><ul><li><p>ssssyoki《这一次，彻底弄懂 JavaScript 执行机制》 <a href="https://juejin.im/post/59e85eebf265da430d571f89#heading-9" target="_blank" rel="noreferrer">https://juejin.im/post/59e85eebf265da430d571f89#heading-9</a></p></li><li><p>js 运行机制详解（Event Loop） <a href="https://www.jianshu.com/p/e06e86ef2595" target="_blank" rel="noreferrer">https://www.jianshu.com/p/e06e86ef2595</a></p></li><li><p>阮一峰《JavaScript 运行机制详解：再谈 Event Loop》 <a href="http://www.ruanyifeng.com/blog/2014/10/event-loop.html" target="_blank" rel="noreferrer">http://www.ruanyifeng.com/blog/2014/10/event-loop.html</a></p></li></ul><h2 id="预编译" tabindex="-1">预编译 <a class="header-anchor" href="#预编译" aria-label="Permalink to &quot;预编译&quot;">​</a></h2><ol><li>创建AO(Activation Object || 执行期上下文)对象</li><li>找形参和变量声明，将变量声明和形参名作为AO的属性名，值为undefined</li><li>将实参值和形参统一</li><li>在函数体里面找函数声明，赋值予函数体</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 123</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> b</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(b)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">预编过程</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">1.创建AO对象</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">AO{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">2.找形参和变量声明，将变量声明和形参名作为AO的属性名，值为undefined</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">AO{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  a: undefined,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  b: undefined</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">3.将实参值和形参统一</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">AO{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  a: 1,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  b:function b() {}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">4. 在函数体里面找函数声明，赋值予函数体</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">AO{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  a: function a {},</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  b:function b() {},</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  d: function d {}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">5. 代码执行</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span></code></pre></div><h2 id="作用域链" tabindex="-1">作用域链 <a class="header-anchor" href="#作用域链" aria-label="Permalink to &quot;作用域链&quot;">​</a></h2><ol><li>[[scope]]: 每个JavaScript函数都是一个对象，对象中有些属性我们是可以访问的，但有些不可以，这些属性仅供JavaScript引擎存取，[[scope]]就是其中一个。[[scope]]指的就是我们所说的作用域，其中储存了运行期上下文的集合。</li><li>作用域链： [[scope]]中所存储的执行期上下文的集合，这个集合呈链式链接，我们把这种链式链接叫做作用域链。</li><li>变量查找：从作用域链的顶端依次往下查找。</li></ol><p>示例</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 234</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> glob </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">a函数 定义 a.[[scope]] --&gt; 0: GO {}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">a函数 运行 a.[[scope]] --&gt; 0: AO {} (a的A0)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                          1: GO {}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">b函数 定义 b.[[scope]] --&gt; 0: AO {} (a的A0)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                          1: GO {}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">b函数 运行 b.[[scope]] --&gt; 0: AO {} (b的A0)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                          1: AO {} (a的A0)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                          2: GO {}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span></code></pre></div><p>图解 a 函数被定义时的作用域链</p><p><img src="`+p+'" alt="avatar"></p><p>a 函数执行时的作用域链</p><p><img src="'+t+'" alt="avatar"></p><p>b 函数被定义时的作用域链</p><p><img src="'+e+'" alt="avatar"></p><p>b 函数执行时的作用域链</p><p><img src="'+k+`" alt="avatar"></p><h2 id="闭包" tabindex="-1">闭包 <a class="header-anchor" href="#闭包" aria-label="Permalink to &quot;闭包&quot;">​</a></h2><ol><li>当内部函数被保存到外部时，将会产生闭包。</li><li>缺点：闭包会导致原有作用域链不释放，造成内存泄漏。</li><li>优点： 实现私有变量，可以做缓存，可以模块化开发，避免全局变量的污染</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> temp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(temp)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dome </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dome</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">由于a函数执行把b函数保存到了函数的外部，b函数的作用域链中还保存这a函数的执行时生成的作用域链，导致a函数执行完内存没有得到释放。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span></code></pre></div><h2 id="可选链操作符" tabindex="-1">可选链操作符（?.） <a class="header-anchor" href="#可选链操作符" aria-label="Permalink to &quot;可选链操作符（?.）&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining" target="_blank" rel="noreferrer">MDN介绍：可选链操作符</a></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> animal</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cat: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;kitty&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        color: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;black&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    dog: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;doggie&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 当你需要访问一个嵌套多层对象的某个深层级的属性，但是又不能保证哪个属性是一定存在的，那么我们可能需要进行如下判断：</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> catName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> animal </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> animal.cat </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> animal.cat.name</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用可选链操作符（?.），我们可以这样：</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> catName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> animal?.cat?.name;</span></span></code></pre></div><h2 id="空值合并运算符" tabindex="-1">空值合并运算符（??） <a class="header-anchor" href="#空值合并运算符" aria-label="Permalink to &quot;空值合并运算符（??）&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing" target="_blank" rel="noreferrer">MDN介绍：空值合并运算符</a></p><p>空值合并操作符（??）是一个逻辑操作符，当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ??</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;default string&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// default string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ??</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;default string&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ??</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;default string&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ??</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;default string&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ??</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;default string&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ??</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;default string&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;哈哈&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ??</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;default string&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;哈哈&#39;</span></span></code></pre></div><h2 id="字符串解析为dom节点" tabindex="-1">字符串解析为DOM节点 <a class="header-anchor" href="#字符串解析为dom节点" aria-label="Permalink to &quot;字符串解析为DOM节点&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> parser</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DOMParser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dockHtml</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> parser.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parseFromString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(html, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;text/html&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,49)]))}const D=i(r,[["render",d]]);export{A as __pageData,D as default};
