/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
export default function ContactRow({ setSelectedContactId, contact }) {
  return (
    <tr onClick={() => setSelectedContactId(contact)}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
