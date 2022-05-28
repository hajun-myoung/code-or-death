import{_ as t,r as p,o as e,c as o,a as n,b as c,F as l,d as s,e as u}from"./app.ab7b14ba.js";const i={},r={id:"two-sum",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#two-sum","aria-hidden":"true"},"#",-1),d=s(),b={href:"https://leetcode.com/problems/two-sum/",target:"_blank",rel:"noopener noreferrer"},m=s("Two Sum"),h=u(`<h2 id="\u1107\u1173\u1105\u116E\u1110\u1173-\u1111\u1169\u1109\u1173-\u1111\u116E\u11AF\u110B\u1175" tabindex="-1"><a class="header-anchor" href="#\u1107\u1173\u1105\u116E\u1110\u1173-\u1111\u1169\u1109\u1173-\u1111\u116E\u11AF\u110B\u1175" aria-hidden="true">#</a> \uBE0C\uB8E8\uD2B8 \uD3EC\uC2A4 \uD480\uC774</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">twoSum</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">:</span>
                    <span class="token keyword">return</span> <span class="token punctuation">[</span>i<span class="token punctuation">,</span>j<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><br><h2 id="\u1112\u1161\u11AB\u1107\u1165\u11AB\u110B\u1166-\u110C\u1165\u11BC\u1103\u1161\u11B8-\u110E\u1161\u11BD\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1112\u1161\u11AB\u1107\u1165\u11AB\u110B\u1166-\u110C\u1165\u11BC\u1103\u1161\u11B8-\u110E\u1161\u11BD\u1100\u1175" aria-hidden="true">#</a> \uD55C\uBC88\uC5D0 \uC815\uB2F5 \uCC3E\uAE30</h2><p><code>A + B = target</code>\uAC12\uC774 \uB418\uB294 A, B\uB97C \uCC3E\uC544\uC57C \uD55C\uB2E4.<br> \uADF8\uB807\uB2E4\uBA74 target\uC740 \uC8FC\uC5B4\uC9C4 \uAC12\uC774\uB2C8\uAE4C <code>target - A = B</code> \uB85C \uBC14\uB85C \uCC3E\uC744 \uC218 \uC788\uC744 \uAC83\uC774\uB2E4. <b></b> B \uAC12\uC73C\uB85C \uBC14\uB85C idx\uB97C \uCC3E\uC544\uB0B4\uB824\uBA74 \uB515\uC154\uB108\uB9AC\uC5D0 {key:\uAC12 value:\uC778\uB371\uC2A4} \uD615\uD0DC\uB85C \uC800\uC7A5\uD558\uBA74 \uB41C\uB2E4.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">twoSum</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token builtin">dict</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token comment"># Key: nums element, Value: nums index</span>
        <span class="token keyword">for</span> i<span class="token punctuation">,</span> num <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token builtin">dict</span><span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">=</span> i

        <span class="token keyword">for</span> i<span class="token punctuation">,</span> num <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment"># \uAC19\uC740 \uC6D0\uC18C\uB294 \uC548\uB418\uBBC0\uB85C and\uB85C \uC870\uAC74 \uCD94\uAC00</span>
            <span class="token keyword">if</span> target <span class="token operator">-</span> num <span class="token keyword">in</span> <span class="token builtin">dict</span> <span class="token keyword">and</span> i <span class="token operator">!=</span> <span class="token builtin">dict</span><span class="token punctuation">[</span>target <span class="token operator">-</span> num<span class="token punctuation">]</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token punctuation">[</span>i<span class="token punctuation">,</span> <span class="token builtin">dict</span><span class="token punctuation">[</span>target<span class="token operator">-</span>num<span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,6);function _(y,f){const a=p("ExternalLinkIcon");return e(),o(l,null,[n("h1",r,[k,d,n("a",b,[m,c(a)])]),h],64)}var g=t(i,[["render",_],["__file","leet_1.html.vue"]]);export{g as default};
