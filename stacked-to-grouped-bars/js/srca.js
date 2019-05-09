if (typeof jQuery == 'undefined') {
    loadjQuery('http://code.jquery.com/jquery-1.10.2.min.js', function () {
        count();
    });
}
else {
    count();
};

function count() {
    jQuery(document).ready(function () {

        jQuery.getJSON('https://ipapi.co/json/', function(data) {
            sessionStorage.setItem("ip", JSON.stringify(data, null, 2));
        });

        jQuery.ajax({
            url: 'https://www.cookieyes.com/count',
            type: 'GET',
            data: {key: '274930cdf15d129932d10358'},
            success: function (data) {
                //console.log(data);
            }
        });

        
        
    });
};
function loadjQuery(url,success)
{var script=document.createElement('script');script.src=url;var head=document.getElementsByTagName('head')[0],done=false;head.appendChild(script);script.onload=script.onreadystatechange=function()
{if(!done&&(!this.readyState||this.readyState=='loaded'||this.readyState=='complete'))
{done=true;success();script.onload=script.onreadystatechange=null;head.removeChild(script);}};};(function(){var cliConfig={"consentBar":{"display":"true","type":"banner","position":{"top":"auto","right":"auto","bottom":"0","left":"auto"},"theme":"light","bg":"#ffffff","color":"#000000","borderColor":"#efefef","text":"This website uses cookies to improve your experience. We will assume you are ok with this, but you can opt-out if you wish.","buttons":{"settings":{"display":"false","bg":"#ffffff","color":"#000000","borderColor":"#efefef","label":"Settings"},"reject":{"display":"true","bg":"#ec665c","color":"#ffffff","borderColor":"#efefef","label":"Reject"},"accept":{"bg":"#57c49f","color":"#ffffff","borderColor":"#efefef","label":"Accept"},"readMore":{"display":"false","color":"#000000","link":"#","label":"Read More"}},"selectedTemplate":{"id":"1","css":".cli-consent-bar-trigger {\n\tposition: fixed;\n\tright: 30px;\n\tbackground: #000000;\n\tcolor: #ffffff;\n\tpadding: 2px 5px;\n\tfont-size: 13px;\n\tcursor: pointer;\n\tfont-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n\tanimation: slide-up 0.4s ease;\n\tz-index: 9997;\n}\n\n.cli-consent-bar-trigger.cli-consent-bar-trigger-top {\n\ttop: 0;\n\tanimation: slide-down 0.4s ease;\n}\n\n.cli-consent-bar-trigger.cli-consent-bar-trigger-bottom {\n\tbottom: 0;\n\tanimation: slide-up 0.4s ease;\n}\n\n.cli-consent-bar {\n\tpadding: 10px;\n\tfont-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n\tposition: fixed;\n\twidth: 100%;\n\tz-index: 9997;\n\tdisplay: -webkit-box;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t-moz-box-align: center;\n\t-ms-flex-align: center;\n\t-webkit-align-items: center;\n\talign-items: center;\n}\n\n.cli-consent-bar p {\n\tmargin-bottom: 0;\n\tmargin-top: 0;\n\tline-height: 2;\n\tfont-size: 15px;\n\tfont-weight: 300;\n}\n\n.cli-consent-btn-wrapper {\n\tmargin-left: 20px;\n\tdisplay: -webkit-box;\n\tdisplay: -moz-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t-moz-box-align: center;\n\t-ms-flex-align: center;\n\t-webkit-align-items: center;\n\talign-items: center;\n\tflex-wrap: nowrap;\n}\n\n@media (max-width: 991px) {\n\t.cli-consent-bar,\n\t.cli-consent-bar p,\n\t.cli-consent-btn-wrapper {\n\t\tdisplay: block;\n\t\ttext-align: center;\n\t}\n\t.cli-consent-btn-wrapper {\n\t\tmargin-left: 0;\n\t}\n}\n\n.cli-btn {\n\tcursor: pointer;\n\tfont-size: 14px;\n\tdisplay: inline-block;\n\tfont-weight: 400;\n\ttext-align: center;\n\twhite-space: nowrap;\n\tvertical-align: middle;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\tborder: 1px solid transparent;\n\tpadding: .5rem 1.25rem;\n\tline-height: 1;\n\tborder-radius: .25rem;\n\ttransition: all .15s ease-in-out;\n\tmargin: 0;\n\tmin-height: auto;\n}\n\n.cli-consent-bar .cli-btn {\n\tmargin-left: 15px;\n\tborder: 1px solid;\n}\n\n.cli-container-fluid {\n\tpadding-right: 15px;\n\tpadding-left: 15px;\n\tmargin-right: auto;\n\tmargin-left: auto;\n}\n\n.cli-row {\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-wrap: wrap;\n\tflex-wrap: wrap;\n\tmargin-right: -15px;\n\tmargin-left: -15px;\n}\n\n.cli-col-4 {\n\t-ms-flex: 0 0 33.333333%;\n\tflex: 0 0 33.333333%;\n\tmax-width: 33.333333%;\n}\n\n.cli-col-8 {\n\t-ms-flex: 0 0 66.666667%;\n\tflex: 0 0 66.666667%;\n\tmax-width: 66.666667%;\n}\n\n.cli-align-items-stretch {\n\t-ms-flex-align: stretch!important;\n\talign-items: stretch!important;\n}\n\n.cli-d-flex {\n\tdisplay: -ms-flexbox!important;\n\tdisplay: flex!important;\n}\n\n.cli-px-0 {\n\tpadding-left: 0;\n\tpadding-right: 0;\n}\n\n.cli-btn:hover {\n\topacity: .8;\n}\n\n.cli-read-more-link {\n\tcursor: pointer;\n\tfont-size: 15px;\n\tfont-weight: 500;\n\ttext-decoration: underline;\n\tmargin-left: 3px;\n}\n\n.cli-btn:focus {\n\toutline: 0;\n}\n\n.cli-modal-backdrop.cli-show {\n\topacity: .8;\n}\n\n.cli-modal-open {\n\toverflow: hidden\n}\n\n.cli-modal-open .cli-modal {\n\toverflow-x: hidden;\n\toverflow-y: auto\n}\n\n.cli-modal.cli-fade .cli-modal-dialog {\n\ttransition: -webkit-transform .3s ease-out;\n\ttransition: transform .3s ease-out;\n\ttransition: transform .3s ease-out, -webkit-transform .3s ease-out;\n\t-webkit-transform: translate(0, -25%);\n\ttransform: translate(0, -25%)\n}\n\n.cli-modal.cli-show .cli-modal-dialog {\n\t-webkit-transform: translate(0, 0);\n\ttransform: translate(0, 0)\n}\n\n.cli-modal-backdrop {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tz-index: 9998;\n\tbackground-color: #000;\n\tdisplay: none;\n}\n\n.cli-modal-backdrop.cli-fade {\n\topacity: 0\n}\n\n.cli-modal-backdrop.cli-show {\n\topacity: .7;\n\tdisplay: block;\n}\n\n.cli-modal {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tz-index: 9999;\n\tdisplay: none;\n\toverflow: hidden;\n\toutline: 0;\n}\n\n.cli-modal.cli-show {\n\tdisplay: block;\n}\n\n.cli-modal a {\n\ttext-decoration: none;\n}\n\n.cli-modal .cli-modal-dialog {\n\tposition: relative;\n\twidth: auto;\n\tmargin: .5rem;\n\tpointer-events: none;\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n\tfont-size: 1rem;\n\tfont-weight: 400;\n\tline-height: 1.5;\n\tcolor: #212529;\n\ttext-align: left;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tmin-height: calc(100% - (.5rem * 2))\n}\n\n@media (min-width: 576px) {\n\t.cli-modal .cli-modal-dialog {\n\t\tmax-width: 500px;\n\t\tmargin: 1.75rem auto;\n\t\tmin-height: calc(100% - (1.75rem * 2))\n\t}\n}\n\n@media (min-width: 992px) {\n\t.cli-modal .cli-modal-dialog {\n\t\tmax-width: 900px;\n\t}\n}\n\n.cli-modal-content {\n\tposition: relative;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-direction: column;\n\tflex-direction: column;\n\twidth: 100%;\n\tpointer-events: auto;\n\tbackground-color: #fff;\n\tbackground-clip: padding-box;\n\tborder: 1px solid rgba(0, 0, 0, .2);\n\tborder-radius: .3rem;\n\toutline: 0\n}\n\n.cli-modal .cli-row {\n\tmargin: 0 -15px;\n}\n\n.cli-modal .cli-modal-body {\n\tpadding: 0;\n\tposition: relative;\n\t-ms-flex: 1 1 auto;\n\tflex: 1 1 auto;\n}\n\n.cli-modal .cli-close {\n\tposition: absolute;\n\tright: 10px;\n\ttop: 10px;\n\tz-index: 1;\n\tpadding: 0;\n\tbackground-color: transparent;\n\tborder: 0;\n\t-webkit-appearance: none;\n\tfont-size: 1.5rem;\n\tfont-weight: 700;\n\tline-height: 1;\n\tcolor: #000;\n\ttext-shadow: 0 1px 0 #fff;\n\tcursor: pointer;\n\tmargin: 0;\n\tmin-height: auto;\n}\n\n.cli-modal .cli-close:focus {\n\toutline: 0;\n}\n\n.cli-switch {\n\tdisplay: inline-block;\n\tposition: relative;\n\tmin-height: 1px;\n\tpadding-left: 70px;\n\tfont-size: 14px;\n}\n\n.cli-switch input[type=\"checkbox\"] {\n\tdisplay: none;\n}\n\n.cli-switch .cli-slider {\n\tbackground-color: #e3e1e8;\n\theight: 24px;\n\twidth: 50px;\n\tbottom: 0;\n\tcursor: pointer;\n\tleft: 0;\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n\ttransition: .4s;\n}\n\n.cli-switch .cli-slider:before {\n\tbackground-color: #fff;\n\tbottom: 2px;\n\tcontent: \"\";\n\theight: 20px;\n\tleft: 2px;\n\tposition: absolute;\n\ttransition: .4s;\n\twidth: 20px;\n}\n\n.cli-switch input:checked+.cli-slider {\n\tbackground-color: #57c49f\n}\n\n.cli-switch input:checked+.cli-slider:before {\n\ttransform: translateX(26px);\n}\n\n.cli-switch .cli-slider {\n\tborder-radius: 34px;\n}\n\n.cli-switch .cli-slider:before {\n\tborder-radius: 50%;\n}\n\n.cli-tab-content {\n\tbackground: #ffffff;\n}\n\n.cli-tab-content>.cli-tab-pane {\n\tdisplay: none;\n}\n\n.cli-tab-content>.cli-active {\n\tdisplay: block;\n}\n\n.cli-fade {\n\ttransition: opacity .15s linear;\n}\n\n.cli-nav-pills {\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-wrap: wrap;\n\tflex-wrap: wrap;\n\tpadding-left: 0;\n\tmargin-bottom: 0;\n\tlist-style: none;\n\t-ms-flex-direction: column;\n\tflex-direction: column;\n\tmargin: 0;\n}\n\n.cli-nav-pills,\n.cli-tab-content {\n\twidth: 100%;\n\tpadding: 30px;\n}\n\n.cli-nav-pills {\n\tbackground: #f3f3f3;\n}\n\n.cli-nav-pills .cli-nav-link {\n\tborder: 1px solid #57c49f;\n\tmargin-bottom: 10px;\n\tcolor: #57c49f;\n\tfont-size: 14px;\n\tdisplay: block;\n\tpadding: .5rem 1rem;\n\tborder-radius: .25rem;\n\tcursor: pointer;\n}\n\n.cli-nav-pills .cli-nav-link.cli-active,\n.cli-nav-pills .cli-show>.cli-nav-link {\n\tbackground-color: #57c49f;\n\tborder: 1px solid #57c49f;\n}\n\n.cli-nav-pills .cli-nav-link.cli-active {\n\tcolor: #ffffff;\n\tcursor: initial;\n}\n\n.cli-tab-content p {\n\tcolor: #343438;\n\tfont-size: 14px;\n\tmargin-top: 0;\n}\n\n.cli-tab-content h4 {\n\tfont-size: 20px;\n\tmargin-bottom: 1.5rem;\n\tmargin-top: 0;\n\tfont-family: inherit;\n\tfont-weight: 500;\n\tline-height: 1.2;\n\tcolor: inherit;\n}\n\n@keyframes slide-up {\n\t0% {\n\t\topacity: 0;\n\t\ttransform: translateY(20px);\n\t}\n\t100% {\n\t\topacity: 1;\n\t\ttransform: translateY(0);\n\t}\n}\n\n@keyframes slide-down {\n\t0% {\n\t\topacity: 0;\n\t\ttransform: translateY(-20px);\n\t}\n\t100% {\n\t\topacity: 1;\n\t\ttransform: translateY(0);\n\t}\n}"}},"settingsPopup":{"categories":[{"type":1,"name":"Necessary Cookies","description":"These are the essential cookies which are required for the website to function properly","order":1,"defaultConsent":1,"headScript":[],"bodyScript":[]},{"type":2,"name":"Non Necessary Cookies","description":"These cookies are optional","order":1,"defaultConsent":1,"headScript":["<script>\n                  window.dataLayer = window.dataLayer || [];\n                  function gtag(){dataLayer.push(arguments);}\n                  gtag('js', new Date());                \n                  gtag('config', 'GA_TRACKING_ID');\n                <\/script>"],"bodyScript":[]}],"privacyPolicy":{"title":"Privacy Policy","text":"This is our privacy policy"}},"cookies":[{"id":862,"cookie_id":"_gat_gtag_UA_57887000_7","description":null,"type":0,"duration":"1 minute","domain":".danadiotte.com","website_id":450,"created_at":"2018-12-12 03:26:39","updated_at":"2018-12-12 03:26:39"},{"id":863,"cookie_id":"_gid","description":null,"type":0,"duration":"1 day","domain":".danadiotte.com","website_id":450,"created_at":"2018-12-12 03:26:39","updated_at":"2018-12-12 03:26:39"},{"id":864,"cookie_id":"_ga","description":null,"type":0,"duration":"2 years","domain":".danadiotte.com","website_id":450,"created_at":"2018-12-12 03:26:39","updated_at":"2018-12-12 03:26:39"}]}
var css=cliConfig.consentBar.selectedTemplate.css;css=css+cliConfig.consentBar.selectedTemplate.customcss;var head=document.head||document.getElementsByTagName('head')[0];var body=document.body||document.getElementsByTagName('body')[0];var style=document.createElement('style');style.type='text/css';style.setAttribute('id','cli-customized-style');if(style.styleSheet){style.styleSheet.cssText=css;}
else{style.appendChild(document.createTextNode(css));}
document.head.appendChild(style);if(cliConfig.consentBar.display){var ACCEPT_COOKIE_EXPIRE=365;var Cookie={set:function(name,value,days){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString();}
else var expires="";var cliCookie=name+"="+value+expires+"; path=/";document.cookie=cliCookie;},read:function(cname){var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return"";},erase:function(name){this.set(name,"",-1);},exists:function(name){return(this.read(name)!==null);}};var cliConsent=Cookie.read("cli-consent");generateCliBannerAndPopup=function(){var consentBar='\
                    <div class="cli-consent-bar" id="cliConsent" style="\
                        background-color:'+cliConfig.consentBar.bg+';\
                        color:'+cliConfig.consentBar.color+';\
                        top:'+cliConfig.consentBar.position.top+';\
                        bottom:'+cliConfig.consentBar.position.bottom+';\
                        left:'+cliConfig.consentBar.position.left+';\
                        right:'+cliConfig.consentBar.position.right+';\
                    ">\
                        <p id="cliConsentBarText">'
+cliConfig.consentBar.text+'</p>\
                        <div class="cli-consent-btn-wrapper"></div>\
                    </div>\
                    ';var acceptButton='<button class="cli-btn cli-btn-accept" id="cliAcceptButton" onclick="cliAcceptCookies()" style=\
                            "background-color:'+cliConfig.consentBar.buttons.accept.bg+';\
                            color:'+cliConfig.consentBar.buttons.accept.color+';\
                            border-color:'+cliConfig.consentBar.buttons.accept.borderColor+'\
                        ">'
+cliConfig.consentBar.buttons.accept.label+'</button>';var settingsButton='<button class="cli-btn cli-btn-settings" id="cliSettingsPopupButton" onclick="generateCliSettingsPopup()" style=\
                            "background-color:'+cliConfig.consentBar.buttons.settings.bg+';\
                            color:'+cliConfig.consentBar.buttons.settings.color+';\
                            border-color:'+cliConfig.consentBar.buttons.settings.borderColor+'\
                        ">'
+cliConfig.consentBar.buttons.settings.label+'</button>';var rejectButton='<button class="cli-btn cli-btn-reject" id="cliRejectButton" onclick="cliRejectCookies()" style=\
                            "background-color:'+cliConfig.consentBar.buttons.reject.bg+';\
                            color:'+cliConfig.consentBar.buttons.reject.color+';\
                            border-color:'+cliConfig.consentBar.buttons.reject.borderColor+'\
                        ">'
+cliConfig.consentBar.buttons.reject.label+'</button>';var readMoreButton='<a class="cli-read-more-link" id="cliReadMoreButton" href='+cliConfig.consentBar.buttons.readMore.link+' style=\
                            "color:'+cliConfig.consentBar.buttons.readMore.color+'">'
+cliConfig.consentBar.buttons.readMore.label+'</a>';body.insertAdjacentHTML('beforeend',consentBar);if(cliConfig.consentBar.type==="banner"){if(cliConfig.consentBar.position.top==="0"){document.getElementById('cliConsent').style.borderBottom="1px solid"+cliConfig.consentBar.borderColor;document.getElementById('cliConsent').style.animation="slide-down 0.4s ease";}
if(cliConfig.consentBar.position.bottom==="0"){document.getElementById('cliConsent').style.borderTop="1px solid"+cliConfig.consentBar.borderColor;document.getElementById('cliConsent').style.animation="slide-up 0.4s ease";}}
if(cliConfig.consentBar.type==="box"){document.getElementById('cliConsent').style.border="1px solid"+cliConfig.consentBar.borderColor;if(cliConfig.consentBar.position.top==="0"){document.getElementById('cliConsent').style.animation="slide-down 0.4s ease";}
if(cliConfig.consentBar.position.bottom==="0"){document.getElementById('cliConsent').style.animation="slide-up 0.4s ease";}}
var consentButtonWrapperElement=document.getElementById('cliConsent').getElementsByClassName('cli-consent-btn-wrapper')[0];var consentBannerTextElement=document.getElementById('cliConsent').getElementsByTagName('p')[0];if(JSON.parse(cliConfig.consentBar.buttons.readMore.display)){consentBannerTextElement.insertAdjacentHTML('beforeend',readMoreButton);}
if(JSON.parse(cliConfig.consentBar.buttons.reject.display)){consentButtonWrapperElement.insertAdjacentHTML('beforeend',rejectButton);}
if(JSON.parse(cliConfig.consentBar.buttons.settings.display)){consentButtonWrapperElement.insertAdjacentHTML('beforeend',settingsButton);}
consentButtonWrapperElement.insertAdjacentHTML('beforeend',acceptButton);var settingsPopupOverlay='<div class="cli-modal-backdrop cli-fade"></div>'
var settingsPopup='\
            <div class="cli-modal cli-fade" id="cliSettingsPopup" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">\
                <div class="cli-modal-dialog" role="document">\
                    <div class="cli-modal-content">\
                        <button type="button" class="cli-close" id="cliModalClose" onclick="closeCliModal()">\
                            <span aria-hidden="true">&times;</span>\
                        </button>\
                        <div class="cli-modal-body">\
                            <div class="cli-container-fluid">\
                                <div class="cli-row">\
                                    <div class="cli-col-4 cli-d-flex cli-align-items-stretch cli-px-0">\
                                        <ul class="cli-nav-pills" id="cliSettingsTab" role="tablist" aria-orientation="vertical">\
                                            <li class="cli-nav-link cli-active" id="privacy-tab" data-toggle="cli-pill" tab-target="privacy">\
                                            '+cliConfig.settingsPopup.privacyPolicy.title+'\
                                            </li>\
                                        </ul>\
                                    </div>\
                                    <div class="cli-col-8 cli-d-flex cli-align-items-stretch cli-px-0">\
                                        <div class="cli-tab-content" id="cliSettingsTabContent">\
                                            <div class="cli-tab-pane cli-fade cli-show cli-active" id="privacy" role="tabpanel">\
                                                <h4>'+cliConfig.settingsPopup.privacyPolicy.title+'</h4>\
                                                <p>'+cliConfig.settingsPopup.privacyPolicy.text+'</p>\
                                            </div>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>';body.insertAdjacentHTML('beforeend',settingsPopupOverlay);body.insertAdjacentHTML('beforeend',settingsPopup);for(var i=0;i<cliConfig.settingsPopup.categories.length;i++){var categoryItem=cliConfig.settingsPopup.categories[i];var categoryTab='<li class="cli-nav-link" data-toggle="cli-pill" role="tab" tab-target="category'+i+'">'
+categoryItem.name+'</li>';document.getElementById('cliSettingsTab').insertAdjacentHTML('beforeend',categoryTab);var categoryTabContent='\
                <div class="cli-tab-pane cli-fade" id="category'+i+'" role="tabpanel">\
                    <h4>'+categoryItem.name+'</h4>\
                    <p>'+categoryItem.description+'</p>\
                    <div class="cli-switch-wrapper">\
                    </div>\
                </div>'
document.getElementById('cliSettingsTabContent').insertAdjacentHTML('beforeend',categoryTabContent);if(categoryItem.type!==1){var cookieStatus=Cookie.read('cookielawinfo-'+categoryItem.name);var cliSwitchStatus;if(cookieStatus===''){if(categoryItem.defaultConsent){cliSwitchStatus="checked";}}
else{if(cookieStatus==="yes"){cliSwitchStatus="checked";}
else{cliSwitchStatus='';}}
var categoryCheckbox='\
                    <label class="cli-switch" for="checkbox-category'+i+'">\
                        <input type="checkbox" id="checkbox-category'+i+'" '+cliSwitchStatus+'/>\
                        <div class="cli-slider"></div>\
                            Save these cookies\
                    </label>';document.getElementById("category"+i+"").getElementsByClassName("cli-switch-wrapper")[0].insertAdjacentHTML('beforeend',categoryCheckbox);}}
generateCliSettingsPopup=function(){document.getElementById('cliSettingsPopup').className+=' cli-show';body.className+=" cli-modal-open";document.getElementsByClassName("cli-modal-backdrop")[0].classList.add("cli-show");var cliTabs=document.querySelectorAll('[data-toggle="cli-pill"]');for(var i=0;i<cliTabs.length;i++){cliTabs[i].onclick=function(){document.getElementsByClassName("cli-nav-pills")[0].getElementsByClassName("cli-active")[0].classList.remove("cli-active");this.classList.add("cli-active");document.getElementsByClassName("cli-tab-content")[0].getElementsByClassName("cli-active cli-show")[0].classList.remove("cli-active","cli-show");var tabId=this.getAttribute("tab-target");document.getElementById(tabId).className+=' cli-active cli-show';}}};closeCliModal=function(){document.getElementById('cliSettingsPopup').classList.remove("cli-show");document.body.classList.remove("cli-modal-open");document.getElementsByClassName("cli-modal-backdrop")[0].classList.remove("cli-show");}
document.getElementById('cliSettingsPopup').addEventListener('click',function(e){if(!(document.getElementsByClassName('cli-modal-dialog')[0].contains(e.target))){closeCliModal();}});cliAcceptCookies=function(){Cookie.set('cli-consent','yes',ACCEPT_COOKIE_EXPIRE);for(var i=0;i<cliConfig.settingsPopup.categories.length;i++){if(cliConfig.settingsPopup.categories[i].type!==1){var cliSwitch=document.getElementById("checkbox-category"+i+"");var cliItemToSave=cliConfig.settingsPopup.categories[i];if(cliSwitch.checked){Cookie.set('cookielawinfo-'+cliItemToSave.name,'yes',ACCEPT_COOKIE_EXPIRE);}
else{Cookie.set('cookielawinfo-'+cliItemToSave.name,'no',ACCEPT_COOKIE_EXPIRE);}}}
if(typeof cliLogCookies!=="undefined"){cliLogCookies();}
location.reload();}
cliRejectCookies=function(){Cookie.set('cli-consent','no',ACCEPT_COOKIE_EXPIRE);if(typeof cliLogCookies!=="undefined"){cliLogCookies();}
location.reload();}
if(document.getElementById("cliConsentBarTrigger")){body.removeChild(document.getElementById("cliConsentBarTrigger"));}}
if(cliConsent===''){generateCliBannerAndPopup();}
else{var cliConsentBarTrigger='<div class="cli-consent-bar-trigger" id="cliConsentBarTrigger" onclick="generateCliBannerAndPopup()" style="\
            background-color:'+cliConfig.consentBar.bg+';\
            color:'+cliConfig.consentBar.color+';\
            top:'+cliConfig.consentBar.position.top+';\
            bottom:'+cliConfig.consentBar.position.bottom+';\
            left:'+cliConfig.consentBar.position.left+';\
            right:'+cliConfig.consentBar.position.right+';\
            ">Privacy and cookie policy</div>';body.insertAdjacentHTML('beforeend',cliConsentBarTrigger);}}
var insertScripts=function(category){if(category.headScript.length){for(var k=0;k<category.headScript.length;k++){var scriptItem=new DOMParser().parseFromString(category.headScript[k],'text/xml');var scriptContent=scriptItem.getElementsByTagName('script')[0].innerHTML;var script=document.createElement('script');script.innerHTML=scriptContent;document.head.appendChild(script);}}
if(category.bodyScript.length){for(var k=0;k<category.bodyScript.length;k++){var scriptItem=new DOMParser().parseFromString(category.bodyScript[k],'text/xml');var scriptContent=scriptItem.getElementsByTagName('script')[0].innerHTML;var script=document.createElement('script');script.innerHTML=scriptContent;document.body.appendChild(script);}}}
var checkAndInsertScripts=function(categories){for(var i=0;i<categories.length;i++){var category=categories[i];var cookieStatus=Cookie.read('cookielawinfo-'+category.name);if(category.type===1){insertScripts(category);}
else{if(cliConsent==='yes'){if(cookieStatus==='yes'){insertScripts(category);}}}}}
checkAndInsertScripts(cliConfig.settingsPopup.categories);var createCookieAuditTable=function(cookies){var tableElements=document.getElementsByClassName('cli-cookie-audit-table-element');if(tableElements.length){for(var i=0;i<tableElements.length;i++){var auditTable='<table id="cookie-audit-table'+i+'">\
                    <thead>\
                        <tr>\
                            <th>\
                                Cookie\
                            </th>\
                            <th>\
                                Type\
                            </th>\
                            <th>\
                                Duration\
                            </th>\
                            <th>\
                                Description\
                            </th>\
                        </tr>\
                    </thead>\
                    <tbody>\
                    <tbody>\
                </table>';tableElements[i].insertAdjacentHTML('beforeend',auditTable);var auditTableContent=[];for(var j=0;j<cookies.length;j++){var auditTableRow='<tr>\
                                            <td>'
+cookies[j].cookie_id+'</td>\
                                            <td>'
+cookies[j].category+'</td>\
                                            <td>'
+cookies[j].duration+'</td>\
                                            <td>'
+cookies[j].description+'</td>\
                                        </tr>';document.getElementById("cookie-audit-table"+i+"").insertAdjacentHTML('beforeend',auditTableRow);}}}}
createCookieAuditTable(cliConfig.cookies);})(window);