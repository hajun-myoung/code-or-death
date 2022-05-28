import{_ as s,r as a,o as e,c as r,a as l,b as p,w as t,F as i,e as u,d as b}from"./app.ab7b14ba.js";const c={},m=b("KyungBeen"),o=u(`<h1 id="_21921\u1107\u1165\u11AB-\u1107\u1173\u11AF\u1105\u1169\u1100\u1173" tabindex="-1"><a class="header-anchor" href="#_21921\u1107\u1165\u11AB-\u1107\u1173\u11AF\u1105\u1169\u1100\u1173" aria-hidden="true">#</a> 21921\uBC88 \uBE14\uB85C\uADF8</h1><h2 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> Input</h2><p>\uCCAB\uC9F8 \uC904\uC5D0 \uBE14\uB85C\uADF8\uB97C \uC2DC\uC791\uD558\uACE0 \uC9C0\uB09C \uC77C\uC218 $N$\uC640 $X$\uAC00 \uACF5\uBC31\uC73C\uB85C \uAD6C\uBD84\uB418\uC5B4 \uC8FC\uC5B4\uC9C4\uB2E4.</p><p>\uB458\uC9F8 \uC904\uC5D0\uB294 \uBE14\uB85C\uADF8 \uC2DC\uC791 $1$\uC77C\uCC28\uBD80\uD130 $N$\uC77C\uCC28\uAE4C\uC9C0 \uD558\uB8E8 \uBC29\uBB38\uC790 \uC218\uAC00 \uACF5\uBC31\uC73C\uB85C \uAD6C\uBD84\uB418\uC5B4 \uC8FC\uC5B4\uC9C4\uB2E4. <br><br></p><h2 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h2><p>\uCCAB\uC9F8 \uC904\uC5D0 $X$\uC77C \uB3D9\uC548 \uAC00\uC7A5 \uB9CE\uC774 \uB4E4\uC5B4\uC628 \uBC29\uBB38\uC790 \uC218\uB97C \uCD9C\uB825\uD55C\uB2E4. \uB9CC\uC57D \uCD5C\uB300 \uBC29\uBB38\uC790 \uC218\uAC00 0\uBA85\uC774\uB77C\uBA74 <strong>SAD</strong>\uB97C \uCD9C\uB825\uD55C\uB2E4.</p><p>\uB9CC\uC57D \uCD5C\uB300 \uBC29\uBB38\uC790 \uC218\uAC00 0\uBA85\uC774 \uC544\uB2CC \uACBD\uC6B0 \uB458\uC9F8 \uC904\uC5D0 \uAE30\uAC04\uC774 \uBA87 \uAC1C \uC788\uB294\uC9C0 \uCD9C\uB825\uD55C\uB2E4. <br><br></p><h2 id="explanation" tabindex="-1"><a class="header-anchor" href="#explanation" aria-hidden="true">#</a> Explanation</h2><ul><li><p>\uBC18\uBCF5\uBB38\uC5D0\uC11C \uB450 \uAC1C\uC758 \uD3EC\uC778\uD130\uB97C \uC774\uB3D9\uD558\uBA70 \uBD80\uBD84\uD569\uC744 \uACC4\uC0B0</p></li><li><p>\uD55C \uCE78 \uC774\uB3D9\uD558\uBA74 \uC774\uC804 left \uCE78\uC758 \uBC29\uBB38\uC790 \uC218\uB97C \uBD80\uBD84\uD569\uC5D0\uC11C \uC81C\uC678, right \uCE78\uC758 \uBC29\uBB38\uC790 \uC218\uB97C \uD3EC\uD568(\uBC18\uBCF5)</p></li><li><p>\uBC18\uBCF5 \uC885\uB8CC \uD6C4 result_lst\uC5D0\uC11C \uBC18\uBCF5\uC744 \uB3CC\uBA70 \uCD5C\uB300 \uBC29\uBB38\uC790\uC218\uC778 \uAE30\uAC04\uC758 \uC77C\uC218\uB97C count.</p></li><li><p>result_lst\uB294 \uC624\uB984\uCC28\uC21C\uC774\uBBC0\uB85C \uB9E8\uB4A4\uBD80\uD130 \uAC80\uC0AC</p></li><li><p>\uCD5C\uB300 \uBC29\uBB38\uC790 \uC218\uC778 \uAE30\uAC04\uC744 \uC138\uB294 \uBD80\uBD84\uC5D0\uC11C \uCCAB \uBC18\uBCF5\uBB38\uC5D0\uC11C \uCC98\uB9AC\uD558\uACE0 \uC2F6\uC5B4\uC11C \uC870\uAE08 \uD5E4\uB9F8\uC9C0\uB9CC, \uD22C \uD3EC\uC778\uD130\uC758 \uAC1C\uB150\uC744 \uC815\uD655\uD788 \uC54C\uBA74 \uBE44\uAD50\uC801 \uC27D\uAC8C \uD480 \uC218 \uC788\uB294 \uBB38\uC81C\uC774\uB2E4.</p></li></ul><p><br><br></p><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>N, X = map(int, input().split())
visitors = list(map(int, input().split()))

left = 0
right = X - 1
part_sum = sum(visitors[:X])
result = part_sum  # \uBD80\uBD84\uD569\uC758 \uCD5C\uB313\uAC12
result_lst = [part_sum]  # \uBC18\uBCF5\uBB38\uC5D0\uC11C \uB098\uC628 \uCD5C\uB313\uAC12\uB4E4
day = 0

while right &lt;= N - 2:
    part_sum -= visitors[left]
    left += 1
    right += 1
    part_sum += visitors[right]

    if result &lt;= part_sum:
        result = part_sum
        result_lst.append(part_sum)

while len(result_lst) != 0:
    i = result_lst.pop(-1)
    if i == result:
        day += 1
    else:
        break

if result == 0:
    print(&#39;SAD&#39;)
else:
    print(result)
    print(day)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>`,12);function d(h,_){const n=a("RouterLink");return e(),r(i,null,[l("p",null,[p(n,{to:"/kyungbeen/"},{default:t(()=>[m]),_:1})]),o],64)}var x=s(c,[["render",d],["__file","boj_21921.html.vue"]]);export{x as default};
