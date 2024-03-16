import { Contact } from "../../typing";
import { useService } from "../../utils/useService";
import { ErrorResponse, GetContactSuccess } from "./types/response";

export const useContactService = () => {
  const { get, post, del, patch } = useService();

  const getContactService = async (): Promise<
    GetContactSuccess & ErrorResponse
  > => {
    const response = await get<GetContactSuccess & ErrorResponse>(
      "http://localhost:5000/v1/contact"
    );
    return response.data;
  };

  const getContactDetails = async (id: string): Promise<
    GetContactSuccess & ErrorResponse
  > => {
    console.log(` http://localhost:5000/v1/contact/${id}`)
    const response = await get<GetContactSuccess & ErrorResponse>(
      ` http://localhost:5000/v1/contact/${id}`
    );
    return response.data;
  };

  const postContactService = async (contact: Contact) => {
    const response = await post<Contact>(
      "http://localhost:5000/v1/contact",
      contact
    );
    return (response.data as unknown as { data: Contact }).data;
  };

  const patchContactService = async (contact: Contact) => {
    const response = await patch<Contact>(
      "http://localhost:5000/v1/contact",
      contact
    );
    return response.data;
  };

  const deleteContactService = async (id: { idContato: string }) => {
    const response = await del<{ idContato: string }>(
      "http://localhost:5000/v1/contact",
      id
    );
    return response.data;
  };



  return {
    getContactService,
    postContactService,
    getContactDetails,
    deleteContactService,
    patchContactService
  };

};
