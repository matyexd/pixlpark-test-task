import sha_1 from 'js-sha1'

export default function sha1(data) {
	let hash = sha_1.create()
	hash.update(data)
	return hash.hex()
};