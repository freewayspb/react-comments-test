import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  display: inline-block;
  margin-right: 15px;
`;

const Online = styled.span`
    word-break: break-word;
    word-wrap: break-word;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    transition: color 0.2s ease;
    color: #686868;
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 5px;
`;

export { Online, Avatar, Header };
