
$.ajax({

    url:"https://competitive-coding-api.herokuapp.com/api/codechef/the_mrx18",
    type:'get' ,
    datatype:"json" ,

    success:function(response)
    {
        console.log(response);
        
       
    },
    error:function(error){
        console.log("error");
    },
    always:{}

})


function func(pagename, element, color)
{
    var i,tabcont,tablinks;

    tabcont=document.getElementsByClassName("tabcont");
    for(i=0;i < tabcont.length ; i++)
    {
        tabcont[i].style.display = "none";
    }

        tablinks=document.getElementsByClassName("tab");

        for(i=0;i < tabcont.length ; i++)
        {
            tablinks[i].style.backgroundColor = "";
        }

        document.getElementById(pagename).style.display = "block";

        var jj=document.getElementById(element);
        jj.style.backgroundColor = "rgb(71, 71, 71)";
        // document.getElementById("ll").style.backgroundColor = color;
}

var t=document.getElementById("t1");

t.click();