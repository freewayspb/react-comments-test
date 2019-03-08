import styled from "styled-components";

const CommentBody = styled.div`
  margin: 2rem 0;
  display: flex;
`;

const CommentImage = styled.img`
  width: 14rem;
  height: 14rem;
  margin-right: 2.5rem;
  display: inline-block;
`;

const Counter = styled.span`
  margin-right: 1rem;
`;

const CommentFooter = styled.div`
  margin-top: 2rem;
  .svg-inline--fa {
    color: #cbcbcb;
  }
`;

const CommentContent = styled.div`
  color: #686868;
`;

const CommentWrapper = styled.li`
  background: #fff;
  color: #686868;
  margin: 0 30px 32px 30px;
  padding: 30px;
  font-size: 1em;
`;

const CommentTitle = styled.h3`
    color: #686868;
    margin-top: 40px;
    font-size: 1.75rem;
    font-weight: 400;
    line-height: 2rem;
    margin-bottom: 10px;
    display: inline-block;
    margin-right: 2rem;
`;

export { CommentImage, CommentBody, CommentContent, CommentFooter, CommentTitle, CommentWrapper, Counter };
