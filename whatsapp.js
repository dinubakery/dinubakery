
const myModal = new bootstrap.Modal('#staticBackdrop', {
    keyboard: false
  })
  
  
  
  // Get all elements with the class name "btn"
  const btns = document.querySelectorAll('.buy');
  
  // Iterate through the elements and add a click event listener to each
  btns.forEach(btn => {
    btn.addEventListener('click', function() {
      myModal.show();
      // Find the child div with the data-attrib-msg attribute
      const childDiv = this.querySelector('[data-msg]');
  
      // Check if the child div exists
      if (childDiv) {
        // Get the value of the data-attrib-msg attribute
        const message = "I am interested in "+childDiv.getAttribute('data-msg');
        
  
  
  
        // Get the div element by its id
  const bgggDiv = document.getElementById('order');
  
  // Set the inner HTML of the div
  bgggDiv.innerHTML = message;
  
  
  
      }
    });
  });
  
  
  
  
  
  
    // Get the button element by its id
  const whatsappButton = document.getElementById('whatsapp');
  
  // Add a click event listener to the button
  whatsappButton.addEventListener('click', function() {
    // This function will be executed when the button is clicked
    
    myModal.hide();
    debugger;
  
    const myDiv = document.getElementById('order');
  
  // Get the inner HTML of the div
  
    const longMessage = myDiv.innerHTML;
  
    // Encode the message for use in the URL
    const encodedMessage = encodeURIComponent(longMessage);
  
    // Create the WhatsApp URL with the message parameter
    // const whatsappURL = `whatsapp://send?text=${encodedMessage}`;
  
    const whatsappURL = `https://wa.me/+919497026070?text=${encodedMessage}`;
    
    // Open WhatsApp with the message
    window.location.href = whatsappURL;
  
  
    // You can add your desired code to handle the click event here
  });
  
  
  