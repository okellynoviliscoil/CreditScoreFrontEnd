var requestType;
$(function () {
	$('input:radio[name=RequestType]').change(function () {
	    requestType = getFieldValue(this);
		$("[class$=Only]").hide();
		$("[class$=" + requestType + "Only]").show();
	});
	$('input:radio[name=IdentityNumberTypeCode]').change(function () {
	    IdentityNumberTypeCode = getFieldValue(this);
	    if(IdentityNumberTypeCode == "2"){
	        $("#CountryCodeContainer").show();
	        $("#LatinFirstName").parent().show();
	        $("#LatinLastName").parent().show();
	        $("#FirstName").parent().hide();
	        $("#LastName").parent().hide();
	    }else{
	        $("#CountryCodeContainer").hide();
	        $("#LatinFirstName").parent().hide();
	        $("#LatinLastName").parent().hide();
	        $("#FirstName").parent().show();
	        $("#LastName").parent().show();
	     }
	});
	$('input:radio[name=RequestType]').change();
    $('input:radio[name=IdentityNumberTypeCode]').change();
	$.fn.datepicker.languages['he-IL'] = {
		format: 'yyyy-mm-dd',
		days: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
		daysShort: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'],
		daysMin: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'],
		months: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
		monthsShort: ['ינו', 'פבר', 'מרץ', 'אפר', 'מאי', 'יונ', 'יול', 'אוג', 'ספט', 'אוק', 'נוב', 'דצמ'],
		weekStart: 0,
		startView: 0,
		yearFirst: true,
		yearSuffix: ''
	};
	$('.docs-date').datepicker({
		autoHide: true,
		format: 'yyyy-mm-dd',
		zIndex: 2048,
		language: 'he-IL'
	});
	$('#CountryCode').select2({
		language: "he",
		dropdownParent: $("#CountryCodeContainer"),
		dir: 'rtl',
		templateResult: formatCountry,
		templateSelection: formatCountry
	});
	$('#Designation').select2({
		language: "he",
		dropdownParent: $("#DesignationContainer"),
		dir: 'rtl'
	});
	$('#ApplicationContractType').select2({
		language: "he",
		dropdownParent: $("#ApplicationContractTypeContainer"),
		dir: 'rtl'
	});
	$('#submit').click(function (e) {
		var url = "http://localhost:5050/api/dnb/" + requestType + "?";
		url += "ts=" + Date.now().toString();
		if (getFieldValueByName("IdentityNumberTypeCode") == "2") {
		    url += getURLParamByFieldName('CountryCode');
		    url += getURLParamByFieldName('LatinFirstName');
		    url += getURLParamByFieldName('LatinLastName');
		}
		url += getURLParamByFieldName('CreditAmount');
		url += getURLParamByFieldName('Designation');
		url += getURLParamByFieldName('FirstName');
		url += getURLParamByFieldName('IdentityNumber');
		url += getURLParamByFieldName('IdentityNumberTypeCode');
		url += getURLParamByFieldName('LastName');
		url += getURLParamByFieldName('PaymentFrequencyInAYear');
		url += getURLParamByFieldName('PlannedMonthlyPayment');
		url += getURLParamByFieldName('PlannedStartingDate');
		$("." + requestType + "Only :input").each(function (index) {
			url += getURLParamByFieldName(this.name)
		})
		window.open(url, '_blank');
	})

		$('#submitS').click(function (e) {
		var url = "http://localhost:5050/api/dnb/" + requestType + "?";
		url += "ts=" + Date.now().toString();
		if (getFieldValueByName("IdentityNumberTypeCode") == "2") {
		    url += getURLParamByFieldName('CountryCode');
		    url += getURLParamByFieldName('LatinFirstName');
		    url += getURLParamByFieldName('LatinLastName');
		}
		url += getURLParamByFieldName('CreditAmount');
		url += getURLParamByFieldName('Designation');
		url += getURLParamByFieldName('FirstName');
		url += getURLParamByFieldName('IdentityNumber');
		url += getURLParamByFieldName('IdentityNumberTypeCode');
		url += getURLParamByFieldName('LastName');
		url += getURLParamByFieldName('PaymentFrequencyInAYear');
		url += getURLParamByFieldName('PlannedMonthlyPayment');
		url += getURLParamByFieldName('PlannedStartingDate');
		$("." + requestType + "Only :input").each(function (index) {
			url += getURLParamByFieldName(this.name)
		})
		$("#resultFrame").attr('src',url);
	})
});
function formatCountry(country) {
	if (!country.id) {
		return country.text;
	}
	var $country = $(
			'<span><span class="ml-10px g22border flag-icon' + getFlagIconClassByDnBCountryCode(country.element.value) + '"/>' + country.text + '</span>');
	return $country;
};
function getFlagIconClassByDnBCountryCode(DnBCountryCode){
    var ISO_A2 = getISO_A2ByDnBCountryCode(DnBCountryCode);
    if(ISO_A2 != ""){
        return " flag-icon-" + ISO_A2;
    }else{
        return "";
    }
};
function getISO_A2ByDnBCountryCode(DnBCountryCode){
    if(DnBCountryCodesToISO_A2Map[DnBCountryCode]){
        return DnBCountryCodesToISO_A2Map[DnBCountryCode];
    }else{
        return "";
    }
};
var DnBCountryCodesToISO_A2Map = {
	"9": "am",
	"10": "cy",
	"15": "tr",
	"30": "lb",
	"40": "jo",
	"50": "iq",
	"51": "kw",
	"60": "sa",
	"62": "om",
	"63": "qa",
	"70": "ye",
	"100": "af",
	"110": "in",
	"111": "pk",
	"114": "np",
	"115": "bt",
	"116": "bd",
	"121": "th",
	"122": "sg",
	"123": "kh",
	"127": "my",
	"130": "id",
	"131": "ph",
	"135": "gu",
	"140": "cn",
	"141": "hk",
	"150": "mn",
	"152": "kp",
	"153": "kr",
	"160": "jp",
	"200": "ma",
	"203": "mr",
	"204": "sn",
	"205": "gm",
	"206": "gw",
	"207": "gn",
	"208": "sl",
	"209": "lr",
	"210": "dz",
	"211": "ne",
	"212": "ml",
	"213": "ng",
	"215": "tg",
	"216": "gh",
	"220": "tn",
	"230": "ly",
	"240": "eg",
	"241": "sd",
	"242": "td",
	"244": "cm",
	"249": "er",
	"250": "et",
	"251": "dj",
	"252": "so",
	"253": "ke",
	"254": "ug",
	"259": "zw",
	"261": "zm",
	"262": "mz",
	"263": "mw",
	"269": "bz",
	"271": "bw",
	"272": "ls",
	"274": "na",
	"275": "mg",
	"276": "mu",
	"281": "ao",
	"284": "rw",
	"285": "bi",
	"287": "ga",
	"289": "sc",
	"301": "lt",
	"302": "lv",
	"303": "ee",
	"304": "by",
	"305": "ua",
	"306": "ru",
	"308": "ge",
	"309": "ge",
	"310": "pl",
	"311": "az",
	"312": "kz",
	"313": "tm",
	"314": "tj",
	"315": "uz",
	"400": "ro",
	"411": "si",
	"412": "hr",
	"415": "rs",
	"416": "me",
	"420": "bg",
	"430": "gr",
	"440": "al",
	"500": "de",
	"510": "at",
	"520": "ch",
	"521": "li",
	"531": "cz",
	"532": "sk",
	"540": "hu",
	"550": "fi",
	"560": "se",
	"570": "no",
	"580": "dk",
	"600": "ie",
	"610": "nl",
	"620": "be",
	"630": "lu",
	"641": "mc",
	"650": "pt",
	"660": "es",
	"661": "gi",
	"662": "ad",
	"670": "it",
	"671": "sm",
	"673": "mt",
	"700": "ca",
	"710": "us",
	"711": "pr",
	"720": "mx",
	"721": "ni",
	"723": "cr",
	"724": "sv",
	"725": "hn",
	"726": "gt",
	"730": "cu",
	"731": "bm",
	"732": "bb",
	"733": "ky",
	"735": "bs",
	"736": "ht",
	"737": "jm",
	"740": "pa",
	"751": "dm",
	"752": "ms",
	"753": "gd",
	"756": "mq",
	"757": "gp",
	"758": "ag",
	"761": "tt",
	"770": "co",
	"780": "ec",
	"790": "pe",
	"810": "br",
	"812": "gy",
	"813": "sr",
	"820": "uy",
	"830": "ar",
	"831": "py",
	"840": "cl",
	"861": "sb",
	"862": "nc",
	"867": "mh",
	"869": "pw",
	"870": "nz",
	"871": "vu",
	"872": "tv",
	"873": "ki",
	"881": "to",
	"882": "ws",
	"886": "nr",
    "887": "ck",
	"888": "fj",
	"889": "pf",
	"900": "il"
}
