async function data(){
    const res= await fetch("https://fedeperin-harry-potter-api-en.herokuapp.com/characters/" );
    

    var data = await res.json();
    console.log(data)
    for (var i=0;i<data.length;i++)
    {
        var option= new Option (data[i].character,data[i].image);
        const select = document.querySelector('select'); 
        select.add(option);
    
    }
    
   
}
data();

function change(){
    const select = document.querySelector('select').value; 
    document.getElementById("img").src=select;
}



