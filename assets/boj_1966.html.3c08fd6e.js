import{_ as e,r as a,o as s,c as r,a as i,b as l,w as p,F as t,e as u,d as b}from"./app.ab7b14ba.js";const c={},d=b("KyungBeen"),o=u(`<h1 id="_1966\u1107\u1165\u11AB-\u1111\u1173\u1105\u1175\u11AB\u1110\u1165-\u110F\u1172" tabindex="-1"><a class="header-anchor" href="#_1966\u1107\u1165\u11AB-\u1111\u1173\u1105\u1175\u11AB\u1110\u1165-\u110F\u1172" aria-hidden="true">#</a> 1966\uBC88 \uD504\uB9B0\uD130 \uD050</h1><h2 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> Input</h2><p>\uCCAB \uC904\uC5D0 \uD14C\uC2A4\uD2B8\uCF00\uC774\uC2A4\uC758 \uC218\uAC00 \uC8FC\uC5B4\uC9C4\uB2E4. \uAC01 \uD14C\uC2A4\uD2B8\uCF00\uC774\uC2A4\uB294 \uB450 \uC904\uB85C \uC774\uB8E8\uC5B4\uC838 \uC788\uB2E4.</p><p>\uD14C\uC2A4\uD2B8\uCF00\uC774\uC2A4\uC758 \uCCAB \uBC88\uC9F8 \uC904\uC5D0\uB294 \uBB38\uC11C\uC758 \uAC1C\uC218 N(1 \u2264 N \u2264 100)\uACFC, \uBA87 \uBC88\uC9F8\uB85C \uC778\uC1C4\uB418\uC5C8\uB294\uC9C0 \uAD81\uAE08\uD55C \uBB38\uC11C\uAC00 \uD604\uC7AC Queue\uC5D0\uC11C \uBA87 \uBC88\uC9F8\uC5D0 \uB193\uC5EC \uC788\uB294\uC9C0\uB97C \uB098\uD0C0\uB0B4\uB294 \uC815\uC218 M(0 \u2264 M &lt; N)\uC774 \uC8FC\uC5B4\uC9C4\uB2E4. \uC774\uB54C \uB9E8 \uC67C\uCABD\uC740 0\uBC88\uC9F8\uB77C\uACE0 \uD558\uC790. \uB450 \uBC88\uC9F8 \uC904\uC5D0\uB294 N\uAC1C \uBB38\uC11C\uC758 \uC911\uC694\uB3C4\uAC00 \uCC28\uB840\uB300\uB85C \uC8FC\uC5B4\uC9C4\uB2E4. \uC911\uC694\uB3C4\uB294 1 \uC774\uC0C1 9 \uC774\uD558\uC758 \uC815\uC218\uC774\uACE0, \uC911\uC694\uB3C4\uAC00 \uAC19\uC740 \uBB38\uC11C\uAC00 \uC5EC\uB7EC \uAC1C \uC788\uC744 \uC218\uB3C4 \uC788\uB2E4. <br><br></p><h2 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h2><p>\uAC01 \uD14C\uC2A4\uD2B8 \uCF00\uC774\uC2A4\uC5D0 \uB300\uD574 \uBB38\uC11C\uAC00 \uBA87 \uBC88\uC9F8\uB85C \uC778\uC1C4\uB418\uB294\uC9C0 \uCD9C\uB825\uD55C\uB2E4. <br><br></p><h2 id="explanation" tabindex="-1"><a class="header-anchor" href="#explanation" aria-hidden="true">#</a> Explanation</h2><ul><li><p>\uBB38\uC11C\uC758 \uC911\uC694\uB3C4\uB97C queue\uC5D0 \uB2F4\uACE0 \uD558\uB098\uC529 pop.</p></li><li><p>pop\uD55C \uBB38\uC11C\uC758 \uC911\uC694\uB3C4\uAC00 \uCD5C\uB313\uAC12\uC774 \uC544\uB2C8\uBA74 \uB2E4\uC2DC queue\uC5D0 \uB2F4\uB294\uB370, \uB9CC\uC57D target\uC774\uBA74 \uC778\uB371\uC2A4\uB97C \uC870\uC815\uD55C\uB2E4.</p></li><li><p>pop\uD55C \uBB38\uC11C\uC758 \uC911\uC694\uB3C4\uAC00 \uCD5C\uB313\uAC12\uC774\uBA74 count\uB97C \uC99D\uAC00\uD558\uB294\uB370, \uB9CC\uC57D targe\uC774\uBA74 count\uB97C \uCD9C\uB825\uD568\uACFC \uB3D9\uC2DC\uC5D0 \uBC18\uBCF5 \uC885\uB8CC.</p></li><li><p>target\uC778\uC9C0, \uCD5C\uB313\uAC12\uC778\uC9C0 \uACE0\uB824\uD568\uACFC \uB3D9\uC2DC\uC5D0 queue\uC758 \uBCC0\uD654\uC5D0 \uB530\uB77C target\uC758 index\uB97C \uC870\uC815\uD558\uB294 \uB85C\uC9C1\uC744 \uAD6C\uD604\uD574\uC57C \uD55C\uB2E4. <br><br></p></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import sys
from collections import deque

d = int(input())

for _ in range(d):
    n, m = map(int, sys.stdin.readline().split())
    queue = deque(list(map(int, sys.stdin.readline().split())))
    target = queue[m]
    cnt = 1

    while queue:
        first = max(queue)
        item = queue.popleft()
        m -= 1

        if len(queue) == 0:
            print(cnt)
            break
        elif item == first:
            if item == target and m == -1:
                print(cnt)
                break
            cnt += 1
        else:
            queue.append(item)
            m = len(queue) - 1 if m == -1 else m
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>`,10);function m(h,_){const n=a("RouterLink");return s(),r(t,null,[i("p",null,[l(n,{to:"/kyungbeen/"},{default:p(()=>[d]),_:1})]),o],64)}var x=e(c,[["render",m],["__file","boj_1966.html.vue"]]);export{x as default};
