function dis(z)
{
    var a=String(document.getElementById("screen").value);
    if(z=="back")
    {
        a=a.substring(0,a.length-1);
    }
    else if(z=="clear")
    {
        a="";
    }
    else{
        a=a+z;
    }
    document.getElementById("screen").value=a;
}
function eval()
{
    try {
        var a=String(document.getElementById("screen").value);
        var b=a.split(/[+-/*%]/);
        var c=b;
        a=a.replace(b[0],"");
        a=a.replace(b[1],"");
        var d=NaN;
        if(a=="+")
        {
             d=Number(b[0])+Number(b[1]);
        }
        if(a=="-")
        {
             d=Number(b[0])-Number(b[1]);
        }
        if(a=="/")
        {
            d=Number(b[0])/Number(b[1]);
        }
        if(a=="*")
        {
            d=Number(b[0])*Number(b[1]);
            
        }
        if(a=="%")
        {
            d=(Number(b[0])*Number(b[1]))/100;
            
        }
        if(isNaN(d)) throw "not a number";
        document.getElementById("screen").value=d;
    } catch (error) {
        document.getElementById("screen").value="error";
    }
   
}