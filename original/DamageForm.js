/*@cc_on if (@_jscript_version < 9) {_d=document;eval('var document=_d');}@*/
var DamageForm = (function (){
//ŒÅ’è
var ckFull = location.pathname.indexOf("damageT") >= 0;
var BR = ckFull ? "<br>" : "";
var ckOpera = /*@if (@_jscript_version >= 9) true @else@*/ !!window.opera || /chrome/i.test(navigator.userAgent) /*@end@*/;
var aName = 0,aAt = 1,aZoku = 2,aZokuAt = 3,aZyou = 4,aZyouAt = 5,aCri = 6,aRare = 7,aRst = 8,aSlot = 9,aDef = 10,aHR = 11,aCre = 12,aType = 13,aSpec = 14,aKick = 15,aRelo = 16,aGun = 17;
var sRef1 = 0 ,sRef2 = 1, sZeny = 2, sCre = 3, sRep = 4;
var bukiId = ["taiken","heavy","hammer","lance","katate","right","souken","tachi","horn","gunlance","yumi"];
var bukiName = ["‘åŒ•","ƒwƒrƒBƒ{ƒEƒKƒ“","ƒnƒ“ƒ}[","ƒ‰ƒ“ƒX","•ĞèŒ•","ƒ‰ƒCƒgƒ{ƒEƒKƒ“","‘oŒ•","‘¾“","ë—Â“J","ƒKƒ“ƒ‰ƒ“ƒX","‹|"];
var reloadName = ["‘•“U:’x‚¢","‘•“U:‚â‚â’x‚¢","‘•“U:•’Ê","‘•“U:‚â‚â‘¬‚¢","‘•“U:‘¬‚¢"];
var kickName = ["”½“®:Å‘å",0,"”½“®:’†","”½“®:‚â‚â¬","”½“®:¬"];
var Onpu = [0,"<span class=r>ô</span>","<span class=y>ô</span>","<span class=w>ô</span>","<span class=b>ô</span>","<span class=g>ô</span>","<span class=p>ô</span>","<span class=a>ô</span>"]
var zokuName = ["","‰ÎF","…F","—‹F","—´F","•XF","“ÅF","–ƒáƒF","‡–°F","”šŒ‚F"];
var bukiRitu = [48/*‘åŒ•*/,12/*ƒwƒ”ƒB*/,52/*ƒnƒ“ƒ}[*/,23/*ƒ‰ƒ“ƒX*/,14/*•ĞèŒ•*/,12/*ƒ‰ƒCƒg*/,14/*‘oŒ•*/,48/*‘¾“*/,52/*ë—Â“J*/,23/*ƒKƒ“ƒ‰ƒ“ƒX*/,12/*‹|*/];
var equip = [],itemS = [],wpid = "",wp_hosei = 0,wp_type = 0,motion = [],tamaP = [],yaZoku = [];
var mission =[1,,2,,2,1,2,,2,,,1,2,,2,,2,1,,2,,2,2,1,2,,,2,,1,2,,2,,,1,2,2,2,,2,1,,2,,2,2,1,2,,2,,2,1,2,,2,,2,1,,2,,2,2,1,2,,,2,,1,2,,2,2,,1,2,,2,,2,1,,2,,2,2,1,2,,,2,2,1,2,,2,,2,1,,2,,2,2,1,2,,,2,2,1,2,,2,2,,1,2,,2,,2,1,,2,,2,2,1,2,,2,,2,1,2,,2,,2,1,,2,,2,,1,2,,2,2,,1,2,,2,2,1,2,,2,,1,2,,2,1]

var setRep = function (wk){
		var Rep = "1-";
		if (!wk.c_repi.style.backgroundColor) Rep += "1i";
		if (!wk.c_rept.style.backgroundColor) Rep += "1t";
	if (!wk.c_rep2.style.backgroundColor) {
		Rep += "2-";
		if (!wk.c_repi.style.backgroundColor) Rep += "2i";
		if (!wk.c_rept.style.backgroundColor) Rep += "2t";
	}
	if (!wk.c_rep3.style.backgroundColor) {
		Rep += "3-";
		if (!wk.c_repi.style.backgroundColor) Rep += "3i";
		if (!wk.c_repg.style.backgroundColor) Rep += "3g";
		if (!wk.c_rept.style.backgroundColor) Rep += "3t";
	}
	if (!wk.c_repm.style.backgroundColor) Rep += "2m";
	if (!wk.c_repg.style.backgroundColor) Rep += "4g";
	if (!wk.c_repk.style.backgroundColor) Rep += "4k";
	if (!wk.c_rep5.style.backgroundColor) Rep += "5-";
	if (!wk.c_repp.style.backgroundColor) Rep += "5p";
	return Rep;
}
//Œ•»
var setKensyou = function (wk,betu){
	if (wk === "0" || wk === "A1") return 0;
	switch (wpid) {
	case 0: //‘åŒ•
		if (wk.charAt(0) === "9") { //”šŒ‚
			return [140,160,180][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "5") { //‘®«Œ•»
			return [50,70,90][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "8") { //ˆÙíŒ•»
			switch (wk.charAt(0)) {
			case "6": //“Å
				return [20,25,30][wk.charAt(1)-1];break;
			case "7": //–ƒáƒ
				return [18,23,28][wk.charAt(1)-1];break;
			case "8": //‡–°
				return [15,20,25][wk.charAt(1)-1];break;
			}
		}
		break;
	case 4: //•ĞèŒ•
		if (wk.charAt(0) === "9") { //”šŒ‚
			return [220,260,300][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "5") { //‘®«Œ•»
			return [35,55,75][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "8") { //ˆÙíŒ•»
			switch (wk.charAt(0)) {
			case "6": //“Å
				return [17,22,27][wk.charAt(1)-1];break;
			case "7": //–ƒáƒ
				return [17,22,27][wk.charAt(1)-1];break;
			case "8": //‡–°
				return [15,20,25][wk.charAt(1)-1];break;
			}
		}
		break;
	case 6: //‘oŒ•
		if (wk.charAt(0) === "9") { //”šŒ‚
			return betu ? [150,180,220][wk.charAt(1)-1] : [200,240,290][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "5") { //‘®«Œ•»
			return [30,40,50][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "8") { //ˆÙíŒ•»
			switch (wk.charAt(0)) {
			case "6": //“Å
			case "7": //–ƒáƒ
				return [5,8,10][wk.charAt(1)-1];break;
			case "8": //‡–°
				return [1,2,3][wk.charAt(1)-1];break;
			}
		}
		break;
	case 2: //ƒnƒ“ƒ}[
	case 8: //ë—Â“J
		if (wk.charAt(0) === "9") { //”šŒ‚
			return [120,140,160][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "5") { //‘®«Œ•»
			return [35,55,75][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "8") { //ˆÙíŒ•»
			switch (wk.charAt(0)) {
			case "6": //“Å
				return [15,20,25][wk.charAt(1)-1];break;
			case "7": //–ƒáƒ
			case "8": //‡–°
				return [13,18,23][wk.charAt(1)-1];break;
			}
		}
		break;
	case 3: //ƒ‰ƒ“ƒX
	case 9: //ƒKƒ“ƒ‰ƒ“ƒX
		if (wk.charAt(0) === "9") { //”šŒ‚
			return [130,150,170][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "5") { //‘®«Œ•»
			return [35,55,75][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "8") { //ˆÙíŒ•»
			switch (wk.charAt(0)) {
			case "6": //“Å
				return [15,20,25][wk.charAt(1)-1];break;
			case "7": //–ƒáƒ
			case "8": //‡–°
				return [13,18,23][wk.charAt(1)-1];break;
			}
		}
		break;
	case 7: //‘¾“
		if (wk.charAt(0) === "9") { //”šŒ‚
			return [140,160,180][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "5") { //‘®«Œ•»
			return [35,55,75][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "8") { //ˆÙíŒ•»
			switch (wk.charAt(0)) {
			case "6": //“Å
				return [15,20,25][wk.charAt(1)-1];break;
			case "7": //–ƒáƒ
			case "8": //‡–°
				return [13,18,23][wk.charAt(1)-1];break;
			}
		}
		break;
	}
}

var global = {
//------------------------------------‰Šú‰»----------
init : function(){
//‘Îí‘Šè
this.m_enemi = document.getElementById("m_enemi");
this.m_def = document.getElementById("m_def");
this.m_sugo = document.getElementById("m_sugo");
this.m_hc = document.getElementById("m_hc");
this.m_hc.bk = 0;
this.m_ang = document.getElementById("m_ang");
this.gou_enemi = false
//•Ší‘I‘ğ
this.s_wp = document.getElementById("s_wp");
this.s_srt1 = document.getElementById("s_srt1");
this.s_srt2 = document.getElementById("s_srt2");
this.s_slot = document.getElementById("s_slot");
this.s_hr = document.getElementById("s_hr");
this.s_rare = document.getElementById("s_rare");
this.s_rst = document.getElementById("s_rst");
this.c_rep2 = document.getElementById("c_rep2");
this.c_rep3 = document.getElementById("c_rep3");
this.c_rep5 = document.getElementById("c_rep5");
this.c_rept = document.getElementById("c_rept");
this.c_repi = document.getElementById("c_repi");
this.c_repg = document.getElementById("c_repg");
this.c_repk = document.getElementById("c_repk");
this.c_repp = document.getElementById("c_repp");
this.c_repm = document.getElementById("c_repm");
//•Šíî•ñ
this.c_Style = document.getElementById("c_Style");
this.s_guns = document.getElementById("s_guns");
this.s_fue = document.getElementById("s_fue");
this.s_yumi_G = document.getElementById("s_yumi_G");
this.s_tame = document.getElementById("s_tame");
this.s_ya = document.getElementById("s_ya");
this.s_tama_G = document.getElementById("s_tama_G");
this.s_tama = document.getElementById("s_tama");
this.s_gunAdd = document.getElementById("s_gunAdd");
this.s_gun_G = document.getElementById("s_gun_G");
this.s_reload = document.getElementById("s_reload");
this.s_kick = document.getElementById("s_kick");
//ğŒEƒXƒLƒ‹
this.gr_ken = document.getElementById("gr_ken");
this.gr_gun = document.getElementById("gr_gun");
this.c_sharp = document.getElementById("c_sharp");
this.c_kiri = document.getElementById("c_kiri");
this.c_kensyo = document.getElementById("c_kensyo");
this.c_tama = document.getElementById("c_tama");
this.c_gohu = document.getElementById("c_gohu");
this.c_tume = document.getElementById("c_tume");
this.c_mesi = document.getElementById("c_mesi");
this.c_tane = document.getElementById("c_tane");
this.c_fueAT = document.getElementById("c_fueAT");
this.c_fueZK = document.getElementById("c_fueZK");
this.c_attUp = document.getElementById("c_attUp");
this.c_criUp = document.getElementById("c_criUp");
this.c_soko = document.getElementById("c_soko");
this.c_zkUp = document.getElementById("c_zkUp");
this.c_zkUp2 = document.getElementById("c_zkUp2");
this.c_honki = document.getElementById("c_honki");
this.c_tamaUp = document.getElementById("c_tamaUp");
this.c_guns = document.getElementById("c_guns");
this.c_izyou = document.getElementById("c_izyou");
this.c_kizuna = document.getElementById("c_kizuna");
this.c_garou = document.getElementById("c_garou");
this.c_karyudo = document.getElementById("c_karyudo");
this.c_cri = document.getElementsByName("c_cri");
this.c_gou = document.getElementsByName("c_gou");
this.c_mei = document.getElementById("c_mei");
this.c_betu = document.getElementById("c_betu");
this.c_mei2 = document.getElementById("c_mei2");
this.c_betu2 = document.getElementById("c_betu2");
this.c_shoot = document.getElementById("c_shoot");
this.c_sinka = document.getElementById("c_sinka");
this.c_ya = document.getElementById("c_ya");
this.c_waza = document.getElementById("c_waza");
this.c_sr = document.getElementById("c_sr");
this.c_tr = document.getElementById("c_tr");
this.c_fw = document.getElementById("c_fw");
this.c_mission = document.getElementById("c_mission");

//“ü—Í
this.m_N = document.getElementById("m_N");
this.i_att = document.getElementById("i_att");
this.i_zoku_disp = document.getElementById("i_zoku_disp");
this.i_zoku = document.getElementById("i_zoku");
this.i_cri = document.getElementById("i_cri");
this.i_set_B = document.getElementById("i_set_B");
this.i_yumi = document.getElementById("i_yumi");
this.i_ya1 = document.getElementById("i_ya1");
this.i_ya2 = document.getElementById("i_ya2");
this.i_ya3 = document.getElementById("i_ya3");
this.i_ya4 = document.getElementById("i_ya4");
this.i_yaLv1 = document.getElementById("i_yaLv1");
this.i_yaLv2 = document.getElementById("i_yaLv2");
this.i_yaLv3 = document.getElementById("i_yaLv3");
this.i_yaLv4 = document.getElementById("i_yaLv4");
//Œ‹‰Ê
this.d_att = document.getElementById("d_att");
this.d_zoku = document.getElementById("d_zoku");
this.d_cri = document.getElementById("d_cri");
this.d_hr = document.getElementById("d_hr");
this.d_spec = document.getElementById("d_spec");
this.g_att = document.getElementById("g_att");
this.g_zoku = document.getElementById("g_zoku");
this.g_cri = document.getElementById("g_cri");
this.g_attB = document.getElementById("g_attB");
this.g_attN = document.getElementById("g_attN");
this.g_zokuN = document.getElementById("g_zokuN");
for (var i=0;i<8;i++) for (var j=0;j<12;j++) this["d"+i+j] = document.getElementById("d"+i+j);
for (var i=0;i<7;i++) for (var j=0;j<9;j++) this["m"+j+i] = document.getElementById("m"+j+i);
if (!ckFull) {
	this.c_buimei = document.getElementById("c_buimei");
/*	this.add = document.getElementsByName("add")[0];
	this.add.style.display = (window.name == "damage1") ? "inline" : "none";
	this.add.onclick = function(){
		var w = parent.document.getElementsByTagName("frameset")[0];
		w.cols+=',*';
		var element = document.createElement("frame");
		element.id = "damage5";
		element.src = "damageK.htm";
		w.appendChild(element);   
		}*/
}
//q‰æ–Ê
this.m_W = document.getElementById("m_W");
this.m_WBody = document.getElementById("m_WBody");
}
//------------------------------------ƒf[ƒ^ƒZƒbƒg----------
,setEquip : function (name,data){
equip[name]=data;
}
,setItem : function (data){
itemS=data;
}
,setSozai : function (data){
equip["sozai"]=data;
}
//------------------------------------ƒXƒ^ƒCƒ‹•Ê•\‹L----------
,Cng_Style : function(){}
//------------------------------------•ŠíŒÂ•Ê----------
,Cng_Kobetu : function(){}
//------------------------------------•ŠíŒÂ•Ê----------
,Cng_Kobetu2 : function(){}
//------------------------------------•ŠíØ‘Ö•â‘«----------
,Cng_Wp_Sub : function(){}
//------------------------------------’e----------
,Cng_Tama : function(){}
//------------------------------------SRƒXƒLƒ‹----------
,Cng_Sr : function(){
switch (wpid) {
case 2: //ƒnƒ“ƒ}[
	if (this.c_waza.selectedIndex === 1) {
		this.c_mei.innerHTML = "—­‚ßF";
		this.c_betu.options[1] = new Option("uŒ‚", 1);
		this.Cng_Kobetu = function(){}
	} else {
		this.c_mei.innerHTML = "";
		this.c_betu.length = 1;
	}
	this.c_betu.style.display = this.c_mei.innerHTML ? "inline" : "none";
	break;
}
}
//------------------------------------•ŠíƒZƒbƒg----------
,Set_Buki : function(wapon){
//this.c_srt.selectedIndex = 0;
wpid = wapon-0,this.c_mei.innerHTML = this.c_mei2.innerHTML = "",this.s_wp.length = this.c_betu.length = 1,this.c_betu2.length = 0,this.c_tane.length = 3;
this.d01.innerHTML =this.d02.innerHTML =this.d03.innerHTML =this.d04.innerHTML =this.d05.innerHTML =this.d06.innerHTML =this.d07.innerHTML =this.d08.innerHTML =this.d09.innerHTML =this.d010.innerHTML =this.d011.innerHTML = "<br>";
this.c_sinka.style.display = this.s_guns.style.display = this.s_fue.style.display = this.s_yumi_G.style.display = this.s_gun_G.style.display = "none";
this.c_fw.disabled = this.c_fw.checked = false;
this.Cng_Fw = function(){
switch (wpid) {
case 0: //‘åŒ•
case 2: //ƒnƒ“ƒ}[
case 3: //ƒ‰ƒ“ƒX
case 5: //ƒ‰ƒCƒg
case 6: //‘oŒ•
case 8: //ë—Â“J
case 10: //‹|
	this.c_fw.disabled = true;
	break;
}
};
//•\¦€–Ú‚ÌONOFF
if (wpid === 1 || wpid === 5 || wpid === 10) { //ƒKƒ“‹|—p
	this.gr_ken.style.display = "none";
	this.c_sharp.value = 3,this.c_kensyo.value = 0;
	this.c_tama.length = 1,this.c_tama.options[0] = new Option("---------------", "");
	this.c_ya.length = 0;
	this.gr_gun.style.display = ckFull ? "block" : "inline";
	this.c_ya.style.display = "none";
	this.c_tamaUp.disabled =this.c_guns.disabled =this.c_shoot.disabled = false;
	this.c_karyudo.options[4].style.backgroundColor = "";
} else { //Œ•—p
	this.gr_gun.style.display = "none";
	this.gr_ken.style.display = ckFull ? "block" : "inline";
	this.c_tamaUp.disabled = this.c_guns.disabled =this.c_shoot.disabled = true;
	this.c_karyudo.options[4].style.backgroundColor = "gray";
}
//i‚İ‚ÌØ‚è‘Ö‚¦
if (!(wpid === 1 || wpid === 5) && this.s_srt1.style.display === "none") {//Œ•‹|—p
	this.s_srt1.style.display = "inline";
	this.s_tama.style.display = this.s_gunAdd.style.display = "none";
//	this.s_srt2.style.display = "none";
	this.s_srt2.options[2].text = "‘®«";
//	this.s_srt2.style.display = "inline";
	this.c_soko.options[1].value = 15;
	if (ckFull) this.c_soko.options[1].text = this.c_soko.options[1].text.replace("|1.3”{","|1.5”{");
} else if ((wpid === 1 || wpid === 5) && this.s_srt1.style.display !== "none") {//ƒKƒ“—p
	this.s_srt1.style.display = "none";
	this.s_gunAdd.style.display = this.s_tama.style.display = "inline";
//	this.s_srt2.style.display = "none";
	this.s_srt2.options[2].text = "’e”";
//	this.s_srt2.style.display = "inline";
	this.c_soko.options[1].value = 13;
	if (ckFull) this.c_soko.options[1].text = this.c_soko.options[1].text.replace("|1.5”{","|1.3”{");
}
//SR–h‹ïƒXƒLƒ‹
if (wpid === 4 && this.c_waza.options[1].value === "120") { //•Ğè
	this.c_waza.options[1].value = "130";
	this.c_waza.options[2].value = "120";
	if (ckFull) {
		this.c_waza.options[1].text = this.c_waza.options[1].text.replace("|1.2”{","|1.3”{");
		this.c_waza.options[2].text = this.c_waza.options[2].text.replace("|1.1”{","|1.2”{");
	}
} else if (wpid !== 4 && this.c_waza.options[1].value !== "110") { //•ĞèˆÈŠO
	this.c_waza.options[1].value = "120";
	this.c_waza.options[2].value = "110";
	if (ckFull) {
		this.c_waza.options[1].text = this.c_waza.options[1].text.replace("|1.3”{","|1.2”{");
		this.c_waza.options[2].text = this.c_waza.options[2].text.replace("|1.2”{","|1.1”{");
	}
}
//•Ší–ˆ‚Ì•\‹LƒZƒbƒg
switch (wpid) {
case 0: //‘åŒ•
	this.c_mei.innerHTML = "n•”F",this.c_betu.options[1] = new Option("’†• ", 1);
	this.Cng_Kobetu = function(){}
	wp_hosei = 100,wp_type = 1;
	this.d00.innerHTML = "•Ší•â³<br>a100%";
	this.d01.innerHTML = "ca‚è<br>48";
	this.d02.innerHTML = "Ì¨Æ¯¼­‚`<br>28¥42";
	this.d03.innerHTML = "‚È‚¬•¥‚¢<br>36";
	this.d04.innerHTML = "a‚èã‚°<br>46";
	this.d05.innerHTML = "Ì¨Æ¯¼­BC<br>60";
	this.Cng_Style = function(){
		if (this.c_Style.value.charAt(0) === "’n"){
			this.d06.innerHTML = "—­a‚è‚P<br>65x110%";
			this.d07.innerHTML = "—­a‚è‚Q<br>80x120%";
			this.d08.innerHTML = "—­a‚è‚R<br>110x130%";
			this.d09.innerHTML = this.d010.innerHTML = this.d011.innerHTML = "<br>";
			motion = ["48","28|42","36","46","60","65","80","110"];
			this.Cls_Table();
		} else if (this.c_Style.value.charAt(0) === "“V"){
			this.d06.innerHTML = "ƒK[ƒh–³<br>36";
			this.d07.innerHTML = "ƒK[ƒh:1<br>85";
			this.d08.innerHTML = "ƒK[ƒh:2<br>124";
			this.d09.innerHTML = "ƒK[ƒh:3<br>170";
			motion = ["48","28|42","36","46","60","36","85","124","170"];
		} else {
			this.d06.innerHTML = "ƒK[ƒh:1<br>85";
			this.d07.innerHTML = "ƒK[ƒh:3<br>170";
			this.d08.innerHTML = "—­aã‚°‚P<br>70";
			this.d09.innerHTML = "—­aã‚°‚Q<br>85x110%";
			this.d010.innerHTML = "—­aã‚°‚R<br>120x120%";
			this.d011.innerHTML = "—­aã‚°‚S<br>150x130%";
			motion = ["48","28|42","36","46","60","85","170","70","85","120","150"];
		}
	}
	break;
case 1: //ƒwƒrƒBƒ{ƒEƒKƒ“
	this.c_mei.innerHTML = "ÊßÜ°BF",this.c_betu.options[1] = new Option("‚ ‚è", 1),this.c_betu.selectedIndex = 1;
	this.Cng_Kobetu = function(){}
	this.c_betu2.length = 0,this.c_betu2.options[0] = new Option("‚O", 95),this.c_betu2.options[1] = new Option("‚P", 115),this.c_betu2.options[2] = new Option("‚Q", 130),this.c_betu2.options[3] = new Option("‚R", 150);
	this.Cng_Kobetu2 = function(){}
case 5: //ƒ‰ƒCƒgƒ{ƒEƒKƒ“
	this.s_gun_G.style.display = "inline";
	wp_hosei = 100,wp_type = 3;
	this.d00.innerHTML = "•Ší•â³<br>’e100%";
	//•Ší‚ğ‘I‚Ô“x‚ÉÀs
	this.Cng_Wp_Sub = function(Txt){
		if (wpid === 1) this.c_mei.innerHTML = Txt[aType] === "G" || Txt[aType] === "N" || Txt[aType] === "T" ? "ÍËŞ¨BF" : "ÊßÜ°BF";
		//’e
		var w = this.c_tama,Ma = Math.abs,t = this.s_tama.value-0;
		w.length = 0;
		w.options[0] = new Option("LV1’Êí’e:" + Ma(Txt[aGun]) + "”­",0);
		w.options[1] = new Option("LV2’Êí’e:" + Ma(Txt[aGun+1]) + "”­",1);
		w.options[2] = new Option("LV3’Êí’e:" + Ma(Txt[aGun+2]) + "”­",2);
		w.options[3] = new Option("LV1ŠÑ’Ê’e:" + Ma(Txt[aGun+3]) + "”­",3);
		w.options[4] = new Option("LV2ŠÑ’Ê’e:" + Ma(Txt[aGun+4]) + "”­",4);
		w.options[5] = new Option("LV3ŠÑ’Ê’e:" + Ma(Txt[aGun+5]) + "”­",5);
		w.options[6] = new Option("LV1U’e:" + Ma(Txt[aGun+6]) + "”­",9);
		w.options[7] = new Option("LV2U’e:" + Ma(Txt[aGun+7]) + "”­",9);
		w.options[8] = new Option("LV3U’e:" + Ma(Txt[aGun+8]) + "”­",9);
		w.options[9] = new Option("LV1“ObÖ’e:" + Ma(Txt[aGun+9]) + "”­",6);
		w.options[10] = new Option("LV2“ObÖ’e:" + Ma(Txt[aGun+10]) + "”­",7);
		w.options[11] = new Option("LV3“ObÖ’e:" + Ma(Txt[aGun+11]) + "”­",8);
		w.options[12] = new Option("LV1ŠgU’e:" + Ma(Txt[aGun+12]) + "”­",10);
		w.options[13] = new Option("LV2ŠgU’e:" + Ma(Txt[aGun+13]) + "”­",10);
		w.options[14] = new Option("LV3ŠgU’e:" + Ma(Txt[aGun+14]) + "”­",10);
		for (var i=0;i<15;i++) if (Txt[aGun+i] < 0) w.options[i].style.backgroundColor = "lightpink";
		
		if (Txt[aGun+17] !=="0") w.options[w.length] = new Option("LV1“Å’e:" + Txt[aGun+17] + "”­",12),w.selectedIndex = t === 17 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+18] !=="0") w.options[w.length] = new Option("LV2“Å’e:" + Txt[aGun+18] + "”­",12),w.selectedIndex = t === 18 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+19] !=="0") w.options[w.length] = new Option("LV1–ƒáƒ’e:" + Txt[aGun+19] + "”­",12),w.selectedIndex = t === 19 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+20] !=="0") w.options[w.length] = new Option("LV2–ƒáƒ’e:" + Txt[aGun+20] + "”­",12),w.selectedIndex = t === 20 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+21] !=="0") w.options[w.length] = new Option("LV1‡–°’e:" + Txt[aGun+21] + "”­",12),w.selectedIndex = t === 21 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+22] !=="0") w.options[w.length] = new Option("LV2‡–°’e:" + Txt[aGun+22] + "”­",12),w.selectedIndex = t === 22 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+23] !=="0") w.options[w.length] = new Option("‰Î‰Š’e:" + Txt[aGun+23] + "”­",11),w.selectedIndex = t === 23 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+24] !=="0") w.options[w.length] = new Option("…—â’e:" + Txt[aGun+24] + "”­",11),w.selectedIndex = t === 24 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+25] !=="0") w.options[w.length] = new Option("“dŒ‚’e:" + Txt[aGun+25] + "”­",11),w.selectedIndex = t === 25 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+26] !=="0") w.options[w.length] = new Option("•XŒ‹’e:" + Txt[aGun+26] + "”­",11),w.selectedIndex = t === 26 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+27] !=="0") w.options[w.length] = new Option("–Å—´’e:" + Txt[aGun+27] + "”­",11),w.selectedIndex = t === 27 ? w.length-1:w.selectedIndex;
		
		if (wpid === 1 && (Txt[aType] === "G" || Txt[aType] === "T")) w.options[w.length] = new Option("”r”M’e",20);
		
		if (t && t < 17) w.selectedIndex = t;
		this.Cng_Tama();
	}
	//’e‚ğ‘I‚Ô“x‚ÉÀs
	this.Cng_Tama = function(){
		if (!this.c_tama.value) return;
		var w = this.d_spec.innerHTML;
		switch (this.c_tama.value) {
		case "9": //U’e
			this.d01.innerHTML = "LV1U’e<br>(5+…5)x3‰ñ";
			this.d02.innerHTML = "LV2U’e<br>(5+…4)x4‰ñ";
			this.d03.innerHTML = "LV3U’e<br>(5+…4)x5‰ñ";
			this.d04.innerHTML =this.d05.innerHTML =this.d06.innerHTML =this.d07.innerHTML =this.d08.innerHTML =this.d09.innerHTML = "<br>";
			tamaP = ["5|2|5","5|2|4","5|2|4"];
			//‘¬Ë‘Î‰ƒ`ƒFƒbƒN
			if (w.indexOf("LV1U’e") >= 0) this.d01.innerHTML = "<span style='color:blue'>"+this.d01.innerHTML+"<br>3”­‘¬Ë</span>",tamaP[0] = "2.5|2|2.5";
			break;
		case "10": //ŠgU’e
			this.d01.innerHTML = "LV1ŠgU’e<br>6" + BR + "([32+‰Î2]x3)";
			this.d02.innerHTML = "LV2ŠgU’e<br>6" + BR + "([32+‰Î2]x4)";
			this.d03.innerHTML = "LV3ŠgU’e<br>6" + BR + "([32+‰Î2]x5)";
			this.d04.innerHTML = "<br>" + BR + "(qŠgU)";
			this.d05.innerHTML =this.d06.innerHTML =this.d07.innerHTML =this.d08.innerHTML =this.d09.innerHTML = "<br>";
			tamaP = ["6|1|2|32","6|1|2|32","6|1|2|32"];
			break;
		case "11": //‘®«’e
			if (wpid === 1) { //ƒwƒrƒB
				this.d01.innerHTML = "‰Î‰Š’e<br><span class=fss>•Ší”{—¦</span>x0.5";
				this.d02.innerHTML = "…—â’e<br><span class=fss>•Ší”{—¦</span>x0.25" + BR + "x3‰ñ";
				this.d03.innerHTML = "“dŒ‚’e<br><span class=fss>•Ší”{—¦</span>x0.27" + BR + "x3‰ñ";
				this.d04.innerHTML = "•XŒ‹’e<br><span class=fss>•Ší”{—¦</span>x0.25" + BR + "x3‰ñ";
				this.d05.innerHTML = "–Å—´’e<br>—´F90" + BR + "x6‰ñ";
				this.d06.innerHTML =this.d07.innerHTML =this.d08.innerHTML =this.d09.innerHTML = "<br>";
				tamaP = ["1|1|50","1|2|25","1|3|27","1|5|25","1|4|90"];
			} else { //ƒ‰ƒCƒg
				this.d01.innerHTML = "‰Î‰Š’e<br><span class=fss>•Ší”{—¦</span>x0.4";
				this.d02.innerHTML = "…—â’e<br><span class=fss>•Ší”{—¦</span>x0.13" + BR + "x3‰ñ";
				this.d03.innerHTML = "“dŒ‚’e<br><span class=fss>•Ší”{—¦</span>x0.2" + BR + "x3‰ñ";
				this.d04.innerHTML = "•XŒ‹’e<br><span class=fss>•Ší”{—¦</span>x0.13" + BR + "x3‰ñ";
				this.d05.innerHTML = "–Å—´’e<br>—´F75" + BR + "x6‰ñ";
				this.d06.innerHTML =this.d07.innerHTML =this.d08.innerHTML =this.d09.innerHTML = "<br>";
				tamaP = ["1|1|40","1|2|13","1|3|20","1|5|13","1|4|75"];
				//‘¬Ë‘Î‰ƒ`ƒFƒbƒN
				if (w.indexOf("‰Î‰Š’e") >= 0) this.d01.innerHTML = "<span style='color:blue'>"+this.d01.innerHTML+"<br>5”­‘¬Ë</span>",tamaP[0] = "0.5|1|20";
				if (w.indexOf("…—â’e") >= 0) this.d02.innerHTML = "<span style='color:blue'>"+this.d02.innerHTML+"<br>3”­‘¬Ë</span>",tamaP[1] = "0.5|2|6.5";
				if (w.indexOf("“dŒ‚’e") >= 0) this.d03.innerHTML = "<span style='color:blue'>"+this.d03.innerHTML+"<br>3”­‘¬Ë</span>",tamaP[2] = "0.5|3|10";
				if (w.indexOf("•XŒ‹’e") >= 0) this.d04.innerHTML = "<span style='color:blue'>"+this.d04.innerHTML+"<br>3”­‘¬Ë</span>",tamaP[3] = "0.5|5|6.5";
			}
			break;
		case "12": //ó‘ÔˆÙí’e
			this.d01.innerHTML = "LV1“Å’e<br>10+“Å25";
			this.d02.innerHTML = "LV2“Å’e<br>15+“Å50";
			this.d03.innerHTML = "LV1–ƒáƒ’e<br>10+–ƒáƒ25";
			this.d04.innerHTML = "LV2–ƒáƒ’e<br>15+–ƒáƒ50";
			this.d05.innerHTML = "LV1‡–°’e<br>0+‡–°25";
			this.d06.innerHTML = "LV2‡–°’e<br>0+‡–°50";
			this.d07.innerHTML =this.d08.innerHTML =this.d09.innerHTML = "<br>";
			yaZoku = [25,50,25,50,25,50];
			tamaP = ["10|","15|","10|","15|","0|","0|"];
			break;
		case "20": //”r”M’e
			this.d01.innerHTML = "”r”M’e<br>22+‰Î10";
			this.d02.innerHTML = "ƒQ[ƒW<br>100";
			this.d03.innerHTML =this.d04.innerHTML =this.d05.innerHTML =this.d06.innerHTML =this.d07.innerHTML =this.d08.innerHTML =this.d09.innerHTML = "<br>";
			tamaP = ["0|1|10|22"];
			break;
		default:
			if (wpid === 1) {
				this.d01.innerHTML = ["LV1’Êí’e<br>6","LV2’Êí’e<br>12","LV3’Êí’e<br>11xn‰ñ","LV1ŠÑ’Ê’e<br>10x3‰ñ","LV2ŠÑ’Ê’e<br>9x4‰ñ","LV3ŠÑ’Ê’e<br>7x6‰ñ","LV1“Ob<br>3:‹Câ10<br>(30+‰Î40)","LV2“Ob<br>3:‹Câ10<br>(40+‰Î60)","LV3“Ob<br>3:‹Câ10<br>(50+‰Î80)"][this.c_tama.value];
			} else {
				this.d01.innerHTML = ["LV1’Êí’e<br>6","LV2’Êí’e<br>12","LV3’Êí’e<br>11xn‰ñ","LV1ŠÑ’Ê’e<br>10x3‰ñ","LV2ŠÑ’Ê’e<br>9x4‰ñ","LV3ŠÑ’Ê’e<br>7x6‰ñ","LV1“Ob<br>3:‹Câ5<br>(30+‰Î40)","LV2“Ob<br>3:‹Câ5<br>(40+‰Î60)","LV3“Ob<br>3:‹Câ5<br>(50+‰Î80)"][this.c_tama.value];
			}
			tamaP = [6,12,11,10,9,7,"3|1|40|30","3|1|60|40","3|1|80|50"];
			//‘¬Ë‘Î‰
			switch (this.c_tama.value) {
			case "0":
				if (w.indexOf("LV1’Êí’e") >= 0) this.d01.innerHTML = "<span style='color:blue'>"+this.d01.innerHTML+"<br>5”­‘¬Ë</span>",tamaP[0] = 3;
				break;
			case "1":
				if (w.indexOf("LV2’Êí’e") >= 0) this.d01.innerHTML = "<span style='color:blue'>"+this.d01.innerHTML+"<br>5”­‘¬Ë</span>",tamaP[1] = 6;
				break;
			case "3":
				if (w.indexOf("LV1ŠÑ’Ê’e") >= 0) this.d01.innerHTML = "<span style='color:blue'>"+this.d01.innerHTML+"<br>3”­‘¬Ë</span>",tamaP[3] = 5;
				break;
			case "6":
				if (w.indexOf("LV1“ObÖ’e") >= 0) this.d01.innerHTML = "<span style='color:blue'>"+this.d01.innerHTML+"<br>2”­‘¬Ë</span>",tamaP[6] = "1.5|1|40|30";
				break;
			}
			var addGunCri=0;
			if (this.gou_enemi && this.c_tr.value >= 30 && this.d_spec.innerHTML.lastIndexOf("“V—’•Ší") > 0) addGunCri += 3; //„í‚Å‚Q•”ˆÊˆÈã‚Å“V—’•Ší
			
			if (wpid === 1){
				if (this.c_fw.checked) addGunCri += 1; //ƒwƒ”ƒB‚ÅƒtƒB[ƒ`ƒƒ[
				//‹——£
				switch (this.c_tama.value) {
				case "0":
				case "1":
				case "2": //’Êí’e
					motion = [17+addGunCri,17+addGunCri,17+addGunCri,17+addGunCri,10,8,5];
					this.d02.innerHTML = "‹ß‹——£<br>"+motion[0]/10+"”{";
					this.d03.innerHTML = "’†‹——£‚P<br>"+motion[1]/10+"”{";
					this.d04.innerHTML = "’†‹——£‚Q<br>"+motion[2]/10+"”{";
					this.d05.innerHTML = "‰“‹——£‚P<br>"+motion[3]/10+"”{";
					this.d06.innerHTML = "‰“‹——£‚Q<br>1.0”{";
					this.d07.innerHTML = "‰“‹——£‚R<br>0.8”{";
					this.d08.innerHTML = "‰“‹——£‚S<br>0.5”{";
					this.d09.innerHTML = "<br>";
					break;
				case "3":
				case "4":
				case "5": //ŠÑ’Ê’e
					motion = [10,17+addGunCri,17+addGunCri,17+addGunCri,17+addGunCri,10,8,5];
					this.d02.innerHTML = "‹ß‹——£<br>1.0”{";
					this.d03.innerHTML = "’†‹——£‚P<br>"+motion[1]/10+"”{";
					this.d04.innerHTML = "’†‹——£‚Q<br>"+motion[2]/10+"”{";
					this.d05.innerHTML = "‰“‹——£‚P<br>"+motion[3]/10+"”{";
					this.d06.innerHTML = "‰“‹——£‚Q<br>"+motion[4]/10+"”{";
					this.d07.innerHTML = "‰“‹——£‚R<br>1.0”{";
					this.d08.innerHTML = "‰“‹——£‚S<br>0.8”{";
					this.d09.innerHTML = "‰“‹——£‚T<br>0.5”{";
					break;
				case "6":
				case "7":
				case "8": //“SbÖ’e
					motion = [10,17+addGunCri,17+addGunCri,10,8,5,5];
					this.d02.innerHTML = "‹ß‹——£<br>1.0”{";
					this.d03.innerHTML = "’†‹——£‚P<br>"+motion[1]/10+"”{";
					this.d04.innerHTML = "’†‹——£‚Q<br>"+motion[2]/10+"”{";
					this.d05.innerHTML = "‰“‹——£‚P<br>1.0”{";
					this.d06.innerHTML = "‰“‹——£‚Q<br>0.8”{";
					this.d07.innerHTML = "‰“‹——£‚R<br>0.5”{";
					this.d08.innerHTML = "‰“‹——£‚S<br>0.5”{";
					this.d09.innerHTML = "(”š”j)";
					break;
				}
			} else if (this.c_Style.value.charAt(0) === "’n"){
				//‹——£
				switch (this.c_tama.value) {
				case "0":
				case "1":
				case "2": //’Êí’e
					motion = [15+addGunCri,15+addGunCri,10,8,5,5];
					this.d02.innerHTML = "‹ß‹——£<br>"+motion[0]/10+"”{";
					this.d03.innerHTML = "’†‹——£‚P<br>"+motion[1]/10+"”{";
					this.d04.innerHTML = "’†‹——£‚Q<br>1.0”{";
					this.d05.innerHTML = "‰“‹——£‚P<br>0.8”{";
					this.d06.innerHTML = "‰“‹——£‚Q<br>0.5”{";
					this.d07.innerHTML = "‰“‹——£‚R<br>0.5”{";
					this.d08.innerHTML = "‰“‹——£‚S<br>0”{";
					this.d09.innerHTML = "<br>";
					break;
				case "3":
				case "4":
				case "5": //ŠÑ’Ê’e
					motion = [10,15+addGunCri,15+addGunCri,15+addGunCri,10,8,5];
					this.d02.innerHTML = "‹ß‹——£<br>1.0”{";
					this.d03.innerHTML = "’†‹——£‚P<br>"+motion[1]/10+"”{";
					this.d04.innerHTML = "’†‹——£‚Q<br>"+motion[2]/10+"”{";
					this.d05.innerHTML = "‰“‹——£‚P<br>"+motion[3]/10+"”{";
					this.d06.innerHTML = "‰“‹——£‚Q<br>1.0”{";
					this.d07.innerHTML = "‰“‹——£‚R<br>0.8”{";
					this.d08.innerHTML = "‰“‹——£‚S<br>0.5”{";
					this.d09.innerHTML = "<br>";
					break;
				case "6":
				case "7":
				case "8": //“SbÖ’e
					motion = [10,15+addGunCri,10,8,8,5,5];
					this.d02.innerHTML = "‹ß‹——£<br>1.0”{";
					this.d03.innerHTML = "’†‹——£‚P<br>"+motion[1]/10+"”{";
					this.d04.innerHTML = "’†‹——£‚Q<br>1.0”{";
					this.d05.innerHTML = "‰“‹——£‚P<br>0.8”{";
					this.d06.innerHTML = "‰“‹——£‚Q<br>0.8”{";
					this.d07.innerHTML = "‰“‹——£‚R<br>0.5”{";
					this.d08.innerHTML = "‰“‹——£‚S<br>0.5”{";
					this.d09.innerHTML = "(”š”j)";
					break;
				}
			} else if (this.c_Style.value.charAt(0) === "“V"){
				//‹——£
				switch (this.c_tama.value) {
				case "0":
				case "1":
				case "2": //’Êí’e
					motion = [16+addGunCri,10,8,5,5,5];
					this.d02.innerHTML = "‹ß‹——£<br>"+motion[0]/10+"”{";
					this.d03.innerHTML = "’†‹——£‚P<br>1.0”{";
					this.d04.innerHTML = "’†‹——£‚Q<br>0.8”{";
					this.d05.innerHTML = "‰“‹——£‚P<br>0.5”{";
					this.d06.innerHTML = "‰“‹——£‚Q<br>0.5”{";
					this.d07.innerHTML = "‰“‹——£‚R<br>0.5”{";
					this.d08.innerHTML = "‰“‹——£‚S<br>0”{";
					this.d09.innerHTML = "<br>";
					break;
				case "3":
				case "4":
				case "5": //ŠÑ’Ê’e
					motion = [10,16+addGunCri,16+addGunCri,10,8,5,5];
					this.d02.innerHTML = "‹ß‹——£<br>1.0”{";
					this.d03.innerHTML = "’†‹——£‚P<br>"+motion[1]/10+"”{";
					this.d04.innerHTML = "’†‹——£‚Q<br>"+motion[2]/10+"”{";
					this.d05.innerHTML = "‰“‹——£‚P<br>1.0”{";
					this.d06.innerHTML = "‰“‹——£‚Q<br>0.8”{";
					this.d07.innerHTML = "‰“‹——£‚R<br>0.5”{";
					this.d08.innerHTML = "‰“‹——£‚S<br>0.5”{";
					this.d09.innerHTML = "<br>";
					break;
				case "6":
				case "7":
				case "8": //“SbÖ’e
					motion = [16+addGunCri,10,8,8,5,5,5];
					this.d02.innerHTML = "‹ß‹——£<br>"+motion[0]/10+"”{";
					this.d03.innerHTML = "’†‹——£‚P<br>1.0”{";
					this.d04.innerHTML = "’†‹——£‚Q<br>0.8”{";
					this.d05.innerHTML = "‰“‹——£‚P<br>0.8”{";
					this.d06.innerHTML = "‰“‹——£‚Q<br>0.5”{";
					this.d07.innerHTML = "‰“‹——£‚R<br>0.5”{";
					this.d08.innerHTML = "‰“‹——£‚S<br>0.5”{";
					this.d09.innerHTML = "(”š”j)";
					break;
				}
			} else {
				//‹——£
				switch (this.c_tama.value) {
				case "0":
				case "1":
				case "2": //’Êí’e
					motion = [20+addGunCri,20+addGunCri,20+addGunCri,15];
					this.d02.innerHTML = "‹ß‹——£<br>"+motion[0]/10+"”{";
					this.d03.innerHTML = "’†‹——£‚P<br>"+motion[1]/10+"”{";
					this.d04.innerHTML = "’†‹——£‚Q<br>"+motion[2]/10+"”{";
					this.d05.innerHTML = "‰“‹——£‚P<br>1.5”{";
					this.d06.innerHTML = "‰“‹——£‚Q<br>0”{";
					this.d07.innerHTML = "‰“‹——£‚R<br>0”{";
					this.d08.innerHTML = "‰“‹——£‚S<br>0”{";
					this.d09.innerHTML = "<br>";
					break;
				case "3":
				case "4":
				case "5": //ŠÑ’Ê’e
					motion = [20+addGunCri,20+addGunCri,20+addGunCri,15];
					this.d02.innerHTML = "‹ß‹——£<br>"+motion[0]/10+"”{";
					this.d03.innerHTML = "’†‹——£‚P<br>"+motion[1]/10+"”{";
					this.d04.innerHTML = "’†‹——£‚Q<br>"+motion[2]/10+"”{";
					this.d05.innerHTML = "‰“‹——£‚P<br>1.5”{";
					this.d06.innerHTML = "‰“‹——£‚Q<br>0”{";
					this.d07.innerHTML = "‰“‹——£‚R<br>0”{";
					this.d08.innerHTML = "‰“‹——£‚S<br>0”{";
					this.d09.innerHTML = "<br>";
					break;
				case "6":
				case "7":
				case "8": //“SbÖ’e
					motion = [20+addGunCri,20+addGunCri,15];
					this.d02.innerHTML = "‹ß‹——£<br>"+motion[0]/10+"”{";
					this.d03.innerHTML = "’†‹——£‚P<br>"+motion[1]/10+"”{";
					this.d04.innerHTML = "’†‹——£‚Q<br>1.5”{";
					this.d05.innerHTML = "‰“‹——£‚P<br>0”{";
					this.d06.innerHTML = "‰“‹——£‚Q<br>0”{";
					this.d07.innerHTML = "‰“‹——£‚R<br>0”{";
					this.d08.innerHTML = "‰“‹——£‚S<br>0”{";
					this.d09.innerHTML = "(”š”j)";
					break;
				}
			}
			break;
		}
		this.Cls_Table();
	}
	this.Cng_Fw = function(){
		this.Cng_Tama();
	}
	this.Cng_Style = function(){
		if (wpid === 1) {
			this.c_mei2.innerHTML = this.c_Style.value.charAt(0) === "—’" ? "—­‚ßF" : "";
			this.c_betu2.style.display = this.c_mei2.innerHTML ? "inline" : "none";
		} else {
			this.Cng_Tama();
			this["d010"].innerHTML = this.c_Style.value.charAt(0) === "—’" ? "–§’…<br>”š•—" : "<br>";
		}
	}
	break;
case 2: //ƒnƒ“ƒ}[
	wp_hosei = 100,wp_type = 2;
	this.d00.innerHTML = "•Ší•â³<br>‘Å100%<br>(‹Câ’l)";
	this.d01.innerHTML = "‘Å‚¿‰º‚ë‚µ<br>20¥50" + BR + "(15¥20)";
	this.d02.innerHTML = "U‚è”²‚«<br>20¥70" + BR + "(15¥10)";
	this.d03.innerHTML = "cU‚è‚P<br>52(15)";
	this.d04.innerHTML = "cU‚è‚Q<br>20(15)";
	this.d05.innerHTML = "U‚èã‚°<br>100(48)";
	this.d06.innerHTML = "ƒ^ƒ‚P<br>45(15)";
	this.d07.innerHTML = "ƒ^ƒ‚Q<br>45¥35" + BR + "(15¥15)";
	this.d08.innerHTML = "ƒ^ƒ‚R<br>20¥76" + BR + "(15¥48)";
	this.Cng_Style = function(){
		if (this.c_Style.value.charAt(0) === "’n"){
			this.d09.innerHTML = "‰ñ“]ŠJn<br>20(0)";
			this.d010.innerHTML = "‰ñ“]’†<br>10x5‰ñ(0)";
			this.d011.innerHTML = "‰ñ“]I—¹<br>40(0)";
			motion = ["20|50","20|70","52","20","100","45","45|35","20|76","20","10","40"];
		} else if (this.c_Style.value.charAt(0) === "“V"){
			this.d09.innerHTML = "—‘ÅŠJn<br>50(10)";
			this.d010.innerHTML = "—‘Å’†<br>30xn‰ñ(10)";
			this.d011.innerHTML = "<br>";
			motion = ["20|50","20|70","52","20","100","45","45|35","20|76","50","30"];
			this.Cls_Table();
		} else {
			this.d09.innerHTML = "JP½ÀİÌß<br>35¥100" + BR + "(15¥60)";
			this.d010.innerHTML = "—‘ÅŠJn<br>50(10)";
			this.d011.innerHTML = "—‘Å’†<br>30xn‰ñ(10)";
			motion = ["20|50","20|70","52","20","100","45","45|35","20|76","35|100","50","30"];
		}
	}
	this.Cng_Sr();
	break;
case 3: //ƒ‰ƒ“ƒX
	wp_hosei = 100,wp_type = 1; //ƒ‰ƒ“ƒX‚Í•”ˆÊ‚Åˆá‚¤‚Ì‚ÅŒã‚Å”»’è
	this.d00.innerHTML = "a100%<br>‘Å72%";
	this.Cng_Style = function(){
		if (this.c_Style.value.charAt(0) === "’n"){
			this.d01.innerHTML = "’†’i“Ë‚P<br>23";
			this.d02.innerHTML = "’†’i“Ë‚Q<br>23";
			this.d03.innerHTML = "’†’i“Ë‚R<br>30";
			this.d04.innerHTML = "ã•û“Ë‚P<br>28";
			this.d05.innerHTML = "ã•û“Ë‚Q<br>28";
			this.d06.innerHTML = "ã•û“Ë‚R<br>30";
			this.d07.innerHTML = "“Ëi<br>20xn‰ñ";
			this.d08.innerHTML = "‰Á‘¬<br>20x1.125”{";
			this.d09.innerHTML = "Ì¨Æ¯¼­“Ë<br>40";
			this.d010.innerHTML = "ƒK[ƒh“Ë<br>20";
			this.d011.innerHTML = "‚Ó‚ñ‚Î‚è<br>32";
			motion = ["23","23","30","28","28","30","20","20","40","20","32"];
		} else if (this.c_Style.value.charAt(0) === "“V"){
			this.d01.innerHTML = "’†’i“Ë1-<br>23";
			this.d02.innerHTML = "-’†’i“Ë3<br>23";
			this.d03.innerHTML = "’†’i“Ë‚S<br>30";
			this.d04.innerHTML = "ã•û“Ë1<br>28";
			this.d05.innerHTML = "-ã•û“Ë3<br>28";
			this.d06.innerHTML = "ã•û“Ë‚S<br>30";
			this.d07.innerHTML = "“Vã“Ë1-<br>29";
			this.d08.innerHTML = "-“Vã“Ë3<br>29";
			this.d09.innerHTML = "“Vã“Ë‚S<br>32";
			this.d010.innerHTML = "ƒK[ƒh“Ë<br>20";
			this.d011.innerHTML = "‚Ó‚ñ‚Î‚è<br>32";
			motion = ["23","23","30","28","28","30","29","29","32","20","32"];
		} else {
			this.d01.innerHTML = "’†’i“Ë1-<br>23";
			this.d02.innerHTML = "-’†’i“Ë3<br>23";
			this.d03.innerHTML = "’†’i“Ë‚S<br>30";
			this.d04.innerHTML = "ã•û“Ë1<br>28";
			this.d05.innerHTML = "-ã•û“Ë3<br>28";
			this.d06.innerHTML = "ã•û“Ë‚S<br>30";
			this.d07.innerHTML = "“Vã“Ë1-<br>29";
			this.d08.innerHTML = "-“Vã“Ë3<br>29";
			this.d09.innerHTML = "“Vã“Ë‚S<br>32";
			this.d010.innerHTML = "ƒ`ƒƒ[ƒW<br>1¥20" + BR + "(5¥10)";
			this.d011.innerHTML = "‚Ó‚ñ‚Î‚è<br>32";
			motion = ["23","23","30","28","28","30","29","29","32","+1|+20","32"];
		}
	}
	break;
case 4: //•ĞèŒ•
	wp_hosei = 125,wp_type = 1;
	this.Cng_Style = function(){
		this.d00.innerHTML = "•Ší•â³<br>a125%";
		this.d01.innerHTML = "JPa‚è<br>16";
		this.d02.innerHTML = "½×²ÃŞ¨İ¸Ş<br>16";
		if (this.c_Style.value.charAt(0) === "’n"){
			this.d03.innerHTML = "a‚è‰º‚°<br>13";
			this.d04.innerHTML = "‰¡a‚è<br>11";
			this.d05.innerHTML = "‚‚ÆŒ•<br>8(5)¥12";
			this.d06.innerHTML = "‰ñ“]a‚è<br>24";
			this.d07.innerHTML = "a‚èã‚°<br>14";
			this.d08.innerHTML = "¼°ÙÄŞ±À¯¸<br>10¥14" + BR + "(7¥8)";
			this.d09.innerHTML = "ƒK[ƒha‚è<br>14";
			this.d010.innerHTML = "<br>";
			motion = ["16","16","13","11","+8|12","24","14","+10|+14","14"];
			this.Cls_Table();
		} else if (this.c_Style.value.charAt(0) === "“V"){
			this.d03.innerHTML = "a‚è‰º‚°<br>13";
			this.d04.innerHTML = "‰¡a‚è<br>11";
			this.d05.innerHTML = "‚‚ÆŒ•<br>8(5)+12";
			this.d06.innerHTML = "JP2’ia<br>18¥14";
			this.d07.innerHTML = "a‚èã‚°<br>14";
			this.d08.innerHTML = "¼°ÙÄŞ±À¯¸<br>10¥14<br>(7+8)";
			this.d09.innerHTML = "ƒK[ƒha‚è<br>14";
			this.d010.innerHTML = "<br>";
			motion = ["16","16","13","11","+8|12","18|14","14","+10|+14","14"];
			this.Cls_Table();
		} else {
			this.d03.innerHTML = "“Ë‚«1<br>11";
			this.d04.innerHTML = "“Ë‚«2<br>8";
			this.d05.innerHTML = "“Ë‚«3<br>8";
			this.d06.innerHTML = "ã‰ºa‚è<br>10¥12";
			this.d07.innerHTML = "JP2’ia<br>18¥14";
			this.d08.innerHTML = "a‚èã‚°<br>14";
			this.d09.innerHTML = "¼°ÙÄŞ±À¯¸<br>10¥14<br>(7+8)";
			this.d010.innerHTML = "ƒK[ƒha‚è<br>14";
			motion = ["16","16","11","8","8","10|12","18|14","14","+10|+14","14"];
		}
	}
	break;
case 6: //‘oŒ•
	wp_hosei = 100,wp_type = 1;
	this.c_mei.innerHTML = "‹SlF",this.c_betu.options[1] = new Option("”­“®", 1);
	this.c_mei2.innerHTML = "n‘ÅF",this.c_betu2.length = 0,this.c_betu2.options[0] = new Option("‚È‚µ", 100);
	this.c_betu2.options[1] = new Option("‚P‰ñ", 105),this.c_betu2.options[2] = new Option("‚Q‰ñ", 110),this.c_betu2.options[3] = new Option("‚R‰ñ", 115),this.c_betu2.options[4] = new Option("‚S‰ñ", 120);
	this.d00.innerHTML = "•Ší•â³<br>a100%";
	this.Cng_Kobetu = function(){this.Cng_Style();}
	this.Cng_Kobetu2 = function(){}
	this.Cng_Style = function(){
		if (!this.c_betu.selectedIndex) { //’Êí
			this.d02.innerHTML = "a‚è‰º‚P<br>18";
			this.d03.innerHTML = "a‚è‰º‚Q<br>10¥8";
			this.d04.innerHTML = "a‚è‰º‚R<br>6¥12¥18";
			this.d05.innerHTML = "¶‰ñ“]a<br>15¥10¥6";
			this.d06.innerHTML = "‰E‰ñ“]a<br>15¥10¥6";
			this.d07.innerHTML = "a‚èã‚°<br>19";
			this.d08.innerHTML =this.d09.innerHTML =this.d010.innerHTML =this.d011.innerHTML = "<br>";
			if (this.c_Style.value.charAt(0) === "—’"){
				this.d01.innerHTML = "‚i‚oa‚è<br>12¥16";
				motion = ["12|16","18","10|8","6|12|18","15|10|6","15|10|6","19"];
			} else {
				this.d01.innerHTML = "a‚è•¥‚¢<br>12¥6";
				motion = ["12|6","18","10|8","6|12|18","15|10|6","15|10|6","19"];
			}
			this.Cls_Table();
		} else { //—•‘
			this.d01.innerHTML = "a‚è•¥‚¢<br>16¥8";
			this.d02.innerHTML = "a‚è‰º‚P<br>24";
			this.d03.innerHTML = "a‚è‰º‚Q<br>13¥10";
			this.d04.innerHTML = "a‚è‰º‚R<br>8¥16¥24";
			this.d05.innerHTML = "¶‰ñ“]a<br>(20¥13¥8)" + BR + "x2‰ñ";
			this.d06.innerHTML = "‰E‰ñ“]a<br>(20¥13¥8)" + BR + "x2‰ñ";
			this.d07.innerHTML = "a‚èã‚°<br>25";
			if (this.c_Style.value.charAt(0) === "’n"){
				this.d08.innerHTML = "—•‘ŠJn<br>33";
				this.d09.innerHTML = "—•‘’†<br>8x8‰ñ";
				this.d010.innerHTML = "—•‘I—¹<br>40";
				this.d011.innerHTML = "—•‘<br>‘SHIT";
				motion = ["16|8","24","13|10","8|16|24","20|13|8","20|13|8","25","33","8","40","33|8|8|8|8|8|8|8|8|40"];
			} else if (this.c_Style.value.charAt(0) === "“V"){
				this.d08.innerHTML = "‚R˜A“Ë‚«<br>24x3";
				this.d09.innerHTML = "‰ñ“]a‚è<br>21¥27¥47";
				this.d010.innerHTML = this.d011.innerHTML = "<br>";
				motion = ["16|8","24","13|10","8|16|24","20|13|8","20|13|8","25","24","21|27|47"];
				this.Cls_Table();
			} else {
				this.d01.innerHTML = "‚i‚oa‚è<br>16¥21";
				this.d08.innerHTML = "‚R˜A“Ë‚«<br>24x3";
				this.d09.innerHTML = "‰ñ“]a‚è<br>21¥27¥47";
				motion = ["16|21","24","13|10","8|16|24","20|13|8","20|13|8","25","24","21|27|47"];
			}
		}
	}
	break;
case 7: //‘¾“
	wp_hosei = 100,wp_type = 1;
	this.c_mei.innerHTML = "‹CnF",this.c_betu.options[1] = new Option("”­“®", 1);
	this.c_mei2.innerHTML = "n•”F",this.c_betu2.length = 0,this.c_betu2.options[0] = new Option("‚È‚µ", 0),this.c_betu2.options[1] = new Option("’†• ", 1);
	this.d00.innerHTML = "•Ší•â³<br>a100%";
	this.d01.innerHTML = "“¥‚İ‚İ<br>33";
	this.d02.innerHTML = "ca‚è<br>28";
	this.d03.innerHTML = "a‚è‰º‚°<br>30";
	this.d04.innerHTML = "“Ë‚«<br>20";
	this.d05.innerHTML = "a‚èã‚°<br>23";
	this.d06.innerHTML = "‹Cna–³<br>16";
	this.d07.innerHTML = "‹Cna‚P<br>35";
	this.d08.innerHTML = "‹Cna‚Q<br>36";
	this.d09.innerHTML = "‹Cna‚R<br>18¥18¥40";
	this.d010.innerHTML = "½Ã¯Ìßa<br>24";
	this.Cng_Kobetu = function(){
		if (!this.c_betu.selectedIndex) this.c_tane.value = 0; //‹Cn‚È‚µó‘Ô ŒÀ‚Í‹­§‰ğœ

		if (this.c_Style.value.charAt(0) === "—’") {
			if (this.c_betu.selectedIndex) {
				this.d04.innerHTML = "‹CnŠÑh‚µ<br>24¥12x5¥30";
				motion[3] = "24|12|12|12|12|12|30";
			} else {
				this.d04.innerHTML = "ŠÑh‚µ<br>24¥12x2";
				motion[3] = "24|12|12";
			}
		}
	}
	this.Cng_Kobetu2 = function(){}
	this.Cng_Fw = function(){
		if (this.c_fw.checked) {
			this.c_tane.options[3] = ckFull ? new Option("ƒtƒB[ƒ`ƒƒ[@b+40", 40) :  new Option("F", 40);
		} else {
			this.c_tane.length = 3; //ƒtƒB[ƒ`ƒƒ[‰ğœ
		}
	}
	this.Cng_Style = function(){
		if (this.c_Style.value.charAt(0) === "’n"){
			this.d03.innerHTML = "a‚è‰º‚°<br>30";
			this.d04.innerHTML = "“Ë‚«<br>20";
			motion = ["33","28","30","20","23","16","35","36","18|18|40","24"];
		} else if (this.c_Style.value.charAt(0) === "“V"){
			this.d03.innerHTML = "”ğ‚¯a‚è<br>28";
			this.d04.innerHTML = "“Ë‚«<br>20";
			motion = ["33","28","28","20","23","16","35","36","18|18|40","24"];
		} else {
			this.d03.innerHTML = "”ğ‚¯a‚è<br>28";
			motion = ["33","28","28","","23","16","35","36","18|18|40","24"];
			this.Cng_Kobetu();
		}
	}
	this.Cng_Kobetu();
	break;
case 8: //ë—Â“J
	this.s_fue.style.display = "inline";
	wp_hosei = 100,wp_type = 2;
	this.d00.innerHTML = "•Ší•â³<br>‘Å100%<br>(‹Câ’l)";
	this.Cng_Style = function(){
		if (this.c_Style.value.charAt(0) === "’n"){
			this.d01.innerHTML = "’@‚«‚Â‚¯<br>15¥48(5¥20)";
			this.d02.innerHTML = "‚Ô‚ñ‰ñ‚µ<br>31(15)";
			this.d03.innerHTML = "‚Â‚©‰£‚è<br>12(0)";
			this.d04.innerHTML = "‰‰‘tŠJn<br>22(20)";
			this.d05.innerHTML = "‰‰‘t‚P<br>43(20)";
			this.d06.innerHTML = "‰‰‘t‚Q<br>36(20)";
			this.d07.innerHTML = "‰‰‘t‚R<br>41(20)";
			this.d08.innerHTML = "‰‰‘tI—¹<br>26(20)";
			this.d09.innerHTML = "‰¹”š‰‰‘t";
			this.d010.innerHTML = this.d011.innerHTML = "<br>";
			motion =["15|48","31","12","22","43","36","41","26"];
			this.Cls_Table();
		} else if (this.c_Style.value.charAt(0) === "“V"){
			this.d01.innerHTML = "U‚èã‚°<br>26(18)";
			this.d02.innerHTML = "“Ë‚«ã‚°<br>30x3(5)";
			this.d03.innerHTML = "R‚èã‚°<br>20(10)";
			this.d04.innerHTML = "‚Ô‚ñ‰ñ‚µ<br>31(15)";
			this.d05.innerHTML = "‚Â‚©‰£‚è<br>12(0)";
			this.d06.innerHTML = "‰‰‘tŠJn<br>22(20)";
			this.d07.innerHTML = "‰‰‘t‚P<br>43(20)";
			this.d08.innerHTML = "‰‰‘t‚Q<br>36(20)";
			this.d09.innerHTML = "‰‰‘t‚R<br>41(20)";
			this.d010.innerHTML = "‰‰‘tI—¹<br>26(20)";
			this.d011.innerHTML = "‰¹”š‰‰‘t";
			motion = ["25","29","20","31","12","22","43","36","41","26"];
		} else {
			this.d01.innerHTML = "U‚èã‚°<br>26(18)";
			this.d02.innerHTML = "“Ë‚«ã‚°<br>30x3(5)";
			this.d03.innerHTML = "R‚èã‚°<br>20(10)";
			this.d04.innerHTML = "‚Ô‚ñ‰ñ‚µ<br>31(15)";
			this.d05.innerHTML = "‚Â‚©‰£‚è<br>12(0)";
			this.d06.innerHTML = "‰‰‘tŠJn<br>22(20)";
			this.d07.innerHTML = "‰‰‘t‚P<br>43(20)";
			this.d08.innerHTML = "‰‰‘t‚Q<br>36(20)";
			this.d09.innerHTML = "‰‰‘t‚R<br>41(20)";
			this.d010.innerHTML = "‰‰‘tI—¹<br>26(20)";
			this.d011.innerHTML = "‰¹F•ÏŠ·";
			motion = ["25","29","20","31","12","22","43","36","41","26"];
		}
	}
	break;
case 9: //ƒKƒ“ƒ‰ƒ“ƒX
	this.s_guns.style.display = "inline";
	this.c_guns.disabled = false;
	wp_hosei = 95,wp_type = 1;
	this.d00.innerHTML = "•Ší•â³<br>a95%";
	this.d01.innerHTML = "“¥‚İ‚İ<br>34";
	this.d02.innerHTML = "‰¡“ã‚¬<br>28";
	this.d03.innerHTML = "˜AŒ‚–C<br>14";
	this.d04.innerHTML = "‘O•û“Ë1,2<br>21";
	this.d05.innerHTML = "‘O•û“Ë‚R<br>28";
	this.d06.innerHTML = "a‚èã‚°<br>30";
	this.d07.innerHTML = "ã•û“Ë1,2<br>24";
	this.d08.innerHTML = "ã•û“Ë‚R<br>24";
	this.d09.innerHTML = this.d010.innerHTML = this.d011.innerHTML = "<br>";
	//•Ší–ˆ‚ÌŒÂ•Ê
	this.Cng_Wp_Sub = function(Txt){
		var wkGL = this.d_spec.innerHTML.indexOf("Œ^")-2;
		if (wkGL < 0) return;
		//–CŒ‚|‘®«|‘®«’l|‘®«–C
		switch (this.d_spec.innerHTML.substring(wkGL,wkGL+8)) {
		case "’ÊíŒ^–CŒ‚LV1":
			this.d09.innerHTML = "’ÊíŒ^LV1<br>13+‰Î40";
			tamaP = ["13|1|4|50|3"];
			break;
		case "’ÊíŒ^–CŒ‚LV2":
			this.d09.innerHTML = "’ÊíŒ^LV2<br>20+‰Î80";
			tamaP = ["20|1|8|55|4"];
			break;
		case "’ÊíŒ^–CŒ‚LV3":
			this.d09.innerHTML = "’ÊíŒ^LV3<br>24+‰Î80";
			tamaP = ["24|1|8|60|5"];
			break;
		case "’ÊíŒ^–CŒ‚LV4":
			this.d09.innerHTML = "’ÊíŒ^LV4<br>29+‰Î100";
			tamaP = ["29|1|10|65|6"];
			break;
		case "’ÊíŒ^–CŒ‚LV5":
			this.d09.innerHTML = "’ÊíŒ^LV5<br>33+‰Î120";
			tamaP = ["33|1|12|70|7"];
			break;
		case "’ÊíŒ^–CŒ‚LV6":
			this.d09.innerHTML = "’ÊíŒ^LV6<br>37+‰Î130";
			tamaP = ["37|1|13|75|8"];
			break;
		case "•úËŒ^–CŒ‚LV1":
			this.d09.innerHTML = "•úËŒ^LV1<br>20+‰Î90";
			tamaP = ["20|1|9|70|5"];
			break;
		case "•úËŒ^–CŒ‚LV2":
			this.d09.innerHTML = "•úËŒ^LV2<br>26+‰Î130";
			tamaP = ["26|1|13|75|6"];
			break;
		case "•úËŒ^–CŒ‚LV3":
			this.d09.innerHTML = "•úËŒ^LV3<br>35+‰Î160";
			tamaP = ["35|1|16|80|7"];
			break;
		case "•úËŒ^–CŒ‚LV4":
			this.d09.innerHTML = "•úËŒ^LV4<br>40+‰Î180";
			tamaP = ["40|1|18|85|8"];
			break;
		case "•úËŒ^–CŒ‚LV5":
			this.d09.innerHTML = "•úËŒ^LV5<br>44+‰Î200";
			tamaP = ["44|1|20|90|9"];
			break;
		case "•úËŒ^–CŒ‚LV6":
			this.d09.innerHTML = "•úËŒ^LV6<br>48+‰Î220";
			tamaP = ["48|1|22|95|10"];
			break;
		case "ŠgUŒ^–CŒ‚LV1":
			this.d09.innerHTML = "ŠgUŒ^LV1<br>26+‰Î60";
			tamaP = ["26|1|6|90|6"];
			break;
		case "ŠgUŒ^–CŒ‚LV2":
			this.d09.innerHTML = "ŠgUŒ^LV2<br>37+‰Î100";
			tamaP = ["37|1|10|95|7"];
			break;
		case "ŠgUŒ^–CŒ‚LV3":
			this.d09.innerHTML = "ŠgUŒ^LV3<br>48+‰Î120";
			tamaP = ["48|1|12|100|8"];
			break;
		case "ŠgUŒ^–CŒ‚LV4":
			this.d09.innerHTML = "ŠgUŒ^LV4<br>53+‰Î140";
			tamaP = ["53|1|14|105|9"];
			break;
		case "ŠgUŒ^–CŒ‚LV5":
			this.d09.innerHTML = "ŠgUŒ^LV5<br>57+‰Î160";
			tamaP = ["57|1|16|110|10"];
			break;
		case "ŠgUŒ^–CŒ‚LV6":
			this.d09.innerHTML = "ŠgUŒ^LV5<br>62+‰Î180";
			tamaP = ["62|1|18|115|11"];
			break;
		}
		switch (this.d_spec.innerHTML.substring(wkGL+3,wkGL+8)) {
		case "–CŒ‚LV1":
			this.d010.innerHTML = "—³Œ‚–CLV1<br>[36+‰Î100]" + BR + "x5‰ñ";
			this.d011.innerHTML = "—³Œ‚–CLV1<br>‘SHit";
			tamaP[1] = "36|1|10";
			break;
		case "–CŒ‚LV2":
			this.d010.innerHTML = "—³Œ‚–CLV2<br>[44+‰Î130]" + BR + "x5‰ñ";
			this.d011.innerHTML = "—³Œ‚–CLV2<br>‘SHit";
			tamaP[1] = "44|1|13";
			break;
		case "–CŒ‚LV3":
			this.d010.innerHTML = "—³Œ‚–CLV3<br>[54+‰Î150]" + BR + "x5‰ñ";
			this.d011.innerHTML = "—³Œ‚–CLV3<br>‘SHit";
			tamaP[1] = "54|1|15";
			break;
		case "–CŒ‚LV4":
			this.d010.innerHTML = "—³Œ‚–CLV4<br>[60+‰Î170]" + BR + "x5‰ñ";
			this.d011.innerHTML = "—³Œ‚–CLV4<br>‘SHit";
			tamaP[1] = "60|1|17";
			break;
		case "–CŒ‚LV5":
			this.d010.innerHTML = "—³Œ‚–CLV5<br>[66+‰Î190]" + BR + "x5‰ñ";
			this.d011.innerHTML = "—³Œ‚–CLV5<br>‘SHit";
			tamaP[1] = "66|1|19";
			break;
		case "–CŒ‚LV6":
			this.d010.innerHTML = "—³Œ‚–CLV6<br>[72+‰Î210]" + BR + "x5‰ñ";
			this.d011.innerHTML = "—³Œ‚–CLV6<br>‘SHit";
			tamaP[1] = "72|1|21";
			break;
		}
		
		if (this.c_Style.value.charAt(0) === "’n") return;

		this.d010.innerHTML = "HBLV1<br>a1+‰Î" + tamaP[1].split("|")[2]+"0";
		tamaP[1] = "1|1|" + tamaP[1].split("|")[2];
		this.d011.innerHTML = "<br>";
		
		if (this.c_Style.value.charAt(0) !== "—’") return;
		this.d011.innerHTML = "’@‚«‚Â‚¯<br>20";
		
		this.d09.innerHTML = this.d09.innerHTML.toUpperCase().split("<BR>")[0].replace("Œ^LV","‘®«");
		var hou_baku = Math.floor(tamaP[0].split("|")[0] * 6 / 10); //”š”­
		
		if (this.c_kensyo.value.charAt(0) === "9") { //”šŒ‚
			var hou_da = Math.floor(tamaP[0].split("|")[0] * 12 / 10);
			this.d09.innerHTML += "<BR>" + hou_da + "¥" + hou_baku;
			tamaP[0] = hou_baku + "|-|+" + hou_da;
		} else {
			var hou_mei = this.g_zoku.innerHTML.toUpperCase().split("<BR>")[0].split("F");
			var hou_type = hou_mei[0] ? "‰Î…—‹—´•X".indexOf(hou_mei[0]) + 1 : 0;
			if (hou_type) { //‘®«
				var hou_da = Math.floor(hou_mei[1] * tamaP[0].split("|")[3] / 100);
				this.d09.innerHTML += "<BR>" + hou_mei[0] + hou_da + "¥" + hou_baku;
				tamaP[0] = hou_baku + "|" + hou_type + "|" + hou_da;
			} else { //‘Å
				var hou_da = Math.floor(tamaP[0].split("|")[0] * 9 / 10);
				this.d09.innerHTML += "<BR>" + "‘Å" + hou_da + "(" + tamaP[0].split("|")[4] + ")¥" + hou_baku;
				tamaP[0] = hou_baku + "|-|+" + hou_da;
			}
		}
	}
	this.Cng_Style = function(){
		motion = ["34","28","14","21","28","30","24","24"];
		if (this.c_Style.value.charAt(0) === "’n"){
			this.c_mei2.innerHTML = "";
		} else {
			this.c_mei2.innerHTML = "‚g‚aF”­“®";
			if (this.c_Style.value.charAt(0) === "“V") {
				this.Cls_Table();
			} else {
				this.d011.innerHTML = "’@‚«‚Â‚¯<br>20";
				motion[8] = 20;
			}
		}
	}
	break;
case 10: //‹|
	this.s_yumi_G.style.display = this.c_ya.style.display = "inline";
	this.c_guns.disabled = this.c_shoot.disabled = true;
	this.c_mei.innerHTML = "ƒrƒ“F";
	this.c_betu.selectedIndex = 0;
	this.d00.innerHTML = "•Ší•â³<br>’e100%";
	motion = [10,18,0];
	wp_hosei = 100,wp_type = 3;
	//•Ší–ˆ‚ÌŒÂ•Ê
	this.Cng_Wp_Sub = function(Txt){
		var w = this.c_tama;
		w.length = 0;
		//–î
		for (var i = 0,yumiP = Txt[aKick].split("/"),m = yumiP.length; i < m; i++){
			switch (yumiP[i]){
			case "˜AË1":
				w.options[w.length] = new Option((i+1) + ":˜AËLV1|12","˜AËLV112");
				break;
			case "˜AË2":
				w.options[w.length] = new Option((i+1) + ":˜AËLV2|12+5","˜AËLV212|5");
				break;
			case "˜AË3":
				w.options[w.length] = new Option((i+1) + ":˜AËLV3|12+5+4","˜AËLV312|5|4");
				break;
			case "˜AË4":
				w.options[w.length] = new Option((i+1) + ":˜AËLV4|12+5+4+2","˜AËLV412|5|4|2");
				break;
			case "ŠgU1":
				w.options[w.length] = new Option((i+1) + ":ŠgULV1|4-5-4","ŠgULV15");
				break;
			case "ŠgU2":
				w.options[w.length] = new Option((i+1) + ":ŠgULV2|5-6-5","ŠgULV26");
				break;
			case "ŠgU3":
				w.options[w.length] = new Option((i+1) + ":ŠgULV3|4-5-5-5-4","ŠgULV35");
				break;
			case "ŠgU4":
				w.options[w.length] = new Option((i+1) + ":ŠgULV4|4-5-6-5-4","ŠgULV46");
				break;
			case "ŠÑ’Ê1":
				w.options[w.length] = new Option((i+1) + ":ŠÑ’ÊLV1|6x3‰ñ","ŠÑ’ÊLV16");
				break;
			case "ŠÑ’Ê2":
				w.options[w.length] = new Option((i+1) + ":ŠÑ’ÊLV2|6x4‰ñ","ŠÑ’ÊLV26");
				break;
			case "ŠÑ’Ê3":
				w.options[w.length] = new Option((i+1) + ":ŠÑ’ÊLV3|6x5‰ñ","ŠÑ’ÊLV36");
				break;
			case "ŠÑ’Ê4":
				w.options[w.length] = new Option((i+1) + ":ŠÑ’ÊLV4|6x6‰ñ","ŠÑ’ÊLV46");
				break;
			}
			if (!ckFull) w.options[w.length-1].text = w.options[w.length-1].text.substring(0,7); //ŠÈˆÕ‚ÍŒã‚ëƒJƒbƒg
		}
		w.selectedIndex = this.s_tame.value-1;
		if (this.c_Style.value.charAt(0) === "—’"){
			w.options[w.length] = new Option("4:µ°× LV4|12","ƒI[LV412");
			w.options[w.length] = new Option("5:µ°× LV5|12","ƒI[LV512");
			if (!ckFull) {
				w.options[w.length-2].text = w.options[w.length-2].text.substring(0,7);
				w.options[w.length-1].text = w.options[w.length-1].text.substring(0,7);
			}
		}
		//ƒrƒ“
		var w = this.c_betu;
		w.length = 1;
		if (Txt[aSpec].indexOf("‹­") >= 0) w.options[1] = new Option("‹­Œ‚ƒrƒ“", 1);
		w.options[w.length] = new Option("“Åƒrƒ“", 6);
		if (Txt[aSpec].indexOf("“Å") === -1) w.options[w.length-1].style.backgroundColor = "lightpink";
		w.options[w.length] = new Option("–ƒáƒƒrƒ“", 7);
		if (Txt[aSpec].indexOf("–ƒ") === -1) w.options[w.length-1].style.backgroundColor = "lightpink";
		w.options[w.length] = new Option("‡–°ƒrƒ“", 8);
		if (Txt[aSpec].indexOf("‡") === -1) w.options[w.length-1].style.backgroundColor = "lightpink";
		if (Txt[aSpec].indexOf("”š") >= 0) w.options[w.length] = new Option("”šŒ‚ƒrƒ“", 9);
		if (Txt[aSpec].indexOf("‘Å") >= 0) w.options[w.length] = new Option("‘ÅŒ‚ƒrƒ“", 10);
		if (!ckFull) for (var i = 0,m = w.length; i < m; w.options[i].text = w.options[i++].text.replace("ƒrƒ“",""));   //ŠÈˆÕ‚ÍŒã‚ëƒJƒbƒg

		this.Cng_Tama();
	}
	//‹|‚ÌŒÂ•Ê‚Íƒrƒ“
	this.Cng_Kobetu = function(){
		//ƒ‚[ƒVƒ‡ƒ“’l‚ÍCng_Style‚ÅƒZƒbƒg
		if (this.c_Style.value.charAt(0) === "’n"){
			this.d01.innerHTML = "‚È‚¬•¥‚¢<br>a‘Å10";
			this.d02.innerHTML = "ca‚è<br>a‘Å18";
		} else {
			this.d01.innerHTML = "¸—´‹|<br>a‘Å18x2";
			this.d02.innerHTML = "+ã¸9x3<br>+’¸“_22";
		}
		this.d03.innerHTML = ["ƒ^ƒ‚P<br>0.4”{","ƒ^ƒ‚Q<br>1.0”{","ƒ^ƒ‚R<br>1.5”{","ƒ^ƒ‚S<br>1.5”{","µ°×‚S<br>1.0”{","µ°×‚T<br>1.125”{"][this.c_tama.selectedIndex];
		if (this.c_betu.value >= "2" && this.c_betu.value < "9") { //ó‘ÔˆÙíƒrƒ“
			switch (this.c_tama.value.substring(0,2)) {
			case "˜AË":
				yaZoku = [13,7,5,4][this.c_tama.value.charAt(4)-1];
				break;
			case "ŠgU":
				yaZoku = [5,6,5,5][this.c_tama.value.charAt(4)-1];
				break;
			case "ŠÑ’Ê":
				yaZoku = [5,4,4,4][this.c_tama.value.charAt(4)-1];
				break;
			case "ƒI[":
				yaZoku = 25;
				break;
			}
			this.d01.innerHTML += "<BR>" + zokuName[this.c_betu.value].replace("F","") + "2";
			this.d02.innerHTML += "<BR>" + zokuName[this.c_betu.value].replace("F","") + "2";
			this.d03.innerHTML += "<BR>" + "1–{" + zokuName[this.c_betu.value].replace("F","") + yaZoku;
		} else if (this.c_betu.value === "9") { //”šŒ‚ƒrƒ“
			switch (this.c_tama.value.substring(0,2)) {
			case "˜AË":
				yaZoku = [70,40,32,28][this.c_tama.value.charAt(4)-1]
				break;
			case "ŠgU":
				yaZoku = [26,32,22,24][this.c_tama.value.charAt(4)-1]
				break;
			case "ŠÑ’Ê":
				yaZoku = [28,28,28,28][this.c_tama.value.charAt(4)-1]
				break;
			case "ƒI[":
				yaZoku = ""; //’Êí37,‰Î–ê55@ŒvZ‚ÅƒZƒbƒg
				break;
			}
			this.d03.innerHTML = ["ƒ^ƒ‚P","ƒ^ƒ‚Q","ƒ^ƒ‚R","ƒ^ƒ‚S","µ°×‚S","µ°×‚T"][this.c_tama.selectedIndex] + "<br>1–{ŒÅ’è" + yaZoku;
		} else if (this.c_betu.value === "10") { //‘ÅŒ‚ƒrƒ“
			switch (this.c_tama.value.substring(0,2)) {
			case "ƒI[":
				this.d03.innerHTML += "<BR>" + "‹Câ20";
				break;
			default:
				this.d03.innerHTML += "<BR>" + "1–{‹Câ4";
				break;
			}
		}
	}
	this.Cng_Ya = function(){
		tamaP = this.c_ya.value.substring(5).split("|");
	}
	this.Cng_Tama = function(){
		this.Cng_Kobetu();
		var addGunCri=0;
		if (this.gou_enemi && this.c_tr.value >= 30 && this.d_spec.innerHTML.lastIndexOf("“V—’•Ší") > 0) addGunCri += 3; //„í‚Å‚Q•”ˆÊˆÈã‚Å“V—’•Ší
		switch (this.c_tama.value.substring(0,2)) {
		case "˜AË":
			motion = [motion[0],motion[1],0,10,15+addGunCri,15+addGunCri,10,8,8,5];
			this.d04.innerHTML = "‹ß‹——£<br>1.0”{";
			this.d05.innerHTML = "’†‹——£‚P<br>"+motion[4]/10+"”{";
			this.d06.innerHTML = "’†‹——£‚Q<br>"+motion[5]/10+"”{";
			this.d07.innerHTML = "‰“‹——£‚P<br>1.0”{";
			this.d08.innerHTML = "‰“‹——£‚Q<br>0.8”{";
			this.d09.innerHTML = "‰“‹——£‚R<br>0.8”{";
			this.d010.innerHTML = "‰“‹——£‚S<br>0.5”{";

			if (!this.c_ya.length || this.c_tama.value !== this.c_ya.options[0].value) { //ŒÂ•Ê–îƒŠƒXƒgƒ{ƒbƒNƒX‚ª–³‚¯‚ê‚ÎƒZƒbƒg
				tamaP = this.c_tama.value.substring(5).split("|");
				//–îƒZƒbƒg
				this.c_ya.length = 0;
				var wkY = this.c_tama.value.substring(0,5);
				this.c_ya.length = 0,this.c_ya.style.display = "inline";
				this.c_ya.options[0] = new Option("‘S–½’†",this.c_tama.value);
				for (var i=0,j=1,m=tamaP.length;i<m;i++,j++) this.c_ya.options[j] = new Option(j+"–î:"+tamaP[i],wkY+tamaP[i]);
			}
			break;
		case "ŠgU":
			motion = [motion[0],motion[1],0,10,15+addGunCri,10,8,8,5];
			this.d04.innerHTML = "‹ß‹——£<br>1.0”{";
			this.d05.innerHTML = "’†‹——£‚P<br>"+motion[4]/10+"”{";
			this.d06.innerHTML = "’†‹——£‚Q<br>1.0”{";
			this.d07.innerHTML = "‰“‹——£‚P<br>0.8”{";
			this.d08.innerHTML = "‰“‹——£‚Q<br>0.8”{";
			this.d09.innerHTML = "‰“‹——£‚R<br>0.5”{";
			this.d010.innerHTML = "‰“‹——£‚S<br>-";

			if (!this.c_ya.length || this.c_tama.value !== this.c_ya.options[0].value) { //ŒÂ•Ê–îƒŠƒXƒgƒ{ƒbƒNƒX‚ª–³‚¯‚ê‚ÎƒZƒbƒg
				tamaP = [this.c_tama.value.substring(5)];
				//–îƒZƒbƒg
				this.c_ya.length = 0;
				var wkY = this.c_tama.value.substring(0,5);
				this.c_ya.options[0] = new Option("’†‰›:"+tamaP[0],this.c_tama.value);
				var j = wkY !== "ŠgULV3" ? tamaP[0] - 1 : tamaP[0]; //ŠgULV3ˆÈŠO‚Í-1
				this.c_ya.options[1] = new Option("1 –î:"+j,wkY+j);
				if (wkY === "ŠgULV3" || wkY === "ŠgULV4") {
					j -= 1;
					this.c_ya.options[2] = new Option("2 –î:"+j,wkY+j);
				}
			}
			this.Cls_Table();
			break;
		case "ŠÑ’Ê":
			motion = [motion[0],motion[1],0,10,15+addGunCri,15+addGunCri,15+addGunCri,10,8,5];
			this.d04.innerHTML = "‹ß‹——£<br>1.0”{";
			this.d05.innerHTML = "’†‹——£‚P<br>"+motion[4]/10+"”{";
			this.d06.innerHTML = "’†‹——£‚Q<br>"+motion[5]/10+"”{";
			this.d07.innerHTML = "‰“‹——£‚P<br>"+motion[6]/10+"”{";
			this.d08.innerHTML = "‰“‹——£‚Q<br>1.0”{";
			this.d09.innerHTML = "‰“‹——£‚R<br>0.8”{";
			this.d010.innerHTML = "‰“‹——£‚S<br>0.5”{";

			if (!this.c_ya.length || this.c_tama.value !== this.c_ya.options[0].value) { //ŒÂ•Ê–îƒŠƒXƒgƒ{ƒbƒNƒX‚ª–³‚¯‚ê‚ÎƒZƒbƒg
				tamaP = [this.c_tama.value.substring(5)];
				//–îƒZƒbƒg
				this.c_ya.length = 0;
				this.c_ya.options[0] = new Option("1Hit:"+tamaP[0],this.c_tama.value);
			}
			break;
		case "ƒI[":
			this.d04.innerHTML = "‹ß‹——£<br>1.0”{";
			this.d05.innerHTML = "’†‹——£<br>1.5”{";
			this.d06.innerHTML = "‰“‹——£‚P<br>1.5”{";
			this.d07.innerHTML = "‰“‹——£‚Q<br>1.5”{";
			this.d08.innerHTML = "‰“‹——£‚R<br>1.5”{";
			this.d09.innerHTML = "‰“‹——£‚S<br>1.0”{";
			this.d010.innerHTML = "‰“‹——£‚T<br>0.8”{";
			motion = [motion[0],motion[1],0,10,15,15,15,15,10,8];

			if (!this.c_ya.length || this.c_tama.value !== this.c_ya.options[0].value) { //ŒÂ•Ê–îƒŠƒXƒgƒ{ƒbƒNƒX‚ª–³‚¯‚ê‚ÎƒZƒbƒg
				tamaP = [this.c_tama.value.substring(5)];
				//–îƒZƒbƒg
				this.c_ya.length = 0;
				this.c_ya.options[0] = new Option("1–î:"+tamaP[0],this.c_tama.value);
			}
			break;
		}
	}
	this.Cng_Style = function(){
		if (this.c_Style.value.charAt(0) === "’n"){
			this.c_mei2.innerHTML = "";
			motion[0] = "10";
			motion[1] = "18";
			if (this.c_tama.length > 3) this.c_tama.length = 4;
		} else {
			motion[0] = "18|18";
			motion[1] = "9|9|9|22";
			if (this.c_Style.value.charAt(0) === "—’"){
				this.c_mei2.innerHTML = "‚µ‚á‚ª‚İ";
				var w = this.c_tama;
				w.options[w.length] = new Option("4:µ°× LV4|12","ƒI[LV412");
				w.options[w.length] = new Option("5:µ°× LV5|12","ƒI[LV512");
				if (!ckFull) {
					w.options[w.length-2].text = w.options[w.length-2].text.substring(0,7);
					w.options[w.length-1].text = w.options[w.length-1].text.substring(0,7);
				}
			} else {
				if (this.c_tama.length > 3) this.c_tama.length = 4;
				this.c_mei2.innerHTML = "";
			}
		}
		this.Cng_Kobetu();
	}
	break;
}
this.c_betu.style.display = this.c_mei.innerHTML ? "inline" : "none";
this.c_betu2.style.display = this.c_mei2.innerHTML ? "inline" : "none";
this.Cng_Fw();
this.Cng_Style();
this.d_att.innerHTML = this.d_zoku.innerHTML = this.d_cri.innerHTML = this.d_hr.innerHTML = this.d_spec.innerHTML = this.g_att.innerHTML = this.g_cri.innerHTML = this.g_attB.innerHTML = this.g_attN.innerHTML = this.g_zokuN.innerHTML = "<br>";

//–‘O“WŠJ
var wp = equip[bukiId[wpid]];
for(var id in wp) {
	if (typeof(wp[id]) !== "string") break;
	wp[id] = wp[id].split(",");
}
this.Set_SinkaAtt();
this.search();
this.Cls_Table();
}
//------------------------------------•ŠíŒŸõ----------
,search : function (){
if (wpid === "") return;
this.s_wp.length = 1;
this.s_wp.options[0].text = "|" + bukiName[wpid] + "|";
var wkList = [],i=0,wp = equip[bukiId[wpid]],M=Math.round;
var type = this.s_srt1.value,S1 = this.s_srt2.value,S2 = (type >= "6" ? aZyouAt : aZokuAt),rare = this.s_rare.value,HR = this.s_hr.value,slot = this.s_slot.value,ck_100 = this.m_sugo.checked,ck_HC = this.m_hc.value !== "1,1",Rst = this.s_rst.value;
var Rep = ckFull ? setRep(this) : "1-1i1t2-2i2m2t3-3i3g3t4g4k5-5p";
var check_F = function(e1,e2,e3){return true},check = aSpec;
switch (wpid) {
case 1: //ƒwƒrƒBƒ{ƒEƒKƒ“
case 5: //ƒ‰ƒCƒgƒ{ƒEƒKƒ“
	type = "-"; //ƒ^ƒCƒv‚ÍŒÅ’è
	check = aGun + Number(this.s_tama.value);  //’e
	if (S1 === "2") S2 = check; //‘®«‡‚ğ’e‡‚É•ÏX
	var kick = this.s_kick.value,reload = this.s_reload.value,gunAdd = this.s_gunAdd.checked ? "+":"-";
	check_F = function(e1,e2,e3){return (e1 !== "0" && e1.indexOf(gunAdd) && e2 >= kick && e3 >= reload)}
	break;
case 8: //ë—Â“J
	if (this.s_fue.value) var fue = this.s_fue.value,check_F = function(e1,e2,e3){return e1.lastIndexOf(fue) >= 0}
	break;
case 9: //ƒKƒ“ƒ‰ƒ“ƒX
	if (this.s_guns.value) var guns = this.s_guns.value,check_F = function(e1,e2,e3){return e1.lastIndexOf(guns) >= 0}
	break;
case 10: //‹|
	check = aKick; //–î
	if (this.s_ya.value) {
		switch (this.s_tame.value) {
		case "1":
			var reg = new RegExp(this.s_ya.value + "./.../.../...");
			break;
		case "2":
			var reg = new RegExp(".../" + this.s_ya.value + "./.../...");
			break;
		case "3":
			var reg = new RegExp(".../.../" + this.s_ya.value + "./...");
			break;
		case "4":
			var reg = new RegExp(".../.../.../" + this.s_ya.value + ".");
			break;
		}
		check_F = function(e1,e2,e3){return reg.test(e1)}
	}
	break;
}
for(var id in wp) {
	var Txt = wp[id];
	if ((type === "-" ||
		 type === "0" && !Txt[aZokuAt] && !Txt[aZyouAt] ||
		 type !== "0" && (type === Txt[aZoku] || type === Txt[aZyou]) ) &&
		(Rep.indexOf(Txt[aCre]) >= 0) && 
		(check_F(Txt[check],Txt[aKick],Txt[aRelo])) && 
		(rare >= Txt[aRare]-0) &&
		((Rst === "0") || (Txt[aRst] - Rst <= 0 && Txt[aRst] > 0)) && 
		(slot <= Txt[aSlot]) &&
		(Txt[aHR] - HR <= 0) ) {

		var w = wkList[i++] = [0,Txt,id,0],wAt = Number(Txt[aAt]),wZk = Number(Txt[S2]),wCri = Number(Txt[aCri]);
		//¦˜r‚Ìê‡UŒ‚—Í‚ğ•ÏX
		if (ck_100 && Txt[aType] === "P") wAt += 10,wCri += 20;
		//HC‚Ìê‡A‰“‹——£‚Í‰ïS‚ğ•ÏX
		if (ck_HC && (wpid === 1 || wpid === 5 || wpid === 10) && Txt[aType] === "H") wCri += 40;
		//ƒ\[ƒgƒL[
		switch (S1) {
//		case "0": //–¼‘O
//			break;
		case "1": //UŒ‚
			w[0] = wAt * 1000 + wZk,w[3] = wAt;
			break;
		case "2": //‘®«
			if (wZk < 0) wZk *= -1; //ƒKƒ“‚Ìê‡’e‚Ì‚¾‚©‚ç
			w[0] = wZk * 1000 + wAt + (wCri ? M(wAt * 25 * wCri / 10000) : 0),w[3] = wZk;
			break;
		case "3": //‰ïS
			w[3] = wAt + (wCri ? M(wAt * 25 * wCri / 10000) : 0),w[0] = w[3] * 1000 + wZk;
			break;
		}
	}
}
if (S1 !== "0") wkList.sort(function (a, b){return b[0]-a[0]});
else if (ckOpera) {
	var Fulltohalf = (function (){
		var han = "0123456789.,-+ABCDEFGHIJKLMNOPQRSTUVWXYZ±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜ¦İ±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜ¦İ§§¨¨©©ªª««¯¯¬¬­­®®¶·¸¹º»¼½¾¿ÀÁÂÃÄÊËÌÍÎÊËÌÍÎ¶·¸¹º»¼½¾¿ÀÁÂÃÄÊËÌÍÎÊËÌÍÎ³";
		var zen = "‚O‚P‚Q‚R‚S‚T‚U‚V‚W‚XDC|{‚`‚a‚b‚c‚d‚e‚i‚g‚h‚i‚j‚k‚l‚m‚n‚o‚p‚q‚r‚s‚t‚u‚v‚w‚x‚yƒAƒCƒEƒGƒIƒJƒLƒNƒPƒRƒTƒVƒXƒZƒ\ƒ^ƒ`ƒcƒeƒgƒiƒjƒkƒlƒmƒnƒqƒtƒwƒzƒ}ƒ~ƒ€ƒƒ‚ƒ„ƒ†ƒˆƒ‰ƒŠƒ‹ƒŒƒƒƒ’ƒ“‚ ‚¢‚¤‚¦‚¨‚©‚«‚­‚¯‚±‚³‚µ‚·‚¹‚»‚½‚¿‚Â‚Ä‚Æ‚È‚É‚Ê‚Ë‚Ì‚Í‚Ğ‚Ó‚Ö‚Ù‚Ü‚İ‚Ş‚ß‚à‚â‚ä‚æ‚ç‚è‚é‚ê‚ë‚í‚ğ‚ñ‚Ÿƒ@‚¡ƒB‚£ƒD‚¥ƒF‚§ƒH‚Áƒb‚áƒƒ‚ãƒ…‚åƒ‡‚ª‚¬‚®‚°‚²‚´‚¶‚¸‚º‚¼‚¾‚À‚Ã‚Å‚Ç‚Î‚Ñ‚Ô‚×‚Ú‚Ï‚Ò‚Õ‚Ø‚ÛƒKƒMƒOƒQƒSƒUƒWƒYƒ[ƒ]ƒ_ƒWƒdƒfƒhƒoƒrƒuƒxƒ{ƒpƒsƒvƒyƒ|ƒ”";
		return function (strVal) {
			for (var i=0,str = "",m=strVal.length,c = "",n=0; i<m; i++){
				c = strVal.charAt(i),n = zen.indexOf(c,0);
				str += (n >= 0) ? han.charAt(n) : "Ş" + c;
			}
			return str;
		}
	})();
//	for(var i=0,m=wkList.length; i<m; wkList[i][0] = Fulltohalf(wkList[i++][1][aName]));
//	wkList.sort();
	wkList.sort(function (a, b){return Fulltohalf(b[1][aName]) < Fulltohalf(a[1][aName]) ? 1 : -1})
}

var wkatp = 99999, AttypeN = (S1 === "3") ? "‰ïS•t”{—¦:" : (S1 === "2") ? (wpid === 1 || wpid === 5 ) ? "’e”:" : "‘®«’l:" : "•Ší”{—¦:";
for(var i = 0,c = 1,m = wkList.length; i < m; i++) {
	if (S1 !== "0" && wkatp-0 > wkList[i][3]-0) {
		var wk = this.s_wp.options[c++] = new Option("|"+AttypeN+wkList[i][3]+"|","");
		wk.style.backgroundColor = "aquamarine";
		wkatp = wkList[i][3];
	}
	//‚Æ‚è‚ ‚¦‚¸–vthis.s_wp.options[c++] = new Option(wkList[i][1][aName]+(wkList[i][1][aSpec].indexOf("ƒŠ[ƒ`F") > 0 ? "|"+wkList[i][1][aSpec].split("ƒŠ[ƒ`F")[1].replace("</small>","") : ""),wkList[i][2]);
	this.s_wp.options[c++] = new Option(wkList[i][1][aName],wkList[i][2]);
}
}
//------------------------------------„”L“ü—Í—p----------
,Nekowp_set : function(){
if (this.i_att.value === "" || this.i_att.value === "0" || this.i_zoku.value === "" || this.i_cri.value === "") alert("”š“ü‚ê‚Ä");
var Txt = equip[bukiId[wpid]][this.s_wp.value];
Txt[aAt] = Math.ceil(this.i_att.value / bukiRitu[wpid] * 10);
Txt[aZokuAt] = Math.floor(this.i_zoku.value / 10);
Txt[aCri] = this.i_cri.value;
if (wpid === 10) Txt[aKick] = this.i_ya1.value + this.i_yaLv1.value + "/" + this.i_ya2.value + this.i_yaLv2.value + "/" + this.i_ya3.value + this.i_yaLv3.value + "/" + this.i_ya4.value + this.i_yaLv4.value
}
//------------------------------------•Ší•ÏX----------
,Cng_wp : function(){
if (!this.s_wp.value) return;
var Txt = equip[bukiId[wpid]][this.s_wp.value];
//„”L•Ší
if (Txt[aType] === "N") {
	this.i_zoku_disp.innerHTML = zokuName[Txt[aZoku]].charAt(0);
	this.i_yumi.style.display = wpid === 10 ? "" : "none"
	this.m_N.style.display = "";
	if (Txt[aAt] === "0") return false;
} else {
	this.m_N.style.display = "none";
}
//•\¦
this.d_att.innerHTML = ~~(Txt[aAt] * bukiRitu[wpid] / 10) + (Txt[aSlot] ? "<br> [" + Txt[aSlot] + "]" : "");
var wk_zoku = "";
if (wpid === 1 || wpid === 5){
	wk_zoku = "LV5‹­‰»";
} else {
	if (Txt[aZokuAt]) wk_zoku = zokuName[Txt[aZoku]] + Txt[aZokuAt] + "0"; //‘®«
	if (Txt[aZyouAt]) wk_zoku += (wk_zoku ? "<br>" : "") + zokuName[Txt[aZyou]] + Txt[aZyouAt] + "0"; //ó‘ÔˆÙí
}
if (Txt[aDef]) wk_zoku += (wk_zoku ? "<br>" : "") + "–hŒä+" + Txt[aDef];

this.d_zoku.innerHTML = wk_zoku ? wk_zoku : "<br>";
this.d_cri.innerHTML = Txt[aCri];
var wk_rep = "HR:" + Txt[aHR] + " Ú±:" + Txt[aRare] + "<br>";
	switch (Txt[aCre].charAt(0)) {
	case "1": //ë—Â
		break;
	case "2": //—Â’c
		wk_rep += "—Â’c";
		break;
	case "3": //ƒlƒJƒtƒF
		wk_rep += "ƒJƒtƒF";
		break;
	case "4": //‰Û‹à
		wk_rep += "‰Û‹à";
		break;
	case "5": //“Á“T
		wk_rep += "“Á“T";
		break;
	}
	switch (Txt[aCre].charAt(1)) {
	case "-": //
		break;
	case "i": //ƒCƒxƒ“ƒg
		wk_rep += "ƒCƒx";
		break;
	case "m": //ëlÕ
		wk_rep += "ëlÕ";
		break;
	case "g": //ƒKƒ`ƒƒ
		wk_rep += "ƒKƒ`ƒƒ";
		break;
	case "k": //ƒLƒbƒg
		wk_rep += "ƒLƒbƒg";
		break;
	case "t": //èè‘Ê“V
		wk_rep += "èè‘Ê“V";
		break;
	case "p": //ƒpƒbƒP[ƒW
		wk_rep += "ƒpƒbƒP";
		break;
	}
this.d_hr.innerHTML = wk_rep;
var wk_d_spec="",wk_d_type="";
switch (Txt[aType]) {
case "":
	break;
case "G":
	wk_d_type = "<small><em>„í•Ší</em></small>";
	break;
case "T":
	wk_d_type = "<small><em>“V—’•Ší</em></small>";
	break;
case "O":
	wk_d_type = "<small><em>e•ûˆó</em></small>";
	break;
case "H":
	wk_d_type = "<small><em>‚g‚b•Ší</em></small>";
	break;
case "S":
	wk_d_type = "<small><em>i‰»•Ší</em></small>";
	break;
case "N":
	wk_d_type = "<small><em>„”L•Ší</em></small>";
	break;
}
switch (wpid) {
case 1: //ƒwƒrƒBƒ{ƒEƒKƒ“
case 5: //ƒ‰ƒCƒgƒ{ƒEƒKƒ“
	//‘•“U
	//”½“®
	wk_d_spec = reloadName[Txt[aRelo]] + " " + kickName[Txt[aKick]] + wk_d_type;
	if (Txt[aSpec] && wpid === 5) {
		wk_d_spec += (Txt[aType] === "G" || Txt[aType] === "N" || Txt[aType] === "T" ? "<br>’´‘¬Ë:" : "<br>‘¬Ë:") + Txt[aSpec].split("S")[0];
	}
	break;
case 10: //‹|
	wk_d_spec = Txt[aSpec].split("S")[0] + wk_d_type + "<br>" + Txt[aKick];
	break;
case 8: //ë—Â“J
	wk_d_spec = "<ul>" + Txt[aSpec].split("^")[0].replace(/([roygbwp])(\d+)/g,"<li class=$1 style='width:$2px'>").replace("|","</ul><ul style=\"float:left\">") + "</ul>";
	if (this.m_hc.value !== "1,1" && Txt[aType] === "H") wk_d_spec = wk_d_spec.replace(/class\=w/g,"class=p").replace(/class\=b/g,"class=w").replace(/class\=g/g,"class=b").replace(/class\=y/g,"class=g").replace(/class\=o/g,"class=y").replace(/class\=r/g,"class=o"); //HCƒNƒGƒXƒg
	var wkTxt = Txt[aSpec].split("^")[1];
	wk_d_spec += "<a class=f href='../buki/fue.htm?"+wkTxt.substring(0,3)+"' target=_blank>"+Onpu[wkTxt.charAt(0)]+Onpu[wkTxt.charAt(1)]+Onpu[wkTxt.charAt(2)]+"</a>" + wk_d_type;
	break;
default:
	wk_d_spec = "<ul>" + Txt[aSpec].split("^")[0].replace(/([roygbwp])(\d+)/g,"<li class=$1 style='width:$2px'>").replace("|","</ul><ul style=\"float:left\">") + "</ul>";
	if ((this.m_hc.value !== "1,1" && Txt[aType] === "H") || (this.gou_enemi && this.c_tr.value >= 30 && Txt[aType] === "T")) wk_d_spec = wk_d_spec.replace(/class\=p/g,"class=s").replace(/class\=w/g,"class=p").replace(/class\=b/g,"class=w").replace(/class\=g/g,"class=b").replace(/class\=y/g,"class=g").replace(/class\=o/g,"class=y").replace(/class\=r/g,"class=o"); //HCƒNƒGƒXƒgor“V—’„í

	if (Txt[aSpec].lastIndexOf("^") >= 0) {
		var wkTxt = Txt[aSpec].split("^")[1].split("S")[0];
		wk_d_spec += "<small>" + wkTxt + "</small>";
	}
	wk_d_spec += wk_d_type;
	break;
}
this.d_spec.innerHTML = wk_d_spec;

//i‰»•Ší
if (Txt[aType] === "S") {
	this.c_sinka.style.display = "inline";
	var wk = Txt[aSpec].split("S")[1].split("!");
	for (var i=0; i<100 && this.s_rare.value >= wk[i].split(".")[2]-0; this.c_sinka.options[i] = new Option(i+1,wk[i++]));

//	w.style.position = "relative";
//	w.style.posTop = "-10";
	this.c_sinka.selectedIndex = i-1;
	this.c_kensyo.options[28].style.backgroundColor = "";
} else {
	this.c_sinka.style.display = "none";
	this.c_kensyo.options[28].style.backgroundColor = "gray";
}
switch (wpid) {
case 1: //ƒwƒrƒBƒ{ƒEƒKƒ“
case 5: //ƒ‰ƒCƒgƒ{ƒEƒKƒ“
//case 9: //ƒKƒ“ƒ‰ƒ“ƒX ƒKƒ“ƒX‚ÍŒvZ‚ÅŒÄ‚Ño‚·–‚É•ÏX
case 10: //‹|
	this.Cng_Wp_Sub(Txt);
	break;
}
}
//------------------------------------ƒ‚ƒ“ƒXƒ^[•ÏX----------
,Cng_Mons : function(){
if (!this.m_enemi.value) return;
var wk = this.m_enemi.value.split("|");
//‘S‘Ì–hŒä—¦
var bk_i = this.m_def.selectedIndex,bk_v = this.m_def.value,bk_t = this.m_def.options[bk_i].text;
this.m_def.length = 1;
for (var i = 0,w = wk[1].split("I"),m = w.length-1; i < m ; this.m_def.options[i+1] = new Option(w[i].replace(",",":"), w[i++].split(",")[1]));
if (this.m_def.length !== 1 && this.m_def.length-1 >= bk_i && bk_v === this.m_def.options[bk_i].value && bk_t === this.m_def.options[bk_i].text) this.m_def.selectedIndex = bk_i;
//“{‚è
this.m_ang.value = (wk[2] === "0" || wk[2] === "1.00") ? 1 : wk[2];
//HC
bk_i = this.m_hc.selectedIndex,bk_v = this.m_hc.value,bk_t = this.m_hc.options[bk_i].text;
this.m_hc.length = 1;
for (var i = 0,w = wk[3].split("I"),m = w.length-1; i < m ; this.m_hc.options[i+1] = new Option(w[i].split(",")[0], w[i].split(",")[1] + "," + w[i++].split(",")[2]));
this.m_hc.disabled = this.m_hc.length === 1;
if (this.m_hc.length !== 1 && this.m_hc.length-1 >= bk_i && bk_v === this.m_hc.options[bk_i].value && bk_t === this.m_hc.options[bk_i].text) this.m_hc.selectedIndex = bk_i;

//•”ˆÊİ’è(”äŠr”Å‚Ì‚İ)
if (!ckFull) {
	if (this.c_buimei.length !== 0) {
		bk_i = this.c_buimei.selectedIndex,bk_t = this.c_buimei.options[bk_i].text;
	} else {
		bk_i = 0;
	}
	this.c_buimei.length = 0
}
//•”ˆÊİ’è
var bui = wk[0].split(":");
for (var i = 0,m = bui.length; i < m; bui[i] = bui[i++].split(","));
for (var i=0,j=1; i < 7; i++,j++) {
	if (ckFull) {
		if (bui.length > i && bui[i].length > 1) {
			this["d" + j + "0"].innerHTML = bui[i][0];
			this["m0" + i].innerHTML = bui[i][0];
			this["m1" + i].innerHTML = bui[i][1];
			this["m2" + i].innerHTML = bui[i][2];
			this["m3" + i].innerHTML = bui[i][3];
			this["m4" + i].innerHTML = bui[i][4];
			this["m5" + i].innerHTML = bui[i][5];
			this["m6" + i].innerHTML = bui[i][6];
			this["m7" + i].innerHTML = bui[i][7];
			this["m8" + i].innerHTML = bui[i][8];
		} else {
			this["d" + j + "0"].innerHTML =this["m0" + i].innerHTML =this["m1" + i].innerHTML =this["m2" + i].innerHTML =this["m3" + i].innerHTML =this["m4" + i].innerHTML =this["m5" + i].innerHTML =this["m6" + i].innerHTML =this["m7" + i].innerHTML =this["m8" + i].innerHTML = "<br>";
		}
		this["d" + j + "1"].innerHTML =this["d" + j + "2"].innerHTML =this["d" + j + "3"].innerHTML =this["d" + j + "4"].innerHTML =this["d" + j + "5"].innerHTML =this["d" + j + "6"].innerHTML =this["d" + j + "7"].innerHTML =this["d" + j + "8"].innerHTML =this["d" + j + "9"].innerHTML =this["d" + j + "10"].innerHTML =this["d" + j + "11"].innerHTML = "<br>";
	} else {
		if (bui.length > i && bui[i].length > 1) this.c_buimei.options[i] = new Option(bui[i][0], bui[i]);
	}
}
if (!ckFull && this.c_buimei.length-1 >= bk_i && bk_t === this.c_buimei.options[bk_i].text) this.c_buimei.selectedIndex = bk_i;
this.gou_enemi = this.m_enemi.options[this.m_enemi.selectedIndex].text.lastIndexOf("„í") > 0
}
//------------------------------------i‰»LV•ÏX----------
,Set_SinkaAtt : function(){
if (wpid === "") return;
var wp = equip[bukiId[wpid]];
for(var id in wp) {
	var Txt = wp[id];
	if (Txt[aType] === "S"){
		var wk = Txt[aSpec].split("S")[1].split("!");
		for (var i=0; i<100 && this.s_rare.value >= wk[i].split(".")[2]-0 ;i++);
		if (i > 0) {
			var w = wk[--i].split(".");
			Txt[aAt] = w[0],Txt[aZokuAt] = w[1],Txt[aRare] = w[2];
		}
	}
}
}
//------------------------------------ƒtƒŒ[ƒ€‚P‚©‚ç•¡Ê----------
,datacopy : function(){
var w = parent.damage1.DamageForm;

this.m_sugo.checked = w.m_sugo.checked;
monsSet(this.m_sugo.checked);

this.m_enemi.value = w.m_enemi.value;
this.m_hc.selectedIndex = this.m_def.selectedIndex = 0;
this.Cng_Mons();
this.m_ang.checked = w.m_ang.checked;
this.m_def.value = w.m_def.value;
this.m_hc.selectedIndex = w.m_hc.selectedIndex;

this.s_srt1.value = w.s_srt1.value;
this.s_srt2.value = w.s_srt2.value;
this.s_rare.value = w.s_rare.value;
this.s_slot.value = w.s_slot.value;
this.s_hr.value = w.s_hr.value;

this.s_gunAdd.checked = w.s_gunAdd.checked;
this.s_guns.value = w.s_guns.value;
this.s_fue.value = w.s_fue.value;
this.s_ya.value = w.s_ya.value;
this.s_tame.value = w.s_tame.value;
this.s_tama.value = w.s_tama.value;
this.s_reload.value = w.s_reload.value;
this.s_kick.value = w.s_kick.value;

for (var i in bukiName) {
	if (w.s_wp.options[0].text.indexOf(bukiName[i]) >= 0) wpid = i;
}
this.Set_Buki(wpid);
//this.s_wp.value = w.s_wp.value;
this.Cng_wp();

this.c_Style.value = w.c_Style.value;
this.Cng_Style();

this.c_sharp.value = w.c_sharp.value;
this.c_kiri.value = w.c_kiri.value;
//this.c_tama.value = w.c_tama.value;
this.c_betu.value = w.c_betu.value;
this.c_waza.value = w.c_waza.value
this.Cng_Sr();
this.c_betu2.value = w.c_betu2.value;
this.c_gohu.checked = w.c_gohu.checked;
this.c_tume.checked = w.c_tume.checked;
this.c_mesi.value = w.c_mesi.value;
this.c_tane.value = w.c_tane.value;
this.c_fueAT.value = w.c_fueAT.value;
this.c_fueZK.checked = w.c_fueZK.checked;
this.c_attUp.value = w.c_attUp.value;
this.c_criUp.value = w.c_criUp.value;
this.c_soko.value = w.c_soko.value;
this.c_zkUp.value = w.c_zkUp.value;
this.c_zkUp2.value = w.c_zkUp2.value;
this.c_honki.value = w.c_honki.value;
this.c_tamaUp.checked = w.c_tamaUp.checked;
this.c_guns.value = w.c_guns.value;
this.c_izyou.checked = w.c_izyou.checked;
this.c_kizuna.checked = w.c_kizuna.checked;
this.c_garou.value = w.c_garou.value;
this.c_sr.value = w.c_sr.value;
this.c_karyudo.value = w.c_karyudo.value;
this.c_cri[0].checked = w.c_cri[0].checked;
this.c_cri[1].checked = w.c_cri[1].checked;
this.c_cri[2].checked = w.c_cri[2].checked;
this.c_gou[0].checked = w.c_gou[0].checked;
this.c_gou[1].checked = w.c_gou[1].checked;
this.c_buimei.value = w.c_buimei.value;
this.c_shoot.checked = w.c_shoot.checked;
this.c_mission.value = w.c_mission.value;
this.c_tr.value = w.c_tr.value;

//‹|‚ÌŒÂ•ÊBOX‚Í•ŠíˆË‘¶‚È‚Ì‚ÅƒpƒX
if (wpid !== 10) this.c_betu.value = w.c_betu.value;

if (this.c_betu.style.display !=="none") this.Cng_Kobetu();
if (this.c_betu2.style.display !=="none") this.Cng_Kobetu2();
this.calc();
}
//------------------------------------ƒe[ƒuƒ‹‰Šú‰»----------
,Cls_Table : function(){
for (var j=1;j<12;j++) {
	this["d1" + j].innerHTML = "<br>";
	if (ckFull) this["d2" + j].innerHTML =this["d3" + j].innerHTML =this["d4" + j].innerHTML =this["d5" + j].innerHTML =this["d6" + j].innerHTML =this["d7" + j].innerHTML = "<br>";
}
if (!ckFull) this.d00.innerHTML = "<br>";
}
//------------------------------------ŒvZ----------
,calc : function(){
if (!this.s_wp.value) return;
//•Ší
var Txt = equip[bukiId[wpid]][this.s_wp.value];
//ƒQ[ƒW
var sharp = [500,750,1000,1125,1250,1400,1500,1600];
var sharpZoku = [2500,5000,7500,10000,10625,11250,11500,12000];
var sharpCl = [0,0,0,0,5,10,10,10][this.c_sharp.value];

var Mr = Math.round,Mf = Math.floor,Ma = Math.abs;
var MStyle = this.c_Style.value.charAt(0) === "’n" ? 0 : this.c_Style.value.charAt(0) === "“V" ? 1 : 2;
var KickP = this.c_sharp.value <= 4 ? [23,45,100] : [16,31,69.9];
//a‚è•û
if (this.c_sharp.value <= 2) {
	this.c_kiri.disabled = false;
	var zan = this.c_kiri.value;
} else {
	this.c_kiri.disabled = true;
	this.c_kiri.value = 100;
	var zan = 100;
}
//Šî‘b
var cAt = Number(Txt[aAt]),cCri = Number(Txt[aCri]),cZoku = Number(Txt[aZoku]),cZokuAt = Number(Txt[aZokuAt]),cZyou = Number(Txt[aZyou]),cZyouAt = Number(Txt[aZyouAt]);
//i‰»•Ší
if (Txt[aType] === "S") {
	var w = this.c_sinka.value.split(".");
	cAt = Number(w[0]),cZokuAt = Number(w[1]);
	//‰æ–Ê•\¦
	this.d_att.innerHTML = ~~(cAt * bukiRitu[wpid] / 10);
	if (cZokuAt) this.d_zoku.innerHTML = zokuName[cZoku] + cZokuAt + "0"
	
	if (wpid === 9) { //ƒKƒ“ƒ‰ƒ“ƒXŒÂ•Ê
		if (this.c_sinka.selectedIndex < 6) {
			var i = 1;
		} else if (this.c_sinka.selectedIndex < 15) {
			var i = 2;
		} else if (this.c_sinka.selectedIndex < 35) {
			var i = 3;
		} else if (this.c_sinka.selectedIndex < 65) {
			var i = 4;
		} else if ((Txt[aName].lastIndexOf("W‘R") > 0 || Txt[aName].lastIndexOf("ˆºà£") > 0 || Txt[aName].lastIndexOf("àŠ‘R") > 0) && this.c_sinka.selectedIndex < 75) {
			var i = 5;
		} else if (!(Txt[aName].lastIndexOf("W‘R") > 0 || Txt[aName].lastIndexOf("ˆºà£") > 0 || Txt[aName].lastIndexOf("àŠ‘R") > 0) && this.c_sinka.selectedIndex < 85) {
			var i = 5;
		} else {
			var i = 6;
		}
		if (this.d_spec.innerHTML.indexOf("LV1") > 0) {
			this.d_spec.innerHTML = this.d_spec.innerHTML.replace("LV1","LV"+i)
		} else if (this.d_spec.innerHTML.indexOf("LV2") > 0) {
			this.d_spec.innerHTML = this.d_spec.innerHTML.replace("LV2","LV"+i)
		} else if (this.d_spec.innerHTML.indexOf("LV3") > 0) {
			this.d_spec.innerHTML = this.d_spec.innerHTML.replace("LV3","LV"+i)
		} else if (this.d_spec.innerHTML.indexOf("LV4") > 0) {
			this.d_spec.innerHTML = this.d_spec.innerHTML.replace("LV4","LV"+i)
		} else if (this.d_spec.innerHTML.indexOf("LV5") > 0) {
			this.d_spec.innerHTML = this.d_spec.innerHTML.replace("LV5","LV"+i)
		} else if (this.d_spec.innerHTML.indexOf("LV6") > 0) {
			this.d_spec.innerHTML = this.d_spec.innerHTML.replace("LV6","LV"+i)
		}
	}
}
var izyouUP = this.c_izyou.checked ? 1125 : 1000; //ó‘ÔˆÙí
var zokuDUP =  this.c_fueZK.checked ? 11 : 10; //‘®«ù—¥

//var motion = motion,,wp_type = this.wp_type,tamaP = tamaP;
var hosei = wp_hosei,at_hosei = 100,dt_hosei = 100;

//ƒ~ƒbƒVƒ‡ƒ“
var BairituMax = 800,BairituAdd = 0;
if (this.c_mission.value !== "0") {
	for (var i=0;i<this.c_mission.value-0;i++) {
		switch (mission[i]) {
		case 1: //•Ší”{—¦UP
			BairituAdd++;
			break;
		case 2: //•Ší”{—¦ãŒÀUP
			BairituMax += 5;
			break;
		}
	}
}

//–¼Ìİ’èE‰Šú’lİ’è
switch (wpid) {
case 0: //‘åŒ•
	if (this.c_betu.selectedIndex && this.c_kiri.value === "100") zan = 105; //’†• 
	break;
case 1: //ƒwƒrƒBƒ{ƒEƒKƒ“
	if (this.c_betu.selectedIndex) cAt += Txt[aType] === "G" || Txt[aType] === "N" || Txt[aType] === "T" ? 40 : 20;
case 5: //ƒ‰ƒCƒgƒ{ƒEƒKƒ“
	zan = 100;
	if (this.c_tamaUp.checked) { //’e‹­‰»
		switch (this.c_tama.value) {
		case "0":
		case "1":
		case "2": //’Êí’e
		case "3":
		case "4":
		case "5": //ŠÑ’Ê’e
			hosei = 110;break;
		case "9": //U’e
			hosei = 130;break;
		}
	}
	if (this.c_tama.value === "12") { //ó‘ÔˆÙí’e
		for (var i=0;i<6;i++) this["d0"+(i+1)].innerHTML = this["d0"+(i+1)].innerHTML.substring(0,this["d0"+(i+1)].innerHTML.length-2) + ~~(yaZoku[i] * izyouUP / 1000 * (wpid === 5 && MStyle === 2 ? 13 : 10) /10);
	}
	var soku_hosei = (this.d01.innerHTML+this.d02.innerHTML+this.d03.innerHTML+this.d04.innerHTML).indexOf("‘¬Ë") >=0 ? 10 : 1;
	break;
case 6: //‘oŒ•
	at_hosei = this.c_betu2.value; //n‘Å‚¿
	break;
case 7: //‘¾“
	if (this.c_betu2.selectedIndex && this.c_kiri.value === "100") zan = 105; //’†• 
	if (this.c_betu.selectedIndex) { //‹Cnó‘Ô
		if (this.c_tane.value === "0") this.c_tane.value = 10; //‹­§‚Åíg—p
		if (this.c_fw.checked) this.c_tane.value = 40; //ƒtƒB[ƒ`ƒƒ[
		if (this.c_waza.selectedIndex === 1) {//SR‹Z
			at_hosei = 1125/10*1.1;
		} else {
			at_hosei = 1125/10;
		}
	}
	break;
case 9: //ƒKƒ“ƒ‰ƒ“ƒX
	if (MStyle) {//“V—’
		//ƒq[ƒgƒuƒŒ[ƒh’†‚ÍAÂƒQ[ƒWˆÈ‰º‚Ìê‡A‚Pƒ‰ƒ“ƒN‚t‚o‚·‚é
		sharp = [500,1000,1125,1250,1400,1500,1600,1600];
		sharpZoku = [2500,7500,10000,10625,11250,11500,12000,12000];
	}
	break;
case 10: //‹|
	var tameP = [40,100,150,150,100,112.5][this.c_tama.selectedIndex];
	var tamePZoku = [5000,7500,10000,11250,10000,11000][this.c_tama.selectedIndex];
	zan = 100;
	wp_type = 3;
	if (Txt[aType] === "G" || Txt[aType] === "N" || Txt[aType] === "T") izyouUP = izyouUP * 15 / 10; //„í‚Íó‘ÔˆÙí1.5”{
	if (this.c_tamaUp.checked) { //’e‹­‰»
		switch (this.c_tama.value.substring(0,2)) {
		case "˜AË":
		case "ŠÑ’Ê":
			hosei = 110;break;
		case "ŠgU":
			hosei = 130;break;
		}
	}
	if (MStyle === 2) { //—’‚Ì‚µ‚á‚ª‚İŒ‚‚¿
		if (this.c_tama.selectedIndex >= 4) { //ƒI[ƒ‰ƒAƒ[
			hosei = 100;
			dt_hosei = 10;
		} else {
			switch (this.c_tama.selectedIndex) {
			case 0:	dt_hosei = 12;break;
			case 1:	dt_hosei = 13;break;
			default:	dt_hosei = 14;
			}
		}
	} else {
		dt_hosei = 10;
	}
	switch (this.c_betu.value) {
	case "0": break;
	case "1": //‹­Œ‚ƒrƒ“
		zan = (Txt[aType] === "G" || Txt[aType] === "N" || Txt[aType] === "T") && this.c_waza.selectedIndex === 1 ? 170 : Txt[aType] === "G" || Txt[aType] === "N" || Txt[aType] === "T" || this.c_waza.selectedIndex === 1 ? 160 : 150;break; //‹ßÚ‚ğ1.5”{@‹|‹S‚©„•Ší‚Í1.6”{@„•Ší‚Å‹|‹S‚Í1.7”{
		if (this.gou_enemi && this.c_tr.value >= 30 && Txt[aType] === "T") zan = 170; //„í‚Å‚Q•”ˆÊˆÈã‚Å“V—’
	case "9": //”šŒ‚ƒrƒ“
		//ƒI[ƒ‰ƒAƒ[‚Ìƒrƒ“
		if (MStyle === 2 && this.c_tama.selectedIndex >= 4) {
			yaZoku = this.c_soko.selectedIndex === 1 ? 55 : 37;
		}
		break;
	case "10": //‘ÅŒ‚ƒrƒ“
		wp_type = 2;break; //‘ÅŒ‚‚ÅŒvZ
	default: //ó‘ÔˆÙíƒrƒ“
		cZoku = cZokuAt = 0;
		var wk = this.d03.innerHTML.toUpperCase().split("<BR>");
		wk[2] = "1–{" + zokuName[this.c_betu.value].replace("F","") + ~~(yaZoku * (this.c_tama.selectedIndex === 0 ? 5 : this.c_tama.selectedIndex === 5 ? 11 : 10) * izyouUP * dt_hosei / 100000);
		this.d03.innerHTML = wk.join("<br>");
		break;
	}
}
//•\¦UŒ‚E•Ší”{—¦
cAt = Mf(
       Mf(
        Mf(
         (Mf(cAt * Number(this.c_karyudo.value) / 1000) + BairituAdd + (this.m_sugo.checked && Txt[aType] === "P" ? 10 : 0) + Number(this.c_mesi.value) + Number(this.c_tane.value) + Number(this.c_attUp.value) + (this.c_gohu.checked ? 6 : 0) + (this.c_tume.checked ? 9 : 0))
         * this.c_waza.value / 100
        )
        * this.c_fueAT.value / 100
       )
       * this.c_soko.value / 10 * at_hosei / 100
      )
      + (this.c_kizuna.checked ? 5 : 0) + (this.m_enemi.options[this.m_enemi.selectedIndex].text.lastIndexOf("„í") > 0 && (Txt[aType] === "G" || Txt[aType] === "T") ? this.c_tr.value-0 : 0);

if (cAt > BairituMax) {
	cAt = BairituMax;
	this.g_attB.style.color = "red";
} else {
	this.g_attB.style.color = "black";
}
this.g_att.innerHTML = Mf(cAt * bukiRitu[wpid] / 10);
this.g_attB.innerHTML = "(" + cAt+ ")";
//Œ•»
var wk_ken = this.c_kensyo.value.charAt(0);
if (wk_ken !== "0") {
	if (wk_ken === "9") { //”šŒ‚
		hosei = setKensyou(this.c_kensyo.value,this.c_betu.selectedIndex);
	} else if (wk_ken <= "5") { //‘®«Œ•»
		cZoku = Number(wk_ken);
		cZokuAt = setKensyou(this.c_kensyo.value,this.c_betu.selectedIndex);
	} else if (wk_ken <= "8") { //ˆÙíŒ•»
		cZyou = Number(wk_ken);
		cZyouAt = setKensyou(this.c_kensyo.value,this.c_betu.selectedIndex);
	}
}
//•\¦‘®«
cZokuAt = Mf(Mf(Mf(cZokuAt * this.c_zkUp.value / 10) * this.c_zkUp2.value / 10) * (this.c_honki.value === "1" ? 11 : 10) / 10);
cZyouAt = Mf(cZyouAt * izyouUP / 1000);
var wk = "";
if (cZokuAt) wk = zokuName[cZoku] + cZokuAt + "0"; //‘®«
if (cZyouAt) wk += (wk ? "<br>" : "") + zokuName[cZyou] + cZyouAt + "0";//ó‘ÔˆÙí
this.g_zoku.innerHTML = wk ? wk : "<br>";
//•\¦‰ïS
cCri += Number(this.c_criUp.value) + Number(this.c_sr.value); //’Bl
if (!(wpid === 1 || wpid === 5 || wpid === 10) && cCri > 0) cCri += sharpCl; //Ø‚ê–¡ƒ{[ƒiƒX
if (this.m_sugo.checked && Txt[aType] === "P") cCri += 20; //¦˜rƒNƒGƒXƒg
if (this.m_hc.value !== "1,1" && (wpid === 1 || wpid === 5 || wpid === 10) && Txt[aType] === "H") cCri += 40; //HCƒNƒGƒXƒg
if (this.c_garou.value >= 1) cCri += 50; //‰ì˜T
if (this.c_honki.value === "2") cCri += 30; //–{‹Cˆù—¿
if (wpid === 9) { //ƒKƒ“ƒ‰ƒ“ƒXŒÂ•Ê
	this.Cng_Wp_Sub(); //ƒKƒ“ƒX‚¾‚¯‚±‚±‚Å•ŠíŒÂ•ÊŒÄ‚Ño‚µ
	if (MStyle) cCri = 100; //VƒXƒ^ƒCƒ‹‚Å‚Í100%
}
if (!(wpid === 1 || wpid === 5 || wpid === 10) && this.c_sharp.value <= 2) cCri = 0; //ƒKƒ“ˆÈŠO‚Í‰©ˆÈ‰º‚¾‚Æ–³Œø
if (cCri > 100) {
	cCri = 100;
	this.g_cri.style.color = "red";
} else {
	this.g_cri.style.color = "black";
}
this.g_cri.innerHTML = cCri;
//UŒ‚UŒ‚’l
var AttPow = (wpid === 1 || wpid === 5 || wpid === 10) ? cAt * zan / 100 : cAt * sharp[this.c_sharp.value] * zan * (this.c_kensyo.value === "A1" ? 12 : 10) / 1000000;
if (wpid === 1 && MStyle === 2) AttPow *= this.c_betu2.value / 100; //ƒwƒrƒB—’
this.g_attN.innerHTML = Mf(AttPow);
//UŒ‚‘®«’l
var AttZoku = 0;
var wk = "";
if (wk_ken === "9") {
	wk = "”šŒ‚" + hosei;
} else {
	if (cZoku) { //‘®«
		if (wpid === 10) { //‹|
			AttZoku = cZokuAt * zokuDUP / 10;
			wk = zokuName[cZoku] + Mf(AttZoku * tamePZoku / 10000);
		} else {
			AttZoku = cZokuAt * sharpZoku[this.c_sharp.value] * zokuDUP / 100000 * (wpid === 4 && this.c_fw.checked ? 12/10 : 1);
			wk = zokuName[cZoku] + Mf(AttZoku);
		}
	}
	if (cZyou) wk += (wk ? "<br>" : "") + zokuName[cZyou] + (wpid === 4 && this.c_fw.checked ? Mf(cZyouAt * 12/10) : cZyouAt); //ó‘ÔˆÙí
}
this.g_zokuN.innerHTML = wk ? wk : "<br>";
var AttPowBk = AttPow,AttZokuBk = AttZoku; //Œ³ˆĞ—Í‘Ş”ğ


//‰ïSİ’è
//if (cCri == 0) {
//	this.c_cri[0].checked = true;
//	this.c_cri[0].disabled=this.c_cri[1].disabled=this.c_cri[2].disabled = true;
//} else {
//	this.c_cri[0].disabled=this.c_cri[1].disabled=this.c_cri[2].disabled = false;
//}
var cl = (cCri === 0 || this.c_cri[0].checked) ? 100 : cCri < 0 ? 75 : this.c_garou.value === "2" ? 135 : 125;
//

if (!this.m_enemi.value) return;
//------------------ÀŒvZ------------------
//‘S‘Ì–hŒä—¦
var hc_def = this.m_hc.value.split(",");
var def = this.m_ang.checked ? this.m_def.value * this.m_ang.value * hc_def[0] * hc_def[1] * 100 : this.m_def.value * hc_def[0] * 100;
//•”ˆÊ
var bui = this.m_enemi.value.split(":|")[0].split(":"),buiZoku = cZoku + 3;
if (ckFull) {
	for (var i=0,m=bui.length;i<m;bui[i] = bui[i++].split(","));
} else {
	bui.length = 1,bui[0] = this.c_buimei.value.split(",");
}
//”šŒ‚Œ•
if (wk_ken === "9") {
	for (var i=0,max=bui.length;i<max;bui[i][1]=bui[i++][2]=100);
	cl = 100,AttPow = 100,AttZoku = 0;
}
switch (wpid) {
case 0: //‘åŒ•
case 2: //ƒnƒ“ƒ}[
case 3: //ƒ‰ƒ“ƒX
case 4: //•ĞèŒ•
case 6: //‘oŒ•
case 7: //‘¾“
case 8: //ë—Â“J
case 9: //ƒKƒ“ƒ‰ƒ“ƒX
	//•”ˆÊ
	for (var i=0,j=1,max=bui.length;i<max;i++,j++){
		//ƒ‚[ƒVƒ‡ƒ“
		for (var k=0,l=1,maxk=motion.length;k<maxk;k++,l++) {
			var motionP = isNaN(motion[k]) ? motion[k].split("|") : [motion[k]];
			var nd = 0,zd = 0;
			//‘¾“‚Ì—’ŠÑ’Ê‚Í50%A‘oŒ•‚Í—•‘’†‘®«70%‚É
			var wkKeizoku = (wpid === 7 && k === 3 && MStyle === 2) ? 20/3 : (wpid === 6 && k >= 7 && !MStyle) ? 7 : 10;
			
			//ŒvZ
			for (var m=0,maxm=motionP.length;m<maxm;m++) {
				if (wk_ken !== "9") { //”šŒ‚ˆÈŠO
					switch (wpid) {
					case 0: //‘åŒ•
						if (MStyle !== 1) { //‘åŒ•‚Ì—­‚ß‰ïSƒ‚[ƒVƒ‡ƒ“i“VˆÈŠO
							switch (maxk-k) {
							case 3: hosei = 110;break;
							case 2: hosei = 120;break;
							case 1: hosei = 130;break;
							default: hosei = 100;break;
							}
						}
						break;
					case 2: //ƒnƒ“ƒ}[
						if (k >= 7 && this.c_betu.selectedIndex) { //SR‹ZuŒ‚
							AttPow = Mf(cAt * 1.3);
							if (AttPow > BairituMax) AttPow = BairituMax;
							AttPow = AttPow * sharp[this.c_sharp.value] * zan * (this.c_kensyo.value === "A1" ? 12 : 10) / 1000000;
						} else {
							AttPow = AttPowBk;
						}
						break;
					case 3: //ƒ‰ƒ“ƒX
						if (motionP[m].charAt(0) === "+") { //‘Å
							hosei = 100,wp_type = 2;
							AttPow = AttPowBk / sharp[this.c_sharp.value] * 1000 / zan * 100;
							AttZoku = AttZokuBk / sharpZoku[this.c_sharp.value] * 10000 / zan * 100;
						} else if (Number(bui[i][1]) * 100 >= Number(bui[i][2]) * 72) { //•”ˆÊ‘I‘ğ
							hosei = 100,wp_type = 1,AttPow = AttPowBk,AttZoku = AttZokuBk;
						} else {
							hosei = 72,wp_type = 2,AttPow = AttPowBk,AttZoku = AttZokuBk;
						}
						if (k === 7 && !MStyle) { //“Ëi‰Á‘¬
							hosei *= 1.125;
						}
						break;
					case 4: //•ĞèŒ•
						if (motionP[m].charAt(0) === "+") { //‘Å
							wp_type = 2,hosei = 100;
							AttPow = AttPowBk / sharp[this.c_sharp.value] * 1000 / zan * 100;
							AttZoku = AttZokuBk / sharpZoku[this.c_sharp.value] * 10000 / zan * 100;
						} else if(wp_type === 2) { //a
							wp_type = 1,hosei = 125,AttPow = AttPowBk,AttZoku = AttZokuBk;
						}
						break;
					case 6: //‘oŒ•
						if (MStyle && k >= 7) { //’nˆÈŠO
							AttPow = AttPowBk / at_hosei * 100;
						} else {
							AttPow = AttPowBk;
						}
						break;
					}
				}
				//(UŒ‚~Ø‚ê–¡”{—¦~a‚è•û)~ƒ‚[ƒVƒ‡ƒ“~•â³~“÷¿~ƒNƒŠƒeƒBƒJƒ‹(1.25,0.75)
				var ndWK = Mf(AttPow * motionP[m] * hosei * bui[i][wp_type] * cl / 100000000); //’Êí
				var ndNC = Mf(AttPow * motionP[m] * hosei * bui[i][wp_type] * 100 / 100000000); //’ÊíƒNƒŠ‚È‚µ
				if (ndWK < 1) ndWK = 1; //Å’áƒ_ƒ[ƒW•Ûá
				if (ndNC < 1) ndNC = 1; //Å’áƒ_ƒ[ƒW•Ûá
				//(UŒ‚‘®«~Ø‚ê–¡”{—¦)~“÷¿
				var zdWK = Mf(AttZoku * bui[i][buiZoku] * wkKeizoku / 1000); //‘®«

				if (this.c_gou[0].checked) { //‡Œv•\¦
					ndWK = Mf((ndWK + zdWK) * def / 100);
					if (ndWK < 1) ndWK = 1; //Å’áƒ_ƒ[ƒW•Ûá

					if (this.c_cri[2].checked) { //‰ïS•½‹Ï
						ndNC = Mf((ndNC + zdWK) * def / 100);
						if (ndNC < 1) ndNC = 1; //Å’áƒ_ƒ[ƒW•Ûá
						ndWK = Mr(((ndWK * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10); //•½‹Ï(10”{)
					}
					zdWK = 0;
				} else { //•ª—£•\¦
					ndWK = Mf(ndWK * def / 100);
					zdWK = Mf(zdWK * def / 100);
					if (ndWK + zdWK < 1) ndWK = 1; //Å’áƒ_ƒ[ƒW•Ûá

					if (this.c_cri[2].checked) { //‰ïS•½‹Ï
						ndNC = Mf(ndNC * def / 100); //’ÊíƒNƒŠ‚È‚µ
						if (ndNC + zdWK < 1) ndNC = 1; //Å’áƒ_ƒ[ƒW•Ûá
						ndWK = Mr(((ndWK * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10); //•½‹Ï(10”{)
					}
				}
				nd += ndWK;
				zd += zdWK;
			}

			if (this.c_cri[2].checked) nd /= 10; //‰ïS•½‹Ï‚Ì•\¦‘Oˆ—
			var wkHtml = this.c_gou[0].checked ? nd : nd + (zd < 0 ? "":"+") + zd;
			//’e‚©‚ê’l(‘¾“‚Å‹Snó‘Ô‚Í1.125UP)
			var kick = wk_ken === "9" ? 100 : bui[i][wp_type] * sharp[this.c_sharp.value] * zan * hosei / 10000000 * (wpid === 7 && this.c_betu.selectedIndex ? 1125/1000 : 1);
			//’e‚©‚êE‰ïSƒ‚[ƒVƒ‡ƒ“
			if (kick <= KickP[0] && !(wpid === 9 && MStyle)) {this["d" + j + l].innerHTML = "<span style='color:gray'>" + wkHtml + "</span>";}
			else if (kick > KickP[2]) {this["d" + j + l].innerHTML = "<span style='color:blue'>" + wkHtml + "</span>";}
			else if (kick >= KickP[1]) {this["d" + j + l].innerHTML = "<span style='color:green'>" + wkHtml + "</span>";}
			else {this["d" + j + l].innerHTML = wkHtml;}
		}
		//ƒKƒ“ƒ‰ƒ“ƒX–CŒ‚
		if (wpid === 9) {
			//’e(UŒ‚—Í)
			if (MStyle === 2) { //—’‚Ìê‡‚Ì‚İ—ñ‚ğˆÚ“®i’@‚«•t‚¯j
				this["d" + j + 11].innerHTML = this.c_sharp.value === "0" ? "<br>" : this["d" + j + 9].innerHTML; //ÔƒQ[ƒW‚È‚ç”jŠü
				l--;
			}
			for (var k=0,m=tamaP.length;k<m;k++,l++) {
				//ÔƒQ[ƒW‚Å‚Í–CŒ‚•s‰Â/HB‚à•s‰Â
				if (this.c_sharp.value === "0" && (k === 0 || MStyle)) {
					this["d" + j + l].innerHTML = "-";
				} else {
					tamaPZ = tamaP[k].split("|");
					//–Cpt k=0:–CŒ‚ 1:—´Œ‚–C
					switch (this.c_guns.value) {
					case "0":
						var hoseiwH = 100;
						break;
					case "1":
						var hoseiwH = !k ? 110 : 120;
						break;
					case "2":
						var hoseiwH = !k ? 120 : 130;
						break;
					case "3":
						var hoseiwH = !k ? 130 : 140;
						break;
					}
					//–CŒ‚‚ÍòƒQ[ƒW‚Å75“
					hoseiwH = (k === 0 && this.c_sharp.value <= 1) ? hoseiwH * 75 / 100 : hoseiwH;
					if (this.c_fw.checked) hoseiwH *= 15/10;
					//ŒvZ:–³ UŒ‚—Í
					//ŒvZ:‰Î UŒ‚—Í~“÷¿
					if (!k) {	//–CŒ‚
						if (MStyle === 0) {				//’n
							nd = Mf(tamaPZ[0] * hoseiwH / 100);
							zd = Mf(tamaPZ[2] * bui[i][tamaPZ[1] - 0 + 3] / 100 * zokuDUP / 10);
						} else if (MStyle === 1) {		//“V
							nd = Mf(tamaPZ[0] * hoseiwH / 100);
							zd = Mf(tamaPZ[2] * 3 * bui[i][tamaPZ[1] - 0 + 3] / 100 * zokuDUP / 10);
						} else {						//—’
							if (tamaPZ[1] === "-") { //‘ÅE”šŒ‚
								zd = Mf(tamaPZ[2] * hoseiwH / 100)+1;
							} else {
								zd = Mf(tamaPZ[2] * bui[i][tamaPZ[1] - 0 + 3] / 100 * zokuDUP / 10)+1;
							}
							nd = Mf(tamaPZ[0] * hoseiwH / 100);
						}
					} else {	//—´Œ‚–C|HB
						if (!MStyle) {				//’n
							nd = Mf(tamaPZ[0] * hoseiwH / 100);
							zd = Mf(tamaPZ[2] * bui[i][tamaPZ[1] - 0 + 3] / 100 * zokuDUP / 10);
						} else { //HB
							nd = Mf(AttPow * tamaPZ[0] * hosei * bui[i][1] * cl / 100000000);
							zd = Mf(tamaPZ[2] * sharpZoku[this.c_sharp.value] * bui[i][tamaPZ[1] - 0 + 3] / 1000000 * zokuDUP / 10);
						}
					}
					if (MStyle === 2 && k === 0) {	//—’‚Ì–CŒ‚
						nd = Mf(nd * def / 100);
						zd = Mf(zd * def / 100);
						if (nd < 1) nd = 1; //Å’áƒ_ƒ[ƒW•Ûá
						if (zd < 1) zd = 1; //Å’áƒ_ƒ[ƒW•Ûá
						this["d" + j + l].innerHTML = zd + "¥" + nd;
					} else {
						if (nd < 1) nd = 1; //Å’áƒ_ƒ[ƒW•Ûá
						if (this.c_gou[0].checked) { //‡Œv•\¦
							nd = Mf((nd + zd) * def / 100);
							if (nd < 1) nd = 1; //Å’áƒ_ƒ[ƒW•Ûá
							this["d" + j + l].innerHTML = nd;
						} else {
							nd = Mf(nd * def / 100);
							zd = Mf(zd * def / 100);
							if (nd + zd < 1) nd = 1; //Å’áƒ_ƒ[ƒW•Ûá
							this["d" + j + l].innerHTML = nd + (zd < 0 ? "":"+") + zd;
						}
					}
				}
			}
			if (!MStyle) { //‹ŒƒXƒ^ƒCƒ‹‚Ìê‡‚Ì‚İ
				if (this.c_gou[0].checked) { //‡Œv•\¦
					this["d" + j + l].innerHTML = nd * 5;
				} else { //•ª—£•\¦
					this["d" + j + l].innerHTML = nd * 5 + (zd < 0 ? "":"+") + zd * 5;
				}
			}
		}
	}
	break;
case 1: //ƒwƒrƒBƒ{ƒEƒKƒ“
case 5: //ƒ‰ƒCƒgƒ{ƒEƒKƒ“
	//•”ˆÊ
	for (var i=0,j=1,max=bui.length;i<max;i++,j++){
		switch (this.c_tama.value) {
		case "9": //U’e
		case "10": //ŠgU’e
		case "11": //‘®«
		case "12": //ó‘ÔˆÙí
			//’e(UŒ‚—Íb‘®«b”{—¦)
			//if (this.c_tama.value === "12") bui[i][wp_type] = 100; //ó‘ÔˆÙí‚Í“÷¿–³‹10.0‚Å–³‚­‚È‚Á‚½
			//ŒvZ
			for (var k=0,l=1,m=tamaP.length;k<m;k++,l++) {
				var tamaPZ = tamaP[k].split("|");
				//UŒ‚~’eUŒ‚—Í~•â³~“÷¿~ƒNƒŠƒeƒBƒJƒ‹(1.25,0.75)
				var nd   = Mf(AttPow * tamaPZ[0] * hosei * bui[i][wp_type] * cl / 100000000); //’Êí
				var ndNC = Mf(AttPow * tamaPZ[0] * hosei * bui[i][wp_type] * 100 / 100000000); //’ÊíƒNƒŠ‚È‚µ
				if (nd   < 1) nd = 1; //Å’áƒ_ƒ[ƒW•Ûá
				if (ndNC < 1) ndNC = 1; //Å’áƒ_ƒ[ƒW•Ûá
				//‘®«
				if (tamaPZ.length > 2) {
					//UŒ‚~’eUŒ‚—Í~“÷¿~‘®«UP
					if (this.c_tama.value === "11") {
						//¦–Å—´’e‚Ì‚İUŒ‚—Í‚ÉˆË‘¶‚µ‚È‚¢
						if (wpid === 5 && MStyle === 2) {//ƒ‰ƒCƒg—’‚ÌŒ^
							var zd = Mf((k === 4 ? 100 : AttPow) * tamaPZ[2] / 100 * bui[i][tamaPZ[1] - 0 + 3] * this.c_zkUp.value / 10 * this.c_zkUp2.value / 10 * (this.c_honki.value === "1" ? 11 : 10) / 10 * zokuDUP / 1000 * 15 / 10);
						} else if (wpid === 1 && this.c_waza.selectedIndex === 1) {//ƒwƒrƒBSR
							var zd = Mf((k === 4 ? 100 : AttPow) * tamaPZ[2] / 100 * bui[i][tamaPZ[1] - 0 + 3] * this.c_zkUp.value / 10 * this.c_zkUp2.value / 10 * (this.c_honki.value === "1" ? 11 : 10) / 10 * zokuDUP / 1000 * 12 / 10);
						} else {
							var zd = Mf((k === 4 ? 100 : AttPow) * tamaPZ[2] / 100 * bui[i][tamaPZ[1] - 0 + 3] * this.c_zkUp.value / 10 * this.c_zkUp2.value / 10 * (this.c_honki.value === "1" ? 11 : 10) / 10 * zokuDUP / 1000);
						}
					} else {
						var zd = Mf(tamaPZ[2] * bui[i][tamaPZ[1] - 0 + 3] * zokuDUP / 1000);
					}
				} else {
					var zd = 0;
				}
				//•\¦
				if (this.c_tama.value === "10") { //ŠgU
					if (this.c_gou[0].checked) { //‡Œv•\¦
						nd = Mf(nd * def / 100);
						if (nd < 1) nd = 1; //Å’áƒ_ƒ[ƒW•Ûá
						if (this.c_cri[2].checked) { //‰ïS•½‹Ï
							ndNC = Mf(ndNC * def / 100);
							if (ndNC < 1) ndNC = 1; //Å’áƒ_ƒ[ƒW•Ûá
							nd = Mr(((nd * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10) / 10; //•½‹Ï
						}
						this["d" + j + l].innerHTML = nd + "(" + Mf((tamaPZ[3] - 0 + zd) * def / 100) + ")";
					} else { //•ª—£•\¦
						nd = Mf(nd * def / 100);
						zd = Mf(zd * def / 100);
						if (nd < 1) nd = 1; //Å’áƒ_ƒ[ƒW•Ûá
						if (this.c_cri[2].checked) { //‰ïS•½‹Ï
							ndNC = Mf(ndNC * def / 100); //’ÊíƒNƒŠ‚È‚µ
							if (ndNC < 1) ndNC = 1; //Å’áƒ_ƒ[ƒW•Ûá
							nd = Mr(((nd * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10) / 10; //•½‹Ï
						}
						this["d" + j + l].innerHTML = nd + "(" + Mf(tamaPZ[3] * def / 100) + (zd < 0 ? "":"+") + zd + ")";
					}
				} else {
					if (this.c_gou[0].checked) { //‡Œv•\¦
						nd = Mf((nd + zd) * def / 100);
						if (nd < 1) nd = 1; //Å’áƒ_ƒ[ƒW•Ûá
						if (this.c_cri[2].checked) { //‰ïS•½‹Ï
							ndNC = Mf((ndNC + zd) * def / 100);
							if (ndNC < 1) ndNC = 1; //Å’áƒ_ƒ[ƒW•Ûá
							nd = Mr(((nd * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10) / 10; //•½‹Ï
						}
						this["d" + j + l].innerHTML = nd;
					} else { //•ª—£•\¦
						nd = Mf(nd * def / 100);
						zd = Mf(zd * def / 100);
						if (nd + zd < 1) nd = 1; //Å’áƒ_ƒ[ƒW•Ûá
						if (this.c_cri[2].checked) { //‰ïS•½‹Ï
							ndNC = Mf(ndNC * def / 100); //’ÊíƒNƒŠ‚È‚µ
							if (ndNC + zd < 1) ndNC = 1; //Å’áƒ_ƒ[ƒW•Ûá
							nd = Mr(((nd * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10) / 10; //•½‹Ï
						}
						this["d" + j + l].innerHTML = nd + (zd < 0 ? "":"+") + zd;
					}
				}
			}
			break;
		case "6":
		case "7":
		case "8": //“ObÖ’e
			//–Cpt
			var hoseiwHn = this.c_guns.value === "0" ? 100 : 150;
			var hoseiwHf = this.c_guns.value === "0" ? 100 : this.c_guns.value === "1" ? 150 : this.c_guns.value === "2" ? 160 : 170;
			//ƒ‚[ƒVƒ‡ƒ“(ˆĞ—ÍŒ¸Š)
			for (var k=0,l=2,maxk=motion.length;k<maxk;k++,l++) {
				//‘_‚¢Œ‚‚¿
				var wkshoot = this.c_shoot.checked && motion[k] >= 15 ? 5 : 0;
				//’e(UŒ‚—Íb‘®«b‘®«’l|ŒÅ’è)
				var tamaPZ = tamaP[this.c_tama.value].split("|");
				//ŒvZ UŒ‚~’eUŒ‚—Í~ˆĞ—ÍŒ¸Š~•â³~“÷¿~ƒNƒŠƒeƒBƒJƒ‹(1.25,0.75)
				var nd = Mf(Mf(AttPow * tamaPZ[0] * motion[k] * hosei * (bui[i][wp_type]-0+wkshoot) * cl / 1000000000) * def / 100);
				if (nd < 1) nd = 1; //Å’áƒ_ƒ[ƒW•Ûá
				if (this.c_cri[2].checked) { //‰ïS•½‹Ï
					var ndNC = Mf(Mf(AttPow * tamaPZ[0] * motion[k] * hosei * (bui[i][wp_type]-0+wkshoot) * 100 / 1000000000) * def / 100); //’ÊíƒNƒŠ‚È‚µ;
					if (ndNC < 1) ndNC = 1; //Å’áƒ_ƒ[ƒW•Ûá
					nd = Mr(((nd * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10) / 10; //•½‹Ï
				}
				var zd = Mf(tamaPZ[2] * bui[i][tamaPZ[1] - 0 + 3] * hoseiwHf / 10000 * zokuDUP / 10);
				var kz = Mf(tamaPZ[3] * hoseiwHn / 100);
				if (this.c_gou[0].checked) { //‡Œv•\¦
					this["d" + j + l].innerHTML = nd + "+(" + Mf((kz + zd) * def / 100) + ")";
				} else { //•ª—£•\¦
					this["d" + j + l].innerHTML = nd + "+(" + Mf(kz * def / 100) + (Mf(zd * def / 100) < 0 ? "":"+") + Mf(zd * def / 100) + ")";
				}
			}
			break;
		case "20": //”r”M’e
			//–Cpt
			var hoseiwHn = this.c_guns.value === "0" ? 100 : this.c_guns.value === "1" ? 110 : this.c_guns.value === "2" ? 120 : 130;
			var hoseiwHf = 100;
			if (this.c_waza.selectedIndex === 1){ //de‹Zyeåz‚Í1.2”{
				hoseiwHn *= 12 / 10;
				hoseiwHf *= 12 / 10;
			}
				//’e(UŒ‚—Íb‘®«b‘®«’l|ŒÅ’è)
				var tamaPZ = tamaP[0].split("|");
				var zd = Mf(tamaPZ[2] * bui[i][tamaPZ[1] - 0 + 3] * hoseiwHf / 10000 * zokuDUP / 10);
				var kz = Mf(tamaPZ[3] * hoseiwHn / 100);
				if (this.c_gou[0].checked) { //‡Œv•\¦
					this["d" + j + "1"].innerHTML = Mf((kz + zd) * def / 100);
					this["d" + j + "2"].innerHTML = Mf((kz + zd) * def / 100) * 60;
				} else { //•ª—£•\¦
					this["d" + j + "1"].innerHTML = Mf(kz * def / 100) + (Mf(zd * def / 100) < 0 ? "":"+") + Mf(zd * def / 100);
					this["d" + j + "2"].innerHTML = Mf(kz * def / 100) * 60 + (Mf(zd * def / 100) < 0 ? "":"+") + Mf(zd * def / 100) * 60;
				}
			break;
		default:
			//ƒ‚[ƒVƒ‡ƒ“(ˆĞ—ÍŒ¸Š)
			for (var k=0,l=2,maxk=motion.length;k<maxk;k++,l++) {
				//‘_‚¢Œ‚‚¿
				var wkshoot = this.c_shoot.checked && motion[k] >= 15 ? 5 : 0;
				//ŒvZ UŒ‚~’eUŒ‚—Í~ˆĞ—ÍŒ¸Š~•â³~“÷¿~ƒNƒŠƒeƒBƒJƒ‹(1.25,0.75)
				var nd = Mf(Mf(AttPow * tamaP[this.c_tama.value] * motion[k] * hosei * (bui[i][wp_type]-0+wkshoot) * cl / 1000000000) * def / 100);
				if (nd < 1) nd = 1; //Å’áƒ_ƒ[ƒW•Ûá
				if (this.c_cri[2].checked) { //‰ïS•½‹Ï
					var ndNC = Mf(Mf(AttPow * tamaP[this.c_tama.value] * motion[k] * hosei * (bui[i][wp_type]-0+wkshoot) * 100 / 1000000000) * def / 100); //’ÊíƒNƒŠ‚È‚µ;
					if (ndNC < 1) ndNC = 1; //Å’áƒ_ƒ[ƒW•Ûá
					nd = Mr(((nd * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10) / 10; //•½‹Ï
				}
				this["d" + j + l].innerHTML = nd;
			}
			break;
		}
		//ƒ‰ƒCƒg—’‚ÌŒ^
		if (wpid === 5 && MStyle === 2) {
			var nd = Mf(30 / soku_hosei);
			var zd = Mf(12 * bui[i][1 - 0 + 3] * zokuDUP / 1000 / soku_hosei);
			if (this.c_gou[0].checked) { //‡Œv•\¦
				nd = Mf((nd + zd) * def / 100);
				if (nd < 1) nd = 1; //Å’áƒ_ƒ[ƒW•Ûá
				this["d" + j + 10].innerHTML =  nd;
			} else { //•ª—£•\¦
				nd = Mf(nd * def / 100);
				zd = Mf(zd * def / 100);
				if (nd + zd < 1) nd = 1; //Å’áƒ_ƒ[ƒW•Ûá
				this["d" + j + 10].innerHTML = nd + (zd < 0 ? "":"+") + zd;
			}
		}
	}
	break;
case 10: //‹|
	//•”ˆÊ
	for (var i=0,j=1,max=bui.length;i<max;i++,j++){
		//‹ßÚ
		var wkKeizoku = 10,wk_ken = this.c_betu.value;

		var wp_yakiri = Number(bui[i][1]) >= Number(bui[i][2]) ? 1 : 2;
		for (var k=0,l=1;k<2;k++,l++) {
			var motionP = isNaN(motion[k]) ? motion[k].split("|") : [motion[k]];
			var nd = 0,zd = 0;
			
			//ŒvZ
			for (var m=0,maxm=motionP.length;m<maxm;m++) {
				if (wk_ken === "9") { //”šŒ‚
					ndWK = !MStyle ? Mf(2 * def / 10) : Mf(10 * def / 10);
					zdWK = 0;
					if (ndWK < 1) ndWK = 1; //Å’áƒ_ƒ[ƒW•Ûá
				} else {
					//(UŒ‚~Ø‚ê–¡”{—¦~a‚è•û)~ƒ‚[ƒVƒ‡ƒ“~•â³~“÷¿~ƒNƒŠƒeƒBƒJƒ‹(1.25,0.75)
					var ndWK = Mf(AttPow * motionP[m] * 100 * bui[i][wp_yakiri] * cl / 100000000); //’Êí
					var ndNC = Mf(AttPow * motionP[m] * 100 * bui[i][wp_yakiri] * 100 / 100000000); //’ÊíƒNƒŠ‚È‚µ
					if (ndWK < 1) ndWK = 1; //Å’áƒ_ƒ[ƒW•Ûá
					if (ndNC < 1) ndNC = 1; //Å’áƒ_ƒ[ƒW•Ûá
					//(UŒ‚‘®«~Ø‚ê–¡”{—¦)~“÷¿(‘®«‚Í”¼•ª)
					var zdWK = Mf(AttZoku * bui[i][buiZoku] * wkKeizoku / 2 / 1000); //‘®«

					if (this.c_gou[0].checked) { //‡Œv•\¦
						ndWK = Mf((ndWK + zdWK) * def / 100);
						if (ndWK < 1) ndWK = 1; //Å’áƒ_ƒ[ƒW•Ûá

						if (this.c_cri[2].checked) { //‰ïS•½‹Ï
							ndNC = Mf((ndNC + zdWK) * def / 100);
							if (ndNC < 1) ndNC = 1; //Å’áƒ_ƒ[ƒW•Ûá
							ndWK = Mr(((ndWK * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10); //•½‹Ï(10”{)
						}
						zdWK = 0;
					} else { //•ª—£•\¦
						ndWK = Mf(ndWK * def / 100);
						zdWK = Mf(zdWK * def / 100);
						if (ndWK + zdWK < 1) ndWK = 1; //Å’áƒ_ƒ[ƒW•Ûá

						if (this.c_cri[2].checked) { //‰ïS•½‹Ï
							ndNC = Mf(ndNC * def / 100); //’ÊíƒNƒŠ‚È‚µ
							if (ndNC + zdWK < 1) ndNC = 1; //Å’áƒ_ƒ[ƒW•Ûá
							ndWK = Mr(((ndWK * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10); //•½‹Ï(10”{)
						}
					}
				}
				nd += ndWK;
				zd += zdWK;
			}

			if (this.c_cri[2].checked) nd /= 10; //‰ïS•½‹Ï‚Ì•\¦‘Oˆ—
			var wkHtml = this.c_gou[0].checked ? nd : nd + (zd < 0 ? "":"+") + zd;
			//’e‚©‚ê’l
			var kick = wk_ken === "9" ? 100 : bui[i][wp_yakiri] * sharp[this.c_sharp.value] * zan * hosei / 10000000;
			//’e‚©‚êE‰ïSƒ‚[ƒVƒ‡ƒ“
			if (kick <= KickP[0] && !MStyle) {this["d" + j + l].innerHTML = "<span style='color:gray'>" + wkHtml + "</span>";}
			else if (kick >= KickP[2] || (MStyle && k === 0)) {this["d" + j + l].innerHTML = "<span style='color:blue'>" + wkHtml + "</span>";}
			else if (kick >= KickP[1] && !MStyle) {this["d" + j + l].innerHTML = "<span style='color:green'>" + wkHtml + "</span>";}
			else {this["d" + j + l].innerHTML = wkHtml;}
		}
		//ƒ‚[ƒVƒ‡ƒ“(ˆĞ—ÍŒ¸Š)
		for (var k=3,l=4,maxk=motion.length;k<maxk;k++,l++) {
			if (this.c_betu.value === "9") { //”šŒ‚ƒrƒ“
				this["d" + j + l].innerHTML = Mf(yaZoku * (MStyle === 2 && this.c_tama.selectedIndex >= 4 ? 5 : 1) *def / 100) * tamaP.length;
			} else {
				var nd = 0,zd = 0;
				for (var t=0,m=tamaP.length;t<m;t++) {
					//ŒvZ UŒ‚~ƒ‚[ƒVƒ‡ƒ“(Œ¸Š)~•â³~“÷¿~‹|~—­‚ß~ƒNƒŠƒeƒBƒJƒ‹(1.25,0.75)
					var ndWK = Mf(AttPow * tamaP[t] / 100 * tameP / 100 * motion[k] / 10 * hosei * bui[i][wp_type] * cl / 1000000);
					var ndNC = Mf(AttPow * tamaP[t] / 100 * tameP / 100 * motion[k] / 10 * hosei * bui[i][wp_type] * 100 / 1000000); //’ÊíƒNƒŠ‚È‚µ
					if (ndWK < 1) ndWK = 1; //Å’áƒ_ƒ[ƒW•Ûá
					if (ndNC < 1) ndNC = 1; //Å’áƒ_ƒ[ƒW•Ûá
					if (MStyle === 2 && this.c_tama.selectedIndex >= 4) ndWK *=5,ndNC *=5; //—’ƒI[ƒ‰ƒAƒ[
					var zdWK = Mf(AttZoku * bui[i][buiZoku] * tamePZoku / 1000000);
					
					if (this.c_gou[0].checked) { //‡Œv•\¦
						ndWK = Mf((ndWK + zdWK) * def / 100 * dt_hosei / 10);
						if (ndWK <= 0) ndWK = 1; //Å’áƒ_ƒ[ƒW•Ûá

						if (this.c_cri[2].checked) { //‰ïS•½‹Ï
							ndNC = Mf((ndNC + zdWK) * def / 100 * dt_hosei / 10);
							if (ndNC <= 0) ndNC = 1; //Å’áƒ_ƒ[ƒW•Ûá
							ndWK = Mr(((ndWK * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10); //•½‹Ï(10”{)
						}
						zdWK = 0;
					} else { //•ª—£•\¦
						ndWK = Mf(ndWK * def / 100 * dt_hosei / 10);
						zdWK = Mf(zdWK * def / 100 * dt_hosei / 10);
						if (ndWK + zdWK < 1) ndWK = 1; //Å’áƒ_ƒ[ƒW•Ûá

						if (this.c_cri[2].checked) { //‰ïS•½‹Ï
							ndNC = Mf(ndNC * def / 100 * dt_hosei / 10); //’ÊíƒNƒŠ‚È‚µ
							if (ndNC + zdWK < 1) ndNC = 1; //Å’áƒ_ƒ[ƒW•Ûá
							ndWK = Mr(((ndWK * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10); //’Êí•½‹Ï(10”{)
						}
					}
					nd += ndWK;
					zd += zdWK;
				}
				if (this.c_cri[2].checked) nd /= 10; //‰ïS•½‹Ï‚Ì•\¦‘Oˆ—
				if (this.c_gou[0].checked) { //‡Œv•\¦
					this["d" + j + l].innerHTML = nd;
				} else { //•ª—£•\¦
					this["d" + j + l].innerHTML = nd + (zd < 0 ? "":"+") + zd;
				}
			}
		}
	}
	break;
}
}
//------------------------------------ƒVƒŠ[ƒYƒŠƒXƒg•\¦----------
,Disp_Sozai : function (){
//‘fŞ
var sozaiHtml = function (data) { //ƒXƒLƒ‹ƒVƒ~ƒ…‚Ìcpy
	if (!data) return "";
	var txt = [],wkS = data.split(" ");
	for (var i = 0,cnt = 0,wkMax = wkS.length; i < wkMax; i++) {
		var wkK = wkS[i];
		if (isNaN(wkK.charAt(wkK.length-1)) === false || isNaN(wkK.charAt(wkK.length-2)) === false) {
			if (wkK.lastIndexOf("R") > 0) {
				txt[cnt++] = "<a href='../sozai/sozai.htm?" + wkK.substring(0,4) + "W' target=_blank class=r>" + itemS[wkK.substring(0,4)][0] + "</a>x" + parseInt(wkK.substring(4));
			} else {
				txt[cnt++] = "<a href='../sozai/sozai.htm?" + wkK.substring(0,4) + "W' target=_blank>" + itemS[wkK.substring(0,4)][0] + "</a>x" + wkK.substring(4);
			}
		} else {
			txt[cnt++] = wkK;
		}
	}
	return txt.join("<br>");
}
var sozaiRowHtml = function (z,LVup,sozai,sozaiCre) {
	var sozai_wk = sozai.join(" ");
	sozai_wk += (sozai_wk ? " " : "") + sozaiCre;
	//‘fŞ‡Œv ƒXƒLƒ‹ƒVƒ~ƒ…‚Ìcpy
	sozai_wk = sozai_wk.replace(/R/g,"").split(" ").sort();
	var sozai_Sum = [], toku = "";

	for (var i = 0,sozaiMax = sozai_wk.length; i < sozaiMax; i++) {
		var wkK = sozai_wk[i];
		for (var j = 0,SumMax = sozai_Sum.length; j < SumMax; j++) {
			if (sozai_Sum[j][0] === wkK.substring(0,4)){
				sozai_Sum[j][1] += wkK.substring(4) - 0;
				break;
			}
		}
		if (j >= SumMax) {
			if (isNaN(wkK.charAt(wkK.length-1)) === false || isNaN(wkK.charAt(wkK.length-2)) === false) {
				sozai_Sum[sozai_Sum.length] = [wkK.substring(0,4), wkK.substring(4) - 0];
			} else {
				if (wkK && wkK !== "‚È‚µ" && wkK !== "or") toku = wkK.replace("<br>","") + "<br>";
			}
		}
	}
	for (var i = 0,cnt = 0,SumMax = sozai_Sum.length; i < SumMax; sozai_Sum[i] = sozai_Sum[i++].join(""));
	//cpyend
	return ["<td>" + z + "z</td>","<td class=rep>" + LVup + "</td>","<td class=sozai>" + toku + sozaiHtml(sozai_Sum.join(" ")) + "</td>"];
	}
var sozaiD = equip["sozai"][this.s_wp.value + wpid].split(",");
var sozai = [],LVup = "",z = 0,ck = false,Txtz = "",Txtsozai = "",TxtLVup = "",wk = [],bukiwk = "",refID = "",namebk = ","+this.s_wp.value + wpid+",";
//‘æˆêƒ‹[ƒg
do {
	z += sozaiD[sZeny]-0;
	if (sozaiD[sCre]) {
		wk = sozaiRowHtml(z,LVup,sozai,sozaiD[sCre]);
		Txtz += wk[0],TxtLVup += wk[1],Txtsozai += wk[2];
		if (!sozaiD[sRep]) break;
	}
	sozai[sozai.length] = sozaiD[sRep];
	//‘æ“ñƒ‹[ƒg‚ª‚ ‚é‚©
	if (sozaiD[sRef2]) ck = true;
	//‹­‰»Œ³’T‚µ
	if (namebk.indexOf(","+sozaiD[sRef1]+",") === -1) {
		refID = sozaiD[sRef1];
		namebk += sozaiD[sRef1] + ",";
	} else if (sozaiD[sRef2] && namebk.indexOf(","+sozaiD[sRef2]+",") === -1) {
		refID = sozaiD[sRef2];
		namebk += sozaiD[sRef2] + ",";
	} else {
		break;
	}
	if (refID) {
		bukiwk = equip[bukiId[refID.substring(4)]][refID.substring(0,4)];
		if (typeof(bukiwk) === "string") bukiwk = bukiwk.split(",");
		LVup = bukiwk[aName] + " ¨<br>" + LVup;
		sozaiD = equip["sozai"][refID].split(",");
	}
} while (sozai);

//‘æ“ñƒ‹[ƒg
if (ck) {
var sozai = [],LVup = "",z = 0,sozaiD = equip["sozai"][this.s_wp.value + wpid].split(","),namebk = ","+this.s_wp.value + wpid+",";
do {
	z += sozaiD[sZeny]-0;
	if (sozaiD[sCre]) {
		wk = sozaiRowHtml(z,LVup,sozai,sozaiD[sCre]);
		Txtz += wk[0],TxtLVup += wk[1],Txtsozai += wk[2];
		if (!sozaiD[sRep]) break;
	}
	sozai[sozai.length] = sozaiD[sRep];
	//‹­‰»Œ³’T‚µ
	if (sozaiD[sRef2] && namebk.indexOf(","+sozaiD[sRef2]+",") === -1) {
		refID = sozaiD[sRef2];
		namebk += sozaiD[sRef2] + ",";
	} else if (namebk.indexOf(","+sozaiD[sRef1]+",") === -1) {
		refID = sozaiD[sRef1];
		namebk += sozaiD[sRef1] + ",";
	} else {
		break;
	}
	if (refID) {
		bukiwk = equip[bukiId[refID.substring(4)]][refID.substring(0,4)];
		if (typeof(bukiwk) === "string") bukiwk = bukiwk.split(",");
		LVup = bukiwk[aName] + " ¨<br>" + LVup;
		sozaiD = equip["sozai"][refID].split(",");
	}
} while (sozai);
}
this.m_WBody.innerHTML = "<table border=1 cellspacing=0 cellpadding=2>\n" +
						"<tr><td>–¼Ì</td><td>" + this.s_wp.options[this.s_wp.selectedIndex].text + "</td></tr>\n" +
						"<tr><td>”ï—p</td>" + Txtz + "</tr>\n" +
						"<tr><td>‹­‰»</td>" + TxtLVup +"</tr>\n" +
						"<tr><td>‘fŞ</td>" + Txtsozai + "</tr>\n";
						"</table>";

this.m_W.style.display = "block";
}
}//ƒOƒ[ƒoƒ‹
global.init();
global.init=null;
return global;
})();

//------------------------------------‘Oˆ—----------
DamageForm.setItem(itemS);
itemS=null;

(function(){
//------------------------------------ƒCƒxƒ“ƒg“\‚è•t‚¯----------
//ƒCƒxƒ“ƒgƒZƒbƒg
var addEvent = function (elm, type, func) {
	//’Ç‰Á
	elm./*@cc_on @if (true) attachEvent ('on' + @else@*/ addEventListener (/*@end@*/ type,func,false);
	//ƒAƒ“ƒ[ƒh‚Åíœ
	window./*@cc_on @if (true) attachEvent ('on' + @else@*/ addEventListener (/*@end@*/ "unload",
		function(){
			elm./*@cc_on @if (true) detachEvent ('on' + @else@*/ removeEventListener (/*@end@*/ type,func,false);
		}
		,false);
}
addEvent(window,"load",
function () {
	if (location.pathname.indexOf("damageT") === -1) document.getElementById("cpy").style.display = window.name === "damage1" ? "none" : "inline";
	monsSet(DamageForm.m_sugo.checked);
});
addEvent(document,"dblclick",
function (evt) {
	/*@if (true)
	var t = evt.srcElement;
	@else@*/
	var t = evt.target;
	/*@end@*/
	if (t.id.substring(0,5) === "c_rep") {
		t.style.backgroundColor = t.style.backgroundColor ? "" : "gray";DamageForm.search();
	} else if (t.id === "c_Style") {
		switch (t.value) {
		case "’n‚ÌŒ^" : t.value = "“V‚ÌŒ^";break;
		case "“V‚ÌŒ^" : t.value = "—’‚ÌŒ^";break;
		case "—’‚ÌŒ^" : t.value = "’n‚ÌŒ^";break;
		case "’n" : t.value = "“V";break;
		case "“V" : t.value = "—’";break;
		case "—’" : t.value = "’n";break;
		}
		DamageForm.Cng_Style();
		DamageForm.calc();
	}
});
addEvent(document,"click",
function (evt) {
	/*@if (true)
	var t = evt.srcElement;
	@else@*/
	var t = evt.target;
	/*@end@*/
	switch (t.id) {
	case "w0":
	case "w1":
	case "w2":
	case "w3":
	case "w4":
	case "w5":
	case "w6":
	case "w7":
	case "w8":
	case "w9":
	case "w10":
		DamageForm.Set_Buki(t.id.substring(1,3));
		break;
	case "m_sugo":
		DamageForm.m_hc.selectedIndex = DamageForm.m_def.selectedIndex = 0;
		monsSet(DamageForm.m_sugo.checked);
		var wk = DamageForm.s_wp.value;
		DamageForm.search();
		DamageForm.s_wp.value=wk;
		break;
	case "c_Style":
		switch (t.value) {
		case "’n‚ÌŒ^" : t.value = "“V‚ÌŒ^";break;
		case "“V‚ÌŒ^" : t.value = "—’‚ÌŒ^";break;
		case "—’‚ÌŒ^" : t.value = "’n‚ÌŒ^";break;
		case "’n" : t.value = "“V";break;
		case "“V" : t.value = "—’";break;
		case "—’" : t.value = "’n";break;
		}
		DamageForm.Cng_Style();
		DamageForm.calc();
		break;
	case "m_ang":
	case "c_gohu":
	case "c_tume":
	case "c_tamaUp":
	case "c_izyou":
	case "c_kizuna":
	case "c_shoot":
	case "c_fueZK":
		DamageForm.calc();
		break;
	case "s_gunAdd":
		DamageForm.search();
		break;
	case "cpy":
		DamageForm.datacopy();
		break;
	case "c_fw":
		DamageForm.Cng_Fw();
		DamageForm.calc();
		break;
	case "d_sozai":
		if (DamageForm.m_W.style.display === "none") {
			if (typeof document.documentElement.style.maxHeight === "undefined") { //IE6‚©
				var w = document.getElementsByTagName("SELECT");
				for (var i=11,m=w.length; i<m; w[i++].style.visibility = "hidden");
			}
			DamageForm.Disp_Sozai();
			break;
		}
	case "m_WClose_B":
		if (typeof document.documentElement.style.maxHeight === "undefined") { //IE6‚©
			var w = document.getElementsByTagName("SELECT");
			for (var i=11,m=w.length; i<m; w[i++].style.visibility = "visible");
		}
		DamageForm.m_W.style.display = "none";
		break;
	case "i_set_B":
		DamageForm.Nekowp_set();
		DamageForm.Cng_wp();
		DamageForm.calc();
		break;
	default:
		if (t.id.substring(0,5) === "c_rep") {t.style.backgroundColor = t.style.backgroundColor === "" ? "gray" : "";DamageForm.search();}
		else if (t.name === "c_cri" || t.name ===  "c_gou") {DamageForm.calc();}
		break;
	}
});
var change_event = function (evt) {
	/*@if (true)
	var t = evt.srcElement;
	@else@*/
	var t = evt.target;
	/*@end@*/
//			SkillForm.change_event(t.id);
	switch (t.id) {
	case "m_enemi":
		var gou_enemi_bk = DamageForm.gou_enemi;
		DamageForm.Cng_Mons();
		if (DamageForm.gou_enemi != gou_enemi_bk && DamageForm.c_tr.value >= 30 && DamageForm.d_spec.innerHTML.lastIndexOf("“V—’•Ší") > 0) { //“V—’—p
			if (!DamageForm.c_tamaUp.disabled) {
				DamageForm.Cng_Tama(); //‰“‹——£‚Ìê‡‹——£Œ¸Š‚ª•Ï‚í‚é
			} else {
				DamageForm.Cng_wp(); //‹ßÚ‚È‚çƒQ[ƒW‚ª•Ï‚í‚é
			}
		}
		DamageForm.calc();
		break;
	case "s_wp":
		DamageForm.Cng_wp();
		DamageForm.calc();
		break;
	case "s_rare":
		DamageForm.Set_SinkaAtt();
		DamageForm.search();
		break;
	case "s_srt1":
	case "s_srt2":
	case "s_hr":
	case "s_slot":
	case "s_rst":
	case "s_guns":
	case "s_fue":
	case "s_ya":
	case "s_tame":
	case "s_tama":
	case "s_reload":
	case "s_kick":
		DamageForm.search();
		break;
	case "c_tama":
		DamageForm.Cng_Tama();
		DamageForm.calc();
		break;
	case "c_ya":
		DamageForm.Cng_Ya();
		DamageForm.calc();
		break;
	case "c_betu":
		DamageForm.Cng_Kobetu();
		DamageForm.calc();
		break;
	case "c_betu2":
		DamageForm.Cng_Kobetu2();
		DamageForm.calc();
		break;
	case "c_waza":
		DamageForm.Cng_Sr();
		DamageForm.calc();
		break;
	case "m_hc":
		//‰“‹——£‚ÍHC‚Å‰ïS‚ª•Ï‚í‚é
		if (!DamageForm.m_hc.bk !== !DamageForm.m_hc.selectedIndex && !DamageForm.c_tamaUp.disabled) {
			var wk = DamageForm.s_wp.value;
			DamageForm.search();
			DamageForm.s_wp.value=wk;
			DamageForm.m_hc.bk = DamageForm.m_hc.selectedIndex;
		}
		DamageForm.Cng_wp();
		DamageForm.calc();
		break;
	case "c_tr":
		if (DamageForm.gou_enemi && DamageForm.d_spec.innerHTML.lastIndexOf("“V—’•Ší") > 0) { //“V—’—p
			if (!DamageForm.c_tamaUp.disabled) {
				DamageForm.Cng_Tama(); //‰“‹——£‚Ìê‡‹——£Œ¸Š‚ª•Ï‚í‚é
			} else {
				DamageForm.Cng_wp(); //‹ßÚ‚È‚çƒQ[ƒW‚ª•Ï‚í‚é
			}
		}
		DamageForm.calc();
		break;
	default:
		DamageForm.calc();
	}
}
addEvent(document.getElementById("m_enemi"),"change",change_event);
addEvent(document.getElementById("m_hc"),"change",change_event);
addEvent(document.getElementById("s_wp"),"change",change_event);
addEvent(document.getElementById("s_rare"),"change",change_event);
addEvent(document.getElementById("s_srt1"),"change",change_event);
addEvent(document.getElementById("s_srt2"),"change",change_event);
addEvent(document.getElementById("s_hr"),"change",change_event);
addEvent(document.getElementById("s_slot"),"change",change_event);
addEvent(document.getElementById("s_rst"),"change",change_event);
addEvent(document.getElementById("s_guns"),"change",change_event);
addEvent(document.getElementById("s_fue"),"change",change_event);
addEvent(document.getElementById("s_ya"),"change",change_event);
addEvent(document.getElementById("s_tame"),"change",change_event);
addEvent(document.getElementById("s_tama"),"change",change_event);
addEvent(document.getElementById("s_reload"),"change",change_event);
addEvent(document.getElementById("s_kick"),"change",change_event);
addEvent(document.getElementById("m_def"),"change",change_event);
addEvent(document.getElementById("c_sharp"),"change",change_event);
addEvent(document.getElementById("c_kiri"),"change",change_event);
addEvent(document.getElementById("c_kensyo"),"change",change_event);
addEvent(document.getElementById("c_mesi"),"change",change_event);
addEvent(document.getElementById("c_tane"),"change",change_event);
addEvent(document.getElementById("c_attUp"),"change",change_event);
addEvent(document.getElementById("c_criUp"),"change",change_event);
addEvent(document.getElementById("c_fueAT"),"change",change_event);
addEvent(document.getElementById("c_soko"),"change",change_event);
addEvent(document.getElementById("c_zkUp"),"change",change_event);
addEvent(document.getElementById("c_karyudo"),"change",change_event);
addEvent(document.getElementById("c_guns"),"change",change_event);
addEvent(document.getElementById("c_garou"),"change",change_event);
addEvent(document.getElementById("c_tama"),"change",change_event);
addEvent(document.getElementById("c_betu"),"change",change_event);
addEvent(document.getElementById("c_betu2"),"change",change_event);
addEvent(document.getElementById("c_sinka"),"change",change_event);
addEvent(document.getElementById("c_ya"),"change",change_event);
addEvent(document.getElementById("c_waza"),"change",change_event);
addEvent(document.getElementById("c_sr"),"change",change_event);
addEvent(document.getElementById("c_tr"),"change",change_event);
addEvent(document.getElementById("c_zkUp2"),"change",change_event);
addEvent(document.getElementById("c_honki"),"change",change_event);
addEvent(document.getElementById("c_mission"),"change",change_event);
if (location.pathname.indexOf("damageT") === -1) addEvent(document.getElementById("c_buimei"),"change",change_event);
})();
