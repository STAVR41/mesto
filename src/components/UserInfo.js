export default class UserInfo {
	constructor(data) {
		this._imgUserInfo = document.querySelector(data.imgUserInfo);
		this._nameUserInfo = document.querySelector(data.nameUserInfo);
		this._captionUserInfo = document.querySelector(data.captionUserInfo);
	}
	getUserInfo() {
		return { name: this._nameUserInfo.textContent, caption: this._captionUserInfo.textContent };
	}
	setUserInfo(obj) {
		this._nameUserInfo.textContent = obj.name;
		this._captionUserInfo.textContent = obj.about;
		this._imgUserInfo.src = obj.avatar;
	}
}