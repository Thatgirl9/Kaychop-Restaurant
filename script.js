// Select the necessary
const formData = document.querySelector('#formValidation');


// Function to check the input
const formSubmission = (event) => {
  event.preventDefault()
  // Select the Input field Value
  const fullName = document.querySelector('#fullName').value;
  const mealName = document.querySelector('#mealName').value;
  const email = document.querySelector('#email').value;
  const orderId = document.querySelector('#orderId').value;
  const phoneNumber = document.querySelector('#phoneNumber').value;
  const customerAddress = document.querySelector('#customerAddress').value;



  //! CHECKS FOR THE INPUT

  if (fullName === '') {
    alert('Please enter your First Name');
  }
  else if (mealName === '') {
    alert('Please enter your meal Name');
  }
  else if (email === '') {
    alert('Please enter a valid email address')
  }
  else if (phoneNumber === '') {
    alert('Please enter a valid phone number');
  }
  else if (orderId === '' || orderId.length > 4 || orderId.length < 4) {
    alert('Please enter a valid Order ID, 4 numbers');
  }
  else if (phoneNumber.length < 11 || phoneNumber.length > 11) {
    alert('Please enter a valid phone number, 11 numbers');
  }
  else if (customerAddress === '') {
    alert('Please enter a valid address')
  }
  else {
    alert('Thank you for Ordering!')
  }

  const formDataObject = {
    fullName,
    mealName,
    email,
    orderId,
    phoneNumber,
    customerAddress
  }

  console.log(formDataObject)

  const formDataObjectStringJson = JSON.stringify(formDataObject);
  console.log(formDataObjectStringJson)

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: formDataObjectStringJson,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(function (data) {
      return data.json();
    })
    .then(function (response) {
      console.log(response);
      alert(`Here's your Details for the Order!
      ${response.id}
      ${response.fullName}
      ${response.mealName}
      ${response.email}
      ${response.orderId}
      ${response.phoneNumber}
      ${response.customerAddress}`)
    })

    .catch(function (error) {
      console.log(error);
    })

}

formData.addEventListener('submit', formSubmission)
