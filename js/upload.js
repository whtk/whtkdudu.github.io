var divwhtk,inputwhtk,owhtk,awhtk,xuehao,xingming,banjiSelect,fileObjectId="",newDiv=null,newSelect=null,classbanji=null;function queryAV(e,t,n,i){var l=null;return new AV.Query(e).find().then((e=>{l=e,alert(e);for(var a="<datalist>",u=0;u<e.length;u++)a+=null==i?'<option value="'+e[u].attributes.get(n)+'">'+e[u].attributes.get(n)+"</option>":'<option value="'+e[u].attributes.get(n)+'">'+e[u].attributes.get(i)+"</option>";a+="</datalist>",newSelect=document.getElementById(t).innerHTML=a})),alert(l),l}function querybanjinoquery(){for(var e="<datalist>",t=0;t<classbanji.length;t++)e+='<option value="'+classbanji[t].attributes.banjiName+'">'+classbanji[t].attributes.banjiName+"</option>";e+="</datalist>",newSelect=document.getElementById("banji").innerHTML=e}function loadingWindow(){null==divwhtk&&(divwhtk=document.getElementById("csswhtk")),null==newDiv&&((newDiv=document.createElement("div")).innerHTML="<img style=“overflow:auto; src='/images/loading1.gif'></img> 上传中... ",newDiv.style.cssText="display:block; position:relative; width:100%; height:100%;border:3px solid orange;background-color:#FFF8DC ; overflow:auto; text-align: center;")}function fanhui(){divwhtk.innerHTML='<div><label  id="labelwhtk">学号</label>  <input id="xuehao" type="text" name="xuehao"/> </br> \n<label  id="labelwhtk2">姓名</label>  <input id="xingming" type="text" name="xingming"/> </br> \n<label  id="labelwhtk3">班级</label>  <select  id="banji"  name="banji" list=\'banjilist\'><datalist id=\'banjilist\'></datalist>  \n </select></div><div><label  id="inputwhtk">请选择文件</label> \n<span  className = "myupload" id = "myupload">\n       <em> 添加文件 </em>\n    <input id="fileupload" type="file" name="file1" style="display:none"/> \n</span> <input type="button" value="上传" onclick="upload()"/> </input> \n</div>',owhtk=document.getElementById("myupload"),awhtk=owhtk.getElementsByTagName("input")[0],loadingWindow(),owhtk.onclick=function(){awhtk.click()},inputwhtk=document.getElementById("inputwhtk"),awhtk.onchange=function(){inputwhtk.innerText=awhtk.files[0].name},console.log(classbanji),querybanjinoquery()}function delyunfile(e){AV.File.createWithoutData(e).destroy(),alert("已删除"),fanhui()}function upload(){xuehao=document.getElementById("xuehao"),xingming=document.getElementById("xingming"),banjiSelect=document.getElementById("banji"),inputwhtk=document.getElementById("inputwhtk");var e=document.getElementById("fileupload");if(""!=xuehao.value.trim()&&""!=xingming.value.trim())if("2002"==xuehao.value.trim().substring(0,4)&&6==xuehao.value.length)if(0!=e.files.length){if(e.files.length){e.files[0].name;var t=(banjiSelect=document.getElementById("banji")).value,n=t+"-"+document.title+"-"+xuehao.value.trim()+"-"+xingming.value.trim(),i=t+"-"+document.title+"-"+xuehao.value.trim(),l="",a="",u=new AV.Query("_File");u.contains("name",i);u.find().then((t=>{if(t.length>0)alert("你已经上传过了,请先删除"),!0,a=t[0].id,n=t[0].attributes.name,l=t[0].attributes.url,divwhtk.innerHTML="<a id=\"yunfile\"  target='_blank' href="+l+">"+n+'</a> <br><input type="button" value="删除" onclick=delyunfile(\''+a+'\')></input><input type="button" value="返回" onclick=fanhui()></input>',n="",e="",!1,l="",a="",u="";else{var i=new AV.File(n,e.files[0]),o=!0;i.save({onprogress:e=>{null==newDiv&&loadingWindow(),o&&(divwhtk.innerHTML=newDiv.outerHTML,o=!1)}}).then((e=>{o=!0,a=i.id,divwhtk.innerHTML="<a id=\"yunfile\"  target='_blank' href="+e.url()+">"+n+'</a> <br><input type="button" value="删除" onclick=delyunfile(\''+a+'\')></input><input type="button" value="返回" onclick=fanhui()></input>',n="",e="",!1,l="",a="",u=""})).catch(console.error)}}))}}else alert("请选择一个文件");else alert("学号有错");else alert("学号或姓名不能为空")}window.addEventListener("load",(e=>{if(null!=(divwhtk=document.getElementById("csswhtk"))){inputwhtk=document.getElementById("inputwhtk"),owhtk=document.getElementById("myupload"),awhtk=owhtk.getElementsByTagName("input")[0],newSelect=document.getElementById("banji"),loadingWindow(),owhtk.onclick=function(){awhtk.click()},awhtk.onchange=function(){inputwhtk.innerText=awhtk.files[0].name},null!=classbanji&&(classbanji=queryAV("banji","banji","banjiName",null))}}));