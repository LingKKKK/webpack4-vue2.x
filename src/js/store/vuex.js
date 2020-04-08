import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		config: {},
		frontconfig: {},
		payConfig: {},
		socket: '',
		userinfo: {},
		first: false,
		firstCheck: false,
		selectedCatalog: [],
		resultCatalog: [],
		saveCompanyInfo: false,
		jobSave: false,
		companySave: false,
		invoiceSave: false,
		resumeList: localStorage[`${location.host}_resumeList`] ? JSON.parse(localStorage[`${location.host}_resumeList`]) : [],
		resumeCurIdx: null,
		resumePreIdx: null,
		resumeNextIdx: null,
		companyStep: null
	},
	mutations: {
		setUserInfo(state, value) {
			state.userinfo = value;
		},
		setConfig(state, value) {
			state.config = value;
		},
		setFrontConfig(state, value) {
			state.frontconfig = value;
		},
		setPayConfig(state, value) {
			state.payConfig = value;
		},
		setSocket(state, value) {
			state.socket = value;
		},
		setFirst(state, value) {
			state.first = value;
		},
		setFirstCheck(state, value) {
			state.firstCheck = value;
		},
		setSelectedCatalog(state, value) {
			state.selectedCatalog = value;
		},
		setResultCatalog(state, value) {
			state.resultCatalog = value;
		},
		setSaveCompanyInfo(state, value) {
			state.saveCompanyInfo = value;
		},
		setJobSave(state, value) {
			state.jobSave = value;
		},
		setCompanySave(state, value) {
			state.companySave = value;
		},
		setInvoiceSave(state, value) {
			state.invoiceSave = value;
		},
		setResumeList(state, value) {
			state.resumeList = value;
			localStorage[`${location.host}_resumeList`] = JSON.stringify(value);
		},
		setResumeCurIdx(state, value) {
			var pre,
				next;
			pre = value - 1;
			next = value - 0 + 1;
			if (state.resumeList[pre]) {
				state.resumePreIdx = pre;
			} else {
				state.resumePreIdx = null;
			}
			if (state.resumeList[next]) {
				state.resumeNextIdx = next;
			} else {
				state.resumeNextIdx = null;
			}
			state.resumeCurIdx = value;
		},
		setCompanyStep(state, value) {
			state.companyStep = value;
		}
	}
})

export default store;
