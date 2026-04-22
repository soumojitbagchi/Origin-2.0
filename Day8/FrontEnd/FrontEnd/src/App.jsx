import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Remarks, setRemarks] = useState("");
  const [Notes, setNotes] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/api/notes").then((res) => {
      //change the api call site when wew use render.com because when we deploy our site to the render our website will cahnge
      console.log(res.data.note);
      setNotes(res.data.note);
    });
  }, []);

  const deleteNode = (idx, id) => {
    axios
      .delete(`https://day-8-zqdh.onrender.com/api/notes/${id}`)
      .then(() => {
        console.log(`note ${id} deleted successfully`);
        setNotes(Notes.filter((note) => note._id !== id));
      })
    };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newNote = {
      title: Title,
      description: Description,
      remarks: Remarks,
    };

    axios.post("https://day-8-zqdh.onrender.com/api/notes", newNote).then(() => {
      console.log("data send sucessfully");
      setNotes([...Notes, newNote]);
      setTitle("");
      setDescription("");
      setRemarks("");
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter title"
          value={Title}
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="enter description"
          value={Description}
          required
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="remarks"
          
          value={Remarks}
          onChange={(e) => {
            setRemarks(e.target.value);
          }}
        />
        <button type="submit">create node</button>
      </form>
      <div className="notes">
        {Notes.map((e, idx) => {
          return (
            <div className="note" key={idx}>
              <h1>{e.title}</h1>
              <p>{e.description}</p>
              <p>{e.remarks}</p>
              <p>{e._id}</p>
              <button onClick={() => deleteNode(idx, e._id)}>
                delete node
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;

// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [Title, setTitle] = useState("");
//   const [Description, setDescription] = useState("");
//   const [Remarks, setRemarks] = useState("");
//   const [Notes, setNotes] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3000/api/notes").then((res) => {
//    //change the api call site when wew use render.com because when we deploy our site to the render our website will cahnge
//       console.log(res.data.note);
//       setNotes(res.data.note);
//     });
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newNote = {
//       title: Title,
//       description: Description,
//       remarks: Remarks
//     };

//     axios.post("http://localhost:3000/api/notes", newNote).then((res) => {
//       console.log('data send sucessfully');
//       setNotes([...Notes, newNote]);
//       setTitle("");
//       setDescription("");
//       setRemarks("");
//     });
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="enter title"
//           value={Title}
//           onChange={(e) => {
//             setTitle(e.target.value);
//           }}
//         />
//         <input
//           type="text"
//           placeholder="enter description"
//           value={Description}
//           onChange={(e) => {
//             setDescription(e.target.value);
//           }}
//         />
//         <input
//           type="text"
//           placeholder="remarks"
//           value={Remarks}
//           onChange={(e) => {
//             setRemarks(e.target.value);
//           }}
//         />
//         <button type="submit">
//           create node
//         </button>
//       </form>
//       <div className="notes">
//         {Notes.map((e, idx) => {
//           return (
//             <div className="note" key={idx}>
//               <h1>{e.title}</h1>
//               <p>{e.description}</p>
//               {e.remarks && <p><i>{e.remarks}</i></p>}
//               <button>
//                 delete node
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default App;
