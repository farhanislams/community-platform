(function(){var template=Handlebars.template,templates=Handlebars.templates=Handlebars.templates||{};templates["index"]=template(function(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,">= 1.0.0"];helpers=this.merge(helpers,Handlebars.helpers);data=data||{};var buffer="",stack1,functionType="function",escapeExpression=this.escapeExpression,self=this;function program1(depth0,data){var buffer="",stack1,helper;buffer+='\n<tr>\n\n    <td style="width:2em; text-align:right; padding-right:1em;">\n        '+escapeExpression((stack1=data==null||data===false?data:data.index,typeof stack1===functionType?stack1.apply(depth0):stack1))+'\n    </td>\n\n    <td>\n        <a href="/ia/view/';if(helper=helpers.id){stack1=helper.call(depth0,{hash:{},data:data})}else{helper=depth0&&depth0.id;stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper}buffer+=escapeExpression(stack1)+'">';if(helper=helpers.name){stack1=helper.call(depth0,{hash:{},data:data})}else{helper=depth0&&depth0.name;stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper}buffer+=escapeExpression(stack1)+"</a>\n    </td>\n\n    <td>\n        ";if(helper=helpers.description){stack1=helper.call(depth0,{hash:{},data:data})}else{helper=depth0&&depth0.description;stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper}buffer+=escapeExpression(stack1)+'\n    </td>\n    <td class="ia_src_column">\n        ';if(helper=helpers.src_name){stack1=helper.call(depth0,{hash:{},data:data})}else{helper=depth0&&depth0.src_name;stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper}buffer+=escapeExpression(stack1)+"\n    </td>\n\n    <td>\n        ";stack1=helpers.each.call(depth0,depth0&&depth0.topic,{hash:{},inverse:self.noop,fn:self.program(2,program2,data),data:data});if(stack1||stack1===0){buffer+=stack1}buffer+='\n    </td>\n\n    <td style="padding-right: 1em">\n        ';if(helper=helpers.dev_milestone){stack1=helper.call(depth0,{hash:{},data:data})}else{helper=depth0&&depth0.dev_milestone;stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper}buffer+=escapeExpression(stack1)+'\n    </td>\n\n    <td style="padding-right: 1em">\n        ';if(helper=helpers.repo){stack1=helper.call(depth0,{hash:{},data:data})}else{helper=depth0&&depth0.repo;stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper}buffer+=escapeExpression(stack1)+"\n    </td>\n\n</tr>\n";return buffer}function program2(depth0,data){var buffer="";buffer+=' <span class="ia_topic">'+escapeExpression(typeof depth0===functionType?depth0.apply(depth0):depth0)+"</span> ";return buffer}buffer+="\n\n";stack1=helpers.each.call(depth0,depth0&&depth0.ia,{hash:{},inverse:self.noop,fn:self.program(1,program1,data),data:data});if(stack1||stack1===0){buffer+=stack1}buffer+="\n";return buffer})})();(function(env){console.log("DDH.js");env.DDH={}})(window);(function(env){DDH.IAIndex=function(){this.init()};DDH.IAIndex.prototype={sort_field:"",sort_asc:1,init:function(){console.log("IAIndex init()");var ind=this;$("#sort_name").on("click",DDH.IAIndex.prototype.sort.bind(this,"name"));$("#sort_descr").on("click",DDH.IAIndex.prototype.sort.bind(this,"description"));$("#sort_status").on("click",DDH.IAIndex.prototype.sort.bind(this,"dev_milestone"));$("#sort_repo").on("click",DDH.IAIndex.prototype.sort.bind(this,"repo"));$.getJSON("/ia/json",function(x){ind.ia_list=x;ind.sort("name")})},sort:function(what){console.log("sorting %s by %s",this.sort_asc?"ascending":"descending",what);if(this.sort_field==what){this.sort_asc=1-this.sort_asc}else{this.sort_asc=1}this.sort_field=what;var ascending=this.sort_asc;this.ia_list.sort(function(l,r){if(ascending){var a=l,b=r}else{var a=r;b=l}if(a[what]>b[what]){return 1}if(a[what]<b[what]){return-1}return 0});this.refresh()},refresh:function(){var iap=Handlebars.templates.index({ia:this.ia_list});$("#ia_index").html(iap)}}})(DDH);(function(env){DDH.IAPage=function(ops){};DDH.IAPage.prototype={init:function(){console.log("IAPage.init()\n");if(DDH_iaid){console.log("for ia id '%s'",DDH_iaid)}}}})(DDH);console.log("ready.js");$(document).ready(function(){if(DDH_iapage){console.log("found DDH_iapage: '%s'",DDH_iapage);if(DDH[DDH_iapage]){DDH.index=new DDH[DDH_iapage]}}});