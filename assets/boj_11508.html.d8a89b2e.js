import{_ as e,r as a,o as s,c as r,a as i,b as p,w as l,F as t,e as c,d as u}from"./app.ab7b14ba.js";const b={},d=u("KyungBeen"),o=c(`<h1 id="_11508\u1107\u1165\u11AB-2-1-\u1109\u1166\u110B\u1175\u11AF" tabindex="-1"><a class="header-anchor" href="#_11508\u1107\u1165\u11AB-2-1-\u1109\u1166\u110B\u1175\u11AF" aria-hidden="true">#</a> 11508\uBC88 2+1 \uC138\uC77C</h1><h2 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> Input</h2><p>\uCCAB \uBC88\uC9F8 \uC904\uC5D0\uB294 \uC720\uC81C\uD488\uC758 \uC218 N (1 \u2264 N \u2264 100,000)\uC774 \uC8FC\uC5B4\uC9D1\uB2C8\uB2E4.</p><p>\uB450 \uBC88\uC9F8 \uC904\uBD80\uD130 N\uAC1C\uC758 \uC904\uC5D0\uB294 \uAC01 \uC720\uC81C\uD488\uC758 \uAC00\uACA9 C<sub>i</sub> (1 \u2264 C<sub>i</sub> \u2264 100,000)\uAC00 \uC8FC\uC5B4\uC9D1\uB2C8\uB2E4. <br><br></p><h2 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h2><p>\uC7AC\uD604\uC774\uAC00 N\uAC1C\uC758 \uC720\uC81C\uD488\uC744 \uBAA8\uB450 \uC0B4 \uB54C \uD544\uC694\uD55C \uCD5C\uC18C\uBE44\uC6A9\uC744 \uCD9C\uB825\uD569\uB2C8\uB2E4. \uC815\uB2F5\uC740 2<sup>31</sup>-1\uBCF4\uB2E4 \uC791\uAC70\uB098 \uAC19\uB2E4. <br><br></p><h2 id="explanation" tabindex="-1"><a class="header-anchor" href="#explanation" aria-hidden="true">#</a> Explanation</h2><ul><li><p>\uC720\uC81C\uD488 3\uAC1C\uB97C \uD55C \uBC88\uC5D0 \uAD6C\uB9E4\uD560 \uB54C \uAC00\uC7A5 \uC2FC \uAC83\uC740 \uBB34\uB8CC\uC774\uBBC0\uB85C, getMinPrice()\uC5D0\uC11C \uB0B4\uB9BC\uCC28\uC21C\uC73C\uB85C \uC815\uB82C\uB41C \uC81C\uD488 \uAC00\uACA9\uC744 \uBC1B\uC544 \uBC18\uBCF5\uBB38\uC73C\uB85C 3\uAC1C \uC911 2\uAC1C\uB9CC \uD569\uACC4\uC5D0 \uD3EC\uD568\uD55C \uD6C4 \uBC18\uD658, \uBC18\uBCF5\uBB38 \uD0C8\uCD9C \uD6C4 \uB0A8\uC740 \uC81C\uD488 \uAC00\uACA9\uC744 \uD560\uC778\uB41C \uC81C\uD488 \uC5C6\uC774 \uADF8\uB300\uB85C \uAC00\uACA9\uC5D0 \uD3EC\uD568.</p></li><li><p>\uC804\uCCB4 \uC81C\uD488\uC758 \uAC1C\uC218\uAC00 2\uAC1C \uC774\uD558\uC778 \uACBD\uC6B0 \uD568\uC218\uC5D0 \uC804\uB2EC\uD558\uC9C0 \uC54A\uACE0 \uBC14\uB85C \uD569\uACC4 \uCD9C\uB825.</p></li><li><p>3\uAC1C \uC911 2\uAC1C \uAC00\uACA9\uB9CC \uD3EC\uD568\uD558\uB294 \uB85C\uC9C1\uC744 \uAD6C\uC131\uD558\uB294 \uAC83\uC774 \uAC00\uC7A5 \uC911\uC694\uD568. <br><br></p></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>def getMinPrice(N, price):
    total = 0
    idx = 0

    for _ in range(N//3):
        total += sum(price[idx:idx+2])
        idx += 3

    if N % 3 != 0:
        total += sum(price[idx:])

    return total


N = int(input())
price = [int(input()) for _ in range(N)]

price = sorted(price, reverse=True)
res = sum(price) if N &lt;= 2 else getMinPrice(N, price)

print(res)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,10);function h(m,_){const n=a("RouterLink");return s(),r(t,null,[i("p",null,[p(n,{to:"/kyungbeen/"},{default:l(()=>[d]),_:1})]),o],64)}var f=e(b,[["render",h],["__file","boj_11508.html.vue"]]);export{f as default};
