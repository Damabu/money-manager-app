import styled from 'styled-components';

export const PrincipalContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 5px;
  position: relative;
`;

export const NavBar = styled.div`
  width: 1076px;
  height: 58px;
  background-color: #343a40;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding-left: 36px;

  ul {
    display: flex;
    align-items: center;
    gap: 20px;
    list-style: none;

    .active {
      color: rgba(255, 255, 255, 0.5);
    }

    li {
      a {
        text-decoration: none;
        color: white;
      }
    }
  }
`;

export const FormComponentcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
  width: 600px;

  padding: 15px 12px;
  border-radius: 6px;
`;

export const ExpenseForm = styled.div`
  height: 100%;

  label {
    color: rgba(255, 255, 255, 0.8);
  }

  input {
    height: 61px;
    color: white;
    background-color: transparent;
    border-radius: 6px;
    border: 1px solid white;
    outline: none;
    padding: 0 10px;
    font-size: 16px;
  }

  select {
    height: 61px;
    color: white;
    background-color: transparent;
    border-radius: 6px;
    border: 1px solid white;
    outline: none;
    padding: 0 10px;
    font-size: 16px;
  }

  button {
    height: 61px;

    color: white;

    background-color: #343a40;
    border-radius: 6px;
    border: 1px solid white;
    outline: none;
    padding: 0 10px;
    font-size: 16px;
    cursor: pointer;
  }
`;

export const TweetList = styled.div`
  width: 100%;
  color: white;
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
`;

export const UserContainer = styled.div`
  border: 1px solid white;
  width: 600px;

  border: none;
  margin-top: 30px;
  color: white;

  h1 {
    margin-bottom: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
      color: rgba(255, 255, 255, 0.8);
      margin-top: 10px;
    }

    input {
      height: 50px;
      color: white;
      background-color: transparent;
      border-radius: 6px;
      border: 1px solid white;
      outline: none;
      padding: 0 10px;
      font-size: 16px;
    }

    select {
      height: 50px;
      color: white;
      background-color: transparent;
      border-radius: 6px;
      border: 1px solid white;
      outline: none;
      padding: 0 10px;
      font-size: 16px;

      option {
        color: black;
      }
    }
  }

  button {
    height: 50px;
    color: white;
    background-color: #343a40;
    border-radius: 6px;
    border: 1px solid white;

    outline: none;
    padding: 0 10px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
  }

  .choose {
    margin-bottom: 20px;
  }

  .expense {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
    border: 1px solid white;
    border-radius: 6px;
  }
`;
