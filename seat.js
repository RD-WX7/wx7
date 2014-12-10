var g_seats=[];
var g_area;
var g_row;
var g_col;

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
		/*if(str[0] == "A")
		
			{
				if(g_seats[0] == undefined)
				{
					g_seats[0]=[];
				}
				if(g_seats[0][row] == undefined)
					{
						g_seats[0][row]=[];
					}
				g_seats[0][row][col]=1;		
			}
		else if(str[0] == "B")
			{
				if(g_seats[1] == undefined)
				{
					g_seats[1]=[];
				}
				if(g_seats[1][row] == undefined)
					{
						g_seats[1][row]=[];
					}
				g_seats[1][row][col]=1;
				
			}
		else
			{
				if(g_seats[2] == undefined)
				{
					g_seats[2]=[];
				}
				if(g_seats[2][row] == undefined)
				{
					g_seats[2][row]=[];
				}
				g_seats[2][row][col]=1;			
			}
			*/
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
/*
if(i == 0)
{
	para_area.innerHTML = "红色区";
	para_area.value="A";
	}
else if(i == 1)
{
	para_area.innerHTML = "蓝色区";
	para_area.value="B";
	}
else 
{
	para_area.innerHTML = "绿色区";
	para_area.value="C";
	}
*/
area.appendChild(para_area);
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
/*
	if(val == "A")
	{
		g_area = 0;
		for(i in g_seats[0])
		{
			var para_row = document.createElement("option");
			para_row.value = i;
			para_row.innerHTML = i;
			row.appendChild(para_row);
		}
	}
	else if(val == "B")
	{
		g_area = 1;
		for(i in g_seats[1])
		{
			var para_row = document.createElement("option");
			para_row.value = i;
			para_row.innerHTML = i;
			row.appendChild(para_row);
		}
	}
	else if(val == "C")
	{
		g_area = 2;
		for(i in g_seats[2])
		{
			var para_row = document.createElement("option");
			para_row.value = i;
			para_row.innerHTML = i;
			row.appendChild(para_row);
		}
	}
	else
	{
		g_area = -1;
	}
*/
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
	
	if(val != -1)
	{
	for(i in g_seats[g_area][g_row])
	{
		var para_col = document.createElement("option");
		para_col.value = i;
	    para_col.innerHTML = i;
		col.appendChild(para_col);
	}		
	}
}

function colClick(val){
	g_col = val;
}

document.onload = load();
