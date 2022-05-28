import{_ as e,r as p,o as t,c as r,a as n,b as i,F as l,d as s,e as o}from"./app.ab7b14ba.js";const c={},u=n("h1",{id:"baekjoon",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#baekjoon","aria-hidden":"true"},"#"),s(" Baekjoon")],-1),b=n("p",null,"Baekjoon \uBB38\uC81C \uD480\uC774",-1),m=n("h2",{id:"_2022-04-1\u110C\u116E\u110E\u1161",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2022-04-1\u110C\u116E\u110E\u1161","aria-hidden":"true"},"#"),s(" 2022.04 1\uC8FC\uCC28")],-1),d={href:"https://www.acmicpc.net/problem/11508",target:"_blank",rel:"noopener noreferrer"},k=s("2 + 1 \uC138\uC77C"),_=o(`<p>\uD3F4\uB9AC\uC624\uBBF8\uB178 https://www.acmicpc.net/problem/1343</p><p>\uB098\uC774\uC21C \uC815\uB82C https://www.acmicpc.net/problem/10814</p><p>\uAD6D\uC601\uC218 https://www.acmicpc.net/problem/10825</p><p>\u2757\uFE0F \uC0C1\uC5B4 \uCD08\uB4F1\uD559\uAD50 https://www.acmicpc.net/problem/21608</p><p>\u2757\uFE0F \uB2EC\uB825 https://www.acmicpc.net/problem/20207</p><p>\u2757\uFE0F \uBE14\uB85C\uADF82 https://www.acmicpc.net/problem/20365</p><h3 id="_2-1-\u1109\u1166\u110B\u1175\u11AF-11508" tabindex="-1"><a class="header-anchor" href="#_2-1-\u1109\u1166\u110B\u1175\u11AF-11508" aria-hidden="true">#</a> 2+1 \uC138\uC77C(11508)</h3><p>KSG \uD3B8\uC758\uC810\uC5D0\uC11C\uB294 \uACFC\uC77C\uC6B0\uC720, \uB4DC\uB9C1\uD0B9\uC694\uAD6C\uB974\uD2B8 \uB4F1\uC758 \uC720\uC81C\uD488\uC744 &#39;2+1 \uC138\uC77C&#39;\uD558\uB294 \uD589\uC0AC\uB97C \uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. KSG \uD3B8\uC758\uC810\uC5D0\uC11C \uC720\uC81C\uD488 3\uAC1C\uB97C \uD55C \uBC88\uC5D0 \uC0B0\uB2E4\uBA74 \uADF8\uC911\uC5D0\uC11C \uAC00\uC7A5 \uC2FC \uAC83\uC740 \uBB34\uB8CC\uB85C \uC9C0\uBD88\uD558\uACE0 \uB098\uBA38\uC9C0 \uB450 \uAC1C\uC758 \uC81C\uD488 \uAC00\uACA9\uB9CC \uC9C0\uBD88\uD558\uBA74 \uB429\uB2C8\uB2E4. \uD55C \uBC88\uC5D0 3\uAC1C\uC758 \uC720\uC81C\uD488\uC744 \uC0AC\uC9C0 \uC54A\uB294\uB2E4\uBA74 \uD560\uC778 \uC5C6\uC774 \uC815\uAC00\uB97C \uC9C0\uBD88\uD574\uC57C \uD569\uB2C8\uB2E4.</p><p>\uC608\uB97C \uB4E4\uC5B4, 7\uAC1C\uC758 \uC720\uC81C\uD488\uC774 \uC788\uC5B4\uC11C \uAC01 \uC81C\uD488\uC758 \uAC00\uACA9\uC774 10, 9, 4, 2, 6, 4, 3\uC774\uACE0 \uC7AC\uD604\uC774\uAC00 (10, 3, 2), (4, 6, 4), (9)\uB85C \uCD1D 3\uBC88\uC5D0 \uAC78\uCCD0\uC11C \uBB3C\uAC74\uC744 \uC0B0\uB2E4\uBA74 \uCCAB \uBC88\uC9F8 \uAFB8\uB7EC\uBBF8\uC5D0\uC11C\uB294 13\uC6D0\uC744, \uB450 \uBC88\uC9F8 \uAFB8\uB7EC\uBBF8\uC5D0\uC11C\uB294 10\uC6D0\uC744, \uC138 \uBC88\uC9F8 \uAFB8\uB7EC\uBBF8\uC5D0\uC11C\uB294 9\uC6D0\uC744 \uC9C0\uBD88\uD574\uC57C \uD569\uB2C8\uB2E4.</p><p>\uC7AC\uD604\uC774\uB294 KSG \uD3B8\uC758\uC810\uC5D0\uC11C \uCE5C\uAD6C\uB4E4\uACFC \uAC19\uC774 \uBA39\uC744 \uCD1D N\uD329\uC758 \uC720\uC81C\uD488\uC744 \uAD6C\uC785\uD558\uB824\uACE0 \uD569\uB2C8\uB2E4. \uC7AC\uD604\uC774\uB97C \uB3C4\uC640 \uCD5C\uC18C\uBE44\uC6A9\uC73C\uB85C \uC720\uC81C\uD488\uC744 \uAD6C\uC785\uD560 \uC218 \uC788\uB3C4\uB85D \uB3C4\uC640\uC8FC\uC138\uC694!</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> sys
<span class="token builtin">input</span> <span class="token operator">=</span> sys<span class="token punctuation">.</span>stdin<span class="token punctuation">.</span>readline

n<span class="token operator">=</span><span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    arr<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
arr<span class="token punctuation">.</span>sort<span class="token punctuation">(</span>reverse<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

temp<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
price<span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> a <span class="token keyword">in</span> arr<span class="token punctuation">:</span>
    temp<span class="token punctuation">.</span>append<span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>
        price<span class="token operator">+=</span>a
<span class="token keyword">print</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="\u1107\u1173\u11AF\u1105\u1169\u1100\u1173" tabindex="-1"><a class="header-anchor" href="#\u1107\u1173\u11AF\u1105\u1169\u1100\u1173" aria-hidden="true">#</a> \uBE14\uB85C\uADF8</h3><div class="language-pyton ext-pyton line-numbers-mode"><pre class="language-pyton"><code>import sys
input = sys.stdin.readline

n, x = map(int, input().split(&#39; &#39;))
visitors=list(map(int, input().split(&#39; &#39;)))

if max(visitors) == 0:
    print(&quot;SAD&quot;)
else:
    max_visitor=sum(visitors[:x])
    count_visitor=1
    sum_visitor=max_visitor
    for i in range(n-x):
            sum_visitor+=visitors[x+i]
            sum_visitor-=visitors[i]
            if sum_visitor &gt; max_visitor:
                max_visitor=sum_visitor
                count_visitor=1
            elif sum_visitor == max_visitor:
                max_visitor=sum_visitor
                count_visitor+=1
    print(max_visitor)
    print(count_visitor)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="\u1103\u116E-\u110B\u116D\u11BC\u110B\u1162\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1103\u116E-\u110B\u116D\u11BC\u110B\u1162\u11A8" aria-hidden="true">#</a> \uB450 \uC6A9\uC561</h3><div class="language-pyton ext-pyton line-numbers-mode"><pre class="language-pyton"><code>import sys
input = sys.stdin.readline

n = int(input())
solutions=sorted(list(map(int, input().split(&#39; &#39;))))
forward = 0
back = n-1
temp = abs(solutions[forward] + solutions[back])
acid = solutions[forward]
alkalinity = solutions[back]
while forward &lt; back:
    result = solutions[forward] + solutions[back]
    abs_result = abs(result)
    if temp &gt; abs_result:
        temp = abs_result
        acid = solutions[forward]
        alkalinity = solutions[back]
    if result &gt; 0:
        back -= 1
    else:
        forward += 1
print(acid, alkalinity)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,15);function h(v,w){const a=p("ExternalLinkIcon");return t(),r(l,null,[u,b,m,n("p",null,[n("a",d,[k,i(a)])]),_],64)}var x=e(c,[["render",h],["__file","baekjoon.html.vue"]]);export{x as default};
