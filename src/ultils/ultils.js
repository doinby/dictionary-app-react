export function getDisplayStyle(object) {
	if (!object?.length) {
		return 'hidden';
	}

	return !object ? 'hidden' : 'block';
}
