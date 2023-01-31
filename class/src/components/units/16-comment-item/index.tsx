import { useState } from "react";

// ======================첫번째 el===========================
export default function CommentItem(props: any): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = (): void => {
    setIsEdit(true);
  };

  return (
    <div>
      {!isEdit ? (
        <div key={props.el._id}>
          <span style={{ margin: "10px" }}>{props.el.title}</span>
          <span style={{ margin: "10px" }}>{props.el.writer}</span>
          <button onClick={onClickEdit}>수정하기</button>
        </div>
      ) : (
        <input type="text" key={props.el._id} />
      )}
    </div>
  );
}
// ======================첫번째 el===========================

// // ======================두번째 el===========================
// export default function CommentItem(props: any): JSX.Element {
//   const [isEdit, setIsEdit] = useState(false);

//   const onClickEdit = (): void => {
//     setIsEdit(true);
//   };

//   return (
//     <div>
//       {!isEdit ? (
//         <div key={props.el._id}>
//           <span style={{ margin: "10px" }}>{props.el.title}</span>
//           <span style={{ margin: "10px" }}>{props.el.writer}</span>
//           <button onClick={onClickEdit}>수정하기</button>
//         </div>
//       ) : (
//         <input type="text" key={props.el._id} />
//         )}
//     </div>
//   );
// }
// // ======================두번째 el===========================

// // ======================세번째 el===========================
// export default function CommentItem(props: any): JSX.Element {
//   const [isEdit, setIsEdit] = useState(false);

//   const onClickEdit = (): void => {
//     setIsEdit(true);
//   };

//   return (
//     <div>
//       {!isEdit ? (
//         <div key={props.el._id}>
//           <span style={{ margin: "10px" }}>{props.el.title}</span>
//           <span style={{ margin: "10px" }}>{props.el.writer}</span>
//           <button onClick={onClickEdit}>수정하기</button>
//         </div>
//       ) : (
//         <input type="text" key={props.el._id} />
//         )}
//     </div>
//   );
// }
// // ======================세번째 el===========================

// // ======================네번째 el===========================
// export default function CommentItem(props: any): JSX.Element {
//   const [isEdit, setIsEdit] = useState(false);

//   const onClickEdit = (): void => {
//     setIsEdit(true);
//   };

//   return (
//     <div>
//       {!isEdit ? (
//         <div key={props.el._id}>
//           <span style={{ margin: "10px" }}>{props.el.title}</span>
//           <span style={{ margin: "10px" }}>{props.el.writer}</span>
//           <button onClick={onClickEdit}>수정하기</button>
//         </div>
//       ) : (
//         <input type="text" key={props.el._id} />
//         )}
//     </div>
//   );
// }
// // ======================네번째 el===========================
