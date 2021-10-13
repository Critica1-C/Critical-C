import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  margin-bottom: 5vh;
  width: 100%;
  /* border-bottom: solid 1px rgb(80, 78, 78); */
  /* background-color: rgba(150,150,255,0.1); */
  box-shadow: 3px 3px 20px 20px rgba(0,0,0,0.1);
  padding-bottom: 2vh;
  font-size: 18px;
`;

export const NavbarTitle = styled.div`
  margin-bottom: 3rem;
  /* padding-top: 3rem; */
  width: 100%;
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;

  span{
    color: rgb(70,70,255);
  }

  p{
    display: inline;
  }
`;

export const NavbarGomFace = styled.img`
  display: inline;
  
  width: 100px;
  padding-left: 10px;
  padding-top: 10px;
  align-items: center;
`;

export const NavbarMenuItem = styled.div`
  font-weight: bold;
  font-size: 20px;
  
  :hover{
    text-shadow: 1px 1px 10px rgba(0,0,0,0.4);
    cursor: pointer;
  }
`;

export const NavbarMenuWrapper = styled.div`
  /* border-top: 5px double;
  padding-top: 15px; */
`;