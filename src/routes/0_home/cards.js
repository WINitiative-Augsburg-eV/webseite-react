
import { scroll, animate } from "https://cdn.skypack.dev/motion"

const $cardsWrapper = document.querySelector('#cards');
const $cards = document.querySelectorAll('.cardy');

const numCards = $cards.length;

$cards.forEach(($card, index0) => {

	const index = index0 + 1;
	const reverseIndex = numCards - index0;
	const reverseIndex0 = numCards - index;

	// Extra padding per card, so you can see the other stacked cards underneath at the top
	$card.style.paddingTop = `calc(${index} * var(--card-top-offset))`;

	// Scroll-Linked Animation
	scroll(
		animate($card, {
			// Earlier cards shrink more than later cards
			scale: [ 1, 1 - (0.05 * reverseIndex0)],
			opacity: [ 1, 1 - (0.01 * reverseIndex0)],
		}), {
			// Each card should only shrink when it’s at the top.
			// We can’t use exit on the els for this (as they are sticky)
			// but can track $cardsWrapper instead.
			target: $cardsWrapper,
			offset: [`${index0 / numCards * 100}%`, `${index / numCards * 100}%`],
		}
	);
});
