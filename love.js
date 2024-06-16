function fun(){
    var c;
    c=Math.random();
    c=c*100;
    c=Math.floor(c)+1
    m=""
    if(c>0&&c<25)
    {
    m = "Your Love Will Not Sucess: "+c+"%";
    }
    else if(c>=25&&c<50)
    {
    m = "Your Love Is Unstable: "+c+"%";
    }
    else if(c>=50&&c<75)
    {
    m= "Your Love In Middle Stage: "+c+"%";
    }
    else if(c>=75&&c!=100)
    {
    m="Your Love Will Sucess With Patience: "+c+"%";
    }
    else if(c==100)
    {
    m="Your Love Will Success: "+c+"%";
    }
    document.getElementById("demo").innerHTML = m;
    }
    