var person = new Array();
for(var k=0;k<8;k++)
{
 person[k]=new Array();
}
person[0][0] = {Name:"Liu, Lianbo", Group:"APP-SQUAD", gender:"male"};
person[0][1] = {Name:"Qiao, Jida", Group:"APP-SQUAD", gender:"female"};

person[1][0] = {Name:"Che, Yuchi", Group:"DATA-ANALYTICS", gender:"male"};
person[1][1] = {Name:"Chen, Wanjun", Group:"DATA-ANALYTICS", gender:"female"};
person[1][2] = {Name:"Duan, Lei", Group:"DATA-ANALYTICS", gender:"female"};
person[1][3] = {Name:"Liu, Jun", Group:"DATA-ANALYTICS", gender:"male"};
person[1][4] = {Name:"Wang, Qiang", Group:"DATA-ANALYTICS", gender:"male"};

person[2][0] = {Name:"Chen, Miao", Group:"DATA-INSIGHTS", gender:"male"};
person[2][1] = {Name:"Liu, Wei", Group:"DATA-INSIGHTS", gender:"male"};
person[2][2] = {Name:"Qiao, Ziyao", Group:"DATA-INSIGHTS", gender:"male"};
person[2][3] = {Name:"Qiu, Zecheng", Group:"DATA-INSIGHTS", gender:"male"};
person[2][4] = {Name:"Yan, Shi", Group:"DATA-INSIGHTS", gender:"male"};
person[2][5] = {Name:"Zhao, Wenwen", Group:"DATA-INSIGHTS", gender:"female"};

person[3][0] = {Name:"Jha, Shashi Shobha", Group:"PRO-SQUAD", gender:"female"};
person[3][1] = {Name:"Kong, Debin", Group:"PRO-SQUAD", gender:"male"};
person[3][2] = {Name:"Liu, Xiaoyu", Group:"PRO-SQUAD", gender:"female"};
person[3][3] = {Name:"Mousumi, Sen", Group:"PRO-SQUAD", gender:"female"};
person[3][4] = {Name:"Qi, Mo", Group:"PRO-SQUAD", gender:"female"};
person[3][5] = {Name:"Su, Hang", Group:"PRO-SQUAD", gender:"male"};
person[3][6] = {Name:"Tian, Jun", Group:"PRO-SQUAD", gender:"female"};
person[3][7] = {Name:"Zhang, Yan Y.", Group:"PRO-SQUAD", gender:"male"};

person[4][0] = {Name:"Chen, Xiangjun", Group:"RETAIL", gender:"female"};
person[4][1] = {Name:"Cheng, Zhenzhen", Group:"RETAIL", gender:"female"};
person[4][2] = {Name:"Gadam, Anikumar", Group:"RETAIL", gender:"male"};
person[4][3] = {Name:"JHuang, Yuting", Group:"RETAIL", gender:"female"};
person[4][4] = {Name:"Ruh, Ralf", Group:"RETAIL", gender:"male"};
person[4][5] = {Name:"Wang, Quan", Group:"RETAIL", gender:"female"};
person[4][6] = {Name:"Xia, Pei", Group:"RETAIL", gender:"female"};

person[5][0] = {Name:"Liang, Yuan", Group:"SFDC", gender:"female"};
person[5][1] = {Name:"Wang, Jinnan", Group:"SFDC", gender:"male"};
person[5][2] = {Name:"Zhou, Lian", Group:"SFDC", gender:"female"};
person[5][3] = {Name:"Zhu, Lei L.", Group:"SFDC", gender:"female"};

person[6][0] = {Name:"Chen, Leiming", Group:"TELEMATICS", gender:"male"};
person[6][1] = {Name:"Dombrowski, Dirk", Group:"TELEMATICS", gender:"male"};
person[6][2] = {Name:"Fang, Zheng", Group:"TELEMATICS", gender:"male"};
person[6][3] = {Name:"Hu, Xiaotong", Group:"TELEMATICS", gender:"female"};
person[6][4] = {Name:"Huang, Jun", Group:"TELEMATICS", gender:"male"};
person[6][5] = {Name:"Liang, Zhenhua", Group:"TELEMATICS", gender:"male"};
person[6][6] = {Name:"Liu, Xiaoyu", Group:"TELEMATICS", gender:"female"};
person[6][7] = {Name:"Wang, Wenchao", Group:"TELEMATICS", gender:"male"};
person[6][8] = {Name:"Yang, Yun", Group:"TELEMATICS", gender:"female"};
person[6][9] = {Name:"Yuan, Rui", Group:"TELEMATICS", gender:"male"};
person[6][10] = {Name:"Zhang, Wenshu", Group:"TELEMATICS", gender:"female"};

person[7][0] = {Name:"Alvarez Leyva, Carla Nora", Group:"OTHERS", gender:"female"};
person[7][1] = {Name:"Huang Chen", Group:"OTHERS", gender:"male"};
person[7][2] = {Name:"Piao, Haiyu", Group:"OTHERS", gender:"female"};
person[7][3] = {Name:"Ren, Wei W.", Group:"OTHERS", gender:"female"};
person[7][4] = {Name:"Xu, Xiaoqing", Group:"OTHERS", gender:"female"};

function GetRandomNum(Min,Max){  

        var Range = Max - Min;  

        var Rand = Math.random();  

        return(Min + Math.round(Rand * Range));  

}  

function setCookie(cname,cvalue,exdays)
{
var d = new Date();
d.setTime(d.getTime()+(exdays*24*60*60*1000));
var expires = "expires="+d.toGMTString();
document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname)
{
var name = cname + "=";
var ca = document.cookie.split(';');
for(var i=0; i<ca.length; i++) 
  {
  var c = ca[i].trim();
  if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
return "";
}

function rand(i)
{
    var num = Math.floor(Math.random()*(person[i].length));
    console.log(num);
    return num;   
}

function generate()
{

    var preName = localStorage.Name;
    var gen = new Array;
    var reRandom1 = 0;
    var reRandom2 = 0;
    while(reRandom1 != 8||reRandom2 < 1)
    {

        reRandom1 = 0;
        reRandom2 = 0;
        for (var i = 0; i <8; i++){
            var num = Math.floor(Math.random()*(person[i].length));
            gen[i] = person[i][num];
            while(!(preName.indexOf(gen[i].Name)== -1))
            {
                num = rand(i);
                gen[i] = person[i][num];
            }
        }

        
        for (var i = gen.length-1; i >= 0; i--) {
            if((preName.indexOf(gen[i].Name)== -1))//不在上次内
            {
                reRandom1 += 1;
            }
        }
        for (var i = gen.length-1; i >= 0; i--) {
            if(gen[i].gender== 'female')
            {
                reRandom2 += 1;
            }
        }
        console.log(reRandom1);
        console.log(reRandom2);
    }
    var stringg = "Previous:";

    for (var i = 7; i >= 0; i--) {
        //console.log(gen[i].Name);
        document.write("<p>"+gen[i].Name+"</p>");
        stringg = stringg.concat(gen[i].Name,"; ");
    }
    console.log(stringg);
    localStorage.Name = stringg;
}


function onStart(){ 
    var strKey = "Name"; 
    var preName;
    if(!(localStorage.Name=="empty")){ 
        preName = localStorage.Name;
    }
    else
            { 
                localStorage.Name = "empty"
                preName = localStorage.Name;
            } 
        } 
function myFunction() 
{
//
//    var username=getCookie("username");
//    if (username!="")
//    {
//        document.write("Previous:"+"username")
//    }
//    else 
//    { 
//        username = "";
//        setCookie("username",username,365);
//    }



        onStart();
        generate();

}