// util for automatizing dom interactions, custom "library" like jquery

export class Dom {
	constructor(selector) {
		// choose node and set to current
		this.$el = typeof selector == 'string' ? 
			document.querySelector(selector) :
			selector
	}

	// get or set innerHTML
	html(html) {
		if (typeof html === 'string') {
			this.$el.innerHTML = html
			// returm to make it possible to use methods chain
			return this
		}
		return this.$el.innerHTML.trim()
	} 

	on(eventType, callback) {
		this.$el.addEventListener(eventType, callback)
	}

	off(eventType, callback) {
		this.$el.removeEventListener(eventType, callback)
	}

	// clear inner html
	clear() {
		this.html('')
		return this
	}

	// append node to current element
	append(node) {
		if (node instanceof Dom) {
			node = node.$el
		}
		if (Element.prototype.append) {
			this.$el.append(node)
		} else {
			this.$el.appendChild(node)
		}
		return this
	}
}

// creating instance
export function $(selector) {
	return new Dom(selector)
}

// cerate dom node
$.create = (tagName, classes = '') => {
	const el = document.createElement(tagName)
	if (classes) {
		el.classList.add(classes)
	}
	//wrap to use as class instance
	return $(el)
}