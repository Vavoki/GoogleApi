const css = `
  a[href*="https://maps.google.com/maps"] {
    display: none !important;
  }
  * {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 13px;
  }
  
  #labelChangeTypeSchool {
    width: 50%;
    min-height: 300px;
    max-height: 300px;
    max-width: 600px;
    min-width: 300px;
    border-radius: 4px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 8px;
    z-index: 0;
    position: absolute;
    left: 290px;
    top: 100px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .title-select-main {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    margin-bottom: 20px;
  }
  .title-select-main > i {
    font-size: 40px;
    margin-right: 20px;
  }
  .title-select-main > h2 {
    margin: 0;
    font-size: 50px;
    font-weight: 500;
  }
  .containerBtnChange {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  #listSchoolsPanelIDuniqueIDMap {
    display: flex;
    flex-direction: column;
    flex:0 0 auto;
    background-color: rgb(255, 255, 255);
    width: 0;
    height: 100%;
    z-index: 3;
    overflow: hidden;
    transition: .3s ease width;
  }
  #ListKeyLeftpanel {
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    background-color: rgb(255, 255, 255);
    width: 0;
    height: 100%;
    z-index: 3;
    overflow: hidden;
    transition: .3s ease width;
  }
  #listSchoolsContainer {
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 10px;
    margin: 0 -10px;
  }

  #ListKeyLeftpanel > div {
    margin-bottom: 20px;
  }
  #ListKeyLeftpanel h3 {
    margin: 0 auto;
    text-align: center;
  }
  .desc-txt p {
    text-align: justify;
  }
  .mr-ch {
    cursor: pointer;
    max-width: 100%;
  }
  .hd-mr-ch {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .bd-mr-ch {
    width: 224px;
    height: 80px;
  }
  .bd-mr-ch > p {
    margin-bottom: 0;
    font-size: 12px;
  }
  .around-rating {
    font-size: 17px;
    width: 35px;
    height: 35px;
    line-height: 35px;
    border: 1px solid black;
    border-radius: 50%;
    text-align: center;
    margin-left: 20px;
  }
  .label-border {
    padding: 3px;
    border-radius: 2px;
    background-color: #505050;
    color: white;
    font-size: 13px;
  }
  .wrapper {
    padding: 5px 5px 0px 5px;
    width: 450px;
    height: 260px;
    overflow-y: auto;
  }
  .container-rating {
    display: flex;
    justify-content: space-between;
  }
  .container-table {
    width: 70%;
    font-size: 13px;
  }
  .container-table-result {
    width: 90%;
    font-size: 13px;
    margin-bottom: 5px;
  }
  .bottom {
    padding: 5px 0 5px 0;
  }
  .container-label {
    padding: 5px 0 5px 0;
  }
  .table-info {
    width: 100px;
    vertical-align: top;
    padding: 5px 0 0 0;
  }
  .table-info-result {
    width: 100px;
    vertical-align: top;
  }
  .table-info-description {
    width: 400px;
    vertical-align: top;
    padding: 5px 0 0 0;
  }
  .center {
    font-size: 15px;
  }
  .description-hidden {
    display: none;
  }
  .btnHeader {
    height: 23px;
    padding: 0 5px;
    margin-left: 10px;
    border-radius: 4px;
    text-align: center;
    font-weight: 600;  
    color: #fff;
  }
  .red {
    background-color: #AB005E;
  }
  .blue {
    background-color: #23B3BD;
  }
  .yellow {
    background-color: #FAD200;
  }
  .container-happinesrating {
    display: flex;
    justify-content: center;
  }
  .info-happinesrating {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 0 0 10px;
  }
  .info-contact {
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
  }
  .contact-left {
    width: 50%;
  }
  .contact-right {
    width: 50%;
    text-align: right;
  }
  .container-contact {
    display: flex;
    justify-content: space-between;
  }
  .desctiption-contact {
    display: flex;
    width: 100%;
    padding: 10px 0 0 0;
    font-size: 13px;
  }
  .info-signature {
    display: flex;
    justify-content: space-between;
    padding: 0 3px 0 3px;
    width: 75%;
    font-size: 15px;
  }
  .info-authority {
    padding: 20px 0 0 0;
  }
  .info-authority-description {
    display: block;
    font-size: 13px; 
    color: #23B3BD;
  }
  .wrapper-info{
    display: inline-block;
    padding: 0 0 0 5px;
    word-break: break-word;
  }
  .cn-key-typeschools > div {
    display:flex;
    align-items: center;
    text-align: left;
    margin-bottom: 10px;
  }
  .cn-key-typeschools > div > img {
    height: 30px;
    margin-right: 10px
  }
  .cn-key-typeschools > div > h4 {
    margin: auto 0;
  }
  .cd-cnt {
    text-align: center;
  }
  .ofstead-block {
    display: flex;
    align-items: center;
  }
  .info-ofstead {
    padding: 0 0 0 5px;
    text-align: center;
  }
  .bold {
    font-weight: 600;
  }
  .grey {
    color: grey;
  }
  .fa-star {
    font-size: 15px;
    color: gainsboro;
  }
  .fa-smile {
    font-size: 35px;
    color: #505050;
  }
  .fa-users {
    font-size: 35px;
    color: #505050;
  }
  .value {
    font-size: 15px;
  }
  .block {
    padding: 5px 0 0 0;
    display: block;
  }
  .block:nth-child(1){
    padding: 0;
  }
  .info-primary-data {
    padding: 10px 0 0 0;
    color: #23B3BD;
  }
  .description-unhidden {
    display: block;
    margin: 0;
    line-height: 1.33;
    height: 220px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .link-read-more {
    float: right;
    cursor: pointer;
  }
  .container-source {
    padding: 20px 0 0 0;
  }
  .wrapper-source {
    display: inline-block;
  }
  .info-source {
    display: block;
  }
  .data-explained {
    font-size: 15px;
  }
  .container-mapkey {
    width: 100%;
  }
  .cursor {
    cursor: pointer;
  }
  .white {
    color: #fff;
  }
  .ui.fluid.selection.dropdown.dropwdownstyle{
    display: block;
    width: 92%;
    min-width: 0;
    margin-left: 7px;
  }
  .size {
    font-size: 12px;
  }
  .size-header {
    font-size: 15px;
  }
  .sizeIcon {
    font-size: 20px;
    width: 30px;
  }
  .rightIcon {
    margin-left: 90%;
    cursor: pointer;
  }
  .rightIcon:hover {
    color: #ab175d;
  }
  .plus {
    background-color: rgba(255,255,255,1);
    border-radius: 2px;
    display: block;
    height: 29px;
    left: 0px;
    overflow: hidden;
    position: absolute;
    cursor: pointer;
    width: 29px;
    z-index: 2;
    box-sizing: border-box;
    transition: background-color 0.16s ease-out;
    left: 5px;
    border: none;
  }
  .minus {
    background-color: rgba(255,255,255,1);
    border-radius: 2px;
    display: block;
    height: 29px;
    left: 0px;
    overflow: hidden;
    position: absolute;
    cursor: pointer;
    width: 29px;
    z-index: 2;
    box-sizing: border-box;
    transition: background-color 0.16s ease-out;
    top: 35px;
    left: 5px;
    border: none;
  }
  .zoomIcon {
    opacity: 0.7;
  }
  .minus:hover  .zoomIcon{
    opacity: 1;
  }
  .plus:hover  .zoomIcon{
    opacity: 1;
  }
  td:nth-child(2) {
    padding:5px 0 0 5px;
  }
`;

const setMainStyle = DOM => {
  const style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = css;
  DOM.head.appendChild(style);
};

export { setMainStyle };
