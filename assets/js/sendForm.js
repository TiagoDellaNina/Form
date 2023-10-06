//turn the form box hidden
function formWindowHidder(){
    let formWindow = document.querySelector('#form');
    formWindow.style.display = 'none';
}
//turn de quest box hidden
function questBoxHidder(){
    let questBox = document.querySelector('#quest-box');
    let buttonBox = document.querySelector('#down-box');
    if(questBox.style.display === 'flex'){
        questBox.style.display = 'none';
        buttonBox.style.display = 'none';
    } else {
        questBox.style.display = 'flex';
        buttonBox.style.display = 'flex';
    }
}
function resultBoxHidder(){
    let questBox = document.querySelector('#quest-result');
    let buttonBox = document.querySelector('#down-box-result');

    if(questBox.style.display === 'block'){
        questBox.style.display = 'none';
        buttonBox.style.display = 'none';
    } else {
        questBox.style.display = 'flex';
        buttonBox.style.display = 'flex';
    }
}



//emailFormatValidadion
function emailValidationTest(userEmailValue){
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailRegex.test(userEmailValue)){
        return true;
    } else {
        return false;
    }    
}
//number imput format placeholder
function formatarTelefone(input) {
    // Remove any non-numeric characters from the field's value
    phoneNumber = input.value.replace(/\D/g, '');
  
    if (phoneNumber.length <= 2) {
        // Insert parentheses only
      input.value = '(' + phoneNumber;
    } else if (phoneNumber.length <= 7) {
        // Insert parentheses and space after the area code
      input.value = '(' + phoneNumber.substring(0, 2) + ') ' + phoneNumber.substring(2);
    } else if (phoneNumber.length <= 10) {
        // Insert parentheses, space, and hyphen after the area code
      input.value = '(' + phoneNumber.substring(0, 2) + ') ' + phoneNumber.substring(2, 7) + '-' + phoneNumber.substring(7);
    } else if (phoneNumber.length <= 11) {
        // Insert parentheses, space, hyphen, and the last digit after the area code
      input.value = '(' + phoneNumber.substring(0, 2) + ') ' + phoneNumber.substring(2, 7) + '-' + phoneNumber.substring(7, 11);
    } else {
        // Limit the number to 11 characters (maximum for a phone number)
      input.value = '(' + phoneNumber.substring(0, 2) + ') ' + phoneNumber.substring(2, 7) + '-' + phoneNumber.substring(7, 11);
    }
}


//phone validaton
function phoneNumberValidation(phoneNumber){
    if (phoneNumber.length > 9){
        return true;
    } else {
        return false;
    }
}

//take value from de form input
let userNameValue;
let userEmailValue;
let phoneNumber;
function takeNameEmail(){
    let userName = document.querySelector('#name');
    let userEmail = document.querySelector('#email');
    //get the values of inputs and validate them
    if (emailValidationTest(userEmail.value) && phoneNumberValidation(phoneNumber)){
        console.log('te valído meu bom')
        userNameValue = userName.value;
        userEmailValue = userEmail.value;
        formWindowHidder();
        questBoxHidder();
        console.log(userNameValue);
        console.log(userEmailValue);
    } else {
        console.log('Num vale é nada meu cumpadi')
    }

}
function formSubmit(){
    let form = document.querySelector('#form-quest');
    form.submit();
}
//fortest
//formWindowHidder();
//questBoxHidder();