export default function Stoes(){
const sugestoes = [
    {usuario:"catanacomics",razao:"Catana",image:"assets/img/catanacomics.svg"},
    {usuario:"bad.vibes.memes",razao:"Segue você",image:"assets/img/bad.vibes.memes.svg"},
    {usuario:"chibirdart",razao:"Segue você",image:"assets/img/chibirdart.svg"},
    {usuario:"razoesparaacreditar",razao:"Novo no Instagram",image:"assets/img/razoesparaacreditar.svg"},
    {usuario:"adorable_animals",razao:"Segue você",image:"assets/img/adorable_animals.svg"},
    {usuario:"smallcutecats",razao:"Segue você",image:"assets/img/smallcutecats.svg"},
];
return(
    sugestoes.map(a=><Sugestao image={a.image} usuario={a.usuario} razao={a.razao}/>)

)
}
function Sugestao(props){
return(
<div class="sugestao">
<div class="usuario">
  <img src={props.image} />
  <div class="texto">
    <div class="nome">{props.usuario}</div>
    <div class="razao">{props.razao}</div>
  </div>
</div>

<div class="seguir">Seguir</div>
</div>
)
}