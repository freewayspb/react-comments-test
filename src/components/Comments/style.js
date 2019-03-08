import styled from "styled-components";

const CommentsWrapper = styled.div`
  background: #f7f7f7;
  padding: 30px 0;
  font-family: Open Sans,'Helvetica Neue', Helvetica,sans-serif;
`;

const ShowMore = styled.button`
  background: transparent;
  border: 5px solid #29db99;
  border-radius: 100%;
  font-size: 1rem;
  color: #29db99;
  cursor: pointer;
  display: block;
  width: 11rem;
  height: 11rem;
  margin: 0 auto;
  &:hover {
    background-color: #29db99;
    color: #f7f7f7;
  }
  &:focus, &:active {
    outline: none;
  }
  &:disabled {
    background-color: #f7f7f7;
    border-color: #cbcbcb;
    color: #cbcbcb;
    cursor: not-allowed;
  }
`;

const Comments = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export { Comments, CommentsWrapper, ShowMore };
