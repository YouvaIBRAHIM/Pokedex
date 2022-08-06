export function initServiceWorker() {
        let deferred_prompt;

		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('../../sw.js')
			.then(function(registration) {
				console.log("serviceWorker registered")
			})
			window.addEventListener('beforeinstallprompt', (event) => {
				event.preventDefault();
				deferred_prompt = event;
				return false;
			})
			
		} else {
			console.log('Service workers are not supported.');
		}

}