import {makeAutoObservable, set} from 'mobx'
import AuthService from '../services/AuthService'
import axios from 'axios'
import { API_URL } from '../http'

export default class Store {
    user = {}
    isAuth = false
    isLoading = false


    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool) {
        this.isAuth = bool
    }

    setUser(user) {
        this.user = user
    }

    setLoading(bool) {
        this.isLoading = bool
    }


    async Login(email, password, setLoading, setBtnActive) {
        setLoading(true)
        setBtnActive(false)
        try {
            const response = await AuthService.login(email, password)
            localStorage.setItem('access', response.data.access)
            this.setUser(response.data.user)
            console.log(this.user)
            this.setAuth(true)
            setLoading(false)
            setBtnActive(true)
        } catch (e) {
            console.log(e)
            setLoading(false)
            setBtnActive(true)
        }
    }

    async Registration(username, email, password, setConfirmation, setLoading, setBtnActive) {
        setLoading(true)
        setBtnActive(false)
        try {
            const response = await AuthService.registration(username, email, password)
            setConfirmation(true)
            setLoading(false)
            setBtnActive(false)
        } catch (e) {
            console.log(e)
            setLoading(false)
            setBtnActive(true)
        }
    }

    async Confirmation(email, code, setLoading, setConfirmation, setBtnActive, MesAgree, PersAgree) {
        setBtnActive(false)
        setLoading(true)
        try {
            const response =  await AuthService.confirm(email, code)
            console.log(response)
            localStorage.setItem('access', response.data.access)
            this.setAuth(true)
            setLoading(false)
            setBtnActive(true)
            MesAgree(false)
            PersAgree(false)
        } catch (e) {
            console.log(e)
            setConfirmation(false)
            setLoading(false)
            setBtnActive(true)
            MesAgree(false)
            PersAgree(false)
        }
    }

    async checkAuth() {
        this.setLoading(true)
        try {
            const response = await axios.get(`${API_URL}/user/refresh`, {withCredentials: true}
            )
            this.setAuth(true)
        } catch (e) {
            console.log(e)
        } finally {
            this.setLoading(false)
        }
    }



}