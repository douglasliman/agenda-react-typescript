import { FC } from "react";
import { Button, Input, InputTel } from "../../components";
import { Title } from "../../components/Title";
import { useContactAdd } from "./useContactAdd";
import S from "./style.module.css";
import { PATHS } from "../../routes/paths";
import { Contact } from "../../typing";

interface ContactAddProps {
  isEdit?: boolean;
  onClose?: () => void;
  onAdd?: (contact: Contact) => void
}

const ContactAdd: FC<ContactAddProps> = ({ isEdit = false, onClose, onAdd }) => {
  const { handleOnSubmit } = useContactAdd(isEdit, onAdd);

  return (
    <div className={S.novoContato}>
    
      <div className={S.novoContatoContainer}>
        <div className={S.novoContatoContent}>
          <Title>Novo contato</Title>
          <form onSubmit={handleOnSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
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
              placeholder="email"
              required
              data-required
            />




            <select name="telefone1-tipo">
              <option value="casa">Casa</option>
              <option value="trabalho">Trabalho</option>
              <option value="celular">Celular</option>
            </select>

            <InputTel
              name="telefone1-numero"
              placeholder="Número do telefone"
              required
              data-required
            />

            {/* <select name="telefone2-tipo">
              <option value="casa">Casa</option>
              <option value="trabalho">Trabalho</option>
              <option value="celular">Celular</option>
            </select>

            <InputTel
              name="telefone2-numero"
              placeholder="Número do telefone"
              required
              data-required
            />

            <select name="telefone3-tipo">
              <option value="casa">Casa</option>
              <option value="trabalho">Trabalho</option>
              <option value="celular">Celular</option>
            </select>

            <InputTel
              name="telefone3-numero"
              placeholder="Número do telefone"
              required
              data-required
            /> */}

            <Button path={PATHS.contacts}>Cadastrar</Button>
            <Button onClick={onClose}>Sair</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { ContactAdd }