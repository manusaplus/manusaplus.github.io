var welcome=document.getElementById('welcome')
var storedName=localStorage.getItem('name')
setusername=()=>{
    var x=prompt('Type your name:');
    localStorage.setItem('name',x);
    welcome.innerHTML='Selamat datang, '+x;
}, person={
    name:storedName,
    showName:function(){
        welcome.innerHTML=`Selamat datang kembali, ${this.name}`;
    }
}

if (!storedName){
    setusername();
}else{
    welcome.innerHTML='Selamat datang, '+storedName;
    person.showName();
}