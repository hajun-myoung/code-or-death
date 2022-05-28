import{_ as o,r as a,o as c,c as l,a as n,b as p,w as u,F as r,d as s,e as i}from"./app.ab7b14ba.js";const k={},b={id:"\u110B\u116D\u1109\u1166\u1111\u116E\u1109\u1173-\u1106\u116E\u11AB\u110C\u1166",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#\u110B\u116D\u1109\u1166\u1111\u116E\u1109\u1173-\u1106\u116E\u11AB\u110C\u1166","aria-hidden":"true"},"#",-1),m=s(),_={href:"https://www.acmicpc.net/problem/1158",target:"_blank",rel:"noopener noreferrer"},f=s("\uC694\uC138\uD478\uC2A4 \uBB38\uC81C"),h=s("\uC5F0\uACB0\uB9AC\uC2A4\uD2B8\uB294 \uAD6C\uC870\uC801 \uD2B9\uC9D5 \uB355\uBD84\uC5D0 \uC0BD\uC785/\uC0AD\uC81C\uAC00 \uC6A9\uC774\uD558\uC5EC \uC6D0\uD615 \uC5F0\uACB0\uB9AC\uC2A4\uD2B8\uB85C \uC815\uC758\uD558\uC5EC \uBB38\uC81C\uB97C \uD480\uC5B4\uBCF4\uC558\uB2E4."),w=n("br",null,null,-1),y=s(" deque\uB85C \uC815\uC758\uD558\uC5EC \uD47C \uD480\uC774\uB294 "),x=s("\uC774 \uB9C1\uD06C"),g=s("\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uB2E4. "),v=n("br",null,null,-1),q=i(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> sys

<span class="token keyword">def</span> <span class="token function">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">return</span> sys<span class="token punctuation">.</span>stdin<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># \uC6D0\uD615 \uC5F0\uACB0\uB9AC\uC2A4\uD2B8 \uAD6C\uC870 \uC815\uC758</span>
<span class="token keyword">class</span> <span class="token class-name">Node</span><span class="token punctuation">:</span>
  <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">:</span>
    self<span class="token punctuation">.</span>data <span class="token operator">=</span> data
    self<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> <span class="token boolean">None</span>

<span class="token keyword">class</span> <span class="token class-name">CircularLinkedList</span><span class="token punctuation">:</span>
  <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    self<span class="token punctuation">.</span>head <span class="token operator">=</span> Node<span class="token punctuation">(</span><span class="token string">&#39;head&#39;</span><span class="token punctuation">)</span>
    self<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> self<span class="token punctuation">.</span>head
    self<span class="token punctuation">.</span>cur_node <span class="token operator">=</span> self<span class="token punctuation">.</span>head

  <span class="token keyword">def</span> <span class="token function">insert</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> prev_data<span class="token punctuation">,</span> new<span class="token punctuation">)</span><span class="token punctuation">:</span>
    new_node <span class="token operator">=</span> Node<span class="token punctuation">(</span>new<span class="token punctuation">)</span>
    cur_node <span class="token operator">=</span> self<span class="token punctuation">.</span>find<span class="token punctuation">(</span>prev_data<span class="token punctuation">)</span>
    new_node<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> cur_node<span class="token punctuation">.</span><span class="token builtin">next</span>
    cur_node<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> new_node

  <span class="token keyword">def</span> <span class="token function">find</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> elem<span class="token punctuation">)</span><span class="token punctuation">:</span>
    cur_node <span class="token operator">=</span> self<span class="token punctuation">.</span>head
    <span class="token keyword">while</span> cur_node<span class="token punctuation">.</span>data <span class="token operator">!=</span> elem<span class="token punctuation">:</span>
      cur_node <span class="token operator">=</span> cur_node<span class="token punctuation">.</span><span class="token builtin">next</span>
    <span class="token keyword">return</span> cur_node

  <span class="token keyword">def</span> <span class="token function">find_prev</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> elem<span class="token punctuation">)</span><span class="token punctuation">:</span>
    cur_node <span class="token operator">=</span> self<span class="token punctuation">.</span>head
    <span class="token keyword">while</span> cur_node<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">.</span>data <span class="token operator">!=</span> elem<span class="token punctuation">:</span>
      cur_node <span class="token operator">=</span> cur_node<span class="token punctuation">.</span><span class="token builtin">next</span>
    <span class="token keyword">return</span> cur_node

  <span class="token keyword">def</span> <span class="token function">remove</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> gap<span class="token punctuation">)</span><span class="token punctuation">:</span>
    cnt <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> cnt <span class="token operator">&lt;</span> gap<span class="token punctuation">:</span>
      self<span class="token punctuation">.</span>cur_node <span class="token operator">=</span> self<span class="token punctuation">.</span>cur_node<span class="token punctuation">.</span><span class="token builtin">next</span>
      <span class="token keyword">if</span> self<span class="token punctuation">.</span>cur_node<span class="token punctuation">.</span>data <span class="token operator">!=</span> <span class="token string">&#39;head&#39;</span><span class="token punctuation">:</span>
        cnt <span class="token operator">+=</span> <span class="token number">1</span>

    prev_node <span class="token operator">=</span> self<span class="token punctuation">.</span>find_prev<span class="token punctuation">(</span>self<span class="token punctuation">.</span>cur_node<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
    prev_node<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> prev_node<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">.</span><span class="token builtin">next</span>
    <span class="token keyword">return</span> <span class="token builtin">str</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>cur_node<span class="token punctuation">.</span>data<span class="token punctuation">)</span>

<span class="token comment"># \uC785\uB825</span>
<span class="token comment">#  N\uBA85\uC758 \uC0AC\uB78C\uC774 \uC6D0\uC744 \uC774\uB8E8\uBA74\uC11C \uC549\uC544\uC788\uACE0, K\uBC88\uC9F8 \uC0AC\uB78C\uC744 \uC81C\uAC70</span>
n<span class="token punctuation">,</span> k <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># \uC6D0\uD615 \uC5F0\uACB0 \uB9AC\uC2A4\uD2B8 \uC0DD\uC131</span>
people_list <span class="token operator">=</span> CircularLinkedList<span class="token punctuation">(</span><span class="token punctuation">)</span>
people_list<span class="token punctuation">.</span>insert<span class="token punctuation">(</span><span class="token string">&#39;head&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  people_list<span class="token punctuation">.</span>insert<span class="token punctuation">(</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;&quot;</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span>people_list<span class="token punctuation">.</span>remove<span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;, &quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>people_list<span class="token punctuation">.</span>remove<span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;&gt;&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div>`,1);function N(L,C){const t=a("ExternalLinkIcon"),e=a("RouterLink");return c(),l(r,null,[n("h1",b,[d,m,n("a",_,[f,p(t)])]),n("p",null,[h,w,y,p(e,{to:"/byeolhee/datastructure/deque/boj_1158.html"},{default:u(()=>[x]),_:1}),g,v]),q],64)}var j=o(k,[["render",N],["__file","boj_1158.html.vue"]]);export{j as default};
