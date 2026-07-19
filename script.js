*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:'Poppins',sans-serif;
background:#f6eadb;
color:#5a1f25;
text-align:center;
}


/* COVER PAGE */

#cover{
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:30px;

background:
linear-gradient(rgba(246,234,219,.85),rgba(246,234,219,.95)),
url("images/roses-bg.png");

background-size:cover;
background-position:center;
}


.bismillah{
font-size:18px;
color:#8d5a35;
}


.initials{
font-family:'Cinzel',serif;
font-size:90px;
color:#8b1e2d;
margin:25px;
letter-spacing:5px;
}


#cover h2{
font-family:'Cinzel',serif;
font-size:35px;
color:#6b1d25;
}


#openBtn{
margin-top:35px;
padding:15px 40px;
border:none;
border-radius:40px;
background:#8b1e2d;
color:white;
font-size:17px;
box-shadow:0 10px 25px rgba(100,20,30,.3);
}



/* SCRATCH PAGE */


#scratchPage{
padding:60px 20px;
background:#f8eee2;
}


.scratch-box{
height:220px;
width:330px;
margin:auto;
position:relative;
border-radius:25px;
overflow:hidden;
background:#fff;
box-shadow:0 15px 40px rgba(100,40,40,.2);
}


.hidden-date{
font-family:'Cinzel',serif;
font-size:30px;
padding-top:60px;
color:#8b1e2d;
}


#scratch-layer{
position:absolute;
inset:0;
background:#b9a08a;
display:flex;
justify-content:center;
align-items:center;
color:white;
font-size:22px;
cursor:pointer;
}



/* INVITATION */


#invitation{
padding:50px 20px;
background:#f6eadb;
}


.couple{
width:320px;
max-width:90%;
animation:float 4s infinite ease-in-out;
}


@keyframes float{

50%{
transform:translateY(-15px);
}

}


#invitation h1{
font-family:'Cinzel',serif;
font-size:45px;
color:#8b1e2d;
}



.card{

background:#fffaf3;
margin:25px auto;
padding:25px;
max-width:360px;
border-radius:25px;
border:1px solid #d9b27c;
box-shadow:0 10px 30px rgba(80,30,20,.15);

}



#timer{
display:flex;
justify-content:center;
gap:12px;
flex-wrap:wrap;
}



#timer div{

background:#8b1e2d;
color:white;
padding:18px;
border-radius:20px;

}


#timer span{

display:block;
font-size:30px;

}



.dua{

margin:40px auto;
font-size:16px;

}



.whatsapp{

display:inline-block;
padding:14px 35px;
background:#8b1e2d;
color:white;
text-decoration:none;
border-radius:40px;

}