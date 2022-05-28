import{_ as s,r as a,o as e,c as r,a as i,b as l,w as p,F as c,e as b,d as t}from"./app.ab7b14ba.js";const u={},B=t("KyungBeen"),W=b(`<h1 id="_1018\u1107\u1165\u11AB-\u110E\u1166\u1109\u1173\u1111\u1161\u11AB-\u1103\u1161\u1109\u1175-\u110E\u1175\u11AF\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_1018\u1107\u1165\u11AB-\u110E\u1166\u1109\u1173\u1111\u1161\u11AB-\u1103\u1161\u1109\u1175-\u110E\u1175\u11AF\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 1018\uBC88 \uCCB4\uC2A4\uD310 \uB2E4\uC2DC \uCE60\uD558\uAE30</h1><h2 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> Input</h2><p>\uCCAB\uC9F8 \uC904\uC5D0 N\uACFC M\uC774 \uC8FC\uC5B4\uC9C4\uB2E4. N\uACFC M\uC740 8\uBCF4\uB2E4 \uD06C\uAC70\uB098 \uAC19\uACE0, 50\uBCF4\uB2E4 \uC791\uAC70\uB098 \uAC19\uC740 \uC790\uC5F0\uC218\uC774\uB2E4. \uB458\uC9F8 \uC904\uBD80\uD130 N\uAC1C\uC758 \uC904\uC5D0\uB294 \uBCF4\uB4DC\uC758 \uAC01 \uD589\uC758 \uC0C1\uD0DC\uAC00 \uC8FC\uC5B4\uC9C4\uB2E4. B\uB294 \uAC80\uC740\uC0C9\uC774\uBA70, W\uB294 \uD770\uC0C9\uC774\uB2E4. <br><br></p><h2 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h2><p>\uCCAB\uC9F8 \uC904\uC5D0 \uC9C0\uBBFC\uC774\uAC00 \uB2E4\uC2DC \uCE60\uD574\uC57C \uD558\uB294 \uC815\uC0AC\uAC01\uD615 \uAC1C\uC218\uC758 \uCD5C\uC19F\uAC12\uC744 \uCD9C\uB825\uD55C\uB2E4. <br><br></p><h2 id="explanation" tabindex="-1"><a class="header-anchor" href="#explanation" aria-hidden="true">#</a> Explanation</h2><ul><li><p>\uD770\uC0C9\uCE78 \uB610\uB294 \uAC80\uC740\uC0C9\uCE78\uC73C\uB85C \uC2DC\uC791\uD558\uB294 8*8 list\uB97C \uC120\uC5B8.</p></li><li><p>4\uC911 for\uBB38 =&gt; \uBC14\uAE65 2\uC911 for\uBB38\uC740 8*8\uC758 \uC778\uB371\uC2A4\uB97C, \uC548\uCABD 2\uC911 for\uBB38\uC740 \uC785\uB825\uD55C \uBCF4\uB4DC\uC758 8*8\uC758 index\uB97C \uAC00\uC838\uC634.</p></li><li><p>\uAC00\uC838\uC628 index\uB97C \uC774\uC6A9\uD574 8\uCE78\uC529 \uBE44\uAD50\uD558\uBA70 \uAE30 \uC120\uC5B8\uB41C list\uC640 \uB2E4\uB978 \uCE78\uC744 count\uD558\uBA74\uC11C \uCD5C\uC18C count\uB97C \uC800\uC7A5(\uB2E4\uC2DC \uCE60\uD574\uC57C \uD558\uB294 \uCE78\uC758 \uCD5C\uC19F\uAC12)</p></li><li><p>8*8\uC529 2\uC911\uB9AC\uC2A4\uD2B8\uB85C \uC811\uADFC\uD574\uC57C \uD558\uB098? \uBC18\uBCF5\uC744 \uB450 \uBC88 \uB3CC\uC544\uC57C \uD558\uB098? \uB4F1\uC758 \uC0DD\uAC01\uC774 \uB4E4\uC5B4 \uBB54\uAC00 \uC5B4\uB835\uAC8C \uB290\uAEF4\uC84C\uB2E4. \uBB34\uC2DD\uD558\uAC8C \uAD6C\uD604\uD588\uC9C0\uB9CC solve \uD6C4\uC5D0 \uBCF4\uB2C8 \uBCF5\uC7A1\uD55C \uB4EF \uBCF4\uC5EC\uB3C4 \uAC04\uB2E8\uD55C \uB85C\uC9C1.</p><p><br><br></p></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import sys
from collections import deque

n, m = map(int, sys.stdin.readline().split())
board = list(sys.stdin.readline().strip() for _ in range(n))
w_start = [&#39;WBWBWBWB&#39;,
           &#39;BWBWBWBW&#39;,
           &#39;WBWBWBWB&#39;,
           &#39;BWBWBWBW&#39;,
           &#39;WBWBWBWB&#39;,
           &#39;BWBWBWBW&#39;,
           &#39;WBWBWBWB&#39;,
           &#39;BWBWBWBW&#39;]
b_start = [&#39;BWBWBWBW&#39;,
           &#39;WBWBWBWB&#39;,
           &#39;BWBWBWBW&#39;,
           &#39;WBWBWBWB&#39;,
           &#39;BWBWBWBW&#39;,
           &#39;WBWBWBWB&#39;,
           &#39;BWBWBWBW&#39;,
           &#39;WBWBWBWB&#39;]
check_min = 64
check_w = 0
check_b = 0

for i in range(n-7):
    for j in range(m-7):
        check_w = 0
        check_b = 0
        for x in range(i, i+8):
            for y in range(j, j+8):
                if board[x][y] != w_start[x-i][y-j]:
                    check_w += 1
                if board[x][y] != b_start[x-i][y-j]:
                    check_b += 1
        check_min = min(check_min, min(check_w, check_b))

print(check_min)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div>`,9);function o(m,d){const n=a("RouterLink");return e(),r(c,null,[i("p",null,[l(n,{to:"/kyungbeen/"},{default:p(()=>[B]),_:1})]),W],64)}var _=s(u,[["render",o],["__file","boj_1018.html.vue"]]);export{_ as default};
