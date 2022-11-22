import { MdEmail, MdLock } from "react-icons/md"
import Button from "../../components/Button/Button"
import Header from "../../components/Header/Header"
import  Input  from "../../components/Input/Input"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {api} from "../../services/api"
import {  Column, Container, CriarText, EsqueciText, Row,  SubTitleLogin, Title, TitleLogin, Wrapper,  } from "./styles"
import { IFormData } from "./types"


const schema = yup.object({
  email: yup.string() .email("email nao é válido") .required("Campo Obrigatório"),
  password: yup.string().min(3, "3 caracteres no mínimo").required("Campo Obrigatório"),
}).required();

const Login = () => {
  const navigate = useNavigate(); 

  const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData: IFormData) => {
    try{
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
      if(data.lenght == 1){
        navigate("/feed")
    }else {
      alert("Email ou senha invalidos")
    }
  }
    catch{
      alert("Hovue um erro, tente novamente")
    }
  }

  const handleClickSignIn = () => {
    navigate("/feed")
  }

  return (
    <>
        <Header />
        <Container>
          <Column >
            <Title> 
              A plataforma para voce aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
          </Column>
          <Column>
            <Wrapper>
              <TitleLogin>Faça seu cadastro</TitleLogin>
              <SubTitleLogin>Faça seu login e make the change_</SubTitleLogin>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail"  leftIcon={<MdEmail />} />
                <Input name="password" errorMessage={errors?.password?.message} control={control}type="password" placeholder="Senha" leftIcon={<MdLock />} />
                <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} type="submit" />
              </form>
              <Row>
                <EsqueciText>Esqueci minha senha</EsqueciText>
                <CriarText>Criar</CriarText>
              </Row>
            </Wrapper>
          </Column>
        </Container>
    </>
  )
}

export default Login