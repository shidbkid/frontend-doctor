// import React, { useState, useCallback } from "react";
// import videojs from "video.js";

// interface Note {
//   timestamp: number;
//   note: string;
//   important: boolean;
// }

// interface NotesProps {
//   onAddNote: (timestamp: number) => void;
//   seekToTimestamp: (timestamp: number) => void;
//   notes: Note[];
//   setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
// }

// const Notes: React.FC<NotesProps> = ({ onAddNote, seekToTimestamp, notes, setNotes }) => {
//   const [currentNote, setCurrentNote] = useState<string>("");
//   const [editingIndex, setEditingIndex] = useState<number | null>(null);

//   const handleAddNote = useCallback(() => {
//     const videoPlayer = document.querySelector<HTMLVideoElement>(".video-js");
//     const player = videoPlayer ? videojs(videoPlayer) : null;
//     const currentTime = player?.currentTime() || 0;

//     if (!currentNote.trim()) return;
//     if (!Number.isFinite(currentTime)) {
//       console.error("Invalid timestamp:", currentTime);
//       return;
//     }

//     if (editingIndex !== null) {
//       setNotes((prevNotes) =>
//         prevNotes.map((note, i) =>
//           i === editingIndex ? { ...note, note: currentNote } : note
//         )
//       );
//       setEditingIndex(null);
//     } else {
//       setNotes((prevNotes) => [
//         ...prevNotes,
//         { timestamp: currentTime, note: currentNote, important: false },
//       ]);
//     }

//     setCurrentNote("");
//   }, [currentNote, editingIndex, setNotes]);

//   const markImportant = (index: number) => {
//     setNotes((prevNotes) =>
//       prevNotes.map((note, i) =>
//         i === index ? { ...note, important: !note.important } : note
//       )
//     );
//   };

//   const deleteNote = (index: number) => {
//     setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
//   };

//   const editNote = (index: number) => {
//     setCurrentNote(notes[index].note);
//     setEditingIndex(index);
//   };

//   return (
//     <div className="mt-8 bg-gray-100 p-4 rounded-lg shadow-md">
//       <h2 className="text-lg font-bold mb-4">Notes</h2>
//       <textarea
//         className="w-full p-2 border rounded-md"
//         rows={3}
//         placeholder="Write your notes here..."
//         value={currentNote}
//         onChange={(e) => setCurrentNote(e.target.value)}
//       ></textarea>
//       <button
//         onClick={handleAddNote}
//         className="mt-4 bg-hospitalBlue text-white px-4 py-2 rounded-md hover:bg-blue-600"
//       >
//         {editingIndex !== null ? "Update Note" : "Add Note"}
//       </button>

//       <div className="mt-4 space-y-2 overflow-y-auto" style={{ maxHeight: "200px" }}>
//         <ul>
//           {notes.map((note, index) => (
//             <li
//               key={index}
//               className={`p-2 bg-white rounded-md shadow-sm text-gray-800 ${
//                 note.important ? "border-l-4 border-yellow-500" : ""
//               }`}
//             >
//               <span
//                 onClick={() => seekToTimestamp(note.timestamp)}
//                 className="cursor-pointer text-blue-500 hover:underline"
//               >
//                 {Number.isFinite(note.timestamp)
//                   ? new Date(note.timestamp * 1000).toISOString().substr(11, 8)
//                   : "Invalid Timestamp"}
//               </span>
//               : {note.note}
//               <div className="flex gap-2 mt-2">
//                 <button
//                   onClick={() => editNote(index)}
//                   className="text-sm text-blue-500 hover:underline"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => deleteNote(index)}
//                   className="text-sm text-red-500 hover:underline"
//                 >
//                   Delete
//                 </button>
//                 <button
//                   onClick={() => markImportant(index)}
//                   className="text-sm text-yellow-500 hover:underline"
//                 >
//                   {note.important ? "Unmark" : "Mark Important"}
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default React.memo(Notes);
