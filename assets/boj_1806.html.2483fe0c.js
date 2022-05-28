import{_ as a,r as e,o as s,c as r,a as l,b as p,w as t,F as i,e as u,d as b}from"./app.ab7b14ba.js";const c={},d=b("KyungBeen"),m=u(`<h1 id="_1806\u1107\u1165\u11AB-\u1107\u116E\u1107\u116E\u11AB\u1112\u1161\u11B8" tabindex="-1"><a class="header-anchor" href="#_1806\u1107\u1165\u11AB-\u1107\u116E\u1107\u116E\u11AB\u1112\u1161\u11B8" aria-hidden="true">#</a> 1806\uBC88 \uBD80\uBD84\uD569</h1><h2 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> Input</h2><p>\uCCAB\uC9F8 \uC904\uC5D0 N (10 \u2264 N &lt; 100,000)\uACFC S (0 &lt; S \u2264 100,000,000)\uAC00 \uC8FC\uC5B4\uC9C4\uB2E4. \uB458\uC9F8 \uC904\uC5D0\uB294 \uC218\uC5F4\uC774 \uC8FC\uC5B4\uC9C4\uB2E4. \uC218\uC5F4\uC758 \uAC01 \uC6D0\uC18C\uB294 \uACF5\uBC31\uC73C\uB85C \uAD6C\uBD84\uB418\uC5B4\uC838 \uC788\uC73C\uBA70, 10,000\uC774\uD558\uC758 \uC790\uC5F0\uC218\uC774\uB2E4. <br><br></p><h2 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h2><p>\uCCAB\uC9F8 \uC904\uC5D0 \uAD6C\uD558\uACE0\uC790 \uD558\uB294 \uCD5C\uC18C\uC758 \uAE38\uC774\uB97C \uCD9C\uB825\uD55C\uB2E4. \uB9CC\uC77C \uADF8\uB7EC\uD55C \uD569\uC744 \uB9CC\uB4DC\uB294 \uAC83\uC774 \uBD88\uAC00\uB2A5\uD558\uB2E4\uBA74 0\uC744 \uCD9C\uB825\uD558\uBA74 \uB41C\uB2E4. <br><br></p><h2 id="explanation" tabindex="-1"><a class="header-anchor" href="#explanation" aria-hidden="true">#</a> Explanation</h2><ul><li><p>\uD3EC\uC778\uD130\uB97C \uC774\uB3D9\uD558\uBA74\uC11C \uBD80\uBD84\uD569\uC774 S\uBCF4\uB2E4 \uD06C\uBA74 \uAE38\uC774\uB97C 1 \uC904\uC774\uBA74\uC11C head\uB97C \uD558\uB098 \uC774\uB3D9.</p></li><li><p>S\uBCF4\uB2E4 \uC791\uC740 \uACBD\uC6B0 \uBD80\uBD84\uD569\uC758 \uAE38\uC774\uB97C 1 \uB298\uB824\uC57C\uD558\uBBC0\uB85C p\uB97C 1 \uC99D\uAC00\uD574 \uC774\uB3D9\uD568.</p></li><li><p>p\uAC00 \uB05D\uC5D0 \uB3C4\uB2EC\uD55C \uACBD\uC6B0 \uBC18\uBCF5 \uC885\uB8CC, result\uAC00 \uCD5C\uB313\uAC12 \uCD08\uACFC\uC778 default \uAC12\uC774\uBA74 S\uC774\uC0C1\uC778 \uD569\uC744 \uB9CC\uB4DC\uB294 \uAC83\uC774 \uBD88\uAC00\uB2A5\uD558\uBBC0\uB85C 0\uC744 \uCD9C\uB825.</p></li><li><p>S \uC774\uC0C1\uC774\uBA74\uC11C S\uC5D0 \uAC00\uC7A5 \uAC00\uAE4C\uC6B4 \uBD80\uBD84\uD569\uC744 \uAD6C\uD558\uBA74\uC11C \uAC00\uC7A5 \uC9E7\uC740 \uAE38\uC774\uB97C \uAD6C\uD574\uC57C \uD558\uBBC0\uB85C \uAC01 \uD3EC\uC778\uD130\uB97C \uC774\uB3D9\uD558\uB294 \uC870\uAC74\uC744 \uAD6C\uBD84\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD558\uB2E4. <br><br></p></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>N, S = map(int, input().split())
nums = list(map(int, input().split()))
head = 0
p = 0
part_sum = nums[0]  # \uBD80\uBD84\uD569
part_len = 1  # \uBD80\uBD84\uD569\uC744 \uC774\uB8E8\uB294 \uC218\uC5F4\uC758 \uAE38\uC774
result = 100001

while True:
    if part_sum &gt;= S:
        if part_len &lt; result:
            result = part_len
        part_sum -= nums[head]
        head += 1
        part_len -= 1
    else:
        p += 1
        if p &gt;= N:
            break
        part_sum += nums[p]
        part_len += 1

print(0) if result == 100001 else print(result)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,9);function o(h,_){const n=e("RouterLink");return s(),r(i,null,[l("p",null,[p(n,{to:"/kyungbeen/"},{default:t(()=>[d]),_:1})]),m],64)}var x=a(c,[["render",o],["__file","boj_1806.html.vue"]]);export{x as default};
