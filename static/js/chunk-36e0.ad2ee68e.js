(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-36e0"],{C2qb:function(e,t,a){"use strict";var s=a("zgx2");a.n(s).a},GiIE:function(e,t,a){},NAyz:function(e,t,a){"use strict";var s=a("oj9+");t.a={data:function(){return{loading:!1,axisOption:{color:["#6ca2ff"],tooltip:{trigger:"axis",formatter:"{b} : {c}元",axisPointer:{type:"shadow"}},grid:{top:"40px",left:"30px",right:"50px",bottom:"40px",containLabel:!0,borderColor:"#fff"},xAxis:[{name:"（元）",type:"value",data:[],axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#BDBDBD",formatter:"{value}"},axisLine:{show:!1}}],yAxis:[{type:"category",axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#BDBDBD"},axisLine:{lineStyle:{color:"#BDBDBD"}},splitLine:{show:!1}}],series:[{type:"bar",label:{normal:{show:!0,position:"right",color:"#333"}},barWidth:20,data:[]}]},axisChart:null,list:[],fieldList:[]}},mixins:[s.a],components:{},props:{},computed:{},watch:{},mounted:function(){},methods:{},deactivated:function(){}}},QqDA:function(e,t,a){"use strict";a.r(t);var s=a("NAyz"),i=a("MT78"),n=a.n(i),o=a("X8ug"),l={name:"ranking-product-statistics",data:function(){return{}},mixins:[s.a],computed:{},mounted:function(){this.fieldList=[{field:"user_name",name:"员工"},{field:"structure_name",name:"部门"},{field:"num",name:"产品销量"}],this.initAxis()},methods:{getDataList:function(e){var t=this;this.loading=!0,Object(o.e)(e).then(function(e){t.loading=!1,t.list=e.data||[];for(var a=[],s=[],i=e.data.length>10?10:e.data.length,n=0;n<i;n++){var o=e.data[n];a.splice(0,0,parseFloat(o.num)),s.splice(0,0,o.user_name)}t.axisOption.yAxis[0].data=s,t.axisOption.series[0].data=a,t.axisChart.setOption(t.axisOption,!0)}).catch(function(){t.loading=!1})},initAxis:function(){this.axisChart=n.a.init(document.getElementById("axismain")),this.axisOption.tooltip.formatter="{b} : {c}",this.axisOption.xAxis[0].name="",this.axisChart.setOption(this.axisOption,!0)}}},u=(a("j4eA"),a("KHd+")),r=Object(u.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"main-container"},[a("filtrate-handle-view",{staticClass:"filtrate-bar",attrs:{showUserSelect:!1,moduleType:"ranking"},on:{load:function(t){e.loading=!0},change:e.getDataList}}),e._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"content-title"},[e._v("产品销量排行（按签订的审核通过的合同关联产品统计）")]),e._v(" "),a("div",{directives:[{name:"empty",rawName:"v-empty",value:0===e.list.length,expression:"list.length === 0"}],staticClass:"axis-content",attrs:{"xs-empty-text":"暂无排行"}},[a("div",{attrs:{id:"axismain"}})]),e._v(" "),a("div",{staticClass:"table-content"},[a("el-table",{attrs:{data:e.list,height:"400",stripe:"",border:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",label:"公司总排名"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.$index+1)+"\n          ")]}}])}),e._v(" "),e._l(e.fieldList,function(e,t){return a("el-table-column",{key:t,attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",prop:e.field,label:e.name}})})],2)],1)])],1)},[],!1,null,"597c2128",null);r.options.__file="RankingProductStatistics.vue";t.default=r.exports},X8ug:function(e,t,a){"use strict";a.d(t,"c",function(){return i}),a.d(t,"f",function(){return n}),a.d(t,"i",function(){return o}),a.d(t,"e",function(){return l}),a.d(t,"b",function(){return u}),a.d(t,"a",function(){return r}),a.d(t,"h",function(){return c}),a.d(t,"g",function(){return d}),a.d(t,"d",function(){return p});var s=a("t3Un");function i(e){return Object(s.a)({url:"bi/ranking/contract",method:"post",data:e})}function n(e){return Object(s.a)({url:"bi/ranking/receivables",method:"post",data:e})}function o(e){return Object(s.a)({url:"bi/ranking/signing",method:"post",data:e})}function l(e){return Object(s.a)({url:"bi/ranking/product",method:"post",data:e})}function u(e){return Object(s.a)({url:"bi/ranking/addCustomer",method:"post",data:e})}function r(e){return Object(s.a)({url:"bi/ranking/addContacts",method:"post",data:e})}function c(e){return Object(s.a)({url:"bi/ranking/recordNun",method:"post",data:e})}function d(e){return Object(s.a)({url:"bi/ranking/recordCustomer",method:"post",data:e})}function p(e){return Object(s.a)({url:"bi/ranking/examine",method:"post",data:e})}},dOKi:function(e,t,a){"use strict";var s=a("GiIE");a.n(s).a},"gXW+":function(e,t,a){"use strict";var s=a("KTTK"),i=a("UcQx"),n=a("conU"),o=a("uKQN"),l=a("wd/R"),u=a.n(l),r={name:"filtrate-handle-view",components:{timeTypeSelect:o.a},watch:{},data:function(){return{pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()}},yearValue:"",timeTypeValue:{},structuresProps:{children:"children",label:"label",value:"id"},deptList:[],structuresSelectValue:"",userOptions:[],userSelectValue:"",businessOptions:[],businessStatusValue:"",productValue:[],productOptions:[],customValue:""}},props:{moduleType:{required:!0,type:String},showYearSelect:{default:!1,type:Boolean},showBusinessSelect:{default:!1,type:Boolean},showUserSelect:{default:!0,type:Boolean},showCustomSelect:{default:!1,type:Boolean},customDefault:"",customOptions:{default:function(){return[]},type:Array},showProductSelect:{default:!1,type:Boolean}},mounted:function(){var e=this;this.showCustomSelect&&(this.customValue=this.customDefault),this.showYearSelect&&(this.yearValue=u()(new Date).year().toString()),this.$emit("load"),this.getDeptList(function(){e.showBusinessSelect?e.getBusinessStatusList(function(){e.postFiltrateValue()}):e.postFiltrateValue()}),this.showProductSelect&&this.getProductCategoryIndex()},methods:{customSelectChange:function(){this.$emit("typeChange",this.customValue)},timeTypeChange:function(e){this.timeTypeValue=e},getDeptList:function(e){var t=this;Object(s.b)({m:"bi",c:this.moduleType,a:"read"}).then(function(a){t.deptList=a.data,a.data.length>0?(t.structuresSelectValue=a.data[0].id,t.showUserSelect&&t.getUserList()):t.structuresSelectValue="",e(!0)}).catch(function(){t.$emit("error")})},structuresValueChange:function(e){this.showUserSelect&&(this.userSelectValue="",this.userOptions=[],this.getUserList())},getUserList:function(){var e=this,t={};t.structure_id=this.structuresSelectValue,Object(s.j)(t).then(function(t){e.userOptions=t.data}).catch(function(){e.$emit("error")})},getBusinessStatusList:function(e){var t=this;Object(i.g)().then(function(a){t.businessOptions=a.data,a.data.length>0&&(t.businessStatusValue=a.data[0].type_id),e(!0)}).catch(function(){t.$emit("error")})},getProductCategoryIndex:function(){var e=this;Object(n.r)({type:"tree"}).then(function(t){e.productOptions=t.data}).catch(function(){})},postFiltrateValue:function(){var e={structure_id:this.structuresSelectValue};this.showUserSelect&&(e.user_id=this.userSelectValue),this.showBusinessSelect&&(e.type_id=this.businessStatusValue),this.showProductSelect&&(e.category_id=this.productValue.length>0?this.productValue[this.productValue.length-1]:""),this.showYearSelect?e.year=this.yearValue:"custom"==this.timeTypeValue.type?(e.start_time=this.timeTypeValue.startTime,e.end_time=this.timeTypeValue.endTime):e.type=this.timeTypeValue.value,this.$emit("change",e)}},beforeDestroy:function(){}},c=(a("C2qb"),a("KHd+")),d=Object(c.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"filtrate-content"},[e.showYearSelect?e._e():a("time-type-select",{on:{change:e.timeTypeChange}}),e._v(" "),e.showYearSelect?a("el-date-picker",{attrs:{type:"year",clearable:!1,"value-format":"yyyy","picker-options":e.pickerOptions,placeholder:"选择年"},model:{value:e.yearValue,callback:function(t){e.yearValue=t},expression:"yearValue"}}):e._e(),e._v(" "),a("el-select",{attrs:{placeholder:"选择部门"},on:{change:e.structuresValueChange},model:{value:e.structuresSelectValue,callback:function(t){e.structuresSelectValue=t},expression:"structuresSelectValue"}},e._l(e.deptList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),e.showUserSelect?a("el-select",{attrs:{clearable:!0,placeholder:"选择员工"},model:{value:e.userSelectValue,callback:function(t){e.userSelectValue=t},expression:"userSelectValue"}},e._l(e.userOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.realname,value:e.id}})})):e._e(),e._v(" "),e.showBusinessSelect?a("el-select",{attrs:{placeholder:"商机组"},model:{value:e.businessStatusValue,callback:function(t){e.businessStatusValue=t},expression:"businessStatusValue"}},e._l(e.businessOptions,function(e){return a("el-option",{key:e.type_id,attrs:{label:e.name,value:e.type_id}})})):e._e(),e._v(" "),e.showProductSelect?a("el-cascader",{staticStyle:{width:"100%"},attrs:{options:e.productOptions,"change-on-select":"","show-all-levels":!1,props:{children:"children",label:"label",value:"category_id"}},model:{value:e.productValue,callback:function(t){e.productValue=t},expression:"productValue"}}):e._e(),e._v(" "),e.showCustomSelect?a("el-select",{attrs:{placeholder:"图标类型"},on:{change:e.customSelectChange},model:{value:e.customValue,callback:function(t){e.customValue=t},expression:"customValue"}},e._l(e.customOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})})):e._e(),e._v(" "),a("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){e.postFiltrateValue()}}},[e._v("搜索")])],1)},[],!1,null,"6c3275f8",null);d.options.__file="filtrateHandleView.vue";t.a=d.exports},j4eA:function(e,t,a){"use strict";var s=a("u0aL");a.n(s).a},"oj9+":function(e,t,a){"use strict";var s=a("gXW+");t.a={data:function(){return{chartColors:["#6CA2FF","#6AC9D7","#72DCA2","#48E78D","#FECD51","#DBB375","#FF7474","#F59561","#A3AEBC","#4C84FF","#0DBEB4","#00DEDE","#FFAA00","#C7C116","#F7A57C","#F661AC","#8652EE"]}},components:{filtrateHandleView:s.a},props:{},computed:{},watch:{},mounted:function(){},methods:{},deactivated:function(){}}},u0aL:function(e,t,a){},uKQN:function(e,t,a){"use strict";var s=a("7Qib"),i={name:"time-type-select",computed:{iconClass:function(){return this.showTypePopover?"arrow-up":"arrow-down"},typeShowValue:function(){return this.sureCustomContent?this.startTime||this.endTime?(this.startTime||"")+"-"+(this.endTime||""):"":this.selectType.label}},data:function(){return{selectType:{label:"本年",value:"year"},showTypePopover:!1,showCustomContent:!1,sureCustomContent:!1,startTime:"",endTime:"",typeOptions:[{label:"今天",value:"today"},{label:"昨天",value:"yesterday"},{label:"本周",value:"week"},{label:"上周",value:"lastWeek"},{label:"本月",value:"month"},{label:"上月",value:"lastMonth"},{label:"本季度",value:"quarter"},{label:"上季度",value:"lastQuarter"},{label:"本年",value:"year"},{label:"去年",value:"lastYear"}]}},props:{defaultType:Object},mounted:function(){this.defaultType?this.selectType=this.defaultType:this.$emit("change",{type:"default",value:this.selectType.value})},methods:{typeSelectClick:function(e){this.showTypePopover=!1,this.sureCustomContent=!1,this.showCustomContent=!1,this.selectType=e,this.$emit("change",{type:"default",value:this.selectType.value})},customSureClick:function(){this.startTime&&this.endTime&&(this.sureCustomContent=!0,this.showTypePopover=!1,this.$emit("change",{type:"custom",startTime:Object(s.d)(this.startTime),endTime:Object(s.d)(this.endTime)}))}}},n=(a("dOKi"),a("KHd+")),o=Object(n.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-popover",{attrs:{placement:"bottom",width:"200","popper-class":"no-padding-popover",trigger:"click"},model:{value:e.showTypePopover,callback:function(t){e.showTypePopover=t},expression:"showTypePopover"}},[a("div",{staticClass:"type-popper"},[a("div",{staticClass:"type-content"},[e._l(e.typeOptions,function(t,s){return a("div",{key:s,staticClass:"type-content-item",class:{selected:e.selectType.value==t.value&&!e.showCustomContent},on:{click:function(a){e.typeSelectClick(t)}}},[a("div",{staticClass:"mark"}),e._v(e._s(t.label)+"\n      ")])}),e._v(" "),a("div",{staticClass:"type-content-item",class:{selected:e.showCustomContent},on:{click:function(t){e.showCustomContent=!0}}},[a("div",{staticClass:"mark"}),e._v("自定义\n      ")])],2),e._v(" "),e.showCustomContent?a("div",{staticClass:"type-content-custom"},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.startTime,callback:function(t){e.startTime=t},expression:"startTime"}}),e._v(" "),a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}}),e._v(" "),a("el-button",{on:{click:e.customSureClick}},[e._v("确定")])],1):e._e()]),e._v(" "),a("el-input",{staticClass:"type-select",attrs:{slot:"reference",placeholder:"请选择选择",readonly:!0},slot:"reference",model:{value:e.typeShowValue,callback:function(t){e.typeShowValue=t},expression:"typeShowValue"}},[a("i",{class:["el-input__icon","el-icon-"+e.iconClass],attrs:{slot:"suffix"},slot:"suffix"})])],1)},[],!1,null,"77676b5a",null);o.options.__file="index.vue";t.a=o.exports},zgx2:function(e,t,a){}}]);