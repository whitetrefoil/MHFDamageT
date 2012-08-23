/*@cc_on if (@_jscript_version < 9) {_d=document;eval('var document=_d');}@*/
var DamageForm = (function (){
//固定
var ckFull = location.pathname.indexOf("damageT") >= 0;
var BR = ckFull ? "<br>" : "";
var ckOpera = /*@if (@_jscript_version >= 9) true @else@*/ !!window.opera || /chrome/i.test(navigator.userAgent) /*@end@*/;
var aName = 0,aAt = 1,aZoku = 2,aZokuAt = 3,aZyou = 4,aZyouAt = 5,aCri = 6,aRare = 7,aRst = 8,aSlot = 9,aDef = 10,aHR = 11,aCre = 12,aType = 13,aSpec = 14,aKick = 15,aRelo = 16,aGun = 17;
var sRef1 = 0 ,sRef2 = 1, sZeny = 2, sCre = 3, sRep = 4;
var bukiId = ["taiken","heavy","hammer","lance","katate","right","souken","tachi","horn","gunlance","yumi"];
var bukiName = ["大剣","ヘビィボウガン","ハンマー","ランス","片手剣","ライトボウガン","双剣","太刀","狩猟笛","ガンランス","弓"];
var reloadName = ["装填:遅い","装填:やや遅い","装填:普通","装填:やや速い","装填:速い"];
var kickName = ["反動:最大",0,"反動:中","反動:やや小","反動:小"];
var Onpu = [0,"<span class=r>♪</span>","<span class=y>♪</span>","<span class=w>♪</span>","<span class=b>♪</span>","<span class=g>♪</span>","<span class=p>♪</span>","<span class=a>♪</span>"]
var zokuName = ["","火：","水：","雷：","龍：","氷：","毒：","麻痺：","睡眠：","爆撃："];
var bukiRitu = [48/*大剣*/,12/*ヘヴィ*/,52/*ハンマー*/,23/*ランス*/,14/*片手剣*/,12/*ライト*/,14/*双剣*/,48/*太刀*/,52/*狩猟笛*/,23/*ガンランス*/,12/*弓*/];
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
//剣晶
var setKensyou = function (wk,betu){
	if (wk === "0" || wk === "A1") return 0;
	switch (wpid) {
	case 0: //大剣
		if (wk.charAt(0) === "9") { //爆撃
			return [140,160,180][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "5") { //属性剣晶
			return [50,70,90][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "8") { //異常剣晶
			switch (wk.charAt(0)) {
			case "6": //毒
				return [20,25,30][wk.charAt(1)-1];break;
			case "7": //麻痺
				return [18,23,28][wk.charAt(1)-1];break;
			case "8": //睡眠
				return [15,20,25][wk.charAt(1)-1];break;
			}
		}
		break;
	case 4: //片手剣
		if (wk.charAt(0) === "9") { //爆撃
			return [220,260,300][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "5") { //属性剣晶
			return [35,55,75][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "8") { //異常剣晶
			switch (wk.charAt(0)) {
			case "6": //毒
				return [17,22,27][wk.charAt(1)-1];break;
			case "7": //麻痺
				return [17,22,27][wk.charAt(1)-1];break;
			case "8": //睡眠
				return [15,20,25][wk.charAt(1)-1];break;
			}
		}
		break;
	case 6: //双剣
		if (wk.charAt(0) === "9") { //爆撃
			return betu ? [150,180,220][wk.charAt(1)-1] : [200,240,290][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "5") { //属性剣晶
			return [30,40,50][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "8") { //異常剣晶
			switch (wk.charAt(0)) {
			case "6": //毒
			case "7": //麻痺
				return [5,8,10][wk.charAt(1)-1];break;
			case "8": //睡眠
				return [1,2,3][wk.charAt(1)-1];break;
			}
		}
		break;
	case 2: //ハンマー
	case 8: //狩猟笛
		if (wk.charAt(0) === "9") { //爆撃
			return [120,140,160][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "5") { //属性剣晶
			return [35,55,75][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "8") { //異常剣晶
			switch (wk.charAt(0)) {
			case "6": //毒
				return [15,20,25][wk.charAt(1)-1];break;
			case "7": //麻痺
			case "8": //睡眠
				return [13,18,23][wk.charAt(1)-1];break;
			}
		}
		break;
	case 3: //ランス
	case 9: //ガンランス
		if (wk.charAt(0) === "9") { //爆撃
			return [130,150,170][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "5") { //属性剣晶
			return [35,55,75][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "8") { //異常剣晶
			switch (wk.charAt(0)) {
			case "6": //毒
				return [15,20,25][wk.charAt(1)-1];break;
			case "7": //麻痺
			case "8": //睡眠
				return [13,18,23][wk.charAt(1)-1];break;
			}
		}
		break;
	case 7: //太刀
		if (wk.charAt(0) === "9") { //爆撃
			return [140,160,180][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "5") { //属性剣晶
			return [35,55,75][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "8") { //異常剣晶
			switch (wk.charAt(0)) {
			case "6": //毒
				return [15,20,25][wk.charAt(1)-1];break;
			case "7": //麻痺
			case "8": //睡眠
				return [13,18,23][wk.charAt(1)-1];break;
			}
		}
		break;
	}
}

var global = {
//------------------------------------初期化----------
init : function(){
//対戦相手
this.m_enemi = document.getElementById("m_enemi");
this.m_def = document.getElementById("m_def");
this.m_sugo = document.getElementById("m_sugo");
this.m_hc = document.getElementById("m_hc");
this.m_hc.bk = 0;
this.m_ang = document.getElementById("m_ang");
this.gou_enemi = false
//武器選択
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
//武器情報
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
//条件・スキル
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

//入力
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
//結果
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
//子画面
this.m_W = document.getElementById("m_W");
this.m_WBody = document.getElementById("m_WBody");
}
//------------------------------------データセット----------
,setEquip : function (name,data){
equip[name]=data;
}
,setItem : function (data){
itemS=data;
}
,setSozai : function (data){
equip["sozai"]=data;
}
//------------------------------------スタイル別表記----------
,Cng_Style : function(){}
//------------------------------------武器個別----------
,Cng_Kobetu : function(){}
//------------------------------------武器個別----------
,Cng_Kobetu2 : function(){}
//------------------------------------武器切替時補足----------
,Cng_Wp_Sub : function(){}
//------------------------------------弾----------
,Cng_Tama : function(){}
//------------------------------------SRスキル----------
,Cng_Sr : function(){
switch (wpid) {
case 2: //ハンマー
	if (this.c_waza.selectedIndex === 1) {
		this.c_mei.innerHTML = "溜め：";
		this.c_betu.options[1] = new Option("瞬撃", 1);
		this.Cng_Kobetu = function(){}
	} else {
		this.c_mei.innerHTML = "";
		this.c_betu.length = 1;
	}
	this.c_betu.style.display = this.c_mei.innerHTML ? "inline" : "none";
	break;
}
}
//------------------------------------武器セット----------
,Set_Buki : function(wapon){
//this.c_srt.selectedIndex = 0;
wpid = wapon-0,this.c_mei.innerHTML = this.c_mei2.innerHTML = "",this.s_wp.length = this.c_betu.length = 1,this.c_betu2.length = 0,this.c_tane.length = 3;
this.d01.innerHTML =this.d02.innerHTML =this.d03.innerHTML =this.d04.innerHTML =this.d05.innerHTML =this.d06.innerHTML =this.d07.innerHTML =this.d08.innerHTML =this.d09.innerHTML =this.d010.innerHTML =this.d011.innerHTML = "<br>";
this.c_sinka.style.display = this.s_guns.style.display = this.s_fue.style.display = this.s_yumi_G.style.display = this.s_gun_G.style.display = "none";
this.c_fw.disabled = this.c_fw.checked = false;
this.Cng_Fw = function(){
switch (wpid) {
case 0: //大剣
case 2: //ハンマー
case 3: //ランス
case 5: //ライト
case 6: //双剣
case 8: //狩猟笛
case 10: //弓
	this.c_fw.disabled = true;
	break;
}
};
//表示項目のONOFF
if (wpid === 1 || wpid === 5 || wpid === 10) { //ガン弓用
	this.gr_ken.style.display = "none";
	this.c_sharp.value = 3,this.c_kensyo.value = 0;
	this.c_tama.length = 1,this.c_tama.options[0] = new Option("---------------", "");
	this.c_ya.length = 0;
	this.gr_gun.style.display = ckFull ? "block" : "inline";
	this.c_ya.style.display = "none";
	this.c_tamaUp.disabled =this.c_guns.disabled =this.c_shoot.disabled = false;
	this.c_karyudo.options[4].style.backgroundColor = "";
} else { //剣用
	this.gr_gun.style.display = "none";
	this.gr_ken.style.display = ckFull ? "block" : "inline";
	this.c_tamaUp.disabled = this.c_guns.disabled =this.c_shoot.disabled = true;
	this.c_karyudo.options[4].style.backgroundColor = "gray";
}
//絞込みの切り替え
if (!(wpid === 1 || wpid === 5) && this.s_srt1.style.display === "none") {//剣弓用
	this.s_srt1.style.display = "inline";
	this.s_tama.style.display = this.s_gunAdd.style.display = "none";
//	this.s_srt2.style.display = "none";
	this.s_srt2.options[2].text = "属性";
//	this.s_srt2.style.display = "inline";
	this.c_soko.options[1].value = 15;
	if (ckFull) this.c_soko.options[1].text = this.c_soko.options[1].text.replace("|1.3倍","|1.5倍");
} else if ((wpid === 1 || wpid === 5) && this.s_srt1.style.display !== "none") {//ガン用
	this.s_srt1.style.display = "none";
	this.s_gunAdd.style.display = this.s_tama.style.display = "inline";
//	this.s_srt2.style.display = "none";
	this.s_srt2.options[2].text = "弾数";
//	this.s_srt2.style.display = "inline";
	this.c_soko.options[1].value = 13;
	if (ckFull) this.c_soko.options[1].text = this.c_soko.options[1].text.replace("|1.5倍","|1.3倍");
}
//SR防具スキル
if (wpid === 4 && this.c_waza.options[1].value === "120") { //片手
	this.c_waza.options[1].value = "130";
	this.c_waza.options[2].value = "120";
	if (ckFull) {
		this.c_waza.options[1].text = this.c_waza.options[1].text.replace("|1.2倍","|1.3倍");
		this.c_waza.options[2].text = this.c_waza.options[2].text.replace("|1.1倍","|1.2倍");
	}
} else if (wpid !== 4 && this.c_waza.options[1].value !== "110") { //片手以外
	this.c_waza.options[1].value = "120";
	this.c_waza.options[2].value = "110";
	if (ckFull) {
		this.c_waza.options[1].text = this.c_waza.options[1].text.replace("|1.3倍","|1.2倍");
		this.c_waza.options[2].text = this.c_waza.options[2].text.replace("|1.2倍","|1.1倍");
	}
}
//武器毎の表記セット
switch (wpid) {
case 0: //大剣
	this.c_mei.innerHTML = "刃部：",this.c_betu.options[1] = new Option("中腹", 1);
	this.Cng_Kobetu = function(){}
	wp_hosei = 100,wp_type = 1;
	this.d00.innerHTML = "武器補正<br>斬100%";
	this.d01.innerHTML = "縦斬り<br>48";
	this.d02.innerHTML = "ﾌｨﾆｯｼｭＡ<br>28･42";
	this.d03.innerHTML = "なぎ払い<br>36";
	this.d04.innerHTML = "斬り上げ<br>46";
	this.d05.innerHTML = "ﾌｨﾆｯｼｭBC<br>60";
	this.Cng_Style = function(){
		if (this.c_Style.value.charAt(0) === "地"){
			this.d06.innerHTML = "溜斬り１<br>65x110%";
			this.d07.innerHTML = "溜斬り２<br>80x120%";
			this.d08.innerHTML = "溜斬り３<br>110x130%";
			this.d09.innerHTML = this.d010.innerHTML = this.d011.innerHTML = "<br>";
			motion = ["48","28|42","36","46","60","65","80","110"];
			this.Cls_Table();
		} else if (this.c_Style.value.charAt(0) === "天"){
			this.d06.innerHTML = "ガード無<br>36";
			this.d07.innerHTML = "ガード:1<br>85";
			this.d08.innerHTML = "ガード:2<br>124";
			this.d09.innerHTML = "ガード:3<br>170";
			motion = ["48","28|42","36","46","60","36","85","124","170"];
		} else {
			this.d06.innerHTML = "ガード:1<br>85";
			this.d07.innerHTML = "ガード:3<br>170";
			this.d08.innerHTML = "溜斬上げ１<br>70";
			this.d09.innerHTML = "溜斬上げ２<br>85x110%";
			this.d010.innerHTML = "溜斬上げ３<br>120x120%";
			this.d011.innerHTML = "溜斬上げ４<br>150x130%";
			motion = ["48","28|42","36","46","60","85","170","70","85","120","150"];
		}
	}
	break;
case 1: //ヘビィボウガン
	this.c_mei.innerHTML = "ﾊﾟﾜｰB：",this.c_betu.options[1] = new Option("あり", 1),this.c_betu.selectedIndex = 1;
	this.Cng_Kobetu = function(){}
	this.c_betu2.length = 0,this.c_betu2.options[0] = new Option("０", 95),this.c_betu2.options[1] = new Option("１", 115),this.c_betu2.options[2] = new Option("２", 130),this.c_betu2.options[3] = new Option("３", 150);
	this.Cng_Kobetu2 = function(){}
case 5: //ライトボウガン
	this.s_gun_G.style.display = "inline";
	wp_hosei = 100,wp_type = 3;
	this.d00.innerHTML = "武器補正<br>弾100%";
	//武器を選ぶ度に実行
	this.Cng_Wp_Sub = function(Txt){
		if (wpid === 1) this.c_mei.innerHTML = Txt[aType] === "G" || Txt[aType] === "N" || Txt[aType] === "T" ? "ﾍﾋﾞｨB：" : "ﾊﾟﾜｰB：";
		//弾
		var w = this.c_tama,Ma = Math.abs,t = this.s_tama.value-0;
		w.length = 0;
		w.options[0] = new Option("LV1通常弾:" + Ma(Txt[aGun]) + "発",0);
		w.options[1] = new Option("LV2通常弾:" + Ma(Txt[aGun+1]) + "発",1);
		w.options[2] = new Option("LV3通常弾:" + Ma(Txt[aGun+2]) + "発",2);
		w.options[3] = new Option("LV1貫通弾:" + Ma(Txt[aGun+3]) + "発",3);
		w.options[4] = new Option("LV2貫通弾:" + Ma(Txt[aGun+4]) + "発",4);
		w.options[5] = new Option("LV3貫通弾:" + Ma(Txt[aGun+5]) + "発",5);
		w.options[6] = new Option("LV1散弾:" + Ma(Txt[aGun+6]) + "発",9);
		w.options[7] = new Option("LV2散弾:" + Ma(Txt[aGun+7]) + "発",9);
		w.options[8] = new Option("LV3散弾:" + Ma(Txt[aGun+8]) + "発",9);
		w.options[9] = new Option("LV1徹甲榴弾:" + Ma(Txt[aGun+9]) + "発",6);
		w.options[10] = new Option("LV2徹甲榴弾:" + Ma(Txt[aGun+10]) + "発",7);
		w.options[11] = new Option("LV3徹甲榴弾:" + Ma(Txt[aGun+11]) + "発",8);
		w.options[12] = new Option("LV1拡散弾:" + Ma(Txt[aGun+12]) + "発",10);
		w.options[13] = new Option("LV2拡散弾:" + Ma(Txt[aGun+13]) + "発",10);
		w.options[14] = new Option("LV3拡散弾:" + Ma(Txt[aGun+14]) + "発",10);
		for (var i=0;i<15;i++) if (Txt[aGun+i] < 0) w.options[i].style.backgroundColor = "lightpink";
		
		if (Txt[aGun+17] !=="0") w.options[w.length] = new Option("LV1毒弾:" + Txt[aGun+17] + "発",12),w.selectedIndex = t === 17 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+18] !=="0") w.options[w.length] = new Option("LV2毒弾:" + Txt[aGun+18] + "発",12),w.selectedIndex = t === 18 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+19] !=="0") w.options[w.length] = new Option("LV1麻痺弾:" + Txt[aGun+19] + "発",12),w.selectedIndex = t === 19 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+20] !=="0") w.options[w.length] = new Option("LV2麻痺弾:" + Txt[aGun+20] + "発",12),w.selectedIndex = t === 20 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+21] !=="0") w.options[w.length] = new Option("LV1睡眠弾:" + Txt[aGun+21] + "発",12),w.selectedIndex = t === 21 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+22] !=="0") w.options[w.length] = new Option("LV2睡眠弾:" + Txt[aGun+22] + "発",12),w.selectedIndex = t === 22 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+23] !=="0") w.options[w.length] = new Option("火炎弾:" + Txt[aGun+23] + "発",11),w.selectedIndex = t === 23 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+24] !=="0") w.options[w.length] = new Option("水冷弾:" + Txt[aGun+24] + "発",11),w.selectedIndex = t === 24 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+25] !=="0") w.options[w.length] = new Option("電撃弾:" + Txt[aGun+25] + "発",11),w.selectedIndex = t === 25 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+26] !=="0") w.options[w.length] = new Option("氷結弾:" + Txt[aGun+26] + "発",11),w.selectedIndex = t === 26 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+27] !=="0") w.options[w.length] = new Option("滅龍弾:" + Txt[aGun+27] + "発",11),w.selectedIndex = t === 27 ? w.length-1:w.selectedIndex;
		
		if (wpid === 1 && (Txt[aType] === "G" || Txt[aType] === "T")) w.options[w.length] = new Option("排熱弾",20);
		
		if (t && t < 17) w.selectedIndex = t;
		this.Cng_Tama();
	}
	//弾を選ぶ度に実行
	this.Cng_Tama = function(){
		if (!this.c_tama.value) return;
		var w = this.d_spec.innerHTML;
		switch (this.c_tama.value) {
		case "9": //散弾
			this.d01.innerHTML = "LV1散弾<br>(5+水5)x3回";
			this.d02.innerHTML = "LV2散弾<br>(5+水4)x4回";
			this.d03.innerHTML = "LV3散弾<br>(5+水4)x5回";
			this.d04.innerHTML =this.d05.innerHTML =this.d06.innerHTML =this.d07.innerHTML =this.d08.innerHTML =this.d09.innerHTML = "<br>";
			tamaP = ["5|2|5","5|2|4","5|2|4"];
			//速射対応チェック
			if (w.indexOf("LV1散弾") >= 0) this.d01.innerHTML = "<span style='color:blue'>"+this.d01.innerHTML+"<br>3発速射</span>",tamaP[0] = "2.5|2|2.5";
			break;
		case "10": //拡散弾
			this.d01.innerHTML = "LV1拡散弾<br>6" + BR + "([32+火2]x3)";
			this.d02.innerHTML = "LV2拡散弾<br>6" + BR + "([32+火2]x4)";
			this.d03.innerHTML = "LV3拡散弾<br>6" + BR + "([32+火2]x5)";
			this.d04.innerHTML = "<br>" + BR + "(子拡散)";
			this.d05.innerHTML =this.d06.innerHTML =this.d07.innerHTML =this.d08.innerHTML =this.d09.innerHTML = "<br>";
			tamaP = ["6|1|2|32","6|1|2|32","6|1|2|32"];
			break;
		case "11": //属性弾
			if (wpid === 1) { //ヘビィ
				this.d01.innerHTML = "火炎弾<br><span class=fss>武器倍率</span>x0.5";
				this.d02.innerHTML = "水冷弾<br><span class=fss>武器倍率</span>x0.25" + BR + "x3回";
				this.d03.innerHTML = "電撃弾<br><span class=fss>武器倍率</span>x0.27" + BR + "x3回";
				this.d04.innerHTML = "氷結弾<br><span class=fss>武器倍率</span>x0.25" + BR + "x3回";
				this.d05.innerHTML = "滅龍弾<br>龍：90" + BR + "x6回";
				this.d06.innerHTML =this.d07.innerHTML =this.d08.innerHTML =this.d09.innerHTML = "<br>";
				tamaP = ["1|1|50","1|2|25","1|3|27","1|5|25","1|4|90"];
			} else { //ライト
				this.d01.innerHTML = "火炎弾<br><span class=fss>武器倍率</span>x0.4";
				this.d02.innerHTML = "水冷弾<br><span class=fss>武器倍率</span>x0.13" + BR + "x3回";
				this.d03.innerHTML = "電撃弾<br><span class=fss>武器倍率</span>x0.2" + BR + "x3回";
				this.d04.innerHTML = "氷結弾<br><span class=fss>武器倍率</span>x0.13" + BR + "x3回";
				this.d05.innerHTML = "滅龍弾<br>龍：75" + BR + "x6回";
				this.d06.innerHTML =this.d07.innerHTML =this.d08.innerHTML =this.d09.innerHTML = "<br>";
				tamaP = ["1|1|40","1|2|13","1|3|20","1|5|13","1|4|75"];
				//速射対応チェック
				if (w.indexOf("火炎弾") >= 0) this.d01.innerHTML = "<span style='color:blue'>"+this.d01.innerHTML+"<br>5発速射</span>",tamaP[0] = "0.5|1|20";
				if (w.indexOf("水冷弾") >= 0) this.d02.innerHTML = "<span style='color:blue'>"+this.d02.innerHTML+"<br>3発速射</span>",tamaP[1] = "0.5|2|6.5";
				if (w.indexOf("電撃弾") >= 0) this.d03.innerHTML = "<span style='color:blue'>"+this.d03.innerHTML+"<br>3発速射</span>",tamaP[2] = "0.5|3|10";
				if (w.indexOf("氷結弾") >= 0) this.d04.innerHTML = "<span style='color:blue'>"+this.d04.innerHTML+"<br>3発速射</span>",tamaP[3] = "0.5|5|6.5";
			}
			break;
		case "12": //状態異常弾
			this.d01.innerHTML = "LV1毒弾<br>10+毒25";
			this.d02.innerHTML = "LV2毒弾<br>15+毒50";
			this.d03.innerHTML = "LV1麻痺弾<br>10+麻痺25";
			this.d04.innerHTML = "LV2麻痺弾<br>15+麻痺50";
			this.d05.innerHTML = "LV1睡眠弾<br>0+睡眠25";
			this.d06.innerHTML = "LV2睡眠弾<br>0+睡眠50";
			this.d07.innerHTML =this.d08.innerHTML =this.d09.innerHTML = "<br>";
			yaZoku = [25,50,25,50,25,50];
			tamaP = ["10|","15|","10|","15|","0|","0|"];
			break;
		case "20": //排熱弾
			this.d01.innerHTML = "排熱弾<br>22+火10";
			this.d02.innerHTML = "ゲージ<br>100";
			this.d03.innerHTML =this.d04.innerHTML =this.d05.innerHTML =this.d06.innerHTML =this.d07.innerHTML =this.d08.innerHTML =this.d09.innerHTML = "<br>";
			tamaP = ["0|1|10|22"];
			break;
		default:
			if (wpid === 1) {
				this.d01.innerHTML = ["LV1通常弾<br>6","LV2通常弾<br>12","LV3通常弾<br>11xn回","LV1貫通弾<br>10x3回","LV2貫通弾<br>9x4回","LV3貫通弾<br>7x6回","LV1徹甲<br>3:気絶10<br>(30+火40)","LV2徹甲<br>3:気絶10<br>(40+火60)","LV3徹甲<br>3:気絶10<br>(50+火80)"][this.c_tama.value];
			} else {
				this.d01.innerHTML = ["LV1通常弾<br>6","LV2通常弾<br>12","LV3通常弾<br>11xn回","LV1貫通弾<br>10x3回","LV2貫通弾<br>9x4回","LV3貫通弾<br>7x6回","LV1徹甲<br>3:気絶5<br>(30+火40)","LV2徹甲<br>3:気絶5<br>(40+火60)","LV3徹甲<br>3:気絶5<br>(50+火80)"][this.c_tama.value];
			}
			tamaP = [6,12,11,10,9,7,"3|1|40|30","3|1|60|40","3|1|80|50"];
			//速射対応
			switch (this.c_tama.value) {
			case "0":
				if (w.indexOf("LV1通常弾") >= 0) this.d01.innerHTML = "<span style='color:blue'>"+this.d01.innerHTML+"<br>5発速射</span>",tamaP[0] = 3;
				break;
			case "1":
				if (w.indexOf("LV2通常弾") >= 0) this.d01.innerHTML = "<span style='color:blue'>"+this.d01.innerHTML+"<br>5発速射</span>",tamaP[1] = 6;
				break;
			case "3":
				if (w.indexOf("LV1貫通弾") >= 0) this.d01.innerHTML = "<span style='color:blue'>"+this.d01.innerHTML+"<br>3発速射</span>",tamaP[3] = 5;
				break;
			case "6":
				if (w.indexOf("LV1徹甲榴弾") >= 0) this.d01.innerHTML = "<span style='color:blue'>"+this.d01.innerHTML+"<br>2発速射</span>",tamaP[6] = "1.5|1|40|30";
				break;
			}
			var addGunCri=0;
			if (this.gou_enemi && this.c_tr.value >= 30 && this.d_spec.innerHTML.lastIndexOf("天嵐武器") > 0) addGunCri += 3; //剛種で２部位以上で天嵐武器
			
			if (wpid === 1){
				if (this.c_fw.checked) addGunCri += 1; //ヘヴィでフィーチャー
				//距離
				switch (this.c_tama.value) {
				case "0":
				case "1":
				case "2": //通常弾
					motion = [17+addGunCri,17+addGunCri,17+addGunCri,17+addGunCri,10,8,5];
					this.d02.innerHTML = "近距離<br>"+motion[0]/10+"倍";
					this.d03.innerHTML = "中距離１<br>"+motion[1]/10+"倍";
					this.d04.innerHTML = "中距離２<br>"+motion[2]/10+"倍";
					this.d05.innerHTML = "遠距離１<br>"+motion[3]/10+"倍";
					this.d06.innerHTML = "遠距離２<br>1.0倍";
					this.d07.innerHTML = "遠距離３<br>0.8倍";
					this.d08.innerHTML = "遠距離４<br>0.5倍";
					this.d09.innerHTML = "<br>";
					break;
				case "3":
				case "4":
				case "5": //貫通弾
					motion = [10,17+addGunCri,17+addGunCri,17+addGunCri,17+addGunCri,10,8,5];
					this.d02.innerHTML = "近距離<br>1.0倍";
					this.d03.innerHTML = "中距離１<br>"+motion[1]/10+"倍";
					this.d04.innerHTML = "中距離２<br>"+motion[2]/10+"倍";
					this.d05.innerHTML = "遠距離１<br>"+motion[3]/10+"倍";
					this.d06.innerHTML = "遠距離２<br>"+motion[4]/10+"倍";
					this.d07.innerHTML = "遠距離３<br>1.0倍";
					this.d08.innerHTML = "遠距離４<br>0.8倍";
					this.d09.innerHTML = "遠距離５<br>0.5倍";
					break;
				case "6":
				case "7":
				case "8": //鉄甲榴弾
					motion = [10,17+addGunCri,17+addGunCri,10,8,5,5];
					this.d02.innerHTML = "近距離<br>1.0倍";
					this.d03.innerHTML = "中距離１<br>"+motion[1]/10+"倍";
					this.d04.innerHTML = "中距離２<br>"+motion[2]/10+"倍";
					this.d05.innerHTML = "遠距離１<br>1.0倍";
					this.d06.innerHTML = "遠距離２<br>0.8倍";
					this.d07.innerHTML = "遠距離３<br>0.5倍";
					this.d08.innerHTML = "遠距離４<br>0.5倍";
					this.d09.innerHTML = "(爆破)";
					break;
				}
			} else if (this.c_Style.value.charAt(0) === "地"){
				//距離
				switch (this.c_tama.value) {
				case "0":
				case "1":
				case "2": //通常弾
					motion = [15+addGunCri,15+addGunCri,10,8,5,5];
					this.d02.innerHTML = "近距離<br>"+motion[0]/10+"倍";
					this.d03.innerHTML = "中距離１<br>"+motion[1]/10+"倍";
					this.d04.innerHTML = "中距離２<br>1.0倍";
					this.d05.innerHTML = "遠距離１<br>0.8倍";
					this.d06.innerHTML = "遠距離２<br>0.5倍";
					this.d07.innerHTML = "遠距離３<br>0.5倍";
					this.d08.innerHTML = "遠距離４<br>0倍";
					this.d09.innerHTML = "<br>";
					break;
				case "3":
				case "4":
				case "5": //貫通弾
					motion = [10,15+addGunCri,15+addGunCri,15+addGunCri,10,8,5];
					this.d02.innerHTML = "近距離<br>1.0倍";
					this.d03.innerHTML = "中距離１<br>"+motion[1]/10+"倍";
					this.d04.innerHTML = "中距離２<br>"+motion[2]/10+"倍";
					this.d05.innerHTML = "遠距離１<br>"+motion[3]/10+"倍";
					this.d06.innerHTML = "遠距離２<br>1.0倍";
					this.d07.innerHTML = "遠距離３<br>0.8倍";
					this.d08.innerHTML = "遠距離４<br>0.5倍";
					this.d09.innerHTML = "<br>";
					break;
				case "6":
				case "7":
				case "8": //鉄甲榴弾
					motion = [10,15+addGunCri,10,8,8,5,5];
					this.d02.innerHTML = "近距離<br>1.0倍";
					this.d03.innerHTML = "中距離１<br>"+motion[1]/10+"倍";
					this.d04.innerHTML = "中距離２<br>1.0倍";
					this.d05.innerHTML = "遠距離１<br>0.8倍";
					this.d06.innerHTML = "遠距離２<br>0.8倍";
					this.d07.innerHTML = "遠距離３<br>0.5倍";
					this.d08.innerHTML = "遠距離４<br>0.5倍";
					this.d09.innerHTML = "(爆破)";
					break;
				}
			} else if (this.c_Style.value.charAt(0) === "天"){
				//距離
				switch (this.c_tama.value) {
				case "0":
				case "1":
				case "2": //通常弾
					motion = [16+addGunCri,10,8,5,5,5];
					this.d02.innerHTML = "近距離<br>"+motion[0]/10+"倍";
					this.d03.innerHTML = "中距離１<br>1.0倍";
					this.d04.innerHTML = "中距離２<br>0.8倍";
					this.d05.innerHTML = "遠距離１<br>0.5倍";
					this.d06.innerHTML = "遠距離２<br>0.5倍";
					this.d07.innerHTML = "遠距離３<br>0.5倍";
					this.d08.innerHTML = "遠距離４<br>0倍";
					this.d09.innerHTML = "<br>";
					break;
				case "3":
				case "4":
				case "5": //貫通弾
					motion = [10,16+addGunCri,16+addGunCri,10,8,5,5];
					this.d02.innerHTML = "近距離<br>1.0倍";
					this.d03.innerHTML = "中距離１<br>"+motion[1]/10+"倍";
					this.d04.innerHTML = "中距離２<br>"+motion[2]/10+"倍";
					this.d05.innerHTML = "遠距離１<br>1.0倍";
					this.d06.innerHTML = "遠距離２<br>0.8倍";
					this.d07.innerHTML = "遠距離３<br>0.5倍";
					this.d08.innerHTML = "遠距離４<br>0.5倍";
					this.d09.innerHTML = "<br>";
					break;
				case "6":
				case "7":
				case "8": //鉄甲榴弾
					motion = [16+addGunCri,10,8,8,5,5,5];
					this.d02.innerHTML = "近距離<br>"+motion[0]/10+"倍";
					this.d03.innerHTML = "中距離１<br>1.0倍";
					this.d04.innerHTML = "中距離２<br>0.8倍";
					this.d05.innerHTML = "遠距離１<br>0.8倍";
					this.d06.innerHTML = "遠距離２<br>0.5倍";
					this.d07.innerHTML = "遠距離３<br>0.5倍";
					this.d08.innerHTML = "遠距離４<br>0.5倍";
					this.d09.innerHTML = "(爆破)";
					break;
				}
			} else {
				//距離
				switch (this.c_tama.value) {
				case "0":
				case "1":
				case "2": //通常弾
					motion = [20+addGunCri,20+addGunCri,20+addGunCri,15];
					this.d02.innerHTML = "近距離<br>"+motion[0]/10+"倍";
					this.d03.innerHTML = "中距離１<br>"+motion[1]/10+"倍";
					this.d04.innerHTML = "中距離２<br>"+motion[2]/10+"倍";
					this.d05.innerHTML = "遠距離１<br>1.5倍";
					this.d06.innerHTML = "遠距離２<br>0倍";
					this.d07.innerHTML = "遠距離３<br>0倍";
					this.d08.innerHTML = "遠距離４<br>0倍";
					this.d09.innerHTML = "<br>";
					break;
				case "3":
				case "4":
				case "5": //貫通弾
					motion = [20+addGunCri,20+addGunCri,20+addGunCri,15];
					this.d02.innerHTML = "近距離<br>"+motion[0]/10+"倍";
					this.d03.innerHTML = "中距離１<br>"+motion[1]/10+"倍";
					this.d04.innerHTML = "中距離２<br>"+motion[2]/10+"倍";
					this.d05.innerHTML = "遠距離１<br>1.5倍";
					this.d06.innerHTML = "遠距離２<br>0倍";
					this.d07.innerHTML = "遠距離３<br>0倍";
					this.d08.innerHTML = "遠距離４<br>0倍";
					this.d09.innerHTML = "<br>";
					break;
				case "6":
				case "7":
				case "8": //鉄甲榴弾
					motion = [20+addGunCri,20+addGunCri,15];
					this.d02.innerHTML = "近距離<br>"+motion[0]/10+"倍";
					this.d03.innerHTML = "中距離１<br>"+motion[1]/10+"倍";
					this.d04.innerHTML = "中距離２<br>1.5倍";
					this.d05.innerHTML = "遠距離１<br>0倍";
					this.d06.innerHTML = "遠距離２<br>0倍";
					this.d07.innerHTML = "遠距離３<br>0倍";
					this.d08.innerHTML = "遠距離４<br>0倍";
					this.d09.innerHTML = "(爆破)";
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
			this.c_mei2.innerHTML = this.c_Style.value.charAt(0) === "嵐" ? "溜め：" : "";
			this.c_betu2.style.display = this.c_mei2.innerHTML ? "inline" : "none";
		} else {
			this.Cng_Tama();
			this["d010"].innerHTML = this.c_Style.value.charAt(0) === "嵐" ? "密着<br>爆風" : "<br>";
		}
	}
	break;
case 2: //ハンマー
	wp_hosei = 100,wp_type = 2;
	this.d00.innerHTML = "武器補正<br>打100%<br>(気絶値)";
	this.d01.innerHTML = "打ち下ろし<br>20･50" + BR + "(15･20)";
	this.d02.innerHTML = "振り抜き<br>20･70" + BR + "(15･10)";
	this.d03.innerHTML = "縦振り１<br>52(15)";
	this.d04.innerHTML = "縦振り２<br>20(15)";
	this.d05.innerHTML = "振り上げ<br>100(48)";
	this.d06.innerHTML = "タメ１<br>45(15)";
	this.d07.innerHTML = "タメ２<br>45･35" + BR + "(15･15)";
	this.d08.innerHTML = "タメ３<br>20･76" + BR + "(15･48)";
	this.Cng_Style = function(){
		if (this.c_Style.value.charAt(0) === "地"){
			this.d09.innerHTML = "回転開始<br>20(0)";
			this.d010.innerHTML = "回転中<br>10x5回(0)";
			this.d011.innerHTML = "回転終了<br>40(0)";
			motion = ["20|50","20|70","52","20","100","45","45|35","20|76","20","10","40"];
		} else if (this.c_Style.value.charAt(0) === "天"){
			this.d09.innerHTML = "乱打開始<br>50(10)";
			this.d010.innerHTML = "乱打中<br>30xn回(10)";
			this.d011.innerHTML = "<br>";
			motion = ["20|50","20|70","52","20","100","45","45|35","20|76","50","30"];
			this.Cls_Table();
		} else {
			this.d09.innerHTML = "JPｽﾀﾝﾌﾟ<br>35･100" + BR + "(15･60)";
			this.d010.innerHTML = "乱打開始<br>50(10)";
			this.d011.innerHTML = "乱打中<br>30xn回(10)";
			motion = ["20|50","20|70","52","20","100","45","45|35","20|76","35|100","50","30"];
		}
	}
	this.Cng_Sr();
	break;
case 3: //ランス
	wp_hosei = 100,wp_type = 1; //ランスは部位で違うので後で判定
	this.d00.innerHTML = "斬100%<br>打72%";
	this.Cng_Style = function(){
		if (this.c_Style.value.charAt(0) === "地"){
			this.d01.innerHTML = "中段突１<br>23";
			this.d02.innerHTML = "中段突２<br>23";
			this.d03.innerHTML = "中段突３<br>30";
			this.d04.innerHTML = "上方突１<br>28";
			this.d05.innerHTML = "上方突２<br>28";
			this.d06.innerHTML = "上方突３<br>30";
			this.d07.innerHTML = "突進<br>20xn回";
			this.d08.innerHTML = "加速<br>20x1.125倍";
			this.d09.innerHTML = "ﾌｨﾆｯｼｭ突<br>40";
			this.d010.innerHTML = "ガード突<br>20";
			this.d011.innerHTML = "ふんばり<br>32";
			motion = ["23","23","30","28","28","30","20","20","40","20","32"];
		} else if (this.c_Style.value.charAt(0) === "天"){
			this.d01.innerHTML = "中段突1-<br>23";
			this.d02.innerHTML = "-中段突3<br>23";
			this.d03.innerHTML = "中段突４<br>30";
			this.d04.innerHTML = "上方突1<br>28";
			this.d05.innerHTML = "-上方突3<br>28";
			this.d06.innerHTML = "上方突４<br>30";
			this.d07.innerHTML = "天上突1-<br>29";
			this.d08.innerHTML = "-天上突3<br>29";
			this.d09.innerHTML = "天上突４<br>32";
			this.d010.innerHTML = "ガード突<br>20";
			this.d011.innerHTML = "ふんばり<br>32";
			motion = ["23","23","30","28","28","30","29","29","32","20","32"];
		} else {
			this.d01.innerHTML = "中段突1-<br>23";
			this.d02.innerHTML = "-中段突3<br>23";
			this.d03.innerHTML = "中段突４<br>30";
			this.d04.innerHTML = "上方突1<br>28";
			this.d05.innerHTML = "-上方突3<br>28";
			this.d06.innerHTML = "上方突４<br>30";
			this.d07.innerHTML = "天上突1-<br>29";
			this.d08.innerHTML = "-天上突3<br>29";
			this.d09.innerHTML = "天上突４<br>32";
			this.d010.innerHTML = "チャージ<br>1･20" + BR + "(5･10)";
			this.d011.innerHTML = "ふんばり<br>32";
			motion = ["23","23","30","28","28","30","29","29","32","+1|+20","32"];
		}
	}
	break;
case 4: //片手剣
	wp_hosei = 125,wp_type = 1;
	this.Cng_Style = function(){
		this.d00.innerHTML = "武器補正<br>斬125%";
		this.d01.innerHTML = "JP斬り<br>16";
		this.d02.innerHTML = "ｽﾗｲﾃﾞｨﾝｸﾞ<br>16";
		if (this.c_Style.value.charAt(0) === "地"){
			this.d03.innerHTML = "斬り下げ<br>13";
			this.d04.innerHTML = "横斬り<br>11";
			this.d05.innerHTML = "盾と剣<br>8(5)･12";
			this.d06.innerHTML = "回転斬り<br>24";
			this.d07.innerHTML = "斬り上げ<br>14";
			this.d08.innerHTML = "ｼｰﾙﾄﾞｱﾀｯｸ<br>10･14" + BR + "(7･8)";
			this.d09.innerHTML = "ガード斬り<br>14";
			this.d010.innerHTML = "<br>";
			motion = ["16","16","13","11","+8|12","24","14","+10|+14","14"];
			this.Cls_Table();
		} else if (this.c_Style.value.charAt(0) === "天"){
			this.d03.innerHTML = "斬り下げ<br>13";
			this.d04.innerHTML = "横斬り<br>11";
			this.d05.innerHTML = "盾と剣<br>8(5)+12";
			this.d06.innerHTML = "JP2段斬<br>18･14";
			this.d07.innerHTML = "斬り上げ<br>14";
			this.d08.innerHTML = "ｼｰﾙﾄﾞｱﾀｯｸ<br>10･14<br>(7+8)";
			this.d09.innerHTML = "ガード斬り<br>14";
			this.d010.innerHTML = "<br>";
			motion = ["16","16","13","11","+8|12","18|14","14","+10|+14","14"];
			this.Cls_Table();
		} else {
			this.d03.innerHTML = "突き1<br>11";
			this.d04.innerHTML = "突き2<br>8";
			this.d05.innerHTML = "突き3<br>8";
			this.d06.innerHTML = "上下斬り<br>10･12";
			this.d07.innerHTML = "JP2段斬<br>18･14";
			this.d08.innerHTML = "斬り上げ<br>14";
			this.d09.innerHTML = "ｼｰﾙﾄﾞｱﾀｯｸ<br>10･14<br>(7+8)";
			this.d010.innerHTML = "ガード斬り<br>14";
			motion = ["16","16","11","8","8","10|12","18|14","14","+10|+14","14"];
		}
	}
	break;
case 6: //双剣
	wp_hosei = 100,wp_type = 1;
	this.c_mei.innerHTML = "鬼人：",this.c_betu.options[1] = new Option("発動", 1);
	this.c_mei2.innerHTML = "刃打：",this.c_betu2.length = 0,this.c_betu2.options[0] = new Option("なし", 100);
	this.c_betu2.options[1] = new Option("１回", 105),this.c_betu2.options[2] = new Option("２回", 110),this.c_betu2.options[3] = new Option("３回", 115),this.c_betu2.options[4] = new Option("４回", 120);
	this.d00.innerHTML = "武器補正<br>斬100%";
	this.Cng_Kobetu = function(){this.Cng_Style();}
	this.Cng_Kobetu2 = function(){}
	this.Cng_Style = function(){
		if (!this.c_betu.selectedIndex) { //通常時
			this.d02.innerHTML = "斬り下１<br>18";
			this.d03.innerHTML = "斬り下２<br>10･8";
			this.d04.innerHTML = "斬り下３<br>6･12･18";
			this.d05.innerHTML = "左回転斬<br>15･10･6";
			this.d06.innerHTML = "右回転斬<br>15･10･6";
			this.d07.innerHTML = "斬り上げ<br>19";
			this.d08.innerHTML =this.d09.innerHTML =this.d010.innerHTML =this.d011.innerHTML = "<br>";
			if (this.c_Style.value.charAt(0) === "嵐"){
				this.d01.innerHTML = "ＪＰ斬り<br>12･16";
				motion = ["12|16","18","10|8","6|12|18","15|10|6","15|10|6","19"];
			} else {
				this.d01.innerHTML = "斬り払い<br>12･6";
				motion = ["12|6","18","10|8","6|12|18","15|10|6","15|10|6","19"];
			}
			this.Cls_Table();
		} else { //乱舞時
			this.d01.innerHTML = "斬り払い<br>16･8";
			this.d02.innerHTML = "斬り下１<br>24";
			this.d03.innerHTML = "斬り下２<br>13･10";
			this.d04.innerHTML = "斬り下３<br>8･16･24";
			this.d05.innerHTML = "左回転斬<br>(20･13･8)" + BR + "x2回";
			this.d06.innerHTML = "右回転斬<br>(20･13･8)" + BR + "x2回";
			this.d07.innerHTML = "斬り上げ<br>25";
			if (this.c_Style.value.charAt(0) === "地"){
				this.d08.innerHTML = "乱舞開始<br>33";
				this.d09.innerHTML = "乱舞中<br>8x8回";
				this.d010.innerHTML = "乱舞終了<br>40";
				this.d011.innerHTML = "乱舞<br>全HIT";
				motion = ["16|8","24","13|10","8|16|24","20|13|8","20|13|8","25","33","8","40","33|8|8|8|8|8|8|8|8|40"];
			} else if (this.c_Style.value.charAt(0) === "天"){
				this.d08.innerHTML = "３連突き<br>24x3";
				this.d09.innerHTML = "回転斬り<br>21･27･47";
				this.d010.innerHTML = this.d011.innerHTML = "<br>";
				motion = ["16|8","24","13|10","8|16|24","20|13|8","20|13|8","25","24","21|27|47"];
				this.Cls_Table();
			} else {
				this.d01.innerHTML = "ＪＰ斬り<br>16･21";
				this.d08.innerHTML = "３連突き<br>24x3";
				this.d09.innerHTML = "回転斬り<br>21･27･47";
				motion = ["16|21","24","13|10","8|16|24","20|13|8","20|13|8","25","24","21|27|47"];
			}
		}
	}
	break;
case 7: //太刀
	wp_hosei = 100,wp_type = 1;
	this.c_mei.innerHTML = "気刃：",this.c_betu.options[1] = new Option("発動", 1);
	this.c_mei2.innerHTML = "刃部：",this.c_betu2.length = 0,this.c_betu2.options[0] = new Option("なし", 0),this.c_betu2.options[1] = new Option("中腹", 1);
	this.d00.innerHTML = "武器補正<br>斬100%";
	this.d01.innerHTML = "踏み込み<br>33";
	this.d02.innerHTML = "縦斬り<br>28";
	this.d03.innerHTML = "斬り下げ<br>30";
	this.d04.innerHTML = "突き<br>20";
	this.d05.innerHTML = "斬り上げ<br>23";
	this.d06.innerHTML = "気刃斬無<br>16";
	this.d07.innerHTML = "気刃斬１<br>35";
	this.d08.innerHTML = "気刃斬２<br>36";
	this.d09.innerHTML = "気刃斬３<br>18･18･40";
	this.d010.innerHTML = "ｽﾃｯﾌﾟ斬<br>24";
	this.Cng_Kobetu = function(){
		if (!this.c_betu.selectedIndex) this.c_tane.value = 0; //気刃なし状態 時限は強制解除

		if (this.c_Style.value.charAt(0) === "嵐") {
			if (this.c_betu.selectedIndex) {
				this.d04.innerHTML = "気刃貫刺し<br>24･12x5･30";
				motion[3] = "24|12|12|12|12|12|30";
			} else {
				this.d04.innerHTML = "貫刺し<br>24･12x2";
				motion[3] = "24|12|12";
			}
		}
	}
	this.Cng_Kobetu2 = function(){}
	this.Cng_Fw = function(){
		if (this.c_fw.checked) {
			this.c_tane.options[3] = ckFull ? new Option("フィーチャー　｜+40", 40) :  new Option("F", 40);
		} else {
			this.c_tane.length = 3; //フィーチャー解除
		}
	}
	this.Cng_Style = function(){
		if (this.c_Style.value.charAt(0) === "地"){
			this.d03.innerHTML = "斬り下げ<br>30";
			this.d04.innerHTML = "突き<br>20";
			motion = ["33","28","30","20","23","16","35","36","18|18|40","24"];
		} else if (this.c_Style.value.charAt(0) === "天"){
			this.d03.innerHTML = "避け斬り<br>28";
			this.d04.innerHTML = "突き<br>20";
			motion = ["33","28","28","20","23","16","35","36","18|18|40","24"];
		} else {
			this.d03.innerHTML = "避け斬り<br>28";
			motion = ["33","28","28","","23","16","35","36","18|18|40","24"];
			this.Cng_Kobetu();
		}
	}
	this.Cng_Kobetu();
	break;
case 8: //狩猟笛
	this.s_fue.style.display = "inline";
	wp_hosei = 100,wp_type = 2;
	this.d00.innerHTML = "武器補正<br>打100%<br>(気絶値)";
	this.Cng_Style = function(){
		if (this.c_Style.value.charAt(0) === "地"){
			this.d01.innerHTML = "叩きつけ<br>15･48(5･20)";
			this.d02.innerHTML = "ぶん回し<br>31(15)";
			this.d03.innerHTML = "つか殴り<br>12(0)";
			this.d04.innerHTML = "演奏開始<br>22(20)";
			this.d05.innerHTML = "演奏１<br>43(20)";
			this.d06.innerHTML = "演奏２<br>36(20)";
			this.d07.innerHTML = "演奏３<br>41(20)";
			this.d08.innerHTML = "演奏終了<br>26(20)";
			this.d09.innerHTML = "音爆演奏";
			this.d010.innerHTML = this.d011.innerHTML = "<br>";
			motion =["15|48","31","12","22","43","36","41","26"];
			this.Cls_Table();
		} else if (this.c_Style.value.charAt(0) === "天"){
			this.d01.innerHTML = "振り上げ<br>26(18)";
			this.d02.innerHTML = "突き上げ<br>30x3(5)";
			this.d03.innerHTML = "蹴り上げ<br>20(10)";
			this.d04.innerHTML = "ぶん回し<br>31(15)";
			this.d05.innerHTML = "つか殴り<br>12(0)";
			this.d06.innerHTML = "演奏開始<br>22(20)";
			this.d07.innerHTML = "演奏１<br>43(20)";
			this.d08.innerHTML = "演奏２<br>36(20)";
			this.d09.innerHTML = "演奏３<br>41(20)";
			this.d010.innerHTML = "演奏終了<br>26(20)";
			this.d011.innerHTML = "音爆演奏";
			motion = ["25","29","20","31","12","22","43","36","41","26"];
		} else {
			this.d01.innerHTML = "振り上げ<br>26(18)";
			this.d02.innerHTML = "突き上げ<br>30x3(5)";
			this.d03.innerHTML = "蹴り上げ<br>20(10)";
			this.d04.innerHTML = "ぶん回し<br>31(15)";
			this.d05.innerHTML = "つか殴り<br>12(0)";
			this.d06.innerHTML = "演奏開始<br>22(20)";
			this.d07.innerHTML = "演奏１<br>43(20)";
			this.d08.innerHTML = "演奏２<br>36(20)";
			this.d09.innerHTML = "演奏３<br>41(20)";
			this.d010.innerHTML = "演奏終了<br>26(20)";
			this.d011.innerHTML = "音色変換";
			motion = ["25","29","20","31","12","22","43","36","41","26"];
		}
	}
	break;
case 9: //ガンランス
	this.s_guns.style.display = "inline";
	this.c_guns.disabled = false;
	wp_hosei = 95,wp_type = 1;
	this.d00.innerHTML = "武器補正<br>斬95%";
	this.d01.innerHTML = "踏み込み<br>34";
	this.d02.innerHTML = "横薙ぎ<br>28";
	this.d03.innerHTML = "連撃砲<br>14";
	this.d04.innerHTML = "前方突1,2<br>21";
	this.d05.innerHTML = "前方突３<br>28";
	this.d06.innerHTML = "斬り上げ<br>30";
	this.d07.innerHTML = "上方突1,2<br>24";
	this.d08.innerHTML = "上方突３<br>24";
	this.d09.innerHTML = this.d010.innerHTML = this.d011.innerHTML = "<br>";
	//武器毎の個別
	this.Cng_Wp_Sub = function(Txt){
		var wkGL = this.d_spec.innerHTML.indexOf("型")-2;
		if (wkGL < 0) return;
		//砲撃|属性|属性値|属性砲
		switch (this.d_spec.innerHTML.substring(wkGL,wkGL+8)) {
		case "通常型砲撃LV1":
			this.d09.innerHTML = "通常型LV1<br>13+火40";
			tamaP = ["13|1|4|50|3"];
			break;
		case "通常型砲撃LV2":
			this.d09.innerHTML = "通常型LV2<br>20+火80";
			tamaP = ["20|1|8|55|4"];
			break;
		case "通常型砲撃LV3":
			this.d09.innerHTML = "通常型LV3<br>24+火80";
			tamaP = ["24|1|8|60|5"];
			break;
		case "通常型砲撃LV4":
			this.d09.innerHTML = "通常型LV4<br>29+火100";
			tamaP = ["29|1|10|65|6"];
			break;
		case "通常型砲撃LV5":
			this.d09.innerHTML = "通常型LV5<br>33+火120";
			tamaP = ["33|1|12|70|7"];
			break;
		case "通常型砲撃LV6":
			this.d09.innerHTML = "通常型LV6<br>37+火130";
			tamaP = ["37|1|13|75|8"];
			break;
		case "放射型砲撃LV1":
			this.d09.innerHTML = "放射型LV1<br>20+火90";
			tamaP = ["20|1|9|70|5"];
			break;
		case "放射型砲撃LV2":
			this.d09.innerHTML = "放射型LV2<br>26+火130";
			tamaP = ["26|1|13|75|6"];
			break;
		case "放射型砲撃LV3":
			this.d09.innerHTML = "放射型LV3<br>35+火160";
			tamaP = ["35|1|16|80|7"];
			break;
		case "放射型砲撃LV4":
			this.d09.innerHTML = "放射型LV4<br>40+火180";
			tamaP = ["40|1|18|85|8"];
			break;
		case "放射型砲撃LV5":
			this.d09.innerHTML = "放射型LV5<br>44+火200";
			tamaP = ["44|1|20|90|9"];
			break;
		case "放射型砲撃LV6":
			this.d09.innerHTML = "放射型LV6<br>48+火220";
			tamaP = ["48|1|22|95|10"];
			break;
		case "拡散型砲撃LV1":
			this.d09.innerHTML = "拡散型LV1<br>26+火60";
			tamaP = ["26|1|6|90|6"];
			break;
		case "拡散型砲撃LV2":
			this.d09.innerHTML = "拡散型LV2<br>37+火100";
			tamaP = ["37|1|10|95|7"];
			break;
		case "拡散型砲撃LV3":
			this.d09.innerHTML = "拡散型LV3<br>48+火120";
			tamaP = ["48|1|12|100|8"];
			break;
		case "拡散型砲撃LV4":
			this.d09.innerHTML = "拡散型LV4<br>53+火140";
			tamaP = ["53|1|14|105|9"];
			break;
		case "拡散型砲撃LV5":
			this.d09.innerHTML = "拡散型LV5<br>57+火160";
			tamaP = ["57|1|16|110|10"];
			break;
		case "拡散型砲撃LV6":
			this.d09.innerHTML = "拡散型LV5<br>62+火180";
			tamaP = ["62|1|18|115|11"];
			break;
		}
		switch (this.d_spec.innerHTML.substring(wkGL+3,wkGL+8)) {
		case "砲撃LV1":
			this.d010.innerHTML = "竜撃砲LV1<br>[36+火100]" + BR + "x5回";
			this.d011.innerHTML = "竜撃砲LV1<br>全Hit";
			tamaP[1] = "36|1|10";
			break;
		case "砲撃LV2":
			this.d010.innerHTML = "竜撃砲LV2<br>[44+火130]" + BR + "x5回";
			this.d011.innerHTML = "竜撃砲LV2<br>全Hit";
			tamaP[1] = "44|1|13";
			break;
		case "砲撃LV3":
			this.d010.innerHTML = "竜撃砲LV3<br>[54+火150]" + BR + "x5回";
			this.d011.innerHTML = "竜撃砲LV3<br>全Hit";
			tamaP[1] = "54|1|15";
			break;
		case "砲撃LV4":
			this.d010.innerHTML = "竜撃砲LV4<br>[60+火170]" + BR + "x5回";
			this.d011.innerHTML = "竜撃砲LV4<br>全Hit";
			tamaP[1] = "60|1|17";
			break;
		case "砲撃LV5":
			this.d010.innerHTML = "竜撃砲LV5<br>[66+火190]" + BR + "x5回";
			this.d011.innerHTML = "竜撃砲LV5<br>全Hit";
			tamaP[1] = "66|1|19";
			break;
		case "砲撃LV6":
			this.d010.innerHTML = "竜撃砲LV6<br>[72+火210]" + BR + "x5回";
			this.d011.innerHTML = "竜撃砲LV6<br>全Hit";
			tamaP[1] = "72|1|21";
			break;
		}
		
		if (this.c_Style.value.charAt(0) === "地") return;

		this.d010.innerHTML = "HBLV1<br>斬1+火" + tamaP[1].split("|")[2]+"0";
		tamaP[1] = "1|1|" + tamaP[1].split("|")[2];
		this.d011.innerHTML = "<br>";
		
		if (this.c_Style.value.charAt(0) !== "嵐") return;
		this.d011.innerHTML = "叩きつけ<br>20";
		
		this.d09.innerHTML = this.d09.innerHTML.toUpperCase().split("<BR>")[0].replace("型LV","属性");
		var hou_baku = Math.floor(tamaP[0].split("|")[0] * 6 / 10); //爆発
		
		if (this.c_kensyo.value.charAt(0) === "9") { //爆撃
			var hou_da = Math.floor(tamaP[0].split("|")[0] * 12 / 10);
			this.d09.innerHTML += "<BR>" + hou_da + "･" + hou_baku;
			tamaP[0] = hou_baku + "|-|+" + hou_da;
		} else {
			var hou_mei = this.g_zoku.innerHTML.toUpperCase().split("<BR>")[0].split("：");
			var hou_type = hou_mei[0] ? "火水雷龍氷".indexOf(hou_mei[0]) + 1 : 0;
			if (hou_type) { //属性
				var hou_da = Math.floor(hou_mei[1] * tamaP[0].split("|")[3] / 100);
				this.d09.innerHTML += "<BR>" + hou_mei[0] + hou_da + "･" + hou_baku;
				tamaP[0] = hou_baku + "|" + hou_type + "|" + hou_da;
			} else { //打
				var hou_da = Math.floor(tamaP[0].split("|")[0] * 9 / 10);
				this.d09.innerHTML += "<BR>" + "打" + hou_da + "(" + tamaP[0].split("|")[4] + ")･" + hou_baku;
				tamaP[0] = hou_baku + "|-|+" + hou_da;
			}
		}
	}
	this.Cng_Style = function(){
		motion = ["34","28","14","21","28","30","24","24"];
		if (this.c_Style.value.charAt(0) === "地"){
			this.c_mei2.innerHTML = "";
		} else {
			this.c_mei2.innerHTML = "ＨＢ：発動";
			if (this.c_Style.value.charAt(0) === "天") {
				this.Cls_Table();
			} else {
				this.d011.innerHTML = "叩きつけ<br>20";
				motion[8] = 20;
			}
		}
	}
	break;
case 10: //弓
	this.s_yumi_G.style.display = this.c_ya.style.display = "inline";
	this.c_guns.disabled = this.c_shoot.disabled = true;
	this.c_mei.innerHTML = "ビン：";
	this.c_betu.selectedIndex = 0;
	this.d00.innerHTML = "武器補正<br>弾100%";
	motion = [10,18,0];
	wp_hosei = 100,wp_type = 3;
	//武器毎の個別
	this.Cng_Wp_Sub = function(Txt){
		var w = this.c_tama;
		w.length = 0;
		//矢
		for (var i = 0,yumiP = Txt[aKick].split("/"),m = yumiP.length; i < m; i++){
			switch (yumiP[i]){
			case "連射1":
				w.options[w.length] = new Option((i+1) + ":連射LV1|12","連射LV112");
				break;
			case "連射2":
				w.options[w.length] = new Option((i+1) + ":連射LV2|12+5","連射LV212|5");
				break;
			case "連射3":
				w.options[w.length] = new Option((i+1) + ":連射LV3|12+5+4","連射LV312|5|4");
				break;
			case "連射4":
				w.options[w.length] = new Option((i+1) + ":連射LV4|12+5+4+2","連射LV412|5|4|2");
				break;
			case "拡散1":
				w.options[w.length] = new Option((i+1) + ":拡散LV1|4-5-4","拡散LV15");
				break;
			case "拡散2":
				w.options[w.length] = new Option((i+1) + ":拡散LV2|5-6-5","拡散LV26");
				break;
			case "拡散3":
				w.options[w.length] = new Option((i+1) + ":拡散LV3|4-5-5-5-4","拡散LV35");
				break;
			case "拡散4":
				w.options[w.length] = new Option((i+1) + ":拡散LV4|4-5-6-5-4","拡散LV46");
				break;
			case "貫通1":
				w.options[w.length] = new Option((i+1) + ":貫通LV1|6x3回","貫通LV16");
				break;
			case "貫通2":
				w.options[w.length] = new Option((i+1) + ":貫通LV2|6x4回","貫通LV26");
				break;
			case "貫通3":
				w.options[w.length] = new Option((i+1) + ":貫通LV3|6x5回","貫通LV36");
				break;
			case "貫通4":
				w.options[w.length] = new Option((i+1) + ":貫通LV4|6x6回","貫通LV46");
				break;
			}
			if (!ckFull) w.options[w.length-1].text = w.options[w.length-1].text.substring(0,7); //簡易は後ろカット
		}
		w.selectedIndex = this.s_tame.value-1;
		if (this.c_Style.value.charAt(0) === "嵐"){
			w.options[w.length] = new Option("4:ｵｰﾗ LV4|12","オーLV412");
			w.options[w.length] = new Option("5:ｵｰﾗ LV5|12","オーLV512");
			if (!ckFull) {
				w.options[w.length-2].text = w.options[w.length-2].text.substring(0,7);
				w.options[w.length-1].text = w.options[w.length-1].text.substring(0,7);
			}
		}
		//ビン
		var w = this.c_betu;
		w.length = 1;
		if (Txt[aSpec].indexOf("強") >= 0) w.options[1] = new Option("強撃ビン", 1);
		w.options[w.length] = new Option("毒ビン", 6);
		if (Txt[aSpec].indexOf("毒") === -1) w.options[w.length-1].style.backgroundColor = "lightpink";
		w.options[w.length] = new Option("麻痺ビン", 7);
		if (Txt[aSpec].indexOf("麻") === -1) w.options[w.length-1].style.backgroundColor = "lightpink";
		w.options[w.length] = new Option("睡眠ビン", 8);
		if (Txt[aSpec].indexOf("睡") === -1) w.options[w.length-1].style.backgroundColor = "lightpink";
		if (Txt[aSpec].indexOf("爆") >= 0) w.options[w.length] = new Option("爆撃ビン", 9);
		if (Txt[aSpec].indexOf("打") >= 0) w.options[w.length] = new Option("打撃ビン", 10);
		if (!ckFull) for (var i = 0,m = w.length; i < m; w.options[i].text = w.options[i++].text.replace("ビン",""));   //簡易は後ろカット

		this.Cng_Tama();
	}
	//弓の個別はビン
	this.Cng_Kobetu = function(){
		//モーション値はCng_Styleでセット
		if (this.c_Style.value.charAt(0) === "地"){
			this.d01.innerHTML = "なぎ払い<br>斬打10";
			this.d02.innerHTML = "縦斬り<br>斬打18";
		} else {
			this.d01.innerHTML = "昇龍弓<br>斬打18x2";
			this.d02.innerHTML = "+上昇9x3<br>+頂点22";
		}
		this.d03.innerHTML = ["タメ１<br>0.4倍","タメ２<br>1.0倍","タメ３<br>1.5倍","タメ４<br>1.5倍","ｵｰﾗ４<br>1.0倍","ｵｰﾗ５<br>1.125倍"][this.c_tama.selectedIndex];
		if (this.c_betu.value >= "2" && this.c_betu.value < "9") { //状態異常ビン
			switch (this.c_tama.value.substring(0,2)) {
			case "連射":
				yaZoku = [13,7,5,4][this.c_tama.value.charAt(4)-1];
				break;
			case "拡散":
				yaZoku = [5,6,5,5][this.c_tama.value.charAt(4)-1];
				break;
			case "貫通":
				yaZoku = [5,4,4,4][this.c_tama.value.charAt(4)-1];
				break;
			case "オー":
				yaZoku = 25;
				break;
			}
			this.d01.innerHTML += "<BR>" + zokuName[this.c_betu.value].replace("：","") + "2";
			this.d02.innerHTML += "<BR>" + zokuName[this.c_betu.value].replace("：","") + "2";
			this.d03.innerHTML += "<BR>" + "1本" + zokuName[this.c_betu.value].replace("：","") + yaZoku;
		} else if (this.c_betu.value === "9") { //爆撃ビン
			switch (this.c_tama.value.substring(0,2)) {
			case "連射":
				yaZoku = [70,40,32,28][this.c_tama.value.charAt(4)-1]
				break;
			case "拡散":
				yaZoku = [26,32,22,24][this.c_tama.value.charAt(4)-1]
				break;
			case "貫通":
				yaZoku = [28,28,28,28][this.c_tama.value.charAt(4)-1]
				break;
			case "オー":
				yaZoku = ""; //通常37,火事場55　計算でセット
				break;
			}
			this.d03.innerHTML = ["タメ１","タメ２","タメ３","タメ４","ｵｰﾗ４","ｵｰﾗ５"][this.c_tama.selectedIndex] + "<br>1本固定" + yaZoku;
		} else if (this.c_betu.value === "10") { //打撃ビン
			switch (this.c_tama.value.substring(0,2)) {
			case "オー":
				this.d03.innerHTML += "<BR>" + "気絶20";
				break;
			default:
				this.d03.innerHTML += "<BR>" + "1本気絶4";
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
		if (this.gou_enemi && this.c_tr.value >= 30 && this.d_spec.innerHTML.lastIndexOf("天嵐武器") > 0) addGunCri += 3; //剛種で２部位以上で天嵐武器
		switch (this.c_tama.value.substring(0,2)) {
		case "連射":
			motion = [motion[0],motion[1],0,10,15+addGunCri,15+addGunCri,10,8,8,5];
			this.d04.innerHTML = "近距離<br>1.0倍";
			this.d05.innerHTML = "中距離１<br>"+motion[4]/10+"倍";
			this.d06.innerHTML = "中距離２<br>"+motion[5]/10+"倍";
			this.d07.innerHTML = "遠距離１<br>1.0倍";
			this.d08.innerHTML = "遠距離２<br>0.8倍";
			this.d09.innerHTML = "遠距離３<br>0.8倍";
			this.d010.innerHTML = "遠距離４<br>0.5倍";

			if (!this.c_ya.length || this.c_tama.value !== this.c_ya.options[0].value) { //個別矢リストボックスが無ければセット
				tamaP = this.c_tama.value.substring(5).split("|");
				//矢セット
				this.c_ya.length = 0;
				var wkY = this.c_tama.value.substring(0,5);
				this.c_ya.length = 0,this.c_ya.style.display = "inline";
				this.c_ya.options[0] = new Option("全命中",this.c_tama.value);
				for (var i=0,j=1,m=tamaP.length;i<m;i++,j++) this.c_ya.options[j] = new Option(j+"矢:"+tamaP[i],wkY+tamaP[i]);
			}
			break;
		case "拡散":
			motion = [motion[0],motion[1],0,10,15+addGunCri,10,8,8,5];
			this.d04.innerHTML = "近距離<br>1.0倍";
			this.d05.innerHTML = "中距離１<br>"+motion[4]/10+"倍";
			this.d06.innerHTML = "中距離２<br>1.0倍";
			this.d07.innerHTML = "遠距離１<br>0.8倍";
			this.d08.innerHTML = "遠距離２<br>0.8倍";
			this.d09.innerHTML = "遠距離３<br>0.5倍";
			this.d010.innerHTML = "遠距離４<br>-";

			if (!this.c_ya.length || this.c_tama.value !== this.c_ya.options[0].value) { //個別矢リストボックスが無ければセット
				tamaP = [this.c_tama.value.substring(5)];
				//矢セット
				this.c_ya.length = 0;
				var wkY = this.c_tama.value.substring(0,5);
				this.c_ya.options[0] = new Option("中央:"+tamaP[0],this.c_tama.value);
				var j = wkY !== "拡散LV3" ? tamaP[0] - 1 : tamaP[0]; //拡散LV3以外は-1
				this.c_ya.options[1] = new Option("1 矢:"+j,wkY+j);
				if (wkY === "拡散LV3" || wkY === "拡散LV4") {
					j -= 1;
					this.c_ya.options[2] = new Option("2 矢:"+j,wkY+j);
				}
			}
			this.Cls_Table();
			break;
		case "貫通":
			motion = [motion[0],motion[1],0,10,15+addGunCri,15+addGunCri,15+addGunCri,10,8,5];
			this.d04.innerHTML = "近距離<br>1.0倍";
			this.d05.innerHTML = "中距離１<br>"+motion[4]/10+"倍";
			this.d06.innerHTML = "中距離２<br>"+motion[5]/10+"倍";
			this.d07.innerHTML = "遠距離１<br>"+motion[6]/10+"倍";
			this.d08.innerHTML = "遠距離２<br>1.0倍";
			this.d09.innerHTML = "遠距離３<br>0.8倍";
			this.d010.innerHTML = "遠距離４<br>0.5倍";

			if (!this.c_ya.length || this.c_tama.value !== this.c_ya.options[0].value) { //個別矢リストボックスが無ければセット
				tamaP = [this.c_tama.value.substring(5)];
				//矢セット
				this.c_ya.length = 0;
				this.c_ya.options[0] = new Option("1Hit:"+tamaP[0],this.c_tama.value);
			}
			break;
		case "オー":
			this.d04.innerHTML = "近距離<br>1.0倍";
			this.d05.innerHTML = "中距離<br>1.5倍";
			this.d06.innerHTML = "遠距離１<br>1.5倍";
			this.d07.innerHTML = "遠距離２<br>1.5倍";
			this.d08.innerHTML = "遠距離３<br>1.5倍";
			this.d09.innerHTML = "遠距離４<br>1.0倍";
			this.d010.innerHTML = "遠距離５<br>0.8倍";
			motion = [motion[0],motion[1],0,10,15,15,15,15,10,8];

			if (!this.c_ya.length || this.c_tama.value !== this.c_ya.options[0].value) { //個別矢リストボックスが無ければセット
				tamaP = [this.c_tama.value.substring(5)];
				//矢セット
				this.c_ya.length = 0;
				this.c_ya.options[0] = new Option("1矢:"+tamaP[0],this.c_tama.value);
			}
			break;
		}
	}
	this.Cng_Style = function(){
		if (this.c_Style.value.charAt(0) === "地"){
			this.c_mei2.innerHTML = "";
			motion[0] = "10";
			motion[1] = "18";
			if (this.c_tama.length > 3) this.c_tama.length = 4;
		} else {
			motion[0] = "18|18";
			motion[1] = "9|9|9|22";
			if (this.c_Style.value.charAt(0) === "嵐"){
				this.c_mei2.innerHTML = "しゃがみ";
				var w = this.c_tama;
				w.options[w.length] = new Option("4:ｵｰﾗ LV4|12","オーLV412");
				w.options[w.length] = new Option("5:ｵｰﾗ LV5|12","オーLV512");
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

//事前展開
var wp = equip[bukiId[wpid]];
for(var id in wp) {
	if (typeof(wp[id]) !== "string") break;
	wp[id] = wp[id].split(",");
}
this.Set_SinkaAtt();
this.search();
this.Cls_Table();
}
//------------------------------------武器検索----------
,search : function (){
if (wpid === "") return;
this.s_wp.length = 1;
this.s_wp.options[0].text = "－" + bukiName[wpid] + "－";
var wkList = [],i=0,wp = equip[bukiId[wpid]],M=Math.round;
var type = this.s_srt1.value,S1 = this.s_srt2.value,S2 = (type >= "6" ? aZyouAt : aZokuAt),rare = this.s_rare.value,HR = this.s_hr.value,slot = this.s_slot.value,ck_100 = this.m_sugo.checked,ck_HC = this.m_hc.value !== "1,1",Rst = this.s_rst.value;
var Rep = ckFull ? setRep(this) : "1-1i1t2-2i2m2t3-3i3g3t4g4k5-5p";
var check_F = function(e1,e2,e3){return true},check = aSpec;
switch (wpid) {
case 1: //ヘビィボウガン
case 5: //ライトボウガン
	type = "-"; //タイプは固定
	check = aGun + Number(this.s_tama.value);  //弾
	if (S1 === "2") S2 = check; //属性順を弾順に変更
	var kick = this.s_kick.value,reload = this.s_reload.value,gunAdd = this.s_gunAdd.checked ? "+":"-";
	check_F = function(e1,e2,e3){return (e1 !== "0" && e1.indexOf(gunAdd) && e2 >= kick && e3 >= reload)}
	break;
case 8: //狩猟笛
	if (this.s_fue.value) var fue = this.s_fue.value,check_F = function(e1,e2,e3){return e1.lastIndexOf(fue) >= 0}
	break;
case 9: //ガンランス
	if (this.s_guns.value) var guns = this.s_guns.value,check_F = function(e1,e2,e3){return e1.lastIndexOf(guns) >= 0}
	break;
case 10: //弓
	check = aKick; //矢
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
		//凄腕の場合攻撃力を変更
		if (ck_100 && Txt[aType] === "P") wAt += 10,wCri += 20;
		//HCの場合、遠距離は会心を変更
		if (ck_HC && (wpid === 1 || wpid === 5 || wpid === 10) && Txt[aType] === "H") wCri += 40;
		//ソートキー
		switch (S1) {
//		case "0": //名前
//			break;
		case "1": //攻撃
			w[0] = wAt * 1000 + wZk,w[3] = wAt;
			break;
		case "2": //属性
			if (wZk < 0) wZk *= -1; //ガンの場合弾のだから
			w[0] = wZk * 1000 + wAt + (wCri ? M(wAt * 25 * wCri / 10000) : 0),w[3] = wZk;
			break;
		case "3": //会心
			w[3] = wAt + (wCri ? M(wAt * 25 * wCri / 10000) : 0),w[0] = w[3] * 1000 + wZk;
			break;
		}
	}
}
if (S1 !== "0") wkList.sort(function (a, b){return b[0]-a[0]});
else if (ckOpera) {
	var Fulltohalf = (function (){
		var han = "0123456789.,-+ABCDEFGHIJKLMNOPQRSTUVWXYZｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｧｧｨｨｩｩｪｪｫｫｯｯｬｬｭｭｮｮｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾊﾋﾌﾍﾎﾊﾋﾌﾍﾎｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾊﾋﾌﾍﾎﾊﾋﾌﾍﾎｳ";
		var zen = "０１２３４５６７８９．，－＋ＡＢＣＤＥＦＪＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんぁァぃィぅゥぇェぉォっッゃャゅュょョがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽガギグゲゴザジズゼゾダジヅデドバビブベボパピプペポヴ";
		return function (strVal) {
			for (var i=0,str = "",m=strVal.length,c = "",n=0; i<m; i++){
				c = strVal.charAt(i),n = zen.indexOf(c,0);
				str += (n >= 0) ? han.charAt(n) : "ﾞ" + c;
			}
			return str;
		}
	})();
//	for(var i=0,m=wkList.length; i<m; wkList[i][0] = Fulltohalf(wkList[i++][1][aName]));
//	wkList.sort();
	wkList.sort(function (a, b){return Fulltohalf(b[1][aName]) < Fulltohalf(a[1][aName]) ? 1 : -1})
}

var wkatp = 99999, AttypeN = (S1 === "3") ? "会心付倍率:" : (S1 === "2") ? (wpid === 1 || wpid === 5 ) ? "弾数:" : "属性値:" : "武器倍率:";
for(var i = 0,c = 1,m = wkList.length; i < m; i++) {
	if (S1 !== "0" && wkatp-0 > wkList[i][3]-0) {
		var wk = this.s_wp.options[c++] = new Option("－"+AttypeN+wkList[i][3]+"－","");
		wk.style.backgroundColor = "aquamarine";
		wkatp = wkList[i][3];
	}
	//とりあえず没this.s_wp.options[c++] = new Option(wkList[i][1][aName]+(wkList[i][1][aSpec].indexOf("リーチ：") > 0 ? "|"+wkList[i][1][aSpec].split("リーチ：")[1].replace("</small>","") : ""),wkList[i][2]);
	this.s_wp.options[c++] = new Option(wkList[i][1][aName],wkList[i][2]);
}
}
//------------------------------------剛猫入力用----------
,Nekowp_set : function(){
if (this.i_att.value === "" || this.i_att.value === "0" || this.i_zoku.value === "" || this.i_cri.value === "") alert("数字入れて");
var Txt = equip[bukiId[wpid]][this.s_wp.value];
Txt[aAt] = Math.ceil(this.i_att.value / bukiRitu[wpid] * 10);
Txt[aZokuAt] = Math.floor(this.i_zoku.value / 10);
Txt[aCri] = this.i_cri.value;
if (wpid === 10) Txt[aKick] = this.i_ya1.value + this.i_yaLv1.value + "/" + this.i_ya2.value + this.i_yaLv2.value + "/" + this.i_ya3.value + this.i_yaLv3.value + "/" + this.i_ya4.value + this.i_yaLv4.value
}
//------------------------------------武器変更----------
,Cng_wp : function(){
if (!this.s_wp.value) return;
var Txt = equip[bukiId[wpid]][this.s_wp.value];
//剛猫武器
if (Txt[aType] === "N") {
	this.i_zoku_disp.innerHTML = zokuName[Txt[aZoku]].charAt(0);
	this.i_yumi.style.display = wpid === 10 ? "" : "none"
	this.m_N.style.display = "";
	if (Txt[aAt] === "0") return false;
} else {
	this.m_N.style.display = "none";
}
//表示
this.d_att.innerHTML = ~~(Txt[aAt] * bukiRitu[wpid] / 10) + (Txt[aSlot] ? "<br> [" + Txt[aSlot] + "]" : "");
var wk_zoku = "";
if (wpid === 1 || wpid === 5){
	wk_zoku = "LV5強化";
} else {
	if (Txt[aZokuAt]) wk_zoku = zokuName[Txt[aZoku]] + Txt[aZokuAt] + "0"; //属性
	if (Txt[aZyouAt]) wk_zoku += (wk_zoku ? "<br>" : "") + zokuName[Txt[aZyou]] + Txt[aZyouAt] + "0"; //状態異常
}
if (Txt[aDef]) wk_zoku += (wk_zoku ? "<br>" : "") + "防御+" + Txt[aDef];

this.d_zoku.innerHTML = wk_zoku ? wk_zoku : "<br>";
this.d_cri.innerHTML = Txt[aCri];
var wk_rep = "HR:" + Txt[aHR] + " ﾚｱ:" + Txt[aRare] + "<br>";
	switch (Txt[aCre].charAt(0)) {
	case "1": //狩猟
		break;
	case "2": //猟団
		wk_rep += "猟団";
		break;
	case "3": //ネカフェ
		wk_rep += "カフェ";
		break;
	case "4": //課金
		wk_rep += "課金";
		break;
	case "5": //特典
		wk_rep += "特典";
		break;
	}
	switch (Txt[aCre].charAt(1)) {
	case "-": //
		break;
	case "i": //イベント
		wk_rep += "イベ";
		break;
	case "m": //狩人祭
		wk_rep += "狩人祭";
		break;
	case "g": //ガチャ
		wk_rep += "ガチャ";
		break;
	case "k": //キット
		wk_rep += "キット";
		break;
	case "t": //韋駄天
		wk_rep += "韋駄天";
		break;
	case "p": //パッケージ
		wk_rep += "パッケ";
		break;
	}
this.d_hr.innerHTML = wk_rep;
var wk_d_spec="",wk_d_type="";
switch (Txt[aType]) {
case "":
	break;
case "G":
	wk_d_type = "<small><em>剛種武器</em></small>";
	break;
case "T":
	wk_d_type = "<small><em>天嵐武器</em></small>";
	break;
case "O":
	wk_d_type = "<small><em>親方印</em></small>";
	break;
case "H":
	wk_d_type = "<small><em>ＨＣ武器</em></small>";
	break;
case "S":
	wk_d_type = "<small><em>進化武器</em></small>";
	break;
case "N":
	wk_d_type = "<small><em>剛猫武器</em></small>";
	break;
}
switch (wpid) {
case 1: //ヘビィボウガン
case 5: //ライトボウガン
	//装填
	//反動
	wk_d_spec = reloadName[Txt[aRelo]] + " " + kickName[Txt[aKick]] + wk_d_type;
	if (Txt[aSpec] && wpid === 5) {
		wk_d_spec += (Txt[aType] === "G" || Txt[aType] === "N" || Txt[aType] === "T" ? "<br>超速射:" : "<br>速射:") + Txt[aSpec].split("S")[0];
	}
	break;
case 10: //弓
	wk_d_spec = Txt[aSpec].split("S")[0] + wk_d_type + "<br>" + Txt[aKick];
	break;
case 8: //狩猟笛
	wk_d_spec = "<ul>" + Txt[aSpec].split("^")[0].replace(/([roygbwp])(\d+)/g,"<li class=$1 style='width:$2px'>").replace("|","</ul><ul style=\"float:left\">") + "</ul>";
	if (this.m_hc.value !== "1,1" && Txt[aType] === "H") wk_d_spec = wk_d_spec.replace(/class\=w/g,"class=p").replace(/class\=b/g,"class=w").replace(/class\=g/g,"class=b").replace(/class\=y/g,"class=g").replace(/class\=o/g,"class=y").replace(/class\=r/g,"class=o"); //HCクエスト
	var wkTxt = Txt[aSpec].split("^")[1];
	wk_d_spec += "<a class=f href='../buki/fue.htm?"+wkTxt.substring(0,3)+"' target=_blank>"+Onpu[wkTxt.charAt(0)]+Onpu[wkTxt.charAt(1)]+Onpu[wkTxt.charAt(2)]+"</a>" + wk_d_type;
	break;
default:
	wk_d_spec = "<ul>" + Txt[aSpec].split("^")[0].replace(/([roygbwp])(\d+)/g,"<li class=$1 style='width:$2px'>").replace("|","</ul><ul style=\"float:left\">") + "</ul>";
	if ((this.m_hc.value !== "1,1" && Txt[aType] === "H") || (this.gou_enemi && this.c_tr.value >= 30 && Txt[aType] === "T")) wk_d_spec = wk_d_spec.replace(/class\=p/g,"class=s").replace(/class\=w/g,"class=p").replace(/class\=b/g,"class=w").replace(/class\=g/g,"class=b").replace(/class\=y/g,"class=g").replace(/class\=o/g,"class=y").replace(/class\=r/g,"class=o"); //HCクエストor天嵐剛種

	if (Txt[aSpec].lastIndexOf("^") >= 0) {
		var wkTxt = Txt[aSpec].split("^")[1].split("S")[0];
		wk_d_spec += "<small>" + wkTxt + "</small>";
	}
	wk_d_spec += wk_d_type;
	break;
}
this.d_spec.innerHTML = wk_d_spec;

//進化武器
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
case 1: //ヘビィボウガン
case 5: //ライトボウガン
//case 9: //ガンランス ガンスは計算で呼び出す事に変更
case 10: //弓
	this.Cng_Wp_Sub(Txt);
	break;
}
}
//------------------------------------モンスター変更----------
,Cng_Mons : function(){
if (!this.m_enemi.value) return;
var wk = this.m_enemi.value.split("|");
//全体防御率
var bk_i = this.m_def.selectedIndex,bk_v = this.m_def.value,bk_t = this.m_def.options[bk_i].text;
this.m_def.length = 1;
for (var i = 0,w = wk[1].split("I"),m = w.length-1; i < m ; this.m_def.options[i+1] = new Option(w[i].replace(",",":"), w[i++].split(",")[1]));
if (this.m_def.length !== 1 && this.m_def.length-1 >= bk_i && bk_v === this.m_def.options[bk_i].value && bk_t === this.m_def.options[bk_i].text) this.m_def.selectedIndex = bk_i;
//怒り
this.m_ang.value = (wk[2] === "0" || wk[2] === "1.00") ? 1 : wk[2];
//HC
bk_i = this.m_hc.selectedIndex,bk_v = this.m_hc.value,bk_t = this.m_hc.options[bk_i].text;
this.m_hc.length = 1;
for (var i = 0,w = wk[3].split("I"),m = w.length-1; i < m ; this.m_hc.options[i+1] = new Option(w[i].split(",")[0], w[i].split(",")[1] + "," + w[i++].split(",")[2]));
this.m_hc.disabled = this.m_hc.length === 1;
if (this.m_hc.length !== 1 && this.m_hc.length-1 >= bk_i && bk_v === this.m_hc.options[bk_i].value && bk_t === this.m_hc.options[bk_i].text) this.m_hc.selectedIndex = bk_i;

//部位設定(比較版のみ)
if (!ckFull) {
	if (this.c_buimei.length !== 0) {
		bk_i = this.c_buimei.selectedIndex,bk_t = this.c_buimei.options[bk_i].text;
	} else {
		bk_i = 0;
	}
	this.c_buimei.length = 0
}
//部位設定
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
this.gou_enemi = this.m_enemi.options[this.m_enemi.selectedIndex].text.lastIndexOf("剛種") > 0
}
//------------------------------------進化LV変更----------
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
//------------------------------------フレーム１から複写----------
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

//弓の個別BOXは武器依存なのでパス
if (wpid !== 10) this.c_betu.value = w.c_betu.value;

if (this.c_betu.style.display !=="none") this.Cng_Kobetu();
if (this.c_betu2.style.display !=="none") this.Cng_Kobetu2();
this.calc();
}
//------------------------------------テーブル初期化----------
,Cls_Table : function(){
for (var j=1;j<12;j++) {
	this["d1" + j].innerHTML = "<br>";
	if (ckFull) this["d2" + j].innerHTML =this["d3" + j].innerHTML =this["d4" + j].innerHTML =this["d5" + j].innerHTML =this["d6" + j].innerHTML =this["d7" + j].innerHTML = "<br>";
}
if (!ckFull) this.d00.innerHTML = "<br>";
}
//------------------------------------計算----------
,calc : function(){
if (!this.s_wp.value) return;
//武器
var Txt = equip[bukiId[wpid]][this.s_wp.value];
//ゲージ
var sharp = [500,750,1000,1125,1250,1400,1500,1600];
var sharpZoku = [2500,5000,7500,10000,10625,11250,11500,12000];
var sharpCl = [0,0,0,0,5,10,10,10][this.c_sharp.value];

var Mr = Math.round,Mf = Math.floor,Ma = Math.abs;
var MStyle = this.c_Style.value.charAt(0) === "地" ? 0 : this.c_Style.value.charAt(0) === "天" ? 1 : 2;
var KickP = this.c_sharp.value <= 4 ? [23,45,100] : [16,31,69.9];
//斬り方
if (this.c_sharp.value <= 2) {
	this.c_kiri.disabled = false;
	var zan = this.c_kiri.value;
} else {
	this.c_kiri.disabled = true;
	this.c_kiri.value = 100;
	var zan = 100;
}
//基礎
var cAt = Number(Txt[aAt]),cCri = Number(Txt[aCri]),cZoku = Number(Txt[aZoku]),cZokuAt = Number(Txt[aZokuAt]),cZyou = Number(Txt[aZyou]),cZyouAt = Number(Txt[aZyouAt]);
//進化武器
if (Txt[aType] === "S") {
	var w = this.c_sinka.value.split(".");
	cAt = Number(w[0]),cZokuAt = Number(w[1]);
	//画面表示
	this.d_att.innerHTML = ~~(cAt * bukiRitu[wpid] / 10);
	if (cZokuAt) this.d_zoku.innerHTML = zokuName[cZoku] + cZokuAt + "0"
	
	if (wpid === 9) { //ガンランス個別
		if (this.c_sinka.selectedIndex < 6) {
			var i = 1;
		} else if (this.c_sinka.selectedIndex < 15) {
			var i = 2;
		} else if (this.c_sinka.selectedIndex < 35) {
			var i = 3;
		} else if (this.c_sinka.selectedIndex < 65) {
			var i = 4;
		} else if ((Txt[aName].lastIndexOf("燦然") > 0 || Txt[aName].lastIndexOf("絢爛") > 0 || Txt[aName].lastIndexOf("煌然") > 0) && this.c_sinka.selectedIndex < 75) {
			var i = 5;
		} else if (!(Txt[aName].lastIndexOf("燦然") > 0 || Txt[aName].lastIndexOf("絢爛") > 0 || Txt[aName].lastIndexOf("煌然") > 0) && this.c_sinka.selectedIndex < 85) {
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
var izyouUP = this.c_izyou.checked ? 1125 : 1000; //状態異常
var zokuDUP =  this.c_fueZK.checked ? 11 : 10; //属性旋律

//var motion = motion,,wp_type = this.wp_type,tamaP = tamaP;
var hosei = wp_hosei,at_hosei = 100,dt_hosei = 100;

//ミッション
var BairituMax = 800,BairituAdd = 0;
if (this.c_mission.value !== "0") {
	for (var i=0;i<this.c_mission.value-0;i++) {
		switch (mission[i]) {
		case 1: //武器倍率UP
			BairituAdd++;
			break;
		case 2: //武器倍率上限UP
			BairituMax += 5;
			break;
		}
	}
}

//名称設定・初期値設定
switch (wpid) {
case 0: //大剣
	if (this.c_betu.selectedIndex && this.c_kiri.value === "100") zan = 105; //中腹
	break;
case 1: //ヘビィボウガン
	if (this.c_betu.selectedIndex) cAt += Txt[aType] === "G" || Txt[aType] === "N" || Txt[aType] === "T" ? 40 : 20;
case 5: //ライトボウガン
	zan = 100;
	if (this.c_tamaUp.checked) { //弾強化
		switch (this.c_tama.value) {
		case "0":
		case "1":
		case "2": //通常弾
		case "3":
		case "4":
		case "5": //貫通弾
			hosei = 110;break;
		case "9": //散弾
			hosei = 130;break;
		}
	}
	if (this.c_tama.value === "12") { //状態異常弾
		for (var i=0;i<6;i++) this["d0"+(i+1)].innerHTML = this["d0"+(i+1)].innerHTML.substring(0,this["d0"+(i+1)].innerHTML.length-2) + ~~(yaZoku[i] * izyouUP / 1000 * (wpid === 5 && MStyle === 2 ? 13 : 10) /10);
	}
	var soku_hosei = (this.d01.innerHTML+this.d02.innerHTML+this.d03.innerHTML+this.d04.innerHTML).indexOf("速射") >=0 ? 10 : 1;
	break;
case 6: //双剣
	at_hosei = this.c_betu2.value; //刃打ち
	break;
case 7: //太刀
	if (this.c_betu2.selectedIndex && this.c_kiri.value === "100") zan = 105; //中腹
	if (this.c_betu.selectedIndex) { //気刃状態
		if (this.c_tane.value === "0") this.c_tane.value = 10; //強制で種使用
		if (this.c_fw.checked) this.c_tane.value = 40; //フィーチャー時
		if (this.c_waza.selectedIndex === 1) {//SR技
			at_hosei = 1125/10*1.1;
		} else {
			at_hosei = 1125/10;
		}
	}
	break;
case 9: //ガンランス
	if (MStyle) {//天嵐
		//ヒートブレード中は、青ゲージ以下の場合、１ランクＵＰする
		sharp = [500,1000,1125,1250,1400,1500,1600,1600];
		sharpZoku = [2500,7500,10000,10625,11250,11500,12000,12000];
	}
	break;
case 10: //弓
	var tameP = [40,100,150,150,100,112.5][this.c_tama.selectedIndex];
	var tamePZoku = [5000,7500,10000,11250,10000,11000][this.c_tama.selectedIndex];
	zan = 100;
	wp_type = 3;
	if (Txt[aType] === "G" || Txt[aType] === "N" || Txt[aType] === "T") izyouUP = izyouUP * 15 / 10; //剛種は状態異常1.5倍
	if (this.c_tamaUp.checked) { //弾強化
		switch (this.c_tama.value.substring(0,2)) {
		case "連射":
		case "貫通":
			hosei = 110;break;
		case "拡散":
			hosei = 130;break;
		}
	}
	if (MStyle === 2) { //嵐のしゃがみ撃ち
		if (this.c_tama.selectedIndex >= 4) { //オーラアロー
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
	case "1": //強撃ビン
		zan = (Txt[aType] === "G" || Txt[aType] === "N" || Txt[aType] === "T") && this.c_waza.selectedIndex === 1 ? 170 : Txt[aType] === "G" || Txt[aType] === "N" || Txt[aType] === "T" || this.c_waza.selectedIndex === 1 ? 160 : 150;break; //近接を1.5倍　弓鬼か剛武器は1.6倍　剛武器で弓鬼は1.7倍
		if (this.gou_enemi && this.c_tr.value >= 30 && Txt[aType] === "T") zan = 170; //剛種で２部位以上で天嵐
	case "9": //爆撃ビン
		//オーラアロー時のビン
		if (MStyle === 2 && this.c_tama.selectedIndex >= 4) {
			yaZoku = this.c_soko.selectedIndex === 1 ? 55 : 37;
		}
		break;
	case "10": //打撃ビン
		wp_type = 2;break; //打撃で計算
	default: //状態異常ビン
		cZoku = cZokuAt = 0;
		var wk = this.d03.innerHTML.toUpperCase().split("<BR>");
		wk[2] = "1本" + zokuName[this.c_betu.value].replace("：","") + ~~(yaZoku * (this.c_tama.selectedIndex === 0 ? 5 : this.c_tama.selectedIndex === 5 ? 11 : 10) * izyouUP * dt_hosei / 100000);
		this.d03.innerHTML = wk.join("<br>");
		break;
	}
}
//表示攻撃・武器倍率
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
      + (this.c_kizuna.checked ? 5 : 0) + (this.m_enemi.options[this.m_enemi.selectedIndex].text.lastIndexOf("剛種") > 0 && (Txt[aType] === "G" || Txt[aType] === "T") ? this.c_tr.value-0 : 0);

if (cAt > BairituMax) {
	cAt = BairituMax;
	this.g_attB.style.color = "red";
} else {
	this.g_attB.style.color = "black";
}
this.g_att.innerHTML = Mf(cAt * bukiRitu[wpid] / 10);
this.g_attB.innerHTML = "(" + cAt+ ")";
//剣晶
var wk_ken = this.c_kensyo.value.charAt(0);
if (wk_ken !== "0") {
	if (wk_ken === "9") { //爆撃
		hosei = setKensyou(this.c_kensyo.value,this.c_betu.selectedIndex);
	} else if (wk_ken <= "5") { //属性剣晶
		cZoku = Number(wk_ken);
		cZokuAt = setKensyou(this.c_kensyo.value,this.c_betu.selectedIndex);
	} else if (wk_ken <= "8") { //異常剣晶
		cZyou = Number(wk_ken);
		cZyouAt = setKensyou(this.c_kensyo.value,this.c_betu.selectedIndex);
	}
}
//表示属性
cZokuAt = Mf(Mf(Mf(cZokuAt * this.c_zkUp.value / 10) * this.c_zkUp2.value / 10) * (this.c_honki.value === "1" ? 11 : 10) / 10);
cZyouAt = Mf(cZyouAt * izyouUP / 1000);
var wk = "";
if (cZokuAt) wk = zokuName[cZoku] + cZokuAt + "0"; //属性
if (cZyouAt) wk += (wk ? "<br>" : "") + zokuName[cZyou] + cZyouAt + "0";//状態異常
this.g_zoku.innerHTML = wk ? wk : "<br>";
//表示会心
cCri += Number(this.c_criUp.value) + Number(this.c_sr.value); //達人
if (!(wpid === 1 || wpid === 5 || wpid === 10) && cCri > 0) cCri += sharpCl; //切れ味ボーナス
if (this.m_sugo.checked && Txt[aType] === "P") cCri += 20; //凄腕クエスト
if (this.m_hc.value !== "1,1" && (wpid === 1 || wpid === 5 || wpid === 10) && Txt[aType] === "H") cCri += 40; //HCクエスト
if (this.c_garou.value >= 1) cCri += 50; //餓狼
if (this.c_honki.value === "2") cCri += 30; //本気飲料
if (wpid === 9) { //ガンランス個別
	this.Cng_Wp_Sub(); //ガンスだけここで武器個別呼び出し
	if (MStyle) cCri = 100; //新スタイルでは100%
}
if (!(wpid === 1 || wpid === 5 || wpid === 10) && this.c_sharp.value <= 2) cCri = 0; //ガン以外は黄以下だと無効
if (cCri > 100) {
	cCri = 100;
	this.g_cri.style.color = "red";
} else {
	this.g_cri.style.color = "black";
}
this.g_cri.innerHTML = cCri;
//攻撃時攻撃値
var AttPow = (wpid === 1 || wpid === 5 || wpid === 10) ? cAt * zan / 100 : cAt * sharp[this.c_sharp.value] * zan * (this.c_kensyo.value === "A1" ? 12 : 10) / 1000000;
if (wpid === 1 && MStyle === 2) AttPow *= this.c_betu2.value / 100; //ヘビィ嵐
this.g_attN.innerHTML = Mf(AttPow);
//攻撃時属性値
var AttZoku = 0;
var wk = "";
if (wk_ken === "9") {
	wk = "爆撃" + hosei;
} else {
	if (cZoku) { //属性
		if (wpid === 10) { //弓
			AttZoku = cZokuAt * zokuDUP / 10;
			wk = zokuName[cZoku] + Mf(AttZoku * tamePZoku / 10000);
		} else {
			AttZoku = cZokuAt * sharpZoku[this.c_sharp.value] * zokuDUP / 100000 * (wpid === 4 && this.c_fw.checked ? 12/10 : 1);
			wk = zokuName[cZoku] + Mf(AttZoku);
		}
	}
	if (cZyou) wk += (wk ? "<br>" : "") + zokuName[cZyou] + (wpid === 4 && this.c_fw.checked ? Mf(cZyouAt * 12/10) : cZyouAt); //状態異常
}
this.g_zokuN.innerHTML = wk ? wk : "<br>";
var AttPowBk = AttPow,AttZokuBk = AttZoku; //元威力退避


//会心設定
//if (cCri == 0) {
//	this.c_cri[0].checked = true;
//	this.c_cri[0].disabled=this.c_cri[1].disabled=this.c_cri[2].disabled = true;
//} else {
//	this.c_cri[0].disabled=this.c_cri[1].disabled=this.c_cri[2].disabled = false;
//}
var cl = (cCri === 0 || this.c_cri[0].checked) ? 100 : cCri < 0 ? 75 : this.c_garou.value === "2" ? 135 : 125;
//

if (!this.m_enemi.value) return;
//------------------実計算------------------
//全体防御率
var hc_def = this.m_hc.value.split(",");
var def = this.m_ang.checked ? this.m_def.value * this.m_ang.value * hc_def[0] * hc_def[1] * 100 : this.m_def.value * hc_def[0] * 100;
//部位
var bui = this.m_enemi.value.split(":|")[0].split(":"),buiZoku = cZoku + 3;
if (ckFull) {
	for (var i=0,m=bui.length;i<m;bui[i] = bui[i++].split(","));
} else {
	bui.length = 1,bui[0] = this.c_buimei.value.split(",");
}
//爆撃剣
if (wk_ken === "9") {
	for (var i=0,max=bui.length;i<max;bui[i][1]=bui[i++][2]=100);
	cl = 100,AttPow = 100,AttZoku = 0;
}
switch (wpid) {
case 0: //大剣
case 2: //ハンマー
case 3: //ランス
case 4: //片手剣
case 6: //双剣
case 7: //太刀
case 8: //狩猟笛
case 9: //ガンランス
	//部位
	for (var i=0,j=1,max=bui.length;i<max;i++,j++){
		//モーション
		for (var k=0,l=1,maxk=motion.length;k<maxk;k++,l++) {
			var motionP = isNaN(motion[k]) ? motion[k].split("|") : [motion[k]];
			var nd = 0,zd = 0;
			//太刀の嵐貫通は50%、双剣は乱舞中属性70%に
			var wkKeizoku = (wpid === 7 && k === 3 && MStyle === 2) ? 20/3 : (wpid === 6 && k >= 7 && !MStyle) ? 7 : 10;
			
			//計算
			for (var m=0,maxm=motionP.length;m<maxm;m++) {
				if (wk_ken !== "9") { //爆撃以外
					switch (wpid) {
					case 0: //大剣
						if (MStyle !== 1) { //大剣の溜め会心モーション（天以外
							switch (maxk-k) {
							case 3: hosei = 110;break;
							case 2: hosei = 120;break;
							case 1: hosei = 130;break;
							default: hosei = 100;break;
							}
						}
						break;
					case 2: //ハンマー
						if (k >= 7 && this.c_betu.selectedIndex) { //SR技瞬撃
							AttPow = Mf(cAt * 1.3);
							if (AttPow > BairituMax) AttPow = BairituMax;
							AttPow = AttPow * sharp[this.c_sharp.value] * zan * (this.c_kensyo.value === "A1" ? 12 : 10) / 1000000;
						} else {
							AttPow = AttPowBk;
						}
						break;
					case 3: //ランス
						if (motionP[m].charAt(0) === "+") { //打
							hosei = 100,wp_type = 2;
							AttPow = AttPowBk / sharp[this.c_sharp.value] * 1000 / zan * 100;
							AttZoku = AttZokuBk / sharpZoku[this.c_sharp.value] * 10000 / zan * 100;
						} else if (Number(bui[i][1]) * 100 >= Number(bui[i][2]) * 72) { //部位選択
							hosei = 100,wp_type = 1,AttPow = AttPowBk,AttZoku = AttZokuBk;
						} else {
							hosei = 72,wp_type = 2,AttPow = AttPowBk,AttZoku = AttZokuBk;
						}
						if (k === 7 && !MStyle) { //突進加速
							hosei *= 1.125;
						}
						break;
					case 4: //片手剣
						if (motionP[m].charAt(0) === "+") { //打
							wp_type = 2,hosei = 100;
							AttPow = AttPowBk / sharp[this.c_sharp.value] * 1000 / zan * 100;
							AttZoku = AttZokuBk / sharpZoku[this.c_sharp.value] * 10000 / zan * 100;
						} else if(wp_type === 2) { //斬
							wp_type = 1,hosei = 125,AttPow = AttPowBk,AttZoku = AttZokuBk;
						}
						break;
					case 6: //双剣
						if (MStyle && k >= 7) { //地以外
							AttPow = AttPowBk / at_hosei * 100;
						} else {
							AttPow = AttPowBk;
						}
						break;
					}
				}
				//(攻撃×切れ味倍率×斬り方)×モーション×補正×肉質×クリティカル(1.25,0.75)
				var ndWK = Mf(AttPow * motionP[m] * hosei * bui[i][wp_type] * cl / 100000000); //通常
				var ndNC = Mf(AttPow * motionP[m] * hosei * bui[i][wp_type] * 100 / 100000000); //通常クリなし
				if (ndWK < 1) ndWK = 1; //最低ダメージ保障
				if (ndNC < 1) ndNC = 1; //最低ダメージ保障
				//(攻撃属性×切れ味倍率)×肉質
				var zdWK = Mf(AttZoku * bui[i][buiZoku] * wkKeizoku / 1000); //属性

				if (this.c_gou[0].checked) { //合計表示
					ndWK = Mf((ndWK + zdWK) * def / 100);
					if (ndWK < 1) ndWK = 1; //最低ダメージ保障

					if (this.c_cri[2].checked) { //会心平均
						ndNC = Mf((ndNC + zdWK) * def / 100);
						if (ndNC < 1) ndNC = 1; //最低ダメージ保障
						ndWK = Mr(((ndWK * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10); //平均(10倍)
					}
					zdWK = 0;
				} else { //分離表示
					ndWK = Mf(ndWK * def / 100);
					zdWK = Mf(zdWK * def / 100);
					if (ndWK + zdWK < 1) ndWK = 1; //最低ダメージ保障

					if (this.c_cri[2].checked) { //会心平均
						ndNC = Mf(ndNC * def / 100); //通常クリなし
						if (ndNC + zdWK < 1) ndNC = 1; //最低ダメージ保障
						ndWK = Mr(((ndWK * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10); //平均(10倍)
					}
				}
				nd += ndWK;
				zd += zdWK;
			}

			if (this.c_cri[2].checked) nd /= 10; //会心平均の表示前処理
			var wkHtml = this.c_gou[0].checked ? nd : nd + (zd < 0 ? "":"+") + zd;
			//弾かれ値(太刀で鬼刃状態は1.125UP)
			var kick = wk_ken === "9" ? 100 : bui[i][wp_type] * sharp[this.c_sharp.value] * zan * hosei / 10000000 * (wpid === 7 && this.c_betu.selectedIndex ? 1125/1000 : 1);
			//弾かれ・会心モーション
			if (kick <= KickP[0] && !(wpid === 9 && MStyle)) {this["d" + j + l].innerHTML = "<span style='color:gray'>" + wkHtml + "</span>";}
			else if (kick > KickP[2]) {this["d" + j + l].innerHTML = "<span style='color:blue'>" + wkHtml + "</span>";}
			else if (kick >= KickP[1]) {this["d" + j + l].innerHTML = "<span style='color:green'>" + wkHtml + "</span>";}
			else {this["d" + j + l].innerHTML = wkHtml;}
		}
		//ガンランス砲撃
		if (wpid === 9) {
			//弾(攻撃力)
			if (MStyle === 2) { //嵐の場合のみ列を移動（叩き付け）
				this["d" + j + 11].innerHTML = this.c_sharp.value === "0" ? "<br>" : this["d" + j + 9].innerHTML; //赤ゲージなら破棄
				l--;
			}
			for (var k=0,m=tamaP.length;k<m;k++,l++) {
				//赤ゲージでは砲撃不可/HBも不可
				if (this.c_sharp.value === "0" && (k === 0 || MStyle)) {
					this["d" + j + l].innerHTML = "-";
				} else {
					tamaPZ = tamaP[k].split("|");
					//砲術師 k=0:砲撃 1:龍撃砲
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
					//砲撃は橙ゲージで75％
					hoseiwH = (k === 0 && this.c_sharp.value <= 1) ? hoseiwH * 75 / 100 : hoseiwH;
					if (this.c_fw.checked) hoseiwH *= 15/10;
					//計算:無 攻撃力
					//計算:火 攻撃力×肉質
					if (!k) {	//砲撃
						if (MStyle === 0) {				//地
							nd = Mf(tamaPZ[0] * hoseiwH / 100);
							zd = Mf(tamaPZ[2] * bui[i][tamaPZ[1] - 0 + 3] / 100 * zokuDUP / 10);
						} else if (MStyle === 1) {		//天
							nd = Mf(tamaPZ[0] * hoseiwH / 100);
							zd = Mf(tamaPZ[2] * 3 * bui[i][tamaPZ[1] - 0 + 3] / 100 * zokuDUP / 10);
						} else {						//嵐
							if (tamaPZ[1] === "-") { //打・爆撃
								zd = Mf(tamaPZ[2] * hoseiwH / 100)+1;
							} else {
								zd = Mf(tamaPZ[2] * bui[i][tamaPZ[1] - 0 + 3] / 100 * zokuDUP / 10)+1;
							}
							nd = Mf(tamaPZ[0] * hoseiwH / 100);
						}
					} else {	//龍撃砲|HB
						if (!MStyle) {				//地
							nd = Mf(tamaPZ[0] * hoseiwH / 100);
							zd = Mf(tamaPZ[2] * bui[i][tamaPZ[1] - 0 + 3] / 100 * zokuDUP / 10);
						} else { //HB
							nd = Mf(AttPow * tamaPZ[0] * hosei * bui[i][1] * cl / 100000000);
							zd = Mf(tamaPZ[2] * sharpZoku[this.c_sharp.value] * bui[i][tamaPZ[1] - 0 + 3] / 1000000 * zokuDUP / 10);
						}
					}
					if (MStyle === 2 && k === 0) {	//嵐の砲撃
						nd = Mf(nd * def / 100);
						zd = Mf(zd * def / 100);
						if (nd < 1) nd = 1; //最低ダメージ保障
						if (zd < 1) zd = 1; //最低ダメージ保障
						this["d" + j + l].innerHTML = zd + "･" + nd;
					} else {
						if (nd < 1) nd = 1; //最低ダメージ保障
						if (this.c_gou[0].checked) { //合計表示
							nd = Mf((nd + zd) * def / 100);
							if (nd < 1) nd = 1; //最低ダメージ保障
							this["d" + j + l].innerHTML = nd;
						} else {
							nd = Mf(nd * def / 100);
							zd = Mf(zd * def / 100);
							if (nd + zd < 1) nd = 1; //最低ダメージ保障
							this["d" + j + l].innerHTML = nd + (zd < 0 ? "":"+") + zd;
						}
					}
				}
			}
			if (!MStyle) { //旧スタイルの場合のみ
				if (this.c_gou[0].checked) { //合計表示
					this["d" + j + l].innerHTML = nd * 5;
				} else { //分離表示
					this["d" + j + l].innerHTML = nd * 5 + (zd < 0 ? "":"+") + zd * 5;
				}
			}
		}
	}
	break;
case 1: //ヘビィボウガン
case 5: //ライトボウガン
	//部位
	for (var i=0,j=1,max=bui.length;i<max;i++,j++){
		switch (this.c_tama.value) {
		case "9": //散弾
		case "10": //拡散弾
		case "11": //属性
		case "12": //状態異常
			//弾(攻撃力｜属性｜倍率)
			//if (this.c_tama.value === "12") bui[i][wp_type] = 100; //状態異常は肉質無視10.0で無くなった
			//計算
			for (var k=0,l=1,m=tamaP.length;k<m;k++,l++) {
				var tamaPZ = tamaP[k].split("|");
				//攻撃×弾攻撃力×補正×肉質×クリティカル(1.25,0.75)
				var nd   = Mf(AttPow * tamaPZ[0] * hosei * bui[i][wp_type] * cl / 100000000); //通常
				var ndNC = Mf(AttPow * tamaPZ[0] * hosei * bui[i][wp_type] * 100 / 100000000); //通常クリなし
				if (nd   < 1) nd = 1; //最低ダメージ保障
				if (ndNC < 1) ndNC = 1; //最低ダメージ保障
				//属性
				if (tamaPZ.length > 2) {
					//攻撃×弾攻撃力×肉質×属性UP
					if (this.c_tama.value === "11") {
						//※滅龍弾のみ攻撃力に依存しない
						if (wpid === 5 && MStyle === 2) {//ライト嵐の型
							var zd = Mf((k === 4 ? 100 : AttPow) * tamaPZ[2] / 100 * bui[i][tamaPZ[1] - 0 + 3] * this.c_zkUp.value / 10 * this.c_zkUp2.value / 10 * (this.c_honki.value === "1" ? 11 : 10) / 10 * zokuDUP / 1000 * 15 / 10);
						} else if (wpid === 1 && this.c_waza.selectedIndex === 1) {//ヘビィSR
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
				//表示
				if (this.c_tama.value === "10") { //拡散
					if (this.c_gou[0].checked) { //合計表示
						nd = Mf(nd * def / 100);
						if (nd < 1) nd = 1; //最低ダメージ保障
						if (this.c_cri[2].checked) { //会心平均
							ndNC = Mf(ndNC * def / 100);
							if (ndNC < 1) ndNC = 1; //最低ダメージ保障
							nd = Mr(((nd * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10) / 10; //平均
						}
						this["d" + j + l].innerHTML = nd + "(" + Mf((tamaPZ[3] - 0 + zd) * def / 100) + ")";
					} else { //分離表示
						nd = Mf(nd * def / 100);
						zd = Mf(zd * def / 100);
						if (nd < 1) nd = 1; //最低ダメージ保障
						if (this.c_cri[2].checked) { //会心平均
							ndNC = Mf(ndNC * def / 100); //通常クリなし
							if (ndNC < 1) ndNC = 1; //最低ダメージ保障
							nd = Mr(((nd * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10) / 10; //平均
						}
						this["d" + j + l].innerHTML = nd + "(" + Mf(tamaPZ[3] * def / 100) + (zd < 0 ? "":"+") + zd + ")";
					}
				} else {
					if (this.c_gou[0].checked) { //合計表示
						nd = Mf((nd + zd) * def / 100);
						if (nd < 1) nd = 1; //最低ダメージ保障
						if (this.c_cri[2].checked) { //会心平均
							ndNC = Mf((ndNC + zd) * def / 100);
							if (ndNC < 1) ndNC = 1; //最低ダメージ保障
							nd = Mr(((nd * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10) / 10; //平均
						}
						this["d" + j + l].innerHTML = nd;
					} else { //分離表示
						nd = Mf(nd * def / 100);
						zd = Mf(zd * def / 100);
						if (nd + zd < 1) nd = 1; //最低ダメージ保障
						if (this.c_cri[2].checked) { //会心平均
							ndNC = Mf(ndNC * def / 100); //通常クリなし
							if (ndNC + zd < 1) ndNC = 1; //最低ダメージ保障
							nd = Mr(((nd * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10) / 10; //平均
						}
						this["d" + j + l].innerHTML = nd + (zd < 0 ? "":"+") + zd;
					}
				}
			}
			break;
		case "6":
		case "7":
		case "8": //徹甲榴弾
			//砲術師
			var hoseiwHn = this.c_guns.value === "0" ? 100 : 150;
			var hoseiwHf = this.c_guns.value === "0" ? 100 : this.c_guns.value === "1" ? 150 : this.c_guns.value === "2" ? 160 : 170;
			//モーション(威力減衰)
			for (var k=0,l=2,maxk=motion.length;k<maxk;k++,l++) {
				//狙い撃ち
				var wkshoot = this.c_shoot.checked && motion[k] >= 15 ? 5 : 0;
				//弾(攻撃力｜属性｜属性値|固定)
				var tamaPZ = tamaP[this.c_tama.value].split("|");
				//計算 攻撃×弾攻撃力×威力減衰×補正×肉質×クリティカル(1.25,0.75)
				var nd = Mf(Mf(AttPow * tamaPZ[0] * motion[k] * hosei * (bui[i][wp_type]-0+wkshoot) * cl / 1000000000) * def / 100);
				if (nd < 1) nd = 1; //最低ダメージ保障
				if (this.c_cri[2].checked) { //会心平均
					var ndNC = Mf(Mf(AttPow * tamaPZ[0] * motion[k] * hosei * (bui[i][wp_type]-0+wkshoot) * 100 / 1000000000) * def / 100); //通常クリなし;
					if (ndNC < 1) ndNC = 1; //最低ダメージ保障
					nd = Mr(((nd * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10) / 10; //平均
				}
				var zd = Mf(tamaPZ[2] * bui[i][tamaPZ[1] - 0 + 3] * hoseiwHf / 10000 * zokuDUP / 10);
				var kz = Mf(tamaPZ[3] * hoseiwHn / 100);
				if (this.c_gou[0].checked) { //合計表示
					this["d" + j + l].innerHTML = nd + "+(" + Mf((kz + zd) * def / 100) + ")";
				} else { //分離表示
					this["d" + j + l].innerHTML = nd + "+(" + Mf(kz * def / 100) + (Mf(zd * def / 100) < 0 ? "":"+") + Mf(zd * def / 100) + ")";
				}
			}
			break;
		case "20": //排熱弾
			//砲術師
			var hoseiwHn = this.c_guns.value === "0" ? 100 : this.c_guns.value === "1" ? 110 : this.c_guns.value === "2" ? 120 : 130;
			var hoseiwHf = 100;
			if (this.c_waza.selectedIndex === 1){ //重銃技【銃仙】は1.2倍
				hoseiwHn *= 12 / 10;
				hoseiwHf *= 12 / 10;
			}
				//弾(攻撃力｜属性｜属性値|固定)
				var tamaPZ = tamaP[0].split("|");
				var zd = Mf(tamaPZ[2] * bui[i][tamaPZ[1] - 0 + 3] * hoseiwHf / 10000 * zokuDUP / 10);
				var kz = Mf(tamaPZ[3] * hoseiwHn / 100);
				if (this.c_gou[0].checked) { //合計表示
					this["d" + j + "1"].innerHTML = Mf((kz + zd) * def / 100);
					this["d" + j + "2"].innerHTML = Mf((kz + zd) * def / 100) * 60;
				} else { //分離表示
					this["d" + j + "1"].innerHTML = Mf(kz * def / 100) + (Mf(zd * def / 100) < 0 ? "":"+") + Mf(zd * def / 100);
					this["d" + j + "2"].innerHTML = Mf(kz * def / 100) * 60 + (Mf(zd * def / 100) < 0 ? "":"+") + Mf(zd * def / 100) * 60;
				}
			break;
		default:
			//モーション(威力減衰)
			for (var k=0,l=2,maxk=motion.length;k<maxk;k++,l++) {
				//狙い撃ち
				var wkshoot = this.c_shoot.checked && motion[k] >= 15 ? 5 : 0;
				//計算 攻撃×弾攻撃力×威力減衰×補正×肉質×クリティカル(1.25,0.75)
				var nd = Mf(Mf(AttPow * tamaP[this.c_tama.value] * motion[k] * hosei * (bui[i][wp_type]-0+wkshoot) * cl / 1000000000) * def / 100);
				if (nd < 1) nd = 1; //最低ダメージ保障
				if (this.c_cri[2].checked) { //会心平均
					var ndNC = Mf(Mf(AttPow * tamaP[this.c_tama.value] * motion[k] * hosei * (bui[i][wp_type]-0+wkshoot) * 100 / 1000000000) * def / 100); //通常クリなし;
					if (ndNC < 1) ndNC = 1; //最低ダメージ保障
					nd = Mr(((nd * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10) / 10; //平均
				}
				this["d" + j + l].innerHTML = nd;
			}
			break;
		}
		//ライト嵐の型
		if (wpid === 5 && MStyle === 2) {
			var nd = Mf(30 / soku_hosei);
			var zd = Mf(12 * bui[i][1 - 0 + 3] * zokuDUP / 1000 / soku_hosei);
			if (this.c_gou[0].checked) { //合計表示
				nd = Mf((nd + zd) * def / 100);
				if (nd < 1) nd = 1; //最低ダメージ保障
				this["d" + j + 10].innerHTML =  nd;
			} else { //分離表示
				nd = Mf(nd * def / 100);
				zd = Mf(zd * def / 100);
				if (nd + zd < 1) nd = 1; //最低ダメージ保障
				this["d" + j + 10].innerHTML = nd + (zd < 0 ? "":"+") + zd;
			}
		}
	}
	break;
case 10: //弓
	//部位
	for (var i=0,j=1,max=bui.length;i<max;i++,j++){
		//近接
		var wkKeizoku = 10,wk_ken = this.c_betu.value;

		var wp_yakiri = Number(bui[i][1]) >= Number(bui[i][2]) ? 1 : 2;
		for (var k=0,l=1;k<2;k++,l++) {
			var motionP = isNaN(motion[k]) ? motion[k].split("|") : [motion[k]];
			var nd = 0,zd = 0;
			
			//計算
			for (var m=0,maxm=motionP.length;m<maxm;m++) {
				if (wk_ken === "9") { //爆撃
					ndWK = !MStyle ? Mf(2 * def / 10) : Mf(10 * def / 10);
					zdWK = 0;
					if (ndWK < 1) ndWK = 1; //最低ダメージ保障
				} else {
					//(攻撃×切れ味倍率×斬り方)×モーション×補正×肉質×クリティカル(1.25,0.75)
					var ndWK = Mf(AttPow * motionP[m] * 100 * bui[i][wp_yakiri] * cl / 100000000); //通常
					var ndNC = Mf(AttPow * motionP[m] * 100 * bui[i][wp_yakiri] * 100 / 100000000); //通常クリなし
					if (ndWK < 1) ndWK = 1; //最低ダメージ保障
					if (ndNC < 1) ndNC = 1; //最低ダメージ保障
					//(攻撃属性×切れ味倍率)×肉質(属性は半分)
					var zdWK = Mf(AttZoku * bui[i][buiZoku] * wkKeizoku / 2 / 1000); //属性

					if (this.c_gou[0].checked) { //合計表示
						ndWK = Mf((ndWK + zdWK) * def / 100);
						if (ndWK < 1) ndWK = 1; //最低ダメージ保障

						if (this.c_cri[2].checked) { //会心平均
							ndNC = Mf((ndNC + zdWK) * def / 100);
							if (ndNC < 1) ndNC = 1; //最低ダメージ保障
							ndWK = Mr(((ndWK * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10); //平均(10倍)
						}
						zdWK = 0;
					} else { //分離表示
						ndWK = Mf(ndWK * def / 100);
						zdWK = Mf(zdWK * def / 100);
						if (ndWK + zdWK < 1) ndWK = 1; //最低ダメージ保障

						if (this.c_cri[2].checked) { //会心平均
							ndNC = Mf(ndNC * def / 100); //通常クリなし
							if (ndNC + zdWK < 1) ndNC = 1; //最低ダメージ保障
							ndWK = Mr(((ndWK * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10); //平均(10倍)
						}
					}
				}
				nd += ndWK;
				zd += zdWK;
			}

			if (this.c_cri[2].checked) nd /= 10; //会心平均の表示前処理
			var wkHtml = this.c_gou[0].checked ? nd : nd + (zd < 0 ? "":"+") + zd;
			//弾かれ値
			var kick = wk_ken === "9" ? 100 : bui[i][wp_yakiri] * sharp[this.c_sharp.value] * zan * hosei / 10000000;
			//弾かれ・会心モーション
			if (kick <= KickP[0] && !MStyle) {this["d" + j + l].innerHTML = "<span style='color:gray'>" + wkHtml + "</span>";}
			else if (kick >= KickP[2] || (MStyle && k === 0)) {this["d" + j + l].innerHTML = "<span style='color:blue'>" + wkHtml + "</span>";}
			else if (kick >= KickP[1] && !MStyle) {this["d" + j + l].innerHTML = "<span style='color:green'>" + wkHtml + "</span>";}
			else {this["d" + j + l].innerHTML = wkHtml;}
		}
		//モーション(威力減衰)
		for (var k=3,l=4,maxk=motion.length;k<maxk;k++,l++) {
			if (this.c_betu.value === "9") { //爆撃ビン
				this["d" + j + l].innerHTML = Mf(yaZoku * (MStyle === 2 && this.c_tama.selectedIndex >= 4 ? 5 : 1) *def / 100) * tamaP.length;
			} else {
				var nd = 0,zd = 0;
				for (var t=0,m=tamaP.length;t<m;t++) {
					//計算 攻撃×モーション(減衰)×補正×肉質×弓×溜め×クリティカル(1.25,0.75)
					var ndWK = Mf(AttPow * tamaP[t] / 100 * tameP / 100 * motion[k] / 10 * hosei * bui[i][wp_type] * cl / 1000000);
					var ndNC = Mf(AttPow * tamaP[t] / 100 * tameP / 100 * motion[k] / 10 * hosei * bui[i][wp_type] * 100 / 1000000); //通常クリなし
					if (ndWK < 1) ndWK = 1; //最低ダメージ保障
					if (ndNC < 1) ndNC = 1; //最低ダメージ保障
					if (MStyle === 2 && this.c_tama.selectedIndex >= 4) ndWK *=5,ndNC *=5; //嵐オーラアロー
					var zdWK = Mf(AttZoku * bui[i][buiZoku] * tamePZoku / 1000000);
					
					if (this.c_gou[0].checked) { //合計表示
						ndWK = Mf((ndWK + zdWK) * def / 100 * dt_hosei / 10);
						if (ndWK <= 0) ndWK = 1; //最低ダメージ保障

						if (this.c_cri[2].checked) { //会心平均
							ndNC = Mf((ndNC + zdWK) * def / 100 * dt_hosei / 10);
							if (ndNC <= 0) ndNC = 1; //最低ダメージ保障
							ndWK = Mr(((ndWK * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10); //平均(10倍)
						}
						zdWK = 0;
					} else { //分離表示
						ndWK = Mf(ndWK * def / 100 * dt_hosei / 10);
						zdWK = Mf(zdWK * def / 100 * dt_hosei / 10);
						if (ndWK + zdWK < 1) ndWK = 1; //最低ダメージ保障

						if (this.c_cri[2].checked) { //会心平均
							ndNC = Mf(ndNC * def / 100 * dt_hosei / 10); //通常クリなし
							if (ndNC + zdWK < 1) ndNC = 1; //最低ダメージ保障
							ndWK = Mr(((ndWK * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10); //通常平均(10倍)
						}
					}
					nd += ndWK;
					zd += zdWK;
				}
				if (this.c_cri[2].checked) nd /= 10; //会心平均の表示前処理
				if (this.c_gou[0].checked) { //合計表示
					this["d" + j + l].innerHTML = nd;
				} else { //分離表示
					this["d" + j + l].innerHTML = nd + (zd < 0 ? "":"+") + zd;
				}
			}
		}
	}
	break;
}
}
//------------------------------------シリーズリスト表示----------
,Disp_Sozai : function (){
//素材
var sozaiHtml = function (data) { //スキルシミュのcpy
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
	//素材合計 スキルシミュのcpy
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
				if (wkK && wkK !== "なし" && wkK !== "or") toku = wkK.replace("<br>","") + "<br>";
			}
		}
	}
	for (var i = 0,cnt = 0,SumMax = sozai_Sum.length; i < SumMax; sozai_Sum[i] = sozai_Sum[i++].join(""));
	//cpyend
	return ["<td>" + z + "z</td>","<td class=rep>" + LVup + "</td>","<td class=sozai>" + toku + sozaiHtml(sozai_Sum.join(" ")) + "</td>"];
	}
var sozaiD = equip["sozai"][this.s_wp.value + wpid].split(",");
var sozai = [],LVup = "",z = 0,ck = false,Txtz = "",Txtsozai = "",TxtLVup = "",wk = [],bukiwk = "",refID = "",namebk = ","+this.s_wp.value + wpid+",";
//第一ルート
do {
	z += sozaiD[sZeny]-0;
	if (sozaiD[sCre]) {
		wk = sozaiRowHtml(z,LVup,sozai,sozaiD[sCre]);
		Txtz += wk[0],TxtLVup += wk[1],Txtsozai += wk[2];
		if (!sozaiD[sRep]) break;
	}
	sozai[sozai.length] = sozaiD[sRep];
	//第二ルートがあるか
	if (sozaiD[sRef2]) ck = true;
	//強化元探し
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
		LVup = bukiwk[aName] + " →<br>" + LVup;
		sozaiD = equip["sozai"][refID].split(",");
	}
} while (sozai);

//第二ルート
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
	//強化元探し
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
		LVup = bukiwk[aName] + " →<br>" + LVup;
		sozaiD = equip["sozai"][refID].split(",");
	}
} while (sozai);
}
this.m_WBody.innerHTML = "<table border=1 cellspacing=0 cellpadding=2>\n" +
						"<tr><td>名称</td><td>" + this.s_wp.options[this.s_wp.selectedIndex].text + "</td></tr>\n" +
						"<tr><td>費用</td>" + Txtz + "</tr>\n" +
						"<tr><td>強化</td>" + TxtLVup +"</tr>\n" +
						"<tr><td>素材</td>" + Txtsozai + "</tr>\n";
						"</table>";

this.m_W.style.display = "block";
}
}//グローバル
global.init();
global.init=null;
return global;
})();

//------------------------------------前処理----------
DamageForm.setItem(itemS);
itemS=null;

(function(){
//------------------------------------イベント貼り付け----------
//イベントセット
var addEvent = function (elm, type, func) {
	//追加
	elm./*@cc_on @if (true) attachEvent ('on' + @else@*/ addEventListener (/*@end@*/ type,func,false);
	//アンロードで削除
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
		case "地の型" : t.value = "天の型";break;
		case "天の型" : t.value = "嵐の型";break;
		case "嵐の型" : t.value = "地の型";break;
		case "地" : t.value = "天";break;
		case "天" : t.value = "嵐";break;
		case "嵐" : t.value = "地";break;
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
		case "地の型" : t.value = "天の型";break;
		case "天の型" : t.value = "嵐の型";break;
		case "嵐の型" : t.value = "地の型";break;
		case "地" : t.value = "天";break;
		case "天" : t.value = "嵐";break;
		case "嵐" : t.value = "地";break;
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
			if (typeof document.documentElement.style.maxHeight === "undefined") { //IE6か
				var w = document.getElementsByTagName("SELECT");
				for (var i=11,m=w.length; i<m; w[i++].style.visibility = "hidden");
			}
			DamageForm.Disp_Sozai();
			break;
		}
	case "m_WClose_B":
		if (typeof document.documentElement.style.maxHeight === "undefined") { //IE6か
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
		if (DamageForm.gou_enemi != gou_enemi_bk && DamageForm.c_tr.value >= 30 && DamageForm.d_spec.innerHTML.lastIndexOf("天嵐武器") > 0) { //天嵐用
			if (!DamageForm.c_tamaUp.disabled) {
				DamageForm.Cng_Tama(); //遠距離の場合距離減衰が変わる
			} else {
				DamageForm.Cng_wp(); //近接ならゲージが変わる
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
		//遠距離はHCで会心が変わる
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
		if (DamageForm.gou_enemi && DamageForm.d_spec.innerHTML.lastIndexOf("天嵐武器") > 0) { //天嵐用
			if (!DamageForm.c_tamaUp.disabled) {
				DamageForm.Cng_Tama(); //遠距離の場合距離減衰が変わる
			} else {
				DamageForm.Cng_wp(); //近接ならゲージが変わる
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
