import { FC } from "react";
import { Button, Feedback, Input } from "../../components";
import { useSignUp } from "./useSignUp";
import S from "./style.module.css";
import { PATHS } from "../../routes/paths";

const SignUp: FC = () => {
  const {
    handleOnSubmit,
    feedback,
    isLoading,
    inputPassword,
    setInputPassword,
    inputPasswordConfirm,
    setInputPasswordConfirm,
    passwordValidations,
    passwordConfirmValidations,
    handleOnChange,
    isFormValid
  } = useSignUp();

  return (
    <>
      <div className={S.loginContainer}>
        <div className={S.contentForm}>
          <div className={S.contentLogo}>
            <a className={S.logoImg}></a>
          </div>
          <div className={S.contentFrase}>
            <h3 className={S.titleApresentacao}>
              Cadastre-se e construa pontes
            </h3>
            <p className={S.fraseApresentacao}>
              Na agenda da vida, cada contato é um elo essencial. Uma teia de conexões
              que fortalece, inspira e molda o futuro.
            </p>
          </div>
          <div className={S.contentLogin}>
            <form
              className={S.loginForm}
              onSubmit={handleOnSubmit}
              onChange={handleOnChange}
            >
              <Input
                type="text"
                name="nome"
                placeholder="Nome"
                required
                data-required
              />
              <Input
                type="text"
                name="email"
                placeholder="E-mail"
                required
                data-required
              />

              <Feedback validations={passwordValidations}>
                <Input
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  value={inputPassword}
                  onInput={setInputPassword}
                  required
                  data-required
                />
              </Feedback>

              <Feedback validations={passwordConfirmValidations}>
                <Input
                  type="password"
                  name="confirmacaoSenha"
                  placeholder="Confirme sua senha"
                  value={inputPasswordConfirm}
                  onInput={setInputPasswordConfirm}
                  required
                  data-required
                />
              </Feedback>
              <input type="file" name="foto" accept=".jpg,.jpeg,.png,.gif" />
              <Button disabled={!isFormValid || isLoading}>Cadastrar</Button>
              <span>
                {isLoading && "Aguarde..."} {feedback && feedback}
              </span>
              <p className={S.botaoSecundario}>
                Possui conta?
                <Button type="link" path={PATHS.login}>
                  Entre aqui!
                </Button>
              </p>
            </form>
          </div>
        </div>
        <div className={S.contentImg}>
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};

export { SignUp };
