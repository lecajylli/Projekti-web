class ImageSlider {
	constructor(slider) {
		this.q = this.q.bind(this)
		this.toggleAnimation = this.toggleAnimation.bind(this)
		this.changePos = this.changePos.bind(this)
		this.updateArrowVisibility = this.updateArrowVisibility.bind(this)
		this.onRightArrowClick = this.onRightArrowClick.bind(this)
		this.onLeftArrowClick = this.onLeftArrowClick.bind(this)

		this.slider = slider

		if (!slider.dataset.currentImage) {
			slider.dataset.currentImage = "0"
		}

		this.currentImageId = parseInt(slider.dataset.currentImage)

		this.rightArrow = this.q('.arrow.right')
		this.leftArrow = this.q('.arrow.left')
		this.sliderInner = this.q('.slider-inner')

		this.maxImageId = this.sliderInner.children.length - 1

		this.rightArrow.addEventListener('click', this.onRightArrowClick)
		this.leftArrow.addEventListener('click', this.onLeftArrowClick)

		this.updateArrowVisibility()
		this.toggleAnimation()
		this.changePos(this.currentImageId)
		setTimeout(this.toggleAnimation, 10)

	}

	q(selector) {
		return this.slider.querySelector(selector)
	}

	toggleAnimation() {
		this.sliderInner.classList.toggle('noanim') 
	}

	changePos(imageId) {
		let percentage = imageId * 100


		this.sliderInner.style.left = -percentage.toString() + "%"

		this.slider.dataset.currentImage = this.currentImageId.toString()
	}

	updateArrowVisibility() {
		if (this.currentImageId == this.maxImageId) {
			this.rightArrow.style.visibility = "hidden"
		} 
		else {
			this.rightArrow.style.visibility = "visible"
		}
		if (this.currentImageId == 0) {
			this.leftArrow.style.visibility = "hidden"
		}
		else {
			this.leftArrow.style.visibility = "visible"
		}
	}

	onRightArrowClick(e) {
		this.currentImageId += 1
		if (this.currentImageId > this.maxImageId) {
			this.currentImageId = this.maxImageId
		}
		else {
			this.changePos(this.currentImageId)
			this.updateArrowVisibility()	
		}

	}

	onLeftArrowClick(e) {
		this.currentImageId -= 1
		if (this.currentImageId < 0) {
			this.currentImageId = 0
		}
		else {
			this.changePos(this.currentImageId)
			this.updateArrowVisibility()
		}
	}
}

