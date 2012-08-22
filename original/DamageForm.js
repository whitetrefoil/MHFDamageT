/*@cc_on if (@_jscript_version < 9) {_d=document;eval('var document=_d');}@*/
var DamageForm = (function (){
//�Œ�
var ckFull = location.pathname.indexOf("damageT") >= 0;
var BR = ckFull ? "<br>" : "";
var ckOpera = /*@if (@_jscript_version >= 9) true @else@*/ !!window.opera || /chrome/i.test(navigator.userAgent) /*@end@*/;
var aName = 0,aAt = 1,aZoku = 2,aZokuAt = 3,aZyou = 4,aZyouAt = 5,aCri = 6,aRare = 7,aRst = 8,aSlot = 9,aDef = 10,aHR = 11,aCre = 12,aType = 13,aSpec = 14,aKick = 15,aRelo = 16,aGun = 17;
var sRef1 = 0 ,sRef2 = 1, sZeny = 2, sCre = 3, sRep = 4;
var bukiId = ["taiken","heavy","hammer","lance","katate","right","souken","tachi","horn","gunlance","yumi"];
var bukiName = ["�匕","�w�r�B�{�E�K��","�n���}�[","�����X","�Ў茕","���C�g�{�E�K��","�o��","����","��J","�K�������X","�|"];
var reloadName = ["���U:�x��","���U:���x��","���U:����","���U:��⑬��","���U:����"];
var kickName = ["����:�ő�",0,"����:��","����:��⏬","����:��"];
var Onpu = [0,"<span class=r>��</span>","<span class=y>��</span>","<span class=w>��</span>","<span class=b>��</span>","<span class=g>��</span>","<span class=p>��</span>","<span class=a>��</span>"]
var zokuName = ["","�΁F","���F","���F","���F","�X�F","�ŁF","��ჁF","�����F","�����F"];
var bukiRitu = [48/*�匕*/,12/*�w���B*/,52/*�n���}�[*/,23/*�����X*/,14/*�Ў茕*/,12/*���C�g*/,14/*�o��*/,48/*����*/,52/*��J*/,23/*�K�������X*/,12/*�|*/];
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
//����
var setKensyou = function (wk,betu){
	if (wk === "0" || wk === "A1") return 0;
	switch (wpid) {
	case 0: //�匕
		if (wk.charAt(0) === "9") { //����
			return [140,160,180][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "5") { //��������
			return [50,70,90][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "8") { //�ُ팕��
			switch (wk.charAt(0)) {
			case "6": //��
				return [20,25,30][wk.charAt(1)-1];break;
			case "7": //���
				return [18,23,28][wk.charAt(1)-1];break;
			case "8": //����
				return [15,20,25][wk.charAt(1)-1];break;
			}
		}
		break;
	case 4: //�Ў茕
		if (wk.charAt(0) === "9") { //����
			return [220,260,300][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "5") { //��������
			return [35,55,75][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "8") { //�ُ팕��
			switch (wk.charAt(0)) {
			case "6": //��
				return [17,22,27][wk.charAt(1)-1];break;
			case "7": //���
				return [17,22,27][wk.charAt(1)-1];break;
			case "8": //����
				return [15,20,25][wk.charAt(1)-1];break;
			}
		}
		break;
	case 6: //�o��
		if (wk.charAt(0) === "9") { //����
			return betu ? [150,180,220][wk.charAt(1)-1] : [200,240,290][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "5") { //��������
			return [30,40,50][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "8") { //�ُ팕��
			switch (wk.charAt(0)) {
			case "6": //��
			case "7": //���
				return [5,8,10][wk.charAt(1)-1];break;
			case "8": //����
				return [1,2,3][wk.charAt(1)-1];break;
			}
		}
		break;
	case 2: //�n���}�[
	case 8: //��J
		if (wk.charAt(0) === "9") { //����
			return [120,140,160][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "5") { //��������
			return [35,55,75][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "8") { //�ُ팕��
			switch (wk.charAt(0)) {
			case "6": //��
				return [15,20,25][wk.charAt(1)-1];break;
			case "7": //���
			case "8": //����
				return [13,18,23][wk.charAt(1)-1];break;
			}
		}
		break;
	case 3: //�����X
	case 9: //�K�������X
		if (wk.charAt(0) === "9") { //����
			return [130,150,170][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "5") { //��������
			return [35,55,75][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "8") { //�ُ팕��
			switch (wk.charAt(0)) {
			case "6": //��
				return [15,20,25][wk.charAt(1)-1];break;
			case "7": //���
			case "8": //����
				return [13,18,23][wk.charAt(1)-1];break;
			}
		}
		break;
	case 7: //����
		if (wk.charAt(0) === "9") { //����
			return [140,160,180][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "5") { //��������
			return [35,55,75][wk.charAt(1)-1];
		} else if (wk.charAt(0) <= "8") { //�ُ팕��
			switch (wk.charAt(0)) {
			case "6": //��
				return [15,20,25][wk.charAt(1)-1];break;
			case "7": //���
			case "8": //����
				return [13,18,23][wk.charAt(1)-1];break;
			}
		}
		break;
	}
}

var global = {
//------------------------------------������----------
init : function(){
//�ΐ푊��
this.m_enemi = document.getElementById("m_enemi");
this.m_def = document.getElementById("m_def");
this.m_sugo = document.getElementById("m_sugo");
this.m_hc = document.getElementById("m_hc");
this.m_hc.bk = 0;
this.m_ang = document.getElementById("m_ang");
this.gou_enemi = false
//����I��
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
//������
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
//�����E�X�L��
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

//����
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
//����
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
//�q���
this.m_W = document.getElementById("m_W");
this.m_WBody = document.getElementById("m_WBody");
}
//------------------------------------�f�[�^�Z�b�g----------
,setEquip : function (name,data){
equip[name]=data;
}
,setItem : function (data){
itemS=data;
}
,setSozai : function (data){
equip["sozai"]=data;
}
//------------------------------------�X�^�C���ʕ\�L----------
,Cng_Style : function(){}
//------------------------------------�����----------
,Cng_Kobetu : function(){}
//------------------------------------�����----------
,Cng_Kobetu2 : function(){}
//------------------------------------����ؑ֎��⑫----------
,Cng_Wp_Sub : function(){}
//------------------------------------�e----------
,Cng_Tama : function(){}
//------------------------------------SR�X�L��----------
,Cng_Sr : function(){
switch (wpid) {
case 2: //�n���}�[
	if (this.c_waza.selectedIndex === 1) {
		this.c_mei.innerHTML = "���߁F";
		this.c_betu.options[1] = new Option("�u��", 1);
		this.Cng_Kobetu = function(){}
	} else {
		this.c_mei.innerHTML = "";
		this.c_betu.length = 1;
	}
	this.c_betu.style.display = this.c_mei.innerHTML ? "inline" : "none";
	break;
}
}
//------------------------------------����Z�b�g----------
,Set_Buki : function(wapon){
//this.c_srt.selectedIndex = 0;
wpid = wapon-0,this.c_mei.innerHTML = this.c_mei2.innerHTML = "",this.s_wp.length = this.c_betu.length = 1,this.c_betu2.length = 0,this.c_tane.length = 3;
this.d01.innerHTML =this.d02.innerHTML =this.d03.innerHTML =this.d04.innerHTML =this.d05.innerHTML =this.d06.innerHTML =this.d07.innerHTML =this.d08.innerHTML =this.d09.innerHTML =this.d010.innerHTML =this.d011.innerHTML = "<br>";
this.c_sinka.style.display = this.s_guns.style.display = this.s_fue.style.display = this.s_yumi_G.style.display = this.s_gun_G.style.display = "none";
this.c_fw.disabled = this.c_fw.checked = false;
this.Cng_Fw = function(){
switch (wpid) {
case 0: //�匕
case 2: //�n���}�[
case 3: //�����X
case 5: //���C�g
case 6: //�o��
case 8: //��J
case 10: //�|
	this.c_fw.disabled = true;
	break;
}
};
//�\�����ڂ�ONOFF
if (wpid === 1 || wpid === 5 || wpid === 10) { //�K���|�p
	this.gr_ken.style.display = "none";
	this.c_sharp.value = 3,this.c_kensyo.value = 0;
	this.c_tama.length = 1,this.c_tama.options[0] = new Option("---------------", "");
	this.c_ya.length = 0;
	this.gr_gun.style.display = ckFull ? "block" : "inline";
	this.c_ya.style.display = "none";
	this.c_tamaUp.disabled =this.c_guns.disabled =this.c_shoot.disabled = false;
	this.c_karyudo.options[4].style.backgroundColor = "";
} else { //���p
	this.gr_gun.style.display = "none";
	this.gr_ken.style.display = ckFull ? "block" : "inline";
	this.c_tamaUp.disabled = this.c_guns.disabled =this.c_shoot.disabled = true;
	this.c_karyudo.options[4].style.backgroundColor = "gray";
}
//�i���݂̐؂�ւ�
if (!(wpid === 1 || wpid === 5) && this.s_srt1.style.display === "none") {//���|�p
	this.s_srt1.style.display = "inline";
	this.s_tama.style.display = this.s_gunAdd.style.display = "none";
//	this.s_srt2.style.display = "none";
	this.s_srt2.options[2].text = "����";
//	this.s_srt2.style.display = "inline";
	this.c_soko.options[1].value = 15;
	if (ckFull) this.c_soko.options[1].text = this.c_soko.options[1].text.replace("|1.3�{","|1.5�{");
} else if ((wpid === 1 || wpid === 5) && this.s_srt1.style.display !== "none") {//�K���p
	this.s_srt1.style.display = "none";
	this.s_gunAdd.style.display = this.s_tama.style.display = "inline";
//	this.s_srt2.style.display = "none";
	this.s_srt2.options[2].text = "�e��";
//	this.s_srt2.style.display = "inline";
	this.c_soko.options[1].value = 13;
	if (ckFull) this.c_soko.options[1].text = this.c_soko.options[1].text.replace("|1.5�{","|1.3�{");
}
//SR�h��X�L��
if (wpid === 4 && this.c_waza.options[1].value === "120") { //�Ў�
	this.c_waza.options[1].value = "130";
	this.c_waza.options[2].value = "120";
	if (ckFull) {
		this.c_waza.options[1].text = this.c_waza.options[1].text.replace("|1.2�{","|1.3�{");
		this.c_waza.options[2].text = this.c_waza.options[2].text.replace("|1.1�{","|1.2�{");
	}
} else if (wpid !== 4 && this.c_waza.options[1].value !== "110") { //�Ў�ȊO
	this.c_waza.options[1].value = "120";
	this.c_waza.options[2].value = "110";
	if (ckFull) {
		this.c_waza.options[1].text = this.c_waza.options[1].text.replace("|1.3�{","|1.2�{");
		this.c_waza.options[2].text = this.c_waza.options[2].text.replace("|1.2�{","|1.1�{");
	}
}
//���했�̕\�L�Z�b�g
switch (wpid) {
case 0: //�匕
	this.c_mei.innerHTML = "�n���F",this.c_betu.options[1] = new Option("����", 1);
	this.Cng_Kobetu = function(){}
	wp_hosei = 100,wp_type = 1;
	this.d00.innerHTML = "����␳<br>�a100%";
	this.d01.innerHTML = "�c�a��<br>48";
	this.d02.innerHTML = "̨Ư���`<br>28�42";
	this.d03.innerHTML = "�Ȃ�����<br>36";
	this.d04.innerHTML = "�a��グ<br>46";
	this.d05.innerHTML = "̨Ư��BC<br>60";
	this.Cng_Style = function(){
		if (this.c_Style.value.charAt(0) === "�n"){
			this.d06.innerHTML = "���a��P<br>65x110%";
			this.d07.innerHTML = "���a��Q<br>80x120%";
			this.d08.innerHTML = "���a��R<br>110x130%";
			this.d09.innerHTML = this.d010.innerHTML = this.d011.innerHTML = "<br>";
			motion = ["48","28|42","36","46","60","65","80","110"];
			this.Cls_Table();
		} else if (this.c_Style.value.charAt(0) === "�V"){
			this.d06.innerHTML = "�K�[�h��<br>36";
			this.d07.innerHTML = "�K�[�h:1<br>85";
			this.d08.innerHTML = "�K�[�h:2<br>124";
			this.d09.innerHTML = "�K�[�h:3<br>170";
			motion = ["48","28|42","36","46","60","36","85","124","170"];
		} else {
			this.d06.innerHTML = "�K�[�h:1<br>85";
			this.d07.innerHTML = "�K�[�h:3<br>170";
			this.d08.innerHTML = "���a�グ�P<br>70";
			this.d09.innerHTML = "���a�グ�Q<br>85x110%";
			this.d010.innerHTML = "���a�グ�R<br>120x120%";
			this.d011.innerHTML = "���a�グ�S<br>150x130%";
			motion = ["48","28|42","36","46","60","85","170","70","85","120","150"];
		}
	}
	break;
case 1: //�w�r�B�{�E�K��
	this.c_mei.innerHTML = "��ܰB�F",this.c_betu.options[1] = new Option("����", 1),this.c_betu.selectedIndex = 1;
	this.Cng_Kobetu = function(){}
	this.c_betu2.length = 0,this.c_betu2.options[0] = new Option("�O", 95),this.c_betu2.options[1] = new Option("�P", 115),this.c_betu2.options[2] = new Option("�Q", 130),this.c_betu2.options[3] = new Option("�R", 150);
	this.Cng_Kobetu2 = function(){}
case 5: //���C�g�{�E�K��
	this.s_gun_G.style.display = "inline";
	wp_hosei = 100,wp_type = 3;
	this.d00.innerHTML = "����␳<br>�e100%";
	//�����I�ԓx�Ɏ��s
	this.Cng_Wp_Sub = function(Txt){
		if (wpid === 1) this.c_mei.innerHTML = Txt[aType] === "G" || Txt[aType] === "N" || Txt[aType] === "T" ? "��ިB�F" : "��ܰB�F";
		//�e
		var w = this.c_tama,Ma = Math.abs,t = this.s_tama.value-0;
		w.length = 0;
		w.options[0] = new Option("LV1�ʏ�e:" + Ma(Txt[aGun]) + "��",0);
		w.options[1] = new Option("LV2�ʏ�e:" + Ma(Txt[aGun+1]) + "��",1);
		w.options[2] = new Option("LV3�ʏ�e:" + Ma(Txt[aGun+2]) + "��",2);
		w.options[3] = new Option("LV1�ђʒe:" + Ma(Txt[aGun+3]) + "��",3);
		w.options[4] = new Option("LV2�ђʒe:" + Ma(Txt[aGun+4]) + "��",4);
		w.options[5] = new Option("LV3�ђʒe:" + Ma(Txt[aGun+5]) + "��",5);
		w.options[6] = new Option("LV1�U�e:" + Ma(Txt[aGun+6]) + "��",9);
		w.options[7] = new Option("LV2�U�e:" + Ma(Txt[aGun+7]) + "��",9);
		w.options[8] = new Option("LV3�U�e:" + Ma(Txt[aGun+8]) + "��",9);
		w.options[9] = new Option("LV1�O�b�֒e:" + Ma(Txt[aGun+9]) + "��",6);
		w.options[10] = new Option("LV2�O�b�֒e:" + Ma(Txt[aGun+10]) + "��",7);
		w.options[11] = new Option("LV3�O�b�֒e:" + Ma(Txt[aGun+11]) + "��",8);
		w.options[12] = new Option("LV1�g�U�e:" + Ma(Txt[aGun+12]) + "��",10);
		w.options[13] = new Option("LV2�g�U�e:" + Ma(Txt[aGun+13]) + "��",10);
		w.options[14] = new Option("LV3�g�U�e:" + Ma(Txt[aGun+14]) + "��",10);
		for (var i=0;i<15;i++) if (Txt[aGun+i] < 0) w.options[i].style.backgroundColor = "lightpink";
		
		if (Txt[aGun+17] !=="0") w.options[w.length] = new Option("LV1�Œe:" + Txt[aGun+17] + "��",12),w.selectedIndex = t === 17 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+18] !=="0") w.options[w.length] = new Option("LV2�Œe:" + Txt[aGun+18] + "��",12),w.selectedIndex = t === 18 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+19] !=="0") w.options[w.length] = new Option("LV1��გe:" + Txt[aGun+19] + "��",12),w.selectedIndex = t === 19 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+20] !=="0") w.options[w.length] = new Option("LV2��გe:" + Txt[aGun+20] + "��",12),w.selectedIndex = t === 20 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+21] !=="0") w.options[w.length] = new Option("LV1�����e:" + Txt[aGun+21] + "��",12),w.selectedIndex = t === 21 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+22] !=="0") w.options[w.length] = new Option("LV2�����e:" + Txt[aGun+22] + "��",12),w.selectedIndex = t === 22 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+23] !=="0") w.options[w.length] = new Option("�Ή��e:" + Txt[aGun+23] + "��",11),w.selectedIndex = t === 23 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+24] !=="0") w.options[w.length] = new Option("����e:" + Txt[aGun+24] + "��",11),w.selectedIndex = t === 24 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+25] !=="0") w.options[w.length] = new Option("�d���e:" + Txt[aGun+25] + "��",11),w.selectedIndex = t === 25 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+26] !=="0") w.options[w.length] = new Option("�X���e:" + Txt[aGun+26] + "��",11),w.selectedIndex = t === 26 ? w.length-1:w.selectedIndex;
		if (Txt[aGun+27] !=="0") w.options[w.length] = new Option("�ŗ��e:" + Txt[aGun+27] + "��",11),w.selectedIndex = t === 27 ? w.length-1:w.selectedIndex;
		
		if (wpid === 1 && (Txt[aType] === "G" || Txt[aType] === "T")) w.options[w.length] = new Option("�r�M�e",20);
		
		if (t && t < 17) w.selectedIndex = t;
		this.Cng_Tama();
	}
	//�e��I�ԓx�Ɏ��s
	this.Cng_Tama = function(){
		if (!this.c_tama.value) return;
		var w = this.d_spec.innerHTML;
		switch (this.c_tama.value) {
		case "9": //�U�e
			this.d01.innerHTML = "LV1�U�e<br>(5+��5)x3��";
			this.d02.innerHTML = "LV2�U�e<br>(5+��4)x4��";
			this.d03.innerHTML = "LV3�U�e<br>(5+��4)x5��";
			this.d04.innerHTML =this.d05.innerHTML =this.d06.innerHTML =this.d07.innerHTML =this.d08.innerHTML =this.d09.innerHTML = "<br>";
			tamaP = ["5|2|5","5|2|4","5|2|4"];
			//���ˑΉ��`�F�b�N
			if (w.indexOf("LV1�U�e") >= 0) this.d01.innerHTML = "<span style='color:blue'>"+this.d01.innerHTML+"<br>3������</span>",tamaP[0] = "2.5|2|2.5";
			break;
		case "10": //�g�U�e
			this.d01.innerHTML = "LV1�g�U�e<br>6" + BR + "([32+��2]x3)";
			this.d02.innerHTML = "LV2�g�U�e<br>6" + BR + "([32+��2]x4)";
			this.d03.innerHTML = "LV3�g�U�e<br>6" + BR + "([32+��2]x5)";
			this.d04.innerHTML = "<br>" + BR + "(�q�g�U)";
			this.d05.innerHTML =this.d06.innerHTML =this.d07.innerHTML =this.d08.innerHTML =this.d09.innerHTML = "<br>";
			tamaP = ["6|1|2|32","6|1|2|32","6|1|2|32"];
			break;
		case "11": //�����e
			if (wpid === 1) { //�w�r�B
				this.d01.innerHTML = "�Ή��e<br><span class=fss>����{��</span>x0.5";
				this.d02.innerHTML = "����e<br><span class=fss>����{��</span>x0.25" + BR + "x3��";
				this.d03.innerHTML = "�d���e<br><span class=fss>����{��</span>x0.27" + BR + "x3��";
				this.d04.innerHTML = "�X���e<br><span class=fss>����{��</span>x0.25" + BR + "x3��";
				this.d05.innerHTML = "�ŗ��e<br>���F90" + BR + "x6��";
				this.d06.innerHTML =this.d07.innerHTML =this.d08.innerHTML =this.d09.innerHTML = "<br>";
				tamaP = ["1|1|50","1|2|25","1|3|27","1|5|25","1|4|90"];
			} else { //���C�g
				this.d01.innerHTML = "�Ή��e<br><span class=fss>����{��</span>x0.4";
				this.d02.innerHTML = "����e<br><span class=fss>����{��</span>x0.13" + BR + "x3��";
				this.d03.innerHTML = "�d���e<br><span class=fss>����{��</span>x0.2" + BR + "x3��";
				this.d04.innerHTML = "�X���e<br><span class=fss>����{��</span>x0.13" + BR + "x3��";
				this.d05.innerHTML = "�ŗ��e<br>���F75" + BR + "x6��";
				this.d06.innerHTML =this.d07.innerHTML =this.d08.innerHTML =this.d09.innerHTML = "<br>";
				tamaP = ["1|1|40","1|2|13","1|3|20","1|5|13","1|4|75"];
				//���ˑΉ��`�F�b�N
				if (w.indexOf("�Ή��e") >= 0) this.d01.innerHTML = "<span style='color:blue'>"+this.d01.innerHTML+"<br>5������</span>",tamaP[0] = "0.5|1|20";
				if (w.indexOf("����e") >= 0) this.d02.innerHTML = "<span style='color:blue'>"+this.d02.innerHTML+"<br>3������</span>",tamaP[1] = "0.5|2|6.5";
				if (w.indexOf("�d���e") >= 0) this.d03.innerHTML = "<span style='color:blue'>"+this.d03.innerHTML+"<br>3������</span>",tamaP[2] = "0.5|3|10";
				if (w.indexOf("�X���e") >= 0) this.d04.innerHTML = "<span style='color:blue'>"+this.d04.innerHTML+"<br>3������</span>",tamaP[3] = "0.5|5|6.5";
			}
			break;
		case "12": //��Ԉُ�e
			this.d01.innerHTML = "LV1�Œe<br>10+��25";
			this.d02.innerHTML = "LV2�Œe<br>15+��50";
			this.d03.innerHTML = "LV1��გe<br>10+���25";
			this.d04.innerHTML = "LV2��გe<br>15+���50";
			this.d05.innerHTML = "LV1�����e<br>0+����25";
			this.d06.innerHTML = "LV2�����e<br>0+����50";
			this.d07.innerHTML =this.d08.innerHTML =this.d09.innerHTML = "<br>";
			yaZoku = [25,50,25,50,25,50];
			tamaP = ["10|","15|","10|","15|","0|","0|"];
			break;
		case "20": //�r�M�e
			this.d01.innerHTML = "�r�M�e<br>22+��10";
			this.d02.innerHTML = "�Q�[�W<br>100";
			this.d03.innerHTML =this.d04.innerHTML =this.d05.innerHTML =this.d06.innerHTML =this.d07.innerHTML =this.d08.innerHTML =this.d09.innerHTML = "<br>";
			tamaP = ["0|1|10|22"];
			break;
		default:
			if (wpid === 1) {
				this.d01.innerHTML = ["LV1�ʏ�e<br>6","LV2�ʏ�e<br>12","LV3�ʏ�e<br>11xn��","LV1�ђʒe<br>10x3��","LV2�ђʒe<br>9x4��","LV3�ђʒe<br>7x6��","LV1�O�b<br>3:�C��10<br>(30+��40)","LV2�O�b<br>3:�C��10<br>(40+��60)","LV3�O�b<br>3:�C��10<br>(50+��80)"][this.c_tama.value];
			} else {
				this.d01.innerHTML = ["LV1�ʏ�e<br>6","LV2�ʏ�e<br>12","LV3�ʏ�e<br>11xn��","LV1�ђʒe<br>10x3��","LV2�ђʒe<br>9x4��","LV3�ђʒe<br>7x6��","LV1�O�b<br>3:�C��5<br>(30+��40)","LV2�O�b<br>3:�C��5<br>(40+��60)","LV3�O�b<br>3:�C��5<br>(50+��80)"][this.c_tama.value];
			}
			tamaP = [6,12,11,10,9,7,"3|1|40|30","3|1|60|40","3|1|80|50"];
			//���ˑΉ�
			switch (this.c_tama.value) {
			case "0":
				if (w.indexOf("LV1�ʏ�e") >= 0) this.d01.innerHTML = "<span style='color:blue'>"+this.d01.innerHTML+"<br>5������</span>",tamaP[0] = 3;
				break;
			case "1":
				if (w.indexOf("LV2�ʏ�e") >= 0) this.d01.innerHTML = "<span style='color:blue'>"+this.d01.innerHTML+"<br>5������</span>",tamaP[1] = 6;
				break;
			case "3":
				if (w.indexOf("LV1�ђʒe") >= 0) this.d01.innerHTML = "<span style='color:blue'>"+this.d01.innerHTML+"<br>3������</span>",tamaP[3] = 5;
				break;
			case "6":
				if (w.indexOf("LV1�O�b�֒e") >= 0) this.d01.innerHTML = "<span style='color:blue'>"+this.d01.innerHTML+"<br>2������</span>",tamaP[6] = "1.5|1|40|30";
				break;
			}
			var addGunCri=0;
			if (this.gou_enemi && this.c_tr.value >= 30 && this.d_spec.innerHTML.lastIndexOf("�V������") > 0) addGunCri += 3; //����łQ���ʈȏ�œV������
			
			if (wpid === 1){
				if (this.c_fw.checked) addGunCri += 1; //�w���B�Ńt�B�[�`���[
				//����
				switch (this.c_tama.value) {
				case "0":
				case "1":
				case "2": //�ʏ�e
					motion = [17+addGunCri,17+addGunCri,17+addGunCri,17+addGunCri,10,8,5];
					this.d02.innerHTML = "�ߋ���<br>"+motion[0]/10+"�{";
					this.d03.innerHTML = "�������P<br>"+motion[1]/10+"�{";
					this.d04.innerHTML = "�������Q<br>"+motion[2]/10+"�{";
					this.d05.innerHTML = "�������P<br>"+motion[3]/10+"�{";
					this.d06.innerHTML = "�������Q<br>1.0�{";
					this.d07.innerHTML = "�������R<br>0.8�{";
					this.d08.innerHTML = "�������S<br>0.5�{";
					this.d09.innerHTML = "<br>";
					break;
				case "3":
				case "4":
				case "5": //�ђʒe
					motion = [10,17+addGunCri,17+addGunCri,17+addGunCri,17+addGunCri,10,8,5];
					this.d02.innerHTML = "�ߋ���<br>1.0�{";
					this.d03.innerHTML = "�������P<br>"+motion[1]/10+"�{";
					this.d04.innerHTML = "�������Q<br>"+motion[2]/10+"�{";
					this.d05.innerHTML = "�������P<br>"+motion[3]/10+"�{";
					this.d06.innerHTML = "�������Q<br>"+motion[4]/10+"�{";
					this.d07.innerHTML = "�������R<br>1.0�{";
					this.d08.innerHTML = "�������S<br>0.8�{";
					this.d09.innerHTML = "�������T<br>0.5�{";
					break;
				case "6":
				case "7":
				case "8": //�S�b�֒e
					motion = [10,17+addGunCri,17+addGunCri,10,8,5,5];
					this.d02.innerHTML = "�ߋ���<br>1.0�{";
					this.d03.innerHTML = "�������P<br>"+motion[1]/10+"�{";
					this.d04.innerHTML = "�������Q<br>"+motion[2]/10+"�{";
					this.d05.innerHTML = "�������P<br>1.0�{";
					this.d06.innerHTML = "�������Q<br>0.8�{";
					this.d07.innerHTML = "�������R<br>0.5�{";
					this.d08.innerHTML = "�������S<br>0.5�{";
					this.d09.innerHTML = "(���j)";
					break;
				}
			} else if (this.c_Style.value.charAt(0) === "�n"){
				//����
				switch (this.c_tama.value) {
				case "0":
				case "1":
				case "2": //�ʏ�e
					motion = [15+addGunCri,15+addGunCri,10,8,5,5];
					this.d02.innerHTML = "�ߋ���<br>"+motion[0]/10+"�{";
					this.d03.innerHTML = "�������P<br>"+motion[1]/10+"�{";
					this.d04.innerHTML = "�������Q<br>1.0�{";
					this.d05.innerHTML = "�������P<br>0.8�{";
					this.d06.innerHTML = "�������Q<br>0.5�{";
					this.d07.innerHTML = "�������R<br>0.5�{";
					this.d08.innerHTML = "�������S<br>0�{";
					this.d09.innerHTML = "<br>";
					break;
				case "3":
				case "4":
				case "5": //�ђʒe
					motion = [10,15+addGunCri,15+addGunCri,15+addGunCri,10,8,5];
					this.d02.innerHTML = "�ߋ���<br>1.0�{";
					this.d03.innerHTML = "�������P<br>"+motion[1]/10+"�{";
					this.d04.innerHTML = "�������Q<br>"+motion[2]/10+"�{";
					this.d05.innerHTML = "�������P<br>"+motion[3]/10+"�{";
					this.d06.innerHTML = "�������Q<br>1.0�{";
					this.d07.innerHTML = "�������R<br>0.8�{";
					this.d08.innerHTML = "�������S<br>0.5�{";
					this.d09.innerHTML = "<br>";
					break;
				case "6":
				case "7":
				case "8": //�S�b�֒e
					motion = [10,15+addGunCri,10,8,8,5,5];
					this.d02.innerHTML = "�ߋ���<br>1.0�{";
					this.d03.innerHTML = "�������P<br>"+motion[1]/10+"�{";
					this.d04.innerHTML = "�������Q<br>1.0�{";
					this.d05.innerHTML = "�������P<br>0.8�{";
					this.d06.innerHTML = "�������Q<br>0.8�{";
					this.d07.innerHTML = "�������R<br>0.5�{";
					this.d08.innerHTML = "�������S<br>0.5�{";
					this.d09.innerHTML = "(���j)";
					break;
				}
			} else if (this.c_Style.value.charAt(0) === "�V"){
				//����
				switch (this.c_tama.value) {
				case "0":
				case "1":
				case "2": //�ʏ�e
					motion = [16+addGunCri,10,8,5,5,5];
					this.d02.innerHTML = "�ߋ���<br>"+motion[0]/10+"�{";
					this.d03.innerHTML = "�������P<br>1.0�{";
					this.d04.innerHTML = "�������Q<br>0.8�{";
					this.d05.innerHTML = "�������P<br>0.5�{";
					this.d06.innerHTML = "�������Q<br>0.5�{";
					this.d07.innerHTML = "�������R<br>0.5�{";
					this.d08.innerHTML = "�������S<br>0�{";
					this.d09.innerHTML = "<br>";
					break;
				case "3":
				case "4":
				case "5": //�ђʒe
					motion = [10,16+addGunCri,16+addGunCri,10,8,5,5];
					this.d02.innerHTML = "�ߋ���<br>1.0�{";
					this.d03.innerHTML = "�������P<br>"+motion[1]/10+"�{";
					this.d04.innerHTML = "�������Q<br>"+motion[2]/10+"�{";
					this.d05.innerHTML = "�������P<br>1.0�{";
					this.d06.innerHTML = "�������Q<br>0.8�{";
					this.d07.innerHTML = "�������R<br>0.5�{";
					this.d08.innerHTML = "�������S<br>0.5�{";
					this.d09.innerHTML = "<br>";
					break;
				case "6":
				case "7":
				case "8": //�S�b�֒e
					motion = [16+addGunCri,10,8,8,5,5,5];
					this.d02.innerHTML = "�ߋ���<br>"+motion[0]/10+"�{";
					this.d03.innerHTML = "�������P<br>1.0�{";
					this.d04.innerHTML = "�������Q<br>0.8�{";
					this.d05.innerHTML = "�������P<br>0.8�{";
					this.d06.innerHTML = "�������Q<br>0.5�{";
					this.d07.innerHTML = "�������R<br>0.5�{";
					this.d08.innerHTML = "�������S<br>0.5�{";
					this.d09.innerHTML = "(���j)";
					break;
				}
			} else {
				//����
				switch (this.c_tama.value) {
				case "0":
				case "1":
				case "2": //�ʏ�e
					motion = [20+addGunCri,20+addGunCri,20+addGunCri,15];
					this.d02.innerHTML = "�ߋ���<br>"+motion[0]/10+"�{";
					this.d03.innerHTML = "�������P<br>"+motion[1]/10+"�{";
					this.d04.innerHTML = "�������Q<br>"+motion[2]/10+"�{";
					this.d05.innerHTML = "�������P<br>1.5�{";
					this.d06.innerHTML = "�������Q<br>0�{";
					this.d07.innerHTML = "�������R<br>0�{";
					this.d08.innerHTML = "�������S<br>0�{";
					this.d09.innerHTML = "<br>";
					break;
				case "3":
				case "4":
				case "5": //�ђʒe
					motion = [20+addGunCri,20+addGunCri,20+addGunCri,15];
					this.d02.innerHTML = "�ߋ���<br>"+motion[0]/10+"�{";
					this.d03.innerHTML = "�������P<br>"+motion[1]/10+"�{";
					this.d04.innerHTML = "�������Q<br>"+motion[2]/10+"�{";
					this.d05.innerHTML = "�������P<br>1.5�{";
					this.d06.innerHTML = "�������Q<br>0�{";
					this.d07.innerHTML = "�������R<br>0�{";
					this.d08.innerHTML = "�������S<br>0�{";
					this.d09.innerHTML = "<br>";
					break;
				case "6":
				case "7":
				case "8": //�S�b�֒e
					motion = [20+addGunCri,20+addGunCri,15];
					this.d02.innerHTML = "�ߋ���<br>"+motion[0]/10+"�{";
					this.d03.innerHTML = "�������P<br>"+motion[1]/10+"�{";
					this.d04.innerHTML = "�������Q<br>1.5�{";
					this.d05.innerHTML = "�������P<br>0�{";
					this.d06.innerHTML = "�������Q<br>0�{";
					this.d07.innerHTML = "�������R<br>0�{";
					this.d08.innerHTML = "�������S<br>0�{";
					this.d09.innerHTML = "(���j)";
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
			this.c_mei2.innerHTML = this.c_Style.value.charAt(0) === "��" ? "���߁F" : "";
			this.c_betu2.style.display = this.c_mei2.innerHTML ? "inline" : "none";
		} else {
			this.Cng_Tama();
			this["d010"].innerHTML = this.c_Style.value.charAt(0) === "��" ? "����<br>����" : "<br>";
		}
	}
	break;
case 2: //�n���}�[
	wp_hosei = 100,wp_type = 2;
	this.d00.innerHTML = "����␳<br>��100%<br>(�C��l)";
	this.d01.innerHTML = "�ł����낵<br>20�50" + BR + "(15�20)";
	this.d02.innerHTML = "�U�蔲��<br>20�70" + BR + "(15�10)";
	this.d03.innerHTML = "�c�U��P<br>52(15)";
	this.d04.innerHTML = "�c�U��Q<br>20(15)";
	this.d05.innerHTML = "�U��グ<br>100(48)";
	this.d06.innerHTML = "�^���P<br>45(15)";
	this.d07.innerHTML = "�^���Q<br>45�35" + BR + "(15�15)";
	this.d08.innerHTML = "�^���R<br>20�76" + BR + "(15�48)";
	this.Cng_Style = function(){
		if (this.c_Style.value.charAt(0) === "�n"){
			this.d09.innerHTML = "��]�J�n<br>20(0)";
			this.d010.innerHTML = "��]��<br>10x5��(0)";
			this.d011.innerHTML = "��]�I��<br>40(0)";
			motion = ["20|50","20|70","52","20","100","45","45|35","20|76","20","10","40"];
		} else if (this.c_Style.value.charAt(0) === "�V"){
			this.d09.innerHTML = "���ŊJ�n<br>50(10)";
			this.d010.innerHTML = "���Œ�<br>30xn��(10)";
			this.d011.innerHTML = "<br>";
			motion = ["20|50","20|70","52","20","100","45","45|35","20|76","50","30"];
			this.Cls_Table();
		} else {
			this.d09.innerHTML = "JP�����<br>35�100" + BR + "(15�60)";
			this.d010.innerHTML = "���ŊJ�n<br>50(10)";
			this.d011.innerHTML = "���Œ�<br>30xn��(10)";
			motion = ["20|50","20|70","52","20","100","45","45|35","20|76","35|100","50","30"];
		}
	}
	this.Cng_Sr();
	break;
case 3: //�����X
	wp_hosei = 100,wp_type = 1; //�����X�͕��ʂňႤ�̂Ō�Ŕ���
	this.d00.innerHTML = "�a100%<br>��72%";
	this.Cng_Style = function(){
		if (this.c_Style.value.charAt(0) === "�n"){
			this.d01.innerHTML = "���i�˂P<br>23";
			this.d02.innerHTML = "���i�˂Q<br>23";
			this.d03.innerHTML = "���i�˂R<br>30";
			this.d04.innerHTML = "����˂P<br>28";
			this.d05.innerHTML = "����˂Q<br>28";
			this.d06.innerHTML = "����˂R<br>30";
			this.d07.innerHTML = "�ːi<br>20xn��";
			this.d08.innerHTML = "����<br>20x1.125�{";
			this.d09.innerHTML = "̨Ư����<br>40";
			this.d010.innerHTML = "�K�[�h��<br>20";
			this.d011.innerHTML = "�ӂ�΂�<br>32";
			motion = ["23","23","30","28","28","30","20","20","40","20","32"];
		} else if (this.c_Style.value.charAt(0) === "�V"){
			this.d01.innerHTML = "���i��1-<br>23";
			this.d02.innerHTML = "-���i��3<br>23";
			this.d03.innerHTML = "���i�˂S<br>30";
			this.d04.innerHTML = "�����1<br>28";
			this.d05.innerHTML = "-�����3<br>28";
			this.d06.innerHTML = "����˂S<br>30";
			this.d07.innerHTML = "�V���1-<br>29";
			this.d08.innerHTML = "-�V���3<br>29";
			this.d09.innerHTML = "�V��˂S<br>32";
			this.d010.innerHTML = "�K�[�h��<br>20";
			this.d011.innerHTML = "�ӂ�΂�<br>32";
			motion = ["23","23","30","28","28","30","29","29","32","20","32"];
		} else {
			this.d01.innerHTML = "���i��1-<br>23";
			this.d02.innerHTML = "-���i��3<br>23";
			this.d03.innerHTML = "���i�˂S<br>30";
			this.d04.innerHTML = "�����1<br>28";
			this.d05.innerHTML = "-�����3<br>28";
			this.d06.innerHTML = "����˂S<br>30";
			this.d07.innerHTML = "�V���1-<br>29";
			this.d08.innerHTML = "-�V���3<br>29";
			this.d09.innerHTML = "�V��˂S<br>32";
			this.d010.innerHTML = "�`���[�W<br>1�20" + BR + "(5�10)";
			this.d011.innerHTML = "�ӂ�΂�<br>32";
			motion = ["23","23","30","28","28","30","29","29","32","+1|+20","32"];
		}
	}
	break;
case 4: //�Ў茕
	wp_hosei = 125,wp_type = 1;
	this.Cng_Style = function(){
		this.d00.innerHTML = "����␳<br>�a125%";
		this.d01.innerHTML = "JP�a��<br>16";
		this.d02.innerHTML = "�ײ�ިݸ�<br>16";
		if (this.c_Style.value.charAt(0) === "�n"){
			this.d03.innerHTML = "�a�艺��<br>13";
			this.d04.innerHTML = "���a��<br>11";
			this.d05.innerHTML = "���ƌ�<br>8(5)�12";
			this.d06.innerHTML = "��]�a��<br>24";
			this.d07.innerHTML = "�a��グ<br>14";
			this.d08.innerHTML = "����ޱ���<br>10�14" + BR + "(7�8)";
			this.d09.innerHTML = "�K�[�h�a��<br>14";
			this.d010.innerHTML = "<br>";
			motion = ["16","16","13","11","+8|12","24","14","+10|+14","14"];
			this.Cls_Table();
		} else if (this.c_Style.value.charAt(0) === "�V"){
			this.d03.innerHTML = "�a�艺��<br>13";
			this.d04.innerHTML = "���a��<br>11";
			this.d05.innerHTML = "���ƌ�<br>8(5)+12";
			this.d06.innerHTML = "JP2�i�a<br>18�14";
			this.d07.innerHTML = "�a��グ<br>14";
			this.d08.innerHTML = "����ޱ���<br>10�14<br>(7+8)";
			this.d09.innerHTML = "�K�[�h�a��<br>14";
			this.d010.innerHTML = "<br>";
			motion = ["16","16","13","11","+8|12","18|14","14","+10|+14","14"];
			this.Cls_Table();
		} else {
			this.d03.innerHTML = "�˂�1<br>11";
			this.d04.innerHTML = "�˂�2<br>8";
			this.d05.innerHTML = "�˂�3<br>8";
			this.d06.innerHTML = "�㉺�a��<br>10�12";
			this.d07.innerHTML = "JP2�i�a<br>18�14";
			this.d08.innerHTML = "�a��グ<br>14";
			this.d09.innerHTML = "����ޱ���<br>10�14<br>(7+8)";
			this.d010.innerHTML = "�K�[�h�a��<br>14";
			motion = ["16","16","11","8","8","10|12","18|14","14","+10|+14","14"];
		}
	}
	break;
case 6: //�o��
	wp_hosei = 100,wp_type = 1;
	this.c_mei.innerHTML = "�S�l�F",this.c_betu.options[1] = new Option("����", 1);
	this.c_mei2.innerHTML = "�n�ŁF",this.c_betu2.length = 0,this.c_betu2.options[0] = new Option("�Ȃ�", 100);
	this.c_betu2.options[1] = new Option("�P��", 105),this.c_betu2.options[2] = new Option("�Q��", 110),this.c_betu2.options[3] = new Option("�R��", 115),this.c_betu2.options[4] = new Option("�S��", 120);
	this.d00.innerHTML = "����␳<br>�a100%";
	this.Cng_Kobetu = function(){this.Cng_Style();}
	this.Cng_Kobetu2 = function(){}
	this.Cng_Style = function(){
		if (!this.c_betu.selectedIndex) { //�ʏ펞
			this.d02.innerHTML = "�a�艺�P<br>18";
			this.d03.innerHTML = "�a�艺�Q<br>10�8";
			this.d04.innerHTML = "�a�艺�R<br>6�12�18";
			this.d05.innerHTML = "����]�a<br>15�10�6";
			this.d06.innerHTML = "�E��]�a<br>15�10�6";
			this.d07.innerHTML = "�a��グ<br>19";
			this.d08.innerHTML =this.d09.innerHTML =this.d010.innerHTML =this.d011.innerHTML = "<br>";
			if (this.c_Style.value.charAt(0) === "��"){
				this.d01.innerHTML = "�i�o�a��<br>12�16";
				motion = ["12|16","18","10|8","6|12|18","15|10|6","15|10|6","19"];
			} else {
				this.d01.innerHTML = "�a�蕥��<br>12�6";
				motion = ["12|6","18","10|8","6|12|18","15|10|6","15|10|6","19"];
			}
			this.Cls_Table();
		} else { //������
			this.d01.innerHTML = "�a�蕥��<br>16�8";
			this.d02.innerHTML = "�a�艺�P<br>24";
			this.d03.innerHTML = "�a�艺�Q<br>13�10";
			this.d04.innerHTML = "�a�艺�R<br>8�16�24";
			this.d05.innerHTML = "����]�a<br>(20�13�8)" + BR + "x2��";
			this.d06.innerHTML = "�E��]�a<br>(20�13�8)" + BR + "x2��";
			this.d07.innerHTML = "�a��グ<br>25";
			if (this.c_Style.value.charAt(0) === "�n"){
				this.d08.innerHTML = "�����J�n<br>33";
				this.d09.innerHTML = "������<br>8x8��";
				this.d010.innerHTML = "�����I��<br>40";
				this.d011.innerHTML = "����<br>�SHIT";
				motion = ["16|8","24","13|10","8|16|24","20|13|8","20|13|8","25","33","8","40","33|8|8|8|8|8|8|8|8|40"];
			} else if (this.c_Style.value.charAt(0) === "�V"){
				this.d08.innerHTML = "�R�A�˂�<br>24x3";
				this.d09.innerHTML = "��]�a��<br>21�27�47";
				this.d010.innerHTML = this.d011.innerHTML = "<br>";
				motion = ["16|8","24","13|10","8|16|24","20|13|8","20|13|8","25","24","21|27|47"];
				this.Cls_Table();
			} else {
				this.d01.innerHTML = "�i�o�a��<br>16�21";
				this.d08.innerHTML = "�R�A�˂�<br>24x3";
				this.d09.innerHTML = "��]�a��<br>21�27�47";
				motion = ["16|21","24","13|10","8|16|24","20|13|8","20|13|8","25","24","21|27|47"];
			}
		}
	}
	break;
case 7: //����
	wp_hosei = 100,wp_type = 1;
	this.c_mei.innerHTML = "�C�n�F",this.c_betu.options[1] = new Option("����", 1);
	this.c_mei2.innerHTML = "�n���F",this.c_betu2.length = 0,this.c_betu2.options[0] = new Option("�Ȃ�", 0),this.c_betu2.options[1] = new Option("����", 1);
	this.d00.innerHTML = "����␳<br>�a100%";
	this.d01.innerHTML = "���ݍ���<br>33";
	this.d02.innerHTML = "�c�a��<br>28";
	this.d03.innerHTML = "�a�艺��<br>30";
	this.d04.innerHTML = "�˂�<br>20";
	this.d05.innerHTML = "�a��グ<br>23";
	this.d06.innerHTML = "�C�n�a��<br>16";
	this.d07.innerHTML = "�C�n�a�P<br>35";
	this.d08.innerHTML = "�C�n�a�Q<br>36";
	this.d09.innerHTML = "�C�n�a�R<br>18�18�40";
	this.d010.innerHTML = "�ï�ߎa<br>24";
	this.Cng_Kobetu = function(){
		if (!this.c_betu.selectedIndex) this.c_tane.value = 0; //�C�n�Ȃ���� �����͋�������

		if (this.c_Style.value.charAt(0) === "��") {
			if (this.c_betu.selectedIndex) {
				this.d04.innerHTML = "�C�n�юh��<br>24�12x5�30";
				motion[3] = "24|12|12|12|12|12|30";
			} else {
				this.d04.innerHTML = "�юh��<br>24�12x2";
				motion[3] = "24|12|12";
			}
		}
	}
	this.Cng_Kobetu2 = function(){}
	this.Cng_Fw = function(){
		if (this.c_fw.checked) {
			this.c_tane.options[3] = ckFull ? new Option("�t�B�[�`���[�@�b+40", 40) :  new Option("F", 40);
		} else {
			this.c_tane.length = 3; //�t�B�[�`���[����
		}
	}
	this.Cng_Style = function(){
		if (this.c_Style.value.charAt(0) === "�n"){
			this.d03.innerHTML = "�a�艺��<br>30";
			this.d04.innerHTML = "�˂�<br>20";
			motion = ["33","28","30","20","23","16","35","36","18|18|40","24"];
		} else if (this.c_Style.value.charAt(0) === "�V"){
			this.d03.innerHTML = "�����a��<br>28";
			this.d04.innerHTML = "�˂�<br>20";
			motion = ["33","28","28","20","23","16","35","36","18|18|40","24"];
		} else {
			this.d03.innerHTML = "�����a��<br>28";
			motion = ["33","28","28","","23","16","35","36","18|18|40","24"];
			this.Cng_Kobetu();
		}
	}
	this.Cng_Kobetu();
	break;
case 8: //��J
	this.s_fue.style.display = "inline";
	wp_hosei = 100,wp_type = 2;
	this.d00.innerHTML = "����␳<br>��100%<br>(�C��l)";
	this.Cng_Style = function(){
		if (this.c_Style.value.charAt(0) === "�n"){
			this.d01.innerHTML = "�@����<br>15�48(5�20)";
			this.d02.innerHTML = "�Ԃ��<br>31(15)";
			this.d03.innerHTML = "������<br>12(0)";
			this.d04.innerHTML = "���t�J�n<br>22(20)";
			this.d05.innerHTML = "���t�P<br>43(20)";
			this.d06.innerHTML = "���t�Q<br>36(20)";
			this.d07.innerHTML = "���t�R<br>41(20)";
			this.d08.innerHTML = "���t�I��<br>26(20)";
			this.d09.innerHTML = "�������t";
			this.d010.innerHTML = this.d011.innerHTML = "<br>";
			motion =["15|48","31","12","22","43","36","41","26"];
			this.Cls_Table();
		} else if (this.c_Style.value.charAt(0) === "�V"){
			this.d01.innerHTML = "�U��グ<br>26(18)";
			this.d02.innerHTML = "�˂��グ<br>30x3(5)";
			this.d03.innerHTML = "�R��グ<br>20(10)";
			this.d04.innerHTML = "�Ԃ��<br>31(15)";
			this.d05.innerHTML = "������<br>12(0)";
			this.d06.innerHTML = "���t�J�n<br>22(20)";
			this.d07.innerHTML = "���t�P<br>43(20)";
			this.d08.innerHTML = "���t�Q<br>36(20)";
			this.d09.innerHTML = "���t�R<br>41(20)";
			this.d010.innerHTML = "���t�I��<br>26(20)";
			this.d011.innerHTML = "�������t";
			motion = ["25","29","20","31","12","22","43","36","41","26"];
		} else {
			this.d01.innerHTML = "�U��グ<br>26(18)";
			this.d02.innerHTML = "�˂��グ<br>30x3(5)";
			this.d03.innerHTML = "�R��グ<br>20(10)";
			this.d04.innerHTML = "�Ԃ��<br>31(15)";
			this.d05.innerHTML = "������<br>12(0)";
			this.d06.innerHTML = "���t�J�n<br>22(20)";
			this.d07.innerHTML = "���t�P<br>43(20)";
			this.d08.innerHTML = "���t�Q<br>36(20)";
			this.d09.innerHTML = "���t�R<br>41(20)";
			this.d010.innerHTML = "���t�I��<br>26(20)";
			this.d011.innerHTML = "���F�ϊ�";
			motion = ["25","29","20","31","12","22","43","36","41","26"];
		}
	}
	break;
case 9: //�K�������X
	this.s_guns.style.display = "inline";
	this.c_guns.disabled = false;
	wp_hosei = 95,wp_type = 1;
	this.d00.innerHTML = "����␳<br>�a95%";
	this.d01.innerHTML = "���ݍ���<br>34";
	this.d02.innerHTML = "���ガ<br>28";
	this.d03.innerHTML = "�A���C<br>14";
	this.d04.innerHTML = "�O����1,2<br>21";
	this.d05.innerHTML = "�O���˂R<br>28";
	this.d06.innerHTML = "�a��グ<br>30";
	this.d07.innerHTML = "�����1,2<br>24";
	this.d08.innerHTML = "����˂R<br>24";
	this.d09.innerHTML = this.d010.innerHTML = this.d011.innerHTML = "<br>";
	//���했�̌�
	this.Cng_Wp_Sub = function(Txt){
		var wkGL = this.d_spec.innerHTML.indexOf("�^")-2;
		if (wkGL < 0) return;
		//�C��|����|�����l|�����C
		switch (this.d_spec.innerHTML.substring(wkGL,wkGL+8)) {
		case "�ʏ�^�C��LV1":
			this.d09.innerHTML = "�ʏ�^LV1<br>13+��40";
			tamaP = ["13|1|4|50|3"];
			break;
		case "�ʏ�^�C��LV2":
			this.d09.innerHTML = "�ʏ�^LV2<br>20+��80";
			tamaP = ["20|1|8|55|4"];
			break;
		case "�ʏ�^�C��LV3":
			this.d09.innerHTML = "�ʏ�^LV3<br>24+��80";
			tamaP = ["24|1|8|60|5"];
			break;
		case "�ʏ�^�C��LV4":
			this.d09.innerHTML = "�ʏ�^LV4<br>29+��100";
			tamaP = ["29|1|10|65|6"];
			break;
		case "�ʏ�^�C��LV5":
			this.d09.innerHTML = "�ʏ�^LV5<br>33+��120";
			tamaP = ["33|1|12|70|7"];
			break;
		case "�ʏ�^�C��LV6":
			this.d09.innerHTML = "�ʏ�^LV6<br>37+��130";
			tamaP = ["37|1|13|75|8"];
			break;
		case "���ˌ^�C��LV1":
			this.d09.innerHTML = "���ˌ^LV1<br>20+��90";
			tamaP = ["20|1|9|70|5"];
			break;
		case "���ˌ^�C��LV2":
			this.d09.innerHTML = "���ˌ^LV2<br>26+��130";
			tamaP = ["26|1|13|75|6"];
			break;
		case "���ˌ^�C��LV3":
			this.d09.innerHTML = "���ˌ^LV3<br>35+��160";
			tamaP = ["35|1|16|80|7"];
			break;
		case "���ˌ^�C��LV4":
			this.d09.innerHTML = "���ˌ^LV4<br>40+��180";
			tamaP = ["40|1|18|85|8"];
			break;
		case "���ˌ^�C��LV5":
			this.d09.innerHTML = "���ˌ^LV5<br>44+��200";
			tamaP = ["44|1|20|90|9"];
			break;
		case "���ˌ^�C��LV6":
			this.d09.innerHTML = "���ˌ^LV6<br>48+��220";
			tamaP = ["48|1|22|95|10"];
			break;
		case "�g�U�^�C��LV1":
			this.d09.innerHTML = "�g�U�^LV1<br>26+��60";
			tamaP = ["26|1|6|90|6"];
			break;
		case "�g�U�^�C��LV2":
			this.d09.innerHTML = "�g�U�^LV2<br>37+��100";
			tamaP = ["37|1|10|95|7"];
			break;
		case "�g�U�^�C��LV3":
			this.d09.innerHTML = "�g�U�^LV3<br>48+��120";
			tamaP = ["48|1|12|100|8"];
			break;
		case "�g�U�^�C��LV4":
			this.d09.innerHTML = "�g�U�^LV4<br>53+��140";
			tamaP = ["53|1|14|105|9"];
			break;
		case "�g�U�^�C��LV5":
			this.d09.innerHTML = "�g�U�^LV5<br>57+��160";
			tamaP = ["57|1|16|110|10"];
			break;
		case "�g�U�^�C��LV6":
			this.d09.innerHTML = "�g�U�^LV5<br>62+��180";
			tamaP = ["62|1|18|115|11"];
			break;
		}
		switch (this.d_spec.innerHTML.substring(wkGL+3,wkGL+8)) {
		case "�C��LV1":
			this.d010.innerHTML = "�����CLV1<br>[36+��100]" + BR + "x5��";
			this.d011.innerHTML = "�����CLV1<br>�SHit";
			tamaP[1] = "36|1|10";
			break;
		case "�C��LV2":
			this.d010.innerHTML = "�����CLV2<br>[44+��130]" + BR + "x5��";
			this.d011.innerHTML = "�����CLV2<br>�SHit";
			tamaP[1] = "44|1|13";
			break;
		case "�C��LV3":
			this.d010.innerHTML = "�����CLV3<br>[54+��150]" + BR + "x5��";
			this.d011.innerHTML = "�����CLV3<br>�SHit";
			tamaP[1] = "54|1|15";
			break;
		case "�C��LV4":
			this.d010.innerHTML = "�����CLV4<br>[60+��170]" + BR + "x5��";
			this.d011.innerHTML = "�����CLV4<br>�SHit";
			tamaP[1] = "60|1|17";
			break;
		case "�C��LV5":
			this.d010.innerHTML = "�����CLV5<br>[66+��190]" + BR + "x5��";
			this.d011.innerHTML = "�����CLV5<br>�SHit";
			tamaP[1] = "66|1|19";
			break;
		case "�C��LV6":
			this.d010.innerHTML = "�����CLV6<br>[72+��210]" + BR + "x5��";
			this.d011.innerHTML = "�����CLV6<br>�SHit";
			tamaP[1] = "72|1|21";
			break;
		}
		
		if (this.c_Style.value.charAt(0) === "�n") return;

		this.d010.innerHTML = "HBLV1<br>�a1+��" + tamaP[1].split("|")[2]+"0";
		tamaP[1] = "1|1|" + tamaP[1].split("|")[2];
		this.d011.innerHTML = "<br>";
		
		if (this.c_Style.value.charAt(0) !== "��") return;
		this.d011.innerHTML = "�@����<br>20";
		
		this.d09.innerHTML = this.d09.innerHTML.toUpperCase().split("<BR>")[0].replace("�^LV","����");
		var hou_baku = Math.floor(tamaP[0].split("|")[0] * 6 / 10); //����
		
		if (this.c_kensyo.value.charAt(0) === "9") { //����
			var hou_da = Math.floor(tamaP[0].split("|")[0] * 12 / 10);
			this.d09.innerHTML += "<BR>" + hou_da + "�" + hou_baku;
			tamaP[0] = hou_baku + "|-|+" + hou_da;
		} else {
			var hou_mei = this.g_zoku.innerHTML.toUpperCase().split("<BR>")[0].split("�F");
			var hou_type = hou_mei[0] ? "�ΐ������X".indexOf(hou_mei[0]) + 1 : 0;
			if (hou_type) { //����
				var hou_da = Math.floor(hou_mei[1] * tamaP[0].split("|")[3] / 100);
				this.d09.innerHTML += "<BR>" + hou_mei[0] + hou_da + "�" + hou_baku;
				tamaP[0] = hou_baku + "|" + hou_type + "|" + hou_da;
			} else { //��
				var hou_da = Math.floor(tamaP[0].split("|")[0] * 9 / 10);
				this.d09.innerHTML += "<BR>" + "��" + hou_da + "(" + tamaP[0].split("|")[4] + ")�" + hou_baku;
				tamaP[0] = hou_baku + "|-|+" + hou_da;
			}
		}
	}
	this.Cng_Style = function(){
		motion = ["34","28","14","21","28","30","24","24"];
		if (this.c_Style.value.charAt(0) === "�n"){
			this.c_mei2.innerHTML = "";
		} else {
			this.c_mei2.innerHTML = "�g�a�F����";
			if (this.c_Style.value.charAt(0) === "�V") {
				this.Cls_Table();
			} else {
				this.d011.innerHTML = "�@����<br>20";
				motion[8] = 20;
			}
		}
	}
	break;
case 10: //�|
	this.s_yumi_G.style.display = this.c_ya.style.display = "inline";
	this.c_guns.disabled = this.c_shoot.disabled = true;
	this.c_mei.innerHTML = "�r���F";
	this.c_betu.selectedIndex = 0;
	this.d00.innerHTML = "����␳<br>�e100%";
	motion = [10,18,0];
	wp_hosei = 100,wp_type = 3;
	//���했�̌�
	this.Cng_Wp_Sub = function(Txt){
		var w = this.c_tama;
		w.length = 0;
		//��
		for (var i = 0,yumiP = Txt[aKick].split("/"),m = yumiP.length; i < m; i++){
			switch (yumiP[i]){
			case "�A��1":
				w.options[w.length] = new Option((i+1) + ":�A��LV1|12","�A��LV112");
				break;
			case "�A��2":
				w.options[w.length] = new Option((i+1) + ":�A��LV2|12+5","�A��LV212|5");
				break;
			case "�A��3":
				w.options[w.length] = new Option((i+1) + ":�A��LV3|12+5+4","�A��LV312|5|4");
				break;
			case "�A��4":
				w.options[w.length] = new Option((i+1) + ":�A��LV4|12+5+4+2","�A��LV412|5|4|2");
				break;
			case "�g�U1":
				w.options[w.length] = new Option((i+1) + ":�g�ULV1|4-5-4","�g�ULV15");
				break;
			case "�g�U2":
				w.options[w.length] = new Option((i+1) + ":�g�ULV2|5-6-5","�g�ULV26");
				break;
			case "�g�U3":
				w.options[w.length] = new Option((i+1) + ":�g�ULV3|4-5-5-5-4","�g�ULV35");
				break;
			case "�g�U4":
				w.options[w.length] = new Option((i+1) + ":�g�ULV4|4-5-6-5-4","�g�ULV46");
				break;
			case "�ђ�1":
				w.options[w.length] = new Option((i+1) + ":�ђ�LV1|6x3��","�ђ�LV16");
				break;
			case "�ђ�2":
				w.options[w.length] = new Option((i+1) + ":�ђ�LV2|6x4��","�ђ�LV26");
				break;
			case "�ђ�3":
				w.options[w.length] = new Option((i+1) + ":�ђ�LV3|6x5��","�ђ�LV36");
				break;
			case "�ђ�4":
				w.options[w.length] = new Option((i+1) + ":�ђ�LV4|6x6��","�ђ�LV46");
				break;
			}
			if (!ckFull) w.options[w.length-1].text = w.options[w.length-1].text.substring(0,7); //�ȈՂ͌��J�b�g
		}
		w.selectedIndex = this.s_tame.value-1;
		if (this.c_Style.value.charAt(0) === "��"){
			w.options[w.length] = new Option("4:��� LV4|12","�I�[LV412");
			w.options[w.length] = new Option("5:��� LV5|12","�I�[LV512");
			if (!ckFull) {
				w.options[w.length-2].text = w.options[w.length-2].text.substring(0,7);
				w.options[w.length-1].text = w.options[w.length-1].text.substring(0,7);
			}
		}
		//�r��
		var w = this.c_betu;
		w.length = 1;
		if (Txt[aSpec].indexOf("��") >= 0) w.options[1] = new Option("�����r��", 1);
		w.options[w.length] = new Option("�Ńr��", 6);
		if (Txt[aSpec].indexOf("��") === -1) w.options[w.length-1].style.backgroundColor = "lightpink";
		w.options[w.length] = new Option("��Ⴣr��", 7);
		if (Txt[aSpec].indexOf("��") === -1) w.options[w.length-1].style.backgroundColor = "lightpink";
		w.options[w.length] = new Option("�����r��", 8);
		if (Txt[aSpec].indexOf("��") === -1) w.options[w.length-1].style.backgroundColor = "lightpink";
		if (Txt[aSpec].indexOf("��") >= 0) w.options[w.length] = new Option("�����r��", 9);
		if (Txt[aSpec].indexOf("��") >= 0) w.options[w.length] = new Option("�Ō��r��", 10);
		if (!ckFull) for (var i = 0,m = w.length; i < m; w.options[i].text = w.options[i++].text.replace("�r��",""));   //�ȈՂ͌��J�b�g

		this.Cng_Tama();
	}
	//�|�̌ʂ̓r��
	this.Cng_Kobetu = function(){
		//���[�V�����l��Cng_Style�ŃZ�b�g
		if (this.c_Style.value.charAt(0) === "�n"){
			this.d01.innerHTML = "�Ȃ�����<br>�a��10";
			this.d02.innerHTML = "�c�a��<br>�a��18";
		} else {
			this.d01.innerHTML = "�����|<br>�a��18x2";
			this.d02.innerHTML = "+�㏸9x3<br>+���_22";
		}
		this.d03.innerHTML = ["�^���P<br>0.4�{","�^���Q<br>1.0�{","�^���R<br>1.5�{","�^���S<br>1.5�{","��ׂS<br>1.0�{","��ׂT<br>1.125�{"][this.c_tama.selectedIndex];
		if (this.c_betu.value >= "2" && this.c_betu.value < "9") { //��Ԉُ�r��
			switch (this.c_tama.value.substring(0,2)) {
			case "�A��":
				yaZoku = [13,7,5,4][this.c_tama.value.charAt(4)-1];
				break;
			case "�g�U":
				yaZoku = [5,6,5,5][this.c_tama.value.charAt(4)-1];
				break;
			case "�ђ�":
				yaZoku = [5,4,4,4][this.c_tama.value.charAt(4)-1];
				break;
			case "�I�[":
				yaZoku = 25;
				break;
			}
			this.d01.innerHTML += "<BR>" + zokuName[this.c_betu.value].replace("�F","") + "2";
			this.d02.innerHTML += "<BR>" + zokuName[this.c_betu.value].replace("�F","") + "2";
			this.d03.innerHTML += "<BR>" + "1�{" + zokuName[this.c_betu.value].replace("�F","") + yaZoku;
		} else if (this.c_betu.value === "9") { //�����r��
			switch (this.c_tama.value.substring(0,2)) {
			case "�A��":
				yaZoku = [70,40,32,28][this.c_tama.value.charAt(4)-1]
				break;
			case "�g�U":
				yaZoku = [26,32,22,24][this.c_tama.value.charAt(4)-1]
				break;
			case "�ђ�":
				yaZoku = [28,28,28,28][this.c_tama.value.charAt(4)-1]
				break;
			case "�I�[":
				yaZoku = ""; //�ʏ�37,�Ύ���55�@�v�Z�ŃZ�b�g
				break;
			}
			this.d03.innerHTML = ["�^���P","�^���Q","�^���R","�^���S","��ׂS","��ׂT"][this.c_tama.selectedIndex] + "<br>1�{�Œ�" + yaZoku;
		} else if (this.c_betu.value === "10") { //�Ō��r��
			switch (this.c_tama.value.substring(0,2)) {
			case "�I�[":
				this.d03.innerHTML += "<BR>" + "�C��20";
				break;
			default:
				this.d03.innerHTML += "<BR>" + "1�{�C��4";
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
		if (this.gou_enemi && this.c_tr.value >= 30 && this.d_spec.innerHTML.lastIndexOf("�V������") > 0) addGunCri += 3; //����łQ���ʈȏ�œV������
		switch (this.c_tama.value.substring(0,2)) {
		case "�A��":
			motion = [motion[0],motion[1],0,10,15+addGunCri,15+addGunCri,10,8,8,5];
			this.d04.innerHTML = "�ߋ���<br>1.0�{";
			this.d05.innerHTML = "�������P<br>"+motion[4]/10+"�{";
			this.d06.innerHTML = "�������Q<br>"+motion[5]/10+"�{";
			this.d07.innerHTML = "�������P<br>1.0�{";
			this.d08.innerHTML = "�������Q<br>0.8�{";
			this.d09.innerHTML = "�������R<br>0.8�{";
			this.d010.innerHTML = "�������S<br>0.5�{";

			if (!this.c_ya.length || this.c_tama.value !== this.c_ya.options[0].value) { //�ʖ�X�g�{�b�N�X��������΃Z�b�g
				tamaP = this.c_tama.value.substring(5).split("|");
				//��Z�b�g
				this.c_ya.length = 0;
				var wkY = this.c_tama.value.substring(0,5);
				this.c_ya.length = 0,this.c_ya.style.display = "inline";
				this.c_ya.options[0] = new Option("�S����",this.c_tama.value);
				for (var i=0,j=1,m=tamaP.length;i<m;i++,j++) this.c_ya.options[j] = new Option(j+"��:"+tamaP[i],wkY+tamaP[i]);
			}
			break;
		case "�g�U":
			motion = [motion[0],motion[1],0,10,15+addGunCri,10,8,8,5];
			this.d04.innerHTML = "�ߋ���<br>1.0�{";
			this.d05.innerHTML = "�������P<br>"+motion[4]/10+"�{";
			this.d06.innerHTML = "�������Q<br>1.0�{";
			this.d07.innerHTML = "�������P<br>0.8�{";
			this.d08.innerHTML = "�������Q<br>0.8�{";
			this.d09.innerHTML = "�������R<br>0.5�{";
			this.d010.innerHTML = "�������S<br>-";

			if (!this.c_ya.length || this.c_tama.value !== this.c_ya.options[0].value) { //�ʖ�X�g�{�b�N�X��������΃Z�b�g
				tamaP = [this.c_tama.value.substring(5)];
				//��Z�b�g
				this.c_ya.length = 0;
				var wkY = this.c_tama.value.substring(0,5);
				this.c_ya.options[0] = new Option("����:"+tamaP[0],this.c_tama.value);
				var j = wkY !== "�g�ULV3" ? tamaP[0] - 1 : tamaP[0]; //�g�ULV3�ȊO��-1
				this.c_ya.options[1] = new Option("1 ��:"+j,wkY+j);
				if (wkY === "�g�ULV3" || wkY === "�g�ULV4") {
					j -= 1;
					this.c_ya.options[2] = new Option("2 ��:"+j,wkY+j);
				}
			}
			this.Cls_Table();
			break;
		case "�ђ�":
			motion = [motion[0],motion[1],0,10,15+addGunCri,15+addGunCri,15+addGunCri,10,8,5];
			this.d04.innerHTML = "�ߋ���<br>1.0�{";
			this.d05.innerHTML = "�������P<br>"+motion[4]/10+"�{";
			this.d06.innerHTML = "�������Q<br>"+motion[5]/10+"�{";
			this.d07.innerHTML = "�������P<br>"+motion[6]/10+"�{";
			this.d08.innerHTML = "�������Q<br>1.0�{";
			this.d09.innerHTML = "�������R<br>0.8�{";
			this.d010.innerHTML = "�������S<br>0.5�{";

			if (!this.c_ya.length || this.c_tama.value !== this.c_ya.options[0].value) { //�ʖ�X�g�{�b�N�X��������΃Z�b�g
				tamaP = [this.c_tama.value.substring(5)];
				//��Z�b�g
				this.c_ya.length = 0;
				this.c_ya.options[0] = new Option("1Hit:"+tamaP[0],this.c_tama.value);
			}
			break;
		case "�I�[":
			this.d04.innerHTML = "�ߋ���<br>1.0�{";
			this.d05.innerHTML = "������<br>1.5�{";
			this.d06.innerHTML = "�������P<br>1.5�{";
			this.d07.innerHTML = "�������Q<br>1.5�{";
			this.d08.innerHTML = "�������R<br>1.5�{";
			this.d09.innerHTML = "�������S<br>1.0�{";
			this.d010.innerHTML = "�������T<br>0.8�{";
			motion = [motion[0],motion[1],0,10,15,15,15,15,10,8];

			if (!this.c_ya.length || this.c_tama.value !== this.c_ya.options[0].value) { //�ʖ�X�g�{�b�N�X��������΃Z�b�g
				tamaP = [this.c_tama.value.substring(5)];
				//��Z�b�g
				this.c_ya.length = 0;
				this.c_ya.options[0] = new Option("1��:"+tamaP[0],this.c_tama.value);
			}
			break;
		}
	}
	this.Cng_Style = function(){
		if (this.c_Style.value.charAt(0) === "�n"){
			this.c_mei2.innerHTML = "";
			motion[0] = "10";
			motion[1] = "18";
			if (this.c_tama.length > 3) this.c_tama.length = 4;
		} else {
			motion[0] = "18|18";
			motion[1] = "9|9|9|22";
			if (this.c_Style.value.charAt(0) === "��"){
				this.c_mei2.innerHTML = "���Ⴊ��";
				var w = this.c_tama;
				w.options[w.length] = new Option("4:��� LV4|12","�I�[LV412");
				w.options[w.length] = new Option("5:��� LV5|12","�I�[LV512");
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

//���O�W�J
var wp = equip[bukiId[wpid]];
for(var id in wp) {
	if (typeof(wp[id]) !== "string") break;
	wp[id] = wp[id].split(",");
}
this.Set_SinkaAtt();
this.search();
this.Cls_Table();
}
//------------------------------------���팟��----------
,search : function (){
if (wpid === "") return;
this.s_wp.length = 1;
this.s_wp.options[0].text = "�|" + bukiName[wpid] + "�|";
var wkList = [],i=0,wp = equip[bukiId[wpid]],M=Math.round;
var type = this.s_srt1.value,S1 = this.s_srt2.value,S2 = (type >= "6" ? aZyouAt : aZokuAt),rare = this.s_rare.value,HR = this.s_hr.value,slot = this.s_slot.value,ck_100 = this.m_sugo.checked,ck_HC = this.m_hc.value !== "1,1",Rst = this.s_rst.value;
var Rep = ckFull ? setRep(this) : "1-1i1t2-2i2m2t3-3i3g3t4g4k5-5p";
var check_F = function(e1,e2,e3){return true},check = aSpec;
switch (wpid) {
case 1: //�w�r�B�{�E�K��
case 5: //���C�g�{�E�K��
	type = "-"; //�^�C�v�͌Œ�
	check = aGun + Number(this.s_tama.value);  //�e
	if (S1 === "2") S2 = check; //��������e���ɕύX
	var kick = this.s_kick.value,reload = this.s_reload.value,gunAdd = this.s_gunAdd.checked ? "+":"-";
	check_F = function(e1,e2,e3){return (e1 !== "0" && e1.indexOf(gunAdd) && e2 >= kick && e3 >= reload)}
	break;
case 8: //��J
	if (this.s_fue.value) var fue = this.s_fue.value,check_F = function(e1,e2,e3){return e1.lastIndexOf(fue) >= 0}
	break;
case 9: //�K�������X
	if (this.s_guns.value) var guns = this.s_guns.value,check_F = function(e1,e2,e3){return e1.lastIndexOf(guns) >= 0}
	break;
case 10: //�|
	check = aKick; //��
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
		//���r�̏ꍇ�U���͂�ύX
		if (ck_100 && Txt[aType] === "P") wAt += 10,wCri += 20;
		//HC�̏ꍇ�A�������͉�S��ύX
		if (ck_HC && (wpid === 1 || wpid === 5 || wpid === 10) && Txt[aType] === "H") wCri += 40;
		//�\�[�g�L�[
		switch (S1) {
//		case "0": //���O
//			break;
		case "1": //�U��
			w[0] = wAt * 1000 + wZk,w[3] = wAt;
			break;
		case "2": //����
			if (wZk < 0) wZk *= -1; //�K���̏ꍇ�e�̂�����
			w[0] = wZk * 1000 + wAt + (wCri ? M(wAt * 25 * wCri / 10000) : 0),w[3] = wZk;
			break;
		case "3": //��S
			w[3] = wAt + (wCri ? M(wAt * 25 * wCri / 10000) : 0),w[0] = w[3] * 1000 + wZk;
			break;
		}
	}
}
if (S1 !== "0") wkList.sort(function (a, b){return b[0]-a[0]});
else if (ckOpera) {
	var Fulltohalf = (function (){
		var han = "0123456789.,-+ABCDEFGHIJKLMNOPQRSTUVWXYZ�������������������������������������������ܦݱ������������������������������������������ܦݧ�����������������������������������������ζ�����������������������γ";
		var zen = "�O�P�Q�R�S�T�U�V�W�X�D�C�|�{�`�a�b�c�d�e�i�g�h�i�j�k�l�m�n�o�p�q�r�s�t�u�v�w�x�y�A�C�E�G�I�J�L�N�P�R�T�V�X�Z�\�^�`�c�e�g�i�j�k�l�m�n�q�t�w�z�}�~���������������������������������������������������������������ĂƂȂɂʂ˂̂͂Ђӂւق܂݂ނ߂�������������񂟃@���B���D���F���H���b�Ⴣ�ヅ�僇�������������������������Âłǂ΂тԂׂڂς҂Ղ؂ۃK�M�O�Q�S�U�W�Y�[�]�_�W�d�f�h�o�r�u�x�{�p�s�v�y�|��";
		return function (strVal) {
			for (var i=0,str = "",m=strVal.length,c = "",n=0; i<m; i++){
				c = strVal.charAt(i),n = zen.indexOf(c,0);
				str += (n >= 0) ? han.charAt(n) : "�" + c;
			}
			return str;
		}
	})();
//	for(var i=0,m=wkList.length; i<m; wkList[i][0] = Fulltohalf(wkList[i++][1][aName]));
//	wkList.sort();
	wkList.sort(function (a, b){return Fulltohalf(b[1][aName]) < Fulltohalf(a[1][aName]) ? 1 : -1})
}

var wkatp = 99999, AttypeN = (S1 === "3") ? "��S�t�{��:" : (S1 === "2") ? (wpid === 1 || wpid === 5 ) ? "�e��:" : "�����l:" : "����{��:";
for(var i = 0,c = 1,m = wkList.length; i < m; i++) {
	if (S1 !== "0" && wkatp-0 > wkList[i][3]-0) {
		var wk = this.s_wp.options[c++] = new Option("�|"+AttypeN+wkList[i][3]+"�|","");
		wk.style.backgroundColor = "aquamarine";
		wkatp = wkList[i][3];
	}
	//�Ƃ肠�����vthis.s_wp.options[c++] = new Option(wkList[i][1][aName]+(wkList[i][1][aSpec].indexOf("���[�`�F") > 0 ? "|"+wkList[i][1][aSpec].split("���[�`�F")[1].replace("</small>","") : ""),wkList[i][2]);
	this.s_wp.options[c++] = new Option(wkList[i][1][aName],wkList[i][2]);
}
}
//------------------------------------���L���͗p----------
,Nekowp_set : function(){
if (this.i_att.value === "" || this.i_att.value === "0" || this.i_zoku.value === "" || this.i_cri.value === "") alert("���������");
var Txt = equip[bukiId[wpid]][this.s_wp.value];
Txt[aAt] = Math.ceil(this.i_att.value / bukiRitu[wpid] * 10);
Txt[aZokuAt] = Math.floor(this.i_zoku.value / 10);
Txt[aCri] = this.i_cri.value;
if (wpid === 10) Txt[aKick] = this.i_ya1.value + this.i_yaLv1.value + "/" + this.i_ya2.value + this.i_yaLv2.value + "/" + this.i_ya3.value + this.i_yaLv3.value + "/" + this.i_ya4.value + this.i_yaLv4.value
}
//------------------------------------����ύX----------
,Cng_wp : function(){
if (!this.s_wp.value) return;
var Txt = equip[bukiId[wpid]][this.s_wp.value];
//���L����
if (Txt[aType] === "N") {
	this.i_zoku_disp.innerHTML = zokuName[Txt[aZoku]].charAt(0);
	this.i_yumi.style.display = wpid === 10 ? "" : "none"
	this.m_N.style.display = "";
	if (Txt[aAt] === "0") return false;
} else {
	this.m_N.style.display = "none";
}
//�\��
this.d_att.innerHTML = ~~(Txt[aAt] * bukiRitu[wpid] / 10) + (Txt[aSlot] ? "<br> [" + Txt[aSlot] + "]" : "");
var wk_zoku = "";
if (wpid === 1 || wpid === 5){
	wk_zoku = "LV5����";
} else {
	if (Txt[aZokuAt]) wk_zoku = zokuName[Txt[aZoku]] + Txt[aZokuAt] + "0"; //����
	if (Txt[aZyouAt]) wk_zoku += (wk_zoku ? "<br>" : "") + zokuName[Txt[aZyou]] + Txt[aZyouAt] + "0"; //��Ԉُ�
}
if (Txt[aDef]) wk_zoku += (wk_zoku ? "<br>" : "") + "�h��+" + Txt[aDef];

this.d_zoku.innerHTML = wk_zoku ? wk_zoku : "<br>";
this.d_cri.innerHTML = Txt[aCri];
var wk_rep = "HR:" + Txt[aHR] + " ڱ:" + Txt[aRare] + "<br>";
	switch (Txt[aCre].charAt(0)) {
	case "1": //���
		break;
	case "2": //�c
		wk_rep += "�c";
		break;
	case "3": //�l�J�t�F
		wk_rep += "�J�t�F";
		break;
	case "4": //�ۋ�
		wk_rep += "�ۋ�";
		break;
	case "5": //���T
		wk_rep += "���T";
		break;
	}
	switch (Txt[aCre].charAt(1)) {
	case "-": //
		break;
	case "i": //�C�x���g
		wk_rep += "�C�x";
		break;
	case "m": //��l��
		wk_rep += "��l��";
		break;
	case "g": //�K�`��
		wk_rep += "�K�`��";
		break;
	case "k": //�L�b�g
		wk_rep += "�L�b�g";
		break;
	case "t": //��ʓV
		wk_rep += "��ʓV";
		break;
	case "p": //�p�b�P�[�W
		wk_rep += "�p�b�P";
		break;
	}
this.d_hr.innerHTML = wk_rep;
var wk_d_spec="",wk_d_type="";
switch (Txt[aType]) {
case "":
	break;
case "G":
	wk_d_type = "<small><em>���핐��</em></small>";
	break;
case "T":
	wk_d_type = "<small><em>�V������</em></small>";
	break;
case "O":
	wk_d_type = "<small><em>�e����</em></small>";
	break;
case "H":
	wk_d_type = "<small><em>�g�b����</em></small>";
	break;
case "S":
	wk_d_type = "<small><em>�i������</em></small>";
	break;
case "N":
	wk_d_type = "<small><em>���L����</em></small>";
	break;
}
switch (wpid) {
case 1: //�w�r�B�{�E�K��
case 5: //���C�g�{�E�K��
	//���U
	//����
	wk_d_spec = reloadName[Txt[aRelo]] + " " + kickName[Txt[aKick]] + wk_d_type;
	if (Txt[aSpec] && wpid === 5) {
		wk_d_spec += (Txt[aType] === "G" || Txt[aType] === "N" || Txt[aType] === "T" ? "<br>������:" : "<br>����:") + Txt[aSpec].split("S")[0];
	}
	break;
case 10: //�|
	wk_d_spec = Txt[aSpec].split("S")[0] + wk_d_type + "<br>" + Txt[aKick];
	break;
case 8: //��J
	wk_d_spec = "<ul>" + Txt[aSpec].split("^")[0].replace(/([roygbwp])(\d+)/g,"<li class=$1 style='width:$2px'>").replace("|","</ul><ul style=\"float:left\">") + "</ul>";
	if (this.m_hc.value !== "1,1" && Txt[aType] === "H") wk_d_spec = wk_d_spec.replace(/class\=w/g,"class=p").replace(/class\=b/g,"class=w").replace(/class\=g/g,"class=b").replace(/class\=y/g,"class=g").replace(/class\=o/g,"class=y").replace(/class\=r/g,"class=o"); //HC�N�G�X�g
	var wkTxt = Txt[aSpec].split("^")[1];
	wk_d_spec += "<a class=f href='../buki/fue.htm?"+wkTxt.substring(0,3)+"' target=_blank>"+Onpu[wkTxt.charAt(0)]+Onpu[wkTxt.charAt(1)]+Onpu[wkTxt.charAt(2)]+"</a>" + wk_d_type;
	break;
default:
	wk_d_spec = "<ul>" + Txt[aSpec].split("^")[0].replace(/([roygbwp])(\d+)/g,"<li class=$1 style='width:$2px'>").replace("|","</ul><ul style=\"float:left\">") + "</ul>";
	if ((this.m_hc.value !== "1,1" && Txt[aType] === "H") || (this.gou_enemi && this.c_tr.value >= 30 && Txt[aType] === "T")) wk_d_spec = wk_d_spec.replace(/class\=p/g,"class=s").replace(/class\=w/g,"class=p").replace(/class\=b/g,"class=w").replace(/class\=g/g,"class=b").replace(/class\=y/g,"class=g").replace(/class\=o/g,"class=y").replace(/class\=r/g,"class=o"); //HC�N�G�X�gor�V������

	if (Txt[aSpec].lastIndexOf("^") >= 0) {
		var wkTxt = Txt[aSpec].split("^")[1].split("S")[0];
		wk_d_spec += "<small>" + wkTxt + "</small>";
	}
	wk_d_spec += wk_d_type;
	break;
}
this.d_spec.innerHTML = wk_d_spec;

//�i������
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
case 1: //�w�r�B�{�E�K��
case 5: //���C�g�{�E�K��
//case 9: //�K�������X �K���X�͌v�Z�ŌĂяo�����ɕύX
case 10: //�|
	this.Cng_Wp_Sub(Txt);
	break;
}
}
//------------------------------------�����X�^�[�ύX----------
,Cng_Mons : function(){
if (!this.m_enemi.value) return;
var wk = this.m_enemi.value.split("|");
//�S�̖h�䗦
var bk_i = this.m_def.selectedIndex,bk_v = this.m_def.value,bk_t = this.m_def.options[bk_i].text;
this.m_def.length = 1;
for (var i = 0,w = wk[1].split("I"),m = w.length-1; i < m ; this.m_def.options[i+1] = new Option(w[i].replace(",",":"), w[i++].split(",")[1]));
if (this.m_def.length !== 1 && this.m_def.length-1 >= bk_i && bk_v === this.m_def.options[bk_i].value && bk_t === this.m_def.options[bk_i].text) this.m_def.selectedIndex = bk_i;
//�{��
this.m_ang.value = (wk[2] === "0" || wk[2] === "1.00") ? 1 : wk[2];
//HC
bk_i = this.m_hc.selectedIndex,bk_v = this.m_hc.value,bk_t = this.m_hc.options[bk_i].text;
this.m_hc.length = 1;
for (var i = 0,w = wk[3].split("I"),m = w.length-1; i < m ; this.m_hc.options[i+1] = new Option(w[i].split(",")[0], w[i].split(",")[1] + "," + w[i++].split(",")[2]));
this.m_hc.disabled = this.m_hc.length === 1;
if (this.m_hc.length !== 1 && this.m_hc.length-1 >= bk_i && bk_v === this.m_hc.options[bk_i].value && bk_t === this.m_hc.options[bk_i].text) this.m_hc.selectedIndex = bk_i;

//���ʐݒ�(��r�ł̂�)
if (!ckFull) {
	if (this.c_buimei.length !== 0) {
		bk_i = this.c_buimei.selectedIndex,bk_t = this.c_buimei.options[bk_i].text;
	} else {
		bk_i = 0;
	}
	this.c_buimei.length = 0
}
//���ʐݒ�
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
this.gou_enemi = this.m_enemi.options[this.m_enemi.selectedIndex].text.lastIndexOf("����") > 0
}
//------------------------------------�i��LV�ύX----------
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
//------------------------------------�t���[���P���畡��----------
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

//�|�̌�BOX�͕���ˑ��Ȃ̂Ńp�X
if (wpid !== 10) this.c_betu.value = w.c_betu.value;

if (this.c_betu.style.display !=="none") this.Cng_Kobetu();
if (this.c_betu2.style.display !=="none") this.Cng_Kobetu2();
this.calc();
}
//------------------------------------�e�[�u��������----------
,Cls_Table : function(){
for (var j=1;j<12;j++) {
	this["d1" + j].innerHTML = "<br>";
	if (ckFull) this["d2" + j].innerHTML =this["d3" + j].innerHTML =this["d4" + j].innerHTML =this["d5" + j].innerHTML =this["d6" + j].innerHTML =this["d7" + j].innerHTML = "<br>";
}
if (!ckFull) this.d00.innerHTML = "<br>";
}
//------------------------------------�v�Z----------
,calc : function(){
if (!this.s_wp.value) return;
//����
var Txt = equip[bukiId[wpid]][this.s_wp.value];
//�Q�[�W
var sharp = [500,750,1000,1125,1250,1400,1500,1600];
var sharpZoku = [2500,5000,7500,10000,10625,11250,11500,12000];
var sharpCl = [0,0,0,0,5,10,10,10][this.c_sharp.value];

var Mr = Math.round,Mf = Math.floor,Ma = Math.abs;
var MStyle = this.c_Style.value.charAt(0) === "�n" ? 0 : this.c_Style.value.charAt(0) === "�V" ? 1 : 2;
var KickP = this.c_sharp.value <= 4 ? [23,45,100] : [16,31,69.9];
//�a���
if (this.c_sharp.value <= 2) {
	this.c_kiri.disabled = false;
	var zan = this.c_kiri.value;
} else {
	this.c_kiri.disabled = true;
	this.c_kiri.value = 100;
	var zan = 100;
}
//��b
var cAt = Number(Txt[aAt]),cCri = Number(Txt[aCri]),cZoku = Number(Txt[aZoku]),cZokuAt = Number(Txt[aZokuAt]),cZyou = Number(Txt[aZyou]),cZyouAt = Number(Txt[aZyouAt]);
//�i������
if (Txt[aType] === "S") {
	var w = this.c_sinka.value.split(".");
	cAt = Number(w[0]),cZokuAt = Number(w[1]);
	//��ʕ\��
	this.d_att.innerHTML = ~~(cAt * bukiRitu[wpid] / 10);
	if (cZokuAt) this.d_zoku.innerHTML = zokuName[cZoku] + cZokuAt + "0"
	
	if (wpid === 9) { //�K�������X��
		if (this.c_sinka.selectedIndex < 6) {
			var i = 1;
		} else if (this.c_sinka.selectedIndex < 15) {
			var i = 2;
		} else if (this.c_sinka.selectedIndex < 35) {
			var i = 3;
		} else if (this.c_sinka.selectedIndex < 65) {
			var i = 4;
		} else if ((Txt[aName].lastIndexOf("�W�R") > 0 || Txt[aName].lastIndexOf("���") > 0 || Txt[aName].lastIndexOf("���R") > 0) && this.c_sinka.selectedIndex < 75) {
			var i = 5;
		} else if (!(Txt[aName].lastIndexOf("�W�R") > 0 || Txt[aName].lastIndexOf("���") > 0 || Txt[aName].lastIndexOf("���R") > 0) && this.c_sinka.selectedIndex < 85) {
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
var izyouUP = this.c_izyou.checked ? 1125 : 1000; //��Ԉُ�
var zokuDUP =  this.c_fueZK.checked ? 11 : 10; //��������

//var motion = motion,,wp_type = this.wp_type,tamaP = tamaP;
var hosei = wp_hosei,at_hosei = 100,dt_hosei = 100;

//�~�b�V����
var BairituMax = 800,BairituAdd = 0;
if (this.c_mission.value !== "0") {
	for (var i=0;i<this.c_mission.value-0;i++) {
		switch (mission[i]) {
		case 1: //����{��UP
			BairituAdd++;
			break;
		case 2: //����{�����UP
			BairituMax += 5;
			break;
		}
	}
}

//���̐ݒ�E�����l�ݒ�
switch (wpid) {
case 0: //�匕
	if (this.c_betu.selectedIndex && this.c_kiri.value === "100") zan = 105; //����
	break;
case 1: //�w�r�B�{�E�K��
	if (this.c_betu.selectedIndex) cAt += Txt[aType] === "G" || Txt[aType] === "N" || Txt[aType] === "T" ? 40 : 20;
case 5: //���C�g�{�E�K��
	zan = 100;
	if (this.c_tamaUp.checked) { //�e����
		switch (this.c_tama.value) {
		case "0":
		case "1":
		case "2": //�ʏ�e
		case "3":
		case "4":
		case "5": //�ђʒe
			hosei = 110;break;
		case "9": //�U�e
			hosei = 130;break;
		}
	}
	if (this.c_tama.value === "12") { //��Ԉُ�e
		for (var i=0;i<6;i++) this["d0"+(i+1)].innerHTML = this["d0"+(i+1)].innerHTML.substring(0,this["d0"+(i+1)].innerHTML.length-2) + ~~(yaZoku[i] * izyouUP / 1000 * (wpid === 5 && MStyle === 2 ? 13 : 10) /10);
	}
	var soku_hosei = (this.d01.innerHTML+this.d02.innerHTML+this.d03.innerHTML+this.d04.innerHTML).indexOf("����") >=0 ? 10 : 1;
	break;
case 6: //�o��
	at_hosei = this.c_betu2.value; //�n�ł�
	break;
case 7: //����
	if (this.c_betu2.selectedIndex && this.c_kiri.value === "100") zan = 105; //����
	if (this.c_betu.selectedIndex) { //�C�n���
		if (this.c_tane.value === "0") this.c_tane.value = 10; //�����Ŏ�g�p
		if (this.c_fw.checked) this.c_tane.value = 40; //�t�B�[�`���[��
		if (this.c_waza.selectedIndex === 1) {//SR�Z
			at_hosei = 1125/10*1.1;
		} else {
			at_hosei = 1125/10;
		}
	}
	break;
case 9: //�K�������X
	if (MStyle) {//�V��
		//�q�[�g�u���[�h���́A�Q�[�W�ȉ��̏ꍇ�A�P�����N�t�o����
		sharp = [500,1000,1125,1250,1400,1500,1600,1600];
		sharpZoku = [2500,7500,10000,10625,11250,11500,12000,12000];
	}
	break;
case 10: //�|
	var tameP = [40,100,150,150,100,112.5][this.c_tama.selectedIndex];
	var tamePZoku = [5000,7500,10000,11250,10000,11000][this.c_tama.selectedIndex];
	zan = 100;
	wp_type = 3;
	if (Txt[aType] === "G" || Txt[aType] === "N" || Txt[aType] === "T") izyouUP = izyouUP * 15 / 10; //����͏�Ԉُ�1.5�{
	if (this.c_tamaUp.checked) { //�e����
		switch (this.c_tama.value.substring(0,2)) {
		case "�A��":
		case "�ђ�":
			hosei = 110;break;
		case "�g�U":
			hosei = 130;break;
		}
	}
	if (MStyle === 2) { //���̂��Ⴊ�݌���
		if (this.c_tama.selectedIndex >= 4) { //�I�[���A���[
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
	case "1": //�����r��
		zan = (Txt[aType] === "G" || Txt[aType] === "N" || Txt[aType] === "T") && this.c_waza.selectedIndex === 1 ? 170 : Txt[aType] === "G" || Txt[aType] === "N" || Txt[aType] === "T" || this.c_waza.selectedIndex === 1 ? 160 : 150;break; //�ߐڂ�1.5�{�@�|�S���������1.6�{�@������ŋ|�S��1.7�{
		if (this.gou_enemi && this.c_tr.value >= 30 && Txt[aType] === "T") zan = 170; //����łQ���ʈȏ�œV��
	case "9": //�����r��
		//�I�[���A���[���̃r��
		if (MStyle === 2 && this.c_tama.selectedIndex >= 4) {
			yaZoku = this.c_soko.selectedIndex === 1 ? 55 : 37;
		}
		break;
	case "10": //�Ō��r��
		wp_type = 2;break; //�Ō��Ōv�Z
	default: //��Ԉُ�r��
		cZoku = cZokuAt = 0;
		var wk = this.d03.innerHTML.toUpperCase().split("<BR>");
		wk[2] = "1�{" + zokuName[this.c_betu.value].replace("�F","") + ~~(yaZoku * (this.c_tama.selectedIndex === 0 ? 5 : this.c_tama.selectedIndex === 5 ? 11 : 10) * izyouUP * dt_hosei / 100000);
		this.d03.innerHTML = wk.join("<br>");
		break;
	}
}
//�\���U���E����{��
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
      + (this.c_kizuna.checked ? 5 : 0) + (this.m_enemi.options[this.m_enemi.selectedIndex].text.lastIndexOf("����") > 0 && (Txt[aType] === "G" || Txt[aType] === "T") ? this.c_tr.value-0 : 0);

if (cAt > BairituMax) {
	cAt = BairituMax;
	this.g_attB.style.color = "red";
} else {
	this.g_attB.style.color = "black";
}
this.g_att.innerHTML = Mf(cAt * bukiRitu[wpid] / 10);
this.g_attB.innerHTML = "(" + cAt+ ")";
//����
var wk_ken = this.c_kensyo.value.charAt(0);
if (wk_ken !== "0") {
	if (wk_ken === "9") { //����
		hosei = setKensyou(this.c_kensyo.value,this.c_betu.selectedIndex);
	} else if (wk_ken <= "5") { //��������
		cZoku = Number(wk_ken);
		cZokuAt = setKensyou(this.c_kensyo.value,this.c_betu.selectedIndex);
	} else if (wk_ken <= "8") { //�ُ팕��
		cZyou = Number(wk_ken);
		cZyouAt = setKensyou(this.c_kensyo.value,this.c_betu.selectedIndex);
	}
}
//�\������
cZokuAt = Mf(Mf(Mf(cZokuAt * this.c_zkUp.value / 10) * this.c_zkUp2.value / 10) * (this.c_honki.value === "1" ? 11 : 10) / 10);
cZyouAt = Mf(cZyouAt * izyouUP / 1000);
var wk = "";
if (cZokuAt) wk = zokuName[cZoku] + cZokuAt + "0"; //����
if (cZyouAt) wk += (wk ? "<br>" : "") + zokuName[cZyou] + cZyouAt + "0";//��Ԉُ�
this.g_zoku.innerHTML = wk ? wk : "<br>";
//�\����S
cCri += Number(this.c_criUp.value) + Number(this.c_sr.value); //�B�l
if (!(wpid === 1 || wpid === 5 || wpid === 10) && cCri > 0) cCri += sharpCl; //�؂ꖡ�{�[�i�X
if (this.m_sugo.checked && Txt[aType] === "P") cCri += 20; //���r�N�G�X�g
if (this.m_hc.value !== "1,1" && (wpid === 1 || wpid === 5 || wpid === 10) && Txt[aType] === "H") cCri += 40; //HC�N�G�X�g
if (this.c_garou.value >= 1) cCri += 50; //��T
if (this.c_honki.value === "2") cCri += 30; //�{�C����
if (wpid === 9) { //�K�������X��
	this.Cng_Wp_Sub(); //�K���X���������ŕ���ʌĂяo��
	if (MStyle) cCri = 100; //�V�X�^�C���ł�100%
}
if (!(wpid === 1 || wpid === 5 || wpid === 10) && this.c_sharp.value <= 2) cCri = 0; //�K���ȊO�͉��ȉ����Ɩ���
if (cCri > 100) {
	cCri = 100;
	this.g_cri.style.color = "red";
} else {
	this.g_cri.style.color = "black";
}
this.g_cri.innerHTML = cCri;
//�U�����U���l
var AttPow = (wpid === 1 || wpid === 5 || wpid === 10) ? cAt * zan / 100 : cAt * sharp[this.c_sharp.value] * zan * (this.c_kensyo.value === "A1" ? 12 : 10) / 1000000;
if (wpid === 1 && MStyle === 2) AttPow *= this.c_betu2.value / 100; //�w�r�B��
this.g_attN.innerHTML = Mf(AttPow);
//�U���������l
var AttZoku = 0;
var wk = "";
if (wk_ken === "9") {
	wk = "����" + hosei;
} else {
	if (cZoku) { //����
		if (wpid === 10) { //�|
			AttZoku = cZokuAt * zokuDUP / 10;
			wk = zokuName[cZoku] + Mf(AttZoku * tamePZoku / 10000);
		} else {
			AttZoku = cZokuAt * sharpZoku[this.c_sharp.value] * zokuDUP / 100000 * (wpid === 4 && this.c_fw.checked ? 12/10 : 1);
			wk = zokuName[cZoku] + Mf(AttZoku);
		}
	}
	if (cZyou) wk += (wk ? "<br>" : "") + zokuName[cZyou] + (wpid === 4 && this.c_fw.checked ? Mf(cZyouAt * 12/10) : cZyouAt); //��Ԉُ�
}
this.g_zokuN.innerHTML = wk ? wk : "<br>";
var AttPowBk = AttPow,AttZokuBk = AttZoku; //���З͑ޔ�


//��S�ݒ�
//if (cCri == 0) {
//	this.c_cri[0].checked = true;
//	this.c_cri[0].disabled=this.c_cri[1].disabled=this.c_cri[2].disabled = true;
//} else {
//	this.c_cri[0].disabled=this.c_cri[1].disabled=this.c_cri[2].disabled = false;
//}
var cl = (cCri === 0 || this.c_cri[0].checked) ? 100 : cCri < 0 ? 75 : this.c_garou.value === "2" ? 135 : 125;
//

if (!this.m_enemi.value) return;
//------------------���v�Z------------------
//�S�̖h�䗦
var hc_def = this.m_hc.value.split(",");
var def = this.m_ang.checked ? this.m_def.value * this.m_ang.value * hc_def[0] * hc_def[1] * 100 : this.m_def.value * hc_def[0] * 100;
//����
var bui = this.m_enemi.value.split(":|")[0].split(":"),buiZoku = cZoku + 3;
if (ckFull) {
	for (var i=0,m=bui.length;i<m;bui[i] = bui[i++].split(","));
} else {
	bui.length = 1,bui[0] = this.c_buimei.value.split(",");
}
//������
if (wk_ken === "9") {
	for (var i=0,max=bui.length;i<max;bui[i][1]=bui[i++][2]=100);
	cl = 100,AttPow = 100,AttZoku = 0;
}
switch (wpid) {
case 0: //�匕
case 2: //�n���}�[
case 3: //�����X
case 4: //�Ў茕
case 6: //�o��
case 7: //����
case 8: //��J
case 9: //�K�������X
	//����
	for (var i=0,j=1,max=bui.length;i<max;i++,j++){
		//���[�V����
		for (var k=0,l=1,maxk=motion.length;k<maxk;k++,l++) {
			var motionP = isNaN(motion[k]) ? motion[k].split("|") : [motion[k]];
			var nd = 0,zd = 0;
			//�����̗��ђʂ�50%�A�o���͗���������70%��
			var wkKeizoku = (wpid === 7 && k === 3 && MStyle === 2) ? 20/3 : (wpid === 6 && k >= 7 && !MStyle) ? 7 : 10;
			
			//�v�Z
			for (var m=0,maxm=motionP.length;m<maxm;m++) {
				if (wk_ken !== "9") { //�����ȊO
					switch (wpid) {
					case 0: //�匕
						if (MStyle !== 1) { //�匕�̗��߉�S���[�V�����i�V�ȊO
							switch (maxk-k) {
							case 3: hosei = 110;break;
							case 2: hosei = 120;break;
							case 1: hosei = 130;break;
							default: hosei = 100;break;
							}
						}
						break;
					case 2: //�n���}�[
						if (k >= 7 && this.c_betu.selectedIndex) { //SR�Z�u��
							AttPow = Mf(cAt * 1.3);
							if (AttPow > BairituMax) AttPow = BairituMax;
							AttPow = AttPow * sharp[this.c_sharp.value] * zan * (this.c_kensyo.value === "A1" ? 12 : 10) / 1000000;
						} else {
							AttPow = AttPowBk;
						}
						break;
					case 3: //�����X
						if (motionP[m].charAt(0) === "+") { //��
							hosei = 100,wp_type = 2;
							AttPow = AttPowBk / sharp[this.c_sharp.value] * 1000 / zan * 100;
							AttZoku = AttZokuBk / sharpZoku[this.c_sharp.value] * 10000 / zan * 100;
						} else if (Number(bui[i][1]) * 100 >= Number(bui[i][2]) * 72) { //���ʑI��
							hosei = 100,wp_type = 1,AttPow = AttPowBk,AttZoku = AttZokuBk;
						} else {
							hosei = 72,wp_type = 2,AttPow = AttPowBk,AttZoku = AttZokuBk;
						}
						if (k === 7 && !MStyle) { //�ːi����
							hosei *= 1.125;
						}
						break;
					case 4: //�Ў茕
						if (motionP[m].charAt(0) === "+") { //��
							wp_type = 2,hosei = 100;
							AttPow = AttPowBk / sharp[this.c_sharp.value] * 1000 / zan * 100;
							AttZoku = AttZokuBk / sharpZoku[this.c_sharp.value] * 10000 / zan * 100;
						} else if(wp_type === 2) { //�a
							wp_type = 1,hosei = 125,AttPow = AttPowBk,AttZoku = AttZokuBk;
						}
						break;
					case 6: //�o��
						if (MStyle && k >= 7) { //�n�ȊO
							AttPow = AttPowBk / at_hosei * 100;
						} else {
							AttPow = AttPowBk;
						}
						break;
					}
				}
				//(�U���~�؂ꖡ�{���~�a���)�~���[�V�����~�␳�~�����~�N���e�B�J��(1.25,0.75)
				var ndWK = Mf(AttPow * motionP[m] * hosei * bui[i][wp_type] * cl / 100000000); //�ʏ�
				var ndNC = Mf(AttPow * motionP[m] * hosei * bui[i][wp_type] * 100 / 100000000); //�ʏ�N���Ȃ�
				if (ndWK < 1) ndWK = 1; //�Œ�_���[�W�ۏ�
				if (ndNC < 1) ndNC = 1; //�Œ�_���[�W�ۏ�
				//(�U�������~�؂ꖡ�{��)�~����
				var zdWK = Mf(AttZoku * bui[i][buiZoku] * wkKeizoku / 1000); //����

				if (this.c_gou[0].checked) { //���v�\��
					ndWK = Mf((ndWK + zdWK) * def / 100);
					if (ndWK < 1) ndWK = 1; //�Œ�_���[�W�ۏ�

					if (this.c_cri[2].checked) { //��S����
						ndNC = Mf((ndNC + zdWK) * def / 100);
						if (ndNC < 1) ndNC = 1; //�Œ�_���[�W�ۏ�
						ndWK = Mr(((ndWK * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10); //����(10�{)
					}
					zdWK = 0;
				} else { //�����\��
					ndWK = Mf(ndWK * def / 100);
					zdWK = Mf(zdWK * def / 100);
					if (ndWK + zdWK < 1) ndWK = 1; //�Œ�_���[�W�ۏ�

					if (this.c_cri[2].checked) { //��S����
						ndNC = Mf(ndNC * def / 100); //�ʏ�N���Ȃ�
						if (ndNC + zdWK < 1) ndNC = 1; //�Œ�_���[�W�ۏ�
						ndWK = Mr(((ndWK * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10); //����(10�{)
					}
				}
				nd += ndWK;
				zd += zdWK;
			}

			if (this.c_cri[2].checked) nd /= 10; //��S���ς̕\���O����
			var wkHtml = this.c_gou[0].checked ? nd : nd + (zd < 0 ? "":"+") + zd;
			//�e����l(�����ŋS�n��Ԃ�1.125UP)
			var kick = wk_ken === "9" ? 100 : bui[i][wp_type] * sharp[this.c_sharp.value] * zan * hosei / 10000000 * (wpid === 7 && this.c_betu.selectedIndex ? 1125/1000 : 1);
			//�e����E��S���[�V����
			if (kick <= KickP[0] && !(wpid === 9 && MStyle)) {this["d" + j + l].innerHTML = "<span style='color:gray'>" + wkHtml + "</span>";}
			else if (kick > KickP[2]) {this["d" + j + l].innerHTML = "<span style='color:blue'>" + wkHtml + "</span>";}
			else if (kick >= KickP[1]) {this["d" + j + l].innerHTML = "<span style='color:green'>" + wkHtml + "</span>";}
			else {this["d" + j + l].innerHTML = wkHtml;}
		}
		//�K�������X�C��
		if (wpid === 9) {
			//�e(�U����)
			if (MStyle === 2) { //���̏ꍇ�̂ݗ���ړ��i�@���t���j
				this["d" + j + 11].innerHTML = this.c_sharp.value === "0" ? "<br>" : this["d" + j + 9].innerHTML; //�ԃQ�[�W�Ȃ�j��
				l--;
			}
			for (var k=0,m=tamaP.length;k<m;k++,l++) {
				//�ԃQ�[�W�ł͖C���s��/HB���s��
				if (this.c_sharp.value === "0" && (k === 0 || MStyle)) {
					this["d" + j + l].innerHTML = "-";
				} else {
					tamaPZ = tamaP[k].split("|");
					//�C�p�t k=0:�C�� 1:�����C
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
					//�C���͞�Q�[�W��75��
					hoseiwH = (k === 0 && this.c_sharp.value <= 1) ? hoseiwH * 75 / 100 : hoseiwH;
					if (this.c_fw.checked) hoseiwH *= 15/10;
					//�v�Z:�� �U����
					//�v�Z:�� �U���́~����
					if (!k) {	//�C��
						if (MStyle === 0) {				//�n
							nd = Mf(tamaPZ[0] * hoseiwH / 100);
							zd = Mf(tamaPZ[2] * bui[i][tamaPZ[1] - 0 + 3] / 100 * zokuDUP / 10);
						} else if (MStyle === 1) {		//�V
							nd = Mf(tamaPZ[0] * hoseiwH / 100);
							zd = Mf(tamaPZ[2] * 3 * bui[i][tamaPZ[1] - 0 + 3] / 100 * zokuDUP / 10);
						} else {						//��
							if (tamaPZ[1] === "-") { //�ŁE����
								zd = Mf(tamaPZ[2] * hoseiwH / 100)+1;
							} else {
								zd = Mf(tamaPZ[2] * bui[i][tamaPZ[1] - 0 + 3] / 100 * zokuDUP / 10)+1;
							}
							nd = Mf(tamaPZ[0] * hoseiwH / 100);
						}
					} else {	//�����C|HB
						if (!MStyle) {				//�n
							nd = Mf(tamaPZ[0] * hoseiwH / 100);
							zd = Mf(tamaPZ[2] * bui[i][tamaPZ[1] - 0 + 3] / 100 * zokuDUP / 10);
						} else { //HB
							nd = Mf(AttPow * tamaPZ[0] * hosei * bui[i][1] * cl / 100000000);
							zd = Mf(tamaPZ[2] * sharpZoku[this.c_sharp.value] * bui[i][tamaPZ[1] - 0 + 3] / 1000000 * zokuDUP / 10);
						}
					}
					if (MStyle === 2 && k === 0) {	//���̖C��
						nd = Mf(nd * def / 100);
						zd = Mf(zd * def / 100);
						if (nd < 1) nd = 1; //�Œ�_���[�W�ۏ�
						if (zd < 1) zd = 1; //�Œ�_���[�W�ۏ�
						this["d" + j + l].innerHTML = zd + "�" + nd;
					} else {
						if (nd < 1) nd = 1; //�Œ�_���[�W�ۏ�
						if (this.c_gou[0].checked) { //���v�\��
							nd = Mf((nd + zd) * def / 100);
							if (nd < 1) nd = 1; //�Œ�_���[�W�ۏ�
							this["d" + j + l].innerHTML = nd;
						} else {
							nd = Mf(nd * def / 100);
							zd = Mf(zd * def / 100);
							if (nd + zd < 1) nd = 1; //�Œ�_���[�W�ۏ�
							this["d" + j + l].innerHTML = nd + (zd < 0 ? "":"+") + zd;
						}
					}
				}
			}
			if (!MStyle) { //���X�^�C���̏ꍇ�̂�
				if (this.c_gou[0].checked) { //���v�\��
					this["d" + j + l].innerHTML = nd * 5;
				} else { //�����\��
					this["d" + j + l].innerHTML = nd * 5 + (zd < 0 ? "":"+") + zd * 5;
				}
			}
		}
	}
	break;
case 1: //�w�r�B�{�E�K��
case 5: //���C�g�{�E�K��
	//����
	for (var i=0,j=1,max=bui.length;i<max;i++,j++){
		switch (this.c_tama.value) {
		case "9": //�U�e
		case "10": //�g�U�e
		case "11": //����
		case "12": //��Ԉُ�
			//�e(�U���́b�����b�{��)
			//if (this.c_tama.value === "12") bui[i][wp_type] = 100; //��Ԉُ�͓�������10.0�Ŗ����Ȃ���
			//�v�Z
			for (var k=0,l=1,m=tamaP.length;k<m;k++,l++) {
				var tamaPZ = tamaP[k].split("|");
				//�U���~�e�U���́~�␳�~�����~�N���e�B�J��(1.25,0.75)
				var nd   = Mf(AttPow * tamaPZ[0] * hosei * bui[i][wp_type] * cl / 100000000); //�ʏ�
				var ndNC = Mf(AttPow * tamaPZ[0] * hosei * bui[i][wp_type] * 100 / 100000000); //�ʏ�N���Ȃ�
				if (nd   < 1) nd = 1; //�Œ�_���[�W�ۏ�
				if (ndNC < 1) ndNC = 1; //�Œ�_���[�W�ۏ�
				//����
				if (tamaPZ.length > 2) {
					//�U���~�e�U���́~�����~����UP
					if (this.c_tama.value === "11") {
						//���ŗ��e�̂ݍU���͂Ɉˑ����Ȃ�
						if (wpid === 5 && MStyle === 2) {//���C�g���̌^
							var zd = Mf((k === 4 ? 100 : AttPow) * tamaPZ[2] / 100 * bui[i][tamaPZ[1] - 0 + 3] * this.c_zkUp.value / 10 * this.c_zkUp2.value / 10 * (this.c_honki.value === "1" ? 11 : 10) / 10 * zokuDUP / 1000 * 15 / 10);
						} else if (wpid === 1 && this.c_waza.selectedIndex === 1) {//�w�r�BSR
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
				//�\��
				if (this.c_tama.value === "10") { //�g�U
					if (this.c_gou[0].checked) { //���v�\��
						nd = Mf(nd * def / 100);
						if (nd < 1) nd = 1; //�Œ�_���[�W�ۏ�
						if (this.c_cri[2].checked) { //��S����
							ndNC = Mf(ndNC * def / 100);
							if (ndNC < 1) ndNC = 1; //�Œ�_���[�W�ۏ�
							nd = Mr(((nd * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10) / 10; //����
						}
						this["d" + j + l].innerHTML = nd + "(" + Mf((tamaPZ[3] - 0 + zd) * def / 100) + ")";
					} else { //�����\��
						nd = Mf(nd * def / 100);
						zd = Mf(zd * def / 100);
						if (nd < 1) nd = 1; //�Œ�_���[�W�ۏ�
						if (this.c_cri[2].checked) { //��S����
							ndNC = Mf(ndNC * def / 100); //�ʏ�N���Ȃ�
							if (ndNC < 1) ndNC = 1; //�Œ�_���[�W�ۏ�
							nd = Mr(((nd * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10) / 10; //����
						}
						this["d" + j + l].innerHTML = nd + "(" + Mf(tamaPZ[3] * def / 100) + (zd < 0 ? "":"+") + zd + ")";
					}
				} else {
					if (this.c_gou[0].checked) { //���v�\��
						nd = Mf((nd + zd) * def / 100);
						if (nd < 1) nd = 1; //�Œ�_���[�W�ۏ�
						if (this.c_cri[2].checked) { //��S����
							ndNC = Mf((ndNC + zd) * def / 100);
							if (ndNC < 1) ndNC = 1; //�Œ�_���[�W�ۏ�
							nd = Mr(((nd * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10) / 10; //����
						}
						this["d" + j + l].innerHTML = nd;
					} else { //�����\��
						nd = Mf(nd * def / 100);
						zd = Mf(zd * def / 100);
						if (nd + zd < 1) nd = 1; //�Œ�_���[�W�ۏ�
						if (this.c_cri[2].checked) { //��S����
							ndNC = Mf(ndNC * def / 100); //�ʏ�N���Ȃ�
							if (ndNC + zd < 1) ndNC = 1; //�Œ�_���[�W�ۏ�
							nd = Mr(((nd * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10) / 10; //����
						}
						this["d" + j + l].innerHTML = nd + (zd < 0 ? "":"+") + zd;
					}
				}
			}
			break;
		case "6":
		case "7":
		case "8": //�O�b�֒e
			//�C�p�t
			var hoseiwHn = this.c_guns.value === "0" ? 100 : 150;
			var hoseiwHf = this.c_guns.value === "0" ? 100 : this.c_guns.value === "1" ? 150 : this.c_guns.value === "2" ? 160 : 170;
			//���[�V����(�З͌���)
			for (var k=0,l=2,maxk=motion.length;k<maxk;k++,l++) {
				//�_������
				var wkshoot = this.c_shoot.checked && motion[k] >= 15 ? 5 : 0;
				//�e(�U���́b�����b�����l|�Œ�)
				var tamaPZ = tamaP[this.c_tama.value].split("|");
				//�v�Z �U���~�e�U���́~�З͌����~�␳�~�����~�N���e�B�J��(1.25,0.75)
				var nd = Mf(Mf(AttPow * tamaPZ[0] * motion[k] * hosei * (bui[i][wp_type]-0+wkshoot) * cl / 1000000000) * def / 100);
				if (nd < 1) nd = 1; //�Œ�_���[�W�ۏ�
				if (this.c_cri[2].checked) { //��S����
					var ndNC = Mf(Mf(AttPow * tamaPZ[0] * motion[k] * hosei * (bui[i][wp_type]-0+wkshoot) * 100 / 1000000000) * def / 100); //�ʏ�N���Ȃ�;
					if (ndNC < 1) ndNC = 1; //�Œ�_���[�W�ۏ�
					nd = Mr(((nd * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10) / 10; //����
				}
				var zd = Mf(tamaPZ[2] * bui[i][tamaPZ[1] - 0 + 3] * hoseiwHf / 10000 * zokuDUP / 10);
				var kz = Mf(tamaPZ[3] * hoseiwHn / 100);
				if (this.c_gou[0].checked) { //���v�\��
					this["d" + j + l].innerHTML = nd + "+(" + Mf((kz + zd) * def / 100) + ")";
				} else { //�����\��
					this["d" + j + l].innerHTML = nd + "+(" + Mf(kz * def / 100) + (Mf(zd * def / 100) < 0 ? "":"+") + Mf(zd * def / 100) + ")";
				}
			}
			break;
		case "20": //�r�M�e
			//�C�p�t
			var hoseiwHn = this.c_guns.value === "0" ? 100 : this.c_guns.value === "1" ? 110 : this.c_guns.value === "2" ? 120 : 130;
			var hoseiwHf = 100;
			if (this.c_waza.selectedIndex === 1){ //�d�e�Z�y�e��z��1.2�{
				hoseiwHn *= 12 / 10;
				hoseiwHf *= 12 / 10;
			}
				//�e(�U���́b�����b�����l|�Œ�)
				var tamaPZ = tamaP[0].split("|");
				var zd = Mf(tamaPZ[2] * bui[i][tamaPZ[1] - 0 + 3] * hoseiwHf / 10000 * zokuDUP / 10);
				var kz = Mf(tamaPZ[3] * hoseiwHn / 100);
				if (this.c_gou[0].checked) { //���v�\��
					this["d" + j + "1"].innerHTML = Mf((kz + zd) * def / 100);
					this["d" + j + "2"].innerHTML = Mf((kz + zd) * def / 100) * 60;
				} else { //�����\��
					this["d" + j + "1"].innerHTML = Mf(kz * def / 100) + (Mf(zd * def / 100) < 0 ? "":"+") + Mf(zd * def / 100);
					this["d" + j + "2"].innerHTML = Mf(kz * def / 100) * 60 + (Mf(zd * def / 100) < 0 ? "":"+") + Mf(zd * def / 100) * 60;
				}
			break;
		default:
			//���[�V����(�З͌���)
			for (var k=0,l=2,maxk=motion.length;k<maxk;k++,l++) {
				//�_������
				var wkshoot = this.c_shoot.checked && motion[k] >= 15 ? 5 : 0;
				//�v�Z �U���~�e�U���́~�З͌����~�␳�~�����~�N���e�B�J��(1.25,0.75)
				var nd = Mf(Mf(AttPow * tamaP[this.c_tama.value] * motion[k] * hosei * (bui[i][wp_type]-0+wkshoot) * cl / 1000000000) * def / 100);
				if (nd < 1) nd = 1; //�Œ�_���[�W�ۏ�
				if (this.c_cri[2].checked) { //��S����
					var ndNC = Mf(Mf(AttPow * tamaP[this.c_tama.value] * motion[k] * hosei * (bui[i][wp_type]-0+wkshoot) * 100 / 1000000000) * def / 100); //�ʏ�N���Ȃ�;
					if (ndNC < 1) ndNC = 1; //�Œ�_���[�W�ۏ�
					nd = Mr(((nd * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10) / 10; //����
				}
				this["d" + j + l].innerHTML = nd;
			}
			break;
		}
		//���C�g���̌^
		if (wpid === 5 && MStyle === 2) {
			var nd = Mf(30 / soku_hosei);
			var zd = Mf(12 * bui[i][1 - 0 + 3] * zokuDUP / 1000 / soku_hosei);
			if (this.c_gou[0].checked) { //���v�\��
				nd = Mf((nd + zd) * def / 100);
				if (nd < 1) nd = 1; //�Œ�_���[�W�ۏ�
				this["d" + j + 10].innerHTML =  nd;
			} else { //�����\��
				nd = Mf(nd * def / 100);
				zd = Mf(zd * def / 100);
				if (nd + zd < 1) nd = 1; //�Œ�_���[�W�ۏ�
				this["d" + j + 10].innerHTML = nd + (zd < 0 ? "":"+") + zd;
			}
		}
	}
	break;
case 10: //�|
	//����
	for (var i=0,j=1,max=bui.length;i<max;i++,j++){
		//�ߐ�
		var wkKeizoku = 10,wk_ken = this.c_betu.value;

		var wp_yakiri = Number(bui[i][1]) >= Number(bui[i][2]) ? 1 : 2;
		for (var k=0,l=1;k<2;k++,l++) {
			var motionP = isNaN(motion[k]) ? motion[k].split("|") : [motion[k]];
			var nd = 0,zd = 0;
			
			//�v�Z
			for (var m=0,maxm=motionP.length;m<maxm;m++) {
				if (wk_ken === "9") { //����
					ndWK = !MStyle ? Mf(2 * def / 10) : Mf(10 * def / 10);
					zdWK = 0;
					if (ndWK < 1) ndWK = 1; //�Œ�_���[�W�ۏ�
				} else {
					//(�U���~�؂ꖡ�{���~�a���)�~���[�V�����~�␳�~�����~�N���e�B�J��(1.25,0.75)
					var ndWK = Mf(AttPow * motionP[m] * 100 * bui[i][wp_yakiri] * cl / 100000000); //�ʏ�
					var ndNC = Mf(AttPow * motionP[m] * 100 * bui[i][wp_yakiri] * 100 / 100000000); //�ʏ�N���Ȃ�
					if (ndWK < 1) ndWK = 1; //�Œ�_���[�W�ۏ�
					if (ndNC < 1) ndNC = 1; //�Œ�_���[�W�ۏ�
					//(�U�������~�؂ꖡ�{��)�~����(�����͔���)
					var zdWK = Mf(AttZoku * bui[i][buiZoku] * wkKeizoku / 2 / 1000); //����

					if (this.c_gou[0].checked) { //���v�\��
						ndWK = Mf((ndWK + zdWK) * def / 100);
						if (ndWK < 1) ndWK = 1; //�Œ�_���[�W�ۏ�

						if (this.c_cri[2].checked) { //��S����
							ndNC = Mf((ndNC + zdWK) * def / 100);
							if (ndNC < 1) ndNC = 1; //�Œ�_���[�W�ۏ�
							ndWK = Mr(((ndWK * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10); //����(10�{)
						}
						zdWK = 0;
					} else { //�����\��
						ndWK = Mf(ndWK * def / 100);
						zdWK = Mf(zdWK * def / 100);
						if (ndWK + zdWK < 1) ndWK = 1; //�Œ�_���[�W�ۏ�

						if (this.c_cri[2].checked) { //��S����
							ndNC = Mf(ndNC * def / 100); //�ʏ�N���Ȃ�
							if (ndNC + zdWK < 1) ndNC = 1; //�Œ�_���[�W�ۏ�
							ndWK = Mr(((ndWK * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10); //����(10�{)
						}
					}
				}
				nd += ndWK;
				zd += zdWK;
			}

			if (this.c_cri[2].checked) nd /= 10; //��S���ς̕\���O����
			var wkHtml = this.c_gou[0].checked ? nd : nd + (zd < 0 ? "":"+") + zd;
			//�e����l
			var kick = wk_ken === "9" ? 100 : bui[i][wp_yakiri] * sharp[this.c_sharp.value] * zan * hosei / 10000000;
			//�e����E��S���[�V����
			if (kick <= KickP[0] && !MStyle) {this["d" + j + l].innerHTML = "<span style='color:gray'>" + wkHtml + "</span>";}
			else if (kick >= KickP[2] || (MStyle && k === 0)) {this["d" + j + l].innerHTML = "<span style='color:blue'>" + wkHtml + "</span>";}
			else if (kick >= KickP[1] && !MStyle) {this["d" + j + l].innerHTML = "<span style='color:green'>" + wkHtml + "</span>";}
			else {this["d" + j + l].innerHTML = wkHtml;}
		}
		//���[�V����(�З͌���)
		for (var k=3,l=4,maxk=motion.length;k<maxk;k++,l++) {
			if (this.c_betu.value === "9") { //�����r��
				this["d" + j + l].innerHTML = Mf(yaZoku * (MStyle === 2 && this.c_tama.selectedIndex >= 4 ? 5 : 1) *def / 100) * tamaP.length;
			} else {
				var nd = 0,zd = 0;
				for (var t=0,m=tamaP.length;t<m;t++) {
					//�v�Z �U���~���[�V����(����)�~�␳�~�����~�|�~���߁~�N���e�B�J��(1.25,0.75)
					var ndWK = Mf(AttPow * tamaP[t] / 100 * tameP / 100 * motion[k] / 10 * hosei * bui[i][wp_type] * cl / 1000000);
					var ndNC = Mf(AttPow * tamaP[t] / 100 * tameP / 100 * motion[k] / 10 * hosei * bui[i][wp_type] * 100 / 1000000); //�ʏ�N���Ȃ�
					if (ndWK < 1) ndWK = 1; //�Œ�_���[�W�ۏ�
					if (ndNC < 1) ndNC = 1; //�Œ�_���[�W�ۏ�
					if (MStyle === 2 && this.c_tama.selectedIndex >= 4) ndWK *=5,ndNC *=5; //���I�[���A���[
					var zdWK = Mf(AttZoku * bui[i][buiZoku] * tamePZoku / 1000000);
					
					if (this.c_gou[0].checked) { //���v�\��
						ndWK = Mf((ndWK + zdWK) * def / 100 * dt_hosei / 10);
						if (ndWK <= 0) ndWK = 1; //�Œ�_���[�W�ۏ�

						if (this.c_cri[2].checked) { //��S����
							ndNC = Mf((ndNC + zdWK) * def / 100 * dt_hosei / 10);
							if (ndNC <= 0) ndNC = 1; //�Œ�_���[�W�ۏ�
							ndWK = Mr(((ndWK * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10); //����(10�{)
						}
						zdWK = 0;
					} else { //�����\��
						ndWK = Mf(ndWK * def / 100 * dt_hosei / 10);
						zdWK = Mf(zdWK * def / 100 * dt_hosei / 10);
						if (ndWK + zdWK < 1) ndWK = 1; //�Œ�_���[�W�ۏ�

						if (this.c_cri[2].checked) { //��S����
							ndNC = Mf(ndNC * def / 100 * dt_hosei / 10); //�ʏ�N���Ȃ�
							if (ndNC + zdWK < 1) ndNC = 1; //�Œ�_���[�W�ۏ�
							ndWK = Mr(((ndWK * Ma(cCri)) + (ndNC * (100 - Ma(cCri)))) / 10); //�ʏ핽��(10�{)
						}
					}
					nd += ndWK;
					zd += zdWK;
				}
				if (this.c_cri[2].checked) nd /= 10; //��S���ς̕\���O����
				if (this.c_gou[0].checked) { //���v�\��
					this["d" + j + l].innerHTML = nd;
				} else { //�����\��
					this["d" + j + l].innerHTML = nd + (zd < 0 ? "":"+") + zd;
				}
			}
		}
	}
	break;
}
}
//------------------------------------�V���[�Y���X�g�\��----------
,Disp_Sozai : function (){
//�f��
var sozaiHtml = function (data) { //�X�L���V�~����cpy
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
	//�f�ލ��v �X�L���V�~����cpy
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
				if (wkK && wkK !== "�Ȃ�" && wkK !== "or") toku = wkK.replace("<br>","") + "<br>";
			}
		}
	}
	for (var i = 0,cnt = 0,SumMax = sozai_Sum.length; i < SumMax; sozai_Sum[i] = sozai_Sum[i++].join(""));
	//cpyend
	return ["<td>" + z + "z</td>","<td class=rep>" + LVup + "</td>","<td class=sozai>" + toku + sozaiHtml(sozai_Sum.join(" ")) + "</td>"];
	}
var sozaiD = equip["sozai"][this.s_wp.value + wpid].split(",");
var sozai = [],LVup = "",z = 0,ck = false,Txtz = "",Txtsozai = "",TxtLVup = "",wk = [],bukiwk = "",refID = "",namebk = ","+this.s_wp.value + wpid+",";
//��ꃋ�[�g
do {
	z += sozaiD[sZeny]-0;
	if (sozaiD[sCre]) {
		wk = sozaiRowHtml(z,LVup,sozai,sozaiD[sCre]);
		Txtz += wk[0],TxtLVup += wk[1],Txtsozai += wk[2];
		if (!sozaiD[sRep]) break;
	}
	sozai[sozai.length] = sozaiD[sRep];
	//��񃋁[�g�����邩
	if (sozaiD[sRef2]) ck = true;
	//�������T��
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
		LVup = bukiwk[aName] + " ��<br>" + LVup;
		sozaiD = equip["sozai"][refID].split(",");
	}
} while (sozai);

//��񃋁[�g
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
	//�������T��
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
		LVup = bukiwk[aName] + " ��<br>" + LVup;
		sozaiD = equip["sozai"][refID].split(",");
	}
} while (sozai);
}
this.m_WBody.innerHTML = "<table border=1 cellspacing=0 cellpadding=2>\n" +
						"<tr><td>����</td><td>" + this.s_wp.options[this.s_wp.selectedIndex].text + "</td></tr>\n" +
						"<tr><td>��p</td>" + Txtz + "</tr>\n" +
						"<tr><td>����</td>" + TxtLVup +"</tr>\n" +
						"<tr><td>�f��</td>" + Txtsozai + "</tr>\n";
						"</table>";

this.m_W.style.display = "block";
}
}//�O���[�o��
global.init();
global.init=null;
return global;
})();

//------------------------------------�O����----------
DamageForm.setItem(itemS);
itemS=null;

(function(){
//------------------------------------�C�x���g�\��t��----------
//�C�x���g�Z�b�g
var addEvent = function (elm, type, func) {
	//�ǉ�
	elm./*@cc_on @if (true) attachEvent ('on' + @else@*/ addEventListener (/*@end@*/ type,func,false);
	//�A�����[�h�ō폜
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
		case "�n�̌^" : t.value = "�V�̌^";break;
		case "�V�̌^" : t.value = "���̌^";break;
		case "���̌^" : t.value = "�n�̌^";break;
		case "�n" : t.value = "�V";break;
		case "�V" : t.value = "��";break;
		case "��" : t.value = "�n";break;
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
		case "�n�̌^" : t.value = "�V�̌^";break;
		case "�V�̌^" : t.value = "���̌^";break;
		case "���̌^" : t.value = "�n�̌^";break;
		case "�n" : t.value = "�V";break;
		case "�V" : t.value = "��";break;
		case "��" : t.value = "�n";break;
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
			if (typeof document.documentElement.style.maxHeight === "undefined") { //IE6��
				var w = document.getElementsByTagName("SELECT");
				for (var i=11,m=w.length; i<m; w[i++].style.visibility = "hidden");
			}
			DamageForm.Disp_Sozai();
			break;
		}
	case "m_WClose_B":
		if (typeof document.documentElement.style.maxHeight === "undefined") { //IE6��
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
		if (DamageForm.gou_enemi != gou_enemi_bk && DamageForm.c_tr.value >= 30 && DamageForm.d_spec.innerHTML.lastIndexOf("�V������") > 0) { //�V���p
			if (!DamageForm.c_tamaUp.disabled) {
				DamageForm.Cng_Tama(); //�������̏ꍇ�����������ς��
			} else {
				DamageForm.Cng_wp(); //�ߐڂȂ�Q�[�W���ς��
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
		//��������HC�ŉ�S���ς��
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
		if (DamageForm.gou_enemi && DamageForm.d_spec.innerHTML.lastIndexOf("�V������") > 0) { //�V���p
			if (!DamageForm.c_tamaUp.disabled) {
				DamageForm.Cng_Tama(); //�������̏ꍇ�����������ς��
			} else {
				DamageForm.Cng_wp(); //�ߐڂȂ�Q�[�W���ς��
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
