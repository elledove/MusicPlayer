import {v4 as uuid4} from "uuid";

function chillTrax(){
    return [

        {name: "Blue Stripes",
        cover: "https://chillhop.com/wp-content/uploads/2020/05/260a909fca701bbb7593f5f8f9cff9508cca2856-1024x1024.jpg",
    artist: "j'san, Epektase",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=7916",
color:["#42B8C5", "#302170"],
active:true,
id:uuid4(),
},
{
    name:"Green Tea",
    cover: "https://chillhop.com/wp-content/uploads/2020/05/260a909fca701bbb7593f5f8f9cff9508cca2856-1024x1024.jpg",
    artist:"Eli Way",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=7944",
    color: ["#42B8C5", "#302170"],
    active:false,
    id: uuid4()
},

{
    name:"Reminisce",
    cover: "https://chillhop.com/wp-content/uploads/2020/07/82845bbc567c67101eb644ce245d8c1e232ba16b-1024x1024.jpg",
    artist:"HM Surf",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=8902",
    color: ["#E496B5", "#2832EA"],
    active:false,
    id: uuid4()

}





    ]

}

export default chillTrax;