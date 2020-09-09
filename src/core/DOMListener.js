import {capitalize} from '@core/utils'


export class DOMListener {
	consructor($root, listeners = []) {
		console.log($root)
		if (!$root) {
			throw new Error('No root provided for DOMListener')
		}
		this.$root = $root
		this.listeners = listeners
	}

	initDOMListeners() {
		// console.log(this.$root.$el)
		this.listeners.forEach(listener => {
			const methodName = getMethodName(listener)
			if(!this[methodName]) {
				throw new Error(`Method ${listener} is not implemented in ${this.name}.js`)
			}

			// method on from dom, binding context not to loose
			this[methodName] = this[methodName].bind(this)
			this.$root.on(listener, this[methodName])

		})

	}

	removeDOMListeners() {
		this.listeners.forEach(listener => {
			const methodName = getMethodName(listener)
			this.$root.off(listener, this[methodName])
		})
	}
}


function getMethodName(eventName) {
	return 'on' + capitalize(eventName)
}