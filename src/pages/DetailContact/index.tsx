import { useEffect, useState } from 'react';
import { useContactService } from '../../services/contact';
import { useParams } from 'react-router-dom';

const ContactDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { getContactDetails } = useContactService();
  const [contactDetails, setContactDetails] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const fetchContact = async () => {
        try {
          console.log(id)
          const response = await getContactDetails(id);
          setContactDetails(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchContact();
    }
  }, []);

  return (
    <div>
      <h1>Contact Details</h1>
      {contactDetails && (
        <div>
          {/* {contactDetails.foto} */}

          <p>Name: {contactDetails.nome}</p>
          <p>Email: {contactDetails.email}</p>


        </div>

      )}
    </div>
  );
};

export default ContactDetail;
