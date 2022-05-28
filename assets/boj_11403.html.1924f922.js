import{_ as a,r as e,o as s,c as r,a as i,b as l,w as t,F as p,e as c,d as u}from"./app.ab7b14ba.js";const b={},d=u("KyungBeen"),o=c(`<h1 id="_11403\u1107\u1165\u11AB-\u1100\u1167\u11BC\u1105\u1169-\u110E\u1161\u11BD\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_11403\u1107\u1165\u11AB-\u1100\u1167\u11BC\u1105\u1169-\u110E\u1161\u11BD\u1100\u1175" aria-hidden="true">#</a> 11403\uBC88 \uACBD\uB85C \uCC3E\uAE30</h1><h2 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> Input</h2><p>\uAC00\uC911\uCE58 \uC5C6\uB294 \uBC29\uD5A5 \uADF8\uB798\uD504 G\uAC00 \uC8FC\uC5B4\uC84C\uC744 \uB54C, \uBAA8\uB4E0 \uC815\uC810 (i, j)\uC5D0 \uB300\uD574\uC11C, i\uC5D0\uC11C j\uB85C \uAC00\uB294 \uACBD\uB85C\uAC00 \uC788\uB294\uC9C0 \uC5C6\uB294\uC9C0 \uAD6C\uD558\uB294 \uD504\uB85C\uADF8\uB7A8\uC744 \uC791\uC131\uD558\uC2DC\uC624. <br><br></p><h2 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h2><p>\uCCAB\uC9F8 \uC904\uC5D0 \uC815\uC810\uC758 \uAC1C\uC218 N (1 \u2264 N \u2264 100)\uC774 \uC8FC\uC5B4\uC9C4\uB2E4. \uB458\uC9F8 \uC904\uBD80\uD130 N\uAC1C \uC904\uC5D0\uB294 \uADF8\uB798\uD504\uC758 \uC778\uC811 \uD589\uB82C\uC774 \uC8FC\uC5B4\uC9C4\uB2E4. i\uBC88\uC9F8 \uC904\uC758 j\uBC88\uC9F8 \uC22B\uC790\uAC00 1\uC778 \uACBD\uC6B0\uC5D0\uB294 i\uC5D0\uC11C j\uB85C \uAC00\uB294 \uAC04\uC120\uC774 \uC874\uC7AC\uD55C\uB2E4\uB294 \uB73B\uC774\uACE0, 0\uC778 \uACBD\uC6B0\uB294 \uC5C6\uB2E4\uB294 \uB73B\uC774\uB2E4. i\uBC88\uC9F8 \uC904\uC758 i\uBC88\uC9F8 \uC22B\uC790\uB294 \uD56D\uC0C1 0\uC774\uB2E4. <br><br></p><h2 id="explanation" tabindex="-1"><a class="header-anchor" href="#explanation" aria-hidden="true">#</a> Explanation</h2><ul><li><p>\uD55C\uD589\uC529 \uAC01 \uC5F4\uB85C \uAC08 \uC218 \uC788\uB294\uC9C0 \uD655\uC778.</p></li><li><p>\uC5B4\uB5A4 \uD55C \uD589\uC758 \uC6D0\uC18C\uAC00 &#39;1&#39;\uC774\uBA74\uC11C \uD574\uB2F9 \uC6D0\uC18C\uC758 index\uD589\uC5D0 \uBC29\uBB38\uD558\uC9C0 \uC54A\uC558\uB2E4\uBA74(==&#39;0&#39;) &#39;1&#39;\uB85C \uC800\uC7A5.</p></li><li><p>\uD574\uB2F9\uC6D0\uC18C\uC758 index\uB85C \uCD5C\uB300 \uAE4A\uC774\uAE4C\uC9C0 \uC7AC\uADC0 \uD638\uCD9C.</p></li><li><p>recursion limit\uC758 default\uAC00 10<strong>3\uC774\uBBC0\uB85C 10</strong>9\uB85C \uC124\uC815 \uD6C4 \uD0D0\uC0C9\uC744 \uC9C4\uD589\uD588\uB2E4. <br><br></p></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import sys
sys.setrecursionlimit(10**9)
input = sys.stdin.readline


def f(x):
    for j in range(N):
        if g[x][j] == &#39;1&#39; and a[j] == &#39;0&#39;:
            a[j] = &#39;1&#39;
            f(j)


N = int(input())
g = [input().split() for _ in range(N)]

for i in range(N):
    a = [&#39;0&#39; for _ in range(N)]
    f(i)
    print(&#39; &#39;.join(a))
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,9);function h(m,_){const n=e("RouterLink");return s(),r(p,null,[i("p",null,[l(n,{to:"/kyungbeen/"},{default:t(()=>[d]),_:1})]),o],64)}var x=a(b,[["render",h],["__file","boj_11403.html.vue"]]);export{x as default};
