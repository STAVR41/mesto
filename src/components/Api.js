export default class Api {
    constructor(options) {
        this._options = options;
        this._url = this._options.baseUrl;
        this._headers = this._options.headers;
    }
    dataHeader() {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers,
        })
            .then(res => res.json())
    }
    setAvatarUser(avatar) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({ avatar })
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    }
    setProfileUser(name, about) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({ name, about })
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    }
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            headers: this._headers
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    }
    addNewCard(name, link) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ name, link })
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    }
    addLike(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: 'PUT',
            headers: this._headers,
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    }
    removeLike(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    }
    deleteCard(id) {
        return fetch(`${this._url}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    }

}                                                                                           