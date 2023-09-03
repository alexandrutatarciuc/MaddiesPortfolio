export function isFirstLoad(pageId: string): boolean {
	const key = `${pageId}_hasLoadedBefore`;
	const hasLoadedBefore = sessionStorage.getItem(key);

	if (hasLoadedBefore === null) {
		sessionStorage.setItem(key, 'true');
		return true;
	}

	return false;
}
