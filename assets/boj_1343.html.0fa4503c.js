import{_ as a,r as s,o as e,c as r,a as l,b as p,w as i,F as b,e as c,d as t}from"./app.ab7b14ba.js";const u={},o=t("KyungBeen"),d=c(`<h1 id="_1343\u1107\u1165\u11AB-\u1111\u1169\u11AF\u1105\u1175\u110B\u1169\u1106\u1175\u1102\u1169" tabindex="-1"><a class="header-anchor" href="#_1343\u1107\u1165\u11AB-\u1111\u1169\u11AF\u1105\u1175\u110B\u1169\u1106\u1175\u1102\u1169" aria-hidden="true">#</a> 1343\uBC88 \uD3F4\uB9AC\uC624\uBBF8\uB178</h1><h2 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> Input</h2><p>\uCCAB\uC9F8 \uC904\uC5D0 \uBCF4\uB4DC\uD310\uC774 \uC8FC\uC5B4\uC9C4\uB2E4. \uBCF4\uB4DC\uD310\uC758 \uD06C\uAE30\uB294 \uCD5C\uB300 50\uC774\uB2E4. <br><br></p><h2 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h2><p>\uCCAB\uC9F8 \uC904\uC5D0 \uC0AC\uC804\uC21C\uC73C\uB85C \uAC00\uC7A5 \uC55E\uC11C\uB294 \uB2F5\uC744 \uCD9C\uB825\uD55C\uB2E4. \uB9CC\uC57D \uB36E\uC744 \uC218 \uC5C6\uC73C\uBA74 -1\uC744 \uCD9C\uB825\uD55C\uB2E4. <br><br></p><h2 id="explanation" tabindex="-1"><a class="header-anchor" href="#explanation" aria-hidden="true">#</a> Explanation</h2><ul><li><p>\uBC18\uBCF5\uBB38 \uC548\uC5D0\uC11C \uBCF4\uB4DC\uD310\uC744 \uD55C \uCE78\uC529 \uAC70\uCE58\uBA74\uC11C &#39;X&#39;\uC778\uC9C0 &#39;.&#39;\uC778\uC9C0 \uAC80\uC0AC.</p></li><li><p>&#39;X&#39;\uC758 \uAC1C\uC218\uB97C \uC138\uB2E4\uAC00 &#39;.&#39;\uC744 \uB9CC\uB098\uBA74(\uD639\uC740 \uBCF4\uB4DC\uD310 \uB05D\uC5D0 \uB3C4\uB2EC\uD55C \uACBD\uC6B0) getPoly()\uD638\uCD9C, count\uB97C \uB118\uACA8 4\uC758 \uBC30\uC218\uB294 &#39;AAAA&#39;, 2\uC758 \uBC30\uC218\uB294 &#39;BB&#39;\uB85C \uBCC0\uD658\uB41C \uBB38\uC790\uC5F4\uC744 \uBC18\uD658 \uD6C4 \uACB0\uACFC\uAC12\uC5D0 \uD3EC\uD568.</p></li><li><p>count 2\uC758 \uBC30\uC218\uAC00 \uC544\uB2C8\uB77C\uBA74 &#39;AAAA&#39; \uB610\uB294 &#39;BB&#39;\uB85C \uBCC0\uD658\uD560 \uC218 \uC5C6\uC73C\uBBC0\uB85C \uACB0\uACFC\uAC12\uC744 -1\uB85C \uCD08\uAE30\uD654 \uD6C4 \uBC18\uBCF5 \uC885\uB8CC.</p></li><li><p>\uC911\uAC04\uC911\uAC04 &#39;.&#39;\uC744 \uB9CC\uB098\uBA74 &#39;.&#39;\uC744 \uD3EC\uD568\uD558\uB294 \uAC83, \uACB0\uACFC\uC5D0 &#39;AAAA&#39;\uB97C \uC6B0\uC120\uC801\uC73C\uB85C \uD3EC\uD568\uD558\uACE0 \uB098\uBA38\uC9C0\uB97C &#39;BB&#39;\uB85C \uD3EC\uD568\uD574\uC57C \uD558\uB294 \uAC83\uC774 \uC911\uC694. <br><br></p></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>def getPoly(cnt):
    if cnt%2 != 0:
        return -1

    a = &#39;AAAA&#39;
    b = &#39;BB&#39;

    if cnt%4 == 0:
        return a * (cnt // 4)
    else:
        return a * (cnt // 4) + b * (cnt%4 // 2)

board = input()

cnt = 0
ptr = 0
poly = &#39;&#39;
res = &#39;&#39;

for i in board:
    if i == &#39;X&#39;:
        cnt += 1

    ptr += 1

    if i == &#39;.&#39; or (i == &#39;X&#39; and len(board) == ptr):
        poly = getPoly(cnt)

        if poly == -1:
            res = poly
            break

        res += poly

        if i == &#39;.&#39;:
            res += &#39;.&#39;
            cnt = 0

print(res)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div>`,9);function m(h,_){const n=s("RouterLink");return e(),r(b,null,[l("p",null,[p(n,{to:"/kyungbeen/"},{default:i(()=>[o]),_:1})]),d],64)}var x=a(u,[["render",m],["__file","boj_1343.html.vue"]]);export{x as default};
