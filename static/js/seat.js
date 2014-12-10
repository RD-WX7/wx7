var g_seats=[];
var g_area;
var g_row;
var g_col;
var flag=document.getElementById("seatStatus").innerHTML;
function upCaseCharToInt(s)
	{
		return(s.charCodeAt()-65); 
	}
	
function intToUpcaseChar(n)
	{
		return(String.fromCharCode(n+65));
	}
	
function load(){
var x=document.getElementById("idString");
var strs = x.innerHTML.split("s");
var l = strs.length;

if(flag == "1")
{
for(i in strs)
{
	if(i != 0 && i != l-1)
	{
		var str = strs[i].split("_");
		var row = parseInt(str[1]);
		var col = parseInt(str[2]);
		if(g_seats[upCaseCharToInt(str[0])] == undefined)
			{
				g_seats[upCaseCharToInt(str[0])]=[];
			}
		if(g_seats[upCaseCharToInt(str[0])][row] == undefined)
			{
				g_seats[upCaseCharToInt(str[0])][row]=[];
			}
		g_seats[upCaseCharToInt(str[0])][row][col]=1;	

	}
}

var area = document.getElementById("area");
var row = document.getElementById("row");
var col = document.getElementById("col");
var para_area = document.createElement("option");
var para_row = document.createElement("option");
var para_col = document.createElement("option");
para_area.value = -1;
para_area.innerHTML = "随机";
area.appendChild(para_area);
para_row.value = -1;
g_area = -1;
clickSelect("0");
para_row.innerHTML = "随机";
row.appendChild(para_row);
g_row = -1;
para_col.value = -1;
para_col.innerHTML = "随机";
col.appendChild(para_col);
g_col = -1;
for(i in g_seats)
{
var para_area = document.createElement("option");

para_area.innerHTML = intToUpcaseChar(parseInt(i));
para_area.value= intToUpcaseChar(parseInt(i));

area.appendChild(para_area);
}
}
else if(flag == "0")
{
	var sf = document.getElementById("seatWrapper");
	sf.style.display="none";
	var seatMap = document.getElementById("seatMap");
	seatMap.style.display="none";
}
else
{
	var sf = document.getElementById("seatImage");
	var row = document.getElementById("seatRow");
	var col = document.getElementById("seatCol");
	var seatMap = document.getElementById("seatMap");
	seatMap.style.display="none";
	sf.style.display= "block";
	row.style.display = "none";
	col.style.display = "none";
	var area = document.getElementById("area");
	for(i in strs)
	{
		if(i != 0 && i!= l-1)
		{
		var str = strs[i].split("_");
		if(str[1] != "0")
		{
			var para_area = document.createElement("option");

			para_area.innerHTML = intToUpcaseChar(parseInt(i)-1);
			para_area.value= intToUpcaseChar(parseInt(i)-1);

			area.appendChild(para_area);
		}
		}
	}
}
}

function areaClick(val){
	var row = document.getElementById("row");
	var col = document.getElementById("col");
	while(row.hasChildNodes()) //当div下还存在子节点时 循环继续
    {
        row.removeChild(row.firstChild);
    }
	while(col.hasChildNodes()) //当div下还存在子节点时 循环继续
    {
        col.removeChild(col.firstChild);
    }
	var para_row = document.createElement("option");
	para_row.value = -1;
	para_row.innerHTML = "随机";
	row.appendChild(para_row);
	g_row = -1;
	var para_col = document.createElement("option");
	para_col.value = -1;
	para_col.innerHTML = "随机";
	col.appendChild(para_col);
	g_col = -1;
	g_area = upCaseCharToInt(val);
	if(flag == "1")
	clickSelect(g_area.toString());
	if(g_area != -1)
	{
		for(i in g_seats[g_area])
		{
			var para_row = document.createElement("option");
			para_row.value = i;
			para_row.innerHTML = i;
			row.appendChild(para_row);
		}
	}

}

function rowClick(val){
	g_row = val;
	var col = document.getElementById("col");
	while(col.hasChildNodes()) //当div下还存在子节点时 循环继续
    {
        col.removeChild(col.firstChild);
    }	
	var para_col = document.createElement("option");
	para_col.value = -1;
	para_col.innerHTML = "随机";
	col.appendChild(para_col);
	g_col = -1;
	var x=document.getElementsByClassName("as");
	$(x).removeClass().addClass("af");
	if(val != -1)
	{
	for(i in g_seats[g_area][g_row])
	{
		var para_col = document.createElement("option");
		para_col.value = i;
	    para_col.innerHTML = i;
		col.appendChild(para_col);
	}
	var token="_"+val+"_";
	var x=$("li[id*="+token+"]");
	x.removeClass().addClass("as");
	}
}

function colClick(val){
	var x=document.getElementsByClassName("as");
	$(x).removeClass().addClass("af");
	var token="_"+g_row+"_"+val;
	var x=$("li[id$="+token+"]");
	x.removeClass().addClass("as");
	g_col = val;
	
}

document.onload = load();
function clickSelect(val){
		var x=document.getElementById("selectArea")
        if(val == "0"){
        	$("li").remove();
        	$(".anum").remove();
        	for(var i=1; i<=19; i++){
				if(i==1){
					for(var j=1; j<=31; j++){
						var toppx = 5*(i-1);
						if(j<=5) var leftpx = 10+5*(j+3);
						else if(j<=26) var leftpx = 10+5*(j+4);
						else var leftpx = 10+5*(j+6);
						var txt = '<li id="s1_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
				else if(i==18){
					for(var j=1; j<=32; j++){
						var toppx = 5*(i-1);
						if(j<=5) var leftpx = 10+5*(j+3);
						else if(j<=27) var leftpx = 10+5*(j+4);
						else var leftpx = 10+5*(j+5);
						var txt = '<li id="s1_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
				else if(i==2){
					for(var j=1; j<=34; j++){
						var toppx = 5*(i-1);
						if(j<=6) var leftpx = 10+5*(j+2);
						else if(j<=28) var leftpx = 10+5*(j+3);
						else var leftpx = 10+5*(j+4);
						var txt = '<li id="s1_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
				else if(i==17||i==3){
					for(var j=1; j<=35; j++){
						var toppx = 5*(i-1);
						if(j<=7) var leftpx = 10+5*(j+1);
						else if(j<=28) var leftpx = 10+5*(j+2);
						else var leftpx = 10+5*(j+4);
						var txt = '<li id="s1_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
				else if(i==16||i==4){
					for(var j=1; j<=38; j++){
						var toppx = 5*(i-1);
						if(j<=8) var leftpx = 10+5*(j);
						else if(j<=30) var leftpx = 10+5*(j+1);
						else var leftpx = 10+5*(j+2);
						var txt = '<li id="s1_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
				else if(i==5||i==7||i==9||i==11||i==13||i==15){
					for(var j=1; j<=39; j++){
						var toppx = 5*(i-1);
						if(j<=9) var leftpx = 10+5*(j-1);
						else if(j<=30) var leftpx = 10+5*(j);
						else var leftpx = 10+5*(j+2);
						var txt = '<li id="s1_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
				else if(i==19){
					for(var j=1; j<=21; j++){
						var toppx = 5*(i-1);
						var leftpx = 10+5*(j+9);
						var txt = '<li id="s1_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
				else{
					for(var j=1; j<=40; j++){
						var toppx = 5*(i-1);
						if(j<=9) var leftpx = 10+5*(j-1);
						else if(j<=31) var leftpx = 10+5*(j);
						else var leftpx = 10+5*(j+1);
						var txt = '<li id="s1_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
			}
        }
        else if(val == "1"){
        	$("li").remove();
        	$(".anum").remove();
        	for(var i=1; i<=22; i++){
        		
				if(i==1){
					var txt1 = '<li id="s2_1_1" title="1排1号" class="af" style="top:0px;left:30px;"></li>'
					var txt2 = '<li id="s2_1_2" title="1排2号" class="af" style="top:0px;left:295px;"></li>'
					$("#seatMapData_ul").append(txt1,txt2);
				}
				else if(i==2){
					var txt1 = '<li id="s2_2_2" title="2排2号" class="af" style="top:5px;left:30px;"></li>'
					var txt2 = '<li id="s2_2_3" title="2排3号" class="af" style="top:5px;left:295px;"></li>'
					var txt3 = '<li id="s2_2_1" title="2排1号" class="af" style="top:5px;left:25px;"></li>'
					var txt4 = '<li id="s2_2_4" title="2排4号" class="af" style="top:5px;left:300px;"></li>'
					$("#seatMapData_ul").append(txt1,txt2,txt3,txt4);
				}
				else if(i==17||i==20){
					for(var j=1; j<=50; j++){
						var toppx = 5*(i);
						if(j<=14) var leftpx = 10+5*(j+4);
						else if(j<=36) var leftpx = 10+5*(j+5);
						else var leftpx = 10+5*(j+6);
						var txt = '<li id="s2_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
				else if(i==18){
					for(var j=1; j<=56; j++){
						var toppx = 5*(i);
						if(j<=17) var leftpx = 10+5*(j+1);
						else if(j<=39) var leftpx = 10+5*(j+2);
						else var leftpx = 10+5*(j+3);
						var txt = '<li id="s2_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
				else if(i==19){
					for(var j=1; j<=60; j++){
						var toppx = 5*(i);
						if(j<=19) var leftpx = 10+5*(j-1);
						else if(j<=41) var leftpx = 10+5*(j);
						else var leftpx = 10+5*(j+1);
						var txt = '<li id="s2_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
				else if(i==21){
					for(var j=1; j<=42; j++){
						var toppx = 5*(i);
						if(j<=10) var leftpx = 10+5*(j+8);
						else if(j<=32) var leftpx = 10+5*(j+9);
						else var leftpx = 10+5*(j+10);
						var txt = '<li id="s2_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
				else if(i==22){
					for(var j=1; j<=26; j++){
						var toppx = 5*(i);
						if(j<=4) var leftpx = 10+5*(j+14);
						else if(j<=22) var leftpx = 10+5*(j+17);
						else var leftpx = 10+5*(j+20);
						var txt = '<li id="s2_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
				else{
					for(var j=1; j<=6; j++){
						var toppx = 5*(i-1);
						if(j<=3) var leftpx = 10+5*(j+1);
						else var leftpx = 10+5*(j+53);
						var txt = '<li id="s2_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
			}
        }
        else if(val == "2"){
        	$("li").remove();
        	$(".anum").remove();
        	for(var i=1; i<=23; i++){
        		
				if(i==1){
					var txt1 = '<li id="s3_1_1" title="1排1号" class="af" style="top:0px;left:20px;"></li>'
					var txt2 = '<li id="s3_1_2" title="1排2号" class="af" style="top:0px;left:345px;"></li>'
					$("#seatMapData_ul").append(txt1,txt2);
				}
				else if(i==2){
					var txt1 = '<li id="s3_2_2" title="2排2号" class="af" style="top:5px;left:20px;"></li>'
					var txt2 = '<li id="s3_2_3" title="2排3号" class="af" style="top:5px;left:345px;"></li>'
					var txt3 = '<li id="s3_2_1" title="2排1号" class="af" style="top:5px;left:10px;"></li>'
					var txt4 = '<li id="s3_2_4" title="2排4号" class="af" style="top:5px;left:355px;"></li>'
					$("#seatMapData_ul").append(txt1,txt2,txt3,txt4);
				}
				else if(i==16){
					for(var j=1; j<=58; j++){
						var toppx = 5*(i-1);
						if(j<=3) var leftpx = 10+5*(j-1);
						else if(j<=19) var leftpx = 10+5*(j+4);
						else if(j<=39) var leftpx = 10+5*(j+5);
						else if(j<=55) var leftpx = 10+5*(j+6);
						else var leftpx = 10+5*(j+11);
						var txt = '<li id="s3_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
				else if(i==17){
					for(var j=1; j<=56; j++){
						var toppx = 5*(i-1);
						if(j<=18) var leftpx = 10+5*(j+5);
						else if(j<=38) var leftpx = 10+5*(j+6);
						else var leftpx = 10+5*(j+7);
						var txt = '<li id="s3_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
				else if(i==18){
					for(var j=1; j<=58; j++){
						var toppx = 5*(i-1);
						if(j<=19) var leftpx = 10+5*(j+4);
						else if(j<=39) var leftpx = 10+5*(j+5);
						else var leftpx = 10+5*(j+6);
						var txt = '<li id="s3_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
				else if(i==19){
					for(var j=1; j<=54; j++){
						var toppx = 5*(i-1);
						if(j<=17) var leftpx = 10+5*(j+6);
						else if(j<=37) var leftpx = 10+5*(j+7);
						else var leftpx = 10+5*(j+8);
						var txt = '<li id="s3_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
				else if(i==20){
					for(var j=1; j<=44; j++){
						var toppx = 5*(i-1);
						if(j<=12) var leftpx = 10+5*(j+11);
						else if(j<=32) var leftpx = 10+5*(j+12);
						else var leftpx = 10+5*(j+13);
						var txt = '<li id="s3_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
				else if(i==21){
					for(var j=1; j<=36; j++){
						var toppx = 5*(i-1);
						if(j<=8) var leftpx = 10+5*(j+15);
						else if(j<=28) var leftpx = 10+5*(j+16);
						else var leftpx = 10+5*(j+17);
						var txt = '<li id="s3_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
				else if(i==22){
					for(var j=1; j<=28; j++){
						var toppx = 5*(i-1);
						if(j<=4) var leftpx = 10+5*(j+19);
						else if(j<=24) var leftpx = 10+5*(j+20);
						else var leftpx = 10+5*(j+21);
						var txt = '<li id="s3_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
				else if(i==23){
					for(var j=1; j<=12; j++){
						var toppx = 5*(i-1);
						var leftpx = 10+5*(j+28);
						var txt = '<li id="s3_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
				else{
					for(var j=1; j<=6; j++){
						var toppx = 5*(i-1);
						if(j<=3) var leftpx = 10+5*(j-1);
						else var leftpx = 10+5*(j+63);
						var txt = '<li id="s3_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
			}
        }
        else{
        	$("li").remove();
        	$(".anum").remove();
        	for(var i=1; i<=22; i++){
        		
				if(i>=1 && i<=3){
					var toppx = 5*(i-1);
					var leftpx1 = 10+5*2;
					var leftpx2 = 10+5*65;
					var txt1 = '<li id="s4_'+i+'_1" title="'+i+'排1号" class="af" style="top:'+toppx+'px;left:'+leftpx1+'px;"></li>'
					var txt2 = '<li id="s4_'+i+'_2" title="'+i+'排2号" class="af" style="top:'+toppx+'px;left:'+leftpx2+'px;"></li>'
					$("#seatMapData_ul").append(txt1,txt2);
				}
				else if(i>=4 && i<=6){
					var toppx = 5*(i-1);
					var leftpx1 = 10+5*2;
					var leftpx2 = 10+5*65;
					var leftpx3 = 10;
					var leftpx4 = 10+5*67;
					var txt1 = '<li id="s4_'+i+'_2" title="'+i+'排2号" class="af" style="top:'+toppx+'px;left:'+leftpx1+'px;"></li>'
					var txt2 = '<li id="s4_'+i+'_3" title="'+i+'排3号" class="af" style="top:'+toppx+'px;left:'+leftpx2+'px;"></li>'
					var txt3 = '<li id="s4_'+i+'_1" title="'+i+'排1号" class="af" style="top:'+toppx+'px;left:'+leftpx3+'px;"></li>'
					var txt4 = '<li id="s4_'+i+'_4" title="'+i+'排4号" class="af" style="top:'+toppx+'px;left:'+leftpx4+'px;"></li>'
					$("#seatMapData_ul").append(txt1,txt2,txt3,txt4);
				}
				else if(i==16){
					for(var j=1; j<=52; j++){
						var toppx = 5*(i-1);
						if(j<=3) var leftpx = 10+5*(j-1);
						else if(j<=16) var leftpx = 10+5*(j+6);
						else if(j<=36) var leftpx = 10+5*(j+7);
						else if(j<=49) var leftpx = 10+5*(j+8);
						else var leftpx = 10+5*(j+15);
						var txt = '<li id="s4_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
				else if(i==17){
					for(var j=1; j<=50; j++){
						var toppx = 5*(i-1);
						if(j<=15) var leftpx = 10+5*(j+7);
						else if(j<=35) var leftpx = 10+5*(j+8);
						else var leftpx = 10+5*(j+9);
						var txt = '<li id="s4_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
				else if(i==18||i==19){
					for(var j=1; j<=54; j++){
						var toppx = 5*(i-1);
						if(j<=17) var leftpx = 10+5*(j+5);
						else if(j<=37) var leftpx = 10+5*(j+6);
						else var leftpx = 10+5*(j+7);
						var txt = '<li id="s4_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
				else if(i==20){
					for(var j=1; j<=42; j++){
						var toppx = 5*(i-1);
						if(j<=11) var leftpx = 10+5*(j+11);
						else if(j<=31) var leftpx = 10+5*(j+12);
						else var leftpx = 10+5*(j+13);
						var txt = '<li id="s4_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
				else if(i==21){
					for(var j=1; j<=36; j++){
						var toppx = 5*(i-1);
						if(j<=8) var leftpx = 10+5*(j+14);
						else if(j<=28) var leftpx = 10+5*(j+15);
						else var leftpx = 10+5*(j+16);
						var txt = '<li id="s4_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
				else if(i==22){
					for(var j=1; j<=28; j++){
						var toppx = 5*(i-1);
						if(j<=4) var leftpx = 10+5*(j+18);
						else if(j<=24) var leftpx = 10+5*(j+19);
						else var leftpx = 10+5*(j+20);
						var txt = '<li id="s4_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
				else{
					for(var j=1; j<=6; j++){
						var toppx = 5*(i-1);
						if(j<=3) var leftpx = 10+5*(j-1);
						else var leftpx = 10+5*(j+61);
						var txt = '<li id="s4_'+i+'_'+j+'" title="'+i+'排'+j+'号" class="af" style="top:'+toppx+'px;left:'+leftpx+'px;"></li>'
						$("#seatMapData_ul").append(txt);
					}
				}
			}
        }
        
	}
