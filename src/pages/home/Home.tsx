import Button from "../../components/Button/Button"
import Header from "../../components/Header/Header"
import  BannerImg  from "../../pages/banner.png"
import { Container, TextContent, Title, TitleHighLight} from "./styles"
import { useNavigate } from "react-router-dom"

const home = () => {

    const navigate = useNavigate(); 

    const handleClickSignIn = () => {
      navigate("/login")
    }
    
    console.log("renderizou")
  return (
    <>
        <Header />
        <Container>
          <div>
            <Title> 
              <TitleHighLight>
                Implemente
                <br />
              </TitleHighLight>
              O seu futuro global agora!
            </Title>
            <TextContent>
              Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
            </TextContent>
            <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn}/>
          </div>
          <div>
            <img src={BannerImg} alt="imagem principal" />
          </div>
        </Container>
      
    </>
  )
}

export default home