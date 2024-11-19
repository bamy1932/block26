/* eslint-disable react/prop-types */

export default function SelectedContact({ contact, setSelectedContactId }) {
  return (
    <>
      <h2>Selected Contact info:</h2>
      <p>name: {contact.name}</p>
      <p>email: {contact.email}</p>
      <p>username: {contact.username}</p>
      <button onClick={() => setSelectedContactId(null)}>Back</button>
    </>
  );
}
