function Contacts() {
  const names = ['Asep', 'Alex', 'Bagus', 'Cika', 'Doni'];

  return (
    <ol className='contacts'>
      {names.map((name) => <li>{name}</li>)}
    </ol>
  );
}

// Menggunakan nya
{/* <button onClick={callContact}>Call Contact</button> */}