function getApiURL(accessToken, customDomain, apiDomain) {
	// for oauth connection
	if (accessToken) {
		if (apiDomain) {
			// https://pipedrive.readme.io/docs/marketplace-oauth-api
			// although, api works with a bare base url (https://domain.pipedrive.com), but subscription modules apparently don't
			return apiDomain + '/api/v1';
		} else {
			return 'https://api-proxy.pipedrive.com';
		}
	}
	// for api key
	if (customDomain) {
		return `https://${customDomain}.pipedrive.com/v1`;
	} else {
		return 'https://api.pipedrive.com/v1';
	}
}