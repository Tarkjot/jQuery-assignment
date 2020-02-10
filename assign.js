/** Creating Table at last
 */
function createTable() {
  $("#Container").append(table);
  giveLabel();
}
/** getting label from user
 */
function createLabel() {
  $("#Container >li:last-child").append(
    "<input id='inp' placeholder='Write your label here' /><button id='btn'>Add label</button>"
  );
}
/** setting label in front of form field
 */
function giveLabel() {
  createLabel();
  $("#btn").click(function() {
    $("#Container >li:last-child").prepend($("#inp").val());
    $("#inp").remove();
    $("#btn").remove();
  });
}
/** Creating Input field at last
 */
function createInput() {
  $("#Container").append(input);
  giveLabel();
}

/** Creating Text-Area at last
 */
function createTextArea() {
  $("#Container").append(textarea);
  giveLabel();
}

/** Creating Select-box at last
 */
function createSelectbox() {
  $("#Container").append(selectbox);
  giveLabel();
}
