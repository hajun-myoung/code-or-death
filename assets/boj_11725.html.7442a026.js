import{_ as i,r as e,o as p,c as o,a as n,b as s,w as c,F as u,e as a,d as r}from"./app.ab7b14ba.js";const b={},d=r("KyungBeen"),h=a('<h1 id="_11725\u1107\u1165\u11AB-\u1110\u1173\u1105\u1175\u110B\u1174-\u1107\u116E\u1106\u1169-\u110E\u1161\u11BD\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_11725\u1107\u1165\u11AB-\u1110\u1173\u1105\u1175\u110B\u1174-\u1107\u116E\u1106\u1169-\u110E\u1161\u11BD\u1100\u1175" aria-hidden="true">#</a> 11725\uBC88 \uD2B8\uB9AC\uC758 \uBD80\uBAA8 \uCC3E\uAE30</h1><h2 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> Input</h2><p>\uCCAB\uC9F8 \uC904\uC5D0 \uB178\uB4DC\uC758 \uAC1C\uC218 N (2 \u2264 N \u2264 100,000)\uC774 \uC8FC\uC5B4\uC9C4\uB2E4. \uB458\uC9F8 \uC904\uBD80\uD130 N-1\uAC1C\uC758 \uC904\uC5D0 \uD2B8\uB9AC \uC0C1\uC5D0\uC11C \uC5F0\uACB0\uB41C \uB450 \uC815\uC810\uC774 \uC8FC\uC5B4\uC9C4\uB2E4. <br><br></p><h2 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h2><p>\uCCAB\uC9F8 \uC904\uBD80\uD130 N-1\uAC1C\uC758 \uC904\uC5D0 \uAC01 \uB178\uB4DC\uC758 \uBD80\uBAA8 \uB178\uB4DC \uBC88\uD638\uB97C 2\uBC88 \uB178\uB4DC\uBD80\uD130 \uC21C\uC11C\uB300\uB85C \uCD9C\uB825\uD55C\uB2E4. <br><br></p><h2 id="explanation" tabindex="-1"><a class="header-anchor" href="#explanation" aria-hidden="true">#</a> Explanation</h2>',6),_=n("li",null,[n("p",null,"tree\uC758 \uAD6C\uC870\uB97C \uBE48 \uBC30\uC5F4\uB85C \uD615\uC131.")],-1),m=n("li",null,[n("p",null,"\uC785\uB825\uB41C \uB178\uB4DC\uB97C tree\uC5D0 \uD574\uB2F9 \uC778\uB371\uC2A4\uB85C \uAC01\uAC01 \uAC12\uC744 \uB123\uC5B4\uC90C.")],-1),f=n("li",null,[n("p",null,"\uC7AC\uADC0\uB294 \uAE30\uBCF8\uAC12\uC774 1000\uD68C\uC774\uAE30 \uB54C\uBB38\uC5D0, 10^9\uB85C \uD69F\uC218\uB97C \uB298\uB824\uC900\uB2E4.(RecursionError)")],-1),E=n("li",null,[n("p",null,"parents\uC758 \uBD80\uBAA8\uB97C \uD0D0\uC0C9, \uC5C6\uC73C\uBA74 \uBD80\uBAA8\uB97C \uC124\uC815\uD558\uACE0, \uB2E4\uC2DC \uC5F0\uACB0\uB41C \uB178\uB4DC\uB97C \uC7AC\uADC0\uD638\uCD9C\uD558\uC5EC \uB118\uAE40.")],-1),B={href:"https://yongku.tistory.com/entry/%EB%B0%B1%EC%A4%80-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%B0%B1%EC%A4%80-11725%EB%B2%88-%ED%8A%B8%EB%A6%AC%EC%9D%98-%EB%B6%80%EB%AA%A8-%EC%B0%BE%EA%B8%B0-%ED%8C%8C%EC%9D%B4%EC%8D%ACPython",target:"_blank",rel:"noopener noreferrer"},x=r("\uCC38\uACE0 \uB9C1\uD06C"),C=n("br",null,null,-1),A=n("br",null,null,-1),g=a(`<h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import sys
sys.setrecursionlimit(10**9)


N = int(sys.stdin.readline().strip())
tree = [[] for _ in range(N+1)]
parents = [0 for _ in range(N+1)]

for _ in range(N-1):
    a, b = map(int, sys.stdin.readline().split())
    tree[a].append(b)
    tree[b].append(a)


def dfs(start, tree, parents):
    for i in tree[start]:
        if parents[i] == 0:
            parents[i] = start
            dfs(i, tree, parents)


dfs(1, tree, parents)

for i in range(2, N+1):
    print(parents[i])

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,2);function N(y,k){const t=e("RouterLink"),l=e("ExternalLinkIcon");return p(),o(u,null,[n("p",null,[s(t,{to:"/kyungbeen/"},{default:c(()=>[d]),_:1})]),h,n("ul",null,[_,m,f,E,n("li",null,[n("p",null,[n("a",B,[x,s(l)]),C,A])])]),g],64)}var D=i(b,[["render",N],["__file","boj_11725.html.vue"]]);export{D as default};
