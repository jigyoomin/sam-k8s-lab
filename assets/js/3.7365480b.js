(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{167:function(t,a,e){t.exports=e.p+"assets/img/2019-01-25-22-46-00.9612be19.png"},168:function(t,a,e){t.exports=e.p+"assets/img/2019-01-25-23-10-07.18af2833.png"},169:function(t,a,e){t.exports=e.p+"assets/img/2019-01-25-23-33-01.f33b6a8d.png"},170:function(t,a,e){t.exports=e.p+"assets/img/2019-01-25-23-40-31.ba2ca49d.png"},171:function(t,a,e){t.exports=e.p+"assets/img/2019-01-25-23-41-53.7d50f61f.png"},172:function(t,a,e){t.exports=e.p+"assets/img/2019-01-25-23-42-13.3256a6bb.png"},173:function(t,a,e){t.exports=e.p+"assets/img/2019-01-25-23-43-39.ab5033f2.png"},213:function(t,a,e){"use strict";e.r(a);var s=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"ci-cd-strategies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ci-cd-strategies","aria-hidden":"true"}},[t._v("#")]),t._v(" CI/CD Strategies")]),t._v(" "),s("h2",{attrs:{id:"deploy-in-kubernetes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deploy-in-kubernetes","aria-hidden":"true"}},[t._v("#")]),t._v(" Deploy in Kubernetes")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("ul",[s("li",[t._v("Configuration : Ingress <-> Service <-> Deployment  상호 연관 관계")]),t._v(" "),s("li",[t._v("[Key]:[Value]  형태로 자유롭게 선언하여, 자원 선택시 Filter로 사용됨")])])]),t._v(" "),s("p",[s("img",{attrs:{src:e(167),alt:""}}),t._v("\n(ref. CFCF)")]),t._v(" "),s("h2",{attrs:{id:"recreate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recreate","aria-hidden":"true"}},[t._v("#")]),t._v(" Recreate")]),t._v(" "),s("blockquote",[s("p",[t._v("Application을 중단하고, 새로운 Application을 배포함.")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Pros")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Cons")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Easy to setup")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("High impact on the user's erquest. downtime exists")])])])]),t._v(" "),s("p",[t._v("Example of yaml(manifest.yaml)")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" . . . "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("strategy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Recreate\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" . . . "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("Example of command")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("kubectl apply -f ./manifest.yaml\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"ramped"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ramped","aria-hidden":"true"}},[t._v("#")]),t._v(" Ramped")]),t._v(" "),s("blockquote",[s("p",[t._v("(aka) : incremental, rolling update\n신규버전의 Application Instance 점진적으로 배포하고, 기존 배포된 버전의 Instance 수를 줄여 가는 배포 방식\nKubernetes의 History관리를 통해  Rollback 쉽게 처리 할 수 있음")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Pros")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Cons")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Easy to setup")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Take time for rollout/rollback")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("No downtime")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("No control over traffic")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Keep handling ongoing rebalancing of data")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),s("p",[t._v("Example of yaml(manifest.yaml)")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" . . . "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("strategy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" RollingUpdate\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rollngUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxSurge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2       ")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# how many instances(pod) to add at a time")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxUnavailable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0 ")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# unavailable number of instances(pod) ")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# can be unavailable during the rolling update")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" . . . "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[t._v("Example of command")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("kubectl apply -f ./manifest.yaml\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Traffice\n"),s("img",{attrs:{src:e(168),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"blue-green"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blue-green","aria-hidden":"true"}},[t._v("#")]),t._v(" Blue/Green")]),t._v(" "),s("blockquote",[s("p",[t._v("(aka) : red/black\n신규버전의 Application Instance 배포하고, 기존 Instance에 연결되는 Routing 정보를 신규 Instance로 변경.\n서비스 변경이 완려되면 기존 Instane는 삭제처리함.")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Pros")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Cons")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Instanct update")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Expensive, need double the resources")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Good for frontend")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Should proper test of the entire platform before releasing")])])])]),t._v(" "),s("p",[t._v("Example of yaml(manifest-v2.yaml)")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" . . . "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Service\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Match both the app and the version")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# When switch traffic, update the label version with v2.0.0 for version 1.0.0")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("app\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1.0.0\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" . . . "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("Example of command")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('kubectl apply -f ./manifest-v2.yaml\nkubectl patch service my-app -p \\\n   \'{"spec": {"selector": {"version": "v2.0.0"}}}\'\nkubectl delete -f manifest-v1.yaml\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("Traffic\n"),s("img",{attrs:{src:e(169),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"canary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#canary","aria-hidden":"true"}},[t._v("#")]),t._v(" Canary")]),t._v(" "),s("blockquote",[s("p",[t._v("Rampled 배포 방식과 유사하나, Instance 일부를 선배포하고, 검증 이후에\n잔여 instane 모두를 배포하는 방식\n선배포 검증에 실패할 경우 기존 Instance로 Rollback 처리함.")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Pros")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Cons")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Verison released for a subset of users")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Slow")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Convenient for error rate and performance")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Sticky sesisons might be required")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Fast rollback")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("need traffic control required like "),s("em",[t._v("istio")]),t._v(" or "),s("em",[t._v("linkerd")])])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:e(170),alt:""}})])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:e(171),alt:""}})])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:e(172),alt:""}})])])])]),t._v(" "),s("p",[t._v("Traffic\n"),s("img",{attrs:{src:e(173),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"others"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#others","aria-hidden":"true"}},[t._v("#")]),t._v(" Others")]),t._v(" "),s("ul",[s("li",[t._v("A/B Testing\n"),s("ul",[s("li",[t._v("Canary 배포와 유사하며, 필요에 따라 유입되는 요청을 가각의 버전에 배분. 사용성 테스트를 수행함")]),t._v(" "),s("li",[t._v("유입되는 요청은 네트웍 비율 기반, http header의 조건 값 등 다양한 조건을 처리가 가능해야함")]),t._v(" "),s("li",[t._v("Application에서 조건과 테스트 결과 값을 처리해야함")])])]),t._v(" "),s("li",[t._v("Shadow\n"),s("ul",[s("li",[t._v("유입되는 요청에 대해, 테스트 환경으로 함께 전달되어 테스트 할 수 있는 환경")]),t._v(" "),s("li",[t._v("Shadow Instance에서 처리된 결과 값은 실제  Client에게 전달되지 않음")])])])]),t._v(" "),s("h2",{attrs:{id:"summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#summary","aria-hidden":"true"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),s("ul",[s("li",[t._v("recreate if downtime is not a problem")]),t._v(" "),s("li",[t._v("recreate and ramped doesn’t require any extra step (kubectl apply is enough)")]),t._v(" "),s("li",[t._v("ramped and blue/green deployment are usually a good fit and easy to use")]),t._v(" "),s("li",[t._v("blue/green is a good fit for front-end that load versioned assets from the same server")]),t._v(" "),s("li",[t._v("blue/green and shadow can be expensive")]),t._v(" "),s("li",[t._v("canary and a/b testing should be used if little confidence on the quality of the release")]),t._v(" "),s("li",[t._v("canary, a/b testing and shadow might require additional cluster component")])]),t._v(" "),s("hr"),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#ci%2Fcd-strategies"}},[t._v("CI/CD Strategies")]),s("ul",[s("li",[s("a",{attrs:{href:"#deploy-in-kubernetes"}},[t._v("Deploy in Kubernetes")])]),s("li",[s("a",{attrs:{href:"#recreate"}},[t._v("Recreate")])]),s("li",[s("a",{attrs:{href:"#ramped"}},[t._v("Ramped")])]),s("li",[s("a",{attrs:{href:"#blue%2Fgreen"}},[t._v("Blue/Green")])]),s("li",[s("a",{attrs:{href:"#canary"}},[t._v("Canary")])]),s("li",[s("a",{attrs:{href:"#others"}},[t._v("Others")])]),s("li",[s("a",{attrs:{href:"#summary"}},[t._v("Summary")])])])])])]),s("p")])}],n=e(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},s,!1,null,null,null);a.default=r.exports}}]);