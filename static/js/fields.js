function getFieldValueById_old(id, multiValueSep) {
	$field = $("#" + id);
	oField = $field[0];
	switch (oField.type) {
	case "select-one":
		return ($field.children('option:selected').val());
		break;
	case "checkbox":
		var checkedValues = [];
		var checked = $("input[type='checkbox'][name='" + oField.name + "']:checked");
		if (checked.length == 0)
			return "";
		for (var i = 0; i < checked.length; i++) {
			checkedValues.push(checked[i].value)
		}
		if (multiValueSep) {
			return (checkedValues.join(multiValueSep))
		} else {
			return (checkedValues);
		}
		break;
	case "radio":
		var checked = $("input[type='radio'][name='" + oField.name + "']:checked");
		if (checked.length == 0)
			return "";
		return (checked.val());
		break;
	case "text":
		return ($field.val());
		break;
	default:
		return "";
	}
}

function getFieldValueByName(name, multiValueSep) {
	$field = $("[name='" + name + "']");
	return getFieldValue($field[0], multiValueSep)
}

function getFieldValueById(id, multiValueSep) {
	$field = $("#" + id);
	return getFieldValue($field[0], multiValueSep)
}

function getFieldValue(oField, multiValueSep) {
	switch (oField.type) {
	case "select-one":
		return $(oField).children('option:selected').val();
		break;
	case "checkbox":
		var checkedValues = [];
		var checked = $("input[type='checkbox'][name='" + oField.name + "']:checked");
		if (checked.length == 0)
			return "";
		for (var i = 0; i < checked.length; i++) {
			checkedValues.push(checked[i].value)
		}
		if (multiValueSep) {
			return (checkedValues.join(multiValueSep))
		} else {
			return (checkedValues);
		}
		break;
	case "radio":
		var checked = $("input[type='radio'][name='" + oField.name + "']:checked");
		if (checked.length == 0)
			return "";
		return (checked.val());
		break;
	case "text":
		return ($(oField).val());
		break;
	default:
		return "";
	}
}

function setObjectPropertyByFieldId(o, id, caster) {
	if (caster) {
		o[id] = caster(getFieldValueById(id, ", "));
	} else {
		o[id] = getFieldValueById(id, ", ");
	}
}

function getURLParamByFieldId(id) {
	return "&" + id + "=" + getFieldValueById(id, ", ")
}

function setObjectPropertyByFieldName(o, name, caster) {
	if (caster) {
		o[id] = caster(getFieldValueByName(name, ", "));
	} else {
		o[id] = getFieldValueByName(name, ", ");
	}
}

function getURLParamByFieldName(name) {
	return "&" + name + "=" + getFieldValueByName(name, ", ")
}
