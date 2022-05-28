import{_ as e,r as p,o as t,c as o,a as n,b as r,F as c,d as s,e as l}from"./app.ab7b14ba.js";const u={},i={id:"\u1110\u1161\u1100\u1166\u11BA\u1102\u1165\u11B7\u1107\u1165",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#\u1110\u1161\u1100\u1166\u11BA\u1102\u1165\u11B7\u1107\u1165","aria-hidden":"true"},"#",-1),b=s(),d={href:"https://programmers.co.kr/learn/courses/30/lessons/43165",target:"_blank",rel:"noopener noreferrer"},m=s("\uD0C0\uAC9F\uB118\uBC84"),_=l(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">solution</span><span class="token punctuation">(</span>numbers<span class="token punctuation">,</span> target<span class="token punctuation">)</span><span class="token punctuation">:</span>
  cnt <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token keyword">def</span> <span class="token function">dfs</span><span class="token punctuation">(</span>idx<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Args:
        idx: \uACC4\uC0B0 \uD69F\uC218
        result: \uACC4\uC0B0\uAC12
    Return:
        \uACC4\uC0B0 \uD69F\uC218\uAC00 numbers\uC758 \uAE38\uC774\uC640 \uC77C\uCE58\uD560 \uACBD\uC6B0 \uACC4\uC0B0\uACB0\uACFC\uAC12\uC774 target\uAC12\uACFC \uAC19\uC740 \uACBD\uC6B0 cnt\uC5D0 1\uC744 \uB354\uD558\uACE0 \uC544\uBB34\uAC83\uB3C4 return \uD558\uC9C0 \uC54A\uB294\uB2E4.
        numbers\uC758 \uBAA8\uB4E0 \uC22B\uC790\uB97C \uC544\uC9C1 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC744 \uACBD\uC6B0 \uC870\uAC74\uC744 \uB9CC\uC871\uC2DC\uD0AC\uB54C \uAE4C\uC9C0 \uC7AC\uADC0\uD568\uC218 \uBC18\uBCF5
    &quot;&quot;&quot;</span>
    <span class="token keyword">if</span> idx <span class="token operator">==</span> <span class="token builtin">len</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token punctuation">:</span>
      <span class="token keyword">if</span> result <span class="token operator">==</span> target<span class="token punctuation">:</span>
        <span class="token keyword">nonlocal</span> cnt
        cnt <span class="token operator">+=</span> <span class="token number">1</span>
      <span class="token keyword">return</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
      dfs<span class="token punctuation">(</span>idx<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> result <span class="token operator">+</span> numbers<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">)</span>
      dfs<span class="token punctuation">(</span>idx<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> result <span class="token operator">-</span> numbers<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">)</span>
  dfs<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> cnt

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,1);function f(h,g){const a=p("ExternalLinkIcon");return t(),o(c,null,[n("h1",i,[k,b,n("a",d,[m,r(a)])]),_],64)}var y=e(u,[["render",f],["__file","pg_43165.html.vue"]]);export{y as default};
