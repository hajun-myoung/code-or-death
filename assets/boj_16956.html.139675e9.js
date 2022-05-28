import{_ as s,r as a,o as e,c as r,a as l,b as i,w as p,F as b,e as c,d as u}from"./app.ab7b14ba.js";const t={},m=u("KyungBeen"),d=c(`<h1 id="_16956\u1107\u1165\u11AB-\u1102\u1173\u11A8\u1103\u1162\u110B\u116A-\u110B\u1163\u11BC" tabindex="-1"><a class="header-anchor" href="#_16956\u1107\u1165\u11AB-\u1102\u1173\u11A8\u1103\u1162\u110B\u116A-\u110B\u1163\u11BC" aria-hidden="true">#</a> 16956\uBC88 \uB291\uB300\uC640 \uC591</h1><h2 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> Input</h2><p>\uCCAB\uC9F8 \uC904\uC5D0 \uBAA9\uC7A5\uC758 \uD06C\uAE30 R, C\uAC00 \uC8FC\uC5B4\uC9C4\uB2E4.</p><p>\uB458\uC9F8 \uC904\uBD80\uD130 R\uAC1C\uC758 \uC904\uC5D0 \uBAA9\uC7A5\uC758 \uC0C1\uD0DC\uAC00 \uC8FC\uC5B4\uC9C4\uB2E4. &#39;.&#39;\uB294 \uBE48 \uCE78, &#39;S&#39;\uB294 \uC591, &#39;W&#39;\uB294 \uB291\uB300\uC774\uB2E4. <br><br></p><h2 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h2><p>\uB291\uB300\uAC00 \uC591\uC774 \uC788\uB294 \uCE78\uC73C\uB85C \uAC08 \uC218 \uC5C6\uAC8C \uD560 \uC218 \uC788\uB2E4\uBA74 \uCCAB\uC9F8 \uC904\uC5D0 1\uC744 \uCD9C\uB825\uD558\uACE0, \uB458\uC9F8 \uC904\uBD80\uD130 R\uAC1C\uC758 \uC904\uC5D0 \uBAA9\uC7A5\uC758 \uC0C1\uD0DC\uB97C \uCD9C\uB825\uD55C\uB2E4. \uC6B8\uD0C0\uB9AC\uB294 &#39;D&#39;\uB85C \uCD9C\uB825\uD55C\uB2E4. \uC6B8\uD0C0\uB9AC\uB97C \uC5B4\uB5BB\uAC8C \uC124\uCE58\uD574\uB3C4 \uB291\uB300\uAC00 \uC591\uC774 \uC788\uB294 \uCE78\uC73C\uB85C \uAC08 \uC218 \uC788\uB2E4\uBA74 \uCCAB\uC9F8 \uC904\uC5D0 0\uC744 \uCD9C\uB825\uD55C\uB2E4. <br><br></p><h2 id="explanation" tabindex="-1"><a class="header-anchor" href="#explanation" aria-hidden="true">#</a> Explanation</h2><ul><li><p>\uC785\uB825\uC744 \uBC1B\uC73C\uBA70 \uBB38\uC790\uC5F4 \uB0B4 \uC591\uACFC \uB291\uB300\uAC00 \uC11C\uB85C \uC606\uCE78\uC5D0 \uC788\uB294\uC9C0 \uD655\uC778, index\uB85C \uB291\uB300\uB4E4 \uC704\uCE58\uB97C \uC218\uC9D1\uD55C\uB2E4.</p></li><li><p>\uC218\uC9D1\uB41C \uB291\uB300\uB4E4 \uC704\uCE58\uB97C \uBC14\uD0D5\uC73C\uB85C \uC704\uC544\uB798 \uCE78\uB3C4 \uD655\uC778(\uD589\uC774 1\uC77C \uACBD\uC6B0\uB294 \uD544\uC694X)</p></li><li><p>\uB9E8\uC704, \uB9E8\uC544\uB798 \uD589\uACFC \uC911\uAC04\uD589 \uAD6C\uBD84\uD574\uC11C \uD655\uC778</p></li><li><p>\uC591\uC606\uBFD0\uB9CC \uC544\uB2C8\uB77C \uC704\uC544\uB798\uB85C\uB3C4 \uC774\uB3D9 \uAC00\uB2A5\uD558\uAE30 \uB54C\uBB38\uC5D0 \uB291\uB300\uC640 \uC778\uC811 \uC5EC\uBD80\uB97C \uD655\uC778\uD558\uC5EC \uC6B8\uD0C0\uB9AC\uB85C \uB9C9\uC744 \uC218 \uC788\uB294\uC9C0 \uD655\uC778\uD558\uB294 \uB85C\uC9C1\uC774 \uD544\uC694\uD558\uB2E4. <br><br></p></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>from sys import stdin

R, C = map(int, stdin.readline().split())

answer = []
wolf = []  # \uB291\uB300\uB4E4 \uC704\uCE58
safe = 1  # \uC591\uB4E4\uC758 \uC0C1\uD0DC
idx_r = 0

for i in range(R):
    line = stdin.readline().strip().replace(&#39;.W&#39;, &#39;DW&#39;).replace(&#39;W.&#39;, &#39;WD&#39;)
    if &#39;WS&#39; in line or &#39;SW&#39; in line:
        safe = -1

    idx_c = 0
    for i in line:
        if i == &#39;W&#39;:
            wolf.append([idx_r, idx_c])
        idx_c += 1
    idx_r += 1
    answer.append(list(line))

if safe == 1 and R &gt; 1:
    for i in wolf:
        m, n = i

        if m == 0 or m == R-1:
            m = m + 1 if m == 0 else m - 1
            if answer[m][n] == &#39;.&#39;:
                answer[m][n] = &#39;D&#39;
            elif answer[m][n] == &#39;S&#39;:
                safe = -1
        else:
            for j in [-1, 1]:
                if answer[m+j][n] == &#39;.&#39;:
                    answer[m+j][n] = &#39;D&#39;
                elif answer[m+j][n] == &#39;S&#39;:
                    safe = -1

if safe == 1:
    print(1)
    for i in answer:
        print(&#39;&#39;.join(i))
else:
    print(0)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div>`,10);function o(f,h){const n=a("RouterLink");return e(),r(b,null,[l("p",null,[i(n,{to:"/kyungbeen/"},{default:p(()=>[m]),_:1})]),d],64)}var x=s(t,[["render",o],["__file","boj_16956.html.vue"]]);export{x as default};
