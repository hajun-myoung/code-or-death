import{_ as p,r as e,o as t,c as o,a as n,b as c,F as l,d as s,e as r}from"./app.ab7b14ba.js";const u={},i={id:"\u1109\u1173\u1110\u1162\u11A8-\u1109\u116E\u110B\u1167\u11AF",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#\u1109\u1173\u1110\u1162\u11A8-\u1109\u116E\u110B\u1167\u11AF","aria-hidden":"true"},"#",-1),b=s(),m={href:"https://www.acmicpc.net/problem/1874",target:"_blank",rel:"noopener noreferrer"},d=s("\uC2A4\uD0DD \uC218\uC5F4"),_=r(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> sys
<span class="token keyword">def</span> <span class="token function">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">return</span> sys<span class="token punctuation">.</span>stdin<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># \uCCAB \uBC88\uC9F8 \uC785\uB825: n</span>
n <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
answer <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
flag <span class="token operator">=</span> <span class="token number">0</span>
cur <span class="token operator">=</span> <span class="token number">1</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
  num <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">while</span> cur <span class="token operator">&lt;=</span> num<span class="token punctuation">:</span>
    <span class="token comment"># \uC6D0\uD558\uB294 \uC218\uB97C pop\uD558\uAE30 \uC704\uD574 push</span>
    stack<span class="token punctuation">.</span>append<span class="token punctuation">(</span>cur<span class="token punctuation">)</span>
    answer<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&#39;+&#39;</span><span class="token punctuation">)</span>
    cur <span class="token operator">+=</span> <span class="token number">1</span>

  <span class="token keyword">if</span> stack<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> num<span class="token punctuation">:</span>
    stack<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
    answer<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;NO&#39;</span><span class="token punctuation">)</span>
    flag <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">break</span>

<span class="token keyword">if</span> flag <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
  <span class="token keyword">for</span> i <span class="token keyword">in</span> answer<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div>`,1);function w(h,f){const a=e("ExternalLinkIcon");return t(),o(l,null,[n("h1",i,[k,b,n("a",m,[d,c(a)])]),_],64)}var g=p(u,[["render",w],["__file","bj_1874.html.vue"]]);export{g as default};
