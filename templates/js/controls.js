var viewModel = {
	stringValue: ko.observable("Type something"),
	passwordValue: ko.observable("CognitsItsAwesome"),
	booleanValue: ko.observable(true),
	optionValues : ["Alpha", "Beta", "Gamma"],
    selectedOptionValue : ko.observable("Gamma"),
    multipleSelectedOptionValues : ko.observable(["Alpha"]),
    radioSelectedOptionValue : ko.observable("Beta")
};
ko.applyBindings(viewModel);
