import React from "react";


export default function PostFeed() {
  const posts = [
        { nome: 'meowed', img: 'assets/img/gato-telefone.svg', curtido: 'respondeai', curtidas: '101.523' },
        { nome: 'barked', img: 'assets/img/dog.svg', curtido: 'adorable_animals', curtidas: '99.159' }
    ];
    return(
        posts.map(a=> <Post nome={a.nome} img={a.img} curtido={a.curtido} curtidas={a.curtidas} />)
    )
}

function Post(props){
    const [valor,setLike]=React.useState(<ion-icon name="heart-outline" onClick={Like} ></ion-icon>)
    let Clicked=false;

    function Like(){
        if(Clicked){
            setLike(<ion-icon name="heart-outline" onClick={Like}></ion-icon>)
            Clicked=false;
        }else{
            setLike(<ion-icon name="heart" id="red" onClick={Like}></ion-icon>)
            Clicked=true;
        }
    }

    function Likecontent(){
        if(Clicked){
            setLike(<ion-icon name="heart-outline" onClick={Like}></ion-icon>)
            Clicked=false;
        }else{
            setLike(<ion-icon name="heart" id="red" onClick={Like}></ion-icon>)
            Clicked=true;
        }
    }

    return(
        <div class="post">
        <div class="topo">
            <div class="usuario">
                <img src= {`assets/img/${props.nome}.svg`}/>
                
                {props.nome}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div class="conteudo" >
            <img src={props.img} onClick={Likecontent}/>
        </div>

        <div class="fundo">
            <div class="acoes">
                <div >
                    {valor}
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src= {`assets/img/${props.curtido}.svg`} />
                <div class="texto">
                    Curtido por <strong>{props.curtido}</strong> e <strong>outras {props.curtidas} pessoas</strong>
                </div>
            </div>
        </div>
    </div>

    )

}

