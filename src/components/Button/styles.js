import styled, {css} from "styled-components";

export const ButtonContainer = styled.button`
background: #565656;
border-radius: 22px;
position: relative;
cursor: pointer;
border-style: none;
margin: 0px 8px;
color: #FFFF;
padding: 4px 24px;
min-width: 120px;
width: 100%;
${({variant}) => variant  !== "primary" && css`
min-width: 167px;
height: 33px;

background: #E4105D;
&::after {
   content: '',
   position: absolute;
   border: 1px solid #E4105D;
top: -5px;
left: -6px;
width: calc(100% + 10px);
height: calc(100% - 10px);
border-radius: 22px;
}
&:hover{
   opacity: 0.6;
   cursor: pointer;
}

`}

`