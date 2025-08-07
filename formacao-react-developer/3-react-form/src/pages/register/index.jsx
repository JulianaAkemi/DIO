import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

import { useForm } from "react-hook-form";

import {
  Container,
  Title,
  Column,
  TitleLogin,
  SubtitleLogin,
  Row,
  Wrapper,
} from "./styles";
import { LoginLinkText, LoginText } from "./styles";

const Register = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.post(`/users`, formData);

      if (data) {
        navigate("/feed");
        return;
      }

      alert("Nome, email ou senha inválido");
    } catch (e) {
      alert("Erro no servidor, tente novamente", e.message);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>

        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>

            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="Nome completo"
                leftIcon={<MdPerson />}
                name="nome"
                control={control}
              />

              {errors.nome && <span>Nome completo é obrigatório</span>}

              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                control={control}
              />

              {errors.email && <span>E-mail é obrigatório</span>}

              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="senha"
                control={control}
              />

              {errors.senha && <span>Senha é obrigatório</span>}

              <Button title="Entrar" variant="secondary" type="submit" />
            </form>

            <Row>
              <SubtitleLogin>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </SubtitleLogin>
            </Row>

            <Row>
              <LoginText>Já tenho conta</LoginText>

              <a href="/login">
                <LoginLinkText>Fazer login</LoginLinkText>
              </a>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Register };
