export default function UserSidebar(){
    const sugestoes = [
        {usuario:"catanacomics",nome:"Catana",image:"assets/img/catanacomics.svg"},
    ];
    return(
        sugestoes.map(a=><UserS image={a.image} usuario={a.usuario} nome={a.nome}/>)
    )
    }
function UserS(props){
    return(
        <div class="usuario"> 
                <img src={props.image} />
                <div class="texto">
                    <strong>{props.usuario}</strong>
                    Catana
                </div>
            </div>
    );
}