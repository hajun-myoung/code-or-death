import{_ as a,r as e,o as s,c as r,a as i,b as l,w as p,F as t,e as b,d as c}from"./app.ab7b14ba.js";const d={},u=c("KyungBeen"),o=b(`<h1 id="_2606\u1107\u1165\u11AB-\u1107\u1161\u110B\u1175\u1105\u1165\u1109\u1173" tabindex="-1"><a class="header-anchor" href="#_2606\u1107\u1165\u11AB-\u1107\u1161\u110B\u1175\u1105\u1165\u1109\u1173" aria-hidden="true">#</a> 2606\uBC88 \uBC14\uC774\uB7EC\uC2A4</h1><h2 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> Input</h2><p>\uCCAB\uC9F8 \uC904\uC5D0\uB294 \uCEF4\uD4E8\uD130\uC758 \uC218\uAC00 \uC8FC\uC5B4\uC9C4\uB2E4. \uCEF4\uD4E8\uD130\uC758 \uC218\uB294 100 \uC774\uD558\uC774\uACE0 \uAC01 \uCEF4\uD4E8\uD130\uC5D0\uB294 1\uBC88 \uBD80\uD130 \uCC28\uB840\uB300\uB85C \uBC88\uD638\uAC00 \uB9E4\uACA8\uC9C4\uB2E4. \uB458\uC9F8 \uC904\uC5D0\uB294 \uB124\uD2B8\uC6CC\uD06C \uC0C1\uC5D0\uC11C \uC9C1\uC811 \uC5F0\uACB0\uB418\uC5B4 \uC788\uB294 \uCEF4\uD4E8\uD130 \uC30D\uC758 \uC218\uAC00 \uC8FC\uC5B4\uC9C4\uB2E4. \uC774\uC5B4\uC11C \uADF8 \uC218\uB9CC\uD07C \uD55C \uC904\uC5D0 \uD55C \uC30D\uC529 \uB124\uD2B8\uC6CC\uD06C \uC0C1\uC5D0\uC11C \uC9C1\uC811 \uC5F0\uACB0\uB418\uC5B4 \uC788\uB294 \uCEF4\uD4E8\uD130\uC758 \uBC88\uD638 \uC30D\uC774 \uC8FC\uC5B4\uC9C4\uB2E4. <br><br></p><h2 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h2><p>1\uBC88 \uCEF4\uD4E8\uD130\uAC00 \uC6DC \uBC14\uC774\uB7EC\uC2A4\uC5D0 \uAC78\uB838\uC744 \uB54C, 1\uBC88 \uCEF4\uD4E8\uD130\uB97C \uD1B5\uD574 \uC6DC \uBC14\uC774\uB7EC\uC2A4\uC5D0 \uAC78\uB9AC\uAC8C \uB418\uB294 \uCEF4\uD4E8\uD130\uC758 \uC218\uB97C \uCCAB\uC9F8 \uC904\uC5D0 \uCD9C\uB825\uD55C\uB2E4. <br><br></p><h2 id="explanation" tabindex="-1"><a class="header-anchor" href="#explanation" aria-hidden="true">#</a> Explanation</h2><ul><li><p>\uCEF4\uD4E8\uD130 \uBCC4 list \uC0DD\uC131</p></li><li><p>1\uBC88 \uCEF4\uD4E8\uD130\uC640 \uC9C1\uAC04\uC811\uC801\uC73C\uB85C \uC5F0\uACB0\uB41C, \uD655\uC778\uC774 \uD544\uC694\uD55C \uCEF4\uD4E8\uD130\uB4E4, \uAC10\uC5FC\uC5EC\uBD80 \uD655\uC778\uB41C \uCEF4\uD4E8\uD130\uB4E4\uC744 \uAD6C\uBD84</p></li><li><p>stack\uC5D0 \uC788\uB294 \uCEF4\uD4E8\uD130\uB97C pop\uD558\uC5EC \uD655\uC778\uD558\uB294\uB370 \uC774\uBBF8 \uBC29\uBB38\uD55C \uCEF4\uD4E8\uD130\uC778 \uACBD\uC6B0 continue, \uC544\uB2C8\uB77C\uBA74 visited\uC5D0 \uCD94\uAC00</p></li><li><p>\uC785\uB825\uBC1B\uC740 list\uB97C \uD655\uC778\uD558\uC5EC \uD574\uB2F9 \uCEF4\uD4E8\uD130\uC5D0 \uCD94\uAC00\uB85C \uC5F0\uACB0\uB41C \uCEF4\uD4E8\uD130\uAC00 \uC788\uC73C\uBA74 stack\uC5D0 \uCD94\uAC00</p></li><li><p>\uBB34\uD55C\uB8E8\uD504\uB97C \uD53C\uD558\uAE30 \uC704\uD574 \uD655\uC778\uD55C \uCEF4\uD4E8\uD130, \uD655\uC778\uD560 \uCEF4\uD4E8\uD130\uB97C \uAD6C\uBD84\uD574\uC57C \uD55C\uB2E4! <br><br></p></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>from sys import stdin

N = int(stdin.readline().strip())
C = int(stdin.readline().strip())

total = [[] for _ in range(N)]

for i in range(C):
    a, b = map(int, stdin.readline().split())
    total[a-1].append(b)
    total[b-1].append(a)

stack = total[0]
visited = []

while stack:
    k = stack.pop(-1)

    if k in visited:
        continue
    visited.append(k)

    for i in total[k-1]:
        if i in stack or i == 1:
            continue
        stack.append(i)

print(len(visited))
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,9);function m(h,_){const n=e("RouterLink");return s(),r(t,null,[i("p",null,[l(n,{to:"/kyungbeen/"},{default:p(()=>[u]),_:1})]),o],64)}var x=a(d,[["render",m],["__file","boj_2606.html.vue"]]);export{x as default};
