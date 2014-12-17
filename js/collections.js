var Person = function(name, children) {
    this.name = name;
    this.children = ko.observableArray(children);
 
    this.addChild = function() {
        this.children.push("New child");
    }.bind(this);
}

var viewModel = {
    people: [
        new Person("John", ["Arnie", "Anders", "John"]),
        new Person("Anna", ["Brianna", "Barbie", "Briana"]),
        new Person("Myke", ["Carlile", "Cleopatra", "Mark"])
        ],
};
 
ko.applyBindings(viewModel);
