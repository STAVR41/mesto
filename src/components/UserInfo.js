export default class UserInfo {
	constructor(data) {
		this._imgUserInfo = document.querySelector(data.imgUserInfo);
		this._nameUserInfo = document.querySelector(data.nameUserInfo);
		this._captionUserInfo = document.querySelector(data.captionUserInfo);
	}
	getUserInfo() {
		return { name: this._nameUserInfo.textContent, caption: this._captionUserInfo.textContent };
	}
	setUserInfo(userData) {
		userData.name ? this._nameUserInfo.textContent = userData.name : this._nameUserInfo.textContent;
		userData.about ? this._captionUserInfo.textContent = userData.about : this._captionUserInfo.textContent;
		userData.avatar ? this._imgUserInfo.src = userData.avatar : this._imgUserInfo.src;
	}
}