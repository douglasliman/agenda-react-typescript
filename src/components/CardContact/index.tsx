import { FC } from "react";
import S from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../routes/paths";
import { useContactService } from "../../services/contact";

type Base64 = string
interface CardContactProp {
  name: string;
  tel?: string;
  email: string
  photo?: Base64;
  role?: string;
  id: string;
}

const CardContact: FC<CardContactProp> = (props) => {
  const navigate = useNavigate()
  const { getContactDetails } = useContactService()



  const PHOTO_URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReKnVPtfxhTa8kzheWyIFCpOcByzNcVp_dxw&usqp=CAU';
  const { id, name, photo = PHOTO_URL, tel } = props;

  const { deleteContactService } = useContactService();

  const handleDelete = async () => {

    deleteContactService({ idContato: id }).then(() => {
      location.reload()
    })
  };

  function handleClick() {
    getContactDetails(id)
    navigate(`${PATHS.details}/${id}`)
  }

  return (
    <button className={S.cardButton}
    >
      <div className={S.photoContainer}>
        <img src={`data: image/png;base64,${photo}`} />
      </div>
      <div className={S.dataContainer}
        onClick={handleClick}

      >
        <h2>{name}</h2>
        <p>tel: {tel}</p>
      </div>
      <p onClick={handleDelete}>Deletar</p>
    </button>
  );
};

export { CardContact };