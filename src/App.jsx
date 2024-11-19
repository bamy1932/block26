import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  // console.log(selectedContactId || 'nothing');
  return (
    <>
      {selectedContactId ? (
        <SelectedContact contact={selectedContactId} setSelectedContactId={setSelectedContactId}/>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} selectedContactId={selectedContactId} />
      )}
    </>
  );
}
