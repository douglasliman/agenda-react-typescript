import { Button, Title } from "../../components";
import { CardContact } from "../../components/CardContact";
import { useContact } from "./useContact";
import S from "./style.module.css";
import { ContactAdd } from "../ContactAdd";
import { PATHS } from "../../routes/paths";

const Contact = () => {
  const { contacts, openModal, open, onAdd } = useContact();



  return (
    <>
      <div className={S.containerCards}>
        <Title>
          Contatos{" "}
          <Button onClick={openModal} type="link">
            Criar um contato
          </Button>
          <Button type="link" path={PATHS.login}>Sair</Button>
          {open && <ContactAdd onClose={openModal} onAdd={onAdd} />}

        </Title>

        <div className={S.cardContainer}>
      
          {contacts.map((contact, index) => {

            return (
              <CardContact
                key={index}
                photo={contact.foto}
                name={contact.nome}
                tel={contact.telefones[0]?.numero || contact.email}
                email={contact.email}
                id={contact.id!} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export { Contact };