import{_ as e,r as a,o as s,c as r,a as i,b as l,w as p,F as t,e as b,d as c}from"./app.ab7b14ba.js";const u={},o=c("KyungBeen"),d=b(`<h1 id="_1463\u1107\u1165\u11AB-1\u1105\u1169-\u1106\u1161\u11AB\u1103\u1173\u11AF\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_1463\u1107\u1165\u11AB-1\u1105\u1169-\u1106\u1161\u11AB\u1103\u1173\u11AF\u1100\u1175" aria-hidden="true">#</a> 1463\uBC88 1\uB85C \uB9CC\uB4E4\uAE30</h1><h2 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> Input</h2><p>\uCCAB\uC9F8 \uC904\uC5D0 1\uBCF4\uB2E4 \uD06C\uAC70\uB098 \uAC19\uACE0, 106\uBCF4\uB2E4 \uC791\uAC70\uB098 \uAC19\uC740 \uC815\uC218 N\uC774 \uC8FC\uC5B4\uC9C4\uB2E4. <br><br></p><h2 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h2><p>\uCCAB\uC9F8 \uC904\uC5D0 \uC5F0\uC0B0\uC744 \uD558\uB294 \uD69F\uC218\uC758 \uCD5C\uC19F\uAC12\uC744 \uCD9C\uB825\uD55C\uB2E4. <br><br></p><h2 id="explanation" tabindex="-1"><a class="header-anchor" href="#explanation" aria-hidden="true">#</a> Explanation</h2><ul><li><p><em>Solution1</em> : \uCD5C\uB313\uAC12\uAE4C\uC9C0\uC758 list\uB97C \uB9CC\uB4E4\uACE0 3\uACFC 2\uC758 \uCD5C\uC18C\uACF5\uBC30\uC218\uC778 6\uC744 \uC6B0\uC120\uC73C\uB85C \uC5F0\uC0B0\uACB0\uACFC\uC758 \uCD5C\uC19F\uAC12\uC744 \uD574\uB2F9 \uC218\uC758 index\uB85C \uC800\uC7A5.</p></li><li><p><em>Solution2</em> : 1 \uC774\uC0C1 \uC218\uC5D0 \uB300\uD55C \uC5F0\uC0B0 \uD69F\uC218\uB97C dictionary\uC758 value\uC5D0 \uC800\uC7A5.<br>dict\uC5D0 \uC5F0\uC0B0 \uD69F\uC218\uAC00 \uC874\uC7AC\uD558\uBA74 return, \uC5C6\uB294 \uACBD\uC6B0 2\uC640 3\uC744 \uB098\uB208 \uBAAB\uC744 \uD568\uC218\uB85C \uB118\uACA8\uC8FC\uBA70 \uC7AC\uADC0 \uD638\uCD9C \uC9C4\uD589.<br>\uC785\uB825 \uBC1B\uC740 \uC218\uAE4C\uC9C0 \uC7AC\uADC0 \uD638\uCD9C\uC744 \uD558\uBA70 \uC5F0\uC0B0\uD558\uB294 \uBC29\uC2DD\uC774\uBBC0\uB85C \uC2E4\uD589\uC2DC\uAC04\uC774 1\uBC88 Solution\uBCF4\uB2E4 \uC9E7\uB2E4. \uC785\uB825\uC758 \uCD5C\uB313\uAC12\uB3C4 \uC5C6\uC74C.</p></li><li><p>\uBC18\uBCF5\uBB38\uC774 \uC544\uB2CC \uC7AC\uADC0\uD568\uC218\uB97C \uC774\uC6A9\uD574 \uB354 \uD6A8\uC728\uC801\uC778 \uB85C\uC9C1\uC744 \uAD6C\uD604\uD560 \uC218 \uC788\uC5C8\uB2E4. \uC7AC\uADC0\uC5D0 \uB300\uD55C \uAC1C\uB150\uC774 \uBD80\uC871\uD588\uC5C8\uB294\uB370 \uB354 \uACF5\uBD80\uD560 \uC218 \uC788\uC5C8\uB358 \uC88B\uC740 \uAE30\uD68C\uC600\uB2E4. <br><br></p></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>N = int(input())

# Solution_1(38652KB, 580ms)
max = 10**6 + 1
ex = [0]*(max)

for i in range(2, max):
    if i % 6 == 0:
        ex[i] = min(ex[i//3]+1, ex[i//2]+1, ex[i-1]+1)
    elif i % 3 == 0:
        ex[i] = min(ex[i//3]+1, ex[i-1]+1)
    elif i % 2 == 0:
        ex[i] = min(ex[i//2]+1, ex[i-1]+1)
    else:
        ex[i] = ex[i-1]+1

print(ex[N])

# Solution_2(30840KB, 72ms)
def rec(n):
    if n in ex:
        return ex[n]
    ex[n] = 1 + min(rec(n//2) + n % 2, rec(n//3) + n % 3)
    return ex[n]


print(rec(N))
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>`,9);function m(x,h){const n=a("RouterLink");return s(),r(t,null,[i("p",null,[l(n,{to:"/kyungbeen/"},{default:p(()=>[o]),_:1})]),d],64)}var f=e(u,[["render",m],["__file","boj_1463.html.vue"]]);export{f as default};
