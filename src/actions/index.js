const URL = `http://localhost:3000`

export function subscribeUser(email) {
	console.log(email)

	fetch(`${URL}/subscribers`, {
		method: 'POST',
		headers: {
	   'Accept': 'application/json',
	   'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			subscriber: {
				email: email
			}
		}),
	})
	.then(function(response) {
		console.log(response)
		return response.json()
	}).catch((error) => {
   	return error
  })
}