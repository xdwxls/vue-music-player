webpackJsonp([1,2],{34:function(t,i,s){s(39);var o=s(36)(s(80),s(37),null,null);t.exports=o.exports},37:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"header",style:{backgroundColor:t.skinColor}},[s("div",{staticClass:"add-icon",on:{click:function(i){t.isShowAdd=!t.isShowAdd}}},[s("img",{staticClass:"icon",attrs:{src:"http://omratag7g.bkt.clouddn.com/add.png",alt:"microzz.com"}})]),t._v(" "),s("div",{staticClass:"music-title"},[s("p",[t._v(t._s(t.musicTitle))])]),t._v(" "),s("div",{staticClass:"list-icon"},[s("img",{staticClass:"icon",attrs:{src:"http://omratag7g.bkt.clouddn.com/Category.png",alt:"microzz.com"},on:{click:function(i){t.isShowList=!t.isShowList}}})])]),t._v(" "),s("div",{staticClass:"content",on:{click:function(i){i.stopPropagation(),i.preventDefault(),t.isShowList=!1}}},[s("audio",{attrs:{src:t.musicSrc,preload:""}},[t._v("\n      Your browser does not support the audio element.\n    ")]),t._v(" "),s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowAdd,expression:"isShowAdd"}],staticClass:"add-music"},[s("div",{staticClass:"form"},[s("div",{staticClass:"input-music-name input"},[s("label",{attrs:{for:"music-name"}},[t._v("歌曲名称")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.newMusicName,expression:"newMusicName",modifiers:{trim:!0}}],attrs:{id:"music-name",type:"text",placeholder:"请输入要显示的歌曲名(必填)"},domProps:{value:t.newMusicName},on:{input:function(i){i.target.composing||(t.newMusicName=i.target.value.trim())},blur:function(i){t.$forceUpdate()}}}),t._v(" "),s("img",{attrs:{src:"http://omratag7g.bkt.clouddn.com/del2.png",alt:"microzz.com"},on:{click:function(i){i.stopPropagation(),i.preventDefault(),t.newMusicName=""}}})]),t._v(" "),s("div",{staticClass:"input-music-src input"},[s("label",{attrs:{for:"music-src"}},[t._v("歌曲链接")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.newMusicSrc,expression:"newMusicSrc",modifiers:{trim:!0}}],attrs:{id:"music-src",type:"text",placeholder:"请输入歌曲超链接(必填)"},domProps:{value:t.newMusicSrc},on:{input:function(i){i.target.composing||(t.newMusicSrc=i.target.value.trim())},blur:function(i){t.$forceUpdate()}}}),t._v(" "),s("img",{attrs:{src:"http://omratag7g.bkt.clouddn.com/del2.png",alt:"microzz.com"},on:{click:function(i){i.stopPropagation(),i.preventDefault(),t.newMusicSrc=""}}})]),t._v(" "),s("div",{staticClass:"input-music-img-src input"},[s("label",{attrs:{for:"music-img-src"}},[t._v("照片链接")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.newMusicImgSrc,expression:"newMusicImgSrc",modifiers:{trim:!0}}],attrs:{id:"music-img-src",type:"text",placeholder:"请输入歌曲写真照片链接"},domProps:{value:t.newMusicImgSrc},on:{input:function(i){i.target.composing||(t.newMusicImgSrc=i.target.value.trim())},blur:function(i){t.$forceUpdate()}}}),t._v(" "),s("img",{attrs:{src:"http://omratag7g.bkt.clouddn.com/del2.png",alt:"microzz.com"},on:{click:function(i){i.stopPropagation(),i.preventDefault(),t.newMusicImgSrc=""}}})]),t._v(" "),s("div",{staticClass:"input-btn input"},[s("button",{on:{click:function(i){i.stopPropagation(),i.preventDefault(),t.addMusic(i)}}},[t._v("添加音乐")]),t._v(" "),s("button",{on:{click:function(i){i.stopPropagation(),i.preventDefault(),t.isShowAdd=!1}}},[t._v("取消操作")])])])])]),t._v(" "),s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowList,expression:"isShowList"}],staticClass:"music-list"},[s("ul",t._l(t.musics,function(i,o){return s("li",{class:{activeColor:i.src===(t.DOM.audio&&t.DOM.audio.src)},on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.toggleMusic(i,o)}}},[t._v("\n            "+t._s(i.name)+"\n            "),s("img",{attrs:{src:"http://omratag7g.bkt.clouddn.com/%E5%88%A0%E9%99%A4.png",alt:"microzz.com"},on:{click:function(i){i.stopPropagation(),i.preventDefault(),t.delMusic(o)}}})])}))])]),t._v(" "),s("transition",{attrs:{name:"fade"}},[t.isShowMsg?s("div",{staticClass:"msg"},[s("img",{attrs:{src:"http://omratag7g.bkt.clouddn.com/%E6%8F%90%E7%A4%BA.png",alt:"microzz.com"}}),t._v(" "),s("p",[t._v(t._s(t.msg))])]):t._e()]),t._v(" "),s("div",{staticClass:"bg-img"},[s("img",{attrs:{src:t.musicImgSrc,alt:"microzz.com"}})]),t._v(" "),s("div",{staticClass:"content-header"}),t._v(" "),s("div",{staticClass:"img"},[s("img",{staticClass:"rotateImg",class:{imgAnimate:t.isImgAnimate},attrs:{src:t.musicImgSrc,alt:"microzz.com"}})]),t._v(" "),s("div",{staticClass:"content-footer"}),t._v(" "),s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowColor,expression:"isShowColor"}],staticClass:"select-skin",on:{"!click":function(i){t.isShowColor=!1}}},[s("div",{staticClass:"one",class:{borderStyle:"#B72712"==t.skinColor},on:{click:function(i){i.stopPropagation(),i.preventDefault(),t.skinColor="#B72712"}}}),t._v(" "),s("div",{staticClass:"two",class:{borderStyle:"#1565C0"==t.skinColor},on:{click:function(i){i.stopPropagation(),i.preventDefault(),t.skinColor="#1565C0"}}}),t._v(" "),s("div",{staticClass:"three",class:{borderStyle:"#212121"==t.skinColor},on:{click:function(i){i.stopPropagation(),i.preventDefault(),t.skinColor="#212121"}}}),t._v(" "),s("div",{staticClass:"four",class:{borderStyle:"#1B5E20"==t.skinColor},on:{click:function(i){i.stopPropagation(),i.preventDefault(),t.skinColor="#1B5E20"}}})])]),t._v(" "),s("img",{staticClass:"skin",attrs:{src:t.skinSrc,alt:"microzz.com"},on:{click:function(i){i.stopPropagation(),i.preventDefault(),t.isShowColor=!t.isShowColor}}})],1),t._v(" "),s("div",{staticClass:"footer",style:{backgroundColor:t.skinColor}},[s("div",{staticClass:"prev"},[s("img",{staticClass:"icon",attrs:{src:"http://omratag7g.bkt.clouddn.com/music_rewind_button.png",alt:"microzz.com"},on:{click:t.toPrev}})]),t._v(" "),s("div",{staticClass:"start-pause"},[s("img",{staticClass:"icon",attrs:{src:t.playBtnSrc,alt:"microzz.com"},on:{click:t.startPause}})]),t._v(" "),s("div",{staticClass:"next"},[s("img",{staticClass:"icon",attrs:{src:"http://omratag7g.bkt.clouddn.com/music_fastforward_button.png",alt:"microzz.com"},on:{click:t.toNext}})])])])},staticRenderFns:[]}},39:function(t,i){},80:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=s(79),c=s.n(o),a=s(78),n=s.n(a),e=s(81),r=s(82);i.default={name:"app",mounted:function(){var t=this;this.DOM={audio:document.querySelector("audio"),rotateImg:document.querySelector(".rotateImg")},this.musicSrc=this.musics[this.index].src,this.musicTitle=this.musics[this.index].name,this.musicImgSrc=this.musics[this.index].musicImgSrc||this.musicSrcDefault,this.DOM.audio.addEventListener("ended",function(){t.toChange("next").then(t.toAnimate)}),0===r.a.fetch("musics").length&&r.a.save(this.musics)},data:function(){return{musicTitle:"",playBtnSrc:"http://omratag7g.bkt.clouddn.com/music_play_button.png",DOM:{},musicImgSrc:"",musics:r.a.fetch("musics").length?r.a.fetch("musics"):n()([],e.a),index:0,musicSrc:"",isImgAnimate:!1,isShowList:!1,isShowMsg:!1,isShowColor:!1,changeFlag:"",musicSrcDefault:"http://omratag7g.bkt.clouddn.com/music-bg.jpg",isShowAdd:!1,newMusicName:"",newMusicSrc:"",newMusicImgSrc:"",msg:"",skinSrc:"http://omratag7g.bkt.clouddn.com/%E7%9A%AE%E8%82%A4%20%281%29.png",skinColor:localStorage.skinColor?localStorage.skinColor:"#B72712"}},watch:{musics:{handler:function(t){r.a.save(t)},deep:!0},skinColor:{handler:function(t){localStorage.setItem("skinColor",t)}},isShowColor:{handler:function(t){this.skinSrc=t?"http://omratag7g.bkt.clouddn.com/%E7%9A%AE%E8%82%A4.png":"http://omratag7g.bkt.clouddn.com/%E7%9A%AE%E8%82%A4%20%281%29.png"}}},methods:{showMsg:function(t){var i=this;this.msg=t,this.isShowMsg=!0,setTimeout(function(){i.isShowMsg=!1},2e3)},addMusic:function(){if(!this.newMusicName||!this.newMusicSrc)return void this.showMsg("请填写完整信息哦😜");if(!/^(https?).*(mp3|ogg|m4a)$/i.test(this.newMusicSrc))return void this.showMsg("你的音乐链接可能无效哦,请重新输入");var t={name:this.newMusicName,src:this.newMusicSrc,musicImgSrc:this.newMusicImgSrc||this.musicSrcDefault};this.musics.push(t),this.isShowAdd=!1,this.newMusicName="",this.newMusicSrc="",this.newMusicImgSrc="",this.showMsg("添加音乐成功😄")},delMusic:function(t){var i=this;if(confirm("确认删除吗？")){if(this.musics.splice(t,1),0===this.musics.length)return this.musicTitle="没有歌曲啦 💔",this.DOM.audio.autoplay=!1,this.DOM.audio.pause(),this.isImgAnimate=!1,this.playBtnSrc="http://omratag7g.bkt.clouddn.com/music_play_button.png",this.DOM.rotateImg.style.animationPlayState="paused",this.musicImgSrc=this.musicSrcDefault,void this.showMsg("赶紧添加几首音乐吧😄");t==this.index&&(this.index--,this.DOM.audio.paused?this.toNext().then(function(){setTimeout(function(){i.DOM.audio.autoplay=!1,i.DOM.audio.pause(),i.isImgAnimate=!1,i.playBtnSrc="http://omratag7g.bkt.clouddn.com/music_play_button.png",i.DOM.rotateImg.style.animationPlayState="paused"},0)}):this.toNext())}},toggleMusic:function(t,i){this.index=i,this.musicTitle=t.name,this.musicSrc=t.src,this.musicImgSrc=t.musicImgSrc||this.musicSrcDefault,this.DOM.audio.autoplay=!0,this.isImgAnimate=!0,this.playBtnSrc="http://omratag7g.bkt.clouddn.com/music_pause_button.png",this.DOM.audio.play(),this.toAnimate(),this.isShowList=!1},toAnimate:function(){var t=this;this.isImgAnimate=!1,setTimeout(function(){t.isImgAnimate=!0,t.DOM.rotateImg.style.animationPlayState="running"},0)},toChange:function(t){var i=this;return new c.a(function(s,o){"prev"===t?(i.index-=1,i.index=i.index<0?i.musics.length-1:i.index):(i.index+=1,i.index=i.index>i.musics.length-1?0:i.index),i.musicSrc=i.musics[i.index].src,i.playBtnSrc="http://omratag7g.bkt.clouddn.com/music_pause_button.png",i.DOM.audio.autoplay=!0,i.musicTitle=i.musics[i.index].name,i.musicImgSrc=i.musics[i.index].musicImgSrc||i.musicSrcDefault,s()})},toPrev:function(){this.toChange("prev").then(this.toAnimate)},startPause:function(){this.playBtnSrc=this.DOM.audio.paused?"http://omratag7g.bkt.clouddn.com/music_pause_button.png":"http://omratag7g.bkt.clouddn.com/music_play_button.png",this.DOM.audio.paused?this.DOM.audio.play():this.DOM.audio.pause(),this.DOM.rotateImg.style.animationPlayState=this.DOM.audio.paused?"paused":"running",this.isImgAnimate=!0},toNext:function(){var t=this;return new c.a(function(i,s){t.toChange("next").then(t.toAnimate).then(i)})}},components:{}}},81:function(t,i,s){"use strict";var o=[{name:"以冬 - 我的一个道姑朋友",src:"http://m2.music.126.net/7WiRhPdirEJ2axW9Xm6uJQ==/1415071481819545.mp3",musicImgSrc:"http://omratag7g.bkt.clouddn.com/%E6%B0%91%E8%B0%A3.jpg"},{name:"任素汐 - 我要你",src:"http://m2.music.126.net/WhBIiLKYNa84TF3p5xx2FQ==/3265549607332004.mp3",musicImgSrc:"http://omratag7g.bkt.clouddn.com/%E6%88%91%E8%A6%81%E4%BD%A0.jpg"},{name:"赵雷 - 成都",src:"http://m2.music.126.net/7o5D4dA6271VktgawcbZFA==/18665309393829604.mp3",musicImgSrc:"http://omratag7g.bkt.clouddn.com/%E8%B5%B5%E9%9B%B7.jpg"},{name:"韩安旭 - 多幸运",src:"http://m2.music.126.net/N_2fJbqpi8QDnV1YJPCsuw==/3424978721721344.mp3",musicImgSrc:"http://omratag7g.bkt.clouddn.com/%E9%9F%A9%E5%AE%89%E6%97%AD.jpg"},{name:"赵雷 - 理想",src:"http://m2.music.126.net/gQDmHxjY_gAtRE-RKqDQJw==/1413971968361530.mp3",musicImgSrc:"http://omratag7g.bkt.clouddn.com/%E8%B5%B5%E9%9B%B7.jpg"},{name:"艾索 - 晚安喵",src:"http://m2.music.126.net/DheCicOCS6OGtFq0G04O7Q==/5976945209191418.mp3",musicImgSrc:"http://omratag7g.bkt.clouddn.com/%E6%99%9A%E5%AE%89%E5%96%B5.jpg"},{name:"李健 - 假如爱有天意",src:"http://m2.music.126.net/sOdeUJ8DrQJpbJjjVogKuw==/7957165651997665.mp3",musicImgSrc:"http://omratag7g.bkt.clouddn.com/%E6%9D%8E%E5%81%A5.jpg"},{name:"七月上",src:"http://m2.music.126.net/K1SFXCvWf8BO9VEpSvx2ew==/7967061257205150.mp",musicImgSrc:"http://omratag7g.bkt.clouddn.com/%E4%B8%83%E6%9C%88%E4%B8%8A.jpg"},{name:"咱们屯里人(粤语版)",src:"http://m2.music.126.net/XbGWv4O15b0c1-w4pCtwgA==/3300733908037356.mp3",musicImgSrc:"http://omratag7g.bkt.clouddn.com/%E5%A4%8F%E6%B4%9B%E7%89%B9%E7%83%A6%E6%81%BC.jpg"}];i.a=o},82:function(t,i,s){"use strict";var o=s(77),c=s.n(o),a="musics";i.a={fetch:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return JSON.parse(window.localStorage.getItem(t)||"[]")},save:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;window.localStorage.setItem(i,c()(t))}}},83:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=s(35),c=s(34),a=s.n(c);o.a.config.productionTip=!1,new o.a({el:"#app",template:"<App/>",components:{App:a.a}})}},[83]);
//# sourceMappingURL=app.5aff111fb6808abcc43a.js.map