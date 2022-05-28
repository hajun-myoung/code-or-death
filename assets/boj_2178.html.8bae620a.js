import{_ as e,r as a,o as s,c as r,a as i,b as l,w as p,F as t,e as b,d as u}from"./app.ab7b14ba.js";const c={},o=u("KyungBeen"),d=b(`<h1 id="_2178\u1107\u1165\u11AB-\u1106\u1175\u1105\u1169-\u1110\u1161\u11B7\u1109\u1162\u11A8" tabindex="-1"><a class="header-anchor" href="#_2178\u1107\u1165\u11AB-\u1106\u1175\u1105\u1169-\u1110\u1161\u11B7\u1109\u1162\u11A8" aria-hidden="true">#</a> 2178\uBC88 \uBBF8\uB85C \uD0D0\uC0C9</h1><h2 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> Input</h2><p>\uCCAB\uC9F8 \uC904\uC5D0 \uB450 \uC815\uC218 N, M(2 \u2264 N, M \u2264 100)\uC774 \uC8FC\uC5B4\uC9C4\uB2E4. \uB2E4\uC74C N\uAC1C\uC758 \uC904\uC5D0\uB294 M\uAC1C\uC758 \uC815\uC218\uB85C \uBBF8\uB85C\uAC00 \uC8FC\uC5B4\uC9C4\uB2E4. \uAC01\uAC01\uC758 \uC218\uB4E4\uC740 <strong>\uBD99\uC5B4\uC11C</strong> \uC785\uB825\uC73C\uB85C \uC8FC\uC5B4\uC9C4\uB2E4. <br><br></p><h2 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h2><p>\uCCAB\uC9F8 \uC904\uC5D0 \uC9C0\uB098\uC57C \uD558\uB294 \uCD5C\uC18C\uC758 \uCE78 \uC218\uB97C \uCD9C\uB825\uD55C\uB2E4. \uD56D\uC0C1 \uB3C4\uCC29\uC704\uCE58\uB85C \uC774\uB3D9\uD560 \uC218 \uC788\uB294 \uACBD\uC6B0\uB9CC \uC785\uB825\uC73C\uB85C \uC8FC\uC5B4\uC9C4\uB2E4. <br><br></p><h2 id="explanation" tabindex="-1"><a class="header-anchor" href="#explanation" aria-hidden="true">#</a> Explanation</h2><ul><li><p>queue\uC5D0 index\uB97C \uB123\uACE0 \uC720\uD6A8\uD55C index\uAC70\uB098 0\uC774 \uC544\uB2CC\uC9C0 \uD655\uC778</p></li><li><p>\uB9DE\uB294 \uACBD\uB85C\uB77C\uBA74 \uC774\uC804 \uACBD\uB85C +1\uC744 \uD558\uACE0, \uB2E4\uC2DC queue\uC5D0 \uB123\uC5B4 \uB2E4\uC74C \uBC18\uBCF5\uC744 \uC2E4\uD589\uD55C\uB2E4.</p></li><li><p>\uCC98\uC74C\uC5D4 \uC7AC\uADC0 \uB85C\uC9C1\uC744 \uAD6C\uC0C1\uD588\uC73C\uB098, \uCD5C\uB2E8 \uACBD\uB85C\uB97C \uD310\uBCC4\uD558\uB294 \uBD80\uBD84\uC5D0\uC11C \uB9C9\uD600 \uB9CE\uC740 \uACE0\uC218\uB4E4\uC774 \uCD94\uCC9C\uD55C \uBC29\uC2DD\uC778 2\uC911\uBC18\uBCF5\uC744 \uD1B5\uD55C \uACBD\uB85C \uB354\uD558\uAE30\uB85C \uD480\uC774\uD588\uB2E4. \uAE30\uBCF8\uC801\uC778 bfs \uBB38\uC81C\uB2E4. <br><br></p></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>from collections import deque
from sys import stdin


def findRoute(x, y):
    queue = deque()
    queue.append((x, y))

    while queue:
        x, y = queue.popleft()
        for i in range(4):
            a, b = x + p1[i], y + p2[i]

            if a &lt; 0 or a &gt;= N or b &lt; 0 or b &gt;= M or maze[a][b] == 0:
                continue
            if maze[a][b] == 1:
                maze[a][b] = maze[x][y] + 1
                queue.append((a, b))

    return maze[N-1][M-1]


N, M = map(int, stdin.readline().split())
maze = [list(map(int, stdin.readline().strip())) for _ in range(N)]
p1 = [0, 1, 0, -1]
p2 = [1, 0, -1, 0]
print(findRoute(0, 0))
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>`,9);function m(h,f){const n=a("RouterLink");return s(),r(t,null,[i("p",null,[l(n,{to:"/kyungbeen/"},{default:p(()=>[o]),_:1})]),d],64)}var _=e(c,[["render",m],["__file","boj_2178.html.vue"]]);export{_ as default};
