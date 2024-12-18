import styled from 'styled-components';

export const HeaderContainer = styled.header`
    
    @media (max-width: 576px) {
      flex-direction: column;
      align-items: flex-start;
    }
`;

export const Logo = styled.img`
  height: 40px;
`;

export const Menu = styled.nav`
  flex: 0.8;

  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
    padding-left: 0;
    margin-top: 40px;
  }
`;

export const MenuItem = styled.li`
    margin-right: 4% !important;

    @media (max-width: 576px) {
        margin-bottom: 10px;
    }

    a {
        text-decoration: none;
        font-size: 16px;
        color: #008ABD;
        font-weight: 900;  
        margin-right: 2%;

        &:hover {
          color: #007bff !important; 
        }
    }

    a.active {
      color:rgb(0, 84, 173) !important;
    }
`;

export const UserAvatar = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background:rgb(199, 197, 197);
    cursor: pointer;

    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 100%;
    }
    @media (max-width: 576px) {
      flex-direction: column;
      align-items: flex-start;
    }
`;
