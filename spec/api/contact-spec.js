var frisby = require('frisby');


describe('The cliams API', function(){
	it('should be able to find claims', function(){
		frisby.create('by all')
			.get('http://localhost:9000/claims')
				.expectStatus(200)
				.expectHeader('Content-Type', 'application/json')
				.expectJSONTypes('?', { id: '2222', firstName: 'Dennis' })
		.toss();

		frisby.create('by id')
			.get('http://localhost:9000/claims/1111')
				.expectStatus(200)
				.expectHeader('Content-Type', 'application/json')
				.expectJSON({ id: '1111', firstName: 'Jamey' })
		.toss();

		frisby.create('and throw an error if the claim isn\'t found')
			.get('http://localhost:9000/claims/999999')
				.expectStatus(404)
		.toss();
	});
	it('should be able to insert a claim', function(){
		frisby.create('using POST')
			.post('http://localhost:9000/claims', {
				"claim": {
					"adjuster": "Lucky Seven Inc.",
					"firstName": "Fred",
					"lastName": "Sanford"
				}
			}, { json: true })
				.expectStatus(200)
				.expectHeader('Content-Type', 'application/json')
				.expectJSON({ adjuster: 'Lucky Seven Inc.', firstName: 'Fred' })
		.toss();

		frisby.create('and throw an error if you try to insert a claim that already exists')
			.post('http://localhost:9000/claims', {
				"claim": {
					"id": "1111",
					"adjuster": "Lucky Seven Inc.",
					"firstName": "Fred",
					"lastName": "Sanford"
				}
			}, { json: true })
				.expectStatus(409)
				.expectHeader('Content-Type', 'application/json')
				.expectJSON({ code: 'ExistingClaim', message: 'Claim 1111 already exists. Please use PUT' })
		.toss();

		frisby.create('and throw an error if you don\'t put a valid claim in the body')
			.post('http://localhost:9000/claims', {}, { json: true })
				.expectStatus(409)
				.expectHeader('Content-Type', 'application/json')
				.expectJSON({ code: 'MissingClaim', message: 'Please include a claim in your request' })
		.toss();
	});

	it('should be able to update a claim', function(){
		frisby.create('using POST')
			.put('http://localhost:9000/claims/1111', {
				"claim": {
					"id": "1111",
					"adjuster": "new adjuster",
					"firstName": "new firstName",
					"lastName": "new lastName"
				}
			}, { json: true })
				.expectStatus(200)
				.expectHeader('Content-Type', 'application/json')
				.expectJSON({ adjuster: 'new adjuster', firstName: 'new firstName' })
		.toss();

		frisby.create('and throw an error if you don\'t put a valid claim in the body')
			.put('http://localhost:9000/claims/1111', {}, { json: true })
				.expectStatus(409)
				.expectHeader('Content-Type', 'application/json')
				.expectJSON({ code: 'MissingClaim', message: 'Please include a claim in your request' })
		.toss();

		frisby.create('and throw an error if you update a claim that doesn\'t exist')
			.put('http://localhost:9000/claims/999999', {
				"claim": {
					"id": "999999",
					"adjuster": "new adjuster",
					"firstName": "new firstName",
					"lastName": "new lastName"
				}
			}, { json: true })
				.expectStatus(404)
				.expectHeader('Content-Type', 'application/json')
				.expectJSON({ code: 'ClaimNotFound', message: 'No matching claim found 999999' })
		.toss();

	});

	it('should be able to delete a claim', function(){
		frisby.create('using DEL')
			.delete('http://localhost:9000/claims/2222')
				.expectStatus(200)
				.expectHeader('Content-Type', 'application/json')
		.toss();

		frisby.create('should throw a 404 when deleting a claim that isn\'t found')
			.delete('http://localhost:9000/claims/999999')
				.expectStatus(404)
		.toss();
	});

});



