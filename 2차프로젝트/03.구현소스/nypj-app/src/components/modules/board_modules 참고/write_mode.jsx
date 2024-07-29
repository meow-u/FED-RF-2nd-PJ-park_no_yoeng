
/****************************************** 
        쓰기 모드 서브 컴포넌트
******************************************/
export const WriteMode = ({ sts }) => {
    // sts - 로그인 상태정보
    // 로그인한 사람만 글쓰기 가능!
    // console.log(sts);
  
    return (
      <>
        <table className="data-table-view readone">
          <caption>OPINION : Write</caption>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input
                  type="text"
                  className="name"
                  size="20"
                  readOnly
                  // 로그인한 사람이름
                  value={sts.unm}
                />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type="text"
                  className="email"
                  size="40"
                  readOnly
                  // 로그인한 사람이메일
                  value={sts.eml}
                />
              </td>
            </tr>
            <tr>
              <td>Title</td>
              <td>
                <input type="text" className="subject" size="60" />
              </td>
            </tr>
            <tr>
              <td>Content</td>
              <td>
                <textarea className="content" cols="60" rows="10"></textarea>
              </td>
            </tr>
            <tr>
              <td>Attachment</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }; ///////////// WriteMode //////////////////
  