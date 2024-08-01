function changeProductResStruct(data = {}) {
	/*
	*	Extract nested currency objects to one level up to be consistent with the existing interface.
	*	https://app.clickup.com/t/1xw4c6t
	*	https://pipedrive.readme.io/docs/changelog#september-2021
	*/
	data.prices ? (data.prices = Object.values(data.prices)) : null;
	return data;
}