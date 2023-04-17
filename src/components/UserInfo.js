export default class UserInfo {
	constructor({nameUserInfo, captionUserInfo}) {
		this._nameUserInfo = document.querySelector(nameUserInfo);
		this._captionUserInfo = document.querySelector(captionUserInfo);
	}
	getUserInfo() {
		return {name: this._nameUserInfo.textContent, caption: this._captionUserInfo.textContent};
	}
	setUserInfo({name, caption}) {
		this._nameUserInfo.textContent = name;
		this._captionUserInfo.textContent = caption;
	}
}