const button = document.querySelector('.btn');
const warningMess = document.querySelector('#warningMess');

button.addEventListener('click', (e) => {
	validateEmail();

	// Delete the message after 3 seconds
	setTimeout(() => {
		warningMess.textContent = '';
	}, 3000);

	e.preventDefault();
});

function validateEmail() {
	const mail = document.querySelector('.email__input').value;
	const pattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

	if (mail.length === 0) {
		warningMess.textContent = 'Oops! Please add your email';
	} else if (!mail.match(pattern)) {
		warningMess.textContent = 'Oops! Please check your email';
	} else {
		warningMess.textContent = 'Thank you for subscribing!';
		warningMess.style.color = 'green';
	}

	// Clear input fields
	document.querySelector('.email__input').value = '';
}
