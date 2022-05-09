import ReactDOM from "react-dom";
import Navbar from "./Components.js/Navar";
import Stories from "./Components.js/Story";
import Stoes from "./Components.js/Sugestao";
import UserSidebar from "./Components.js/UserS";
import FundoMobile from "./Components.js/Fundomobile";
import PostFeed from "./Components.js/Posts";
export default function App(){
    return(
     <div class="root"> 
          <Navbar/>
         <div class="corpo">
            <div class="esquerda">
                    <div class="stories">
                        <Stories/> 
                        <Setinha/>
                    </div>
                    <div class="posts">
                    <PostFeed/>
                    </div>
            </div>
            <div class="sidebar">
            <UserSidebar/>
                <div class="sugestoes">
                    <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                   </div>
                    <Stoes />
                    <Links/>
                    <CopyRigth/>            
                </div>
          </div>
           
        </div>
        <FundoMobile/>
    </div>
     
    );
}
function Setinha() {
    return (
        <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    )
  }
function Links(){
    return(
        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
    );
}
function CopyRigth(){
    return(
        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));