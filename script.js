//new members form pop-up
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('new-member-form-js');
    const submitBtn = document.getElementById('submit-new-member-btn');
    const reviewModal = document.getElementById('confirmation-modal');
    const successModal = document.getElementById('success-modal');
    const modalOutput = document.getElementById('member-details-output');
    const closeReviewBtn = reviewModal.querySelector('.close-btn');
    const finalConfirmBtn = document.getElementById('final-confirm-btn');

    function closeReviewModal() {
        reviewModal.style.display = 'none';
    }

    function openSuccessModal() {
        successModal.style.display = 'block';
    }

    function closeSuccessModal() {
        successModal.style.display = 'none';
    }

    // 1. Handle initial button click (Validation and Pop-up Display)
    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            if (form.checkValidity()) {
                const fullName = form.querySelector('#name').value;
                const emailAddress = form.querySelector('#email').value;
                const phoneNumber = form.querySelector('#phone').value || 'Not Provided';

                modalOutput.innerHTML = `
                    <p><strong>Full Name:</strong> ${fullName}</p>
                    <p><strong>Email:</strong> ${emailAddress}</p>
                    <p><strong>Phone:</strong> ${phoneNumber}</p>
                `;

                reviewModal.style.display = 'block';
            } else {
                form.reportValidity();
            }
        });
    }

    // 2. Handle Final Confirmation (Success Pop-up & Timed Redirect)
    if (finalConfirmBtn) {
        finalConfirmBtn.addEventListener('click', function() {
            
            // 1. Close the review modal immediately
            closeReviewModal();
            
            // 2. Display the success message modal
            openSuccessModal();
            
            // 3. Submit the form in the background (Optional, only if the server needs the data)
            // Note: This will not redirect the page because we are controlling the redirect with setTimeout.
            // If the server submission is critical, you should use the Fetch method, but without error reporting.
            
            // 4. Set the timer for 5 seconds to redirect to the home page (index.html)
            setTimeout(() => {
                closeSuccessModal();
            }, 2500); // 5000 milliseconds = 5 seconds
        });
    }

    // 3. Handle closing the review modal
    if (closeReviewBtn) {
        closeReviewBtn.addEventListener('click', closeReviewModal);
    }
    
    // Close when clicking outside the review modal
    window.addEventListener('click', function(event) {
        if (event.target === reviewModal) {
            closeReviewModal();
        }
    });
});



//email 
document.addEventListener('DOMContentLoaded', function() {
    const emailElement = document.getElementById('email-link-js');
    const emailAddress = emailElement.textContent;

    emailElement.addEventListener('click', function() {
        window.location.href = 'mailto:' + emailAddress;
    });
}); 



//send prayer request
document.addEventListener('DOMContentLoaded', function() {

    const WHATSAPP_NUMBER = '2349029845914'; 
    
    const form = document.getElementById('connect-form-js');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            // 1. Prevent the default browser submission
            event.preventDefault(); 

            // 2. Collect the data from the form fields
            const fullName = document.getElementById('connect-name').value;
            const subject = document.getElementById('connect-subject').value;
            const message = document.getElementById('connect-message').value;
            const emailAddress = document.getElementById('connect-email').value; // Include email for reference

            // 3. Construct the message body for WhatsApp
            const whatsappMessage = 
                `*New Contact Form Message*\n` +
                `*From:* ${fullName} (${emailAddress})\n` +
                `*Subject:* ${subject}\n\n` +
                `*Message:*\n${message}`;

            // 4. URL-encode the message to make it safe for a URL
            const encodedMessage = encodeURIComponent(whatsappMessage);

            // 5. Construct the full WhatsApp API link
            // The URL format is: https://wa.me/<number>?text=<encoded_message>
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

            // 6. Open the WhatsApp URL in a new window/tab
            window.open(whatsappUrl, '_blank');
            
            // 7. Optional: Clear the form and alert the user that they need to finalize the message
            alert('Glad to have you back. God will grant all your heart desires in Jesus name, Amen!');
            form.reset();
        });
    }
});


//vision and ministries pop-up
document.addEventListener('DOMContentLoaded', function() {
    const visionBtn = document.getElementById('vision-btn');
    const ministriesBtn = document.getElementById('ministries-btn');

    const visionModal = document.getElementById('vision-modal');
    const ministriesModal = document.getElementById('ministries-modal');

    const visionClose = visionModal.querySelector('.close-btn');
    const ministriesClose = ministriesModal.querySelector('.close-btn');

    function openModal(modal) {
        modal.style.display = 'block';
    }

    function closeModal(modal) {
        modal.style.display = 'none';
    }

    if (visionBtn) {
        visionBtn.addEventListener('click', () => openModal(visionModal));
    }
    if (ministriesBtn) {
        ministriesBtn.addEventListener('click', () => openModal(ministriesModal));
    }

    if (visionClose) {
        visionClose.addEventListener('click', () => closeModal(visionModal));
    }
    if (ministriesClose) {
        ministriesClose.addEventListener('click', () => closeModal(ministriesModal));
    }

    window.addEventListener('click', function(event) {
        if (event.target === visionModal) {
            closeModal(visionModal);
        }
        if (event.target === ministriesModal) {
            closeModal(ministriesModal);
        }
    });
}); 


//testimony button pop up
// Get all necessary elements for the testimony form modal
const testimonyModal = document.getElementById('testimony-modal');
const testimonyTrigger = document.getElementById('share-testimony-trigger');
const testimonyCloseBtn = document.querySelector('#testimony-modal .testimony-close-btn');
const testimonyForm = document.getElementById('testimony-form-js');

// Function to open the modal
if (testimonyTrigger) {
    testimonyTrigger.addEventListener('click', (event) => {
        event.preventDefault(); // Stop the link from navigating
        testimonyModal.style.display = 'block';
    });
}

// Function to close the modal using the 'x' button
if (testimonyCloseBtn) {
    testimonyCloseBtn.addEventListener('click', () => {
        testimonyModal.style.display = 'none';
        testimonyForm.reset(); // Optionally clear the form on close
    });
}

// Function to close the modal if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === testimonyModal) {
        testimonyModal.style.display = 'none';
        testimonyForm.reset(); 
    }
});

// Form Submission Handler
if (testimonyForm) {
    testimonyForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop default form submission/page reload
        
        // 1. Simulate data handling (In a real application, you would send this via AJAX/Fetch)
        console.log('Testimony Data Sent:', new FormData(testimonyForm));

        // 2. Hide the modal
        testimonyModal.style.display = 'none';

        // 3. Clear the form
        testimonyForm.reset();

        // 4. Show the "Sent" alert
        alert('Testimony Sent! Thank you for sharing your story.'); 
        
        // Note: For better UX, you could replace the browser alert() with a custom success modal.
    });
}