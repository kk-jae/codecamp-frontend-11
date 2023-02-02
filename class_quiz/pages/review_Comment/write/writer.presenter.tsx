export default function CommentWriterUIPage(props) {
  return (
    <div>
      <div>
        작성자 : <input onChange={props.onChangeWriter} />
      </div>
      <div>
        비밀번호 : <input onChange={props.onChangePassword} />
      </div>
      <div>
        내용 : <input onChange={props.onChangeContents} />
      </div>
      <div>
        별점 : <input onChange={props.onChangeRating} />
      </div>
      <button onClick={props.onClickCreateBoardComment}>댓글 등록하기</button>
    </div>
  );
}
