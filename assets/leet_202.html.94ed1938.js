import{_ as p,r as e,o as t,c as o,a as n,b as l,F as c,d as s,e as r}from"./app.ab7b14ba.js";const u={},i={id:"happy-number",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#happy-number","aria-hidden":"true"},"#",-1),b=s(),d={href:"https://leetcode.com/problems/happy-number/",target:"_blank",rel:"noopener noreferrer"},m=s("Happy number"),y=r(`<p>\uD22C \uD3EC\uC778\uD130\uB85C \uC5B4\uB5BB\uAC8C \uD480 \uC218 \uC788\uB294\uC9C0 \uBAA8\uB974\uACA0\uC74C;;</p><h2 id="sol-1" tabindex="-1"><a class="header-anchor" href="#sol-1" aria-hidden="true">#</a> sol.1</h2><p>\uD55C \uC790\uB9AC \uC22B\uC790\uC778\uB370 \uC9DD\uC218\uC778 \uACBD\uC6B0\uB294 \uC808\uB300 1\uC774 \uB420 \uC218 \uC5C6\uB2E4.<br> \uB530\uB77C\uC11C \uC7AC\uADC0\uB85C \uB3CC\uBA74\uC11C n\uC774 \uD55C\uC790\uB9AC \uC22B\uC790\uC778\uB370 1\uC774\uBA74 True\uB97C \uBC18\uD658\uD558\uACE0 \uC9DD\uC218\uB77C\uBA74 False\uB97C \uBC18\uD658\uD558\uB3C4\uB85D \uD558\uC600\uB2E4. <code>4 \u2192 16 \u2192 37 \u2192 58 \u2192 89 \u2192 145 \u2192 42 \u2192 20 \u2192 4</code></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> sys
sys<span class="token punctuation">.</span>setrecursionlimit<span class="token punctuation">(</span><span class="token number">10</span><span class="token operator">**</span><span class="token number">7</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">isHappy</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> n<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
        <span class="token comment"># \uD55C \uC790\uB9AC \uC22B\uC790\uB77C\uBA74 \uADF8 \uAC12\uC774 1\uC774\uBA74 True</span>
        <span class="token comment"># \uD55C \uC790\uB9AC \uC22B\uC790\uC778\uB370 \uC9DD\uC218\uC774\uBA74 False</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token boolean">True</span>
            <span class="token keyword">elif</span> n <span class="token operator">==</span> <span class="token number">2</span> <span class="token keyword">or</span> n <span class="token operator">==</span> <span class="token number">4</span> <span class="token keyword">or</span> n <span class="token operator">==</span> <span class="token number">6</span> <span class="token keyword">or</span> n <span class="token operator">==</span> <span class="token number">8</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token boolean">False</span>

        temp <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">for</span> s <span class="token keyword">in</span> <span class="token builtin">str</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
            temp <span class="token operator">+=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token operator">**</span><span class="token number">2</span>
        <span class="token keyword">return</span> Solution<span class="token punctuation">.</span>isHappy<span class="token punctuation">(</span>self<span class="token punctuation">,</span>temp<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="sol-2" tabindex="-1"><a class="header-anchor" href="#sol-2" aria-hidden="true">#</a> sol.2</h2><p>\uC7AC\uADC0 \uC5C6\uC774 \uD480 \uACBD\uC6B0<br> \uC81C\uACF1\uB4E4\uC758 \uD569\uC744 temp set\uC5D0 \uC800\uC7A5\uD558\uACE0 \uBB34\uD55C\uB8E8\uD504\uB77C\uBA74 set\uC548\uC758 \uAC12\uC744 \uB2E4\uC2DC \uB9CC\uB098\uAC8C \uB41C\uB2E4 =&gt; False \uBC18\uD658</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">isHappy</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> n<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
        temp <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">while</span> n <span class="token keyword">not</span> <span class="token keyword">in</span> temp<span class="token punctuation">:</span>
            temp<span class="token punctuation">.</span>add<span class="token punctuation">(</span>n<span class="token punctuation">)</span>
            n <span class="token operator">=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token operator">**</span><span class="token number">2</span> <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">str</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

            <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token boolean">True</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,7);function h(_,f){const a=e("ExternalLinkIcon");return t(),o(c,null,[n("h1",i,[k,b,n("a",d,[m,l(a)])]),y],64)}var g=p(u,[["render",h],["__file","leet_202.html.vue"]]);export{g as default};