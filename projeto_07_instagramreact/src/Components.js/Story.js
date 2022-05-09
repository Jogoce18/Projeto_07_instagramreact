export default function Stories(){
 const stories = [
  {usuario:"9gag", image:"assets/img/9gag.svg"}
  ,{usuario:"meowed",image:"assets/img/meowed.svg"},{usuario:"barked",image:"assets/img/barked.svg"},{usuario:"nathanwpylestrangeplanet",image:"assets/img/nathanwpylestrangeplanet.svg"},
  {usuario:"wawawicomics",image:"assets/img/wawawicomics.svg"},{usuario:"respondeai",image:"assets/img/respondeai.svg"},{usuario:"filomoderna",image:"assets/img/filomoderna.svg"},{usuario:"memeriagourmet",image:"assets/img/memeriagourmet.svg"}
];
return (
  stories.map(a=><Story image={a.image} usuario={a.usuario}/>)
);
}

function Story(props){
    return(
        <div class="story">
        <div class="imagem">
          <img src={props.image}/>
        </div>
        <div class="usuario">
        {props.usuario}
        </div>
      </div>
    );
}
