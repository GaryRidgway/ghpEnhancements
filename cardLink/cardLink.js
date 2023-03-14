(function(){

	const link = '<svg fill="currentColor" class="link"xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.387 4.33c-2.1 0-3.6 1.9-5.1 3.3.2 0 .5-.1.8-.1.5 0 1 .1 1.5.3.8-.8 1.6-1.7 2.8-1.7.6 0 1.3.3 1.8.7 1 1 1 2.6 0 3.6l-2.6 2.6c-.4.4-1.2.7-1.8.7-1.4 0-2.1-.9-2.6-2l-1.3 1.3c.8 1.5 2 2.6 3.8 2.6 1.2 0 2.3-.5 3-1.3l2.6-2.6c.9-.9 1.5-2 1.5-3.3-.2-2.2-2.2-4.1-4.4-4.1zm-4.3 12.1l-.9.9c-.4.4-1.2.7-1.8.7-.6 0-1.3-.3-1.8-.7-1-1-1-2.7 0-3.6l2.6-2.6c.4-.4 1.2-.7 1.8-.7 1.4 0 2.1 1 2.6 2l1.3-1.3c-.8-1.5-2-2.6-3.8-2.6-1.2 0-2.3.5-3 1.3l-2.6 2.6c-1.7 1.7-1.7 4.4 0 6 1.6 1.6 4.4 1.7 5.9 0l1.9-1.9c-.3.1-.6.1-.9.1-.5 0-.9 0-1.3-.2z"/></svg>';

	const linkActivated = '<svg fill="currentColor" class="link-activated" xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M13.5 23.25h1.5v-6h6v-1.5h-7.5v7.5z"/><path d="M10.5 8.25v-7.5h-1.5v6h-6v1.5h7.5z"/><path d="M3.689 20.371l-0.060-0.060c-0.852-0.852-1.379-2.030-1.379-3.33s0.527-2.478 1.38-3.33l3.525-3.525h-2.121l-2.464 2.464c-1.124 1.124-1.819 2.676-1.819 4.391s0.695 3.267 1.819 4.391l0.060 0.060c1.125 1.122 2.677 1.816 4.391 1.816s3.267-0.694 4.391-1.816l0.214-0.214v-2.121l-1.275 1.275c-0.853 0.851-2.030 1.377-3.33 1.377s-2.477-0.526-3.33-1.377l0 0z"/><path d="M21.431 2.629l-0.060-0.060c-2.421-2.421-6.361-2.421-8.782 0l-0.214 0.214v2.121l1.275-1.275c0.853-0.851 2.030-1.377 3.33-1.377s2.477 0.526 3.33 1.377l0.060 0.060c0.852 0.852 1.379 2.030 1.379 3.33s-0.527 2.478-1.38 3.33l-3.525 3.525h2.121l2.464-2.464c1.124-1.124 1.819-2.676 1.819-4.391s-0.695-3.267-1.819-4.391v0z"/></svg>';
	
	function createLinks() {
		const cards = document.querySelectorAll('[data-testid="board-view-column-card"]');
		cards.forEach(function(card) {
			console.log(card);
			if (isElementInViewport(card)) {
				const board_id = card.getAttribute('data-board-card-id');
				const trigger = card.querySelector('.js-context-menu-trigger');
				const linkString = window.location.origin + window.location.pathname + '?card_link=' + board_id;
		
				const button = document.createElement('button');
				button.innerHTML = link + linkActivated;
				button.classList.add('link-copy');
				button.onclick = function() {
					copyToClipboard(linkString);
				};
		
				trigger.parentElement.appendChild(button);
			}
		});
	}

	function loadCardLink() {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const card_link = urlParams.get('card_link');
		if(card_link !== null) {
			const card = document.querySelector('[data-dnd-drag-id="' + card_link + '"]');
			card.focus();
		}
	}
	
	function copyToClipboard(String) {
		navigator.clipboard.writeText(String);
	}
	
	window.onload = function() {
		loadCardLink();
		createLinks();
	};

	function isElementInViewport (el) {
	
		var rect = el.getBoundingClientRect();
	
		return (
			rect.top >= 0 - rect.height &&
			rect.left >= 0 - rect.width &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + rect.height && /* or $(window).height() */
			rect.right <= (window.innerWidth || document.documentElement.clientWidth) + rect.width /* or $(window).width() */
		);
	}
})();
