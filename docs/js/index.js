var coll=document.getElementsByClassName("toolbox-collapsible");var i;for(i=0;i<coll.length;i++){coll[i].addEventListener("click",function(){this.classList.toggle("toolbox-hit");var content=this.nextElementSibling;if(content.style.display==="block"){content.style.display="none";}else{content.style.display="block";}});}
let toolboxDiv=document.getElementById("notepad-toolbox1");let toolboxDownloadBtn=document.getElementById("toolbox-download-btn");let codeWindow=document.getElementById("lua-codewindow")
let homeLuaActions=document.getElementById("home-lua-actions")
let fakeProgressBar=document.getElementById("fake-progress-bar")
let downloadBtn=toolboxDownloadBtn;let landingpage=document.getElementById("home-landing");let idepage=document.getElementById("home-ide");function toggleHome(state){if(toolboxDiv==null){return;}
if(state){idepage.style.display="none";landingpage.style.display="flex";toolboxDiv.style.filter="Saturate(0.1)";if(window.innerWidth>600){idepage.style.maxHeight="100%";toolboxDiv.style.display="none";}
idepage.style.maxHeight="100%";toolboxDownloadBtn.style.display="none";codeWindow.style.filter="blur(0)";}
else{if(window.innerWidth<=600)
idepage.style.maxHeight="70%";idepage.style.display="flex";landingpage.style.display="none";toolboxDiv.style.filter="none";toolboxDiv.style.display="flex";toolboxDownloadBtn.style.display="block";codeWindow.style.filter="blur(0)";}}
toggleHome(true)
window.onload=function(){let isObfuscating=false
function startObfuscation(){if(isObfuscating)
return false
codeWindow.style.filter="blur(3px)";isObfuscating=true;return true}
function stopObfuscation(){if(!isObfuscating)
return false
codeWindow.style.filter="blur(0px)";isObfuscating=false;return true}
let gtagz="adsbygoogle";let luafile=document.getElementById("lua-file")
if(luafile!=null){downloadBtn.addEventListener("click",function(e){var a=document.createElement('a');var blob=new Blob([document.getElementById("lua-codewindow").innerText],{"type":"text/plain"});a.href=window.URL.createObjectURL(blob);a.download="obf_"+luaEngine.getSessionId()+".lua";a.click();});document.getElementById("lua-pre-0").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("pre-0",1);})
document.getElementById("lua-pre-1").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("pre-1",1);})
document.getElementById("lua-pre-2").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("pre-2",2);})
document.getElementById("lua-pre-3").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("pre-3",3);})
document.getElementById("lua-pre-4").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("pre-4",4);})
document.getElementById("lua-pre-5").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("pre-5",5);})
document.getElementById("lua-cleanup").addEventListener("click",function(e){if(startObfuscation())
luaEngine.cleanup(frontcallback)})
var _test=document.getElementById("lua-cleanup3")
var _testA=document.getElementById("lua-args")
var _testB=document.getElementById("lua-cffv2")
if(_test){_test.addEventListener("click",function(e){if(startObfuscation())
luaEngine.cleanup(frontcallback)})
_testA.addEventListener("click",function(e){if(startObfuscation())
doEngineAction("args",50);})
_testB.addEventListener("click",function(e){if(startObfuscation())
doEngineAction("cffv2",50);})}
document.getElementById("lua-junkif").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("junkif",50);})
document.getElementById("lua-reverseif").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("reverseif",65);})
document.getElementById("lua-cffv1").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("cffv1",50);})
document.getElementById("lua-encfdec").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("encfdec",100);})
document.getElementById("lua-swizzle").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("swizzle",100);})
document.getElementById("lua-glookup").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("glookup",100);})
document.getElementById("lua-makesus").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("makesus",69);})
document.getElementById("lua-cffv1-exp").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("cffv1",50);})
document.getElementById("lua-literals").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("literals",50);})
document.getElementById("lua-mbav1").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("MBAv1",75);})
document.getElementById("lua-variables").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("variables",50);})
document.getElementById("lua-minify").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("minify",100);})
document.getElementById("lua-minify2").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("minify",100);})
document.getElementById("lua-luamina-push").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("luamina-push",100);})
document.getElementById("lua-luamina-pull").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("luamina-pull",100);})
document.getElementById("lua-beautify").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("beautify",100);})
document.getElementById("lua-beautify2").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("beautify",100);})
document.getElementById("lua-beautify3").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("beautify",100);})
document.getElementById("lua-copytoclipboard").addEventListener("click",function(e){let codewindow=document.getElementById("lua-codewindow");navigator.clipboard.writeText(codewindow.innerText);})
document.getElementById("lua-evaluate").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("evaluate",100);})
document.getElementById("lua-strings").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("strings",100);})
document.getElementById("lua-tableindirection").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("tableindirection",100);})
document.getElementById("lua-bit32").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("bit32",69);})
document.getElementById("lua-rmPLH").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("rmPLH",69);})
document.getElementById("lua-demo_vm").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("demo_vm",100);})
document.getElementById("lua-demo_vm-exp").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("demo_vm",100);})
document.getElementById("lua-undo").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("undo",0);})
document.getElementById("lua-undoAll").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("undoAll",0);})
document.getElementById("lua-reset").addEventListener("click",function(e){window.location.href="/"})
document.getElementById("lua-reset2").addEventListener("click",function(e){window.location.href="/";})
document.getElementById("lua-ssa").addEventListener("click",function(e){if(startObfuscation())
doEngineAction("ssa",0);})
document.getElementById("btn-demo").addEventListener("click",function(e){let token=turnstile.getResponse()
if(token==undefined||token==""){return;}
if(!isObfuscating){luaEngine.setTurnstileToken(token);luaEngine.init(frontcallback,flags,true);}})
document.getElementById("btn-uploadfile").addEventListener("click",function(e){if(!isObfuscating){document.getElementById("lua-file").click();}})
luafile.addEventListener("change",function(e){let token=turnstile.getResponse()
if(token==undefined||token==""){return;}
if(!isObfuscating&&this.files.length>0){codeWindow.style.filter="blur(7px)";homeLuaActions.style.filter="blur(7px)";fakeProgressBar.style.display="block";isObfuscating=true;luaEngine.setTurnstileToken(token);this.files[0].text().then(x=>luaEngine.init(frontcallback,flags,true,x))}})}
let frontcallback=function(lastEvent){stopObfuscation();let test=document.getElementById("lua-codewindow");if(!luaEngine.parseScript(test,lastEvent))
return;let lconsole=document.getElementById("lua-console");if(lconsole!=null&&window.innerWidth>600){lconsole.style.display="block";}
toggleHome(luaEngine.getSessionId()==null)};let consolecallback=function(msg){let consoleul=document.getElementById("lua-console-ul");if(consoleul!=null){const date=new Date();const hours=date.getHours().toString().padStart(2,'0');const minutes=date.getMinutes().toString().padStart(2,'0');const seconds=date.getSeconds().toString().padStart(2,'0');const milliseconds=date.getMilliseconds().toString().padStart(3,'0');let li=document.createElement("li");li.appendChild(document.createTextNode(`[${hours}:${minutes}:${seconds}.${milliseconds}]: ${msg}`));consoleul.appendChild(li)}}
consolecallback("test... Hello World!");consolecallback("test... Hello World!");consolecallback("test... Hello World!");consolecallback("test... Hello World!");consolecallback("test... Hello World!");consolecallback("test... Hello World!");consolecallback("test... Hello World!");consolecallback("test... Hello World!");consolecallback("test... Hello World!");consolecallback("test... Hello World!123");let luaCodeWindow=document.getElementById('lua-codewindow')
luaCodeWindow.addEventListener('keydown',function(event){if((event.key==='a'||event.key==='A')&&(event.ctrlKey||event.metaKey)){event.preventDefault();selectText('lua-codewindow');}});let initialized=false;let isHidden=false
luaCodeWindow.addEventListener("input",function(event){initialized=false
if(isHidden){return}
let bannerText=document.getElementById("lua-codewindow-banner")
bannerText.style.display="none";isHidden=true;})
function selectText(containerId){var container=document.getElementById(containerId);var range=document.createRange();range.selectNodeContents(container);var selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);}
let flags=document.getElementsByClassName(gtagz).length;function doEngineAction(action,cmd){if(!initialized){luaEngine.detachSession();function _checkKeyAndUpdateIfPossible(){let token=turnstile.getResponse()
if(token==undefined||token==""){setTimeout(_checkKeyAndUpdateIfPossible,1500)
return;}
luaEngine.setTurnstileToken(token);luaEngine.init(null,flags,true,codeWindow.innerText)}
_checkKeyAndUpdateIfPossible();initialized=true;luaEngine.getInstances(updateTop)}
luaEngine.obfuscate(action,cmd,frontcallback);}
luaEngine.init(frontcallback,flags)
initialized=true;function updateTop(sessions){let landingpage=document.getElementById("home-landingpage")
let targetDOM=document.getElementById("lua-sessions");let codewindow=document.getElementById("lua-codewindow");targetDOM.innerHTML="";let spanHome=document.createElement("span");spanHome.className="top-tab-close";let txtHome=document.createTextNode("Home")
let aHome=document.createElement("a");if(luaEngine.getSessionId()==null){aHome.href="#";aHome.style="color: var(--primary); text-decoration: none; width: auto;";landingpage.style.display="flex";}else{aHome.href="/";aHome.style="text-decoration: none;";}
aHome.appendChild(txtHome)
let liHome=document.createElement("li");liHome.className="top-tab";liHome.appendChild(aHome);liHome.style="width: auto;";liHome.appendChild(spanHome)
targetDOM.appendChild(liHome);for(var i=0;i<sessions.length;i++){let spanNode=document.createElement("span");spanNode.className="top-tab-close";spanNode.appendChild(document.createTextNode("x"));let txtNode=document.createTextNode(sessions[i])
let aNode=document.createElement("a");if(luaEngine.getSessionId()==sessions[i]){aNode.href="#";aNode.style="color: var(--primary); text-decoration: none; cursor: default!important;";}else{aNode.href="./?session="+sessions[i];aNode.style="text-decoration: none;";}
aNode.appendChild(txtNode)
let liNode=document.createElement("li");liNode.className="top-tab";liNode.appendChild(aNode);liNode.appendChild(spanNode);targetDOM.appendChild(liNode);}
codewindow.style.filter="blur(0)";}
luaEngine.getInstances(updateTop)};