export default function CommentListUIPage(props) {
  return (
    <>
      <div>댓글 목록</div>
      {props.data?.fetchBoardComments.map((el, index) =>
        props.myIndex !== index ? (
          <div key={el._id}>
            <div>======댓글 {index + 1}번째 시작======</div>
            <div>작성자 : {el.writer}</div>
            <div>내용 : {el.contents}</div>
            <div>별점 : {el.rating}</div>
            <div>
              <button id={el._id} onClick={props.onClickDeleteBoardComment}>
                삭제하기
              </button>
              <button
                onClick={props.onClickSelectUpdateCreateBoardComment}
                id={String(index)}
                key={el.id}
              >
                수정하기
              </button>
            </div>
            <div>======댓글 {index + 1}번째 종료======</div>
          </div>
        ) : (
          <div key={el._id}>
            <div>
              작성자 :<input value={el.writer} readOnly={true} />
            </div>
            <div>
              내용 :
              <input
                defaultValue={el.contents}
                onChange={props.onChangEditContents}
              />
            </div>
            <div>
              별점 :
              <input
                defaultValue={el.rating}
                onChange={props.onChangeEditRating}
              />
            </div>
            <button onClick={props.onClickUpdateCreateBoardComment} id={el._id}>
              수정하기
            </button>
            <button onClick={props.UpdateCancel}>취소하기</button>
          </div>
        )
      )}
    </>
  );
}
