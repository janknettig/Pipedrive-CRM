function formatNestedDates(args = []) {
	return args.map(i => {
		i.due_at = iml.formatDate(i.due_at, 'YYYY-MM-DD');
		return i;
	});
}